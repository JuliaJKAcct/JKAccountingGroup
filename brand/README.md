# Brand — the shared JK Accounting Group foundation

This is the firm's single source of visual & verbal truth: colors, typography,
logo, voice, and the production design system. It is **shared** — every project
in [`projects/`](../projects/) (marketing collateral, the reasonable-comp
reports, future work) draws from here. Nothing project-specific lives in this
folder; nothing here should be duplicated into a project.

> When a request conflicts with these rules, follow the rules and say what you
> changed and why.

## What's here

```
brand/
├── JK-Brand-Guide.md      ← the brand brain: colors, fonts, logo rules, voice.
│                            The authority. When in doubt, this file wins.
├── logo/                  ← the complete logo pack
│   ├── svg/               vector masters (scalable — prefer these)
│   ├── png/               rendered images, multiple sizes
│   ├── favicon/           app/site icons
│   ├── social/            round profile avatars (WhatsApp, etc.)
│   └── README.md          logo usage notes
└── design-system/         ← the "Atlas" production system
    ├── DESIGN.md          full design tokens & component reference
    ├── jk-brand-showcase.html   open in a browser to see it all live
    ├── styles.css         production stylesheet (exact colors/spacing)
    └── landing.css        landing-page styles
```

## Using it

- **Marketing / any visual asset:** start from `JK-Brand-Guide.md`; see
  [`projects/marketing/collateral/`](../projects/marketing/collateral/) for the prompt workflow.
- **Branded documents (e.g. reports):** the design tokens in
  `design-system/styles.css` define the exact palette — Petrol Teal `#123841`,
  Warm Bronze `#9C6A39` (used once), Soft Ivory `#F6F3EC`, Source Serif 4 / IBM
  Plex Sans / IBM Plex Mono. The reasonable-comp report template wires these in.
- **Non-negotiables:** only palette colors; the supplied Medallion logo variants
  only (never box, recolor, stretch, or redesign); real team photos, never stock
  or AI faces; calm plain-language voice, never fear-based tax marketing. Full
  rules in `JK-Brand-Guide.md`.
