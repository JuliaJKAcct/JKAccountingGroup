# Gmail defaults — putting outbound mail on the Design System

> **What this file is.** A calm, honest recipe for making the email we send from
> Gmail carry the JK identity **by default** — our palette, our signature, and as
> close to our fonts as Gmail allows. It is deliberately straight about what Gmail
> **can** and **cannot** do, so no one is surprised later.
>
> Design authority: [`../../brand/JK-Brand-Guide.md`](../../brand/JK-Brand-Guide.md).
> Email-safe technique: [`EMAIL-STYLE-GUIDE.md`](./EMAIL-STYLE-GUIDE.md).
> Step-by-step signature install: [`INSTALL-GMAIL.md`](./INSTALL-GMAIL.md).

## The one honest headline

Gmail brands exactly **one** thing on every outbound email automatically: the
**signature**. Everything else is either a fixed menu (the font/size/color of the
body you type) or a manual insert (a fully designed email). So the plan is:

1. **Signature** — the workhorse. Auto-inserted on every new email, reply and
   forward. This is where the palette, logo, layout and fonts-with-fallback land.
2. **Default text style** — makes the body you *type* quietly consistent, within
   Gmail's fixed choices. It is *not* where the brand lands.
3. **Templates** — for the few emails we compose as designed pieces (the
   teal-header layout). A deliberate insert, not a default.

There is no Gmail switch that wraps every message in our full design. That's an
email-client limitation, not a gap in our work — the same is true of Outlook and
Apple Mail.

---

## 1. Default text style — set it once, keep expectations honest

**Path:** Gmail → gear ⚙ → **See all settings** → **General** → **Default text style**.

This controls the font, size and color of the body you type. It's a **fixed menu**,
so match the brand as closely as the menu allows and no further:

| Setting | Choose | Why / the honest limit |
|---|---|---|
| **Font** | **Sans Serif** | The menu is fixed (Sans Serif, Serif, Fixed Width, Wide, Narrow, Comic Sans, Garamond, Georgia, Tahoma, Trebuchet, Verdana). There is **no IBM Plex Sans and no Source Serif 4**, and email can't embed web fonts anyway. "Sans Serif" renders as Arial/Helvetica — exactly the fallback our body stack already names, so it's consistent with the brand, just not the web font. |
| **Size** | **Normal** | Only four sizes exist (Small / Normal / Large / Huge). No pixel value. |
| **Text color** | **Leave at default (near-black)** | The color picker is a **fixed grid of preset swatches with no custom-hex field**, so Petrol Teal `#123841` and our warm body ink `#22201A` can't be entered. Don't tint body copy teal — it hurts readability and teal isn't our body color. Keep teal for the signature and links. |

**What it does and doesn't do.** It styles only the body you type on *this* account.
It does **not** touch the signature (which keeps its own inline styles), it does
**not** apply in plain-text mode, and it **cannot** force our fonts onto recipients
— their client still renders its own fallback. Treat it as "make what I type tidy
and readable," not "make it on-brand." The brand lands in the signature.

---

## 2. The signature — the real brand vehicle

The only surface Gmail auto-inserts on **every** email, so it carries the identity:
the Medallion seal, the petrol-teal / bronze / ivory palette, the serif-name →
mono-kicker → sans-body rhythm, and the one bronze booking button. Paste-ready file:
[`signatures/julia.html`](./signatures/julia.html). Full walkthrough:
[`INSTALL-GMAIL.md`](./INSTALL-GMAIL.md). In brief:

