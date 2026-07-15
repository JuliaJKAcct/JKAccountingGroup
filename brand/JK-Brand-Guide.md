# JK Accounting Group — Brand Guide

> **Purpose of this file.** This is the single source of truth for generating
> on-brand marketing material for **JK Accounting Group** — business cards,
> Instagram posts, graphics, flyers, social copy. It is self-contained: every
> color, font, logo rule, and voice note you need is here. Apply it to *every*
> asset. When a request conflicts with these rules, follow the rules and say so.
>
> Values below are lifted verbatim from the production design system (the "Atlas"
> system). **Do not invent colors, fonts, spacing, or alternative logos.**

---

## 1. The firm in one paragraph

JK Accounting Group is a **boutique, founder-led US accounting firm** (Miami ·
Fort Lauderdale · online) serving **foreign business owners — primarily
Ukrainian- and Russian-speaking — operating or expanding in the United States.**
The promise: senior, bicultural expertise delivered in plain language and in the
client's own language. Everything is bilingual **EN / RU** (plus Ukrainian for
some landing pages).

---

## 2. Brand personality & voice

**Bicultural fluency · quiet command · genuinely on your side.**
Professional, warm, confident, reassuring. The firm has "been there": it speaks
the client's language literally and figuratively.

- **Do sound like:** a calm senior advisor. Plain language. Specific. Human.
  "A calm, deliberate start." "Good questions, answered plainly."
- **Never sound like:** fear-based tax marketing ("The IRS will destroy you!"),
  hype, or hard-sell. The audience is anxious enough — **we are the calm in the room.**

**Anti-references — never produce these:**
- Stock handshakes, navy-and-gold "corporate gravitas," jargon walls.
- Fear-mongering or pressure tactics.
- Corporate-sterile, faceless tone.
- AI-slop: identical icon-card grids, hero-metric templates, **invented stats,
  fake testimonials, or AI/stock faces.** Use real faces and real facts only — if
  a number or quote can't be verified, omit it.

**Bilingual rule:** write each language natively (EN/RU/UA), never machine-
translated. Match quality, not word-for-word literal parity.

---

## 3. Color palette

Petrol teal + warm bronze on soft ivory. Hold the proportion **≈ 60 / 32 / 8 —
teal / ivory / bronze.** Teal dominates; ivory carries content; **bronze is the
rare accent reserved for the single most important action or highlight** — never
a background, never decoration.

### Core brand colors (use these by default)
| Role | Name | HEX |
|---|---|---|
| **Brand / primary** | Petrol Teal | `#123841` |
| Deep teal (dark bands, depth) | Deep Teal | `#0D2A31` |
| Darkest teal | | `#091F24` |
| **Accent (rare, important only)** | Warm Bronze | `#9C6A39` |
| Bronze light (highlights on dark) | | `#CFA268` |
| Bronze ink / hover | | `#7E5430` |
| **Page background** | Soft Ivory | `#F6F3EC` |
| Paper surface | | `#FBF8F2` |
| White surface | | `#FFFFFF` |
| Ivory strokes/text on dark | | `#ECE6DA` |

### Text colors
| On light backgrounds | HEX | On dark/teal backgrounds | HEX |
|---|---|---|---|
| Primary heading | `#0D2A31` | Primary | `#ECE6DA` |
| Body | `#22201A` | Muted | `#9FB3B6` |
| Muted | `#6F6857` | Gold detail | `#7E5430` |

Borders / hairlines on light: `#C5BEAD` (or subtle `#DAD4C6`).

### Supporting & semantic (use sparingly, only when meaning calls for it)
Sage support `#3E7D6E` · success `#2F8F5E` · warning `#B8841C` · error `#B23A3A`
· info `#2F5E8C`. These are for status/meaning, not decoration.

> Full teal/bronze/greige ramps exist (50→950) if you need intermediate tints —
> e.g. teal `#EAF1F2 #CFE0E2 #A6C4C8 #6F9DA4 #3F767F #245C66 #1A4C55 #163F47
> #123841 #0D2A31 #091F24`. Stay inside these ramps; do not introduce new hues.

**Contrast:** body text must hold ≥ 4.5:1. Petrol teal on ivory, ivory on teal,
and the text colors above all pass.

---

## 4. Typography

Three families, all free (OFL) and on Google Fonts, all with **Cyrillic subsets**
(required for RU/UA).

| Use | Font | Weights | Treatment |
|---|---|---|---|
| **Headings / wordmark** | **Source Serif 4** | 600 | tight tracking (`-0.012em`), balanced line wraps |
| **Body / paragraphs** | **IBM Plex Sans** | 400 / 500 / 600 | base ~17px, line-height 1.6 |
| **Labels, eyebrows, figures** | **IBM Plex Mono** | 400 / 500 / 600 | **UPPERCASE**, letter-spacing 0.08–0.16em |

**The mono uppercase "kicker"** (a short tracked label above a headline) is a
signature brand device — use it for section labels and tags. Don't overuse it or
swap in a different label style.

