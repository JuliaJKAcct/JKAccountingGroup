#!/usr/bin/env node
/**
 * Render the LinkedIn Page banners to the PNGs we upload.
 *
 *   node projects/marketing/collateral/assets/linkedin-banner/render.mjs            # all options
 *   node projects/marketing/collateral/assets/linkedin-banner/render.mjs banner-c-ivory.html
 *
 * For each `banner-<id>.html` it writes into `exports/`:
 *   • jk-linkedin-banner-<id>-1128x191.png   — LinkedIn's stated Page cover size
 *   • jk-linkedin-banner-<id>-2256x382.png   — 2×, the file to actually upload
 *   • jk-linkedin-banner-<id>-4512x764.png   — 4×, archival
 * plus, from the 2× render, three review crops that show what LinkedIn really shows:
 *   • …-preview-desktop.png  — with the company logo's bottom-left overlap drawn in
 *   • …-preview-mobile.png   — LinkedIn's ~17%-per-side centre crop
 *   • …-preview-strip.png    — the TIGHTEST crop measured on the real Page (the
 *                              Edit page → Page info banner field): only the
 *                              central ~31% of the height. If the message reads
 *                              here, it reads everywhere. Check this one first.
 *
 * The .stage element is screenshotted, not the page, so the export is exactly
 * 1128×191 × scale with no viewport chrome. Fonts come from Google Fonts, so the
 * render needs network access (the brand faces are not embedded here).
 */
import { readdirSync, mkdirSync } from 'node:fs';
import { dirname, resolve, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

// playwright is installed globally in this environment, not per-repo
const GLOBAL_MODULES = process.env.NODE_GLOBAL_MODULES || '/opt/node22/lib/node_modules/';
const { chromium } = createRequire(GLOBAL_MODULES)('playwright');

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(HERE, 'exports');
const W = 1128, H = 191;                 // LinkedIn Page cover, ~5.9:1
const SCALES = [1, 2, 4];
const LOGO_OVERLAP = 200;                // the company logo covers ~this square, bottom-left
const MOBILE_INSET = 0.17;               // LinkedIn crops ~17% off each side on phones
const STRIP_KEEP = 0.31;                 // …and the Edit-page field keeps only this much height

const files = process.argv.slice(2).length
  ? process.argv.slice(2).map((f) => resolve(process.cwd(), f))
  : readdirSync(HERE).filter((f) => /^banner-.+\.html$/.test(f)).sort().map((f) => resolve(HERE, f));

if (!files.length) { console.error('no banner-*.html found'); process.exit(1); }
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();

for (const htmlPath of files) {
  const id = basename(htmlPath).replace(/^banner-/, '').replace(/\.html$/, '');

  for (const scale of SCALES) {
    const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: scale });
    await page.goto('file://' + htmlPath, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const stage = await page.locator('.stage');
    const path = `${OUT}/jk-linkedin-banner-${id}-${W * scale}x${H * scale}.png`;
    await stage.screenshot({ path });
    console.log('✓', basename(path));

    // The two review crops, taken off the 2× render. Mobile first: a locator
    // screenshot ignores `clip`, so the crop has to come off the page, and the
    // logo overlay must not be on the stage yet when it does.
    if (scale === 2) {
      const inset = Math.round(W * MOBILE_INSET);
      const m = `${OUT}/jk-linkedin-banner-${id}-preview-mobile.png`;
      await page.screenshot({ path: m, clip: { x: inset, y: 0, width: W - inset * 2, height: H } });
      console.log('✓', basename(m), `(centre ${W - inset * 2}px of ${W})`);

      const keep = Math.round(H * STRIP_KEEP);
      const st = `${OUT}/jk-linkedin-banner-${id}-preview-strip.png`;
      await page.screenshot({ path: st, clip: { x: 0, y: Math.round((H - keep) / 2), width: W, height: keep } });
      console.log('✓', basename(st), `(centre ${keep}px of ${H} — the tightest crop)`);

      await page.addStyleTag({ content: `
        .stage::after{
          content:'';position:absolute;left:0;bottom:0;width:${LOGO_OVERLAP}px;height:${LOGO_OVERLAP}px;
          background:#F6F3EC;border:2px solid #9C6A39;border-radius:14px;
        }` });
      const d = `${OUT}/jk-linkedin-banner-${id}-preview-desktop.png`;
      await stage.screenshot({ path: d });
      console.log('✓', basename(d), '(company-logo overlap drawn in)');
    }
    await page.close();
  }
}

await browser.close();
