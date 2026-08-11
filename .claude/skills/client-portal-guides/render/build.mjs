#!/usr/bin/env node
/**
 * Render a client-portal guide to the two files we actually send.
 *
 *   node .claude/skills/client-portal-guides/render/build.mjs \
 *     projects/sops/client-guides/double-send-info-guide-en.html \
 *     projects/sops/client-guides/double-send-info-guide-ru.html
 *
 * For each `…-guide-<lang>.html` it writes, in the same folder:
 *   • `…-<lang>.pdf`  — EXACTLY ONE page, sized to the card (not Letter: Letter
 *                       margins split the guide across two pages). The page box is
 *                       measured from `.page` in *print* media.
 *   • `…-<lang>.png`  — the WhatsApp-ready image: full page, deviceScaleFactor 3
 *                       (~2700px wide), rendered in *screen* media so it keeps the
 *                       ivory background.
 * It fails loudly if the PDF comes out with more than one page.
 *
 * The HTML must already be self-contained (the JK medallion embedded as a data URI —
 * copy it from an existing guide in projects/sops/client-guides/). Chromium comes from
 * the pre-installed Playwright browsers; nothing to install.
 */
import { readFileSync } from 'node:fs';
import { basename, dirname, resolve } from 'node:path';
import { createRequire } from 'node:module';

// playwright is installed globally in this environment, not per-repo
const GLOBAL_MODULES = process.env.NODE_GLOBAL_MODULES || '/opt/node22/lib/node_modules/';
const { chromium } = createRequire(GLOBAL_MODULES)('playwright');

const inputs = process.argv.slice(2);
if (!inputs.length) {
  console.error('usage: build.mjs <guide.html> [guide2.html …]');
  process.exit(1);
}

const pdfPageCount = (path) =>
  (readFileSync(path).toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;

const browser = await chromium.launch();
let failed = false;

for (const input of inputs) {
  const htmlPath = resolve(input);
  const dir = dirname(htmlPath);
  // double-send-info-guide-en.html -> double-send-info-en
  const stem = basename(htmlPath).replace(/\.html$/, '').replace(/-guide-([a-z]{2})$/, '-$1');

  const page = await browser.newPage({ viewport: { width: 900, height: 1200 }, deviceScaleFactor: 3 });
  await page.goto('file://' + htmlPath, { waitUntil: 'networkidle' });

  const pngPath = `${dir}/${stem}.png`;
  await page.screenshot({ path: pngPath, fullPage: true });

  await page.emulateMedia({ media: 'print' });
  await page.setViewportSize({ width: 860, height: 600 });
  const box = await page.evaluate(() => {
    const r = document.querySelector('.page').getBoundingClientRect();
    return { w: Math.ceil(r.width), h: Math.ceil(r.height) };
  });
  const pdfPath = `${dir}/${stem}.pdf`;
  await page.pdf({ path: pdfPath, printBackground: true,
    width: `${box.w}px`, height: `${box.h + 2}px`, pageRanges: '1' });
  await page.close();

  const pages = pdfPageCount(pdfPath);
  const ok = pages === 1;
  if (!ok) failed = true;
  console.log(`${ok ? '✓' : '✗'} ${stem}  ·  pdf ${box.w}×${box.h}px, ${pages} page(s)  ·  png written`);
  if (!ok) console.error(`  ${stem}.pdf is ${pages} pages — shorten the card or tighten the grid.`);
}

await browser.close();
if (failed) process.exit(1);
console.log('\nNow LOOK at the PNG before sending it — clipped buttons and displaced\ncontrols are invisible in the source and obvious in the image.');
