// Build the self-contained proposal-tool browser tools.
//
// Each tool is authored as a content fragment (*.src.html) with two placeholders:
//   /*__FONTS__*/  → the firm's embedded brand fonts (brand/design-system/fonts-embedded.css)
//   __LOGO__       → the horizontal logo lockup as a data: URI
// This script inlines both and wraps the fragment in a complete standalone HTML
// document, so the output is fully self-contained (no external requests): open it
// in a browser and use it directly. The same fragments are embedded into the
// Knowledge Hub.
//
// Run:  node projects/proposal-tool/tools/build.mjs
// The built .html files are gitignored artifacts — commit the .src.html, not the output.

import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const repo = resolve(here, "..", "..", "..");

const fonts = readFileSync(resolve(repo, "brand/design-system/fonts-embedded.css"), "utf8");
// Cyrillic subset — only inlined into tools that render Russian (the bilingual proposal),
// so Latin-only tools stay small. See brand/design-system/fetch-fonts-cyrillic.mjs.
const fontsCyrillic = readFileSync(resolve(repo, "brand/design-system/fonts-cyrillic-embedded.css"), "utf8");
const png = (rel) => "data:image/png;base64," + readFileSync(resolve(repo, rel)).toString("base64");
const logo         = png("brand/logo/png/JK-lockup-horizontal-2048.png");
const medallion    = png("brand/logo/png/JK-medallion-primary-1024.png");
const medallionRev = png("brand/logo/png/JK-medallion-reversed-1024.png");
// Shared pricing core — inlined into every tool that prices, so they can never diverge.
const pricingCore = readFileSync(resolve(here, "pricing-core.js"), "utf8");

// tool src basename → { title, artifact }
//   artifact:true also emits <name>.artifact.html — the SAME fragment with fonts inlined
//   but WITHOUT the <!doctype>/<html>/<head>/<body> wrapper, ready to publish as a
//   claude.ai Artifact (the Artifact tool supplies its own skeleton).
const TOOLS = {
  "business-tax-engagement-letter": { title: "JK Accounting Group — Business Tax Engagement Letter" },
  "pricing-calculator":             { title: "JK Accounting Group — Internal Pricing Calculator", artifact: true },
  "monthly-proposal-generator":     { title: "JK Accounting Group — Monthly Proposal Generator", cyrillic: true },
};

for (const [name, cfg] of Object.entries(TOOLS)) {
  const src = readFileSync(resolve(here, name + ".src.html"), "utf8");
  const body = src
    .replaceAll("/*__FONTS__*/", fonts)
    .replaceAll("/*__FONTS_CYRILLIC__*/", cfg.cyrillic ? fontsCyrillic : "")
    .replaceAll("__MEDALLION_REV__", medallionRev)
    .replaceAll("__MEDALLION__", medallion)
    .replaceAll("__LOGO__", logo)
    .replaceAll("/*__PRICING_CORE__*/", pricingCore);
  const full =
    '<!doctype html><html lang="en"><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1">' +
    `<title>${cfg.title}</title></head><body>\n` +
    body + '\n</body></html>';
  const out = resolve(here, name + ".html");
  writeFileSync(out, full);
  console.log("built", out, Math.round(full.length / 1024) + " KB");

  if (cfg.artifact) {
    const artOut = resolve(here, name + ".artifact.html");
    writeFileSync(artOut, body);
    console.log("built", artOut, Math.round(body.length / 1024) + " KB (artifact body)");
  }
}
