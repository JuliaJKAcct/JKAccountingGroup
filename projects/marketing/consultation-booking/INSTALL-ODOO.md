# Installing the consultation-booking flow in Odoo

Everything here is done **inside the firm's Odoo admin** — no API key or Claude↔Odoo
connection required. Three pieces:

- **Part A** — create the two Appointments calendars (new-client vs existing-client).
- **Part B** — put the chooser page (`booking-chooser.odoo.html`) on the site and link it to the calendars.
- **Part C** — point the "Book a Consultation" entry points at the page and finish.

> Field/button labels vary slightly by Odoo version, but the flow is the same.
> Appointments is included on the firm's **Odoo Standard** plan (no extra cost).

---

## Reality check — what is actually live (Odoo, Aug 2026)

**Part A is done — do not rebuild it.** Julia created the calendars in **Dec 2024**;
Lilian reconfigured the discovery call in **Aug 2026**. Three appointment types exist:

| # | Appointment type | Duration | Availability (America/New_York) | Public URL |
|---|---|---|---|---|
| 1 | **Discovery Call** | **10 min**, slots every **30 min** | Mon–Thu 09:00–12:00 and 14:00–17:00 · **Fri 10:00–12:00 and 14:00–15:30** | `/appointment/1` and `/book/Discovery-Call` — **published** |
| 2 | Q&A Call | 30 min | Mon–Fri 09:00–12:00 and 14:00–17:00 | publish state not verified |
| 3 | **Consultation** — **paid, $150** | 60 min | Mon–Fri 11:00–15:00 | `/appointment/3` — **published Aug 2026** |

