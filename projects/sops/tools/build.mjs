#!/usr/bin/env node
/**
 * Build the standalone ITIN W-7 walkthrough from its .src.html.
 *
 * The .src.html is the SINGLE SOURCE OF TRUTH — the Knowledge Hub embeds the
 * same file (see projects/knowledge-hub/build-hub.mjs → inlineToolDoc), so the
 * Hub copy and this standalone can never drift. Same pattern as the
 * proposal-tool tools.
 *
 *   node projects/sops/tools/build.mjs
 *
 * Output: itin-w7-walkthrough.html — fully self-contained (fonts + logo inlined
 * as data URIs, zero external requests), so it works offline, in Google Drive,
 * and when printed.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, '../../..');
const read = (p) => readFileSync(p, 'utf8');
const png = (rel) => 'data:image/png;base64,' + readFileSync(resolve(repoRoot, rel)).toString('base64');

const body = read(resolve(here, 'itin-w7-walkthrough.src.html'))
  .replaceAll('/*__FONTS__*/', read(resolve(repoRoot, 'brand/design-system/fonts-embedded.css')))
  .replaceAll('__MEDALLION_REV__', png('brand/logo/png/JK-medallion-reversed-1024.png'))
  .replaceAll('__MEDALLION__', png('brand/logo/png/JK-medallion-primary-1024.png'));

const html = '<!doctype html><html lang="en"><head><meta charset="utf-8">'
  + '<meta name="viewport" content="width=device-width,initial-scale=1">'
  + '<title>ITIN Application Walkthrough — JK Accounting Group</title></head><body>\n'
  + body + '\n</body></html>';

const out = resolve(here, 'itin-w7-walkthrough.html');
writeFileSync(out, html);
console.log('standalone →', out, '(' + Math.round(html.length / 1024) + 'KB)');
