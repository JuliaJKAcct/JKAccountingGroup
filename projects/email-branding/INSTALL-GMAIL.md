# Installing the signature in Gmail

Ten minutes, once per person. The only real prerequisite is **hosting the logo**,
because email can't show a logo that lives on your computer.

## Step 1 — Host the images (do this once for the whole firm)

Email clients only display images they can fetch from a public web address. The
signature uses **two** images, so both have to live at stable **HTTPS URLs** that
anyone's inbox can reach:

**a) The logo (`{{LOGO_URL}}`) — one file, shared by everyone.** Use the primary
Medallion, exported for retina:
[`brand/logo/png/JK-medallion-primary-512.png`](../../brand/logo/png/JK-medallion-primary-512.png)
(it displays at 76px but ships at 2× so it stays crisp). For the branded email
header you'll also want the white lockup,
[`brand/logo/png/JK-lockup-horizontal-reversed-2048.png`](../../brand/logo/png/JK-lockup-horizontal-reversed-2048.png).

**b) The portrait (`{{PHOTO_URL}}`) — one per person.** A real photo, **cropped 4:5**
(e.g. 168×210 for retina), warm-graded. Real faces only — never stock or AI. **No
photo yet?** Skip this and use the teal `JK` panel instead (the fallback markup is
in the signature file, in the comment right under the signature). Then you don't
need a `{{PHOTO_URL}}` at all.

**Where to host it (pick one):**
- **The firm website** — best. Upload to something like
  `https://jkaccountinggroup.com/assets/email/jk-medallion-80.png`. Stable, ours,
  never expires.
- **Google Drive** won't work for this (its share links aren't direct-image URLs).
- A dedicated image host (Cloudinary, imgix, even a public S3 bucket) is fine as a
  fallback.

Whatever the final URL is, that's your `{{LOGO_URL}}`. Use the **same URL for
everyone** — one hosted file, reused.

## Step 2 — Fill in the signature

Open `signatures/julia.html` (or copy `_template.html` to
`signatures/<firstname>.html` for a teammate) and replace every `{{PLACEHOLDER}}`:

| Placeholder | Example |
|---|---|
| `{{LAST_NAME}}` | Kovalenko |
| `{{TITLE}}` | Founder, CPA |
| `{{PHONE}}` | +1 (305) 555‑0142 |
| `{{PHONE_TEL}}` | +13055550142 |
| `{{WEBSITE}}` | jkaccountinggroup.com |
| `{{BOOKING_URL}}` | https://calendly.com/jkacct/intro |
| `{{PHOTO_URL}}` | the portrait URL from Step 1b (or use the teal `JK` fallback) |
| `{{LOGO_URL}}` | the logo URL from Step 1a |

Search the file for `{{` to be sure none are left.

## Step 3 — Copy the rendered signature

1. Open the filled‑in `.html` file in a web browser (double‑click it).
2. Click just before the logo, drag to just after the button to select the whole
   signature block.
3. Copy (⌘C / Ctrl‑C). You're copying the *rendered* signature, not the code.

## Step 4 — Paste into Gmail

1. Gmail → **Settings** (gear) → **See all settings** → **General** tab.
2. Scroll to **Signature** → **Create new** → name it "JK".
3. Click into the signature box and **paste** (⌘V / Ctrl‑V).
4. Under **Signature defaults**, set it for **new emails** and **replies/forwards**.
5. Scroll down and **Save Changes**.

## Step 5 — Test before you rely on it

- Email yourself and open it on **Gmail desktop** and **Gmail on your phone**.
- Confirm the logo appears (if it's a broken image, the `{{LOGO_URL}}` isn't public
  — recheck Step 1 by opening that URL in a private window).
- Click the email, phone, website, and booking links.
- The fonts will look like Georgia + Arial in Gmail — that's expected and on‑brand
  (see the style guide). Color, layout, logo and the bronze button carry it.

## Other clients (quick notes)

- **Apple Mail (Mac):** Preferences → Signatures → drag the rendered signature in,
  and untick "Always match my default message font." Apple Mail *does* honor the
  brand fonts.
- **Outlook:** paste the rendered block into Signatures; Outlook squares off the
  rounded button corners — acceptable, the color still reads.

## The branded email template

`templates/branded-email.html` isn't a Gmail signature — it's a full HTML email for
designed sends (onboarding, newsletters). Use it by pasting the HTML into whatever
sends the campaign (a mail‑merge tool, an ESP, or Gmail in HTML‑paste mode), then
fill its placeholders the same way. Same logo‑hosting rule applies.
