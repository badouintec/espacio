// Renders assets/img/og-2027.jpg (1200×630) for Open Graph: the official poster (assets/img/hero-2027.jpg) letterboxed on navy with a date strip.
// Usage: PLAYWRIGHT_PATH=<playwright pkg> node scripts/make-og.mjs   (uses installed Google Chrome)
import { readFile } from 'node:fs/promises';
const pw = await import(process.env.PLAYWRIGHT_PATH || 'playwright');
const jpg = await readFile(new URL('../assets/img/hero-2027.jpg', import.meta.url));
const src = 'data:image/jpeg;base64,' + jpg.toString('base64');
const html = `<!doctype html><html><head><meta charset="utf-8"><style>
body{margin:0;width:1200px;height:630px;overflow:hidden;font-family:system-ui,-apple-system,"Segoe UI",sans-serif;color:#fff;background:#0b1730;display:flex;flex-direction:column}
img{width:1200px;height:500px;object-fit:cover;object-position:center 40%;display:block}
.s{flex:1;display:flex;flex-direction:column;justify-content:center;padding:0 60px}
.m{font-size:34px;font-weight:700;margin-bottom:8px}.e{font-size:20px;color:#F5B454;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
</style></head><body><img src="${src}"><div class="s"><div class="m">10, 11 y 12 de febrero de 2027 · Ciudad de México</div><div class="e">Próximamente más información · Primera Circular · Convocatoria de Carteles · Registro</div></div></body></html>`;
const browser = await pw.chromium.launch({ channel: process.env.PW_CHANNEL || 'chrome' });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html);
await page.screenshot({ path: new URL('../assets/img/og-2027.jpg', import.meta.url).pathname, type: 'jpeg', quality: 85 });
await browser.close();
console.log('assets/img/og-2027.jpg written');
