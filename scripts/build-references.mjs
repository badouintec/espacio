#!/usr/bin/env node
// Resolves thumbnails for data/references.json and emits js/references.data.js.
// Usage: node scripts/build-references.mjs [--refresh]
// Never throws on a dead URL: a failed source keeps its previous image or falls back.
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';
const run = promisify(execFile);

const ROOT = path.resolve(new URL('..', import.meta.url).pathname);
const DATA = path.join(ROOT, 'data/references.json');
const OUT_JS = path.join(ROOT, 'js/references.data.js');
const THUMBS = path.join(ROOT, 'assets/thumbs');
const REFRESH = process.argv.includes('--refresh');
const TIMEOUT = 15000;
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';

// Public/institutional sources get a local cached copy; media outlets are hotlinked (see .md §11).
const CACHE_HOSTS = /(\.nasa\.gov|^earth\.gov|\.gob\.mx|\.github\.io|^openscapes\.org|^luma\.com)$/;
const SKIP_IMG = /(logo|avatar|icon|sprite|pixel|track|badge|spacer|blank|1x1|banner|cookie|ads?[-_/])/i;

const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\s${name}\\s*=\\s*("([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i'));
  return m ? (m[2] ?? m[3] ?? m[4]) : null;
};
const tags = (html, re) => html.match(re) || [];

function findCandidates(html, base) {
  const out = [];
  const push = (src, source) => {
    if (!src) return;
    try { out.push({ url: new URL(src.trim(), base).href, source }); } catch {}
  };
  const metas = tags(html, /<meta\s[^>]*>/gi);
  for (const m of metas) {
    const p = (attr(m, 'property') || attr(m, 'name') || '').toLowerCase();
    if (p === 'og:image' || p === 'og:image:secure_url') push(attr(m, 'content'), 'og');
  }
  for (const m of metas) {
    const p = (attr(m, 'name') || attr(m, 'property') || '').toLowerCase();
    if (p === 'twitter:image' || p === 'twitter:image:src') push(attr(m, 'content'), 'twitter');
  }
  for (const l of tags(html, /<link\s[^>]*>/gi)) {
    if (/image_src/i.test(attr(l, 'rel') || '')) push(attr(l, 'href'), 'page');
  }
  for (const img of tags(html, /<img\s[^>]*>/gi)) {
    const src = attr(img, 'src') || attr(img, 'data-src');
    if (!src || src.startsWith('data:') || SKIP_IMG.test(src) || SKIP_IMG.test(attr(img, 'class') || '')) continue;
    const w = parseInt(attr(img, 'width') || '0', 10);
    if (w && w < 300) continue;
    push(src, 'page');
  }
  for (const l of tags(html, /<link\s[^>]*>/gi)) {
    if (/\bicon\b/i.test(attr(l, 'rel') || '')) push(attr(l, 'href'), 'favicon');
  }
  push('/favicon.ico', 'favicon');
  return out;
}

// Some .gov hosts ship incomplete TLS chains or oversized headers that Node's fetch rejects; curl (system trust store) copes.
async function get(url, ms = TIMEOUT) {
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), ms);
    try {
      const r = await fetch(url, { redirect: 'follow', signal: ctrl.signal, headers: { 'user-agent': UA, accept: '*/*' } });
      return { status: r.status, ok: r.ok, type: r.headers.get('content-type') || '', buf: Buffer.from(await r.arrayBuffer()) };
    } finally { clearTimeout(t); }
  } catch (e) {
    if (e.name === 'AbortError') throw e;
    const { stdout } = await run('curl', ['-sSL', '-m', String(ms / 1000), '-A', UA, '-w', '\n%{http_code}\n%{content_type}', '--output', '-', url], { encoding: 'buffer', maxBuffer: 64 * 1024 * 1024 });
    const s = stdout.toString('latin1');
    const i = s.lastIndexOf('\n', s.lastIndexOf('\n') - 1);
    const [status, type] = s.slice(i + 1).split('\n');
    return { status: Number(status), ok: Number(status) < 400, type: type || '', buf: stdout.subarray(0, i) };
  }
}

async function probeImage(url) {
  try {
    const r = await get(url, 40000);
    if (!r.ok || !r.type.startsWith('image/')) return null;
    if (r.buf.length < 1500) return null; // tracking pixels / broken icons
    return { buf: r.buf, type: r.type };
  } catch { return null; }
}

