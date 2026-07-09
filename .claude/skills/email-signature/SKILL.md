---
name: email-signature
description: Create, modify, or roll out a JK Accounting Group on-brand email signature (the business-card footer that goes on every message), and the branded-email template. Use when someone asks to change/update/tweak the firm email signature, make it smaller/bigger, add or remove a line, swap the booking link, add a teammate's signature, roll the signature out to the team, or edit the branded email layout. Encodes the email-safe rules and the hard-won Gmail lessons so a signature change is quick and never breaks in a real inbox. English output; design decisions go through the impeccable skill and the Design System.
---

# Email Signature — JK Accounting Group

The engine behind the [`email-branding`](../../../projects/marketing/email-branding/) project.
It puts outbound email on the firm Design System: the **signature card** at the foot
of every message (the day-to-day workhorse) and the **branded-email template** for
designed sends. This skill exists so that changing a signature — or adding a
teammate — takes minutes and survives Gmail / Outlook / Apple Mail, instead of
re-discovering the same email-safe constraints every time.

**Two jobs it does:**
1. **Modify an existing signature** — resize, add/remove a line, swap the booking
   link, change a detail, restyle. (Most requests.)
2. **Add a teammate** — copy the template, fill their details, verify, hand off the
   install.

It also covers edits to the branded-email template (`templates/branded-email.html`).

## Source of truth — read these first, don't duplicate them
The design spec already lives in the project. This skill is the *process*; those are
the *rules*. Before editing, read:
- [`projects/marketing/email-branding/EMAIL-STYLE-GUIDE.md`](../../../projects/marketing/email-branding/EMAIL-STYLE-GUIDE.md) — the email-safe rules: fonts + fallbacks, color, composition, dark mode.
- [`projects/marketing/email-branding/README.md`](../../../projects/marketing/email-branding/README.md) — project shape and "notes for AI."
- [`brand/JK-Brand-Guide.md`](../../../brand/JK-Brand-Guide.md) — the brand authority. When anything here conflicts with it, the brand guide wins.
- The files being changed: `signatures/_template.html`, `signatures/<name>.html`, `templates/branded-email.html`.

Never redefine color, type, or the logo here — pull from `brand/`.

## Hard rules (email is not the web — these are non-negotiable)
These are why a "simple" tweak can silently break for a recipient. Keep all of them:
- **Tables + inline CSS only.** No flexbox, no grid, no `<style>` block you depend on,
  no external stylesheet. Gmail strips `<head>` styles; Outlook renders with Word.
- **Web fonts do not load.** Name the brand fonts but design for the **fallback**
  (`Source Serif 4→Georgia`, `IBM Plex Sans→Arial`, `IBM Plex Mono→Courier New`). If it
  only looks right with the webfont, it's broken. The brand is carried by **color,
  layout, and the Medallion** — never by the font rendering.
- **One image only: the reversed Medallion PNG** (`brand/logo/png/JK-medallion-reversed-512.png`).
  No SVG (email can't render it). Everything else — name, wordmark, label rows — is
  **live text**, so the card reads fully even before the image loads.
- **Live-text fallback + `alt=""`.** The teal panel's wordmark IS the image-blocked
  fallback; the Medallion `<img>` is decorative (`alt=""`) so a blocked image never
  duplicates the wordmark or leaves a broken-name box.
- **Dark-mode safety.** Both panels carry an explicit `bgcolor` **and** inline
  `background-color` (teal `#123841`, paper `#FBF8F2`). Our palette mandates dark-teal
  text; without fixed panel colors a dark-mode client repaints the ground and the text
  vanishes. Never remove these.
- **Panel color = `#123841`** to match the Medallion PNG's baked-in tile exactly, so the
  mark sits seamlessly with no visible box. Never recolor / box / stretch the logo.
- **Bronze stays rare** (`#9C6A39`) — only the small diamond ◆ and the one booking link.
  Never a second accent, background, or third font. Never ship the booking link pointing
  at an empty `{{BOOKING_URL}}` — fill it or point it at `mailto:`.
- **Outlook/Word hardening stays:** `mso-table-lspace/rspace:0`, `mso-line-height-rule:exactly`,
  `mso-padding-alt` on any button cell, `font-size:0` on image cells.
- **Keep every teammate's signature structurally identical** — only the person's details
  differ. Consistency is the whole point; change the template and re-derive, don't
  one-off a single person.

## The Gmail image reality (the biggest lesson — do not relitigate it)
You **cannot preview the Medallion showing** in a Gmail draft, and you cannot force a
recipient to display it. Learned the hard way:
- Gmail proxies external images through `googleusercontent.com`. A `cid:` attachment, a
  raw GitHub URL, and a jsDelivr URL **all fail** to render in a Gmail draft/received
  message. Don't burn time trying to make a draft show the image — it won't.
- The **only reliable way** the Medallion shows is uploading it once inside Gmail's
  signature editor (**Insert image → Upload**); Google then hosts it on
  `googleusercontent` and serves it to recipients. That's what `INSTALL-GMAIL.md`
  documents, and it's a **manual** step (the Gmail connector can't set account signatures).
