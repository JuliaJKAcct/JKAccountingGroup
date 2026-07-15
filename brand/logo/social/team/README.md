# Team avatars — per-person round profile photos

Round-avatar profile photos for **team members'** work WhatsApp (and any app that
crops avatars to a circle). Chosen July 2026 by Lilian after a design round.

## The system: dark = company, light = person

- The **company account** uses the dark seal in [`../`](../) — the full Medallion
  on teal. That one identifies the firm itself (Julia's/the main number). Don't
  reuse it for personal accounts.
- **Team members** use these **light ivory avatars with their initials**, so in a
  chat list the firm reads as one family, but each person is instantly
  distinguishable — from the company *and* from each other.

## Layout (the "name-large" variant)

Square 1000×1000, safe for the circular crop: ivory field (`#F6F3EC`), thin teal
frame, the person's **initials drawn in the same custom letterform style as the
JK monogram** of the medallion (narrow monoline caps, J-hook curves, tight
monogram spacing — *not* a font), a bronze rule, the firm name in IBM Plex Mono
40px, and two bronze diamonds.

## Current roster

| Person | Initials | Files |
|---|---|---|
| Lilian | LG | `JK-team-avatar-LG.svg` / `-1000.png` |
| Liudmyla | LK | `JK-team-avatar-LK.svg` / `-1000.png` |
| Maria | MZ | `JK-team-avatar-MZ.svg` / `-1000.png` |

Upload the `-1000.png` directly as the profile photo; in WhatsApp's "Move and
scale" leave it centered, no zoom.

## Adding a teammate

```bash
node new-team-avatar.mjs <INITIALS>     # e.g. node new-team-avatar.mjs AB
```

The generator writes the SVG (and the PNG when Chromium is available — it is in
Claude Code cloud sessions; elsewhere set `CHROME=/path/to/chrome`). Letters
currently in the library: **J K L G M Z**. If the new initials need a letter
that isn't there yet, draw it inside `new-team-avatar.mjs` following the metric
comments (cap 26→86, stroke 9, butt caps, miter joins, narrow ≈0.52–0.66
width/cap ratio, J-hook quadratics for rounded corners) and **compare it
rendered next to the JK monogram before shipping** — the letters must read as
one family. Add the person to the roster table above.

## Provenance

Letterforms were matched against `../../svg/JK-monogram-teal.svg` (the medallion
monogram): measured widths (J 0.66, K 0.53), the J-hook's quadratic corner
radius (~13–16 units), butt-cut angled terminals, and the tight J–K gap (~6
units → 8 here). Crop safety and edge uniformity are pixel-verified at export
(all ink inside 95% of the crop radius; the thin frame is the outermost element).
