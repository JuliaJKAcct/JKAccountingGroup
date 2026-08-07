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
├── partner-pitch/   ← leave-behind for the marketing-agency partner conversation
    ├── one-pager.html         on-brand EN handout (free → $250 credited → monthly
    │                           ladder, two channels, partner benefits) — print/PDF
    ├── one-pager-ru.html      native-Russian version of the handout
    ├── growth-series-ru.html  native-Russian one-pager: the 3 co-hosted Growth
    │                           Series sessions (themes, take-homes, series close)
    ├── talk-track.md          plain-language script + Readiness Check timing
    └── worksheets/            fillable worksheets (interactive + print)
        ├── readiness-check-ru.html     self-scored readiness quiz (webinar gift)
        ├── readiness-check-en.html     English version of the readiness quiz
        ├── margin-calculator-ru.html   true-margin calculator (standalone, kept for later)
        └── keep-more-checklist-ru.html tax-efficiency checklist (standalone, kept for later)
├── webinar/          ← standalone lead-gen webinar (diagnostic, one-story spine)
    ├── webinar-script.md    RU presenter script (v3): one-story spine, ~12 aha
    │                        moments, 4 belief shifts, self-calc, + one teaching
    │                        concept/formula per leak — co-host inserts, no "marketing"
    ├── webinar-script.html   same script as a readable/printable on-brand page
    ├── webinar-script-en.html  English version of the presenter script (v3, in sync)
    ├── announcement-ru.md    ready-to-post RU promo copy (full + short versions)
    ├── announcement-ru.html  same announcement as a readable/printable page
    ├── invite-candramas-ru.html  co-branded RU webinar invite (+ .pdf export) the
    │                             partner hands to clients (details · agenda · gift)
    ├── webinar-overview-candramas-ru.html  one-page RU overview (+ .pdf) FOR the
    │                             partner (Boris) to review before we co-brand: what the
    │                             webinar is, the 4 teaching breakdowns, why it helps his
    │                             clients, and the soft "what's next"
    ├── webinar-deck-ru.html      on-brand RU slide deck (20 slides, v3) to screen-share
    │                             — a teaching slide (concept + formula) after each of
    │                             the 4 leaks; arrow/click nav, PDF export
    ├── webinar-deck-en.html      English version of the slide deck (20 slides, v3, in sync)
    └── luma/                     Luma (lu.ma) registration setup
        ├── cover-ru.html / .png     on-brand event cover image (1:1, legible small)
        ├── event-ru.md              event-page copy + Luma setup checklist
        └── readiness-check-ru.pdf   the worksheet gift, print-ready for Luma
└── wealth-partner/   ← wealth-manager channel (Imperial Fund / Yuri Nosenko)
    └── imperial-fund-intro.html  client-facing EN intro sheet the advisor hands
                                  to clients (who we are · what we do · how we help)
```

> **Partner 1 — Candramas LLC** (marketing agency, owner Boris): the
> `partner-pitch/` collateral + Growth Series (readiness → true margin →
> keep-more); Readiness Check timing is fixed in `talk-track.md` (client fills in
> ~5 min, live finance block ~15 min).
> **Partner 2 — Imperial Fund Asset Management** (wealth manager, Yuri Nosenko):
> a client-facing intro sheet in `wealth-partner/`, positioned as the
> tax/accounting complement to their investment management.

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
  sessions), and a talk-track script. Encodes the decided front-offer (a $250
  Profit Leak Review, fully credited into the first month of service), the
  free → paid → monthly ladder, the two partner channels (new-client onboarding
  + existing-client Growth Series), and the partner-benefit framing.
- **`partner-pitch/worksheets/`** — the three Growth Series take-homes, built as
  interactive, print-ready native-Russian files: a self-scored readiness quiz, a
  true-margin calculator, and a tax-efficiency checklist. Each is useful on its
  own but reveals where a professional is needed, closing toward the $250 check.
- **`webinar/`** — a diagnostic native-Russian webinar, "Почему бизнес растёт, а
  прибыль уменьшается," as Julia's own top-of-funnel event. v3 keeps the one
  story spine (a coffee shop), ~12 discovery moments, 4 belief shifts, and the
  self-calculated margin, but now **teaches**: after each of the 4 leaks the audience
  gets one plain concept + formula — real margin, cash cushion (in months), monthly
  close + 3 numbers, and the S-corp math (on $100k profit ≈ $7,500/yr saved). The
  "marketing spend" framing is gone (growth is framed as "вложения в рост"), and the
  offer lands as a natural "want me to calc this on your numbers?" Includes the
  readable script (`.html` + `.md`), a one-page **overview for the partner (Boris)**
  to review before co-branding (`webinar-overview-candramas-ru.html` + `.pdf`),
  ready-to-post announcement copy (`announcement-ru.md`), a co-branded partner invite
  (`invite-candramas-ru.html`), and the on-brand 20-slide deck to screen-share
  (`webinar-deck-ru.html`). Coffee-shop figures are grounded in real industry data
  (net margin 5–12%, owner ~$50–65k/yr).
- **`wealth-partner/`** — a client-facing EN introduction sheet for the
  wealth-manager channel (Imperial Fund Asset Management / Yuri Nosenko),
  designed to be handed to *their clients*: who JK is, what we do, how we help,
  with an explicit lane split (the advisor grows wealth; JK keeps it
  tax-efficient) and a complimentary-consultation CTA. RU version is a natural
  follow-up.

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
