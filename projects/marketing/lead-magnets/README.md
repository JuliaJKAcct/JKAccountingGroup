# Lead Magnets

> **Status:** Active (draft — not publish-ready) · **Owner:** Julia · **Started:** 2026-07

Free, interactive tools — calculators and assessments — that sit at the top of
the firm's marketing funnel: each gives a foreign-owned business founder a quick
answer to one real worry, captures their contact info, and routes them to book a
consultation.

> **Related — the big/flagship magnet:** these tools answer *one* narrow worry
> each. The comprehensive *guide* + opt-in landing page for the whole first-year
> setup question lives in
> [`../foreign-owner-us-playbook/`](../foreign-owner-us-playbook/) (which links
> back to several of the calculators below). Keep the two coherent.

## Purpose

These are the firm's **lead magnets** (the funnel entry point from the "Scale
Your Accounting Firm" course, Track 4). The strategy, the shortlist, and the
plain-English writing rules were worked out in the course notes — see
[`../scale-your-accounting-firm/track-4-lead-generation-and-nurture/lead-system-setup/02-choosing-your-lead-magnet.md`](../scale-your-accounting-firm/track-4-lead-generation-and-nurture/lead-system-setup/02-choosing-your-lead-magnet.md).
Each tool solves one narrow problem for one specific avatar (the firm's niche:
foreign-owned business founders in the US, per [`../positioning.md`](../positioning.md)).

## What's here

```
lead-magnets/
├── README.md                    ← you are here
├── PRODUCT.md                   ← design/product brief (for the impeccable skill)
├── TAX-FIGURES-TO-VERIFY.md     ← every tax number used — pending Julia's sign-off
├── index.html                   ← menu of all tools
├── assets/img/                  ← Julia photos (transparent cutouts)
├── calculators/                 ← the 6 calculators (self-contained HTML)
└── assessments/                 ← the 3 assessments (self-contained HTML)
```

## The tools

All 9 tools are **built (draft)** and QA'd on desktop + mobile. Files:

| Tool | Type | File |
|---|---|---|
| LLC or S-Corp — Which Saves You More Money? | Calculator | [`calculators/llc-or-s-corp.html`](./calculators/llc-or-s-corp.html) |
| I Have an S-Corp. Am I Paying Myself the Right Salary? | Calculator | [`calculators/s-corp-salary.html`](./calculators/s-corp-salary.html) |
| Will You Owe the IRS a Surprise Tax Bill? | Calculator | [`calculators/surprise-tax-bill.html`](./calculators/surprise-tax-bill.html) |
| Do You File US Taxes as a Resident? | Calculator | [`calculators/tax-residency.html`](./calculators/tax-residency.html) |
| Could Your Foreign-Owned Company Owe a $25,000 Fine? *(A/B titles)* | Calculator | [`calculators/foreign-owned-company-fine.html`](./calculators/foreign-owned-company-fine.html) |
| Do I Need a License to Run My Business Here in the USA? | Calculator | [`calculators/business-license.html`](./calculators/business-license.html) |
| I Have a Business. Is My Bookkeeping Ready for Tax Season? | Assessment | [`assessments/bookkeeping-ready.html`](./assessments/bookkeeping-ready.html) |
| Is This Worker an Employee (W-2) or a Contractor (1099)? | Assessment | [`assessments/employee-or-contractor.html`](./assessments/employee-or-contractor.html) |
| Do You Need to Report Money You Have Back Home? | Assessment | [`assessments/report-money-back-home.html`](./assessments/report-money-back-home.html) |

The [`index.html`](./index.html) menu links to all nine.

## Brand & design

On the shared [`brand/`](../../../brand/) foundation — the "Atlas" design system.
Pages reuse the production CSS and page pattern; no new colors/fonts.

- Brand rules & voice: [`../../../brand/JK-Brand-Guide.md`](../../../brand/JK-Brand-Guide.md)
- Design system: [`../../../brand/design-system/`](../../../brand/design-system/) (`DESIGN.md`, `styles.css`, `landing.css`)
- All visual/aesthetic work goes through the [`impeccable`](../../../.claude/skills/impeccable/) skill (see `PRODUCT.md`).

## Skills & tooling

- [`impeccable`](../../../.claude/skills/impeccable/) — drives the design.
- [`reasonable-compensation`](../../../.claude/skills/reasonable-compensation/) — the salary calculator is a lightweight public front-end to this methodology.

## Outputs

Self-contained HTML tools in `calculators/` and `assessments/`, committed to the
repo (marketing assets, no client data). **Not yet publish-ready:** tax figures
need sign-off (`TAX-FIGURES-TO-VERIFY.md`), and two things must be wired before
launch — see below.

## Working on this / notes for AI

- **Two hard copy rules** (see `PRODUCT.md`): bulletproof simple English + name
  the worry then the fix, no jargon. The audience may not speak English well.
- **English first.** Session scope is EN; RU (and possibly a third language) is a
  planned follow-up. Don't ship half-translated pages.
- **Not wired yet** (needs a human): (1) the lead-capture form submission
  endpoint — currently `action="#REPLACE-WITH-ENDPOINT"`; (2) the real Odoo
  "Book a Consultation" URL — currently a placeholder anchor.
- **Every tool shows a disclaimer** and gives an estimate, never advice.
- Screenshots for QA are taken at 390px (mobile) and 1280px (desktop).
