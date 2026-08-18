# LinkedIn Page banner — JK Accounting Group

The cover image for the firm's **LinkedIn company Page**. Three options are staged
here for Julia to pick from; all three are built from the
[brand design system](../../../../../brand/JK-Brand-Guide.md) and share one stage
([`banner.css`](./banner.css)), so a geometry fix lands in all of them at once.

> **Status: proposed — awaiting Julia's pick.** Once an option is chosen (with any
> copy tweaks), upload its `-2256x382` export, note the choice below, and retire
> the other two.

| Option | File | The idea | Read |
|---|---|---|---|
| **B · Bicultural** *(recommended)* | `banner-b-bicultural.html` | The headline in English, the same promise in Russian under it, and an `EN · RU · UA` line in the rail. | Says the differentiator instead of describing it. On LinkedIn — where referral partners decide *when* to send someone to us — the Cyrillic line is the thing no competing firm's banner has. |
| A · Nameplate | `banner-a-nameplate.html` | Same layout, all English: the niche stated as a plain supporting line. | The safest read, and the closest to the Facebook cover. Choose it if the Page should stay fully English-facing. |
| C · Ivory | `banner-c-ivory.html` | The light register — paper field, petrol-teal headline, deep-teal foot. Copy identical to A. | Stands out in a feed of dark banners and lets the teal Medallion logo sit against it cleanly. The one risk it is built to survive: a paper-coloured band next to LinkedIn's white page, handled by the hairline frame and the teal foot. |

So the pick separates cleanly into two questions: **the message** (A vs B — English-only
or bilingual) and **the register** (dark vs light — A/B vs C).

## The size, and the two crops it has to survive

LinkedIn renders a Page cover at **1128 × 191 px** (≈ 5.9:1) and accepts a larger
file at the same ratio, so the exports are 1×, 2× and 4×. **Upload the 2×
(`2256 × 382`).**

Two things eat the banner, and the layout is built around their intersection:

- **Desktop** — the company logo (the Medallion Julia has already set) overlaps the
  banner's **bottom-left**, roughly a 200 px square at this scale. Nothing but
  background lives at `x < 230`.
- **Mobile** — LinkedIn centre-crops roughly **17% off each side**, so the visible
  band is about `x 197 → 931`.

Their intersection is `x 252 → 918`, and that is exactly the band `.content` spans.
The right field beyond it is deliberately open: it carries the oversized, cropped
Medallion ring — visible on desktop, and nothing is lost when a phone crops it away.

The `exports/` folder ships a `-preview-desktop` (with the logo overlap drawn in)
and a `-preview-mobile` (the centre crop) for each option, so both readings can be
checked before anything is uploaded.

## Files

```
linkedin-banner/
├── README.md
├── banner.css                  ← THE SHARED STAGE: canvas, safe band, type scale, rail
├── banner-a-nameplate.html     ← option A — copy + dark register
├── banner-b-bicultural.html    ← option B — copy + dark register
├── banner-c-ivory.html         ← option C — copy + light register
├── render.mjs                  ← screenshots every option to exports/
└── exports/
    ├── jk-linkedin-banner-<id>-1128x191.png    LinkedIn's stated size
    ├── jk-linkedin-banner-<id>-2256x382.png    ← the upload
    ├── jk-linkedin-banner-<id>-4512x764.png    archival
    ├── jk-linkedin-banner-<id>-preview-desktop.png
    └── jk-linkedin-banner-<id>-preview-mobile.png
```

Edit copy and layout in the HTML; edit anything structural in `banner.css` — that is
the one place the canvas, the safe band and the rail are defined, and the reason the
three options cannot drift apart.

## Copy on the asset

- **Kicker:** `MIAMI · FORT LAUDERDALE · ONLINE`
- **Headline:** `Your US Finance Department` — verbatim from the website, and the same
  headline as the [Facebook cover redesign](../facebook-cover/julia-redesign/).
- **Supporting line:** A and C — `For Ukrainian- and Russian-speaking business owners in the US.`
  · B — `Ваш финансовый отдел в США` (native Russian, matching the pitch's own wording in
  [`positioning.md`](../../../positioning.md), not a literal translation).
- **Rail:** `TAX · BOOKKEEPING · CFO` (echoing the Medallion's own service line) ·
  `EN · RU · UA` (B only) · `jkaccountinggroup.com`

**No CTA and no figures on the banner, on purpose.** A LinkedIn cover is not clickable,
so `Book a free discovery call` would send people hunting; and the booking URLs still
return a 500 (see [`positioning.md`](../../../positioning.md)). The `$1M+ saved` claim is
left off under the brand guide's rule against unverifiable numbers on assets — put it in
the Page's *About* section, where it can be explained, rather than on the image.

## Design system used

- **Palette:** Petrol Teal `#123841` / Deep Teal `#0D2A31` / Darkest `#091F24`; Soft Ivory
  `#ECE6DA` and muted `#9FB3B6` on dark; Paper `#FBF8F2` / Page `#F6F3EC` and ink
  `#0D2A31` / `#22201A` / `#6F6857` on light. **Warm Bronze `#9C6A39` appears once per
  banner** — the rule under the headline — with `#CFA268` only as a hairline in the ring.
  All body-size text clears 4.5:1 against its field.
- **Type:** the brand's three-step rhythm — IBM Plex Mono kicker (uppercase, tracked) →
  Source Serif 4 headline → IBM Plex Sans supporting line, with IBM Plex Mono again in the
  rail. Cyrillic comes from the same Source Serif 4 file, so option B needs no second font.
- **Logo:** none on the banner. LinkedIn already shows the Medallion as the Page logo
  overlapping the bottom-left, so repeating it here would be the mark twice in one
  composition. What the banner carries instead is the Medallion's **double ring**, scaled
  far past the frame and cropped by it — the same `57 : 50.5` radius ratio and the same
  bronze diamond pinning it at mid-height, taken from `brand/logo/svg/JK-medallion-primary.svg`.

## Regenerating the PNGs

```bash
node projects/marketing/collateral/assets/linkedin-banner/render.mjs                     # all three
node projects/marketing/collateral/assets/linkedin-banner/render.mjs banner-c-ivory.html # one
```

Chromium comes from the pre-installed Playwright browsers. The brand faces load from
Google Fonts, so **render with network access** — an offline render silently falls back to
Georgia and system sans, which looks close enough to miss.

## Uploading

LinkedIn Page → **Edit page → Page info → Cover image** → upload the `-2256x382` PNG.
Check the Page on a phone afterwards: the centre crop is the reading most visitors get.
