# Consultation Booking

> **Status:** Active · **Owner:** Julia · **Started:** 2026-07

The public **"Book a Consultation"** front door: one landing page that routes a
visitor to the right scheduler — a separate calendar (and separate availability)
for **new / prospective clients** vs. **existing clients**. Online-only, in
**English and Russian**.

## Purpose

The firm wants **different availability** for prospects than for existing clients
(different days and hours). Instead of a single "contact us" link, both the
website **"Book a Consultation"** button and the team's email-signature link point
here. The visitor first picks **"new / prospective"** or **"already a client,"**
and each choice opens its **own calendar** with its own days/hours. Every
consultation is **online** — a video link is emailed on booking.

**Scheduling engine: [Odoo Appointments](https://www.odoo.com/app/appointments).**
The firm's site already runs on **Odoo (Standard plan)**, so Appointments is
**included at no extra cost** and lives natively inside the site. It supports two
appointment types with independent availability, automatic online video links
(Odoo Discuss or Google Meet), and a booking page that inherits the site's EN/RU
language switch. Google Calendar's "Appointment Scheduling" was evaluated first
and **ruled out** — it is a paid add-on on the firm's Google Workspace plan.

## What's here

```
consultation-booking/
├── README.md                 ← you are here
├── INSTALL-ODOO.md           ← step-by-step: create the two calendars + place the page in Odoo
├── booking-chooser.html      ← the bilingual (EN/RU) chooser page — full-page design reference
├── booking-chooser.odoo.html ← the SAME page as a paste-in snippet for Odoo (scoped CSS, no-JS EN/RU toggle)
└── preview/                  ← reference screenshots of the design
    ├── chooser-en.png
    └── chooser-ru.png
```

## Brand & design

Built with the [`impeccable`](../../../.claude/skills/impeccable/) skill on the
shared design system — no new colors, fonts, or logos.

- Brand rules & voice: [`../../../brand/JK-Brand-Guide.md`](../../../brand/JK-Brand-Guide.md)
- Design tokens / CSS: [`../../../brand/design-system/`](../../../brand/design-system/)
- Logos: [`../../../brand/logo/`](../../../brand/logo/)

`booking-chooser.html` composes only Atlas tokens and the three brand fonts
(Source Serif 4 / IBM Plex Sans / IBM Plex Mono, all with Cyrillic subsets), and
follows the landing-page pattern used for the site's `/consultation/` pages
(minimal app bar, EN/RU toggle, minimal footer).

## Skills & tooling

- [`impeccable`](../../../.claude/skills/impeccable/) — design/build of the page.
- **Odoo Appointments** — the scheduler itself, configured in the firm's Odoo
  admin. There is **no direct Odoo connection from this repo**, so the two
  appointment types are created by hand there (a step-by-step recipe accompanies
  go-live); this repo owns the chooser page, not the Odoo config.
- Links from the [`email-signature`](../../../.claude/skills/email-signature/)
  skill / [`email-branding`](../email-branding/) project — the signatures'
  "Book a consultation" link should point here once live.

## Outputs

- **`booking-chooser.odoo.html`** — the paste-in snippet that actually goes live
  inside Odoo: styles scoped under `.jkcb`, a built-in EN/RU toggle that needs no
  JavaScript, and two placeholder links (`ODOO_NEW_CLIENT_LINK` /
  `ODOO_EXISTING_CLIENT_LINK`).
- **`booking-chooser.html`** — the same design as a standalone full page (design
  reference / preview).
- **`INSTALL-ODOO.md`** — how to create the two calendars and place the page.
- **`preview/`** — reference screenshots; not the source of truth.

## Working on this / notes for AI

- **Status:** first design approved by Lilian (Jul 2026). This is a **saved
  draft, not yet live** on the site — a decision is pending on whether/when to
  apply it to the Odoo site and on any copy changes.
- **Locked decisions:** Odoo Standard → Appointments included ($0 extra);
  online-only; EN/RU; recommended video = **Odoo Discuss** (no external
  dependency).
- **Placeholders in `booking-chooser.html`** (must be resolved before go-live):
  - the two CTA buttons (`href="#new-client-calendar"` /
    `href="#existing-client-calendar"`) point at the two real Odoo Appointments
    URLs;
  - `30 min` durations are tentative;
  - the corner **"Design preview"** badge is removed in production.
- **Inputs still needed from the firm:** exact availability (days/hours) per
  calendar; consult durations; whether the new-client consult is a **free intro**
  (add a "Free" badge if so); who hosts (Julia / +Lilian); booking-form intake
  questions.
- **On go-live:** point the website "Book a Consultation" button and the
  [email signatures](../email-branding/) at this page's URL.
