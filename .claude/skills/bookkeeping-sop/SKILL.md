---
name: bookkeeping-sop
description: Write, update, or review a JK Accounting Group per-client BOOKKEEPING runbook SOP — the monthly categorization + independent-review procedure for one bookkeeping client (e.g. projects/sops/ecoorganic-bookkeeping-review.md). Use when creating or editing a client's monthly-bookkeeping SOP, adding/changing a categorization rule, the 1099 process, the chart-of-accounts conventions, the review checklist, or the open-decisions log — and to know how that runbook must be presented in the Knowledge Hub. Encodes the two-layer rule (the .md keeps MAXIMUM detail as source of truth; the Hub shows the curated visual view), the required .md structure that drives the Hub render (bold-led numbered rules → rule cards, a Status-column decisions table → status pills, a number-range grammar line → range strip, a numbered checklist → check items), the firm's categorization framework + the color mental model (owner/equity = bronze · business/P&L = teal · investigate = blue · triage = amber), the firm-wide bookkeeping principles vs. what's client-specific, and the team-facing curation rules. Three shapes are supported — a categorization-rules runbook (Ecoorganic pilot), a month-end close-process runbook (Magnum 152 pilot) whose steps each carry a Drive "material" button to the source material, and a pre-operational/capitalization runbook (iKids Group pilot) for a client that is building something and not trading yet, where the question is which asset bucket rather than which expense account and the P&L is supposed to be empty. Also carries the client-reporting delivery log (record the period a report COVERED, not the date it was sent) and the rule that a runbook's account map is written by ROLE, never by vendor name. Builds on the sop-authoring skill (house structure) and feeds the knowledge-hub skill (the Hub render).
---

# Bookkeeping-client SOP — the house way

A **bookkeeping runbook** is a per-client SOP: how *one* client's books are kept and
reviewed **every month**. One file per client in
[`projects/sops/`](../../../projects/sops/), named `<client>-bookkeeping-review.md`.

**Three shapes** — pick what the client's work actually is (a runbook can also blend them):

- **Categorization-rules** — how transactions get coded + reviewed: the categorization
  rules, chart-of-accounts conventions, the 1099 process, the reviewer checklist, and the
  open-decisions log.
- **Month-end close-process** — a step-by-step monthly close (pull reports → journal
  entries → consolidate → reconcile → reclass → close gate), where **each step carries a
  Drive "material" button** to the exact working file / walkthrough.
- **Pre-operational / capitalization** — a client that is **building something and not yet
  trading**, where the work is not "which expense account?" but "which asset bucket?", and
  the P&L is supposed to be empty. See *The pre-operational shape* below.

Three reference pilots (keep them as the living patterns), all rendered in
[`build-hub.mjs`](../../../projects/knowledge-hub/build-hub.mjs):

- **Categorization-rules:** [`ecoorganic-bookkeeping-review.md`](../../../projects/sops/ecoorganic-bookkeeping-review.md) → `ecoorganicReaderInner`.
- **Close-process:** [`magnum-152-bookkeeping-review.md`](../../../projects/sops/magnum-152-bookkeeping-review.md) (+ Sunoma, Mobilesource, Sensustech, Margate, Beemold) → the **reusable** `closeProcessReader`, driven by a per-client `close` config in the SOP catalog.
- **Pre-operational:** [`ikids-group-bookkeeping-review.md`](../../../projects/sops/ikids-group-bookkeeping-review.md) — reuses `closeProcessReader` with a `close` config (no Drive material buttons; the sections carry the weight).

This skill is the memory of the rules Lilian established while building the Ecoorganic
runbook and its Hub view, so any session updating **these clients' SOPs follows the same
conventions**. It builds on [`sop-authoring`](../sop-authoring/) (the general house
structure) and feeds [`knowledge-hub`](../knowledge-hub/) (which renders it). The related
bookkeeping skills are [`recurring-expense-monitoring`](../recurring-expense-monitoring/),
[`expenses-report-tie-out`](../expenses-report-tie-out/), and
[`client-intelligence`](../client-intelligence/) (the client file feeds the SOP).

## The one rule that governs everything: two layers

1. **The `.md` is the source of truth and keeps the MAXIMUM detail.** Every rule, every
   nuance, every "why", every provisional note. Never thin it out to make it look cleaner —
   the depth is the point. Bookkeeping SOPs grow; expect them to get *longer*.
