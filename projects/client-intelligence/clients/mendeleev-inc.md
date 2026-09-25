# MENDELEEV INC — C-corporation (Gridin)

> **Status:** Prospect — first-year tax engagement letter drafted 2026-09-25 · **Owner:** Julia · **Last updated:** 2026-09-25

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
- **Our engagement (services we provide):** **PROSPECT.** First-year tax engagement
  letter drafted 2026-09-25 on the engagement-letter template (the standing routing:
  tax engagements go on the letter, not the monthly proposal): **Form 1120** for tax
  year 2026 _(assumed — see §6)_, plus an itemized additional-service line for a
  **one-time onboarding: cleanup of the 2026 books, work beginning 2026-10-01**
  (Julia's explicit instruction to include it in this letter — a deliberate deviation
  from the cleanup-is-never-in-the-proposal default, see §5). Fees live in the
  delivered letter, not here
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
- **The cleanup is INSIDE the engagement letter at Julia's explicit instruction**
  (2026-09-25): a one-time onboarding line for the 2026 books, work beginning
  2026-10-01. This deviates from the standing default (cleanup goes out as its own
  invoice, never in a tax proposal — Lilian, Aug 2026); the deviation is Julia's call
  for this client and was flagged when made
- **First-year engagement, TY2026 assumed:** if the company's first return turns out
  to be a different year (formation date unknown), the letter's year, due date and
  info-by date must be redone before signing
- **The 1120 fee in the draft is the firm's default rate, not a quote Julia set:**
  she named only the cleanup fee; the return-preparation line was filled from the
  pricing calculator's standard 1120 rate and flagged for her confirmation

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
- 2026-09-25 — **Intake (Julia, dictated) + first-year engagement letter drafted and
  delivered.** Inputs: company name and St. Petersburg FL address, owner Dmitrii Gridin
  (Yerevan, Armenia — address held out of the repo), "first layer" read as **"first
  year"** (dictation; flagged for confirmation), Form 1120, then mid-draft: plus a
  one-time onboarding fee for cleanup of the 2026 books, start October 1. Delivered as
  PDF + private artifact. Open flags: the 5472 question, the default 1120 fee, the
  signer's title (blank), TY2026 assumption
- 2026-09-25 (same session) — **Made bilingual at Julia's request ("In Russian and
  English"):** the letter tool is English-only, so a full Russian courtesy translation
  of the letter body was composed on the tool's own styles and placed FIRST, banner-marked
  "для ознакомления" with English governing and the signature only in the English part
  (the house bilingual convention). System words and form names stay in English inside
  the Russian text. Redelivered as an 18-page PDF + the same artifact

### Outstanding items (CI-only — never in the SOP)

- **Julia to confirm:** "first year" reading; the 1120 preparation fee (default rate
  used); whether Form 5472 joins the scope (its own line/fee); the signer's title;
  TY2026 vs a different first year
- **Pending:** Sunbiz document number, EIN, suite number, industry, owner's email

### Information still needed

- [ ] Sunbiz registration + EIN (or is formation still ahead?)
- [ ] Ownership split (is Gridin 100%?) — drives the 5472 answer
- [ ] What the company does; where the 2026 books live today
- [ ] Owner's email for the letter and Double

## 7. Links

- **Double client:** _(pending)_
- **Related SOPs:** _(none yet)_
