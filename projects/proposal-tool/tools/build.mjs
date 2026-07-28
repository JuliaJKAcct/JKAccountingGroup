// Build the self-contained Business Tax Engagement Letter generator.
//
// Reads the source fragment (business-tax-engagement-letter.src.html), inlines the
// firm's embedded brand fonts and the horizontal logo (as a data URI), and wraps it
// in a complete standalone HTML document → business-tax-engagement-letter.html.
//
// The output is self-contained (no external requests): open it in a browser, fill in
// the client details, and use "Save PDF" (the browser's print → "Save as PDF") to get
// the finished letter. Same fragment can be embedded into the Knowledge Hub.
//
// Run:  node projects/proposal-tool/tools/build.mjs
// The built .html is a gitignored artifact — commit the .src.html, not the output.

import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const repo = resolve(here, "..", "..", "..");

const src   = readFileSync(resolve(here, "business-tax-engagement-letter.src.html"), "utf8");
const fonts = readFileSync(resolve(repo, "brand/design-system/fonts-embedded.css"), "utf8");
const logo  = readFileSync(resolve(repo, "brand/logo/png/JK-lockup-horizontal-2048.png")).toString("base64");

const body = src
  .replace("/*__FONTS__*/", fonts)
  .replace("__LOGO__", "data:image/png;base64," + logo);

const full =
  '<!doctype html><html lang="en"><head><meta charset="utf-8">' +
  '<meta name="viewport" content="width=device-width,initial-scale=1">' +
  '<title>JK Accounting Group — Business Tax Engagement Letter</title></head><body>\n' +
  body + '\n</body></html>';

const out = resolve(here, "business-tax-engagement-letter.html");
writeFileSync(out, full);
console.log("built", out, Math.round(full.length / 1024) + " KB");
