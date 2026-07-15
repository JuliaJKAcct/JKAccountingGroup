# Facebook cover — Julia redesign (in review)

A redesign of the firm's Facebook Page cover that puts **Julia** on the cover and
leads with the website's headline, **"Your US Finance Department"**, on the JK
[design system](../../../../../../brand/JK-Brand-Guide.md). It replaces the six-service
layout of the [original cover](../) with a single big headline + portrait so the
message survives Facebook's mobile crop.

> **Status: in review.** Three photo options are staged below for Julia to choose
> from. Once she picks one (and any copy tweaks), that option becomes the final
> cover: we export the 2× copy, swap the live Page cover, and retire the other two.

## Why the redesign

The original cover read well on desktop but got cramped on mobile — the headline
and services were cut, and the round profile picture (lower-left) covered part of
the copy. The fixes here:

- **One headline, no service list.** `Your US Finance Department` in big Source Serif 4,
  with a single supporting line — nothing to crowd or truncate on a phone.
- **Everything in the central band.** The headline and Julia's face both sit inside
  the ~66% center of the width, so neither is lost when Facebook crops the sides on mobile.
- **Copy lifted off the profile-picture corner.** The text block is raised so the round
  profile photo (which overlaps the lower-left on both desktop and mobile) never covers it.
- **Julia is top-anchored** so her face always stays in frame; her figure bleeds off the
  bottom edge.

Both behaviors — desktop (near-full width) and mobile (center crop + profile-picture
overlay) — were checked before staging.

## Options

| Option | File | Photo | Read |
|---|---|---|---|
| **Ivory suit** *(recommended)* | `cover-ivory.html` | `img/julia-ivory.png` | Ivory is a brand color, so Julia pops hardest against the teal — premium, senior, calm. |
| Navy pinstripe | `cover-navy.html` | `img/julia-navy.png` | Most corporate / authoritative (arms crossed, direct gaze). |
| Black blazer | `cover-black.html` | `img/julia-black.png` | Friendliest / most approachable (white top anchors the dark blazer). |

A fourth photo (seated, pink armchair) was set aside: the pink fights the palette and a
seated pose is hard to compose on a wide, short banner.

## Files

```
julia-redesign/
├── README.md
├── cover-ivory.html / cover-navy.html / cover-black.html   ← sources (edit copy/layout here)
├── img/                                                    ← Julia, background removed (real team photo)
│   └── julia-ivory.png / julia-navy.png / julia-black.png
└── exports/                                                ← 1640×624 PNGs for review / upload
    └── jk-facebook-cover-{ivory,navy,black}-1640x624.png
```

## Copy on the asset

- **Kicker:** `MIAMI · FORT LAUDERDALE · ONLINE`
- **Headline:** `Your US Finance Department` — verbatim from the website.
- **Supporting line:** `Proactive tax planning, bookkeeping & CFO.` — echoes the Medallion's
  `TAX · BOOKKEEPING · CFO`.

## Design system used

- **Palette:** Petrol Teal `#123841` / Deep Teal `#0D2A31` / Darkest `#091F24`; Soft Ivory
  `#ECE6DA` (text), muted `#9FB3B6` (labels); Warm Bronze `#9C6A39` as the single accent
  (the rule under the headline). ~60/32/8 teal/ivory/bronze.
- **Type:** Source Serif 4 (headline) · IBM Plex Mono (kicker) · IBM Plex Sans (supporting line).
- **Imagery:** real team photography (brand guide §6) — Julia, background removed. No stock, no AI faces.
- **Logo:** none placed on the cover — the Page's round **profile picture already shows the
  Medallion** directly below, so repeating it here would be redundant.

## Regenerating / exporting

Each HTML is a fixed 1640×624 stage that loads its photo from `img/` and the brand fonts from
Google Fonts. Screenshot the `#stage` element at 1640×624 for the upload (render at 2× device
scale for the archival copy). Any headless-browser screenshot tool works; render with network
access so the fonts load.

## Uploading to Facebook

Upload the chosen `exports/…-1640x624.png`. Facebook shows the cover at ~820×312 on desktop and
crops to the central band on mobile; the headline and Julia's face are inside that band, and the
lower-left is kept clear for the profile picture.
