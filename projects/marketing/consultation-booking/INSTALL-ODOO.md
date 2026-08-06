# Installing the consultation-booking flow in Odoo

Everything here is done **inside the firm's Odoo admin** — no API key or Claude↔Odoo
connection required. Three pieces:

- **Part A** — create the two Appointments calendars (new-client vs existing-client).
- **Part B** — put the chooser page (`booking-chooser.odoo.html`) on the site and link it to the calendars.
- **Part C** — point the "Book a Consultation" entry points at the page and finish.

> Field/button labels vary slightly by Odoo version, but the flow is the same.
> Appointments is included on the firm's **Odoo Standard** plan (no extra cost).

---

## Reality check — what already exists (audited in Odoo, Aug 2026)

**Part A is largely already done.** Julia created the calendars in **Dec 2024** (last
edited Aug 2025), so treat Part A as a verification checklist rather than a build step.
Three appointment types exist:

| # | Appointment type | Duration | Availability (America/New_York) | Public URL |
|---|---|---|---|---|
| 1 | **Discovery Call** | 45 min | Mon–Fri 09:00–12:00 **and** 14:00–17:00 | `/appointment/1` — **published** |
| 2 | Q&A Call | 30 min | Mon–Fri 09:00–12:00 **and** 14:00–17:00 | publish state not verified |
| 3 | Consultation | 60 min | Mon–Fri 11:00–15:00 | publish state not verified |

Verified configuration of **Discovery Call** (`appointment.type` id 1): host = **Julia**
(the only staff user) · auto-confirm on · minimum notice 1 h · bookable up to 15 days
ahead · slot interval = the 45 min duration · intake questions attached · intro and
confirmation messages already written · **creates a CRM lead on every booking** ·
Google Calendar connector enabled.

Two gaps this audit found:

1. **Nothing on the website links to any of them.** Every "Book a…" CTA points at the
   contact page (`/contactus-v2`), which is an email form — a visitor cannot reach a
   calendar at all. This is the real blocker, not the calendars.
2. **Video is Google Meet, not Zoom.** `event_videocall_source = google_meet` with the
   Google connector on — which contradicts the Zoom decision recorded in
   [§ Video: Zoom](#3-video-zoom-the-firms-choice) and in the project README (that
   decision exists because **Ping Assistant** joins Zoom calls). Decide which one wins
   before go-live; today a booking generates a **Google Meet** link.

---

## Part A — The two calendars (Appointments app)

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
