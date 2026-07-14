# Double Client Portal — first-time client sign-in

> **Status:** Active · **Owner:** Julia · **Started:** 2026-07

## Why this exists

Double's Client Portal has no "sign up" step. A newly-invited client only sees
**"Sign in"** — they have no password yet, and the two no-password options fail
for our clients:

- **Magic link** — the email often doesn't arrive, and even when it does, the
  link **expires**, so the client has to request a new one *every single time*
  they want to log in. Not workable for recurring portal use.
- **Sign in with Google** — does not work for our portal setup.

The one path that has worked consistently (confirmed with Double support) is to
use **"Forgot your password?"** to set a password via a reset-link email. That
reset email has been reliable, and once the password is set the client signs in
normally (email + password) from then on — no more expiring links.

**Portal now opens on the password screen.** We've set the portal so it opens
**directly on the password sign-in screen** (not the magic-link box), which
removes a step — the client no longer has to pick "Sign in with password" first,
they go straight to "Forgot your password?". (The portal's on-brand colors and
logo are configured per [`double-portal-branding.md`](./double-portal-branding.md).)

## The procedure (what the client does)

1. Open the Client Portal sign-in page (the link we send them) — it opens on the
   password sign-in screen.
2. Click **"Forgot your password?"** (just above the password field, on the
   right).
3. Confirm the email field shows their email — the one Double has on file for
   them (the one we used to set up their Double account). If it's blank, they
   type it in themselves.
4. Click **"Get reset link."** Allow a few minutes for the email to arrive.
5. They open the email from Double and follow the link to set a password.
6. From then on, they return to the same sign-in page and log in with their
   email + the password they just set (in the **Password** box).

Clients should **not** use "Sign in with magic link" or "Sign in with Google"
(both still appear lower on the screen) — neither works reliably for our portal.

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
| [`double-first-login-en.pdf`](./client-guides/double-first-login-en.pdf) · [`…-ru.pdf`](./client-guides/double-first-login-ru.pdf) | The visual guide exported to a single PDF page — the file you attach to an email or send on WhatsApp. Regenerate from the `…-guide-*.html` if the guide changes. |
| [`double-first-login-email-template.md`](./client-guides/double-first-login-email-template.md) | **Saved email / Double message-template copy (EN + RU)** — subject + body to keep as a canned response and send whenever a client asks; attach the PDF above. |
| [`double-first-login-whatsapp-en.md`](./client-guides/double-first-login-whatsapp-en.md) | Short WhatsApp-ready text, English |
| [`double-first-login-whatsapp-ru.md`](./client-guides/double-first-login-whatsapp-ru.md) | Short WhatsApp-ready text, Russian |

**Recommended: the visual one-page guide.** The `…-guide-*.html` files are the
easiest thing to send — a single page, three steps. The two Double portal screens
(password sign-in → reset screen) are **faithfully recreated in HTML/CSS**, not
screenshots — the correct control on each screen is spotlighted with a "click
this" pointer, and the magic-link/Google buttons are marked "skip"; the third
step shows the reset email and how you'll sign in from then on. The files are
**fully self-contained** (only the JK medallion is embedded, as a data URI):
nothing to host, works offline, and export to exactly one PDF page. To send:

- **Email / Double message** — save the copy in
  [`client-guides/double-first-login-email-template.md`](./client-guides/double-first-login-email-template.md)
  as a canned response / template (EN + RU), and **attach the one-page PDF**
  (`double-first-login-en.pdf` / `-ru.pdf`). Send it whenever a client asks. The
  body text stands on its own, and the PDF carries the visual — no image hosting,
  because email clients strip inline `data:`-URI images.
- **WhatsApp** — send the PDF as a document, or save a full-page screenshot and
  send as an image. One file, no separate screenshots to attach in order.

The visual guide itself carries no per-client fields; personalize the greeting
and portal link in the email/message body (`double-first-login-email-template.md`
has `{{FIRST_NAME}}` / `{{PORTAL_URL}}`). This is why the visual guide is the
default: no image hosting, no placeholders to fill, no ordering to get right.

## Notes

- This is generic Double-portal UI guidance, not client-specific — safe to
  reuse for every client we onboard to the portal.
- If a client's reset email never arrives (checked spam/promotions too), use
  the Portal Settings manual-reset path above instead of troubleshooting
  their inbox further.
