# PRODUCT — JK Accounting Group lead magnets

> Context for the `impeccable` skill. Register: **brand / marketing landing
> pages** (design IS the product). Read `../../../brand/design-system/DESIGN.md`
> (the "Atlas" system) — colors, type, and components are already committed;
> identity-preservation wins, do not invent tokens.

## What this is

A set of free, interactive **lead-magnet tools** (calculators + assessments)
that sit at the top of the firm's marketing funnel. Each tool gives a quick,
tangible answer to one worry, captures the visitor's contact info, and routes
them toward booking a consultation. Built from the "Scale Your Accounting
Firm" course, Track 4 — see
`../scale-your-accounting-firm/track-4-lead-generation-and-nurture/lead-system-setup/02-choosing-your-lead-magnet.md`.

## Who it's for (the avatar)

**Foreign-owned business founders operating in the US** (the firm's niche —
see `../positioning.md`). Core fear: "I don't know the rules here." Many are
**not fluent English speakers**. This audience shapes every design and copy
decision.

## Two hard rules for all copy (non-negotiable)

1. **Bulletproof simple English.** Short sentences. No idioms, no wordplay, no
   compound phrases that need inferring (a real failure we caught:
   "home-country bookkeeper"). Every sentence must survive a literal reading by
   a non-fluent speaker.
2. **Name the exact worry, then the fix — no jargon.** Model: the visitor sees
   their own anxiety in plain words, gets a concrete answer, and any
   unavoidable term (W-2, FBAR) is defined in one plain sentence inline.
   Reference feel: pain → solution, concrete not abstract, objections answered
   in the reader's own voice.

## Design direction

- **System:** Atlas — petrol teal + warm bronze on soft ivory. Deep-teal
  "on-dark" bands carry hero + CTA; bronze is the single money-CTA color.
  Serif headings (Source Serif 4), sans body (IBM Plex Sans), mono labels.
- **Reuse the production CSS** in `brand/design-system/styles.css` +
  `landing.css` (founder block, nod-list, sticky mobile CTA, lead form,
  thank-you). Pages are self-contained HTML with inline tokens, matching
  `consultation-booking/booking-chooser.html`.
- **Imagery:** real photos of the founder, Julia (`assets/img/julia-*.png`,
  transparent cutouts) — so the audience starts recognizing her face. Never
  stock/AI faces (brand rule).
- **Interactive:** each calculator/assessment computes live, client-side, with
  zero dependencies. Content visible without JS; JS only enhances + computes.
- **Mobile-first:** paid/social traffic is mostly mobile. Every page QA'd at
  390px and 1280px. Sticky mobile CTA bar.

## Funnel role (from the course)

Lead magnet → (capture) → 30-day welcome sequence + VSL → application → book a
call. So every tool ends in lead capture + a "Book a Consultation" CTA
(placeholder link until wired to Odoo). The form submission backend is not
wired yet — `action="#REPLACE-WITH-ENDPOINT"`.

## Compliance / trust

Every tool shows an estimate, not advice. Each page carries a visible
disclaimer ("General information, not tax advice — every situation is
different. Talk to us about yours.") and **all tax figures are pending Julia's
review** — see `TAX-FIGURES-TO-VERIFY.md`. Nothing here is publish-ready until
those numbers are signed off.

## English now, other languages next

Session scope is the **English version**. Structure supports adding RU (and
later a third language) as a follow-up; don't ship half-translated copy.