2. **The Hub shows the curated VISUAL view** of that same `.md` (via the `knowledge-hub`
   skill). Lighter, graphic, memorable — but it renders **from the `.md`**, so it can't
   drift. Curation happens at render time, not by cutting the source.

Client figures, vendor lists, and dollar balances stay in the firm's client systems (Drive
/ Double / QuickBooks), **never** in the repo — the `.md` holds the *procedure and rules
only*, same as every SOP.

## The required `.md` structure (this is a contract with the Hub render)

Write the runbook with these sections — the Hub's renderers key off them, so keeping the
shape is what makes the visual view work automatically:

- **A status / provenance blockquote at the very top** (`> **Status:** … Born from …`).
  Internal history — the Hub **strips it** from the team view. Keep it in the `.md`.
- **`## Client snapshot (operational, non-financial)`** — bullets: entity, owner, the live
  bank feed(s), how they get paid, the owner's personal account. No dollar figures.
- **`## Categorization rules`** — a **numbered list** where **every rule opens with a bold
  lead-in** (`1. **Checks and deposits are never assumed.** Download the image…`). The Hub
  turns each into a **rule card** (bold lead-in = the card title; the rest, including
  sub-bullets and callouts, renders below). *Always start a rule with its bold title* or it
  won't card correctly.
- **`## Vendor & 1099 tracking — use Double`** — the payee/1099 process in prose + bullets.
- **`## Chart of accounts conventions`** — bullets, and **include the number-range grammar
  line** (`… 100s assets · 200s liabilities · 300s equity · 400s income · 500s COGS · 600s
  opex · 800s other income · 901 depreciation · 997/998/999 triage`). The Hub lifts that
  line into a colored **range strip**.
- **`## Monthly review checklist (what the reviewer verifies)`** — a **numbered list**; the
  Hub renders **check items**.
- **`## Open decisions log`** — a Markdown **table with a `Status` column**. The Hub renders
  **status pills**; use the words **Resolved** (→ green), **Pending** (→ amber), and
  **Proposed** / **To verify** / **To study** (→ blue) so they color correctly.

Section **titles matter** — the Hub dispatches on the keywords *categorization rules*,
*open decisions*, *review checklist*, *chart of accounts*. Keep them.

### The month-end close-process shape (Magnum) — steps with Drive material buttons

When a client's bookkeeping is a **close process** rather than a categorization ruleset,
use these sections (in place of, or alongside, the rules sections). The Hub dispatches on
*close process* and *reference material*:

- **`## Monthly close process`** — an intro line, then a **numbered list of steps**, each
  opening with a **bold lead-in** (the step title). **End each step with
  `Reference: [label](drive-url) · [label](drive-url)`** — one or more Drive links (a
  folder, a Google Sheet, a walkthrough recording). The Hub renders each step as a **step
  card** and turns those trailing links into **Drive "material" buttons** next to the step.
  This is the pattern Lilian approved: the sensitive detail (logins, statements, Maria's
  screen recordings) **stays in Drive**, and the button opens exactly the right thing for
  that step. A trailing `### <subsection>` after the steps (e.g. the recurring-JE set)
  renders normally.
- **`## Reference material`** — a bulleted list of `- [label](drive-url) — caption` lines
  (put the master sheet / doc guide in **bold**). The Hub renders it as a **resource list**
  (icon · title · caption · Open) — one tidy place for all of the client's Drive
  step-folders and key files.

**The buttons are sourced from the `.md`** (the `Reference:` links), so they can't drift —
never hand-code a step's links in the reader. **Drive links are the one allowed outbound
link in a team view** (they open the working material the bookkeeper needs); repo/GitHub
links are still never allowed.

### The pre-operational shape (iKids pilot, Aug 2026) — when the P&L is supposed to be empty

Some clients are **building something and not trading yet**: a venue under construction, a
business in formation. Their bookkeeping is a different question from everyone else's — not
*"which expense account?"* but *"which asset bucket?"* — and a runbook that doesn't say so
leaves the bookkeeper to accept QuickBooks' suggestions, which are trained on companies that
trade and are **systematically wrong here**. Write these sections in addition to the normal
ones:

