# Email Branding

> **Status:** Active · **Owner:** Julia · **Started:** 2026-07

Put every email the firm sends on the Design System — the signature card at the
foot of each message and the look of the emails we design. On-brand outbound email,
consistent across the whole team.

## Purpose

Email is a daily, high-volume touchpoint, and an outdated or inconsistent signature
quietly erodes the brand. This project makes outbound email carry the same identity
as everything else JK produces — the Medallion, the petrol-teal / bronze / ivory
palette, the serif-headline / mono-kicker / sans-body rhythm — using **email-safe**
HTML so it survives Gmail, Outlook and Apple Mail.

It graduated from [`BACKLOG.md` → IDEA-04](../../BACKLOG.md). We started with
Julia's signature; the same template rolls out to the rest of the team.

## What's here

```
email-branding/
├── README.md              ← you are here
├── EMAIL-STYLE-GUIDE.md   ← the rules: fonts + fallbacks, color, layout, dark mode
├── GMAIL-DEFAULTS.md      ← make EVERY email on-brand by default (honest Gmail recipe)
├── INSTALL-GMAIL.md       ← host the images, fill in, paste into Gmail
├── preview.html           ← open in a browser to see it all (local paths, sample data)
├── signatures/
│   ├── julia.html         ← Julia's paste-ready signature (photo + seal; 3 URLs to fill)
│   └── _template.html     ← copy per teammate → signatures/<firstname>.html
└── templates/
    └── branded-email.html ← full branded email layout (onboarding, newsletters)
```

## Brand & design

Fully brand-driven; nothing is redefined here. Source of truth:

- Rules & voice: [`../../brand/JK-Brand-Guide.md`](../../brand/JK-Brand-Guide.md)
- Design tokens / CSS: [`../../brand/design-system/`](../../brand/design-system/)
- Logos: [`../../brand/logo/`](../../brand/logo/)

The one thing this project *adds* is the translation of the system into
**email-safe** technique (tables, inline CSS, hosted PNG logo, font fallbacks) —
documented in [`EMAIL-STYLE-GUIDE.md`](./EMAIL-STYLE-GUIDE.md).

## Skills & tooling

- [`impeccable`](../../.claude/skills/impeccable/) — the firm's UI/design skill,
  used to design and pressure-test the signature and email layout on the brand.

No dedicated skill of its own — adding a teammate is a copy-and-fill of
`signatures/_template.html`, described in `INSTALL-GMAIL.md`.

> **Gmail install is manual.** Actually pasting a signature into each person's Gmail
> is a manual step today. The Gmail connector in this repo can read/label/draft mail
> but does not set account signatures, so we generate the HTML here and each person
> installs it once.

## Outputs

Per-person signatures live in `signatures/<firstname>.html`; the branded email lives
in `templates/`. These are **public-facing contact info and brand assets, not client
data**, so they're committed to the repo. The hosted logo URL and each person's real
phone / booking link are filled into their own file when they're rolled out.

## Working on this / notes for AI

- Keep every signature **structurally identical** — only the person's details change.
  Consistency is the entire point.
- Never redefine color or type here; pull from `brand/`. Bronze appears **once** per
  email (the CTA).
- Design for the **fallback fonts** — if it only looks right with the brand webfont,
  it's broken (Gmail won't load the webfont).
- The logo must be a **hosted PNG**; SVG doesn't render in email. Both the logo
  **and** each person's portrait are hosted at public HTTPS URLs.
- **Bronze is the one accent — never ship the booking button pointing at an empty
  `{{BOOKING_URL}}`.** Fill it with a real link, or repoint it at `mailto:` until
  there is one. A dead accent is worse than none.
- The signature sits on an explicit **Paper `#FBF8F2` card** on purpose: it keeps
  the dark-teal palette legible in dark-mode clients. Keep the **primary** (teal)
  Medallion on it, not the reversed one.
- The design was built and pressure-tested with the `impeccable` skill via a design
  workflow (3 directions → judge → adversarial verify for email-safety, contrast,
  brand rules). See `EMAIL-STYLE-GUIDE.md` for the resulting rules.
- "Done" for a rollout = the person's file has no `{{placeholders}}` left, the logo
  loads from a public URL, and it's been tested on Gmail desktop + mobile.
