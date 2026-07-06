# Client Services

> **Status:** Active · **Owner:** Julia · **Started:** 2026-07

The home for JK Accounting Group's day-to-day client work — accounting,
bookkeeping, and tax tasks — done with Claude's help. An umbrella project that
grows one task type at a time.

## Purpose

Julia's everyday work generates many small, recurring jobs: business-license
filings, sales-tax registrations, monthly closes, payroll setup, and so on.
Rather than spin up a separate project for each before we know it's recurring,
this project is a **landing zone** for that operational work.

The rule that keeps it from becoming a junk drawer: each task type gets its own
**subfolder** with a checklist/guide, and this README's **Task index** below
stays current as the map. When a task type proves repeatable and well-defined
(like Business Tax Receipts), we "graduate" it into a reusable
[skill](../../.claude/skills/) — the same way the firm already did with
*reasonable-compensation* and the video pipeline.

## What's here

```
client-services/
├── README.md                  ← you are here (task index)
└── business-tax-receipts/     ← FL Business Tax Receipt (BTR) filings
    ├── README.md              ← how this task works
    ├── hollywood-broward-btr-guide.md   ← reusable step-by-step guide
    ├── intake-checklist-template.md     ← blank per-client intake
    └── clients/               ← per-client working files (NOT committed)
```

## Task index

| Task type | Folder | What it covers | Status |
|---|---|---|---|
| Business Tax Receipts | [`business-tax-receipts/`](./business-tax-receipts/) | FL city + county Business Tax Receipts (local business licenses), starting with Hollywood / Broward County. | Active |

> Add a row here every time a new task type appears. Keep it current — it's the
> map of this project.

## Brand & design

Mostly not applicable — these are working documents and checklists, not branded
deliverables. If a client-facing document (a cover letter, a summary) is ever
produced here, it follows the shared brand:

- Brand rules & voice: [`../../brand/JK-Brand-Guide.md`](../../brand/JK-Brand-Guide.md)

## Skills & tooling

None yet. Task types that become repeatable will graduate into skills in
[`.claude/skills/`](../../.claude/skills/), linked from their subfolder README.

## Outputs

Reusable **guides and templates** live in each task subfolder and *are*
committed — they're firm assets. **Per-client working files** (intake sheets
with a real client's name, address, EIN, figures) live in each task's
`clients/` folder and are **kept local / not committed** unless Julia explicitly
asks. Client data is sensitive; see the root [`CLAUDE.md`](../../CLAUDE.md).

## Working on this / notes for AI

- **Never commit client-specific data** (names, addresses, EINs, dollar figures)
  without Julia's explicit go-ahead. Keep it in `clients/` locally.
- Reusable guides/templates are fine to commit and improve.
- Trámites and requirements change — treat every guide's fees/forms as
  "verify before filing," and confirm from the official source or by phone.
- Julia works with Ukrainian- and Russian-speaking business owners; keep
  client-facing language plain and translation-friendly.
- When a task type matures, follow the "new project / new skill" steps in the
  root [`CLAUDE.md`](../../CLAUDE.md) to graduate it into a skill.
