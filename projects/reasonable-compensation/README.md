# Reasonable Compensation

> **Status:** Active · **Owner:** Julia · **Started:** 2025

Determine and document a defensible **reasonable-compensation (reasonable
salary)** figure for an S-corporation shareholder-employee, and produce a
branded, print-ready HTML report that shows the work.

## Purpose

The IRS requires an S-corp owner to take a *reasonable* wage before
distributions; a low salary with large distributions is the classic audit
trigger. This project develops three approaches (cost / market / income),
reconciles them into one defensible figure, and documents it against the IRS
reasonableness factors — the same backbone as the paid commercial reports.

## What's here

```
reasonable-compensation/
├── README.md          ← you are here
└── reports/           ← generated client reports (one HTML file per client-year)
    └── solux-media-2025.html    worked example — mirror its structure
```

## Brand & design

Reports are on-brand JK documents. The palette and type (Petrol Teal `#123841`,
Warm Bronze `#9C6A39`, Soft Ivory, Source Serif 4 / IBM Plex Sans / IBM Plex
Mono) are wired into the report template — don't restyle off-brand. Source:
[`../../brand/`](../../brand/).

## Skills & tooling

- [`reasonable-compensation`](../../.claude/skills/reasonable-compensation/) —
  the engine. It runs the intake interview, triangulates wage data, computes the
  three approaches, and fills the report template. **Start there** for any new
  analysis.

## Outputs

One report per engagement at `reports/<client-slug>-<tax-year>.html`
(slug = lowercase, hyphenated client name). Reports are only committed/pushed
when explicitly requested — they contain client-specific figures.

## Working on this / notes for AI

Invoke the `reasonable-compensation` skill rather than working freehand. Never
fabricate a wage figure, BLS statistic, case citation, or client fact — mark
missing inputs *"Not provided."* This is decision support, not legal/tax advice;
keep the report's limitations section intact. Confirm the entity is actually an
S-corp before computing.
