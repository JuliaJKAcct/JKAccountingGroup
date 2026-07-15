# Social avatar — round profile photos (WhatsApp & co.)

The profile image for apps that crop avatars to a **circle**: WhatsApp, Telegram,
Google, Instagram/Facebook profile photo, etc.

## Files
- `JK-social-avatar.svg` — master (square, 1000×1000 viewBox). Edit / re-export here.
- `JK-social-avatar-1000.png` — ready-to-upload raster, 1000×1000.

## Why this and not the full Medallion
WhatsApp shows the profile photo as a circle, and in the chat list it renders at
about **46 px**. At that size the Medallion's ring text (“JK ACCOUNTING GROUP ·
TAX · BOOKKEEPING · CFO”) turns into an illegible smudge. Per the brand guide's
size step-down (**badge → emblem → monogram** below ~64 px), the correct mark for
a small circular avatar is the **emblem** — the double ring + JK monogram, no
text. It stays crisp from the big profile view down to the tiny list thumbnail.

## How it's built (so a circular crop never cuts the mark)
- **Square** canvas (1:1). Never upload a rectangle — the app crops the middle and
  the logo ends up tiny (the exact problem this file fixes).
- The emblem sits inside the **circular safe zone**: its outer ring is ~78 % of the
  width, so the whole mark (rings + bronze diamonds) stays well inside the crop.
- Brand teal field with a soft radial vignette for depth (`#164450`→`#123841`→`#0C272E`),
  ivory rings/monogram, bronze inner ring + diamonds. All palette colors.

## Using it
Upload `JK-social-avatar-1000.png` directly as the WhatsApp (or other) profile
photo. In WhatsApp's “Move and scale” screen, leave it centered and don't zoom —
it's already sized for the crop.

If you ever need the **full Medallion** for a square (non-cropped) avatar slot,
export `JK-medallion-reversed.svg` on a teal field instead — but not for WhatsApp.
