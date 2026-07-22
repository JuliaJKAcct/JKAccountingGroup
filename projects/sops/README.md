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
├── chart-of-accounts-standard.md                ← firm COA standard: number ranges + rules + how to adapt per niche
├── assets/                                      ← master templates (S-Corp COA .xlsx)
├── ecoorganic-bookkeeping-review.md             ← Ecoorganic monthly bookkeeping rules + review checklist
├── magnum-152-bookkeeping-review.md             ← Magnum 152 monthly bookkeeping & close runbook (rendered in the Hub; exemplar for Maria's clients)
├── sunoma-bookkeeping-review.md                 ← Sunoma Inc monthly bookkeeping & close runbook (two-store pawn; Hub-rendered)
├── mobilesource-bookkeeping-review.md           ← Mobilesource Corp monthly bookkeeping & close runbook (phone sales/repairs; Hub-rendered)
├── sensustech-bookkeeping-review.md             ← SENSUSTECH LLC monthly bookkeeping & close runbook (software/apps; Hub-rendered)
├── margate-plumbing-bookkeeping-review.md       ← Margate Plumbing monthly bookkeeping & close runbook (plumbing; Hub-rendered)
├── beemold-usa-bookkeeping-review.md            ← Beemold USA monthly bookkeeping & close runbook (sister plumbing entity; Hub-rendered)
├── hollywood-broward-business-tax-receipt.md    ← City of Hollywood + Broward County BTR
├── hollywood-broward-business-tax-receipt.html  ← ↑ Atlas design-system render of the BTR SOP (print/PDF-ready; the .md stays source of truth)
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
| [`chart-of-accounts-standard.md`](./chart-of-accounts-standard.md) | The firm's **one numbering system** for every client's chart of accounts — the ranges (100 assets · 200 liabilities · … · 998/999 triage), the rules that keep it organized (parents hold nothing, decimal sub-accounts, leave gaps, keep QBO Type/Detail Type, adapt-don't-reinvent), and how to adapt per niche. Editable master in [`assets/S-Corp-COA-master.xlsx`](./assets/S-Corp-COA-master.xlsx) (125 accounts). Client-agnostic; feeds the bookkeeping SOPs. |
| [`ecoorganic-bookkeeping-review.md`](./ecoorganic-bookkeeping-review.md) | Per-client runbook: Ecoorganic's monthly bookkeeping categorization rules (checks/deposits, gas threshold, COGS, owner-personal patterns), COA conventions, reviewer checklist, and open-decisions log. Rules only — client figures stay in client systems. |
| [`magnum-152-bookkeeping-review.md`](./magnum-152-bookkeeping-review.md) | Per-client bookkeeping runbook (via the [`bookkeeping-sop`](../../.claude/skills/bookkeeping-sop/) skill): MAGNUM 152's monthly close — a multi-store pawn/jewelry business. Client snapshot, the month-end process (Bravo → per-store JEs → SaasAnt consolidation → vendor & ADP reconciliation → reclass → close gate) with a Drive material button per step, categorization rules, reviewer checklist, and open-items log. Built from Maria Fernanda's Drive doc guide as the **exemplar** for the six Maria-owned clients (**in review**). The `.md` is the source of truth; the curated view renders **in the Knowledge Hub**. Process only; figures/logins stay in client systems. |
| [`sunoma-bookkeeping-review.md`](./sunoma-bookkeeping-review.md) | Per-client bookkeeping runbook (`bookkeeping-sop` skill): Sunoma Inc's monthly close — a two-store pawn business (Lucky Pawn & Auto Pawn). Per-store JEs, PaymentsHub date fixes, ADP, TaxDome reports, with a Drive walkthrough button per step. Hub-rendered; process only. **In review.** |
| [`mobilesource-bookkeeping-review.md`](./mobilesource-bookkeeping-review.md) | Per-client bookkeeping runbook (`bookkeeping-sop` skill): Mobilesource Corp's monthly close — phone sales & repairs. Client keeps its own books (JK reconciles), monthly FL DOR sales tax (recalculated), biweekly Gusto payroll + Simple IRA; 5 Drive video walkthroughs. Hub-rendered; process only. **In review.** |
| [`sensustech-bookkeeping-review.md`](./sensustech-bookkeeping-review.md) | Per-client bookkeeping runbook (`bookkeeping-sop` skill): SENSUSTECH LLC's monthly close — software/app dev. The monthly Brokerage JE from statements (via TaxDome), sub-CC 4800 entered manually, Uncat workflow; 2 Drive video walkthroughs. Hub-rendered; process only. **In review.** |
| [`margate-plumbing-bookkeeping-review.md`](./margate-plumbing-bookkeeping-review.md) | Per-client bookkeeping runbook (`bookkeeping-sop` skill): Margate Plumbing's monthly close — a plumbing contractor. Owner-managed AR (weekly Julia meeting), intercompany-loan review, off-Gusto payment adjustments; 3 Drive video walkthroughs. Hub-rendered; process only. **In review.** |
| [`beemold-usa-bookkeeping-review.md`](./beemold-usa-bookkeeping-review.md) | Per-client bookkeeping runbook (`bookkeeping-sop` skill): Beemold USA's monthly close — the quieter sister plumbing entity. Manual transaction upload (bank-feed sync broken since Feb 2025), intercompany-loan review. Hub-rendered; process only. **In review.** |
| [`hollywood-broward-business-tax-receipt.md`](./hollywood-broward-business-tax-receipt.md) | Filing a Business Tax Receipt for a business in Hollywood, FL / Broward County — city + county steps, links, and the home-occupation zoning gate. |
| [`double-portal-first-login.md`](./double-portal-first-login.md) | Double Client Portal has no sign-up step and its default magic-link/Google sign-in are unreliable — the working password-reset workaround (portal opens on the password screen → "Forgot your password?"), plus ready-to-send client guides (self-contained visual guide + PDF, email/message template, WhatsApp; EN/RU) in [`client-guides/`](./client-guides/). |
| [`double-portal-branding.md`](./double-portal-branding.md) | The firm's official on-brand branding for the Double Client Portal — exact Brand/Button/Background hex values (mapped to Design System tokens), logo/favicon assets, and why the combination works. Replaces Double's off-brand defaults. |

## Brand & design

Mostly internal text documents — brand styling optional. If any SOP becomes a
client-facing or presented document, apply the shared brand
([`../../brand/`](../../brand/)).

The **BTR SOP** has a fully designed companion render,
[`hollywood-broward-business-tax-receipt.html`](./hollywood-broward-business-tax-receipt.html)
— the [`sop-authoring` skill](../../.claude/skills/sop-authoring/)'s **Atlas
design-system pass** (petrol teal + bronze on ivory; Source Serif 4 / IBM Plex
Sans / IBM Plex Mono), built with the [`impeccable`](../../.claude/skills/impeccable/)
skill. It is **self-contained** (fonts embedded, no external requests), ships
**light + dark themes** and a **print stylesheet**, so it can be opened offline,
printed to PDF, or saved to the firm's Google Drive. The Markdown is the source
of truth; the HTML is a view — re-render it when the `.md` changes.

## Skills & tooling

- [`sop-authoring`](../../.claude/skills/sop-authoring/) — **the house way to
  write, restructure, or review an SOP**: the required structure (process
  flowchart first, book-index hierarchy, numbered lists, uploads checklist,
  email map…), the PR → independent-review → merge workflow, and the Atlas
  design-system render for review copies. Use it for every new SOP or major
  restructure. Reference pattern:
  [`hollywood-broward-business-tax-receipt.md`](./hollywood-broward-business-tax-receipt.md).
- [`bookkeeping-sop`](../../.claude/skills/bookkeeping-sop/) — **the house way for
  per-client monthly-bookkeeping runbooks** (`*-bookkeeping-review.md`): the two-layer
  rule (the `.md` keeps the maximum detail; the Hub is the curated visual view), the
  required `.md` structure (bold-led numbered rules, a Status-column decisions table, the
  number-range grammar line, a numbered checklist), the firm's categorization framework +
  color model (owner/equity · business/P&L · investigate · triage), and how it renders in
  the Hub. Use it for every bookkeeping-client SOP. Reference pilot:
  [`ecoorganic-bookkeeping-review.md`](./ecoorganic-bookkeeping-review.md).

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
