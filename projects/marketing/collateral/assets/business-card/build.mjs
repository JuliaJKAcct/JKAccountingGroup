#!/usr/bin/env node
/**
 * Render the business card to the JPEGs we actually send.
 *
 *   node projects/marketing/collateral/assets/business-card/build.mjs
 *
 * Writes into ./exports/ :
 *   • julia-kononova-business-card-front.jpg  2100 x 1200
 *   • julia-kononova-business-card-back.jpg   2100 x 1200
 *   • julia-kononova-business-card.jpg        both sides stacked, for the phone
 *
 * 2100 x 1200 is the 3.5 x 2 in trim at 600 dpi — sharp when zoomed on a phone
 * and safe to hand to a printer (add bleed there; the source is trim size).
 * Chromium comes from the pre-installed Playwright browsers; nothing to install.
 */
import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const GLOBAL_MODULES = process.env.NODE_GLOBAL_MODULES || '/opt/node22/lib/node_modules/';
const { chromium } = createRequire(GLOBAL_MODULES)('playwright');

const here = dirname(fileURLToPath(import.meta.url));
const out = resolve(here, 'exports');
mkdirSync(out, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1400, height: 1600 },
  deviceScaleFactor: 2,
});
await page.goto('file://' + resolve(here, 'julia-kononova-card.html'), { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);

for (const side of ['front', 'back']) {
  await page.locator('#' + side).screenshot({
    path: resolve(out, `julia-kononova-business-card-${side}.jpg`),
    type: 'jpeg', quality: 95,
  });
}

// Both sides on one image — what Julia actually keeps in her camera roll.
await page.locator('body').screenshot({
  path: resolve(out, 'julia-kononova-business-card.jpg'),
  type: 'jpeg', quality: 95,
});

await browser.close();
console.log('wrote 3 JPEGs to ' + out);