// Cap cached thumbnails (~1280px wide JPEG) when macOS `sips` is around; otherwise keep the original.
async function shrink(file) {
  if ((await stat(file)).size < 300 * 1024 || process.platform !== 'darwin' || /\.(svg|ico)$/.test(file)) return file;
  const out = file.replace(/\.[a-z]+$/, '.jpg');
  try { await run('sips', ['-Z', '1280', '-s', 'format', 'jpeg', '-s', 'formatOptions', '82', file, '--out', out]); if (out !== file) await run('rm', [file]); return out; } catch { return file; }
}

const extFor = (type) => ({ 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/gif': 'gif', 'image/svg+xml': 'svg', 'image/x-icon': 'ico', 'image/vnd.microsoft.icon': 'ico' }[type.split(';')[0]] || 'img');

async function resolve(ref) {
  const result = { image: ref.image, imageSource: ref.imageSource, httpStatus: undefined };
  if (ref.status === 'offline') return { ...result, image: undefined, imageSource: 'fallback', httpStatus: 'skipped' };
  let html = '', pageUrl = ref.url;
  try {
    let r = await get(pageUrl);
    result.httpStatus = r.status;
    if (r.ok && /html/i.test(r.type)) html = r.buf.toString('utf8');
    const refresh = html.match(/http-equiv=["']refresh["'][^>]*url=([^"'\s>]+)/i); // follow <meta http-equiv="refresh">
    if (refresh) { pageUrl = new URL(refresh[1], pageUrl).href; r = await get(pageUrl); if (r.ok && /html/i.test(r.type)) html = r.buf.toString('utf8'); }
  } catch (e) {
    result.httpStatus = `error: ${e.name}`;
  }
  // imageOverride: editorial image chosen by hand when og:image is a generic site brand (see data/references.json).
  const candidates = ref.imageOverride ? [{ url: ref.imageOverride, source: 'page' }] : findCandidates(html, pageUrl);
  const host = new URL(ref.url).hostname.replace(/^www\./, '');
  for (const c of candidates) {
    const img = await probeImage(c.url);
    if (!img) continue;
    if (c.source === 'favicon' && img.buf.length < 4000 && !img.type.includes('svg')) continue; // tiny favicons look bad at 16:9
    if (CACHE_HOSTS.test(host) || c.source === 'favicon') {
      await mkdir(THUMBS, { recursive: true });
      const file = path.join(THUMBS, `${ref.id}.${extFor(img.type)}`);
      await writeFile(file, img.buf);
      return { image: path.relative(ROOT, await shrink(file)), imageSource: c.source, httpStatus: result.httpStatus };
    }
    return { image: c.url, imageSource: c.source, httpStatus: result.httpStatus };
  }
  // Keep whatever we had before; otherwise fallback.
  if (ref.image && (ref.image.startsWith('assets/') ? existsSync(path.join(ROOT, ref.image)) : true)) return result;
  return { image: undefined, imageSource: 'fallback', httpStatus: result.httpStatus };
}

const refs = JSON.parse(await readFile(DATA, 'utf8'));
const results = await Promise.all(refs.map(async (ref) => {
  if (!REFRESH && ref.image && ref.imageSource && ref.imageSource !== 'fallback' && !ref.imageOverride) return ref;
  const r = await resolve(ref);
  const out = { ...ref, imageSource: r.imageSource, httpStatus: r.httpStatus };
  if (r.image) out.image = r.image; else delete out.image;
  console.log(`${ref.id.padEnd(11)} ${String(r.httpStatus).padEnd(8)} ${String(r.imageSource).padEnd(8)} ${r.image || '-'}`);
  return out;
}));

await writeFile(DATA, JSON.stringify(results, null, 2) + '\n');
await writeFile(OUT_JS, `// Generated by scripts/build-references.mjs — do not edit by hand. Source: data/references.json\nwindow.COLOQUIO_REFERENCES = ${JSON.stringify(results.map(({ httpStatus, ...r }) => r))};\n`);
const fails = results.filter(r => r.status !== 'offline' && (typeof r.httpStatus !== 'number' || r.httpStatus >= 400));
console.log(`\n${results.length} references, ${results.filter(r => r.image).length} with thumbnail, ${fails.length} unreachable: ${fails.map(f => f.id).join(', ') || 'none'}`);