**Discovery Call** (`appointment.type` id 1) as configured today: host = **Julia** (the
only staff user) · **free 10-minute phone call — no video link** (Location reads "Phone
call — we call you at the number you provide") · auto-confirm on · **minimum notice
4 h** · bookable up to 15 days ahead · intake questions attached · intro and confirmation
messages state the phone format · **creates a CRM lead on every booking** · Google
Calendar connector enabled.

**The short link matters.** Several website buttons already pointed at
`/book/Discovery-Call`, but no `appointment.invite` existed, so that URL resolved to
nothing. `appointment.invite` id 2 (short code `Discovery-Call`) now backs it. If those
buttons ever break, check that this invite still exists before editing any page.

**Decision superseded — the discovery call is a phone call.** The Zoom-vs-Google-Meet
question in [§ Video: Zoom](#3-video-zoom-the-firms-choice) no longer applies to the
discovery call: Lilian's Aug 2026 decision is that these are **phone calls**, so the
video source was cleared. Zoom vs Meet is still open for the *longer* paid formats
(Q&A Call, Consultation), and **Ping Assistant cannot join a phone call** — if the firm
wants the notetaker on discovery calls, that decision has to be reopened.

## ⚠ Known breakage: every booking page returns 500 (found Aug 2026)

`/appointment/1`, `/appointment/2`, `/appointment/3` and `/book/Discovery-Call` all return
**500 Internal Server Error**. `/appointment` (the index that lists the types) renders fine.
This predates the Aug 2026 work — appointment type 2 was never touched and fails identically.
It is why the buttons that *did* point at `/book/Discovery-Call` never opened a working
calendar, and why Odoo records no bookings. (Do not read it as the reason nobody linked the
calendars: several buttons did, and the Odoo default header carries a "Book an Appointment"
link to `/appointment/1` on every page.)

**Cause.** `ir.ui.view` id **2010**, key `appointment.appointment_info`, is a
**website-specific copy** (`website_id = jkaccountinggroup`, `mode = primary`) created when
someone edited the booking page in the website editor — the customization is the hardcoded
heading "Schedule Your Discovery Call". A copy like this is frozen at the Odoo version it was
made on. The instance has since been upgraded, and the frozen template still references
fields that no longer exist:

| Template references | Reality on this instance |
|---|---|
| `appointment_type.assign_method` (×4) | renamed — the field is now `assignment_method` |
| `appointment_type.resource_manage_capacity` | no longer exists |

Rendering raises on the first missing field, so every appointment detail page 500s.

**Fix — delete view 2010** so Odoo falls back to its own current template. First enable
**developer mode** (Settings → bottom of the page → *Activate the developer mode*), then
Settings → Technical → User Interface → **Views** → search `appointment_info` → open the row
whose **Website** is `jkaccountinggroup` → **Delete**. Nothing of value is lost: the only
customization is that heading, which is wrong anyway now — it says "Discovery Call" on the
paid Consultation page too.

> **Delete, don't just deactivate.** Un-ticking *Active* is the reversible first thing to
> reach for, but for a **primary** website copy like this one Odoo resolves the template by
> key + website, and that lookup is not reliably filtered on `active` — so deactivating may
> leave the page still broken. Treat deactivation as a probe; if the page still 500s, delete.

**Lesson for this repo:** editing an Odoo *app* page (Appointments, Portal, Blog) in the
website editor silently forks the template and it stops receiving Odoo's updates. Prefer
configuration fields (intro message, confirmation message) over editing those templates.

## The two offers — keep them distinct

A **discovery call** and a **consultation** are different products. Do not let copy blur
them (Lilian, Aug 2026):

| | Discovery Call | Consultation |
|---|---|---|
| Price | **Free** | **$150** |
| Length | **10 minutes** | **1 hour** |
| Channel | **Phone** — we call the number given | Online (Zoom is the intent; see below) |
| Odoo type | id 1 · `/book/Discovery-Call` | id 3 · `/appointment/3` |
| Availability | Mon–Thu 09:00–12:00 / 14:00–17:00 · Fri 10:00–12:00 / 14:00–15:30 | Mon–Fri 11:00–15:00 |
| Notice / horizon | 4 h · 15 days | 12 h · 15 days |

The `/consultation` landing page (`jk_landing.consultation_en`) is the **paid** one: as of
Aug 2026 it sells the 1-hour $150 consultation, every CTA links to `/appointment/3`, and
the word "free" no longer appears on it. Its lead form survives as a secondary path
(button "Send my details", leads tagged `Consultation ($150) — EN landing`).

**Still open after the Aug 2026 pass:**

- **Both offers on one page.** The plan is for the entry points to present *both* options
  side by side — free 10-min phone discovery call vs. 1-hour $150 consultation. Not built
  yet; `booking-chooser.odoo.html` in this folder is the natural starting point.
- **Zoom for the consultation.** Odoo type 3 currently generates an **Odoo Discuss** video
  link, not Zoom. Needs Julia's fixed Zoom room URL to switch.
- **Does Odoo collect the $150 at booking?** The type carries a $150 product price, but
  whether the booking flow takes payment was not verified — check before promoting the page.
- The Home and Pricing hero CTAs still link to `/contactus` (the email form) rather than
  the discovery-call calendar.
- **`/pricing`'s meta description still says "Book a free consultation for a quote."** The
  visible page was fixed, but the `description` / `og:description` / `twitter:description`
  tags were not — so that is the wording Google and every link preview show.
- **A live Home button reads "Schedule a Consultation" but links to `/book/Discovery-Call`.**
  It blurs the two offers in exactly the way this project now forbids: relabel it, or point
  it at `/appointment/3`.
- Three **legacy** (unpublished) views still contain the old "free consultation" wording:
  `website.home-legacy`, `website.about-us-legacy`, `website.services-legacy`.
- **The Ukrainian landing still sells the old offer.** `/ua/konsultatsiia` (live) reads
  "30 хвилин · безкоштовно" with no appointment link. The **Russian** one is already
  converted — it lives at **`/ru-ru/consultation`** (not `/ru/konsultatsiya`, which 404s)
  and links to `/ru-ru/appointment/3`. The EN page's own RU language-switch link points at
  that dead `/ru/konsultatsiya` and needs fixing too.
- **The CTA rule is not rolled out beyond the website.** `positioning.md` binds every CTA
  everywhere, but the email signatures (`email-branding/signatures/*.html` → "Book a
  consultation", pointing at `/contactus`), the lead-magnet calculators ("Book a free
  20-minute call" — a third duration in play) and `realtor-referral-playbook-ru.md` still
  carry the old wording.

---

## Part A — The two calendars (Appointments app) — *the original plan, superseded*

> Kept for reference only. It describes calendars named "New Client Consultation" /
> "Existing Client Session" at 30 min with Zoom in *Location* — none of which is what
> exists. The live configuration is the "Reality check" and "two offers" tables above.

### 0. Activate the app (once)
**Apps** → search **"Appointments"** → **Activate / Install**.

### 1. New-client calendar
Open **Appointments** → **New**, then set:

| Setting | Value |
|---|---|
| **Name** | `New Client Consultation` (shown to the visitor) |
| **Schedule / front-end display** | **Users** → add **Julia** as the bookable person |
| **Duration** | `30 min` *(placeholder — change when decided)* |
| **Availability / Schedule tab** | The days + time windows this type is bookable. Use a **temporary** window for now, e.g. *Tue & Thu, 10:00–13:00*. |
| **Location / Videoconference** | **Online**, via **Julia's Zoom room** — see [**"Video: Zoom"**](#3-video-zoom-the-firms-choice) below (leave Odoo's *Videoconference link* empty and put the Zoom URL in *Location*) |
| **Schedule from / to** *(optional)* | e.g. min 24 h notice; up to 60 days ahead |
| **Questions tab** *(optional)* | Name / email / phone are built in; add intake questions later |

**Save**, then **Publish / Go to Website** and **copy the page URL** (looks like
`https://www.jkaccountinggroup.com/appointment/2`). This is `ODOO_NEW_CLIENT_LINK`.

### 2. Existing-client calendar
**New** again → `Existing Client Session`, its **own different** availability
(e.g. *Mon/Wed/Fri, 14:00–17:00*), same Online + Zoom setup. **Publish** and
**copy its URL** → this is `ODOO_EXISTING_CLIENT_LINK`.

> Odoo auto-checks Julia's calendar for conflicts, so only genuinely-free slots
> inside those windows are offered.

### 3. Video: Zoom (the firm's choice)

Julia runs her consultations in **Zoom**, and the firm's AI notetaker
(**Ping Assistant**) joins Zoom calls to take notes — so both calendars use
**Julia's fixed Zoom Personal Meeting Room** instead of Odoo's built-in video:

1. **In Zoom** (Julia's account): **Meetings → Personal Room** → copy the
   **invite link** (it never changes). In the room's settings, enable the
   **Waiting Room** — everyone gets the same link, so this stops the next client
   from walking in while the previous call is still running.
2. **In each appointment type** (both calendars): set the **Videoconference /
   Video Link** field to **None** (or leave it empty) and paste the Zoom URL
   into the **Location** field — it then appears in the booking confirmation
   and in the calendar invite the client receives. On some Odoo versions
   Location is a picker rather than free text; if so, put the Zoom link in the
   **confirmation message** instead. Either way, also repeating the link in the
   confirmation message makes it impossible to miss.
3. **Keep bookings from touching:** if your Odoo version offers extra
   time/padding between meetings, set ~15 min; otherwise shape each
   availability window so back-to-back bookings can't collide.

**Why not a "real" Zoom integration?** Odoo Appointments natively offers only
**Odoo Discuss** and **Google Meet** as auto-generated video links. Zoom
connectors exist on the Odoo Apps Store, but they are **third-party modules,
and Odoo Online — the hosting behind the firm's Standard plan — cannot install
third-party modules** (that requires Odoo.sh or self-hosting). The fixed-room
approach costs nothing and works today. If a unique Zoom link *per booking* is
ever truly needed, that's a later automation (Zapier/Make) — don't start there.

**Ping Assistant:** notetakers usually auto-join by watching a calendar. Enable
Odoo ↔ **Google Calendar sync** for Julia (**Settings → Integrations → Google
Calendar**) so every booking lands in her Google Calendar with the Zoom link in
it — then confirm with Julia how Ping Assistant picks up meetings (from the
calendar, or by manual invite).

**Fallback (no Zoom):** set **Videoconference link = Odoo Discuss** — free,
built-in, generates a browser-based link per booking, nothing to install.

---

## Part B — The chooser page

### Option 1 — the on-brand page *(recommended)*
1. **Website** → **New Page** (blank) — or open the existing page the
   "Book a Consultation" buttons already point to. A good address is `/book`.
2. **Edit** the page → drag in an **"Embed Code" / HTML** building block (full-width row).
3. Open **`booking-chooser.odoo.html`** (in this folder) and **paste its entire
   contents** — from the opening `<style>` through the closing `</section>` — into the block.
4. **Replace the two placeholder links** with the URLs from Part A:
   - `ODOO_NEW_CLIENT_LINK` → the New Client Consultation URL
   - `ODOO_EXISTING_CLIENT_LINK` → the Existing Client Session URL
5. **Save / Publish.**

The block is fully self-contained: styles are scoped under `.jkcb` (they won't touch
the rest of the theme), and the **EN/RU switch is built in and needs no JavaScript**.

> **Fonts note:** the snippet loads the three brand fonts from Google Fonts via a CSS
> `@import`. If the block ever renders with different (system) fonts, that import was
> blocked by the site's settings — everything still works, but tell Claude and we'll
> switch the fonts to load the way the rest of the site loads them.

### Option 2 — the fastest, plain version
Skip the custom page: with both appointment types **published**, Odoo already shows a
built-in "pick your appointment" page at `…/appointment` that lists the two as cards.
It works immediately but uses the default Odoo styling, not the JK design.

---

## Part C — Wire the entry points & finish

- Point the **website "Book a Consultation" button** at the new page.
- Update the **email-signature** "Book a consultation" link
  ([`../email-branding/`](../email-branding/)) to the new page URL.
- **Placeholders to resolve** in `booking-chooser.odoo.html`:
  - `30 min` durations → set the real values;
  - if the new-client consult is a **free intro**, add a "Free" badge (ask Claude).
- **Language:** EN/RU is baked into the snippet. If you later want it driven by Odoo's
  own site language switch instead, that's a follow-up (needs the Odoo connection).

---

## Where the pieces live
- `booking-chooser.odoo.html` — the paste-in snippet (this is what goes in Odoo).
- `booking-chooser.html` — the same design as a standalone full page (reference/preview).
- `preview/` — screenshots (EN/RU).