- So: **verify the design by rendering the HTML locally and screenshotting** (below), not
  by sending a Gmail draft. Reserve Gmail for the actual install/test on the account.
- If asked "why can't recipients see it / can we force it," the honest answer is: image
  display is the recipient's setting; we make the signature read fully **without** the
  image (live text + teal panel), and the upload path is what makes it show for most.

## Workflow A — modify an existing signature
1. **Understand the ask** and read the target file + the style guide. If it's a visual
   judgment ("make it more elegant," "smaller," "restructure"), run the change through
   the **impeccable** skill and the Design System — don't freehand it.
2. **Edit** `signatures/<name>.html`, keeping every hard rule above. If the change is
   structural (a line added/removed, sizing, spacing), make the **same** change in
   `signatures/_template.html` so future teammates inherit it.
3. **Render + screenshot to verify** (see "Verify"). Look at it. Iterate on the render,
   not in the user's inbox.
4. If sizing feedback is "too big" (a recurring one): shrink the Medallion (`width/height`),
   the name and label font-sizes, and the cell padding together — a signature should read
   as a *footer*, not a card. Keep it low (few rows, no tagline block).
5. Confirm no `{{placeholders}}` remain (`grep "{{"`) and links are real
   (`mailto:`, `tel:`, web, booking).

## Workflow B — add a teammate
1. `cp projects/marketing/email-branding/signatures/_template.html projects/marketing/email-branding/signatures/<firstname>.html`
   (lowercase first name).
2. Fill every placeholder: `{{FIRST_NAME}}`, `{{LAST_NAME}}`, `{{CREDENTIALS}}`
   (post-nominals incl. leading comma, or delete the span), `{{ROLE_CAPS}}`, `{{EMAIL}}`,
   `{{PHONE}}`, `{{PHONE_TEL}}` (digits with +1), `{{BOOKING_URL}}` (or their `mailto:`).
   Also delete the template's instructional `<!-- … -->` comment block (the shipped
   signatures, e.g. `julia.html`, carry no comment). Then `grep "{{"` the finished file
   to be sure none remain — with the comment gone, any match is a real leftover.
3. Render + screenshot to verify it matches the others exactly.
4. Point them to `INSTALL-GMAIL.md` for the ~10-minute Gmail install (paste → upload the
   Medallion → set as default for new + replies).

## Verify (always do this before saying "done")
Render the HTML headless and screenshot it — this is the real check, not a Gmail draft.
Playwright + Chromium are preinstalled. Save this as an **ES module** (`.mjs`, or a
`.js` in a `type:module` package) — it uses top-level `await` and pulls in the global
Playwright (a CommonJS package) via a default import:
```js
import pkg from '/opt/node22/lib/node_modules/playwright/index.js';
const { chromium } = pkg;
const b = await chromium.launch();           // executablePath auto-resolves
const p = await b.newPage();
await p.goto('file:///abs/path/to/signatures/julia.html');
await p.screenshot({ path: 'sig.png' });     // or screenshot the signature <table> element
await b.close();
```
Then **look** at the screenshot: proportions (footer, not billboard), the Medallion sits
unboxed on the teal panel, bronze appears exactly once, contrast holds, nothing clipped.
Preview the fallback fonts (the render uses them) — that's what recipients see.
`projects/marketing/email-branding/preview.html` shows all three surfaces together.

## Keep it in sync (leave the project consistent)
- A structural change to a signature → mirror it in `_template.html`.
- A change to a **rule** (a new constraint, a color, the image path) → update
  `EMAIL-STYLE-GUIDE.md` and, if it affects install, `INSTALL-GMAIL.md`.
- Check the index tables if you add/rename files (project `README.md`).
- Commit in English. Signatures are public contact info + brand assets (not client
  data), so committing them is fine.

## Done means
- No `{{placeholders}}` left; all links real and working.
- Bronze appears once; only Design-System colors used.
- Rendered + screenshotted and eyeballed in the fallback fonts — reads as a footer.
- Template and docs still in sync; structurally identical to the other signatures.
- Install path is clear (upload the Medallion in Gmail; that's the only way it shows).
