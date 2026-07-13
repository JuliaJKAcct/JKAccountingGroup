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
    ├── one-pager.html      on-brand EN handout (free → $500 credited → monthly
    │                        ladder, two channels, partner benefits) — print/PDF ready
    ├── one-pager-ru.html   native-Russian version of the handout
    └── talk-track.md       plain-language script for walking a partner through it
```

> First partner personalized for **Boris · Candramas LLC**; the Growth Series
> on the handout lists the three sessions decided for this project (readiness →
> true margin → keep-more).

## Brand & design

No visual output yet. Once any of this strategy turns into a landing page,
worksheet template, or scorecard deliverable, that output should follow
[`../../../brand/JK-Brand-Guide.md`](../../../brand/JK-Brand-Guide.md) like every
other client-facing asset.

## Skills & tooling

None yet. If the worksheet templates or the free top-of-funnel quiz get
built as a repeatable generation workflow, that's a candidate for a new
skill in [`.claude/skills/`](../../../.claude/skills/) — flag it when we get
there.

## Outputs

- **`partner-pitch/`** — the first built deliverable: an on-brand one-pager
  handout plus a talk-track script for the marketing-agency partner
  conversation. Encodes the decided front-offer (a $500 Financial Health Check,
  fully credited into the first month of service), the free → paid → monthly
  ladder, the two partner channels (new-client onboarding + existing-client
  Growth Series), and the partner-benefit framing.

`strategy.md` remains the decisions-and-open-questions document. Per its §6,
still open: scoring rubric thresholds, the document/access checklist for the
paid assessment, Growth Accelerator Series logistics (landing page, promo copy,
list ownership), the four worksheet templates, and pricing for the
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