- **`## The <n> buckets — …`** (name them for the client's actual chart). A table of the
  capitalization destinations **with the QBO type each one currently has**, then **the
  boundaries that actually get confused**, each stated as a *test a person can apply*, not a
  definition. The three that earned their place on the pilot generalize well:
  - **Producing the improvement vs. readying the business** — *was this cost incurred to
    produce the physical improvement, or to get the business ready to open?* The tempting
    shorthand ("would this cost exist in a different space?") **breaks on pre-opening rent**,
    which is specific to the space and still argues both ways. State the real test, and put
    rent in the decisions log rather than asserting an answer.
  - **A deposit belongs in "security deposit" only if its PURPOSE is to be held as security.**
    A contractor's deposit is a prepayment credited against the contract; a landlord's or a
    utility's is held and returned. *Don't* rest this on "it never comes back" — a contractor
    deposit usually is refundable on cancellation, and an overstated absolute invites the
    reader to reject the whole rule.
  - **A lump-sum contract can't be split across trades before the work is done** — give it its
    own sub-account rather than forcing it into the nearest one.
- **The entity's tax posture, where it changes the buckets.** For a **partnership or LLC**, three
  kinds of pre-opening spend get three treatments and a chart usually has accounts for only two:
  **§709 organizational** (forming the entity, 180-month), **§195 startup** (readying the
  business, 180-month from commencement), and **syndication costs** — legal work on admitting
  members and raising their capital, which is **permanently non-deductible and non-amortizable**
  and has no natural home, so it silently collects in the legal account. Say so in any runbook
  for a multi-member entity taking capital.
- **The changeover is TWO dates, not one.** *When the business begins* starts §195/§709
  amortization; *when each asset is placed in service* starts its depreciation, asset by asset,
  and can come earlier. A decisions row asking "when do operations begin?" is one question with
  two answers — split it.
- **A role→account map.** See the naming rule in the firm-wide principles below.
- **The self-check rule, stated as a rule.** These clients have a known-shape financial
  statement, which makes one report a complete test of the month's work: *the P&L should carry
  nothing but bank charges — anything else on it is a categorization to re-open.* Put it in the
  categorization rules **and** the reviewer checklist. It is the cheapest review in the file.
- **A dated-changeover rule.** Capitalization stops when the business begins, and that
  changeover is **one deliberate batch on a date somebody decides** — never a drift. On the
  pilot, the same vendor was posted two different ways for four months and **no reason for the
  change was recorded anywhere**, which is the situation this rule exists to make impossible:
  write the rule *and* the date, so a later change is visibly a decision rather than a drift.

### `## Client reporting — …` (any shape) — the coverage watermark

When a client **asks for its own reports periodically** — a transaction report, a
transactions-by-account report — the runbook gets a delivery-log table. The rule that makes it
worth having: **the row records the period the report COVERED, not the date it was sent**, so
the next report starts the day after and nobody duplicates or skips months. Note anything that
*caps* the coverage (a dead bank feed, an un-backfilled gap) in the same row, because
"continue from where we left off" is exactly how an incomplete period goes out looking
complete. Renders as prose in the Hub — no keyword collision.

## The firm's categorization framework (firm-wide — reuse for every client)

Every transaction sorts into one of four destinations. **The color is the mental model** —
use the same colors in every client's decision-flow so a bookkeeper learns them once:

| Color | Destination | What lands here |
|---|---|---|
| 🟫 **Bronze** | **Owner · equity** | Owner contributions (in) & distributions (out); anything personal to the owner. **Never** Sales or COGS. |
| 🟩 **Teal** | **Business · P&L** | COGS (job costs, materials, subcontractor labor, disposal) · opex · fuel · supplies. |
| 🔵 **Blue** | **Investigate first** | Checks, deposits, cash/ATM, transfers — evidence decides; never assume. |
| 🟡 **Amber** | **Triage** | *Ask My Accountant* / uncategorized / holding — must read **$0 before close**. |

**Firm-wide principles** (these generalize across bookkeeping clients — state them in each
runbook, adapt the specifics):

- **Override QuickBooks' auto-suggestions.** QBO is frequently wrong for these clients —
  never accept a category blindly.
- **Every transaction gets a payee/vendor**, except owner draws, contributions, and
  transfers. Unidentifiable descriptor → *Ask My Accountant* (triage), never a guess.
- **Checks & deposits are never assumed** — pull the bank image; the payee/memo decides;
  every deposit carries a customer (or the owner, for a contribution).
- **Owner's personal-account transfers = equity** (money in → contribution, out →
  distribution). Post to the two specific equity accounts, never the equity parent, never
  Sales/COGS.
