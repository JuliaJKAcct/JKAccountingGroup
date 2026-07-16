# Design — "Atlas" system

Source of truth: `jk-brand-showcase.html` (component + token showcase) and `styles.css` (production styles lifted verbatim). Do not invent colors or fonts. New components must be composed from existing tokens.

## Theme

Petrol teal + warm bronze on soft ivory. Proportions ≈ 60/32/8 (teal/ivory/bronze). Light surfaces carry content; deep-teal "on-dark" bands carry the hero, process, and CTA moments. Bronze is reserved for the single money CTA.

## Color palette

- **Teal ramp** `--teal-50…950`; brand `#123841` (`--teal-800`), deep `#0D2A31`.
- **Bronze ramp** `--bronze-50…800`; accent `#9C6A39` (`--bronze-500`), hover `#7E5430`.
- **Greige ramp** `--greige-50…900`; page bg `#F6F3EC`, borders `#C5BEAD`/`#DAD4C6`.
- **Sage** support ramp; semantic success/warning/error/info tokens.
- Text: `--text-primary:#0D2A31`, `--text-body:#22201A`, `--text-muted:#6F6857`; on dark `#ECE6DA` / muted `#9FB3B6`.
- Surfaces: `--surface:#FFF`, `--paper:#FBF8F2`, inverse `#123841`/`#0D2A31`.

## Typography

- **Headings:** Source Serif 4, 600, `letter-spacing:-0.012em`, `text-wrap:balance`.
- **Body:** IBM Plex Sans 400/500/600, 17px base, lh 1.6.
- **Labels/figures/kickers:** IBM Plex Mono, uppercase, tracked (0.08–0.16em).
- All faces loaded with Cyrillic subsets (Google Fonts). Hero H1 `clamp(34px,6vw,62px)`; section H2 `clamp(30px,5vw,46px)`.
- **Self-contained renders:** for artifacts that must work offline / in Drive / when printed / inside a CSP-restricted Artifact (e.g. SOP renders), inline `fonts-embedded.css` (Latin-subset woff2 as data URIs) instead of the Google Fonts `<link>`. Regenerate it with `fetch-fonts.mjs`.
- The mono uppercase kicker (`.sec-eyebrow`, `.kicker`) is a committed, named brand system carried over from production — keep it consistent, don't multiply it.

## Components (production classes)

`.appbar` (fixed, teal glass) · `.btn` (primary/secondary/ghost/**cta** = bronze money button, sm/lg) · `.badge` · `.hero` (+`.hero-grid`, `.hero-portrait`, `.statband-hero`) · `.atglance` · `.svc-list` · `.card-grid`/`.svc-card` · `.pillars` · `.steps` · `.testi-card`/`.proof-grid` · `.team-grid`/`.team-card` · `.pricing-row`/`.ptier(.feat)` · `.faq` (native `<details>`) · `.contact-grid`/`.form-card`/`.field`/`.lang-pref` · `.cta-band` · `.site-footer` · `.reveal` (JS-enhanced scroll reveal, visible by default).

## Layout & spacing

`--maxw:1180px`, gutter `clamp(20px,5vw,40px)`, section padding `clamp(60px,8vw,104px)`. Radii: cards 14–18px, buttons 9–10px, pills 999px. Shadows: layered teal-tinted `--shadow-sm…xl`. Z-scale: `--z-appbar:100`, scrim 200, drawer 300.

## Motion

`--ease-out: cubic-bezier(0.22,1,0.36,1)`. Content visible by default; `html.js .reveal` adds opacity/translate entrance via IntersectionObserver. Reduced motion: everything renders instantly. No layout-property animation.

## Imagery

Real team photography only (4:5, warm grade) — never stock faces or AI faces. Logo system: Medallion (primary/reversed SVG), horizontal/stacked lockups, monogram; favicons in `../logo/favicon/`. Alt text written in the brand voice, localized per page language.

## Landing-page extensions (composed from tokens, defined in `landing.css`)

- Minimal appbar variant (logo + language toggle + CTA only — no nav links on paid-traffic pages).
- Sticky mobile CTA bar (bronze `.btn.cta` in a teal glass bar, mobile only).
- Featured service card (paper bg + bronze border, spans wider — mirrors `.ptier.feat` emphasis grammar).
- Identification list ("nod list") built on `.svc-list` rhythm with check glyphs.
- Founder feature block (portrait + warm bio) built on `.contact-grid` proportions.
