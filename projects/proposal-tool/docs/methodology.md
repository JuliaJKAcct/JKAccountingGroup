# Proposal & Engagement-Letter Tool — methodology

Read this first. It carries the decisions, pricing logic, format spec, and
`docx.js` gotchas behind the generator, so you can produce a new document without
re-deriving any of it. Firm IP only — no client data lives in this repo (client
figures stay in Drive / QuickBooks).

The firm's document conventions: address line **"Pembroke Pines, Florida"** (no
street address), phone **786-318-1505**, signer **Julia Kononova, MBA, EA — CEO**.
Voice is calm, plain, bicultural (EN/RU), real facts only — no fear-mongering, no
hype. All fonts (Source Serif 4 headings, IBM Plex Sans body, IBM Plex Mono kickers)
ship with Cyrillic subsets because the firm serves bilingual clients.

## How documents get built

Everything is generated with the `docx` npm package via small Node scripts. The
shape:

- `common.js` — shared brand helpers: color tokens, fonts, logo/medallion insertion,
  headings, kickers, bronze rule, tables, footers, and the premium-layout helpers
  (`medallionImage`, `sectionHeader`, `benefitBlock`, `priceCard`, `discountLine`,
  `bulletCategory`, `stepLine`, `closingQuoteSection`, `centeredFooter`). It resolves
  the shared brand logos from the repo's `brand/logo/png/` — never a local copy.
- `body.js` — builds an engagement-letter body from an options object.
- `proposal_body.js` — builds the simple merged monthly-proposal body.
- `premium_proposal_body.js` — builds the current **premium** proposal
  (`buildCover` / `buildMainBody` / `buildClosing` / `buildTermsAndConditions`).
- `gopro_proposal_body.js` — the **superseded** GoProposal-clone body (kept for
  history; not the current format).
- Entry points supply a bracketed-placeholder `opts` object and call `Packer.toBuffer`:
  `gen_letters.js` (tax-prep letter), `gen_proposal.js` (simple proposal),
  `gen_premium.js` (**current** premium proposal), `gen_proposal_v2.js` (superseded
  clone), `gen_tc.js` (standalone T&C addendum).

To generate a new client document: copy the relevant entry script's pattern, fill a
new `opts` object with that client's real facts, and run it with `node` from the
`generator-scripts/` directory (`npm install docx` there first — local, not `-g`).
Validate with the `docx` skill's `validate.py`, and spot-check by rendering to
PDF/JPG (`soffice --headless --convert-to pdf`, then `pdftoppm`) before sending.

**Full production pipeline for a premium-format proposal** (`gen_premium.js` is the
reference):

1. `node gen_premium.js` → produces the `.docx`.
2. `soffice --headless --convert-to pdf <file>.docx` → PDF.
3. `python3 find_sig_coords.py <file>.pdf` → locates signature/date underline
   coordinates on the Agreement page → JSON.
4. `node add_form_fields.js <file>.pdf <coords.json> <out>.pdf <fieldPrefix>` → adds
   real AcroForm **fillable** text fields at those coordinates (simple fillable
   fields, **not** e-signature — DocuSign was declined for now; see Open items).
5. `python3 find_footer_bars.py <out>.pdf` → detects the dark-teal footer bar rect on
   every page → JSON.
6. `node fix_footer.js <out>.pdf <bars.json> <final>.pdf <proposalNumber>` → repaints
   each footer bar and draws fresh static white "Page X of Y" text. **This must run
   LAST, after `add_form_fields.js`** — it is a mandatory fix, not polish (see the
   page-number gotcha below).

## Pricing engine (internal only — never itemized to the client)

From the firm's GoProposal pricing matrix (`source-materials/CorePricingMatrix.pdf`),
still valid internal logic. The spreadsheet form is
`generator-scripts/build_client_pricing_sheet.py` (built on the shared Rate Tables
from `build_pricing_xlsx.py`).

**Monthly bookkeeping fee:**

