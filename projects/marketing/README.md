# Marketing

> **Status:** Active · **Owner:** Julia · **Started:** 2025

Generate on-brand marketing collateral for JK Accounting Group with Claude —
business cards, Instagram posts, graphics, flyers, and the copy on them,
bilingual EN/RU (UA when asked).

## Purpose

Give the firm a fast, repeatable way to produce marketing material that is
exactly on-brand without a designer in the loop each time. The brand rules live
in [`brand/`](../../brand/); this project is the *instructions and prompts* that
turn those rules into finished pieces.

## What's here

```
marketing/
├── README.md                       ← you are here
├── START-HERE.md                   ← the 5-minute setup, read this first
├── claude-project-instructions.md  ← paste into a Claude Project's custom instructions
└── starter-prompts.md              ← ready-made prompts for common assets
```

## Brand & design

This project is fully brand-driven. Source of truth:

- Rules & voice: [`../../brand/JK-Brand-Guide.md`](../../brand/JK-Brand-Guide.md)
- Logos: [`../../brand/logo/`](../../brand/logo/)
- Tokens / showcase: [`../../brand/design-system/`](../../brand/design-system/)

## Skills & tooling

- [`impeccable`](../../.claude/skills/impeccable/) — general UI/design skill,
  available for polishing any HTML/visual output.

## Outputs

Generated assets are produced in Claude (or a Claude Project) from the prompts
here. Save finished pieces you want to keep into this folder (e.g. an
`assets/` subfolder) so they're versioned with the project.

## Working on this / notes for AI

Read `START-HERE.md` first. Never invent colors, fonts, stats, or an alternative
logo — defer to `brand/JK-Brand-Guide.md`. Copy that guide's rules into the
prompt context rather than restating them from memory.
