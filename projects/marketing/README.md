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
├── service-packaging.md       ← shared monthly packaging: the 3 plans, what's in all of them, the add-on menu (EN/RU)
├── social-content-playbook.md ← shared social rules: pillars, the 50/20/20/10 mix, one action per post
├── collateral/                ← on-brand marketing collateral (cards, posts, flyers, copy)
├── email-branding/            ← team email on the Design System — signatures + branded email
├── video-generation/          ← on-brand marketing video (scripts + Flows briefs)
├── referral-offer-strategy/   ← front-offer / referral-partner funnel strategy
├── consultation-booking/      ← the booking front door (free 10-min discovery call vs $150 consultation)
├── scale-your-accounting-firm/  ← digested notes from the "Scale Your Accounting Firm" course
└── lead-magnets/              ← free interactive calculators + assessments (funnel entry point)
```

## Sub-projects

| Project | What it is | Status |
|---|---|---|
| [`collateral/`](./collateral/) | On-brand marketing collateral generated with Claude. | Active |
| [`email-branding/`](./email-branding/) | Every team member's outbound email on the Design System — email-safe HTML signatures + a branded email layout. | Active |
| [`video-generation/`](./video-generation/) | Script on-brand short-form videos and produce ElevenLabs Flows production briefs (topic → script → brief), via the `video-script-pipeline` skill. | Active |
| [`referral-offer-strategy/`](./referral-offer-strategy/) | Front-offer and referral-partner funnel strategy — the paid diagnostic, partner-specific pitches, and the "Growth Accelerator Series" workshop concept. | Planning |
| [`consultation-booking/`](./consultation-booking/) | The booking front door — one page routing visitors to the free 10-min phone discovery call or the paid 1-hour $150 consultation, on two Odoo Appointments calendars with different availability. Online, EN/RU. | Active |
| [`scale-your-accounting-firm/`](./scale-your-accounting-firm/) | Digested notes from the "Scale Your Accounting Firm" advisory program, by track/module/video, feeding into JK's marketing strategy. | Active |
| [`lead-magnets/`](./lead-magnets/) | Free interactive calculators + assessments for foreign-owned business founders — the funnel's entry point. On-brand HTML tools; draft, pending tax-figure sign-off. | Active |

## Shared across the group

- **[`positioning.md`](./positioning.md)** — the firm's core value prop and
  messaging (the pitch and the "what do you do?" answer, EN/RU). Every marketing
  project draws on it; keep it consistent with
  [`referral-offer-strategy/strategy.md`](./referral-offer-strategy/strategy.md).
- **[`service-packaging.md`](./service-packaging.md)** — how the monthly
  engagements are packaged and sold: the three plans (Essential · Advisory ·
  Strategic), the access promise that sits above all of them, what is in every
  plan, what actually climbs between them, the add-on menu sold on top, and the
  business conditions that justify an upgrade. Website copy EN/RU included. The
  website pricing page, the [proposal tool](../proposal-tool/), and the sales
  conversation all draw on it — keep them consistent with it, not with each
  other.
- **[`social-content-playbook.md`](./social-content-playbook.md)** — what every
  Instagram/Facebook post is *for*: the three pillars, the 50/20/20/10 monthly
  mix, one named action per post, cadence, and the confidentiality limits on
  publishing client results. Applies to captions and Reels alike, and is enforced
  by the [`social-media-posts`](../../.claude/skills/social-media-posts/) skill.
  *(The production route — who does what, which tool makes the image, the network
  sizes — stays in
  [`collateral/social-post-workflow.md`](./collateral/social-post-workflow.md).)*
  Both are on the [Knowledge Hub](../knowledge-hub/) for the team, under
  **Procedures → Marketing & content** — read there, edited here.
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