- **Cash out / withdrawals: investigate, never blanket to draws** — cash can pay
  subcontractors (1099 exposure).
- **Parents never receive postings** — post to sub-accounts only.
- **The close gate:** holding/triage accounts must read **$0 before a month is closed.**
  Necessary but *not sufficient* — a $0 triage doesn't mean the categories are *right*.
- **1099 discipline:** track every payee crossing the **$2,000** threshold (2026), collect
  a **W-9**, and sweep **across every labor account** (Outside services, Contract labor, …)
  each close — use **Double**, which flags missing payees and 1099 readiness.
- **Number-prefix chart of accounts is the target, adopted gradually** — classify first,
  restructure the chart second; renames/renumbers are safe, merges/type-changes on years
  with activity are not.
- **Provisional rules are tagged and dated.** Mark anything unconfirmed *(to verify)*; when
  a rule changes, update it in the `.md`, **date it**, and reclassify the affected
  transactions in **one batch**. Log open questions in the decisions table.

- 🔒 **An account map is written by ROLE, never by vendor name** — "the general contractor",
  "the design firm", "the site's electricity and water", "our own monthly fee". A **vendor list
  is client data** and belongs in QuickBooks/Drive/Double, not in a repo that auto-publishes to
  the Hub; and a role **survives a change of vendor**, which a name does not. The exceptions
  worth allowing are **utilities and government agencies**, which a covering bookkeeper cannot
  identify any other way. Say the choice out loud in the runbook, or the next session will
  "helpfully" fill the names back in.
- **Where a client's statements have a KNOWN SHAPE, make that the self-check.** A pre-operational
  client's P&L should be empty; a client with one revenue stream should show one. Write the
  expected shape as a rule and as a checklist line — one report then tests the whole month's
  categorization, and it costs ten seconds.
- **A partial payment records cash, not the commitment.** If the client's books have no A/P —
  some don't; **check whether an `Accounts Payable` account exists at all** before assuming
  either way — the balance still owed appears **nowhere**. Say in the runbook where it gets
  recorded instead. ⚠️ **And keep the inference narrow:** no A/P is strong evidence no *Bill* was
  ever entered, and **nothing at all** about journal entries, which never create A/P.

