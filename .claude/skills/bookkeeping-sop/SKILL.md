---
name: bookkeeping-sop
description: Write, update, or review a JK Accounting Group per-client BOOKKEEPING runbook SOP — the monthly categorization + independent-review procedure for one bookkeeping client (e.g. projects/sops/ecoorganic-bookkeeping-review.md). Use when creating or editing a client's monthly-bookkeeping SOP, adding/changing a categorization rule, the 1099 process, the chart-of-accounts conventions, the review checklist, or the open-decisions log — and to know how that runbook must be presented in the Knowledge Hub. Encodes the two-layer rule (the .md keeps MAXIMUM detail as source of truth; the Hub shows the curated visual view), the required .md structure that drives the Hub render (bold-led numbered rules → rule cards, a Status-column decisions table → status pills, a number-range grammar line → range strip, a numbered checklist → check items), the firm's categorization framework + the color mental model (owner/equity = bronze · business/P&L = teal · investigate = blue · triage = amber), the firm-wide bookkeeping principles vs. what's client-specific, and the team-facing curation rules. Two shapes are supported — a categorization-rules runbook (Ecoorganic pilot) and a month-end close-process runbook (Magnum 152 pilot) whose steps each carry a Drive "material" button to the source material. Builds on the sop-authoring skill (house structure) and feeds the knowledge-hub skill (the Hub render).
---

# Bookkeeping-client SOP — the house way

A **bookkeeping runbook** is a per-client SOP: how *one* client's books are kept and
reviewed **every month**. One file per client in
[`projects/sops/`](../../../projects/sops/), named `<client>-bookkeeping-review.md`.

**Two shapes** — pick what the client's work actually is (a runbook can also blend both):

- **Categorization-rules** — how transactions get coded + reviewed: the categorization
  rules, chart-of-accounts conventions, the 1099 process, the reviewer checklist, and the
  open-decisions log.
- **Month-end close-process** — a step-by-step monthly close (pull reports → journal
  entries → consolidate → reconcile → reclass → close gate), where **each step carries a
  Drive "material" button** to the exact working file / walkthrough.

Two reference pilots (keep them as the living patterns), both rendered in
[`build-hub.mjs`](../../../projects/knowledge-hub/build-hub.mjs):

- **Categorization-rules:** [`ecoorganic-bookkeeping-review.md`](../../../projects/sops/ecoorganic-bookkeeping-review.md) → `ecoorganicReaderInner`.
- **Close-process:** [`magnum-152-bookkeeping-review.md`](../../../projects/sops/magnum-152-bookkeeping-review.md) → `magnumReaderInner`.

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

**Client-specific (lives in that client's `.md`, NOT this skill):** dollar thresholds (e.g.
Ecoorganic's $25 gas line), the specific vendors and accounts, the owner's account numbers,
and the exact decision-flow gates. Don't hard-code one client's numbers as a firm rule.

## How it's presented in the Hub

The Hub view (owned by the [`knowledge-hub`](../knowledge-hub/) skill; rendered by
`build-hub.mjs`) has two kinds of content:

- **Generic section renderers** (structure-driven, client-agnostic *functions*): rule cards,
  status-pill decisions table, numbered check items, the number-range strip, and the
  **book-mode PDF** (a cover page + a Contents/index page + one section per page, via the
  "Save as PDF manual" button) plus a plain-text download. They read from any runbook `.md`
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

**Current state / next work:** today there are **two** hand-built readers —
`ecoorganicReaderInner` (rules shape) and `magnumReaderInner` (close-process shape) — each a
client-named function that composes the shared renderers (`ecoRuleCards`, `ecoChecklist`,
`ecoDecisionsTable`, `magnumSteps`, `magnumResList`, …). So a new
`<client>-bookkeeping-review.md` still does **not** render for free: it needs its own
reader + catalog entry + a `/…/.test(it.file)` dispatch line. The tracked next step is to
split this into (a) a **reusable** per-client bookkeeping reader driven by a catalog flag
(shape: rules | close-process) instead of a client-named function, and (b) any truly
bespoke curated visual per client. Until then, copy the closest pilot's reader and swap the
content. Do this through the [`knowledge-hub`](../knowledge-hub/) skill and its
**verify-before-publish gate**.

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
- `projects/knowledge-hub/build-hub.mjs` — the readers `ecoorganicReaderInner` and
  `magnumReaderInner`; the generic section renderers (`ecoRuleCards`, `ecoDecisionsTable`,
  `ecoChecklist`, `ecoCoaConventions`); the curated visuals (`ecoSignature`,
  `ecoMonthlyFlow`, `ecoDecisionFlow`); the close-process renderers (`magnumSteps` with
  `matRow` / `matLinksFrom` / `matIcon`, `magnumResList`, `magnumFlow`, `magnumSignature`);
  and the print book.
- `projects/knowledge-hub/hub.css` — the components (rule cards, status pills, the flow
  ribbon, the close-process **step cards** `.mstep`, the **material buttons** `.matlink`,
  the **resource list** `.resrow`), composed only from Atlas tokens.

*Update this skill whenever a round with Lilian establishes a new bookkeeping-SOP rule,
convention, or presentation preference — it is the memory of how these client runbooks are
written and shown.*
