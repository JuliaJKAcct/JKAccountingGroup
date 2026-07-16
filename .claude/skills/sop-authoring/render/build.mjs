#!/usr/bin/env node
/*
  Atlas SOP render — deterministic assembler.

  Wraps an SOP BODY fragment (the visible markup: toolbar + TOC + masthead +
  <main> + footer, authored with the Atlas classes — see README.md) in the shared
  shell + stylesheet + embedded brand fonts, and writes:

    • a full standalone .html  — self-contained, print/PDF- and Drive-ready
    • (optional) an Artifact fragment .html — body-only, to publish via the
      Artifact tool for on-screen review (light/dark, shareable link)

  The look is IDENTICAL for every SOP because atlas.css + the brand fonts are
  shared, committed assets — the body is the only per-SOP input. That is what
  makes "every SOP carries our seal" a guarantee, not a hope.

  Usage:
    node build.mjs --body <body.html> --title "<tab title>" --out <standalone.html> \
                   [--fragment <artifact.html>] [--desc "<meta description>"]

  Example (re-render the reference SOP):
    node .claude/skills/sop-authoring/render/build.mjs \
      --body    .claude/skills/sop-authoring/render/examples/btr-body.html \
      --title   "SOP · Business Tax Receipt — Hollywood + Broward County | JK Accounting Group" \
      --out     projects/sops/hollywood-broward-business-tax-receipt.html
*/
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));                 // …/render
const repoRoot = resolve(here, '../../../..');                       // repo root

function arg(name, required) {
  const i = process.argv.indexOf('--' + name);
  if (i !== -1 && process.argv[i + 1]) return process.argv[i + 1];
  if (required) { console.error(`Missing --${name}`); process.exit(1); }
  return null;
}
const bodyPath = arg('body', true);
const title    = arg('title', true);
const outPath  = arg('out', true);
const fragPath = arg('fragment', false);
const desc     = arg('desc', false) ||
  'JK Accounting Group Standard Operating Procedure, rendered on the Atlas design system.';

const shell = readFileSync(resolve(here, 'shell.html'), 'utf8');
const atlas = readFileSync(resolve(here, 'atlas.css'), 'utf8');
const fonts = readFileSync(resolve(repoRoot, 'brand/design-system/fonts-embedded.css'), 'utf8');
const body  = readFileSync(resolve(bodyPath), 'utf8');

const style = fonts.trimEnd() + '\n\n' + atlas.trimEnd() + '\n';
const filled = shell
  .replace('{{TITLE}}', title)
  .replace('{{STYLE}}', style)
  .replace('{{BODY}}', body.trim());

// --- Artifact fragment (body-only; the Artifact tool supplies <head>/<body>) ---
if (fragPath) writeFileSync(resolve(fragPath), filled);

// --- Standalone document: split filled at </style> → <head> vs <body> ---
const cut = filled.indexOf('</style>') + '</style>'.length;
const headInner = filled.slice(0, cut);              // <title> + <style>…</style>
const bodyInner = filled.slice(cut).trimStart();     // markup + <script>

const faviconSvg = readFileSync(resolve(repoRoot, 'brand/logo/favicon/favicon.svg'), 'utf8');
const favicon = 'data:image/svg+xml;base64,' + Buffer.from(faviconSvg).toString('base64');

const standalone = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light dark">
<meta name="description" content="${desc.replace(/"/g, '&quot;')}">
<link rel="icon" href="${favicon}">
${headInner}
</head>
<body>
${bodyInner}
</body>
</html>
`;
writeFileSync(resolve(outPath), standalone);

console.error(`standalone → ${outPath} (${(standalone.length / 1024).toFixed(0)}KB)`);
if (fragPath) console.error(`fragment  → ${fragPath} (${(filled.length / 1024).toFixed(0)}KB)`);
