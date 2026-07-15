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
| **Location / Videoconference** | **Online**, video link = **Odoo Discuss** (auto-generates a meeting link per booking; no external account) |
| **Schedule from / to** *(optional)* | e.g. min 24 h notice; up to 60 days ahead |
| **Questions tab** *(optional)* | Name / email / phone are built in; add intake questions later |

**Save**, then **Publish / Go to Website** and **copy the page URL** (looks like
`https://www.jkaccountinggroup.com/appointment/2`). This is `ODOO_NEW_CLIENT_LINK`.

### 2. Existing-client calendar
**New** again → `Existing Client Session`, its **own different** availability
(e.g. *Mon/Wed/Fri, 14:00–17:00*), same Online + Discuss setup. **Publish** and
**copy its URL** → this is `ODOO_EXISTING_CLIENT_LINK`.

> Odoo auto-checks Julia's calendar for conflicts, so only genuinely-free slots
> inside those windows are offered.

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
