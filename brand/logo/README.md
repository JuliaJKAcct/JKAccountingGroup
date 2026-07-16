# JK Accounting Group — Logo assets

The approved identity: the **Medallion** seal (a connected J&K monogram inside a
double ring with the firm name and service line, bronze diamonds at the sides),
in petrol teal `#123841` + warm bronze `#9C6A39` on soft ivory `#F6F3EC`.

## Hierarchy
- **Badge** — the full medallion with ring text. Use at ~64px and above.
- **Emblem** — the rings + monogram, no text. Use in lock-ups and small sizes.
- **Monogram** — the bare J&K. Use for the favicon and tiny placements.

## Placing on photos / colored backgrounds (e.g. social posts)
The `primary` and `reversed` medallions have a **transparent** interior — the fill
you see is whatever sits behind them — so on a colored or photo background they lean
on that background for their face. For a drop-anywhere round seal use
**`solid-teal`**: the medallion on its own solid petrol-teal face (`#123841`) with
ivory ring text + monogram and a bronze inner ring, and transparent corners. It's a
perfect circle — no square, no box around it — so you can place it on any background
(social posts, photos) and it reads as a self-contained seal.

## Folders
- `svg/` — master vectors (scalable, editable, primary source of truth)
- `png/` — raster exports (transparent; reversed/white variants on teal)
- `favicon/` — favicon.svg, favicon-16/32/48/256/512.png, favicon.ico (16/32/48),
  apple-touch-icon-180.png, maskable-512.png, app-icon-512.png
  (256/512 = crisp square monogram tiles for platform favicon fields, e.g. Odoo Website)
- `social/` — round-avatar profile images (WhatsApp, Telegram, Google, etc.): the
  full medallion on a teal field, square 1:1, sized to survive a circular crop;
  `social/team/` holds the per-person team avatars (light, initials in the
  monogram letter style) + their generator

## svg/ contents
medallion: primary · reversed · onecolor-teal · black · white · solid-teal (round seal on a solid petrol-teal face — for photos/colored backgrounds; PNGs at 2048/1024/512)
emblem: JK-emblem · JK-emblem-reversed
monogram: teal · black · white · reversed
lock-ups: horizontal (+reversed) · stacked (+reversed) — emblem beside the serif wordmark
icons: JK-favicon (monogram tile) · JK-app-icon (emblem tile)

## Colors
- Petrol Teal (brand) `#123841`  ·  deep `#0D2A31`
- Warm Bronze (accent) `#9C6A39`  ·  light `#CFA268`  ·  ink `#7E5430`
- Soft Ivory (reversed strokes) `#ECE6DA`  ·  page `#F6F3EC`

## Fonts
Source Serif 4 (wordmark) · IBM Plex Mono (ring text / sublines). Both OFL, on Google Fonts.
SVGs with text embed an @import so the fonts load in a browser; the PNGs have them baked in.

## Don't
Recolor off-palette · stretch / skew / rotate · box the mark · use the full badge below ~64px
(switch to the emblem, then the monogram).
