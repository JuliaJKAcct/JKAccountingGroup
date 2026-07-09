# Email Style Guide — JK Accounting Group

How outbound email looks when it's on the Design System. This guide is the rules;
the files in `signatures/` and `templates/` are the rules made real. When anything
here conflicts with [`brand/JK-Brand-Guide.md`](../../../brand/JK-Brand-Guide.md), the
brand guide wins.

## Two surfaces, one system

Email has two brandable surfaces. Don't confuse them:

| Surface | What it is | File |
|---|---|---|
| **Signature** | The card at the foot of *every* message — replies, one-offs, all of it. Does the day-to-day branding. | [`signatures/`](./signatures/) |
| **Branded email** | A *designed* message — client onboarding, seasonal reminders, a newsletter. Full teal header, headline, CTA. | [`templates/branded-email.html`](./templates/branded-email.html) |

You cannot wrap an everyday Gmail reply in the branded template — Gmail owns that
chrome. So the **signature is the workhorse**; the branded template is for the few
emails we actually compose as designed pieces.

## The hard constraint: email is not the web

Email clients are a decade behind browsers. The design must survive that. Three
rules follow from it, and every file here obeys them:

1. **Tables + inline CSS only.** No flexbox, no grid, no `<style>` you depend on,
   no external stylesheet. Gmail strips `<head>` styles; Outlook uses Word's engine.
2. **Web fonts don't load.** Gmail, Outlook and most clients ignore
   `@font-face` and render a system font. So the brand is carried by **color,
   layout, and the logo** — never by the font rendering. We still *name* the brand
   fonts (Apple Mail honors them), with a robust fallback right behind:

   | Role | Stack |
   |---|---|
   | Headings / name | `'Source Serif 4', Georgia, 'Times New Roman', serif` |
   | Body / contact | `'IBM Plex Sans', Arial, Helvetica, sans-serif` |
   | Kicker / labels | `'IBM Plex Mono', 'Courier New', monospace` |

   Design so it looks right in the *fallback*. If it only works with the brand
   font, it's broken. (See `preview.html` — that render uses the fallbacks and
   still reads as JK.)
3. **Images are PNGs, not SVGs, not local files.** Email can't render SVG or show a
   file from your computer, so any image must be stored somewhere an inbox can reach.
   The simplest path needs **no website**: Gmail's signature editor **uploads and
   hosts** the image for you (Insert image → Upload). To keep every teammate's
   pixel-identical once the site is live, host it at a **public HTTPS URL** instead.
   Either way — see [`INSTALL-GMAIL.md`](./INSTALL-GMAIL.md). (The signature keeps
   images to a minimum: the only image is the reversed Medallion in the teal panel;
   everything else is live text.)

## The signature composition

The firm's **business-card grammar**, translated to email: a two-panel card.

- **Panel A — petrol teal (`#123841`).** The Medallion, the serif wordmark
  "JK Accounting Group", and "EST. MIAMI" in mono. The panel color is set to
  `#123841` on purpose — it matches the Medallion PNG's baked-in tile exactly, so the
  mark sits seamlessly with **no visible box** (the logo is never boxed).
