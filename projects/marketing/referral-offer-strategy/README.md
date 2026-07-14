# Referral & Offer Strategy

> **Status:** Planning · **Owner:** Julia · **Started:** 2026-07

Strategy for JK Accounting Group's front-end offer and referral-partner
funnels: a paid diagnostic ("Business Financial Readiness Assessment") that
feeds an ongoing advisory retainer, partner-specific pitches (real estate,
marketing agencies, attorneys, bankers), and a multi-session workshop series
("Growth Accelerator Series") for a marketing agency's existing client base.

## Purpose

JKA wants referral partners and a repeatable front-offer to fill the top of
the funnel, instead of relying on word of mouth alone. The strategic bet:
the front offer (an assessment/diagnostic) isn't the product — it's what
makes the cost of *not* having a real finance partner visible, so it
converts into the actual product, the ongoing advisory retainer. This
project holds that funnel design, the partner-by-partner pitches, and the
workshop series built for one marketing-agency partner, so the thinking
doesn't live only in chat history.

## What's here

```
referral-offer-strategy/
├── README.md        ← you are here
├── strategy.md      ← the full strategy: funnel logic, partner positioning,
│                       Growth Accelerator Series, scorecard design, open questions
└── partner-pitch/   ← leave-behind for the marketing-agency partner conversation
    ├── one-pager.html         on-brand EN handout (free → $500 credited → monthly
    │                           ladder, two channels, partner benefits) — print/PDF
    ├── one-pager-ru.html      native-Russian version of the handout
    ├── growth-series-ru.html  native-Russian one-pager: the 3 co-hosted Growth
    │                           Series sessions (themes, take-homes, series close)
    ├── talk-track.md          plain-language script + Readiness Check timing
    └── worksheets/            fillable RU session take-homes (interactive + print)
        ├── readiness-check-ru.html     session 1 — self-scored readiness quiz
        ├── margin-calculator-ru.html   session 2 — true-margin calculator
        └── keep-more-checklist-ru.html session 3 — tax-efficiency checklist
```

> First partner: **Candramas LLC** (owner Boris). The Growth Series lists the
> three sessions decided for this project (readiness → true margin → keep-more);
> the Readiness Check timing is fixed in `talk-track.md` (client fills in ~5 min,
> the live finance block is ~15 min).

## Brand & design

The `partner-pitch/` deliverables are built on the Atlas design system
(teal/bronze/ivory, Source Serif 4 + IBM Plex, the Medallion lockup) via the
`impeccable` skill — see [`../../../brand/JK-Brand-Guide.md`](../../../brand/JK-Brand-Guide.md).
Any further client-facing asset (landing page, additional worksheets) should
follow the same system.

## Skills & tooling

None yet. If the worksheet templates or the free top-of-funnel quiz get
built as a repeatable generation workflow, that's a candidate for a new
skill in [`.claude/skills/`](../../../.claude/skills/) — flag it when we get
there.

## Outputs

- **`partner-pitch/`** — the first built deliverables, for the marketing-agency
  partner (Candramas LLC): an on-brand partner handout in English and native
  Russian, a native-Russian Growth Series one-pager (the three co-hosted
  sessions), and a talk-track script. Encodes the decided front-offer (a $500
  Financial Health Check, fully credited into the first month of service), the
  free → paid → monthly ladder, the two partner channels (new-client onboarding
  + existing-client Growth Series), and the partner-benefit framing.
- **`partner-pitch/worksheets/`** — the three Growth Series take-homes, built as
  interactive, print-ready native-Russian files: a self-scored readiness quiz, a
  true-margin calculator, and a tax-efficiency checklist. Each is useful on its
  own but reveals where a professional is needed, closing toward the $500 check.

`strategy.md` remains the decisions-and-open-questions document. Per its §6,
still open: scoring rubric thresholds, the document/access checklist for the
paid assessment, Growth Accelerator Series logistics (landing page, promo copy,
list ownership), English versions of the three worksheets, and pricing for the
implementation phase. When any of these get built, add them here in an
obviously-named folder (e.g. `templates/`, `landing-page/`) and update this
section.

## Working on this / notes for AI

This is a live strategy doc, not a finished spec — treat `strategy.md`'s
"Open questions" section as the actual backlog for this project. Related
work: [`../positioning.md`](../positioning.md) covers
the firm's core value-prop messaging (the two of these should stay
consistent with each other); the IG video script brief lives in
[`../video-generation/`](../video-generation/), not here.
