# Email Style Guide — JK Accounting Group

How outbound email looks when it's on the Design System. This guide is the rules;
the files in `signatures/` and `templates/` are the rules made real. When anything
here conflicts with [`brand/JK-Brand-Guide.md`](../../brand/JK-Brand-Guide.md), the
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
3. **Images are hosted PNGs, not SVGs, not local files.** Email can't render SVG or
   show a file from your computer. Both the **logo** and the **portrait photo** must
   live at a **public HTTPS URL** that any inbox can fetch. See
   [`INSTALL-GMAIL.md`](./INSTALL-GMAIL.md) for the how.

## The signature composition

Portrait photo (left) · details (center) · Medallion seal (right) — the human and
the brand bookend the person's details.

- **Card surface.** The signature sits on an explicit **Paper `#FBF8F2`** card with
  a 1px `#DAD4C6` hairline and soft radius — set via *both* a `bgcolor` attribute
  and inline `background-color`. This isn't decoration: our palette mandates
  dark-teal text, which a **dark-mode** client would render invisible on a
  transparent ground. Giving the card its own light surface is the only
  inline-only, media-query-free way to keep the mandated colors legible everywhere.
- **Photo:** a real portrait, **cropped 4:5**, warm-graded, ~80×100 (ship ~2× for
  retina). Real faces only — never stock or AI (brand rule). The photo cell has a
  **teal `#123841` backstop**, so a blocked or empty image shows a clean teal panel,
  never a broken-image box. Best "no photo yet" option: drop the hosted teal `JK`
  monogram PNG into `{{PHOTO_URL}}`.
- **Contacts** stack one per line (phone, email, website, office) like the old card;
  phone leads (bold, tap-to-call), email + website are the teal links.
- **Seal:** the **primary** (teal) Medallion at 72px — never the reversed one on
  this light card, and never boxed.
- **Outlook hardening.** The bronze button is a nested `bgcolor` cell with
  `mso-padding-alt` (real padding in Word's engine); tables carry
  `mso-table-lspace/rspace:0`; image cells use `font-size:0` to kill the img gap;
  the divider is a full-height cell border, never a fragile empty spacer `<div>`.
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

**Bronze is used exactly once per email** — the primary action. In the signature
that's the booking button; in the branded template it's the CTA (plus the 3px seam
under the header). Never a background, never decoration.

## Type rhythm

The brand's fingerprint — **mono kicker → serif headline → sans body** — is the
same in email:

- **Name / headline:** serif, 600 weight, tight tracking (`-0.012em`).
- **Title line:** the mono uppercase kicker, tracked `0.11em`. This is where the
  role + firm name live. Don't multiply the kicker; one per block.
- **Body & contact:** sans, ~13px in signatures, ~16px in the branded email, line
  height ≥1.6.
- **Bicultural line** (`ENGLISH · РУССКИЙ · УКРАЇНСЬКА`): a small mono line that
  quietly states the promise. Cyrillic renders in the Arial fallback, so it's safe.

## Voice

The signature and every branded email speak in the brand voice: **calm, plain,
senior, bicultural.** No fear, no hype, no hard sell. A confidentiality/disclaimer
line, when used, is matter-of-fact — never a wall of legal dread.

## Accessibility

- Body text ≥ 4.5:1 against its background (checked for every token above).
- Every logo `<img>` has real `alt` text (`alt="JK Accounting Group"`), never empty.
- Don't put meaning only in color; links are also bold/underlined where it matters.
- The layout reflows on a phone (single column, ~600px max) — most email is read
  on mobile first.

## Dark mode (the known caveat)

Some clients (Apple Mail, Outlook dark mode) recolor light emails. Our mitigations:
- The branded email's header/footer are *already* deep teal, so they're stable.
- The signature logo is the **primary** (teal) medallion on a transparent field.
  On an inverted dark background it can look muted. This is an accepted email
  limitation for v1; if it becomes a problem we ship a dark-aware version using the
  **reversed** (white) medallion. On any intentionally dark surface, always use the
  reversed logo (`JK-medallion-reversed` / `JK-lockup-horizontal-reversed`).

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