- **Panel B — ivory (`#FBF8F2`).** The details: the name + credentials with a
  bronze **diamond ◆**, the mono role kicker, a hairline, the **DIRECT / EMAIL /
  WEB / OFFICE label rows** (mono uppercase labels in mid-teal, values in sans —
  this label-row device is what gives it the card's finish), and one light bronze
  **booking link** — a text link, not a button, to keep the signature low. Kept
  deliberately short (no tagline block) so it reads as a signature, not a card.
- **Card surface.** Both panels carry an explicit `bgcolor` + inline
  `background-color` (teal and paper), and the card has a 1px `#DAD4C6` hairline
  and soft radius. The explicit surfaces are the dark-mode fix: our palette
  mandates dark-teal text, which a dark-mode client would render invisible on a
  transparent ground — the fixed panel colors keep everything legible everywhere.
- **One image only:** the reversed Medallion (`JK-medallion-reversed-512.png`) in Panel A.
  Everything else is live text, so the signature reads fully even before the image
  loads (or if a client blocks it).
- **Outlook hardening.** The bronze button is a nested `bgcolor` cell with
  `mso-padding-alt` (real padding in Word's engine); tables carry
  `mso-table-lspace/rspace:0`; `mso-line-height-rule:exactly` on text panels.
- Rounded corners are a bonus; Outlook squares them, which is fine.

## Color (from the Design System)

Same palette as everything else, same 60/32/8 discipline — teal / ivory / bronze.

| Token | HEX | Where it's used in email |
|---|---|---|
| Petrol Teal | `#123841` | Links, header band, primary brand color |
| Deep Teal | `#0D2A31` | Names/headings, email footer band |
| Mid Teal | `#245C66` | The mono kicker (title line) |
| Warm Bronze | `#9C6A39` | **The one accent** — the single CTA button, and the header seam. Nothing else. |
| Soft Ivory | `#F6F3EC` | Page background behind the email |
| Paper | `#FBF8F2` | Email card surface |
| Body ink | `#22201A` | Body text |
| Muted | `#5F5849` | Secondary lines (location, disclaimer) — darkened from the brand `#6F6857` so small text clears 4.5:1 contrast |
| Hairline | `#DAD4C6` | Dividers, card borders |

**Bronze stays rare** — reserved for the one action (the signature's booking *link*,
or the branded email's CTA button), plus the small fixed brand marks: the diamond
**◆** beside the name and the 3px seam under the branded-email header. Never a
background, never filler — it holds roughly the 8% of the 60/32/8 balance.
(`EST. MIAMI` and the Medallion's diamonds use bronze-*light* `#CFA268`, a distinct token.)

## Type rhythm

The brand's fingerprint — **mono kicker → serif headline → sans body** — is the
same in email:

- **Name / headline:** serif, 600 weight, tight tracking (`-0.012em`).
- **Title line:** the mono uppercase kicker, tracked `0.11em` — the role
  (`CEO · CHIEF ACCOUNTANT`); the firm name sits in the teal-panel wordmark. Also
  the `DIRECT / EMAIL / WEB / OFFICE` labels. Don't multiply the kicker style.
- **Body & contact:** sans, ~12.5px in signatures, ~16px in the branded email, line
  height ≥1.6.
- **Bilingual line (branded email, not the signature):** a short two-line promise —
  English (`Senior US accounting — in your language.`) over its native Russian.
  The compact signature omits it to stay low; use it in the branded email's body or
  footer when a bilingual note fits. Cyrillic renders in the Arial fallback, safely.

## Voice

The signature and every branded email speak in the brand voice: **calm, plain,
senior, bicultural.** No fear, no hype, no hard sell. A confidentiality/disclaimer
line, when used, is matter-of-fact — never a wall of legal dread.

## Accessibility

- Body text ≥ 4.5:1 against its background (checked for every token above).
- Logo `<img>` `alt` follows its role. The signature's Medallion is **decorative**
  (`alt=""`) because the live-text wordmark beside it already names the firm — an empty
  `alt` there prevents a blocked image from duplicating the name or showing a broken-name
  box. A standalone logo image with no live-text equivalent (e.g. the branded-email
  lockup) gets real `alt` (`alt="JK Accounting Group"`). Never leave a meaningful image
  with no `alt`.
- Don't put meaning only in color; links are also bold/underlined where it matters.
- The layout reflows on a phone (single column, ~600px max) — most email is read
  on mobile first.

## Dark mode (the known caveat)

Some clients (Apple Mail, Outlook dark mode) recolor light emails. This design is
built dark-safe from the start:
- The branded email's header/footer are *already* deep teal, so they're stable.
- The signature sits on **fixed panel colors** — teal `#123841` and paper `#FBF8F2`,
  both set via `bgcolor` *and* inline `background-color` — and uses the **reversed
  (white) Medallion** on the teal panel. So the mandated dark-teal text keeps its light
  ground and the Medallion keeps its dark ground whatever the client does; nothing
  relies on a transparent field that a dark client could repaint.
- On any intentionally dark surface, always use a reversed mark
  (`JK-medallion-reversed` / `JK-lockup-horizontal-reversed`).

## Do / Don't

**Do**
- Keep every teammate's signature structurally identical — only the details change.
- Host the logo once at a stable URL and reuse it everywhere.
- Test by emailing yourself and opening on desktop **and** phone before rolling out.

**Don't**
- Box, recolor, stretch, or swap the logo (favicon is the only tiled exception).
- Add a second accent color, a background image, or a third font.
- Rely on `border-radius`, shadows, or web fonts to carry the look — treat them as
  bonuses that degrade gracefully (Outlook squares off rounded buttons; that's fine).
- Paste screenshots of text as the signature — real text stays selectable and
  accessible.

## Checklist before rolling out a signature

1. Logo loads from a public HTTPS URL (open the URL in a private window).
2. All `{{PLACEHOLDERS}}` filled — no `{{` left anywhere.
3. Bronze appears once. Colors are only from the table above.
4. Sent to yourself; correct on Gmail desktop, Gmail mobile, and one more client.
5. Links work: `mailto:`, `tel:`, website, booking.
