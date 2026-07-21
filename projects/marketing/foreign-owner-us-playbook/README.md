# Foreign Owner's US Business Playbook

> **Status:** Active (draft — not publish-ready) · **Owner:** Julia · **Started:** 2026-07

A flagship, top-of-funnel **lead magnet**: a comprehensive, plain-English guide
for foreign business owners setting up in the US, plus a high-converting opt-in
**landing page** that captures the visitor's email in exchange for the guide,
then routes them toward booking a consultation.

> **Companion:** this is the **setup** playbook (for newcomers). Owners who are
> already up and running get the
> [**tax-savings playbook**](../foreign-owner-us-tax-savings-playbook/) — same
> niche, later funnel stage (*"am I overpaying?"* rather than *"how do I set
> up?"*).

## Purpose

This is the firm's "big" lead magnet — the wide front door for the whole niche
(**foreign-owned business founders in the US**, per
[`../positioning.md`](../positioning.md)). Where the
[`lead-magnets/`](../lead-magnets/) calculators each answer *one* narrow worry,
this guide answers the **whole first-year question** a foreigner has when coming
to the US: *"How do I set this up right, and what will surprise me?"*

The funnel is deliberate:

1. **Landing page** (`landing.html`) — mirrors a proven opt-in layout (hero +
   offer + proof + before/after + preview + who-it's-for + authority + capture
   + final CTA), rebuilt in the JK Atlas system and the firm's **calm,
   plain-English, no-fear** voice. Primary conversion: capture email.
2. **The guide** (`guide.html`) — the deliverable. 14 short chapters across 4
   parts (decide → set up → file → stay safe), colored plain-language callouts,
   a company-type comparison table, a yearly compliance calendar, and an
   **interactive first-year checklist** (progress saved in `localStorage`).
3. **The bridge to a call** — the guide ends in a **"What's your next step?"**
   mini-quiz. It deliberately shows where the *general* guide stops and the
   reader's *specific* situation begins (their entity, treaty, states, how they
   take money out), surfaces the exact advanced items worth a conversation, and
   routes to a free 20-minute call. This is the mechanism that turns a reader
   into a booked call.

## What's here

```
foreign-owner-us-playbook/
├── README.md              ← you are here
├── landing.html           ← opt-in landing page (mimics the reference layout)
├── guide.html             ← the comprehensive guide (the lead magnet itself)
├── CRITIQUE.md            ← avatar-critique log: what the target buyer said + what changed
└── assets/
    ├── playbook.css       ← base Atlas tokens + landing + guide components (self-contained)
    ├── playbook.js        ← shared behaviors (reveal, sticky CTA, TOC scrollspy, reading
    │                        progress, persistent checklist) — the next-steps quiz JS is
    │                        inline in guide.html
    └── img/               ← Julia photos (real founder cutouts) + favicon
```

## Brand & design

On the shared [`brand/`](../../../brand/) foundation — the "Atlas" design
system. `assets/playbook.css` lifts the base tokens + core components **verbatim**
from the production system (via
[`../lead-magnets/assets/lead-magnets.css`](../lead-magnets/assets/lead-magnets.css))
and composes the new guide/landing components only from existing tokens — no new
colors, no new fonts. Petrol teal + warm bronze on soft ivory; bronze reserved
for the single money CTA; Source Serif 4 / IBM Plex Sans / IBM Plex Mono.

- Brand rules & voice: [`../../../brand/JK-Brand-Guide.md`](../../../brand/JK-Brand-Guide.md)
- Design system: [`../../../brand/design-system/`](../../../brand/design-system/)
- All visual/aesthetic work goes through the [`impeccable`](../../../.claude/skills/impeccable/) skill.

**Two hard copy rules** (inherited from the lead-magnets project, non-negotiable
for this audience): (1) bulletproof simple English — short sentences, no idioms,
every tax term defined inline; (2) name the exact worry, then the fix — no
jargon, no fear.

## Skills & tooling

- [`impeccable`](../../../.claude/skills/impeccable/) — drives the design.
- Related: the [`lead-magnets/`](../lead-magnets/) calculators the guide links to
  (Form 5472 check, tax residency, LLC-or-S-Corp, business license, worker
  classification, foreign-account reporting).

## Outputs

Self-contained HTML (`landing.html` + `guide.html`), committed to the repo
(marketing assets, no client data). Deployable as a folder unit.

## Working on this / notes for AI

- **Not publish-ready.** Two things must be wired by a human before launch:
  (1) the lead-capture endpoint — currently `action="#REPLACE-WITH-ENDPOINT"`;
  the landing page includes a **demo fallback** that stores the entry in
  `localStorage` and jumps to `guide.html` so the funnel can be experienced
  end-to-end until the real POST is wired (on success it should redirect to
  `guide.html`). Also the WhatsApp link (`#REPLACE-WITH-WHATSAPP`) and the Odoo
  booking URL (`#REPLACE-WITH-BOOKING-URL`).
- **Every tax figure is general information, not advice**, and pending Julia's
  sign-off. Figures reused from
  [`../lead-magnets/TAX-FIGURES-TO-VERIFY.md`](../lead-magnets/TAX-FIGURES-TO-VERIFY.md)
  (Form 5472 $25,000; substantial-presence 183-day formula) plus new load-bearing
  facts verified against public sources 2026-07: nonresident aliens cannot be
  S-Corp shareholders (IRC §1361(b)(1)(C)); ECI (net, filed) vs FDAP (30% gross
  withholding, reducible by treaty via Form W-8BEN); economic-nexus thresholds
  commonly ~$100,000 / 200 transactions (many states dropping the transaction
  count). Every page carries a visible "general information, not advice"
  disclaimer.
- **No fabricated social proof.** Per the brand guide, there are **no invented
  testimonials, names, numbers, or faces.** The only person shown is Julia (real
  photos). A commented `TODO` marks where real client testimonials can be added
  once permission + real photos exist.
- **English first.** RU/UA are a planned follow-up; don't ship half-translated pages.
- **QA:** screenshots taken at 390px (mobile) and 1280px (desktop). Mobile is the
  priority — paid/social traffic is mostly mobile.
