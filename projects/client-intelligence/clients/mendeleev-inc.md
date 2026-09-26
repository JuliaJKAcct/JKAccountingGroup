# MENDELEEV INC — C-corporation (Gridin)

> **Status:** Prospect — MONTHLY proposal drafted 2026-09-25, service start 2026-10-01 · **Owner:** Julia · **Last updated:** 2026-09-26

> **Sensitive data lives in the firm's systems, not here.** This file holds
> non-sensitive knowledge and links only. Logins, passwords, full account numbers,
> dollar figures, and personal contact details stay in Google Drive / Double
> / QuickBooks and are referenced by link. Never paste a secret or personal data
> into this file.
> **A business EIN is the exception and MAY be written here** — it is public on Sunbiz,
> so hiding it protects nothing _(Lilian, 2026-08-12)_. An **SSN or ITIN never may**,
> including when it is the entity's tax ID. Write the EIN **hyphenated** (`12-3456789`) — nine
> bare digits trip the published-page gate and stop the build.

> **Two zones — what feeds the SOP vs what stays here.** This file is the master
> record. Its sections split into two zones:
> - **Operating (feeds the client SOP):** §1 Snapshot, §2 Contacts, §3 Systems &
>   access, §4 Obligations & recurring processes, §5 Key facts & quirks, §7 Links —
>   the standing info a covering bookkeeper needs to run this client.
> - **Working context (CI-only — never in the SOP):** §6 — the log and outstanding
>   tasks/meeting follow-ups. Live tasks live in Double / Ping (linked), not copied
>   here.
>
> The SOP is the curated view of the **Operating** zone. See the project README
> ("Client Intelligence ↔ the client SOP") for how the two stay in sync.

## 1. Snapshot

