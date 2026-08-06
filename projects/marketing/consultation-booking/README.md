# Consultation Booking

> **Status:** Active · **Owner:** Julia · **Started:** 2026-07

The public booking front door: one landing page that routes a visitor to the right
scheduler. **The split changed in Aug 2026** — it is now by **offer**, not by audience:
a **free 10-minute phone discovery call** vs. a **paid 1-hour, $150 online consultation**.
In **English and Russian**.

> **Note on everything below this line:** the Purpose and "Locked decisions" sections were
> written for the original **new-client vs existing-client** split with Zoom on both
> calendars, and are **superseded** on those two points. The current state is in the
> "Working on this" notes at the end and in [`INSTALL-ODOO.md`](./INSTALL-ODOO.md).

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
(natively Odoo Discuss or Google Meet — the firm instead uses a fixed Zoom room
link; see the notes below), and a booking page that inherits the site's EN/RU
language switch. Google Calendar's "Appointment Scheduling" was evaluated first
and **ruled out** — it is a paid add-on on the firm's Google Workspace plan.

## What's here

```
consultation-booking/
├── README.md                 ← you are here
├── PENDING-FIXES.md          ← THE WORK LIST: everything still broken/stale on the live site, in fix order
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
  online-only; EN/RU; video = **Zoom via Julia's fixed Personal Meeting Room
  link** (Julia works in Zoom, and the firm's AI notetaker *Ping Assistant*
  joins Zoom calls — see `INSTALL-ODOO.md` § "Video: Zoom"). Native Zoom
  integration is impossible on Odoo Online (third-party modules can't be
  installed), so the fixed-room link goes in each appointment type's
  *Location* field. Fallback if Zoom is ever dropped: **Odoo Discuss**.
- **Placeholders to resolve before go-live** (the go-live artifact is
  `booking-chooser.odoo.html`; see `INSTALL-ODOO.md`):
  - the two CTA links (`ODOO_NEW_CLIENT_LINK` / `ODOO_EXISTING_CLIENT_LINK`)
    point at the two real Odoo Appointments URLs;
  - `30 min` durations are tentative;
  - (`booking-chooser.html`, the standalone reference, additionally carries
    `#new-client-calendar`-style anchors and a "Design preview" badge — that file
    never ships as-is.)
- **What the Odoo audit found (Aug 2026), *before* the changes below.** The calendars
  already existed — Julia built them in Dec 2024: **Discovery Call** (45 min at the time,
  published at `/appointment/1`), **Q&A Call** (30 min) and **Consultation** (60 min), all
  hosted by Julia, Mon–Fri windows in America/New_York. So availability, durations, host and
  intake questions were **answered in Odoo**, not pending. The audit also found that the site
  linked almost nowhere useful — the main CTAs landed on the contact form, and the buttons
  that did point at `/book/Discovery-Call` had no invite behind that URL — and that the
  discovery call's video source was **Google Meet**, not the Zoom decision recorded above.
  All three were changed in the same pass; the live configuration is the "Reality check"
  table in [`INSTALL-ODOO.md`](./INSTALL-ODOO.md).
- **Decided and applied (Lilian, Aug 2026):** the free discovery call is a **10-minute
  phone call** — no video link — with **slots every 30 minutes**, **4 hours** minimum
  notice, Mon–Thu 09:00–12:00 / 14:00–17:00 and **Fri 10:00–12:00 / 14:00–15:30**
  (America/New_York). The website CTAs now read "Book a free discovery call", carry a
  "10 minutes · no obligation" micro-line on the four main pages, and link to the
  calendar.
- **The `/consultation` landing is the PAID offer (Lilian, Aug 2026).** It now sells the
  **1-hour, $150** consultation, every CTA links to the Consultation calendar
  (`/appointment/3`, published in the same pass), and the word "free" is gone from it.
  A discovery call and a consultation are different products — see the comparison table in
  [`INSTALL-ODOO.md`](./INSTALL-ODOO.md).
- **⚠ But nothing can actually be booked yet.** Every appointment page returns **500** —
  a pre-existing breakage, not caused by this work. The CTAs point at the right calendars;
  the calendars themselves are down until `ir.ui.view` 2010 is deleted. Cause and fix:
  [`INSTALL-ODOO.md` → Known breakage](./INSTALL-ODOO.md#-known-breakage-every-booking-page-returns-500-found-aug-2026).
- **The full work list is [`PENDING-FIXES.md`](./PENDING-FIXES.md)** — every remaining
  problem on the live site in fix order, verified 2026-08-06 by crawling the public pages
  (no Odoo calls spent). Beyond the 500 it covers the **Ukrainian landing still selling a
  free 30-minute consultation** (public, indexed, and one click from the English page), the
  **dead Russian landing** the `РУС` switch points at, the **`/pricing` meta description**
  that still advertises a free consultation to Google, the **three different destinations**
  the same CTA uses, the missing **"Book a Consultation"** button beside each discovery-call
  button, and the **four different call durations** the firm currently promises across the
  site, the lead magnets, the referral checklists and the email signatures. Start there
  when the Odoo budget resets.
- **Inputs still needed from the firm:** Julia's Zoom room URL (the consultation calendar
  still generates an Odoo Discuss link); whether Odoo should **collect the $150** at
  booking; whether **Ping Assistant** is needed on discovery calls at all (it cannot join a
  phone call); and the planned page that offers **both** options side by side.
- **On go-live:** point the website "Book a Consultation" button and the
  [email signatures](../email-branding/) at this page's URL.
