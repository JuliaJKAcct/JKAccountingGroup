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

It graduated from [`BACKLOG.md` → IDEA-04](../../../BACKLOG.md). We started with
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
│   ├── julia.html           ← Julia's signature, canonical (Medallion via local path; upload it in Gmail)
│   ├── julia-hosted.html    ← same, but Medallion points at the public URL — paste-and-go install
│   ├── lilian.html          ← Lilian's signature, canonical (no booking link)
│   ├── lilian-hosted.html   ← same, but Medallion points at the public URL — paste-and-go install
│   ├── liudmyla.html        ← Liudmyla's signature, canonical (no booking link)
│   ├── liudmyla-hosted.html ← same, but Medallion points at the public URL — paste-and-go install
│   ├── maria.html           ← Maria's signature, canonical (no booking link)
│   ├── maria-hosted.html    ← same, but Medallion points at the public URL — paste-and-go install
│   └── _template.html       ← copy per teammate → signatures/<firstname>.html
└── templates/
    └── branded-email.html ← full branded email layout (onboarding, newsletters)
```

## Brand & design

Fully brand-driven; nothing is redefined here. Source of truth:

- Rules & voice: [`../../../brand/JK-Brand-Guide.md`](../../../brand/JK-Brand-Guide.md)
- Design tokens / CSS: [`../../../brand/design-system/`](../../../brand/design-system/)
- Logos: [`../../../brand/logo/`](../../../brand/logo/)

The one thing this project *adds* is the translation of the system into
**email-safe** technique (tables, inline CSS, hosted PNG logo, font fallbacks) —
documented in [`EMAIL-STYLE-GUIDE.md`](./EMAIL-STYLE-GUIDE.md).

## Skills & tooling

- [`email-signature`](../../../.claude/skills/email-signature/) — the engine for this
  project. Use it to modify a signature (resize, add/remove a line, swap the booking
  link), add a teammate, or edit the branded-email template. It encodes the email-safe
  rules and the Gmail image lessons so a change is quick and never breaks in a real inbox.
- [`impeccable`](../../../.claude/skills/impeccable/) — the firm's UI/design skill,
  used (via `email-signature`) to design and pressure-test the signature and email
  layout on the brand.

Adding a teammate is a copy-and-fill of `signatures/_template.html`; the
`email-signature` skill drives it and `INSTALL-GMAIL.md` covers the Gmail install.

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
- Never redefine color or type here; pull from `brand/`. Bronze stays **rare** — the
  small diamond ◆ and the booking link, nothing else.
- Design for the **fallback fonts** — if it only looks right with the brand webfont,
  it's broken (Gmail won't load the webfont).
- The one image (the reversed Medallion) is a **PNG**; SVG doesn't render in email.
  It's uploaded in Gmail (Google hosts it) or, once the site is live, hosted at a
  public HTTPS URL. Everything else in the signature is live text.
- **Bronze is the one accent — never ship the booking link empty.** It defaults to the
  firm's contact page (`https://www.jkaccountinggroup.com/contactus`); swap it for a
  personal booking link only when a teammate has one. A dead accent is worse than none.
- The signature follows the firm's **business-card grammar**: a petrol-teal panel
  (Medallion + wordmark) beside an ivory details panel with the bronze diamond and the
  DIRECT / EMAIL / WEB label rows. Panel color is `#123841` to match the
  Medallion tile (no box). Both panels carry explicit `bgcolor` for dark-mode safety.
- The design was built and pressure-tested with the `impeccable` skill via a design
  workflow (3 directions → judge → adversarial verify for email-safety, contrast,
  brand rules). See `EMAIL-STYLE-GUIDE.md` for the resulting rules.
- "Done" for a rollout = the person's file has no `{{placeholders}}` left, the logo
  loads from a public URL, and it's been tested on Gmail desktop + mobile.
