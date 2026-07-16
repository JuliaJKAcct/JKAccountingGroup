# Social avatar — round profile photos (WhatsApp & co.)

The profile image for apps that crop avatars to a **circle**: WhatsApp, Telegram,
Google, Instagram/Facebook profile photo, etc.

**This folder holds the company account's avatar** (the dark seal). **Team
members' personal work avatars** — light, with each person's initials in the
monogram letter style — live in [`team/`](./team/); dark = company, light =
person, so the firm reads as one family in a chat list while each account stays
distinguishable.

## Files
- `JK-social-avatar.svg` — master (square, 1000×1000 viewBox). Edit / re-export here.
- `JK-social-avatar-1000.png` — ready-to-upload raster, 1000×1000.
- `team/` — per-person team avatars + the generator (`new-team-avatar.mjs`) and roster.

## What it is
The **full Medallion** (reversed variant, with the ring text “JK ACCOUNTING GROUP ·
TAX · BOOKKEEPING · CFO”), identical to `JK-medallion-reversed.svg`, on a flat
brand-teal field — just re-laid-out at the size WhatsApp needs.

## How it's built (so a circular crop never cuts the mark)
- **Square** canvas (1:1). Never upload a rectangle — the app crops the middle and
  the logo ends up tiny (the exact problem this file fixes).
- The medallion is centered at **~80 % width**, so its outer ring and the bronze
  side-diamonds reach only ~82 % of the crop radius (≈88 px of clear margin). The
  circular crop clips nothing — verified pixel-by-pixel at export.
- Flat brand teal `#123841` field (no gradient), so there's no banding at any edge.

## Using it
Upload `JK-social-avatar-1000.png` directly as the WhatsApp (or other) profile
photo. In WhatsApp's “Move and scale” screen, leave it centered and don't zoom —
it's already sized for the crop.

## Note on very small sizes
In the chat-list thumbnail (~46–48 px) the ring text becomes small, as it would on
any circular badge that size. The profile and in-chat views show the full medallion
clearly. If you ever want maximum legibility at thumbnail size specifically, the
text-free **emblem** (`JK-emblem-reversed.svg` on teal) is the alternative — but the
standard firm avatar here is the full medallion.
