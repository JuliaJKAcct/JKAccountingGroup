# Foreign Owner's US Tax-Savings Playbook

> **Status:** Active (draft — not publish-ready) · **Owner:** Julia · **Started:** 2026-07

The companion flagship lead magnet to the
[setup playbook](../foreign-owner-us-playbook/): a comprehensive, plain-English
guide for foreign owners who **already run a US business** — the legitimate ways
to keep more of the profit — plus a high-converting opt-in **landing page**
(email → guide → book a free tax-savings review).

## Purpose

Same niche as the setup playbook, **different funnel stage.** The setup guide is
for the newcomer (*"how do I set up right?"*). This one is for the **established
owner** whose question has changed to *"am I overpaying, and what am I leaving on
the table?"* — which maps directly to the firm's positioning (the financial
upside / tax-optimization pull that keeps long-term clients; see
[`../positioning.md`](../positioning.md)).

The funnel:

1. **Landing page** (`landing.html`) — mirrors the proven opt-in layout in the JK
   Atlas system and the firm's calm voice. Tuned to the established owner: the
   trust strip leads with *"legitimate, not aggressive,"* and the FAQ opens with
   the key objection, *"I already have an accountant — why you?"*
2. **The guide** (`guide.html`) — 14 chapters across 4 parts (structure →
   deductions → moving money → the system), built on the theme **"planning beats
   reporting."** Covers the entity/tax-status lever, how you pay yourself, state
   tax, the everyday deductions people miss, Section 179 + 100% bonus
   depreciation, the permanent 20% QBI deduction, retirement (SEP / Solo 401k),
   efficient repatriation + treaties, timing, credits, why clean books *are* the
   strategy, quarterly planning, and the "smart, not aggressive" line. It reads
   through a **sticky numbered tab bar** (mirroring the reference funnel): the
   four Parts become ~6 tabs across the top (01…06), one section shown at a time,
   with prev/next between sections — so the guide reads light instead of endless.
   The tab bar is real HTML, so the **menu works even with JavaScript off** (as
   section jump-links over a full scroll — some file previews don't run scripts);
   JS upgrades it to the one-section-at-a-time reader. Also an interactive **"what
   am I leaving on the table?"** self-check (localStorage).
3. **The bridge to a call** — the guide ends in a **"where are you most likely
   overpaying?"** quiz. Its logic is deliberately airtight for this offer: *we
   can't put a number on your savings without your actual books — that's exactly
   what a free tax-savings review does.* Tax savings are inherently personal, so
   the review is the obvious next step.

## What's here

```
foreign-owner-us-tax-savings-playbook/
├── README.md              ← you are here
├── landing.html           ← opt-in landing page
├── guide.html             ← the comprehensive tax-savings guide
├── CRITIQUE.md            ← avatar-critique log + iteration
└── assets/
    ├── playbook.css       ← shared Atlas-composed styles (copied from the setup playbook)
    ├── playbook.js        ← shared behaviors (reveal, sticky, TOC scrollspy, progress, checklist)
    └── img/               ← Julia photos + favicon
```

The `assets/` are a copy of the setup playbook's shared base (so this project is
self-contained and deployable as a unit); the guide/landing components and tokens
are the same Atlas system, no new colors or fonts.

## Brand & design

On the shared [`brand/`](../../../brand/) "Atlas" system — petrol teal + warm
bronze on soft ivory, bronze reserved for the money CTA, Source Serif 4 / IBM
Plex Sans / IBM Plex Mono. Two hard copy rules (inherited): bulletproof simple
English, and name the worry then the fix — no jargon, no fear.

- Brand rules & voice: [`../../../brand/JK-Brand-Guide.md`](../../../brand/JK-Brand-Guide.md)
- Design system: [`../../../brand/design-system/`](../../../brand/design-system/)
- All visual work goes through the [`impeccable`](../../../.claude/skills/impeccable/) skill.

## Skills & tooling

- [`impeccable`](../../../.claude/skills/impeccable/) — drives the design.
- [`reasonable-compensation`](../../../.claude/skills/reasonable-compensation/) — the "how you pay yourself" chapter links to the public salary tool, which fronts this methodology.
- Related: the [`lead-magnets/`](../lead-magnets/) calculators the guide links to (LLC-or-S-Corp, S-corp salary, surprise tax bill, bookkeeping-ready, Form 5472, tax residency).

## Outputs

Self-contained HTML (`landing.html` + `guide.html`), committed to the repo
(marketing assets, no client data). Deployable as a folder unit. For **team
feedback**, single-file, fully-inlined copies (brand fonts, Julia photos, CSS,
and JS all embedded — CSP-safe, work offline) are committed under
[`share/`](./share/) — see its README. The setup playbook has the same
[`share/`](../foreign-owner-us-playbook/share/) bundle.

## Working on this / notes for AI

- **Not publish-ready.** A human must wire the lead endpoint
  (`#REPLACE-WITH-ENDPOINT`), the Odoo booking URL, and the privacy link; and fill
  the real-proof credibility placeholders (credential, years, rating). The landing
  includes a demo fallback (stores the entry in `localStorage` and jumps to
  `guide.html`) until the real POST is wired. **WhatsApp is already wired** to the
  firm's real number (`wa.me/17863181505`) and is a CTA on every page (app bar,
  hero, final CTA, sticky mobile bar) — the audience's preferred channel.
- **Tax figures are 2026 general information, not advice**, pending Julia's
  sign-off. Load-bearing facts verified against public sources 2026-07: the 20%
  QBI deduction made **permanent** (OBBBA, July 2025) and available to
  nonresidents on ECI (phase-out starts lower for a nonresident); **100% bonus
  depreciation** permanently restored; **Section 179** up to **$2,560,000**
  (2026); Solo 401(k) / SEP up to **$72,000** (under 50, 2026); C-corp **21%**;
  nonresident aliens can't hold an S-Corp (so that lever is resident-only). The
  guide is careful throughout that several levers depend on **residency status**.
- **No fabricated social proof** (brand rule): only Julia's real photos; marked
  `TODO`s where real proof/testimonials go.
- **Voice: "smart, not aggressive."** This is tax *savings* content — it must
  stay calm, legitimate, and honest about eligibility, never "one weird trick."
- **English first.** RU/UA are a planned follow-up.
- **QA** at 390px (mobile) and 1280px (desktop).
