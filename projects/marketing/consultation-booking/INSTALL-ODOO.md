# Installing the consultation-booking flow in Odoo

Everything here is done **inside the firm's Odoo admin** — no API key or Claude↔Odoo
connection required. Two pieces:

- **Part A** — create the two Appointments calendars (new-client vs existing-client).
- **Part B** — put the chooser page (`booking-chooser.odoo.html`) on the site and link it to the calendars.
- **Part C** — point the "Book a Consultation" entry points at the page and finish.

> Field/button labels vary slightly by Odoo version, but the flow is the same.
> Appointments is included on the firm's **Odoo Standard** plan (no extra cost).

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
2. **In each appointment type** (both calendars): leave the **Videoconference
   link** field **empty** and paste the Zoom URL into the **Location** field —
   it then appears in the booking confirmation and in the calendar invite the
   client receives. Optionally repeat the link in the confirmation message so
   it's impossible to miss.
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
