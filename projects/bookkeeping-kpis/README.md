# Bookkeeping KPIs

> **Status:** Active · **Owner:** Lilian · **Started:** 2026-07

On-brand, dynamic **bookkeeping-performance dashboards** — one per bookkeeping
client — that turn a client's live QuickBooks/Double financials into a fast,
visual read of how the books look: headline numbers, a health score, ranked
signals & alerts, expense breakdown, revenue-vs-net trend, and a balance-sheet
snapshot. Internal review tool for the firm, not a client deliverable.

## Purpose

The firm reviews every bookkeeping client's books, but "how are they doing?"
lived in spreadsheets and heads. This project makes that review **a designed
page you can scan in seconds** and, over time, **a single board that lists every
bookkeeping client** — tap a client, open their indicators. Ecoorganic USA was
the first pilot; the goal is one for every bookkeeping client, all built the
same way.

The reusable recipe (structure, design rules, data sources, health-score logic)
lives in the [`bookkeeping-kpis` skill](../../.claude/skills/bookkeeping-kpis/)
— read it before building or extending a dashboard. This README is the project
home; the skill is the engine.

## What's here

```
bookkeeping-kpis/
├── README.md                                     ← you are here
└── template/
    └── bookkeeping-performance-template.html     ← the reusable reference page
                                                     (sample data, no real client)
```

- **`template/bookkeeping-performance-template.html`** — a complete, self-contained
  dashboard rendered with **sample data** for a fictional "Sample Client LLC."
  It is the committed reference: same sections, charts, colors, dark/light
  theme, and motion that every real client's page should have. Copy it, swap in
  a real client's figures, and deliver that page **as an artifact** — the real
  one is never committed (see Outputs).

## Brand & design

Every dashboard is built with the [`impeccable`](../../.claude/skills/impeccable/)
skill and the **Atlas Design System** — always, by default. Colors, fonts, and
tokens come from the shared foundation; nothing is invented per page.

- Brand rules & voice: [`../../brand/JK-Brand-Guide.md`](../../brand/JK-Brand-Guide.md)
- Design tokens / CSS: [`../../brand/design-system/`](../../brand/design-system/)
- Logos: [`../../brand/logo/`](../../brand/logo/)

Pages are **dynamic and visual** — animated count-ups, a health ring, scroll
reveals, bar/column charts, sparklines — in the spirit of the Ecoorganic pilot.
This is a standing requirement, not a nice-to-have.

## Skills & tooling

- [`bookkeeping-kpis`](../../.claude/skills/bookkeeping-kpis/) — the house recipe
  for these dashboards (structure, design rules, data sources, health-score
  logic, the build/verify/publish flow, and the data-handling rule below).
- Data comes from **QuickBooks / Double** (live financials). Client knowledge
  and categorization rules come from
  [`client-intelligence`](../client-intelligence/) and the client's
  [`bookkeeping-sop`](../../.claude/skills/bookkeeping-sop/) runbook.

## Outputs

- **Committed:** only the sample-data **template** in `template/`.
- **Not committed:** a **real client's dashboard** — it is all client dollar
  figures, which per the firm rule stay in the client systems, **out of the
  repo**. A real page is generated from the template and **delivered as an
  artifact** (stable link the team can bookmark), the same way client reports
  are handled. This mirrors the pilot: the Ecoorganic dashboard lives as an
  artifact, not in git.

## Working on this / notes for AI

- **Read the [`bookkeeping-kpis` skill](../../.claude/skills/bookkeeping-kpis/)
  first** — it holds the required structure, the design rules, and the
  data-handling rule. Load [`impeccable`](../../.claude/skills/impeccable/) for
  any visual change.
- **Never commit a real client's figures.** Only the sample template is in the
  repo. Build a real page from the template and hand it over as an artifact.
- **The all-clients board is the next step.** The pilot page already shows "how
  it looks in the grid — one card per client." The target is one page that lists
  every bookkeeping client and opens each client's dashboard. Its exact name and
  whether it lives here or links from the [Knowledge Hub](../knowledge-hub/) is
  an open decision to settle with Lilian — see the skill's "open questions."
- **Self-contained, portable to Odoo.** One HTML file, CSS/JS inline, fonts
  embedded, `data:` URIs, zero external requests — so it works inside an Artifact
  and can move to the firm's Odoo site unchanged.
