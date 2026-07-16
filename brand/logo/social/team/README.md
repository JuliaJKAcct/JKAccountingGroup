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
monogram spacing — *not* a font), a bronze rule, the firm name, and two bronze
diamonds.

**Self-contained — no font dependency.** Both the initials *and* the firm-name
line are vector **outlines** (the name outlined once from IBM Plex Mono Medium at
40px / letter-spacing 4). The SVG masters carry no `@import` and no live `<text>`,
so they render identically offline, inside `<img>`, and through thumbnailers —
not just in a networked browser.

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
Claude Code cloud sessions; elsewhere set `CHROME=/path/to/chrome`). It renders
into a taller window and crops to 1000×1000 to dodge a headless-Chromium viewport
bug, then **pixel-checks the frame ring is present on all four sides and the
corners are ivory**, throwing (no file written) if the render came out clipped.
Temp render files are cleaned up automatically.

Letters currently in the library: **J K L G M Z**. If the new initials need a
letter that isn't there yet, draw it inside `new-team-avatar.mjs` following the
metric comments (cap 26→86, stroke 9, butt caps, miter joins, narrow ≈0.52–0.66
width/cap ratio, J-hook quadratics for rounded corners) and **compare it
rendered next to the JK monogram before shipping** — the letters must read as
one family. Add the person to the roster table above.

## Provenance

Letterforms were matched against `../../svg/JK-monogram-teal.svg` (the medallion
monogram): measured widths (J 0.66, K 0.53), the J-hook's quadratic corner
radius (~13–16 units), butt-cut angled terminals, and the tight J–K gap (~6
units → 8 here). Crop safety and edge uniformity are pixel-verified at export by
the generator itself (frame ring present at top/bottom/left/right, corners
uniform ivory) — the write is aborted if a render clips.
