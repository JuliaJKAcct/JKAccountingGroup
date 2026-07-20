# Proposal & Engagement-Letter Tool

> **Status:** Active · **Owner:** Julia · **Started:** 2026-07

The firm's own in-house replacement for **GoProposal** — it generates on-brand,
client-ready monthly-engagement **proposals**, tax-prep **engagement letters**, and
a standalone **Terms & Conditions** addendum from the firm's real pricing logic, so
the firm can drop the GoProposal subscription. This is the built form of
[`BACKLOG.md` IDEA-09](../../BACKLOG.md#idea-09--build-our-own-goproposal-alternative).

## Purpose

JK used GoProposal (by Sage) to produce monthly-retainer client proposals and
letters of engagement. This project owns that end-to-end instead: a small Node
(`docx-js`) + Python toolchain that turns a handful of client facts into a finished,
branded document. Because the firm owns it, the questionnaire, the pricing logic,
and the document design all live on the firm's own Design System and can change
instantly, with no vendor limits or per-seat fees.

Three document types:

1. **Monthly-engagement proposal** — one merged document (proposal + engagement
   terms), in the current "premium" visual format. Shows a single **bundled** monthly
   fee, never an itemized service breakdown (see the bundling rule in the methodology).
2. **Tax-prep engagement letter** — a one-off, per-return engagement letter
   generalized across entity types (1040 / 1120 / 1120-S / 1065).
3. **Terms & Conditions addendum** — a standalone 13-section T&C document, also
   embedded at the end of the premium proposal PDF.

## What's here

```
proposal-tool/
├── README.md                 ← you are here
├── docs/
│   └── methodology.md         ← how documents are built, the premium format spec,
│                                the pricing engine, docx.js gotchas, decisions made
├── templates/                 ← finished BLANK (bracketed-placeholder) masters
│   ├── JKA_Monthly_Proposal_Engagement_TEMPLATE.docx / .pdf
│   ├── JKA_Tax_Prep_Engagement_Letter_TEMPLATE.docx
│   └── JKA_Terms_and_Conditions_Addendum.docx
├── generator-scripts/         ← the engine (Node docx-js + Python)
│   ├── common.js               ← shared brand helpers (colors, fonts, logo, layout)
│   ├── body.js / proposal_body.js / premium_proposal_body.js / gopro_proposal_body.js
│   ├── gen_letters.js / gen_proposal.js / gen_premium.js / gen_proposal_v2.js / gen_tc.js
│   ├── add_form_fields.js / fix_footer.js / find_sig_coords.py / find_footer_bars.py
│   ├── build_pricing_xlsx.py         ← shared Rate Tables reference sheet
│   ├── build_client_pricing_sheet.py ← per-client internal pricing sheet (template)
│   └── package.json
└── source-materials/          ← firm reference inputs (no client data)
    ├── CorePricingMatrix.pdf                  ← the firm's original pricing matrix
    └── Engagement-Letter-2023-v2-GENERIC.docx ← generic AICPA-style source letter
```

Everything committed here is **firm IP with no client data** — the templates are
blank/bracketed, and the pricing scripts ship with neutral placeholder inputs. Real
client proposals, filled letters, client P&L exports, and the negotiated-price
workbooks stay in the firm's client systems (Drive / QuickBooks), **not** the repo —
per the repo's client-data rule.

## Brand & design

Fully on-brand; the engine pulls the shared assets directly — it never duplicates
them:

- Brand rules & voice: [`../../brand/JK-Brand-Guide.md`](../../brand/JK-Brand-Guide.md)
- Logos (resolved by `common.js`): [`../../brand/logo/png/`](../../brand/logo/png/)
  (`JK-lockup-horizontal-2048.png`, `JK-medallion-primary-1024.png`,
  `JK-medallion-reversed-1024.png`)
- Design tokens / colors: [`../../brand/design-system/`](../../brand/design-system/)

Any visual change to the documents goes through the
[`impeccable`](../../.claude/skills/impeccable/) skill + the Design System, same as
the rest of the repo.

## Skills & tooling

None yet — the engine currently lives as the scripts in `generator-scripts/`.
Driving it for a new client (facts → pricing → finished document) is a clear
**skill candidate**; capturing it as a `.claude/skills/` workflow is the natural
next step (see "Working on this"). Uses the repo's `docx` and `xlsx` skill helpers
for validation (`validate.py`, `recalc.py`).

## Outputs

Finished client documents are generated locally and delivered to the client — they
are **not** committed (they contain client data). The generator scripts write to
their working directory / `generator-scripts/output/`, both git-ignored. Only the
**blank templates** in `templates/` and the **engine** are versioned here.

## Working on this / notes for AI

- **Read [`docs/methodology.md`](./docs/methodology.md) first.** It carries the
  pricing engine, the current premium-format spec, the merged-document and bundling
  decisions, and the hard-won `docx.js` gotchas (especially the page-number footer
  fix). It should let you generate a new document without re-deriving any of it.
- **Do not commit client data.** Client names, EINs, addresses, P&L figures, and
  negotiated prices stay out of the repo. Generate into the git-ignored output dir
  and hand the file to the client.
- **Never itemize bookkeeping vs. tax prep on a client-facing proposal** — one
  bundled monthly fee only. The internal pricing sheet computes the breakdown; the
  client document never shows it.
- **Run generators from `generator-scripts/`** after `npm install docx` there
  (local, not `-g`). Logo paths resolve from that location to the shared `brand/`.
- **Open items:** (1) real e-signature (vs. the current fillable AcroForm fields)
  needs the DocuSign connector authorized interactively by Julia; (2) the legacy
  matrix's Annual-Report-Filing duplicate-rate ambiguity is unresolved but
  non-blocking (current work builds fresh). (3) Propose the `proposal-generator`
  skill once the next real client proposal is in sight.
