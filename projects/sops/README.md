# SOPs — Standard Operating Procedures

> **Status:** Active · **Owner:** Julia · **Started:** 2026

The firm's **standard operating procedures** — the documented, repeatable way JK
Accounting Group does its work.

## Purpose

Capture how the firm runs — client onboarding, bookkeeping close, tax-prep
steps, review checklists, internal workflows — as clear, versioned procedures so
work is consistent, delegable, and auditable. A living internal reference for the
team (and for Claude when it assists with those workflows).

## What's here

```
sops/
├── README.md                                    ← you are here (index)
└── hollywood-broward-business-tax-receipt.md    ← City of Hollywood + Broward County BTR
```

_One Markdown file per procedure — self-contained where it helps, and
cross-referencing the originating project for deeper research/caveats when there
is one. Group into subfolders by area (e.g. `onboarding/`, `bookkeeping/`,
`tax/`) once there are enough to warrant it._

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

Project is in planning. When adding an SOP, keep it concrete and step-by-step,
and list it in the index above. Don't include client-specific data in a general
procedure.
