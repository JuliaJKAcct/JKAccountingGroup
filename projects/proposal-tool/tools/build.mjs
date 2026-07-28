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
const logo  = "data:image/png;base64," +
  readFileSync(resolve(repo, "brand/logo/png/JK-lockup-horizontal-2048.png")).toString("base64");
// Shared pricing core — inlined into every tool that prices, so they can never diverge.
const pricingCore = readFileSync(resolve(here, "pricing-core.js"), "utf8");

// tool src basename → { title, artifact }
//   artifact:true also emits <name>.artifact.html — the SAME fragment with fonts inlined
//   but WITHOUT the <!doctype>/<html>/<head>/<body> wrapper, ready to publish as a
//   claude.ai Artifact (the Artifact tool supplies its own skeleton).
const TOOLS = {
  "business-tax-engagement-letter": { title: "JK Accounting Group — Business Tax Engagement Letter" },
  "pricing-calculator":             { title: "JK Accounting Group — Internal Pricing Calculator", artifact: true },
};

for (const [name, cfg] of Object.entries(TOOLS)) {
  const src = readFileSync(resolve(here, name + ".src.html"), "utf8");
  const body = src
    .replace("/*__FONTS__*/", fonts)
    .replace("__LOGO__", logo)
    .replace("/*__PRICING_CORE__*/", pricingCore);
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