Google Fonts embed (paste into any HTML/CSS export):
```
https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,600;0,8..60,700;1,8..60,400&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500;600&display=swap
```
CSS stacks: serif `"Source Serif 4", Georgia, serif` · sans `"IBM Plex Sans",
system-ui, sans-serif` · mono `"IBM Plex Mono", ui-monospace, monospace`.

**Pairing pattern:** mono kicker (tiny, uppercase, tracked) → Source Serif 4
headline → IBM Plex Sans body. That three-step rhythm is the brand's typographic
fingerprint.

---

## 5. The logo

There is **one logo: the Medallion** — a connected J&K monogram inside a double
ring with the firm name and service line, bronze diamonds at the sides, in petrol
teal + warm bronze on ivory. **Do not design new or alternative logos.**

Use the supplied files (provided alongside this guide; SVG masters are the source
of truth, PNGs are exports for tools that can't place SVG):

| Situation | Use | File (SVG master) |
|---|---|---|
| Full badge, **≥ 64px**, on light | Medallion primary | `JK-medallion-primary.svg` |
| Full badge on **dark / teal** | Medallion reversed | `JK-medallion-reversed.svg` |
| Single-color / print limits | one-color / black / white | `JK-medallion-onecolor-teal.svg`, `-black.svg`, `-white.svg` |
| Logo **with the wordmark** (headers, cards) | Horizontal lock-up | `JK-lockup-horizontal.svg` (`-reversed` on dark) |
| Wordmark **stacked** (tall/centered) | Stacked lock-up | `JK-lockup-stacked.svg` (`-reversed` on dark) |
| Small, **no room for text** | Emblem (rings + monogram) | `JK-emblem.svg` (`-reversed` on dark) |
| Tiny placements / inline | Monogram (bare J&K) | `JK-monogram-teal.svg` (`-reversed` / `-black` / `-white`) |
| App icon / favicon (the one tiled exception) | files in `favicon/` | — |
| Round social avatar (WhatsApp, Telegram, Google…) — square, safe for circular crop | Emblem on a teal field | files in `logo/social/` |

**Size step-down:** below ~64px, drop from **badge → emblem → monogram**. Never
shrink the full badge until the ring text is illegible.

### Logo rules — never break these
- **Never put the mark in a box / tile / rounded square.** It sits on a
  transparent or brand-colored field directly. (The *only* exception is the
  favicon/app-icon, which intentionally uses a teal tile.)
- **Never** recolor off-palette, stretch, skew, rotate, add shadows/gradients/
  outlines, or rebuild it.
- Keep clear space around it (≥ the height of the monogram's stroke on all sides).
- On busy photos, place the logo on a calm area or a solid teal/ivory band.

---

## 6. Imagery

**Real team photography only** — warm-graded, portrait crop (4:5). **Never stock
handshakes, never AI-generated faces, never invented people.** If you don't have a
real photo, use a clean teal or ivory field with the logo and type instead. Photos
should feel human and calm, not corporate-glossy.

---

## 7. Layout & finishing

- **Generous space.** The brand reads as "calm and deliberate" — don't crowd. Let
  ivory breathe; keep comfortable margins.
- **Corners:** soft, not sharp — card-like radius (~14–18px on screen) where
  shapes are rounded; pills fully round.
- **Hierarchy:** one clear focal point per asset. Mono kicker → serif headline →
  sans body → (optional) one bronze accent on the single key element.
- **Dark "moment" panels:** deep-teal bands (`#123841` / `#0D2A31`) with ivory
  text are the brand's signature for emphasis (hero/CTA moments). Use bronze only
  for the single call-to-action within them.

---

## 8. Common formats (sizes to generate at)

| Asset | Dimensions |
|---|---|
| Instagram square post | 1080 × 1080 px |
| Instagram portrait post | 1080 × 1350 px (4:5) |
| Instagram / Facebook story or reel cover | 1080 × 1920 px (9:16) |
| LinkedIn / Facebook feed image | 1200 × 627 px |
| **Business card (US)** | 3.5 × 2 in → 1050 × 600 px @300dpi (bleed 3.75 × 2.25 in; keep text ≥ 0.125 in from edge) |
| Business card (EU) | 85 × 55 mm |
| Letterhead | US Letter 8.5 × 11 in |
| Flyer | US Letter or A4, @300dpi for print |

Print → CMYK-safe, 300dpi, include bleed. Screen/social → RGB, the HEX values above.

---

## 9. Quick checklist before delivering any asset

1. Colors are **only** from §3, in roughly 60/32/8 teal/ivory/bronze proportion.
2. Bronze used **once**, on the single most important element (or not at all).
3. Type is Source Serif 4 (headings) + IBM Plex Sans (body) + IBM Plex Mono
   (uppercase tracked labels) — nothing else.
4. Logo is an approved Medallion file, correct variant for size/background,
   **not boxed**, not recolored, not distorted.
5. Any faces are **real photos**, never stock/AI. No invented stats or quotes.
6. Voice is calm, plain, bicultural — no fear, no hype, no jargon.
7. RU/UA text reads natively, not machine-translated.
