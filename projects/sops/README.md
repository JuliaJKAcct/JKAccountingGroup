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
├── child-dependent-care-provider-statement.md   ← Tax Return: substantiate the Child & Dependent Care Credit when there's no payment trail (signed provider statement)
├── business-tax-engagement-letter-standard.md   ← Tax Return: the firm's business tax-prep engagement-letter standard — backs the interactive generator embedded in the Knowledge Hub (proposal-tool)
├── assets/                                      ← master templates (S-Corp COA .xlsx · blank Child & Dependent Care Provider Statement .pdf)
├── ecoorganic-bookkeeping-review.md             ← Ecoorganic monthly bookkeeping rules + review checklist
├── ecoorganic-ct-sales-tax.md                   ← Ecoorganic monthly CT sales tax (OS-114 zero return, myconneCT)
├── magnum-152-bookkeeping-review.md             ← Magnum 152 monthly bookkeeping & close runbook (rendered in the Hub; exemplar for Maria's clients)
├── sunoma-bookkeeping-review.md                 ← Sunoma Inc monthly bookkeeping & close runbook (two-store pawn; Hub-rendered)
├── mobilesource-bookkeeping-review.md           ← Mobilesource Corp monthly bookkeeping & close runbook (phone sales/repairs; Hub-rendered)
├── sensustech-bookkeeping-review.md             ← SENSUSTECH LLC monthly bookkeeping & close runbook (software/apps; Hub-rendered)
├── margate-plumbing-bookkeeping-review.md       ← Margate Plumbing monthly bookkeeping & close runbook (plumbing; Hub-rendered)
├── beemold-usa-bookkeeping-review.md            ← Beemold USA monthly bookkeeping & close runbook (sister plumbing entity; Hub-rendered)
├── ikids-group-bookkeeping-review.md            ← iKids Group monthly bookkeeping runbook (pre-operational play park; the AP mailbox we work monthly + the autopaid water bill; Hub-rendered)
├── irs-certifying-acceptance-agent.md           ← getting the FIRM authorized by the IRS as a Certifying Acceptance Agent (CAA) for ITINs
├── irs-certifying-acceptance-agent.html         ← ↑ Atlas render
├── itin-w7-application.md                       ← preparing a client's ITIN application (Form W-7) — the companion procedure
├── itin-w7-application.html                     ← ↑ Atlas render
├── tools/                                       ← the ITIN Application Walkthrough (interactive; .src.html is the single source, embedded in the Hub)
├── hollywood-broward-business-tax-receipt.md    ← City of Hollywood + Broward County BTR
├── hollywood-broward-business-tax-receipt.html  ← ↑ Atlas design-system render of the BTR SOP (print/PDF-ready; the .md stays source of truth)
├── double-portal-first-login.md                 ← Double Client Portal first-time sign-in workaround
├── double-portal-sending-us-information.md      ← how a client sends us information/documents through the portal ("Qs for us")
├── double-portal-branding.md                    ← Double Client Portal on-brand branding (colors + logo)
├── deep-tech-penn-credit-tolls.md               ← Deep Tech FDOT toll debts in collection (Penn Credit) — client-task pay-down runbook (draft; Hub-rendered)
└── client-guides/                               ← ready-to-send client templates (visual guide + PDF, email/message template, WhatsApp, EN/RU)
    └── reference/                               ← the marked-up phone captures the visual guides are drawn from
```

_**One self-contained Markdown file per procedure** — the single source of truth
for that task, no split summary/detailed versions to keep in sync. Group into
subfolders by area (e.g. `onboarding/`, `bookkeeping/`, `tax/`) once there are
enough to warrant it._

## Index

| SOP | What it covers |
|---|---|
| [`florida-company-formation-sunbiz.md`](./florida-company-formation-sunbiz.md) | **Part 1** — forming the company with the State of Florida on Sunbiz. Opens with the **entity-suffix rule** (`LLC` / `Corp` must be typed into the name — the state never adds it, and why; plus the Fictitious-Name/DBA route for trading under a suffix-less name). Then entity choice (LLC vs Profit Corporation) and the S-corp angle, shared prerequisites (distinguishability, registered-agent rules, effective-date/Jan-1 tax tip, payment, the "final once submitted" rule, current FinCEN BOI status), the **Profit Corporation Articles of Incorporation** documented **screen by screen** (verified), the **LLC** path as a framework stub, **how to correct a rejected filing** without starting over (Tracking Number + PIN → *Update Filing*, with an open question flagged on whether the fee re-charges), **processing times** + the Division's daily processing-dates queue, fees & the annual-report cadence, and the handoff to Part 2 (EIN). |
| [`ein-application-irs.md`](./ein-application-irs.md) | **Part 2** — getting a business's federal **EIN** (IRS Form SS-4) once the entity is **Active on Sunbiz** — the go/no-go decision (responsible party has SSN/ITIN → apply online same-day; has neither → SS-4 by fax "Foreign", ~4 business days), both paths screen-/line-by-line, **what the online tool asks that the paper SS-4 doesn't (and back)**, the LLC-classification and "S-corp election is a separate Form 2553" traps, the employee question (**the firm answers No / `-0-` unless payroll starts now** — line 13 on paper and the yes/no online), Third-Party Designee, and after-steps. Follows [`florida-company-formation-sunbiz.md`](./florida-company-formation-sunbiz.md). |
| [`chart-of-accounts-standard.md`](./chart-of-accounts-standard.md) | The firm's **one numbering system** for every client's chart of accounts — the ranges (100 assets · 200 liabilities · … · 998/999 triage), the rules that keep it organized (parents hold nothing, decimal sub-accounts, leave gaps, keep QBO Type/Detail Type, adapt-don't-reinvent), and how to adapt per niche. Editable master in [`assets/S-Corp-COA-master.xlsx`](./assets/S-Corp-COA-master.xlsx) (125 accounts). Client-agnostic; feeds the bookkeeping SOPs. |
| [`child-dependent-care-provider-statement.md`](./child-dependent-care-provider-statement.md) | **Tax Return** procedure: how to substantiate a client's **Child and Dependent Care Credit** (Form 2441) when there is **no payment trail** — e.g. a cash-paid babysitter. Have the care **provider** complete and **sign** the statement (name, address, SSN/EIN, dates, amount, payment method); the signed copy stays in the client's systems, the credit data goes on Form 2441. Blank copy-out template in [`assets/child-dependent-care-provider-statement.pdf`](./assets/child-dependent-care-provider-statement.pdf). Procedure only; completed forms never come to the repo. |
| [`business-tax-engagement-letter-standard.md`](./business-tax-engagement-letter-standard.md) | **Tax Return** standard: the firm's one way to produce a **business tax-preparation engagement letter** (the in-house GoProposal replacement). The per-client fields, what the tool auto-derives from the entity type (return 1120 / 1120-S / 1065 · Form 8879 variant · filing due date), and what's fixed. Backs the **interactive generator embedded in the Knowledge Hub** (Tax preparation) — starts blank, validates every field, then Save PDF. Engine + skill in [`../proposal-tool/`](../proposal-tool/) (the [`proposal-generator`](../../.claude/skills/proposal-generator/) skill). Standard only; client figures never come to the repo. |
| [`ecoorganic-bookkeeping-review.md`](./ecoorganic-bookkeeping-review.md) | Per-client runbook: Ecoorganic's monthly bookkeeping categorization rules (checks/deposits, gas threshold, COGS, owner-personal patterns), COA conventions, reviewer checklist, and open-decisions log. The client's **sales tax has its own runbook** (next row); this one only confirms it happened. Rules only — client figures stay in client systems. |
| [`ecoorganic-ct-sales-tax.md`](./ecoorganic-ct-sales-tax.md) | **Client task** (recurring, monthly): the Connecticut **Sales and Use Tax Return (OS-114)** the firm files for Ecoorganic as a **zero return** on the firm's own CT DRS myconneCT login — the client does not file it. The steps, the Drive filing convention (`MM.YYYY - Sales tax - zero tax return.pdf` + confirmation screenshot), the due date and the **$50 late floor even at zero**, what to do when a DRS notice arrives, and two unsettled questions: **why** the return is zero, and what covers the **nine-month 2025 gap** beside two unopened DRS notices. Runs on its own clock — not part of the bookkeeping close. Procedure only; the login lives in Drive, referenced by link. |
| [`magnum-152-bookkeeping-review.md`](./magnum-152-bookkeeping-review.md) | Per-client bookkeeping runbook (via the [`bookkeeping-sop`](../../.claude/skills/bookkeeping-sop/) skill): MAGNUM 152's monthly close — a multi-store pawn/jewelry business. Client snapshot, the month-end process (Bravo → per-store JEs → SaasAnt consolidation → vendor & ADP reconciliation → reclass → close gate) with a Drive material button per step, categorization rules, reviewer checklist, and open-items log. Built from Maria Fernanda's Drive doc guide as the **exemplar** for the six Maria-owned clients (**in review**). The `.md` is the source of truth; the curated view renders **in the Knowledge Hub**. Process only; figures/logins stay in client systems. |
| [`sunoma-bookkeeping-review.md`](./sunoma-bookkeeping-review.md) | Per-client bookkeeping runbook (`bookkeeping-sop` skill): Sunoma Inc's monthly close — a two-store pawn business (Lucky Pawn & Auto Pawn). Per-store JEs, PaymentsHub date fixes, ADP, TaxDome reports, with a Drive walkthrough button per step. Hub-rendered; process only. **In review.** |
| [`mobilesource-bookkeeping-review.md`](./mobilesource-bookkeeping-review.md) | Per-client bookkeeping runbook (`bookkeeping-sop` skill): Mobilesource Corp's monthly close — phone sales & repairs. Client keeps its own books (JK reconciles), monthly FL DOR sales tax (recalculated), biweekly Gusto payroll + Simple IRA; 5 Drive video walkthroughs. Hub-rendered; process only. **In review.** |
| [`sensustech-bookkeeping-review.md`](./sensustech-bookkeeping-review.md) | Per-client bookkeeping runbook (`bookkeeping-sop` skill): SENSUSTECH LLC's monthly close — software/app dev. The monthly Brokerage JE from statements (via TaxDome), sub-CC 4800 entered manually, Uncat workflow; 2 Drive video walkthroughs. Hub-rendered; process only. **In review.** |
| [`margate-plumbing-bookkeeping-review.md`](./margate-plumbing-bookkeeping-review.md) | Per-client bookkeeping runbook (`bookkeeping-sop` skill): Margate Plumbing's monthly close — a plumbing contractor. Owner-managed AR (weekly Julia meeting), intercompany-loan review, off-Gusto payment adjustments; 3 Drive video walkthroughs. Hub-rendered; process only. **In review.** |
| [`beemold-usa-bookkeeping-review.md`](./beemold-usa-bookkeeping-review.md) | Per-client bookkeeping runbook (`bookkeeping-sop` skill): Beemold USA's monthly close — the quieter sister plumbing entity. Manual transaction upload (bank-feed sync broken since Feb 2025), intercompany-loan review. Hub-rendered; process only. **In review.** |
| [`ikids-group-bookkeeping-review.md`](./ikids-group-bookkeeping-review.md) | Per-client bookkeeping runbook (`bookkeeping-sop` skill): **iKids Group LLC** — a **pre-operational** children's play park being built out (1065 partnership; no payroll, no sales tax). Its signature step is that **the paperwork does not come to us — we go and get it**: the vendor bills and payment confirmations arrive in the **client's own AP mailbox**, which the firm works **every month** to download them and attach each to its payment transaction. The **water bill is on autopay** — collect it, never pay it twice. Plus the pre-operational **startup-cost capitalization** rule and the open "when do operations begin?" decision. **A seed** — the bank-feed/reconciliation detail is still to be written. Hub-rendered; process only, mailbox password stays in the client's vault. |
| [`irs-certifying-acceptance-agent.md`](./irs-certifying-acceptance-agent.md) | **Draft** — how the firm gets **authorized by the IRS as a Certifying Acceptance Agent (CAA)**, so we can authenticate an ITIN applicant's identity documents in our own office instead of the client mailing their original passport to Austin. The prerequisites gate (EIN · a PTIN per responsible party · e-Services + ID.me · everyone's own taxes current), the **two trainings** every responsible party must finish *before* the application is submitted (the free IRS one, now attested on the jurat; and the paid **forensic document training**, with the seven-point certificate-acceptance checklist and its four-year clock), the electronic application in e-Services (paper Form 13551 is gone), the CAA Document Upload Tool, and the obligations that follow approval — **≥5 Forms W-7 a year**, a W-7-COA on every one, IRS compliance reviews, and the agreement expiring **Dec 31 of the 4th year**. Application-screen detail is **from IRS documentation, not yet a live run** — marked, and to be corrected when we run it. Atlas render: [`.html`](./irs-certifying-acceptance-agent.html). |
| [`itin-w7-application.md`](./itin-w7-application.md) | **Draft** — the companion: **preparing a client's ITIN application (Form W-7)**. Opens with the gate that comes before the form — **someone eligible for an SSN is not eligible for an ITIN** — then the reason box a–h and tax status (Pub 519 / 901), the **five Exceptions** that replace the attached tax return, the line-by-line traps (Line 3 foreign address, Line 6d date of entry), the **13 acceptable documents** with the dependent rules inside them (a dependent's passport is *not* automatically stand-alone; residency proof by age band; what a medical or school record must actually contain), the signature rules and the **five-business-day** submission rule, the **CAA-only** W-7-COA and what may be authenticated for whom, the Austin mailing addresses, renewals/expiration, and the **IRS's own top-10 error list** as a pre-flight check. Built from Pub 5726 (the mandatory agent training), Pub 1915, 4327, 519 and 901, and checked against the **printed Form W-7 (Rev. 12-2024)** and **Form W-7-COA (Rev. 8-2025)** — **from the publications, not yet from a filed application**. Opens with a **Start here** layer for someone who has never done one (the job in six sentences + a glossary). Atlas render: [`.html`](./itin-w7-application.html); interactive companion in [`tools/`](./tools/); the field-by-field answer sheet lives in the [`itin-w7-preparation` skill](../../.claude/skills/itin-w7-preparation/). |
| [`tools/itin-w7-walkthrough.src.html`](./tools/itin-w7-walkthrough.src.html) | **The interactive companion to the W-7 SOP** — the tool a beginner actually works from. Asks plain questions (new or renewal · could they get an SSN · which situation · return or exception · age · where the dependent lives · ODC only · passport · who signs · are we a CAA) and derives the **reason box and its dotted lines**, the **mandatory lines for that applicant**, the **document list**, **both dependent tests** with the right age band, the **exception proof**, **who may sign and what to attach**, the **COA steps**, and the **envelope** — then prints a per-applicant preparation sheet. Second tab: a **searchable field-by-field reference** to every line of Form W-7 and Form W-7-COA. Self-contained, nothing stored, runs in the browser. **The `.src.html` is the single source** — the Hub embeds the same file (*Templates → Interactive tools*); rebuild the standalone with `node projects/sops/tools/build.mjs`. |
| [`hollywood-broward-business-tax-receipt.md`](./hollywood-broward-business-tax-receipt.md) | Filing a Business Tax Receipt for a business in Hollywood, FL / Broward County — city + county steps, links, and the home-occupation zoning gate. |
| [`double-portal-first-login.md`](./double-portal-first-login.md) | Double Client Portal has no sign-up step and its default magic-link/Google sign-in are unreliable — the working password-reset workaround (portal opens on the password screen → "Forgot your password?"), plus ready-to-send client guides (self-contained visual guide + PDF, email/message template, WhatsApp; EN/RU) in [`client-guides/`](./client-guides/). |
| [`double-portal-sending-us-information.md`](./double-portal-sending-us-information.md) | The other portal question every client asks — **"I have information for you, where do I put it?"** Everything (a question, bank details, a document, a photo) goes in **"Qs for us"**: the four taps on a phone, the two upload routes (`Upload…` inside the question — preferred — vs `Upload photo` from the `+` menu), what `Team visibility` does, and how the item reaches us in Double. Ready-to-send guides (visual guide + PDF/PNG, email, WhatsApp — EN & RU) in [`client-guides/`](./client-guides/). Built with the [`client-portal-guides`](../../.claude/skills/client-portal-guides/) skill; phone flow verified, desktop still open. |
| [`double-portal-branding.md`](./double-portal-branding.md) | The firm's official on-brand branding for the Double Client Portal — exact Brand/Button/Background hex values (mapped to Design System tokens), logo/favicon assets, and why the combination works. Replaces Double's off-brand defaults. |
| [`deep-tech-penn-credit-tolls.md`](./deep-tech-penn-credit-tolls.md) | **Draft** client-task runbook: clearing **Deep Tech Development Group LLC**'s unpaid **FDOT tolls** that went to the **Penn Credit** collection agency — the ID-number + ZIP login (not user/password), the pay-down steps, and the recurring watch (new toll items keep reappearing). Login values stay in the client's vault. Feeds from [`../client-intelligence/clients/deep-tech-development.md`](../client-intelligence/clients/deep-tech-development.md). Hub-rendered. |

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

- [`client-portal-guides`](../../.claude/skills/client-portal-guides/) — **the house way
  to produce an illustrated client how-to for the Double portal**: the one-page visual
  guide (EN + RU), the PDF/PNG to send by email or WhatsApp, the message copy, and the
  SOP behind them. Encodes the rule that portal screens are **recreated in HTML/CSS, not
  screenshotted**, the marker convention, and the deterministic render
  (`render/build.mjs`). Reference guides:
  [`double-portal-first-login.md`](./double-portal-first-login.md) and
  [`double-portal-sending-us-information.md`](./double-portal-sending-us-information.md).

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
