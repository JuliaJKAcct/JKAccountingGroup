---
name: bookkeeping-kpis
description: Build, extend, or restyle a JK Accounting Group bookkeeping-performance dashboard — the on-brand, dynamic per-client page that turns a bookkeeping client's live QuickBooks/Double financials into a fast visual read (headline numbers, a health score/ring, ranked signals & alerts, top-expense bars, a revenue-vs-net-income month chart, a balance-sheet snapshot). Use when creating a KPI/performance/"scorecard" page for a bookkeeping client, updating one with fresh numbers, building the all-clients board that lists every bookkeeping client (tap a client → their indicators), or changing what these dashboards show. Ecoorganic USA is the pilot; the committed reference is the sample-data template in projects/bookkeeping-kpis/. Encodes the standing requirements (always the impeccable skill + the Atlas Design System; dynamic — charts, colors, motion — in the spirit of Ecoorganic; self-contained/portable-to-Odoo; dark/light), the required section structure, the data sources, and the hard rule that a real client's figures are NEVER committed (only the sample template lives in the repo; a real page ships as an artifact). Builds on the impeccable skill; relates to knowledge-hub and client-intelligence without duplicating them.
---

# Bookkeeping KPIs — the house way

The engine behind [`projects/bookkeeping-kpis/`](../../../projects/bookkeeping-kpis/):
**one on-brand, self-contained page per bookkeeping client** that reads that client's
books at a glance — and, over time, **one board that lists every bookkeeping client** and
opens each client's dashboard. Ecoorganic USA was the first pilot. Read the project's own
[`README.md`](../../../projects/bookkeeping-kpis/README.md) alongside this skill.

