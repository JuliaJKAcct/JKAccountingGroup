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
  included); tax preparation does NOT include preparing the client's financial
  statements (the P&L) — that is quoted separately and NEVER appears in the
  proposal, it goes out as its own invoice with no proposal at all; monthly
  proposals show ONE bundled fee and offer a bilingual RU/EN layout +
  electronic-signature fields. Client data (names, EIN, addresses, figures) is
  NEVER committed — the finished document is delivered to the user.
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
   next-steps · closing quote · T&C) → Save PDF. Single bundled fee — or a **two-phase
   investment snapshot**: fill the optional **Phase 2** fields (Phase-1 label, Phase-2
   label, Phase-2 fee, "what it adds") and the Investment page renders **two bold price
   cards side by side** — an intro price and the step-up (e.g. *First 3 months · Essential
   $725/mo* → *From month 4 · Advisory $1,497/mo*) — never buried in small text. Leave the
   Phase-2 fee blank for a single card. The What's-Included page also takes an optional
   **"foundation" line** (`pfoundation`, `pfoundation_ru`): a short statement of the
   **always-included baseline**, rendered as a bronze-bordered box *set apart at the top* of
   the scope under the label *"The foundation — always included"* / *"Основа — всегда
   включено"*, so the baseline reads as the plan's **foundation, never a differentiator**
   (the packaging concept in `projects/marketing/service-packaging.md`). Below it, the
   category list carries the itemised detail and — for a two-phase proposal — an *"Available
   on the Advisory plan"* category for what a later phase adds. Leave the foundation field
   blank to omit the box. **Tailor it to the client:** on a monthly retainer the firm keeps
   the books, so *monthly financial statements* legitimately belong in the foundation (that
   is not the tax-prep letter, where financial statements are excluded — see the
   financial-statements rule below); and **omit owner payroll for a pre-operational /
   pre-S-corp startup**, where it does not yet apply. The Investment page also takes an
   optional **add-on** (`paddon` name, `paddonfee`, `paddonnote` + `_ru`): a service priced
   **on top of** the retainer — e.g. *Accounts Payable management, +$1,500/mo* — rendered as a
   distinct **dashed "Optional add-on" card below the hero fee**, clearly secondary to it. The
   fee text carries its own sign (type `+$1,500`); the tool appends the `/mo` period, so it is
   for a **monthly** add-on. Blank add-on fee ⇒ no card. Use it for a paid extra the client can
   choose (AP, payroll, a cleanup that is *not* excluded), not for a phase step-up (that is the
   Phase-2 fields) and not for something already in the bundle. A **Language**
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
12. **Deposit to begin** — *optional* toggle ("Deposit to begin" group); off by default
13. **Deposit amount (USD)** — used only when the deposit toggle is on

**When "Fee is an estimate" is on**, the Professional Fee line reads **"estimated at $X"**
(instead of a fixed **"$X"**) and a good-faith-estimate sentence is appended: the final fee
may be adjusted for the return's actual complexity, and the firm will agree any material
change with the client before proceeding (no surprise invoice). Leave it **off** for a
fixed, final fee — nothing else in the letter changes either way. The tool's "Fee basis"
panel shows the **exact** sentence it adds, so any team member can see precisely what the
option does before selecting it (added Jul 2026, Lilian — for returns quoted as an estimate
pending complexity, e.g. AVK Holdings).

