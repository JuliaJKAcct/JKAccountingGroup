# SOPs — Standard Operating Procedures

> **Status:** Active · **Owner:** Julia · **Started:** 2026

The firm's **standard operating procedures** — the documented, repeatable way JK
Accounting Group does its work.

## Purpose

Capture how the firm runs — client onboarding, bookkeeping close, tax-prep
steps, review checklists, internal workflows, and **day-to-day client-task
runbooks** (e.g. a Business Tax Receipt filing) — as clear, versioned procedures
so work is consistent, delegable, and auditable. A living internal reference for
the team (and for Claude when it assists with those workflows).

Each procedure here is **reusable firm knowledge**, safe to commit. A specific
client's data (names, addresses, EINs, filled-in forms) is **not** — that lives
in the firm's client systems (Drive / Double / QuickBooks). Procedures include a
blank template to copy out; the filled-in copy stays in those systems.

## What's here

```
sops/
├── README.md                                    ← you are here (index)
└── hollywood-broward-business-tax-receipt.md    ← City of Hollywood + Broward County BTR
```

_**One self-contained Markdown file per procedure** — the single source of truth
for that task, no split summary/detailed versions to keep in sync. Group into
subfolders by area (e.g. `onboarding/`, `bookkeeping/`, `tax/`) once there are
enough to warrant it._

## Index

| SOP | What it covers |
|---|---|
| [`hollywood-broward-business-tax-receipt.md`](./hollywood-broward-business-tax-receipt.md) | Filing a Business Tax Receipt for a business in Hollywood, FL / Broward County — city + county steps, links, and the home-occupation zoning gate. |

## Brand & design

Mostly internal text documents — brand styling optional. If any SOP becomes a
client-facing or presented document, apply the shared brand
([`../../brand/`](../../brand/)).

## Skills & tooling

None yet. Well-written SOPs here can later become Claude skills in
[`.claude/skills/`](../../.claude/skills/) when a procedure is repeatable enough
to automate.

## Outputs

The procedures themselves (Markdown), committed to this folder as the internal
source of truth.

## Working on this / notes for AI

When adding an SOP: keep it concrete and step-by-step, make it **one
self-contained file** (no separate summary/detailed pair), and list it in the
index above. **Never** put client-specific data (names, addresses, EINs, dollar
figures, filled-in forms) in a procedure — that belongs in the firm's client
systems, not the repo. Include a blank template inside the SOP for copying out.
