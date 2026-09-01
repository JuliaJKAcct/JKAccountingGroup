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
   ⚠️ **That is true of the SECTION renderers and FALSE of the curated visuals — and the
   difference is where a stale rule hides.** `ecoRuleCards`, `ecoDecisionsTable`,
   `ecoChecklist`, `closeSteps` and friends parse the `.md`, so they genuinely cannot
   drift. But **`ecoDecisionFlow`, `ecoMonthlyFlow` and `ecoSignature` are hand-authored
   in `build-hub.mjs`** with nothing linking them to the source. **A rule change that
   touches what they show must be applied there too, in the same pass.**
   🔴 **And the visual is the half the team actually reads** — a bookkeeper working the
   decision ladder sees the chip and never opens the rule card, so a stale chip is worse
   than a stale paragraph. _(2026-08-26: a rule about which labor account a subcontractor
   goes to was corrected in the `.md` and reviewed three times; the decision-flow chip
   still taught the superseded answer each time, because everyone was checking the
   markdown — the two-layer rule said the Hub could not drift.)_

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
  line into a colored **range strip**. **The prose around it is free** — the parser anchors on
  `100s assets` and takes each label up to a sentence end or a link. 🛑 **But the whole bullet is
  consumed by the strip, so put nothing else on it**: a cross-reference written on the same bullet
  is dropped, not rendered (give it its own bullet). *(Fixed 2026-09-01: the parser used to strip a
  fixed `…name — ` prefix that only Ecoorganic's phrasing had, so every other runbook silently lost
  `100s assets`, and iKids' trailing "See the firm standard, [link]" rode into the last chip as raw
  markdown and a repo path — in a view where repo links are forbidden.)*
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

