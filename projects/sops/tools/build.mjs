#!/usr/bin/env node
/**
 * Build the standalone SOP walkthroughs from their .src.html.
 *
 *   node projects/sops/tools/build.mjs
 *
 * Each .src.html is the SINGLE SOURCE OF TRUTH — the Knowledge Hub embeds the
 * same files (see projects/knowledge-hub/build-hub.mjs → inlineToolDoc), so the
 * Hub copies and these standalones can never drift. Same pattern as the
 * proposal-tool tools.
 *
 * Three build placeholders are substituted, and BOTH builders must substitute
 * all three or a tool ships half-assembled:
 *   /*__FONTS__*""/      the embedded font faces
 *   /*__TOOL_CSS__*""/   case-tool.css — the shared stylesheet
 *   /*__CASE_CORE__*""/  case-core.js — the shared case engine
 *
 * Outputs are fully self-contained (fonts + logo inlined as data URIs, zero
 * external requests), so they work offline, in Google Drive, and when printed.
 *
 * The self-test runs automatically at the end of this build (round-trip, step-label
 * coverage, the pruning branches, the built files) and a failure exits non-zero, so
 * `node build.mjs` is the only command anyone needs to remember.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, '../../..');
const read = (p) => readFileSync(p, 'utf8');
const png = (rel) => 'data:image/png;base64,' + readFileSync(resolve(repoRoot, rel)).toString('base64');

const fonts = read(resolve(repoRoot, 'brand/design-system/fonts-embedded.css'));
const toolCss = read(resolve(here, 'case-tool.css'));
const caseCore = read(resolve(here, 'case-core.js'));
const medallionRev = png('brand/logo/png/JK-medallion-reversed-1024.png');
const medallion = png('brand/logo/png/JK-medallion-primary-1024.png');

const TOOLS = [
  { src: 'itin-w7-walkthrough.src.html', out: 'itin-w7-walkthrough.html',
    title: 'ITIN Application Walkthrough — JK Accounting Group' },
  { src: 'btr-walkthrough.src.html', out: 'btr-walkthrough.html',
    title: 'Business Tax Receipt Walkthrough — JK Accounting Group' },
];

let failed = false;
for (const t of TOOLS) {
  const body = read(resolve(here, t.src))
    .replaceAll('/*__FONTS__*/', fonts)
    .replaceAll('/*__TOOL_CSS__*/', toolCss)
    .replaceAll('/*__CASE_CORE__*/', caseCore)
    .replaceAll('__MEDALLION_REV__', medallionRev)
    .replaceAll('__MEDALLION__', medallion);

  // A placeholder that survives substitution ships a tool with no styles or no case
  // engine — which looks like a broken page, not like a build error. Fail loudly.
  const left = ['/*__FONTS__*/', '/*__TOOL_CSS__*/', '/*__CASE_CORE__*/']
    .filter((p) => body.includes(p));
  if (left.length) {
    console.error('✗ ' + t.out + ' — unresolved placeholder(s): ' + left.join(', '));
    failed = true;
    continue;
  }

  const html = '<!doctype html><html lang="en"><head><meta charset="utf-8">'
    + '<meta name="viewport" content="width=device-width,initial-scale=1">'
    + '<title>' + t.title + '</title></head><body>\n'
    + body + '\n</body></html>';

  const out = resolve(here, t.out);
  writeFileSync(out, html);
  console.log('standalone →', out, '(' + Math.round(html.length / 1024) + 'KB)');
}

if (failed) process.exit(1);

// Run the self-test as part of the build, not beside it.
//
// checkCoverage() was moved off page load because it is a build-time assertion — but
// nothing actually ran it: no CI, and neither builder called selftest.mjs. So a step
// added without a seed shape shipped in silence and came back as a bare id in the wrong
// phase when someone reopened the case, which is then re-pasted into the client's Double
// note. An assertion nobody invokes is not an assertion, and case-core.js was claiming
// otherwise in a comment. `node build.mjs` is the one command anyone runs, so this is
// where the gate belongs.
const { status } = spawnSync(process.execPath, [resolve(here, 'selftest.mjs')], { stdio: 'inherit' });
if (status !== 0) {
  console.error('\n✗ build produced the files, but the self-test failed — do not ship these.');
  process.exit(1);
}
