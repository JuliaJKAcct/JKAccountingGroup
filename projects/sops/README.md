# SOPs — Standard Operating Procedures

> **Status:** Active · **Owner:** Julia · **Started:** 2026

The firm's **standard operating procedures** — the documented, repeatable way JK
Accounting Group does its work.

## Purpose

Capture how the firm runs — client onboarding, bookkeeping close, tax-prep
steps, review checklists, internal workflows, and **day-to-day client-task
runbooks** (e.g. a Business Tax Receipt filing) — as clear, versioned procedures
so work is consistent, delegable, and auditable. A living internal reference for
the team (and for Claude when it assists with those workflows).

Each procedure here is **reusable firm knowledge**, safe to commit. Sensitive
client data (dollar figures, EINs, addresses, full account numbers, filled-in
forms, private individuals' names) is **not** — that lives in the firm's client
systems (Drive / Double / QuickBooks). A **per-client runbook** may name the
client business and the operational facts the work requires (e.g. bank accounts
by last-4), but its working papers and figures stay in the client systems.
Where a procedure involves filled-in copies, include a blank template to copy
out; the filled-in copy stays in those systems.

## What's here

```
sops/
├── README.md                                    ← you are here (index)
├── florida-company-formation-sunbiz.md          ← Part 1: form the company on Sunbiz (Articles of Incorporation / Organization)
├── ein-application-irs.md                       ← Part 2: Federal EIN (IRS Form SS-4) after the entity is Active on Sunbiz
├── ecoorganic-bookkeeping-review.md             ← Ecoorganic monthly bookkeeping rules + review checklist
├── hollywood-broward-business-tax-receipt.md    ← City of Hollywood + Broward County BTR
├── double-portal-first-login.md                 ← Double Client Portal first-time sign-in workaround
├── double-portal-branding.md                    ← Double Client Portal on-brand branding (colors + logo)
└── client-guides/                               ← ready-to-send client templates (visual guide + PDF, email/message template, WhatsApp, EN/RU)
```

_**One self-contained Markdown file per procedure** — the single source of truth
for that task, no split summary/detailed versions to keep in sync. Group into
subfolders by area (e.g. `onboarding/`, `bookkeeping/`, `tax/`) once there are
enough to warrant it._

## Index

| SOP | What it covers |
|---|---|
| [`florida-company-formation-sunbiz.md`](./florida-company-formation-sunbiz.md) | **Part 1** — forming the company with the State of Florida on Sunbiz. Entity choice (LLC vs Profit Corporation) and the S-corp angle, shared prerequisites (name distinguishability + suffix, registered-agent rules, effective-date/Jan-1 tax tip, payment, the "final once submitted" rule, current FinCEN BOI status), the **Profit Corporation Articles of Incorporation** documented **screen by screen** (verified), the **LLC** path as a framework stub, fees & the annual-report cadence, and the handoff to Part 2 (EIN). |
| [`ein-application-irs.md`](./ein-application-irs.md) | **Part 2** — getting a business's federal **EIN** (IRS Form SS-4) once the entity is **Active on Sunbiz** — the go/no-go decision (responsible party has SSN/ITIN → apply online same-day; has neither → SS-4 by fax "Foreign", ~4 business days), both paths screen-/line-by-line, the LLC-classification and "S-corp election is a separate Form 2553" traps, Third-Party Designee, and after-steps. Follows [`florida-company-formation-sunbiz.md`](./florida-company-formation-sunbiz.md). |
| [`ecoorganic-bookkeeping-review.md`](./ecoorganic-bookkeeping-review.md) | Per-client runbook: Ecoorganic's monthly bookkeeping categorization rules (checks/deposits, gas threshold, COGS, owner-personal patterns), COA conventions, reviewer checklist, and open-decisions log. Rules only — client figures stay in client systems. |
| [`hollywood-broward-business-tax-receipt.md`](./hollywood-broward-business-tax-receipt.md) | Filing a Business Tax Receipt for a business in Hollywood, FL / Broward County — city + county steps, links, and the home-occupation zoning gate. |
| [`double-portal-first-login.md`](./double-portal-first-login.md) | Double Client Portal has no sign-up step and its default magic-link/Google sign-in are unreliable — the working password-reset workaround (portal opens on the password screen → "Forgot your password?"), plus ready-to-send client guides (self-contained visual guide + PDF, email/message template, WhatsApp; EN/RU) in [`client-guides/`](./client-guides/). |
| [`double-portal-branding.md`](./double-portal-branding.md) | The firm's official on-brand branding for the Double Client Portal — exact Brand/Button/Background hex values (mapped to Design System tokens), logo/favicon assets, and why the combination works. Replaces Double's off-brand defaults. |

## Brand & design

Mostly internal text documents — brand styling optional. If any SOP becomes a
client-facing or presented document, apply the shared brand
([`../../brand/`](../../brand/)).

## Skills & tooling

- [`sop-authoring`](../../.claude/skills/sop-authoring/) — **the house way to
  write, restructure, or review an SOP**: the required structure (process
  flowchart first, book-index hierarchy, numbered lists, uploads checklist,
  email map…), the PR → independent-review → merge workflow, and the Atlas
  design-system render for review copies. Use it for every new SOP or major
  restructure. Reference pattern:
  [`hollywood-broward-business-tax-receipt.md`](./hollywood-broward-business-tax-receipt.md).

Well-written SOPs here can also become their own Claude skills in
[`.claude/skills/`](../../.claude/skills/) when a procedure is repeatable enough
to automate.

## Outputs

The procedures themselves (Markdown), committed to this folder as the internal
source of truth.

## Working on this / notes for AI

When adding an SOP: keep it concrete and step-by-step, make it **one
self-contained file** (no separate summary/detailed pair), and list it in the
index above. **Never** put sensitive client data (dollar figures, EINs,
addresses, full account numbers, filled-in forms, private individuals' names)
in a procedure — that belongs in the firm's client systems, not the repo. A
per-client runbook may name the client business and the operational facts the
work requires. Where the procedure involves filled-in copies, include a blank
template inside the SOP for copying out.