> 🔴 **A session CANNOT execute these categorizations — it produces the worklist, a person clicks.**
> Worth stating here because this skill is all about *deciding* the category, which makes "now go and
> apply it" feel like the next step. It is not available: **neither the `Double` connector nor the
> `Intuit_QuickBooks` connector can set an account on a transaction** — not on a pending bank-feed
> item, not on one already posted. ⚠️ **And one tool looks like the exception and is not:
> `quickbooks_transaction_import` CREATES transactions rather than editing them, and what it hits is
> not the ledger you would expect — §9.** So the deliverable is the *worklist*:
> each item, the account to move it to, and why. Reach for `get_similar_transactions` when deciding —
> it returns how a payee has been coded historically.
> ✅ **And for the PENDING queue, which no connector can even list, there is a working route Lilian
> established on 2026-08-26: she exports the uncategorized transactions from QuickBooks to Excel and
> uploads the file.** A session reads the sheet, applies the client's rules to every row, and hands
> back the decided list; she applies it. This is the way to work a backlog the MCP is blind to — the
> built-in `xlsx` skill reads the workbook (it ships with Claude Code — there is no folder for it
> under `.claude/skills/`). ⚠️ The sheet carries real client figures and payees:
> work it in chat, deliver the result to her, and **commit none of it** (two-data-homes).
> ⛔ **Do not restate either connector's write surface here** — an enumeration in a skill that is not
> about connectors is the line that rots first, and the one that stood here until 2026-08-26 was
> already wrong in both halves. **The audited list lives in one place**, and it is the
> [`double-mcp` capability map](../double-mcp/references/capability-map.md) **§9** — which also
> records that Double *can* post journal entries (the accruals family), so "read-only" is the wrong
> mental model even though no tool recategorizes. _(Audited 2026-08-26, after Lilian asked
> directly.)_

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
- **Parents never receive postings** — post to sub-accounts only. ⚠️ **But "is it a parent?"
  is a question about THIS CLIENT'S chart, never about the firm standard.**
  the firm standard is the **template every client is adapted from**, not a description of any
  one of them: an account that is a parent there can be a plain **posting account** in a client's
  chart that never took those children. ⓘ **And check it in the right place** — the prose page
  [`chart-of-accounts-standard.md`](../../../projects/sops/chart-of-accounts-standard.md) carries
  the ranges and the rules but **no account numbers at all**; the 125-account list, with the
  `parent` flag on each, is `projects/sops/assets/S-Corp-COA-master.xlsx` and its derived
  `projects/knowledge-hub/coa-standard.json`. **Look at the client's chart before you invoke this rule** — and check whether the
  chart says so itself: some of them carry the parent's marker in the account description
  (Masciave's reads *"THIS IS A PARENT CATEGORY, ONLY USE SUBACCOUNTS"*, and those accounts are
  locked). _(2026-09-01: a review round read the firm standard as if it were the client's
  chart and turned a settled instruction of Lilian's into a contradiction. She resolved it in
  one line by opening the client's chart.)_
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
  worth allowing are **utilities and government agencies**, **and — provisionally, pending
  confirmation — RETAIL CHAINS AND PLATFORMS** (a gas-station chain, a hardware chain, the big
  online retailer, a truck-rental chain, a freelance marketplace). They share the reason: a covering
  bookkeeper cannot identify a *category of merchant* any other way, and none of them is one of the
  client's own people.
  ⚠️ **This is a SESSION'S GENERALISATION, not a firm ruling.** On 2026-08-26 Lilian allowed it for
  the **Ecoorganic runbook only** — *"el runbook puede nombrar cadenas retail sin problema"*. The
  firm-wide wording here was widened by a session so the two files stop contradicting each other,
  which is a real problem worth solving, but **she has not ruled on it for every client. Ask her
  before relying on it for another one** — [`FOLLOW-UPS.md`](../../../FOLLOW-UPS.md) tracks the
  confirmation. **What does NOT move is the client's
  own payees — subcontractors, individuals, the small local suppliers — which stay by role.** Say the choice out loud in the runbook, or the next session will
  "helpfully" fill the names back in.
  ✅ **Lilian also grants exceptions ONE PAYEE AT A TIME, when asked — and that route is the
  point.** On **2026-09-01** she told a session to name a client's permitting vendor in that
  client's runbook — *"ponlo con nombre en el SOP"* — because the whole rule was about that one
  payee and a role would have made it unusable. ⓘ **That was a ruling for one payee in one
  runbook, and it is written down there, not here** — a client's payee name has no business in
  a firm-wide file, and a reader who found one would take it as this rule loosening. **The
  reusable part is the asking:** write it by role, **register the question in the runbook's
  decisions log**, and let her answer — a permission is widened by asking, never by reasoning
  (CLAUDE.md). The name may then travel through the documents *about that client*; nowhere else.
- **A project/customer tag records a cost that belongs to ONE job — a cost that spans several
  carries NONE.** For any client whose work runs as jobs or projects (a design studio, a
  contractor), the rule has two halves and the second is the one that gets improvised: a cost
  incurred **for one identifiable job** is tagged with that job, and a **recurring fee that buys
  work across several jobs at once** is tagged with **nothing** — splitting it across projects
  would be an invention and tagging it to any one of them would be wrong. **Empty is the
  accurate answer there, not a missing one**, and saying so in the runbook is what stops the
  next bookkeeper "fixing" it. The test is **the reason for the spend, not the vendor** — the
  same payee can be tagged on one charge and untagged on another. ⚠️ It matters most where the
  client has **no timesheet integration**: then the tag is the only project-level data the books
  hold, and an untagged job cost is not recoverable from anywhere else.
  🛑 **Before writing a "count the occurrences" check on such a fee, ASK whether it is fixed —
  and take "we don't know" for an answer.** Some spanning fees are a fixed monthly retainer, and
  a missed one is exactly what [`recurring-expense-monitoring`](../recurring-expense-monitoring/)
  exists to catch; others follow whatever the client and the vendor agree, month to month. **The
  runbook has to say which**, because a reviewer told to expect a number on an unfixed fee will
  raise false alarms or explain a real gap away. Where neither figure can be stated, write **no
  expected count and no expected amount**, check the **coding of the charges that exist** — and
  keep the completeness question somewhere else in the checklist (*did the period import at
  all?*), so "nothing there" can still never mean "nothing imported". _(Lilian, 2026-09-01, on
  Masciave's permitting vendor: she declined to record either figure, on purpose — "eso depende
  de las necesidades de nuestra clienta y lo que acuerde con esa compañía." **A deliberate
  absence is not a gap to fill** — but it is not a licence to stop checking the feed either.)_
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
generalizing that one the same way is the remaining next step.
⓵ **But a rules-shape runbook does not have to wait for that** — `closeProcessReader` renders
*every* section generically (`closeSectionBody` already dispatches rule cards, the checklist, the
decisions table and the number-range strip), so a **new rules-shape client is also just a `.md` +
a `close` config**, with the ribbon carrying the client's costing **decision** instead of a close.
Masciave is the first (2026-09-01). The knobs: **`kind`** (the print cover's subtitle) and
**`flowTitle` / `flowLede`**, which override the ribbon's hard-coded *"How each month runs · The
same pass every month"* — **use them for any client that is not monthly**, or the team page tells a
quarterly client's bookkeeper something false. Both accept **`''`** to mean *omit this*, and the
print book's contents line is **derived from `flowTitle`** so the PDF cannot keep saying "the
monthly flow" while the screen says something else (`flowToc` overrides the derived wording).
🔵 **Inside this reader, the status chip, the print cover and the `.txt` export read the `.md`'s
own `**Status:**` header** — so a runbook marked *In review* cannot circulate as approved procedure.
⚠️ **The Hub CARD is not wired to it** — every SOP card still shows a hard-coded *Active* pill, and
six of the eight runbooks say `Status: Active` in the header while the line below says *In review*.
Making the cards honest is a firm-wide Hub change and a labelling question for Lilian, not something
to slip into a client's PR ([`FOLLOW-UPS.md`](../../../FOLLOW-UPS.md) row 66).
Do all Hub work through the
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
- `projects/sops/masciave-design-studio-bookkeeping-review.md` — a rules-shape runbook rendered
  through the **reusable** close reader (`close` config + `flowTitle`/`flowLede`); the
  project-tag rule and its recurring-fee exception.
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
