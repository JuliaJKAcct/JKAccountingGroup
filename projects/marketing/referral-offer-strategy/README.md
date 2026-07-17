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
├── README.md     ← you are here
├── strategy.md   ← the full strategy: funnel logic, partner positioning,
│                    standardized front-offer chassis, Growth Accelerator
│                    Series, scorecard design, open questions
└── templates/    ← built deliverables (see Outputs below)
```

## Brand & design

The built checklist templates (see Outputs below) follow
[`../../../brand/JK-Brand-Guide.md`](../../../brand/JK-Brand-Guide.md) like every
other client-facing asset. Anything else this strategy turns into — a landing
page, worksheet template, or scorecard deliverable — should follow the same
guide.

## Skills & tooling

None yet. If the worksheet templates or the free top-of-funnel quiz get
built as a repeatable generation workflow, that's a candidate for a new
skill in [`.claude/skills/`](../../../.claude/skills/) — flag it when we get
there.

## Outputs

- **`templates/operating-business-financial-checklist-en.html` / `-ru.html`**
  — the one-page **Operating**-variant checklist: a "is your business set up
  the way it should be?" gut-check for a business that already exists (the
  realtor's typical client, moving into a new space; also the agency channel).
  Opens with "congratulations on the new space," reframes all 8 boxes to
  "still right / actually current?", and carries a scannable WhatsApp QR so a
  printout is actionable. This is the realtor channel's default leave-behind.
- **`templates/new-business-launch-checklist-en.html` / `-ru.html`** — the
  one-page, print-ready **Pre-Launch** checklist artifact (same chassis), for
  the rarer client genuinely *starting* their first business, on brand, no
  partner-specific redesign needed.
- **`templates/realtor-referral-playbook.md`** / **`-ru.md`** (native
  Russian, not machine-translated) — how the partner actually delivers the
  checklist: four natural trigger moments to pick from (not one rigid
  script), WhatsApp/text as the default channel (this audience doesn't run
  on email), and the same-day hand-off of the client's contact info to JKA
  (the step that turns "gave them a PDF" into an actual referral) rather
  than a self-serve booking form.

Still open per `strategy.md` §6: scoring rubric thresholds, the
document/access checklist for the *paid* assessment, Growth Accelerator
Series logistics (landing page, promo copy, list ownership), the four
workshop worksheet templates, and pricing for the assessment/implementation
phases. Both checklist variants (Pre-Launch and Operating) are now built on
the shared chassis; the marketing-agency onboarding channel can reuse the
Operating one as-is.

## Working on this / notes for AI

This is a live strategy doc, not a finished spec — treat `strategy.md`'s
"Open questions" section as the actual backlog for this project. Related
work: [`../positioning.md`](../positioning.md) covers
the firm's core value-prop messaging (the two of these should stay
consistent with each other); the IG video script brief lives in
[`../video-generation/`](../video-generation/), not here.
