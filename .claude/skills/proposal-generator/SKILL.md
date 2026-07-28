---
name: proposal-generator
description: >-
  Generate a client-ready JK Accounting Group proposal or engagement letter — the
  in-house GoProposal replacement (projects/proposal-tool/). Use when asked to
  create, produce, or fill a proposal or engagement letter for a client: a
  business tax-preparation engagement letter (the interactive generator tool), a
  tax-prep engagement letter for an individual, or a monthly-engagement retainer
  proposal. Encodes the exact per-client field list, the auto-derived
  return/Form-8879/due-date logic, how to produce the finished PDF (the
  self-service browser tool, or chat), and the firm's standing rules: Julia's
  title is "Chief Accountant" (never CEO); every proposal carries a "Not Included"
  section whose defaults are personal tax preparation + historical cleanup (never
  included); monthly proposals show ONE bundled fee and offer a bilingual RU/EN
  layout + electronic-signature fields. Client data (names, EIN, addresses,
  figures) is NEVER committed — the finished document is delivered to the user.
---

# Proposal & Engagement-Letter Generator — the house way

The engine behind [`projects/proposal-tool/`](../../../projects/proposal-tool/): the
firm's own replacement for GoProposal. Every output is on the Design System, and
**client data always stays out of the repo** — finished documents are delivered to the
user, never committed.

Read [`projects/proposal-tool/docs/methodology.md`](../../../projects/proposal-tool/docs/methodology.md)
for the pricing engine, the premium visual format, and the `docx.js` gotchas.

## What this covers

1. **Business tax-prep engagement letter** — the **interactive generator tool**
   (`projects/proposal-tool/tools/`). *Primary path for this document.*
2. **Tax-prep engagement letter (docx)** — the firm's AICPA-style master
   (`templates/JKA_Tax_Prep_Engagement_Letter_TEMPLATE.docx`) via
   `generator-scripts/gen_letters.js` + `body.js`. Business master + an individual
   (1040) variant (income-documents wording, simplified signature).
3. **Monthly-engagement proposal** — the **interactive Monthly Proposal generator**
   (`projects/proposal-tool/tools/monthly-proposal-generator.src.html`): Step 1 prices the
   client with the built-in calculator (shared core), Step 2 flows that fee into the
   editable premium proposal (cover · benefits · investment · what's-included ·
   next-steps · closing quote · T&C) → Save PDF. Single bundled fee. A **Language**
   selector offers **English** (10 pages) or **Bilingual (Russian + English)** — the
   bilingual version puts the **full Russian version first** (Atman-style), then the
   official **English** version (15 pages); the signature + binding T&C live in the
   English part (English governs), and the fee/dates/client name/closing quote are
   shared across both languages. Cyrillic renders in the brand faces via
   `brand/design-system/fonts-cyrillic-embedded.css` (inlined only into this tool). The
   docx engine (`generator-scripts/` + `premium_proposal_body.js`) is the format's source
   of truth.
4. **Internal pricing calculator** — the interactive front-end for the firm's Core
   Pricing Matrix (`projects/proposal-tool/tools/pricing-calculator.src.html`). Enter a
   client's service parameters → the internal fee build-up + the single bundled monthly
   fee. **Internal only** (never shown to the client); it computes the number that goes on
   the monthly proposal. Mirrors `generator-scripts/build_pricing_xlsx.py` +
   `build_client_pricing_sheet.py` exactly.

## Business tax-prep engagement letter — the fields to collect

These are **everything that changes per client** (verified against the template and a
real filled letter — nothing else varies). The tool refuses to generate while any
**required** field is missing; the two **representative** fields are **optional**:

1. **Letter date** — required
2. **Company (entity) name** — required
3. **Address — line 1** — required
4. **Address — line 2** (city, state, ZIP) — required
5. **Entity type** — C-Corporation (Form 1120) / S-Corporation (Form 1120-S) / Partnership (Form 1065) — required
6. **Tax year** (e.g. 2025 → "December 31, 2025") — required
7. **Fee (USD)** — required
8. **Representative — name** — *optional* (who signs for the client)
9. **Representative — title** — *optional* (Manager / Partner / Member / President …)
10. **Client info-needed-by date** — required
11. **Fee is an estimate** — *optional* toggle ("Fee basis" group); off by default

**When "Fee is an estimate" is on**, the Professional Fee line reads **"estimated at $X"**
(instead of a fixed **"$X"**) and a good-faith-estimate sentence is appended: the final fee
may be adjusted for the return's actual complexity, and the firm will agree any material
change with the client before proceeding (no surprise invoice). Leave it **off** for a
fixed, final fee — nothing else in the letter changes either way. The tool's "Fee basis"
panel shows the **exact** sentence it adds, so any team member can see precisely what the
option does before selecting it (added Jul 2026, Lilian — for returns quoted as an estimate
pending complexity, e.g. AVK Holdings).

**The representative fields are optional** because the person who signs *for* the client
is only pre-printed when known. Leave them blank and the letter prints the blank
signature lines for the client to complete by hand — e.g. when the owner signs
personally, with no separate representative. When a name is entered, it appears **on** the
signature line (and on the "ACCEPTED" party line); when blank, the "ACCEPTED" party is the
company itself. This matches the firm's master template exactly.