- **Recording Accounting Transactions** = `$1 × transactions-per-month tier value ×
  recording-frequency multiplier × bank-feeds multiplier × locations multiplier`.
  - Transaction tiers bucket up (0–200→200, 201–225→225, 226–250→250, … 451–500→500).
  - Frequency: Monthly = 1, Bi-weekly = 1.5, Weekly = 2.
  - Bank feeds: Yes = 1, No/manual = 2.25.
  - Locations: 1 = 1, 2 = 1.25, 3 = 1.75, 4 = 2, 5 = 2.25, 6 = 2.5, 7 = 2.75.
- **Reconcile Bank/CC/PayPal Accounts** = `$18.50 × accounts-tier value`
  (1–5→5, 6–10→10, 11–15→15, 16–25→25, 26–30→30).
- **Prepare Financial Statements** = `$16/mo` flat.
- **Accounting Advisory Services** by company-size tier: Small $100/mo, Medium
  $150/mo, Large $200/mo (the matrix's third tier was likely mislabeled "Medium" —
  treat it as Large / highest tier).

**Tax prep** — *not* from the matrix's cascading revenue-tier calculation. It's a
flat annual fee set per client, divided by 12. Firm starting points (adjusted per
client, not hard rules): **$650/yr** Form 1065 partnership, **$750/yr** Form 1120-S
S-corp, **~$780/yr** assumed Form 1120 C-corp.

**1099 filing** = $25 flat per contractor. **Sales tax filing** = $60 per state per
filing period (monthly filers $60/mo/state; quarterly shown as $20/mo/state; annual
presumed $5/mo/state, unconfirmed). **Owner payroll** shown as $0.00 is intentional —
complimentary for a solo S-corp owner, not part of the bundle and not a bug.

*Unresolved but non-blocking:* the legacy matrix has duplicate "Compliance services"
vs. "Imported: Compliance services" sections with different Annual-Report-Filing
rates. Tax prep / 1099 / sales tax are resolved via the flat overrides above; the new
templates build fresh rather than reusing the old matrix wholesale.

## Critical business rule — bundling

**Client-facing monthly-engagement proposals must NEVER show an itemized
bookkeeping-vs-tax-prep dollar breakdown.** No "shopping list." Show **one bundled
monthly fee** (bronze-highlighted, large), positioned as a "full back-office
accounting package / accounting advisory" bundle, followed by a narrative bulleted
"what's included." Any one-time / onboarding fee is bundled the same way.

Why: when clients can see the split (e.g., that most of the fee is bookkeeping), they
start trying to unbundle just that piece. Bundling removes the incentive. The pricing
engine still computes the full internal breakdown — it is only the **client-facing
document** that stays bundled.

**Pricing-display / discount rule (distinct from bundling):** the Investment page
*may* show a single anchor — "Standard rate $X/mo · includes Y% discount (–$Z) for
[reason]" — before the final price. One discount off one bundled total is fine;
itemizing service lines is still forbidden. Don't conflate the two.

## Engagement letters — decisions & fees

- **Master template:** based on a real prior AICPA-style Form 1120 tax-prep letter,
  **generalized** across entity types (1040 / 1120 / 1120-S / 1065). The Kohler "Main
  Street Tax Pro" retainer template was reviewed and **rejected** — the 1120-based
  letter already separates tax prep from planning/consulting (matching the firm's
  hourly prep-vs-consult split) and is more defensible (Circular 230, liability cap,
  arguable-positions, foreign-filing / virtual-currency sections). The generic source
  is `source-materials/Engagement-Letter-2023-v2-GENERIC.docx`.
- **Genericization built into `body.js`:** return-type/form list is a variable field;
  e-file authorization form number varies (8879 for 1040, 8879-C for 1120, 8879-S for
  1120-S, 8879-PE for 1065); filing-deadline language splits (April 15 for
  C-corp/individual, March 15 for S-corp/partnership).