**Why this exists:** the recipe (what to show, how it looks, where the numbers come from,
how a client's data is handled) was worked out with Lilian and must survive across
sessions — so any session builds the next client's page the same way. The committed
reference is
[`projects/bookkeeping-kpis/template/bookkeeping-performance-template.html`](../../../projects/bookkeeping-kpis/template/bookkeeping-performance-template.html)
(sample data, fictional client). Copy it; don't reinvent it.

## Design is not optional — impeccable + the Design System, always

**Every one of these pages goes through the [`impeccable`](../impeccable/) skill and the
Atlas Design System — by default, unprompted.** This is Lilian's explicit standing
instruction for this work; it rides on the repo-wide rule in
[`CLAUDE.md`](../../../CLAUDE.md). Compose only from Atlas tokens
(`brand/design-system/`); never invent colors or fonts.

**These pages are dynamic and visual — that is a requirement, not a flourish** (Lilian):
animated count-ups, a health **ring**, scroll-reveal sections, bar/column charts, a
sparkline, hover titles — the feel of the Ecoorganic pilot. Reach for diagrams, charts,
and motion over walls of text. Battle-test with browser screenshots (**light, dark,
mobile**) before shipping.

## Self-contained & portable to Odoo (do not break this)

Each dashboard is **one HTML file** — HTML + CSS + JS inline, **fonts embedded**, any
image as a `data:` URI, **zero external requests, no server**. This is what lets it work
inside a CSP-restricted Artifact and **move to the firm's Odoo website unchanged**. Never
add a runtime dependency or an external fetch. (The template already embeds the brand
fonts and its own animation script; keep it that way.)

## The required structure (what a dashboard shows)

Same sections, same order, same class vocabulary (`bp-*`) as the template:

1. **Header bar** — JK mark + "Bookkeeping Performance", a live/source pill, a **theme
   toggle** (light/dark).
2. **Hero** — client name + meta chips (business type · state · legal structure · period ·
   basis), three **headline stats** (Revenue YTD · Net income YTD · Cash on books, with
   count-up), and a **health ring** score /100 with a severity tag.
3. **Grid card** — how the client looks as one card in the all-clients board ("one card
   per client, click to open").
4. **Signals & alerts** — the findings, **ranked by severity**: `crit` (red) · `watch`
   (amber) · `info`/Note (blue). Each is a plain-language title + one-line "why it
   matters". This is the heart of the page.
5. **Headline numbers** — a strip of key figures (Revenue, Gross margin, A/R outstanding,
   Expenses…) with a sparkline.
6. **Where the money goes** — **top-expense bars** (proportional) + a **Revenue vs. net
   income by month** column chart (a shared zero line; revenue up, net up/down).
7. **Balance-sheet snapshot** — cash, A/R, fixed assets, liabilities, owner
   contributions/distributions, gross profit, COGS.
8. **Footer** — an honest note on what the page is; a disabled/next-step button for the
   future client-facing report.

**The health score & severity model.** The ring score (0–100) and each alert's severity
express bookkeeping *health*, not just profitability — negative book-cash, revenue gaps,
cost-without-revenue, stale A/R, un-reclassified categories, 1099 exposure, missing
depreciation. Score low when the books can't be trusted yet (incomplete/unreconciled),
not merely when the client lost money. Keep the class vocabulary (`crit`/`watch`/`info`,
`.v.bad`/`.warn`/`.good`) — all are styled in the template's CSS.

## Where the numbers come from

- **Live financials: QuickBooks / Double.** Pull the client's P&L, balance sheet, A/R
  aging, and expense detail for the period. (Double MCP: `get_profit_loss_report`,
  `get_balance_sheet_report`, `get_ar_aging_report`, `get_expenses_by_vendor_report`,
  `get_transactions`.) QuickBooks MCP has equivalents.
- **Context: the client's own runbook + file.** The client's
  [`bookkeeping-sop`](../bookkeeping-sop/) runbook (categorization rules, the meals→owner
  rule, 1099 process) and [`client-intelligence`](../client-intelligence/) file tell you
  which movements are *expected* vs. a real flag. Use them so an alert reflects the
  client's actual policy (e.g. "meals move to owner distributions").

## Client data NEVER goes in the repo (hard rule)

A real client's dashboard is **all dollar figures** — exactly what the firm keeps out of
the repository ([`CLAUDE.md`](../../../CLAUDE.md): client figures live in QuickBooks /
Double / Drive, not git; the pilot page itself is footered "kept out of the repository").
So:

- **Commit only the sample-data template.** Never commit a page carrying a real client's
  numbers (or a real name attached to real numbers).
- **Deliver a real client's page as an artifact** — publish with the **Artifact** tool and
  give the team the link; keep the working file in the session scratch, not the repo.
- **To update an existing client's dashboard, republish to the SAME artifact URL** (pass
  its `url`) so the team's bookmark never changes.
- If someone asks to commit a real page, surface this rule first; commit a **sanitized
  sample** if a repo copy is wanted (that is how this project's template was created — a
  de-identified copy of the Ecoorganic pilot).

## The all-clients board (next step) — open questions

The pilot already renders the "grid — one card per client, click to open." The target is
**one page that lists every bookkeeping client and opens each dashboard**. Not yet built.
Two decisions to settle **with Lilian** before building it:

1. **Its name** — Lilian named this board in an earlier (lost) session; the name wasn't
   recovered. Confirm the name before committing folders/labels.
2. **Where it lives** — its own page in this project, **or** folded into / linked from the
   [Knowledge Hub](../../../projects/knowledge-hub/) (which already lists clients with a
   **Bookkeeping** service facet and opens designed pages in-page). The Hub is
   **team-shared and published**; these dashboards are **internal, live financials, "not
   for distribution"** — so a shared board must respect that (a bookkeeper shouldn't see
   another client's financials). Resolve the access model as part of this decision.

## Relationship to the Hub & client-intelligence (don't duplicate)

- **Knowledge Hub** = the firm-wide, team-shared index of SOPs + clients. These KPI
  dashboards are a *different* artifact type (internal, live financials). Cross-link; don't
  re-implement the Hub here, and don't drop live client financials into the shared Hub.
- **client-intelligence** = the durable per-client knowledge (obligations, systems). It
  supplies the *context* for alerts. The KPI dashboard is the *live financial* view; the CI
  file is the *standing knowledge*. Keep them distinct.

## Build / verify / publish flow

1. **Copy the template** to a scratch file; swap in the real client's figures, name, meta,
   the health score + ring geometry, the alerts, the charts (bar widths, month heights, the
   shared zero line), and the balance-sheet cells.
2. **Design with impeccable.** Screenshot the page **light + dark + mobile**; force the
   scroll-reveal sections visible for the shot (add the `in` class to
   `.bp-reveal, .bp-alerts, .bp-ring, .bp-mplot, .bp-ebar, .bp-spark-l`). Chromium at
   `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`, Playwright at
   `/opt/node22/lib/node_modules/playwright` (CommonJS: `import pw from '…'; const {chromium}=pw`).
3. **Verify before shipping:** page has **zero external requests** (no `http(s)` `src`/`href`
   outside `data:`); the inline `<script>` passes `node --check`; count-ups, ring, charts,
   and the theme toggle all render. For a real client, **grep the file to confirm no other
   client's data leaked in** from the template you copied.
4. **Publish as an artifact** (real client) or update the template (repo). Publish only
   with the user's go-ahead; reuse the same URL to keep links stable.
5. **Repo changes: commit → PR → independent review → merge** (never merge unreviewed —
   CLAUDE.md). Keep the nav-map indexes in sync (skills index, projects index, root README,
   CLAUDE.md).

## Files

- `projects/bookkeeping-kpis/template/bookkeeping-performance-template.html` — the committed
  reference page (sample data). Copy this to start a real client's dashboard.
- `projects/bookkeeping-kpis/README.md` — the project home.

*Update this skill whenever a round with Lilian changes what these dashboards show, the
health-score model, the data-handling rule, or once the all-clients board's name and home
are decided — it is the memory of "how we build the bookkeeping-KPI pages."*