**When "Deposit to begin" is on** (with an amount), a warm one-liner is added to the **Timing
of the Engagement** section — *"To reserve your place on our schedule and begin the work, we
ask for a $X deposit, which is credited in full toward your final fee."* — and the Professional
Fee closing sentence changes to *"After crediting your $X deposit, the remaining balance is
invoiced upon completion…"* The deposit is framed as **required to begin work but credited in
full toward the fee** (kept light, never heavy or punitive). Leave it **off** for no deposit.
The "Deposit to begin" panel shows the exact sentence it adds (added Jul 2026, Lilian — first
used for AVK Holdings, a $500 deposit).

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
- The **tax year** for the trial-balance line ("your **2025** year-end trial balance" for a 2025
  return — the year-end you need to *prepare* the return, not the prior year; corrected Jul 2026)

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
- **Every proposal delivery is TWO things: the PDF + a branded HTML cloud artifact**
  (Julia's standing instruction, 2026-08-19 — she prefers working with the HTML artifact;
  the PDF stays the signable/sendable deliverable). Produce the artifact by extracting the
  tool's rendered document — all `<style>` blocks plus `#proposal`'s innerHTML — into a
  standalone page with a minimal shell (`<title>` = "<Client> Proposal"; sheets stacked on
  the tool's own `#DED7C7` preview ground with a soft shadow; `#proposal{overflow-x:auto}`
  so a phone never side-scrolls the page body; single-theme on purpose — the document
  commits to its ivory-paper look, so paint the background explicitly). Publish it
  **default-private** with the Artifact tool, one artifact per client proposal (republish
  the same file path / URL for revisions of the same proposal — never mint a second link
  for a revision). The client file/figures still never touch the repo: the HTML lives in
  the scratchpad and on claude.ai, exactly like the delivered PDF.

## Standing rules (apply to every proposal / letter)

- **Julia's title is "Chief Accountant"** (Главный бухгалтер) — never "CEO".
- **"Not Included" is standard on every proposal**, and its defaults are **personal tax
  preparation** and **historical cleanup / catch-up bookkeeping** — these are *never*
  included in a proposal (Lilian, Jul 2026). Preparing the **financial statements** follows the
  same logic — see the rule below — though whether it is named in the section's wording hasn't
  been decided with Lilian yet. **Note:** none of the three generators actually renders a
  "Not Included" section today (they carry "What's Included" only) — so this rule currently
  lives in how we *quote*, not in the document. Raise it before relying on the section.
- **Monthly proposals:** show **one bundled monthly fee**, never itemize bookkeeping vs.
  tax; use the premium format; offer a **bilingual RU/EN** layout (full Russian version,
  then English with the signature + binding terms in the English part, brand Cyrillic
  fonts embedded); include **visible electronic-signature fields**.
- **Tax preparation does NOT include preparing the financial statements** (Lilian, Aug 2026).
  A return runs off the company's year-end numbers — the **Profit & Loss** above all — and
  producing those numbers is **bookkeeping, a different service**. So a tax-prep client that
  owns a company is expected to **bring their own P&L**. When we didn't keep their books
  during the year, the client doesn't have those numbers and neither do we.
  - **If the client has no P&L**, the cleanup/financial-statement work is quoted **separately**,
    at the firm's fixed cleanup rate (see **Fixed** above). _One worked example, not a default —
    agree the cap and any advance per client:_ with Gossip Miami (Aug 2026) the client supplied
    the bank statements and QuickBooks access, the work was capped at 10 hours, and an advance
    invoice was issued before starting, with the balance billed against the hours actually spent.
  - **NEVER put this quote in the tax-return proposal.** It goes out **completely separately —
    its own invoice, and no proposal at all** for this work (Lilian, Aug 2026). Don't add it as
    a line, an option, or an appendix to the proposal — **and don't collect the advance through
    the letter's "Deposit to begin" toggle either**; that toggle is for the tax-prep engagement,
    and using it would put the excluded work back inside the proposal.
  - **A quote covers ONE entity.** If the client sends statements for **another** of their
    entities, that entity is outside the deal quoted for the first one — outside both the P&L
    arrangement **and** the tax-prep engagement. It needs its own quote for whatever it actually
    needs, which is usually its own return as well as its own P&L.
- **Cleanup is billed separately** ($60/hr) only if needed — and **never as a line inside the
  proposal**; see the financial-statements rule above. Advisory/planning is $150/hr under a
  separate agreement.
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
Julia/Lilian set a new standard for proposals or engagement letters — including what is
in or out of a proposal's scope, and what must be quoted outside it.*