- **Fee structure:** tax-return prep is a **flat/estimated fee by return type** (not
  hourly). Optional bookkeeping/cleanup (only if needed) is **$60/hr**; separate
  consultations/advisory outside prep scope are **$150/hr**. (The $60/hr is the
  cleanup rate, *not* the prep rate — a point clarified during the original build.)

## Merged-document decision

The monthly proposal is **one** document (proposal + engagement terms combined), not
GoProposal's two-document structure (separate Proposal PDF + Letter of Engagement).
For the simple format (`proposal_body.js`), section order is: letterhead → date →
"Proposal for [client]" + number + address + prepared-for/by → Welcome intro → "Your
Monthly Investment" (single bundled fee + "what's included") → optional "One-Time
Onboarding" → "Please Note" (start date / year end / revenue / 30-day validity) →
"What Happens Next" (5 steps) → "Engagement Terms" (9 numbered clauses) →
closing/signature.

## Premium visual format (current)

The current proposals match a **premium reference format** (a prior firm proposal
Julia preferred), superseding the earlier GoProposal-clone layout. It is:

- Full ivory page background (`Document({ background: { color: "F6F3EC" } })`).
- Cover: centered circular medallion (`JK-medallion-primary-1024.png`).
- A repeating **kicker + big serif title** pattern on every section (bronze mono
  kicker → serif heading).
- A Contents page with dotted leaders.
- A **"What You Get"** benefits page — 3–4 cards, each a thin teal left-accent bar +
  bronze kicker + bold subheading + description (first card lightly shaded).
- A **"Your Investment"** page — a huge bronze monospace price in a bordered ivory
  card (not a plain fee table), with the optional standard-rate/discount anchor line.
- A single compact **"What's Included"** page (category headings + tight bullets).
- A short **"What's Next"** (one-line numbered steps) → short Agreement paragraph +
  signature/date lines (no numbered legal clauses in the sales flow).
- A full-bleed dark-teal **closing quote** page with the reversed medallion.
- The **Terms & Conditions** (same 13 clauses as the standalone addendum) added as a
  **fourth** docx section, placed AFTER the closing quote page — so the quote stays
  the last emotional page, and the T&C are the true final pages of the PDF. Keep the
  embedded T&C and the standalone `JKA_Terms_and_Conditions_Addendum.docx` in sync if
  either is edited.

Assembled in `gen_premium.js` as four docx `sections` — cover (titlePage, blank
header/footer), main (blank header + `centeredFooter`), a zero-margin closing section
with a page-height dark table cell, and a T&C section.

## docx.js gotchas (hit while building — don't re-learn these)

1. **Paragraph borders serialize in a fixed order** and can fail strict OOXML
   validation. Build any bordered box (CTA block, parameter box, price card) as a
   **single-cell Table**, never a bordered Paragraph — table-cell borders serialize
   correctly.
2. **Narrow percentage column widths get silently widened** by Word/LibreOffice AUTO
   layout. Use fixed **DXA** widths (computed from page width minus margins) for both
   `Table.width` and each `TableCell.width` when a very narrow column is needed (e.g.
   the benefit-card accent bar) — see `benefitBlock`.
3. **Page-number field color bug (critical):** `centeredFooter()`'s
   `PageNumber.CURRENT` / `TOTAL_PAGES` field runs set explicit white, but field
   **recalculation** on open/convert drops that color, rendering the page number
   invisible against the dark footer. Do **not** fix at the docx level — fix in PDF
   post-processing with `find_footer_bars.py` + `fix_footer.js`, run as the **last**
   pipeline step.

## Open items

1. **E-signature:** the pipeline adds fillable AcroForm fields, not real e-signature.
   Real e-sign needs the **DocuSign** connector authorized interactively by Julia
   (an OAuth step a non-interactive session can't do).
2. **Annual-Report-Filing rate ambiguity** in the legacy matrix — unresolved,
   non-blocking.
3. **Skill:** capturing "generate a proposal / engagement letter for a new client" as
   a `.claude/skills/` workflow is the natural next step once a real second use is in
   sight.