1. **Host both images** at public HTTPS URLs — the Medallion PNG
   ([`JK-medallion-primary-512.png`](../../brand/logo/png/JK-medallion-primary-512.png),
   shared by everyone) and the person's 4:5 portrait. No photo yet? Use the teal
   **JK monogram** panel — never a stock or AI face. *(Google Drive share links
   don't work as direct image URLs; use the firm site or an image host.)*
2. **Fill the placeholders**, open the file in a browser, and **copy the rendered
   signature** (not the source).
3. **Paste into Gmail** → Settings → General → **Signature** → **Create new**, name
   it "JK", paste. If the logo/photo drop out, re-add them with the toolbar
   **Insert image → Web address (URL)**.
4. **Set it as default** — under *Signature defaults* choose "JK" for **both** "For
   new emails use" **and** "On reply/forward use", and tick **"Insert signature
   before quoted text in replies."** Save Changes.

**Separator note.** Use the middot — `CEO · Chief Accountant` — not the old card's
`|`. The rest of the card already uses "·", so the middot keeps the block reading
as one system.

**Honest limits.**
- **Fonts fall back.** Recipients see Georgia + Arial + Courier, not our web fonts.
  Color, layout, logo and photo carry the brand.
- **Remote images can be blocked** until the recipient clicks "display images," so
  every image keeps real `alt` text (and the portrait cell shows a teal panel if
  the image is off — never a broken box).
- **Outlook squares** the rounded corners — acceptable, the color still reads.
- **Length cap.** Gmail limits a signature to roughly 10,000 characters; our table
  fits comfortably.
- **Optional lighter reply signature.** Create a second, compact signature (name,
  title, one link) and assign it to replies so long threads stay light.

---

## 3. Designed teal-header emails — Templates (a deliberate insert)

For the few messages we compose as designed pieces — onboarding, a seasonal
reminder, a newsletter — use [`templates/branded-email.html`](./templates/branded-email.html).
Gmail can't wrap an everyday reply in this chrome, so this is always a **manual,
deliberate** step.

- **Enable Templates:** Settings → **Advanced** → **Templates** → *Enable* → Save.
- **Save it:** compose a message, paste the rendered branded layout into the body,
  then **⋮ → Templates → Save draft as template → Save as new template**, name it
  "JK branded email."
- **Send it:** Compose → **⋮ → Templates → Insert**, fill the placeholders (hosted
  logo URL, headline, body, the one bronze CTA, `{{BOOKING_URL}}`), send.

**Honest limits.** It's a manual insert per email, never automatic. Gmail's compose
**sanitizes HTML** — it ignores `<style>` blocks and `@media` queries and honors
only inline styles on table layout (which is why the template is built entirely
inline). For anything that must render pixel-perfect to a large list, send through
an ESP (Mailchimp and similar) — paste the same HTML there. On the teal header band,
use the **reversed (white)** Medallion/lockup, hosted at a public URL.

---

## 4. Rolling it out to the team

Gmail settings are **per-user** — there's no one-click firm-wide push from a normal
account.

- Each teammate installs the **same shared signature** (copy
  [`_template.html`](./signatures/_template.html) → `signatures/<firstname>.html`,
  fill, paste) and sets the **same Default text style** (Sans Serif · Normal ·
  default color). ~10 minutes each. Keep every signature **structurally identical**.
- **Google Workspace admins** *can* append a company-wide footer to all outbound
  mail (Admin console → Apps → Google Workspace → Gmail → *Compose and reply
  personalization*). Be honest about the trade-offs: it **appends** below the
  message (so it stacks on long reply chains) and **can't** carry each person's
  photo, name, or the full layout. It's a place for a small firm-wide line, not a
  replacement for the per-person signature.

---

## Capabilities at a glance (the honest table)

| Julia's wish, on **every** email | Achievable | Why |
|---|---|---|
| **Signature auto-inserted** (new / reply / forward) | **Yes** | The one thing Gmail brands automatically once set as default for both. |
| **Exact brand colors** in the signature (`#123841`, `#9C6A39`, ivory) | **Yes** | Our own inline-CSS HTML; color survives in email even where fonts don't. |
| **Medallion + portrait** in the signature | **Partial** | Yes as hosted PNGs, but images can be blocked until the recipient enables them; Outlook squares corners. |
| **Brand fonts** (Source Serif 4 / IBM Plex) render for recipients | **No** | Email strips web fonts; recipients see Georgia / Arial / Courier fallbacks. |
| **Brand-matched default body font** I type | **Partial** | No IBM Plex / Source Serif in Gmail's fixed list; "Sans Serif" (Arial) is the honest closest — same as our fallback. |
| **Exact brand body color/size** I type | **Partial** | Sizes are Small/Normal/Large/Huge only; color is a fixed swatch grid with no hex — `#123841` / `#22201A` unavailable. |
| **Fully designed teal-header emails** from Gmail | **Partial** | Templates or paste-from-browser, but a manual insert; compose keeps inline tables only. |
| **Automatic firm-wide rollout** | **Partial** | Settings are per-user (~10 min each); a Workspace admin footer appends but can't carry photo/name/layout. |

## The bottom line

Set the **signature as default for new and reply/forward** — that alone puts our
palette, logo and layout on every message we send. Set **Default text style** to
**Sans Serif · Normal · default color** so what we type stays tidy and readable,
understanding it's a menu, not a brand tool. Keep the **teal-header template** for
the handful of emails we design on purpose. What Gmail can't do — deliver our web
fonts, or accept arbitrary hex in the body — we don't pretend it can; the brand is
carried by color, layout, the Medallion and the photo, which all hold in the
fallback. Calm, consistent, honest.
