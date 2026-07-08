# Recurring-Expense Monitoring

> **Status:** Active · **Owner:** Julia · **Started:** 2026-07

An automated monthly watch over each monitored client's **recurring payments** —
subscriptions, insurance, storage, utilities, payroll-service fees, the firm's own
fee, loan/finance payments. It flags anything that **didn't post** or posted at an
**unusual amount**, plus **new** recurring charges, and emails a short exception
report to the staff member who owns the client.

## Purpose

Recurring payments sometimes fail quietly — a card declines, an ACH is returned for
insufficient funds — and if we notice late, the client gets a late fee or a lapsed
policy and asks why we, who keep their books, didn't catch it. This project catches
those misses **early** (a mid-month and an end-of-month sweep) so the team can act
before the penalty. It reads the client's ledger from Double/QuickBooks, compares it
to a curated per-client watchlist, and reports only the exceptions worth a human's
attention.

## What's here

```
recurring-expense-monitoring/
├── README.md               ← you are here
├── SOP.md                  ← the runbook: how it works, how to operate & curate it
└── watchlist-template.md   ← blank per-client watchlist to copy into Google Drive
```

The **engine** is the [`recurring-expense-monitoring` skill](../../.claude/skills/recurring-expense-monitoring/).
The **per-client watchlists** (with real vendors and amounts) live in **Google
Drive**, not this repo — see below.

## Brand & design

The emailed report is **on-brand**. Its HTML uses the shared
[`../../brand/`](../../brand/) system (petrol teal + bronze on ivory, Source Serif 4 /
Georgia headings, the mono service-line kicker) via an email-safe template —
[`../../.claude/skills/recurring-expense-monitoring/reference/email-template.html`](../../.claude/skills/recurring-expense-monitoring/reference/email-template.html).
"Email-safe" means table layout + inline styles + web-safe font fallbacks and no
SVG, so it survives Gmail while still looking like JK.

## Skills & tooling

- [`recurring-expense-monitoring` skill](../../.claude/skills/recurring-expense-monitoring/) —
  the engine: reads the watchlist + ledger, evaluates each item, writes and emails
  the report.
- **Double** (transaction ledger), **Google Drive** (watchlists), **Gmail**
  (delivery) — all via their MCP integrations.

## Outputs

- **Monthly email reports** to the responsible staff member (default
  `lilian@jkaccountinggroup.com`). Not committed — they contain client figures.
- **Per-client watchlists** in the Google Drive folder **"JK Recurring-Expense
  Watchlists"**, one file per client. **Not committed** — client data.

## Working on this / notes for AI

- **Never commit client data.** Vendors, amounts, and the filled-in watchlists stay
  in Google Drive / Double / QuickBooks. This repo keeps only the reusable engine
  and the blank `watchlist-template.md`.
- **Schedule:** two sweeps per client per month — **day 20** (catch early-month
  failures with time to fix) and the **last day of the month** (full-month view).
- **Scope:** currently the clients owned by **Lilian**. Add or remove a client by
  adding/removing its watchlist file in the Drive folder — no code change needed.
- **Definition of done for changes here:** confirm the folder structure and the
  index tables (root `CLAUDE.md`, `projects/README.md`) are consistent, and run an
  independent review before merging.
