# LinkedIn Page banner — JK Accounting Group

The cover image for the firm's **LinkedIn company Page**. Three options are staged
here for Julia to pick from; all three are built from the
[brand design system](../../../../../brand/JK-Brand-Guide.md) and share one stage
([`banner.css`](./banner.css)), so a geometry fix lands in all of them at once.

> **Status: B is on the Page, and this revision replaces what is up there.**
> The first version of B was uploaded in Aug 2026 and came out clipped — LinkedIn
> showed only the middle of it (see the crop table below). The layout has been
> rebuilt around that crop; **re-upload `jk-linkedin-banner-b-bicultural-2256x382.png`**.
> A and C are kept as the live alternatives, rebuilt the same way.

| Option | File | The idea | Read |
|---|---|---|---|
| **B · Bicultural** *(on the Page)* | `banner-b-bicultural.html` | The headline in English, the same promise in Russian directly under it. | Says the differentiator instead of describing it. On LinkedIn — where referral partners decide *when* to send someone to us — the Cyrillic line is the thing no competing firm's banner has. |
| A · Nameplate | `banner-a-nameplate.html` | Same layout, all English: the niche stated as a plain supporting line. | The safest read, and the closest to the Facebook cover. Choose it if the Page should stay fully English-facing. |
| C · Ivory | `banner-c-ivory.html` | The light register — paper field, petrol-teal headline, deep-teal foot. Copy identical to A. | Stands out in a feed of dark banners and lets the teal Medallion logo sit against it cleanly. Also the only one carrying a residual crop risk — see the note under the crop table. |

So the pick separates cleanly into two questions: **the message** (A vs B — English-only
or bilingual) and **the register** (dark vs light — A/B vs C).

## The size, and the crops it has to survive

LinkedIn renders a Page cover at **1128 × 191 px** (≈ 5.9:1) and accepts a larger
file at the same ratio, so the exports are 1×, 2× and 4×. **Upload the 2×
(`2256 × 382`).**

**But LinkedIn does not show the file it asks for.** Every surface re-crops it
with `object-fit: cover` into a box of its own shape, and the crops disagree with
each other. Three were measured off the real Page:

| Crop | What it keeps | Where |
|---|---|---|
| **The strip** | only the **central ~31% of the height** — about 59 px of the 191 | Edit page → Page info → the Banner field (~10.4:1) |
| Mobile | the centre, ~17% cut off **each side** | the Page on a phone |
| Desktop | everything, **minus the company logo** covering the bottom-left ~200 px square | the Page on a computer |

The first version of this banner was laid out to the full 191 px, and the strip
sliced the location kicker off the top and the second line off the bottom — which
is exactly what Julia saw in the Edit page. So the layout is now **tiered**:

- **The core** — everything that carries meaning — sits in a band about **50 px
  tall and 666 px wide, centred both ways**. That band is the intersection of all
  three crops, so it survives every one of them. It is why the type is smaller
  than a 191 px canvas would otherwise invite: **the canvas is not what gets seen.**
- **The field** — the ring geometry and the space around the core — is built to be
  thrown away. A generous crop shows it; a tight crop loses nothing by cutting it.

`exports/` carries a preview of each crop for every option. **Check
`-preview-strip` first** — if the message reads there, it reads everywhere.

Two things the banner used to carry and no longer does, because LinkedIn prints
them itself directly under the cover: the `MIAMI · FORT LAUDERDALE · ONLINE`
kicker (the Page header shows the location) and, in option B, the `EN · RU · UA`
rail line (a third rail line pushed the core past what the strip shows — and the
Russian headline already makes the point).

> **One residual risk, on option C only.** Its frame and deep-teal foot are what
> stop a paper-coloured band reading as an image that failed to load — and the
> strip crop throws both away. The field is therefore based on `--page`, the
> design system's warmest surface, and deepens to the right, so the strip still
> reads as warm paper against LinkedIn's white. It is the least crop-proof of the
> three; A and B carry no such risk.

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
    ├── jk-linkedin-banner-<id>-preview-strip.png    ← check this one first
    ├── jk-linkedin-banner-<id>-preview-mobile.png
    └── jk-linkedin-banner-<id>-preview-desktop.png
```

Edit copy and layout in the HTML; edit anything structural in `banner.css` — that is
the one place the canvas, the safe band and the rail are defined, and the reason the
three options cannot drift apart.

## Copy on the asset

- **Headline:** `Your US Finance Department` — verbatim from the website, and the same
  headline as the [Facebook cover redesign](../facebook-cover/julia-redesign/).
- **Supporting line:** A and C — `For Ukrainian- and Russian-speaking business owners in the US.`
  · B — `Ваш финансовый отдел в США` (native Russian, matching the pitch's own wording in
  [`positioning.md`](../../../positioning.md), not a literal translation).
- **Rail:** `TAX · BOOKKEEPING · CFO` (echoing the Medallion's own service line) ·
  `jkaccountinggroup.com` — two lines, never three (see the crop table above).

**No CTA and no figures on the banner, on purpose.** A LinkedIn cover is not clickable,
so `Book a free discovery call` would send people hunting; and the booking URLs still
return a 500 (see [`positioning.md`](../../../positioning.md)). The `$1M+ saved` claim is
left off under the brand guide's rule against unverifiable numbers on assets — put it in
the Page's *About* section, where it can be explained, rather than on the image.

## Design system used

- **Palette:** Petrol Teal `#123841` / Deep Teal `#0D2A31` / Darkest `#091F24`; Soft Ivory
  `#ECE6DA` and muted `#9FB3B6` on dark; Paper `#FBF8F2` / Page `#F6F3EC` and ink
  `#0D2A31` / `#22201A` / `#6F6857` on light. **Warm Bronze `#9C6A39` appears once per
  banner** — the vertical rule dividing the headline from the rail, which being vertical
  costs the core no height — with `#CFA268` only as a hairline in the ring.
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
The Edit-page preview is **not** the Page — it is the tightest crop of the three, so judge
the result on the live Page, not on the upload form.
