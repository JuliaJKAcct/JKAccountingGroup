# Installing the signature in Gmail

About ten minutes, once per person. **You do not need a website** — Gmail can store
the one image for you.

## Step 1 — The images (the easy way: let Gmail host them)

An email you send lives on the *recipient's* screen, so any picture in it has to be
stored somewhere on the internet their email app can reach — a file that lives only
on your computer shows up as a broken box. That's the only reason "a public address"
comes up at all.

**You don't need to set any of that up.** Gmail's signature editor has an
**Insert image → Upload** button: you pick a file from your computer, and Google
stores and serves it for you, automatically.

The signature has just **one** image — the emblem in the teal panel:

- **Emblem (the only image):** the file to upload is
  [`brand/logo/png/JK-emblem-reversed-512.png`](../../brand/logo/png/JK-emblem-reversed-512.png).
  Everyone uses the same file. Everything else — the wordmark, the name, the label
  rows — is live text, so it always shows even before the image loads.

> *Later, once the firm website is live, you can instead host this at a public URL
> (e.g. `https://www.jkaccountinggroup.com/assets/email/…`) and point the signature
> there, so every teammate's is pixel-identical. Google Drive share links don't work
> for this. Until then, Gmail's upload is the simplest path.*

## Step 2 — Julia's file is ready

`signatures/julia.html` is already filled in — name, credentials, role, the
DIRECT / EMAIL / WEB / OFFICE rows, the bilingual line, and the (email‑linked)
booking button. **Nothing to edit.** Just install it (Steps 3–5); swap the button
for a real booking link whenever you like.

**Adding a teammate?** Copy `_template.html` → `signatures/<firstname>.html` and fill
its `{{PLACEHOLDERS}}`: `{{FIRST_NAME}}`, `{{LAST_NAME}}`, `{{CREDENTIALS}}`
(e.g. `, CPA`), `{{ROLE_CAPS}}`, `{{EMAIL}}`, `{{PHONE}}`, `{{PHONE_TEL}}`, and
`{{BOOKING_URL}}` (or point it at their email). Search for `{{` to be sure none remain.

## Step 3 — Copy the rendered signature

1. Open `signatures/julia.html` in a web browser (double‑click it).
2. Select the whole signature card — click just above the teal panel (top‑left) and
   drag to just past the last line (bottom‑right) so the entire card is highlighted.
3. Copy (⌘C / Ctrl‑C). You're copying the *rendered* signature, not the code.

## Step 4 — Paste into Gmail and add the emblem

1. Gmail → **Settings** (gear) → **See all settings** → **General** tab.
2. Scroll to **Signature** → **Create new** → name it "JK".
3. Click into the signature box and **paste** (⌘V / Ctrl‑V). The text, colors and
   layout come across; the **emblem** in the teal panel may show as a small broken
   image — that's expected, we fix it next.
4. Click the broken emblem once to select it (or click where it should be), then in
   the signature toolbar choose **Insert image → Upload**, and upload
   `JK-emblem-reversed-512.png`. Gmail stores it and drops it in.

## Step 5 — Make it the default and test

1. Under **Signature defaults**, set the "JK" signature for **both** *new emails*
   **and** *replies/forwards*, and tick **"Insert signature before quoted text."**
2. Scroll down and **Save Changes**.
3. **Test:** email yourself and open it on Gmail desktop **and** your phone. Confirm
   the emblem shows and the email / phone / website / booking links work. The fonts
   will look like Georgia + Arial — that's expected and on‑brand (color, layout,
   panel and emblem carry it).

## Other clients (quick notes)

- **Apple Mail (Mac):** Preferences → Signatures → drag the rendered signature in,
  and untick "Always match my default message font." Apple Mail honors the brand fonts.
- **Outlook:** paste the rendered block; Outlook squares the rounded corners — fine,
  the color still reads.

## Want *every* email on‑brand, not just the signature?

See [`GMAIL-DEFAULTS.md`](./GMAIL-DEFAULTS.md) — how to set Gmail's default text style
and signature defaults, with an honest account of what Gmail can and can't do.

## The branded email template

`templates/branded-email.html` is a full HTML email for designed sends (onboarding,
newsletters) — not a Gmail signature. Save it as a Gmail **Template** (Settings →
Advanced → Templates) or paste it into a compose window; see `GMAIL-DEFAULTS.md §3`.
