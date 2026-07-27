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
3. **Monthly-engagement proposal** — premium format, single bundled fee, optional
   **bilingual RU/EN**, electronic-signature fields (`generator-scripts/` +
   `premium_proposal_body.js`).

## Business tax-prep engagement letter — the fields to collect

These are **everything that changes per client** (verified against the template and a
real filled letter — nothing else varies). Ask for all of them; the tool refuses to
generate with any missing:

1. **Letter date**
2. **Company (entity) name**
3. **Address — line 1**
4. **Address — line 2** (city, state, ZIP)
5. **Entity type** — C-Corporation (Form 1120) / S-Corporation (Form 1120-S) / Partnership (Form 1065)
6. **Tax year** (e.g. 2025 → "December 31, 2025")
7. **Fee (USD)**
8. **Representative — name** (who signs for the client)
9. **Representative — title** (Manager / Partner / Member / President …)
10. **Client info-needed-by date**

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
- **Client data never enters the repo** — names, EINs, addresses, and dollar figures live
  in the firm's systems; the finished document goes to the user.

## Files

- `projects/proposal-tool/tools/business-tax-engagement-letter.src.html` + `build.mjs` —
  the interactive business tax-prep generator (build → open in browser → Save PDF).
- `projects/proposal-tool/templates/` — blank docx masters (monthly proposal, tax-prep
  letter, T&C addendum).
- `projects/proposal-tool/generator-scripts/` — the docx/HTML engine (`body.js` letter
  builder, `premium_proposal_body.js`, the pricing scripts).
- `projects/proposal-tool/docs/methodology.md` — pricing engine, format spec, decisions.

## Hosting the tool for the team

For now the team uses it **self-service** by opening the built HTML in a browser
(download → Chrome → Save PDF). It is also being integrated into the **Knowledge Hub**
(as an in-Hub tool, the house way — see the `knowledge-hub` skill); when the Hub is
published to the private **Odoo team site**, the tool works there behind the team login,
fully self-service. Do not put it on the public website.

*Update this skill when a new document type or field is added, the fee rules change, or
Julia/Lilian set a new standard for proposals or engagement letters.*
