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
├── tools/                     ← self-service interactive tools (open in a browser)
│   ├── business-tax-engagement-letter.src.html ← the interactive business tax-prep
│   │                             engagement-letter generator (starts blank, validates
│   │                             every field, auto-derives return/Form-8879/due-date,
│   │                             optional "fee is an estimate" toggle)
│   ├── pricing-calculator.src.html ← internal pricing calculator — the interactive
│   │                             front-end for the Core Pricing Matrix; enter the client's
│   │                             service parameters → internal breakdown + one bundled
│   │                             monthly fee (mirrors the build_*pricing*.py scripts)
│   ├── monthly-proposal-generator.src.html ← the premium monthly-retainer proposal (the
│   │                             GoProposal replacement): Step 1 prices with the calculator,
│   │                             Step 2 flows the fee into the editable 10-page proposal → Save PDF
│   ├── pricing-core.js          ← SHARED fee-math core — the single source of truth inlined
│   │                             into both the calculator and the proposal generator (never diverge)
│   └── build.mjs               ← inlines brand fonts + logo + medallions + the pricing core →
│                                 self-contained .html files (built .html git-ignored; regenerate)
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

Driven by the [`proposal-generator`](../../.claude/skills/proposal-generator/) skill —
the house way to produce any proposal or engagement letter: the exact per-client field
list, the auto-derived return/Form-8879/due-date logic, how to produce the finished PDF,
and the firm's standing rules (Chief-Accountant title, the "Not Included" defaults,
bundled monthly fee + bilingual RU/EN for retainers). **Load that skill first** for any
proposal work.

Three self-service interactive tools live in [`tools/`](./tools/) — run `node tools/build.mjs`
to build the self-contained HTML, then open it in a normal browser. All three are also
embedded in the **Knowledge Hub** (Interactive tools band):

- **Business tax-prep engagement letter** — fill the validated form and "Save PDF". Starts
  blank every time (no stale/other-client data) and refuses to generate with any required
  field missing.
- **Internal pricing calculator** — the interactive front-end for the Core Pricing Matrix:
  enter a client's service parameters and it computes the internal fee build-up and the
  single bundled monthly fee. Starts fully blank (no default can carry into a client's
  price). **Internal only** — the client proposal shows just the one bundled fee. Because it
  downloads nothing, it's also shared as **one live claude.ai Artifact link** — see the
  canonical URL + update flow in the [`proposal-generator`](../../.claude/skills/proposal-generator/) skill.
- **Monthly Retainer Proposal generator** — the premium monthly proposal (the GoProposal
  replacement): **Step 1** prices the client with the calculator; **Step 2** flows that fee
  into the editable proposal (cover, benefits, investment, what's-included, next steps,
  closing quote, T&C) → **Save PDF**. A **Language** selector offers **English** (10 pages)
  or **Bilingual (Russian + English)** — the Russian version first (Atman-style), then the
  official English version (15 pages), with the signature + binding T&C in the English part.
  Cyrillic renders in the brand faces via `brand/design-system/fonts-cyrillic-embedded.css`,
  inlined only into this tool.

The calculator and the proposal generator share **`tools/pricing-core.js`** — the single
source of the fee math — so they can never produce different numbers. The docx/HTML engine
still lives in `generator-scripts/`; validation uses the repo's `docx`/`xlsx` helpers
(`validate.py`, `recalc.py`).

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
  non-blocking (current work builds fresh). (3) The interactive generator is being
  integrated into the **Knowledge Hub** (so the team can run it self-service behind
  the private Odoo login); (4) the individual (1040) template variant is **paused**
  per Lilian — resume later.