**Client-specific (lives in that client's `.md`, NOT this skill):** dollar thresholds (e.g.
Ecoorganic's $25 gas line), the **account names** the client actually uses, and the exact
decision-flow gates. Don't hard-code one client's numbers as a firm rule. ⚠️ **Client-specific
is not the same as repo-safe:** **vendor names, bank/account numbers and dollar balances do not
belong in the client `.md` either** — they stay in Drive / Double / QuickBooks, per the
two-data-homes rule and the 🔒 role-not-vendor rule above. *(This bullet used to read "the
specific vendors and accounts, the owner's account numbers", which contradicted both. Corrected
2026-08-14.)*

## How it's presented in the Hub

The Hub view (owned by the [`knowledge-hub`](../knowledge-hub/) skill; rendered by
`build-hub.mjs`) has two kinds of content:

- **Generic section renderers** (structure-driven, client-agnostic *functions*): rule cards,
  status-pill decisions table, numbered check items, the number-range strip, and the
  **book-mode PDF** (a cover page + a Contents/index page + one section per page). The
  "Save as PDF manual" button and the reader-bar printer icon call **native `window.print()`**
  — that renders the `@media print` book layout, and the user saves it as PDF from the browser
  dialog. **Never substitute a `.md`/`.txt` "manual"** for the PDF — Lilian rejected that; the
  PDF is the print output. A separate **"Download as text"** button exports `.txt`. **In the
  claude.ai Artifact sandbox both `<a download>` and `window.print()` are blocked**, so there
  the print buttons show an honest note/toast (PDF/print live on the published site) and only
  "Download as text" works (via `window.claude.downloads`) — the Artifact must be published
  with `capabilities: {downloads: true}`. On the real Odoo host / any browser everything works
  natively. See the `knowledge-hub` skill's downloads section. They read from any runbook `.md`
  with the structure above — but see *Current state* below: today they're only **wired**
  through Ecoorganic's reader, so a new client's sections don't render until that client
  gets a reader/catalog entry.
- **Curated visuals — hand-built per client** (like the BTR hand-laid page), because they
  encode *that client's* specific logic:
  - a **signature banner** — "the one rule to hold in your head";
  - a **monthly-process flow** (a stepped ribbon) with the `$0` close gate and the `≥$2,000`
    1099 sweep called out;
  - the **categorization decision-flow** — a numbered **"first YES wins" gate ladder**,
    color-coded to the four destinations above (rules-shape runbooks);
  - **close-process step cards** — each step of a month-end close with a **Drive material
    button** per step, plus a **resource list** for the reference material (close-process
    runbooks; Magnum). The buttons/list come from the `.md`'s `Reference:` links and the
    `## Reference material` section, so they stay in sync.

**Team-facing curation (always):** strip the internal provenance blockquote; **never show
another client's name** in a client's view (the pilot swaps `Masciave/Aura-style grammar` →
`Number-prefix grammar`); no GitHub/repo links — everything opens designed, inside the Hub.

**Current state:** the close-process shape now renders through **one reusable reader** —
`closeProcessReader(cfg, md, owner, updated)` — driven by a per-client **`close` config** in
the SOP catalog (`{ name, loc, lede, oneRule, flow }`). All six Maria clients (Magnum,
Sunoma, Mobilesource, Sensustech, Margate, Beemold) use it, so **a new close-process client
is just a `.md` + a catalog item with a `close` object — no new function.** The shared
renderers do the sections: `closeSteps` (step cards + per-step material buttons), `closeResList`
(reference resource list), and the rules-shape renderers (`ecoRuleCards`, `ecoChecklist`,
`ecoDecisionsTable`). The **rules shape** (Ecoorganic) still has its own `ecoorganicReaderInner`;
generalizing that one the same way is the remaining next step. Do all Hub work through the
[`knowledge-hub`](../knowledge-hub/) skill and its **verify-before-publish gate**.

## Workflow

1. **Edit the client's `.md`** in `projects/sops/` (max detail). Follow the structure above
   and the general [`sop-authoring`](../sop-authoring/) house rules.
2. **If the Hub view needs to change**, do it through the [`knowledge-hub`](../knowledge-hub/)
   skill (`build-hub.mjs` / `hub.css`), build, and run its **verify-before-publish gate**
   (`node --check` the emitted script + a runtime click test) — never hand-edit `index.html`.
   All visual work goes through the [`impeccable`](../impeccable/) skill + the Atlas Design
   System, screenshot-tested light / dark / mobile.
3. **Ship it:** commit → PR → **independent review** → merge (CLAUDE.md). Small PRs.

## Files

- `projects/sops/<client>-bookkeeping-review.md` — the runbook (source of truth).
- `projects/sops/ecoorganic-bookkeeping-review.md` — the rules-shape pilot.
- `projects/sops/magnum-152-bookkeeping-review.md` — the close-process-shape pilot.
- `projects/sops/ikids-group-bookkeeping-review.md` — the pre-operational-shape pilot (the four
  buckets, the role→account map, the client-reporting delivery log).
- `projects/knowledge-hub/build-hub.mjs` — the rules-shape reader `ecoorganicReaderInner` and
  the **reusable close-process reader `closeProcessReader`** (driven by the catalog `close`
  config); the section renderers (`ecoRuleCards`, `ecoDecisionsTable`, `ecoChecklist`,
  `ecoCoaConventions`, `closeSteps`, `closeResList`, `closeSectionBody`); the curated visuals
  (`ecoSignature`, `ecoMonthlyFlow`, `ecoDecisionFlow`, `closeSignature`, `closeFlow`); the
  material-button helpers (`matRow` / `matLinksFrom` / `matIcon`); and the print book.
- `projects/knowledge-hub/hub.css` — the components (rule cards, status pills, the flow
  ribbon, the close-process **step cards** `.mstep`, the **material buttons** `.matlink`,
  the **resource list** `.resrow`), composed only from Atlas tokens.

*Update this skill whenever a round with Lilian establishes a new bookkeeping-SOP rule,
convention, or presentation preference — it is the memory of how these client runbooks are
written and shown.*
