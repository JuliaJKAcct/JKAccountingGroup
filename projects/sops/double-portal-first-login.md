# Double Client Portal — first-time client sign-in

> **Status:** Active · **Owner:** Julia · **Started:** 2026-07

## Why this exists

Double's Client Portal has no "sign up" step. A newly-invited client only sees
**"Sign in"** — with a magic-link box by default. In practice that default path
is unreliable for our clients:

- **Magic link** — the email often doesn't arrive, and even when it does, the
  link **expires**, so the client has to request a new one *every single time*
  they want to log in. Not workable for recurring portal use.
- **Sign in with Google** — does not work for our portal setup.

The one path that has worked consistently (confirmed with Double support) is:
choose **"Sign in with password"** even though the client has never set a
password, then immediately use **"Forgot your password?"** to set one via a
reset-link email. That reset email has been reliable, and once the password is
set the client signs in normally (email + password) from then on — no more
expiring links.

Julia has a meeting with Double next week to raise this UX gap; until it's
fixed (if it is), this workaround is the standard instruction sent to clients.

## The procedure (what the client does)

1. Open the Client Portal sign-in page (the link we send them).
2. Click **"Sign in with password"** (below the magic-link box).
3. On the password screen, click **"Forgot your password?"** (top right, next
   to the password field).
4. Confirm the email field shows their email — the one Double has on file for
   them (the one we used to set up their Double account). If it's blank, they
   type it in themselves.
5. Click **"Get reset link."** Allow a few minutes for the email to arrive.
6. They open the email from Double and follow the link to set a password.
7. From then on, they return to the sign-in page, choose **"Sign in with
   password,"** and log in with email + the password they just set.

Firm-side alternative: a teammate can also trigger this manually from
**Portal Settings → Contacts tab → Actions (⋯) → "Send password reset link"**
for a specific contact, without the client needing to click through the
sign-in page themselves first.

## Client-ready templates

Ready-to-send versions of these instructions live in
[`client-guides/`](./client-guides/):

| File | Use |
|---|---|
| [`double-first-login-guide-en.html`](./client-guides/double-first-login-guide-en.html) | **Visual one-page guide, English — recommended.** Self-contained; nothing to host. |
| [`double-first-login-guide-ru.html`](./client-guides/double-first-login-guide-ru.html) | **Visual one-page guide, Russian — recommended.** Self-contained; nothing to host. |
| [`double-first-login-email-en.html`](./client-guides/double-first-login-email-en.html) | Branded HTML email, English (uses hosted-screenshot placeholders) |
| [`double-first-login-email-ru.html`](./client-guides/double-first-login-email-ru.html) | Branded HTML email, Russian (uses hosted-screenshot placeholders) |
| [`double-first-login-whatsapp-en.md`](./client-guides/double-first-login-whatsapp-en.md) | Short WhatsApp-ready text, English |
| [`double-first-login-whatsapp-ru.md`](./client-guides/double-first-login-whatsapp-ru.md) | Short WhatsApp-ready text, Russian |

**Recommended: the visual one-page guide.** The `…-guide-*.html` files are the
easiest thing to send — a single page, four steps in a 2×2 grid. The three
Double portal screens (magic-link mode → password mode → reset screen) are
**faithfully recreated in HTML/CSS**, not screenshots — the correct button on
each screen is spotlighted in bronze with a "click this" pointer, and the
magic-link/Google buttons are marked "skip"; the fourth cell shows the reset
email and how you'll sign in from then on. The files are **fully self-contained**
(only the JK medallion is embedded, as a data URI): nothing to host, works
offline, and exports to exactly one PDF page. To send:

- **Email** — attach the `.html`, or open it and export to PDF and attach that.
- **WhatsApp** — open in a browser and export to PDF (send as a document), or
  save a full-page screenshot and send as an image. One file, no separate
  screenshots to attach in order.

Before sending, personalize the greeting/portal link if you're pasting into an
email body (the guide file itself carries no per-client fields — the email
templates below do). This is why the visual guide is the default: no image
hosting, no placeholders to fill, no ordering to get right.

**Alternative — branded email + hosted screenshots:** the `…-email-*.html`
templates use three `{{STEP*_IMG_URL}}` placeholders for the three client-facing
portal screenshots (sign-in page → password screen with "Forgot your password?"
→ reset-link screen). Host the three images (e.g. a public Google Drive link,
same pattern as the logo in
[`../marketing/email-branding/`](../marketing/email-branding/)) and fill in the
URLs, plus `{{FIRST_NAME}}` / `{{PORTAL_URL}}`, before sending. For the WhatsApp
text version, send the message first, then attach those same three screenshots
as separate images **in the order listed**. (The Portal Settings manual-reset
screenshot is firm-internal only — it's not sent to clients in either channel.)

## Notes

- This is generic Double-portal UI guidance, not client-specific — safe to
  reuse for every client we onboard to the portal.
- If a client's reset email never arrives (checked spam/promotions too), use
  the Portal Settings manual-reset path above instead of troubleshooting
  their inbox further.
