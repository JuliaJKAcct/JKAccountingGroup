# Marketing

> **Status:** Active · The firm's marketing work, grouped.

This folder groups the firm's **marketing projects** so they share one home, one
operating persona ([`CLAUDE.md`](./CLAUDE.md) — a senior accounting-industry
marketing strategist), and one shared offer positioning
([`positioning.md`](./positioning.md)). Marketing is one part of the firm's
work, not the purpose of the repo.

## What's here

```
marketing/
├── CLAUDE.md                  ← operating persona for all marketing work
├── positioning.md             ← shared offer positioning: the pitch + "what do you do?" (EN/RU)
├── collateral/                ← on-brand marketing collateral (cards, posts, flyers, copy)
├── email-branding/            ← team email on the Design System — signatures + branded email
├── video-generation/          ← on-brand marketing video (scripts + Flows briefs)
├── referral-offer-strategy/   ← front-offer / referral-partner funnel strategy
├── consultation-booking/      ← "Book a Consultation" front door (new vs existing → two Odoo calendars)
└── scale-your-accounting-firm/  ← digested notes from the "Scale Your Accounting Firm" course
```

## Sub-projects

| Project | What it is | Status |
|---|---|---|
| [`collateral/`](./collateral/) | On-brand marketing collateral generated with Claude. | Active |
| [`email-branding/`](./email-branding/) | Every team member's outbound email on the Design System — email-safe HTML signatures + a branded email layout. | Active |
| [`video-generation/`](./video-generation/) | Script on-brand short-form videos and produce ElevenLabs Flows production briefs (topic → script → brief), via the `video-script-pipeline` skill. | Active |
| [`referral-offer-strategy/`](./referral-offer-strategy/) | Front-offer and referral-partner funnel strategy — the paid diagnostic, partner-specific pitches, and the "Growth Accelerator Series" workshop concept. | Planning |
| [`consultation-booking/`](./consultation-booking/) | The "Book a Consultation" front door — one page routing new/prospective vs existing clients to two Odoo Appointments calendars with different availability. Online, EN/RU. | Active |
| [`scale-your-accounting-firm/`](./scale-your-accounting-firm/) | Digested notes from the "Scale Your Accounting Firm" advisory program, by track/module/video, feeding into JK's marketing strategy. | Active |

## Shared across the group

- **[`positioning.md`](./positioning.md)** — the firm's core value prop and
  messaging (the pitch and the "what do you do?" answer, EN/RU). Every marketing
  project draws on it; keep it consistent with
  [`referral-offer-strategy/strategy.md`](./referral-offer-strategy/strategy.md).
- **[`CLAUDE.md`](./CLAUDE.md)** — the marketing operating persona, applied
  automatically to any work in this subtree.

## Brand & design

All marketing output pulls from the shared [`brand/`](../../brand/) foundation —
never redefine colors, type, or the logo here; reference `brand/` instead.

## Working on this

Each sub-project has its own `README.md` with the specifics — read it before
working in that folder. Starting a new marketing project? Copy
[`../_template`](../_template/) to `marketing/<new-name>/`, fill in its README,
and add a row to the sub-projects table above (and to the indexes in the root
[`README.md`](../../README.md), [`../README.md`](../README.md), and
[`CLAUDE.md`](../../CLAUDE.md)).
