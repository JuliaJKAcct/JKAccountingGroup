# Installing the signature in Gmail

About ten minutes, once per person. **You do not need a website** — Gmail can store
the one image for you.

## Step 1 — The one image (the Medallion) needs a home online

An email you send lives on the *recipient's* screen, so any picture in it has to be
stored somewhere on the internet their email app can reach — a file that lives only
on your computer shows up as a broken box. The signature has just **one** image — the
Medallion in the teal panel; everything else (wordmark, name, label rows) is live text
that always shows. There are **two ways** to give the Medallion a home:

**Method A — point it at a public web address (the smoothest — recommended).**
The Medallion already lives at a public URL in the firm's repo:
`https://raw.githubusercontent.com/JuliaJKAcct/JKAccountingGroup/main/brand/logo/png/JK-medallion-reversed-512.png`.
When the signature's `<img src>` points there, the Medallion **appears the moment you
paste** — no upload, nothing to place. **Julia's signature is already set up this way**
(the `julia-hosted.html` build). This is the method that worked cleanly; use it unless
you have a reason not to.

**Method B — let Gmail host it (upload).** Gmail's signature editor has an
**Insert image → Upload** button: pick the file
[`brand/logo/png/JK-medallion-reversed-512.png`](../../../brand/logo/png/JK-medallion-reversed-512.png)
and Google stores it. Rock-solid display and no dependency on the repo — **but** placing
the uploaded image into the teal panel is fiddly (Gmail drops it at the cursor, and the
broken-image box is hard to select). Use this only if Method A isn't an option, or for a
**personal photo** you'd rather not host in a public repo.

> *Method A depends on that repo file staying publicly reachable. Later, once the firm
> website is live, host the Medallion at a stable URL (e.g.
> `https://www.jkaccountinggroup.com/assets/email/…`) and point the signature there so
> every teammate's is pixel-identical. Google Drive share links don't work for this.*

## Step 2 — Julia's files are ready

There are **two** paste-ready versions of Julia's signature, identical except for how
the Medallion is hosted — pick the one that matches your method from Step 1:

- **`signatures/julia-hosted.html`** — the Medallion `src` points at the **public URL**
  (**Method A**). Paste it and the Medallion shows immediately; nothing to upload. This
  is the paste-and-go file, and the one Julia uses.
- **`signatures/julia.html`** — the canonical file; the Medallion is a **local
  reference**, so you paste it and then **upload** the Medallion in Gmail (**Method B**).

Both are already filled in (name, credentials, role, the DIRECT / EMAIL / WEB
rows, and the email‑linked booking link) — **nothing to edit**; swap the booking link
for a real booking URL whenever you like.

**Adding a teammate?** Copy `_template.html` → `signatures/<firstname>.html` and fill
its `{{PLACEHOLDERS}}`: `{{FIRST_NAME}}`, `{{LAST_NAME}}`, `{{CREDENTIALS}}`
(e.g. `, CPA`), `{{ROLE_CAPS}}`, `{{EMAIL}}`, `{{PHONE}}`, `{{PHONE_TEL}}`, and
`{{BOOKING_URL}}` (or point it at their email). Search for `{{` to be sure none remain.
For a Method‑A install, also point the Medallion `src` at the public URL (as
`julia-hosted.html` does) — or just use Method B (upload) with the local-reference file.

## Step 3 — Copy the rendered signature

1. Open the file for **your method** in a web browser (double‑click it):
   - **Method A** → `signatures/julia-hosted.html` (the Medallion loads from the web).
   - **Method B** → `signatures/julia.html`.
2. Select the whole signature card — click just above the teal panel (top‑left) and
   drag to just past the last line (bottom‑right) so the entire card is highlighted.
3. Copy (⌘C / Ctrl‑C). You're copying the *rendered* signature, not the code.

## Step 4 — Paste into Gmail

1. Gmail → **Settings** (gear) → **See all settings** → **General** tab.
2. Scroll to **Signature** → **Create new** → name it "JK".
3. Click into the signature box and **paste** (⌘V / Ctrl‑V). The text, colors, layout
   and links come across.
4. **The Medallion:**
   - **Method A (hosted URL — Julia's setup):** it appears **right away**, already in the
     teal panel. Nothing to do — skip to Step 5.
   - **Method B (upload):** the Medallion shows as a small broken box. Click where it
     should be, choose **Insert image → Upload** in the signature toolbar, and upload
     `JK-medallion-reversed-512.png`. (Heads-up: Gmail inserts at the cursor, so it can
     land in the wrong spot — this is why Method A is smoother.)

## Step 5 — Make it the default and test

1. Under **Signature defaults**, set the "JK" signature for **both** *new emails*
   **and** *replies/forwards*, and tick **"Insert signature before quoted text."**
2. Scroll down and **Save Changes**.
3. **Test:** email yourself and open it on Gmail desktop **and** your phone. Confirm
   the Medallion shows and the email / phone / website / booking links work. The fonts
   will look like Georgia + Arial — that's expected and on‑brand (color, layout,
   panel and Medallion carry it).

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