- **Business name:** MENDELEEV INC _(Sunbiz document number and EIN pending)_
- **Entity type:** **C-corporation — files Form 1120** (Julia's intake, 2026-09-25)
- **Home state:** Florida — 7901 4th St N, Saint Petersburg, FL 33702 _(the same
  building as 4TUKAS, LLC's address — likely the firm's usual registered/virtual
  office block; suite number pending)_
- **Industry / what they do:** _(pending)_
- **Primary language:** _(pending — the owner's name suggests Russian-speaking)_
- **Our engagement (services we provide):** **PROSPECT.** ⚠️ **A MONTHLY engagement,
  not a tax letter** — Julia corrected the template mid-session (2026-09-25: "This is
  not a tax engagement. This will be a monthly engagement starting October 1"). The
  bilingual RU/EN monthly proposal covers: monthly bookkeeping and reconciliation,
  monthly financial statements (the foundation), the annual **Form 1120** corporate
  return and year-round tax coordination — plus a **one-time onboarding: cleanup of
  the 2026 books, starting 2026-10-01**, shown as a one-time service card. Personal
  returns excluded. Fees live in the delivered proposal, not here (the monthly figure
  went through three dictated corrections in a row — the final one stands in the
  document)
- **Fiscal year-end:** December 31 (calendar assumed)
- **Accounting platform:** _(pending — cleanup implies books exist somewhere)_

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details.

| Role | Where to find them |
|---|---|
| Owner / signer | **Dmitrii Gridin** — pre-printed on the letter's signature block (title left blank — pending). ⚠️ **Based in Yerevan, Armenia** (address held outside the repo) — a non-US-resident owner, which drives the §5 flag |

- **Double client:** _(pending — not in Double yet)_

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| _(none — prospect)_ | | | |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** _(pending — industry unknown)_

### Payroll
- **Applies?** _(pending)_

### Bookkeeping & monthly close
- **Applies?** Quoted: a **one-time cleanup of the 2026 books** starting 2026-10-01,
  itemized in the engagement letter at Julia's instruction. No monthly engagement quoted

### Income tax
- **Applies?** Yes — **Form 1120**, first year (TY2026 assumed): due date derives to
  2027-04-15, info-needed-by set to 2027-03-15 in the draft, Form 8879-C wording.
  ⚠️ See §5: the foreign owner likely adds a **Form 5472** requirement — not yet in
  the quoted scope. Personal returns excluded by the letter's standard terms

### Licenses & other filings
- **Applies?** FL annual report each year from 2027 _(not part of the quoted engagement)_

## 5. Key facts & quirks

> ⚠️ **Order these by consequence — only the first FOUR are published.** Both the Knowledge
> Hub and the client-intelligence review dashboard render **only the first four top-level
> bullets** of this section (and of §6's "Outstanding items"); a fifth never appears on
> either. So put first whatever would cause the worst mistake if someone didn't know it —
> **not** the oldest, and **not** whatever was added last. **Adding a bullet is a decision
> about where it goes**; appending to the end means the team never sees it. The cap lives in
> `clientCard()` — see the [render README's parsing contract](../../../.claude/skills/client-intelligence/render/README.md).

- ⚠️ **The owner is a non-US-resident (Armenia) — check Form 5472 before filing anything.**
  A US corporation that is 25%+ foreign-owned files **Form 5472 with the 1120** for
  reportable transactions with the foreign owner, and the penalty for missing it is
  five figures. The drafted letter does NOT include a 5472 line — flagged to Julia
  2026-09-25, unresolved. Ownership percentage itself is also unconfirmed
- **The engagement type went through a full correction cycle in one session — read §6
  before touching the document:** it began as a first-year tax engagement letter (with
  a bilingual rebuild and two fee corrections) and ended as the standing MONTHLY
  proposal with the cleanup as a one-time onboarding card. The letter versions are
  superseded; the artifact link shows the monthly proposal
- **The onboarding cleanup is one-time and REQUIRED, not an optional add-on:** the
  tool's add-on card says "Optional add-on" and appends "/mo" — both were overridden
  post-render ("One-time service", no period suffix). If this pattern recurs, the tool
  deserves a native one-time-service mode

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
- 2026-09-26 — **First-ever PROSPECT sweep — Gmail searched with NO date bound (this
  client's whole history, since it is brand new, created 2026-09-25, and Gmail search is
  cheap; Google Drive full-text search also unbounded). No Ping/Double — no Double account
  exists, and per the PROSPECT batch rule no `sweep-state.md` row is ever added for this
  client; this run's pass is noted here only.** Searched Gmail for "Mendeleev" OR "Gridin"
  across the whole mailbox — found a **Discovery Call booking with Dmitrii Gridin**, held
  via the firm's Odoo-integrated scheduler on **2026-09-23, 3:00–3:10pm EDT**: the booking
  confirmation, an Odoo CRM lead-assignment notice, and an Odoo calendar invitation all
  landed the same day, and the lead was assigned to Julia in Odoo CRM as "Dmitrii Gridin -
  Discovery Call." This is almost certainly the intake call that produced the 2026-09-25
  proposal (two days later) — the file's Snapshot previously implied a purely dictated
  intake with no recorded call. ⚠️ **A discrepancy worth flagging, not resolving:** the
  phone number captured on the booking form carries a different country code than the
  "Based in Yerevan, Armenia" fact already on file (§2) — the number itself is personal
  contact data and stays in the booking record / Odoo, not here, but it is worth Julia or
  Lilian double-checking his actual location before anything address-dependent (state
  nexus, treaty position) is assumed from "Armenia" alone. His **email is now on file** via
  the same booking (Odoo/Gmail) — see the booking record or Double once the client record
  is created; not written here per the personal-contact-details rule. Searched Drive
  full-text for "Mendeleev" / "Gridin" (`excludeContentSnippets: true`) — no results at all
- 2026-09-25 — **Intake (Julia, dictated), one session, five corrections — final form:
  a bilingual MONTHLY proposal.** The sequence, kept because it explains the artifacts:
  (1) intake read as a first-year tax engagement ("first layer" = "first year", Form
  1120) and drafted on the letter template with the firm's default 1120 rate; (2) plus
  a one-time onboarding fee for cleanup of the 2026 books, start October 1; (3) made
  bilingual — a full Russian courtesy translation of the letter on the tool's styles,
  English governing; (4) the return fee corrected twice by dictation (the calculator's
  default was wrong ⚠️ — see Outstanding); (5) then the frame correction: **not a tax
  engagement — a monthly engagement from October 1** at the corrected monthly figure,
  with the cleanup as a one-time service. Rebuilt on the monthly-proposal template
  (bilingual mode native), the onboarding card de-optionalized post-render, cover date
  fixed (ISO input) and the "e" email prefix stripped per Julia's standing preference.
  Owner Dmitrii Gridin, Yerevan (address held out of the repo). Delivered as PDF + one
  private artifact (same link across all versions)

### Outstanding items (CI-only — never in the SOP)

- **Julia to confirm:** whether Form 5472 joins the annual filings (foreign owner —
  see §5 lead flag); the first monthly invoice timing vs the onboarding; ⚠️ whether the
  pricing calculator's default 1120 rate should be corrected to match the rate she
  quoted here (a shared-tool change — needs her word, then a rebuild + Hub republish)
- **Pending:** Sunbiz document number, EIN, suite number, industry, owner's email

### Information still needed

- [ ] Sunbiz registration + EIN (or is formation still ahead?)
- [ ] Ownership split (is Gridin 100%?) — drives the 5472 answer
- [ ] What the company does; where the 2026 books live today
- [ ] Owner's email for the letter and Double

## 7. Links

- **Double client:** _(pending)_
- **Related SOPs:** _(none yet)_
