// One-off helper: for JS-rendered sites whose og:image is a generic brand (earth.gov), open the page in
// headless Chromium and print the largest editorial <img>. Paste the result into `imageOverride` in data/references.json.
// Usage: PLAYWRIGHT_PATH=<path-to-playwright-pkg> node scripts/extract-rendered-images.mjs <id> [<id>...]
import { readFile } from 'node:fs/promises';
const pw = await import(process.env.PLAYWRIGHT_PATH || 'playwright');
const refs = JSON.parse(await readFile(new URL('../data/references.json', import.meta.url), 'utf8'));
const ids = process.argv.slice(2);
const browser = await pw.chromium.launch({ channel: process.env.PW_CHANNEL || 'chrome' });
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
for (const ref of refs.filter(r => ids.includes(r.id))) {
  try {
    await page.goto(ref.url, { waitUntil: 'networkidle', timeout: 45000 });
    await page.waitForTimeout(1500);
    const best = await page.evaluate(() => {
      const skip = /(logo|avatar|icon|sprite|pixel|badge|flag|seal)/i;
      return [...document.images]
        .filter(i => i.currentSrc && !i.currentSrc.startsWith('data:') && !skip.test(i.currentSrc) && !skip.test(i.className) && !skip.test(i.alt || ''))
        .map(i => ({ src: i.currentSrc, w: i.naturalWidth, h: i.naturalHeight, area: i.getBoundingClientRect().width * i.getBoundingClientRect().height }))
        .filter(i => i.w >= 400 && i.h >= 200 && i.area > 0)
        .sort((a, b) => b.area - a.area)[0] || null;
    });
    console.log(`${ref.id}\t${best ? best.src : '-'}\t${best ? best.w + 'x' + best.h : ''}`);
  } catch (e) { console.log(`${ref.id}\tERROR ${e.message.split('\n')[0]}`); }
}
await browser.close();