**Auto-derived from the entity type** (don't ask; the tool computes them):
- Return line (1120 / 1120-S / 1065 wording)
- Form 8879 variant — **8879-C** (C-corp) · **8879-S** (S-corp) · **8879-PE** (partnership)
- Original due date — **April 15** (C-corp) · **March 15** (S-corp / partnership), of tax-year + 1
- Prior year (tax-year − 1) for the trial-balance line

**Fixed** (only change if asked): cleanup **$60/hr**, advisory **$150/hr**, signer
**Julia Kononova, MBA, EA — Chief Accountant**, letterhead **Pembroke Pines, Florida ·
786-318-1505**, and the attached **Terms & Conditions Addendum**.

## How to produce the finished PDF

- **Self-service tool (preferred):** `node projects/proposal-tool/tools/build.mjs`
  builds a self-contained `business-tax-engagement-letter.html` (brand fonts + logo
  inlined). Open it in a **normal browser** (or the firm's private Odoo page), fill the
  form, and click **"Save PDF"** → the browser's print dialog → *Save as PDF*. It
  **starts blank every time** and **validates** required fields, so no stale/other-client
  data and no missed field. *(The claude.ai Artifact sandbox blocks `window.print()` and
  file downloads — the tool is built for a real browser / Odoo host; the artifact is only
  a preview.)*
- **Chat:** collect the fields above, generate, render to PDF (headless Chromium), and
  deliver the file to the user. **Never commit the client PDF.**

## Standing rules (apply to every proposal / letter)

- **Julia's title is "Chief Accountant"** (Главный бухгалтер) — never "CEO".
- **"Not Included" is standard on every proposal**, and its defaults are **personal tax
  preparation** and **historical cleanup / catch-up bookkeeping** — these are *never*
  included in a proposal (Lilian, Jul 2026).
- **Monthly proposals:** show **one bundled monthly fee**, never itemize bookkeeping vs.
  tax; use the premium format; offer a **bilingual RU/EN** layout (full Russian version,
  then English with the signature + binding terms in the English part, brand Cyrillic
  fonts embedded); include **visible electronic-signature fields**.
- **Cleanup is billed separately** ($60/hr) only if needed; advisory/planning is $150/hr
  under a separate agreement.
- **Match Julia's master template format exactly** (Lilian, Jul 2026 — the business
  letter is the firm's daily-use document). The letterhead is **left-aligned** (logo, mono
  bronze kicker, address line, phone line, bronze rule — never centered); the letter body
  is **IBM Plex Sans**, section headings **Source Serif 4 teal**, subsection labels
  underlined (not bold); the legal text is the **full AICPA wording verbatim** (all
  subsections — Arguable positions, Bookkeeping assistance, Prior year review, Estimated
  tax payments, Tax planning, Government inquiries, Third-party requests, Documentation,
  Personal expenses, State & local, Foreign investments, Foreign filing, Virtual currency,
  Ultimate responsibility — never a condensed paraphrase). The source of truth for this
  format is `generator-scripts/body.js` + `common.js` (the docx engine). In the signature
  block, a filled value sits **on** the signature line, not before it.
- **Client data never enters the repo** — names, EINs, addresses, and dollar figures live
  in the firm's systems; the finished document goes to the user.

## Files

- `projects/proposal-tool/tools/business-tax-engagement-letter.src.html` + `build.mjs` —
  the interactive business tax-prep generator (build → open in browser → Save PDF).
- `projects/proposal-tool/tools/pricing-calculator.src.html` (built by the same `build.mjs`)
  — the internal pricing calculator (build → open in browser → enter inputs → bundled
  monthly fee). Internal only; the client proposal shows just the one bundled fee.
- `projects/proposal-tool/tools/monthly-proposal-generator.src.html` — the interactive
  Monthly Proposal generator (calculator → editable 10-page premium proposal → Save PDF).
- `projects/proposal-tool/tools/pricing-core.js` — the SHARED fee-math core inlined (by
  `build.mjs`) into BOTH the calculator and the proposal generator, so they never diverge.
  **Change a rate/formula here once**; rebuild both. Mirrors the Python pricing scripts.
- `projects/proposal-tool/templates/` — blank docx masters (monthly proposal, tax-prep
  letter, T&C addendum).
- `projects/proposal-tool/generator-scripts/` — the docx/HTML engine (`body.js` letter
  builder, `premium_proposal_body.js`, the pricing scripts).
- `projects/proposal-tool/docs/methodology.md` — pricing engine, format spec, decisions.

## The pricing calculator link (the team's bookmark)

The internal pricing calculator is published as **one official claude.ai Artifact** — a
link Lilian shares with the team; it never downloads anything, so a live link (always the
latest version) beats a stale HTML file. **Always update THAT artifact, never mint a new
one:**

> **THE Pricing Calculator link:**
> `https://claude.ai/code/artifact/31d6167b-e86d-4df8-b19d-a57b126b0c34`

To update it after any change: `node projects/proposal-tool/tools/build.mjs` (emits
`tools/pricing-calculator.artifact.html` — the fragment with fonts inlined, **no**
doctype/html wrapper), then republish with the **Artifact** tool passing that **URL** as
`url` (from a session that didn't publish it) so the link stays stable. It needs **no**
runtime capabilities (no downloads, no print). It **starts fully blank** every time — no
default value can carry into a client's price.

## Hosting the tool for the team

For now the team uses it **self-service** by opening the built HTML in a browser
(download → Chrome → Save PDF). It is also **embedded in the [Knowledge Hub](../../../projects/knowledge-hub/)** —
its own card in the Hub's **"Interactive tools"** band, opening the generator inside the
Hub, built from this tool's `.src.html` (one source of truth). **When you change the tool's
`.src.html`, rebuild AND republish the Hub in the same change, unprompted** (see the
`knowledge-hub` skill, rule 12) so the Hub never lags the tool. When the Hub is published to
the private **Odoo team site**, the tool works there behind the team login, fully
self-service. Do not put it on the public website.

*Update this skill when a new document type or field is added, the fee rules change, or
Julia/Lilian set a new standard for proposals or engagement letters.*
