# SOPs — Standard Operating Procedures

> **Status:** Planning · **Owner:** Julia · **Started:** 2026

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
└── README.md          ← you are here (project not started yet)
```

_Scaffold only. Suggested structure once it starts: one Markdown file per
procedure, optionally grouped by area (e.g. `onboarding/`, `bookkeeping/`,
`tax/`), plus an index in this README._

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
