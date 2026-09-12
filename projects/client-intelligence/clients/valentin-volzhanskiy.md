# Valentin Volzhanskiy

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-09-12

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

- **Business name:** Individual taxpayer — no trading entity is used on the return; he files a **Schedule C as a sole proprietor**, and the 2024 Schedule C carried **no business name and no EIN**.
- **Entity type:** Individual / sole proprietor. ⚠️ He has uploaded **Delaware LLC formation documents** to the portal and their relationship to the Schedule C is **unestablished** — see §5.
- **Home state:** **Florida — Broward County (Fort Lauderdale)** since his 2025 move; previously Miami-Dade (Hialeah). Florida levies no personal income tax, so no state return has been required to date.
- **Industry / what they do:** Hospitality — occupation on the return is **Bartender**; the 2024 Schedule C principal business was **catering**, code **722410**. He separately takes **contractor work paid on Form 1099-NEC** by several companies the firm also serves.
- **Primary language:** EN — portal and email correspondence are in English, though the July 2026 Zoom call was conducted largely in Russian.
- **Our engagement (services we provide):** **Income tax only** — Form 1040 preparation. `Income Tax` is ticked in Double; `1099 Preparation` and `Annual Report` are both off.
- **Fiscal year-end:** 31 December (calendar year).
- **Accounting platform:** **None** — Double shows `platform: none`, so there are no books and no QuickBooks file; everything on the return comes from third-party documents.

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Taxpayer / primary contact | Double client (link below) |
| Assigned staff | **Lilian Gonzalez** (Double `Assigned Staff` property) |
| Business contact at a payer | Reachable through the payer's own Double client record |

- **Double client:** [Valentin Volzhanskiy — id 710663](https://app.doublehq.com/close?cid=710663)
- **Double case note** _(only if this client has a matter being tracked start to finish — see the [`double-mcp`](../../../.claude/skills/double-mcp/) skill §7):_ none — no matter is being tracked start to finish.

## 3. Systems & access

Which systems we use for this client and **where the credentials live** (a Drive
link). Never write the credential itself here.

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Double client portal | Document exchange, organizer | Client's own login — the firm holds none | Migrated from TaxDome; account activated Apr 2025 |
| Health Insurance Marketplace (healthcare.gov) | Source of the annual Form 1095-A | Client's own login — the firm holds none | Needed **every year** — see §5 |
| Bank (direct deposit) | Refund deposit / balance debit | Double organizer response | Bank on file — details in Double |

## 4. Obligations & recurring processes

The recurring work the firm does for this client. **Each obligation below becomes
the raw material for that client's SOP.** Fill the ones that apply; mark the rest
"Applies? _(pending)_" or "Not applicable."

### Sales tax
- **Applies?** No — individual taxpayer, no retail activity.

### Payroll
- **Applies?** No — he is an employee of several unrelated employers and has no payroll of his own.

### Bookkeeping & monthly close
- **Applies?** No.
- Double records `Bookkeeping: N/A` and `platform: none`.
- ⚠️ **This is the reason his Schedule C has no books**: the expense side exists only in whatever he
  can tell us or document, which is why the organizer's business questions matter so much for him.

### Income tax
- **Applies?** **Yes — this is the whole engagement.**
- **Return type(s) & deadlines:** **Form 1040 with Schedule C** (`Tax Return Type` = `1040-SCH C`).
  Calendar year, due 15 April. **The firm has filed an extension in at least 2025 and 2026**, so the
  operative deadline is **15 October**.
- **Our role:** We prepare and e-file. The firm is the ERO.
- **Process notes (→ future SOP):**
  - **He files late, on extension, every year seen so far.** The 2024 return was authorised in
    June 2025, signed by the preparer in October 2025 and **e-filed on 2025-12-01** — after the
    extended deadline. Treat his October date as real, not notional.
  - **His return is assembled entirely from third-party documents**, and they arrive in a burst on
    or about the filing deadline. In 2026 every 2025 document was uploaded on **15 April 2026**.
  - A **Form 8821** was prepared for him in June 2025 (Lilian → Julia). Its scope and current
    status are unestablished.

### Licenses & other filings
- **Applies?** Not for him personally. The Delaware LLC in §5 may carry filing obligations of its
  own; nobody has established whether it does.

## 5. Key facts & quirks

Anything the team must know to serve this client well — special preferences,
watch-outs, one-off arrangements, history that affects the work.

> ⚠️ **Order these by consequence — only the first FOUR are published.** Both the Knowledge
> Hub and the client-intelligence review dashboard render **only the first four top-level
> bullets** of this section (and of §6's "Outstanding items"); a fifth never appears on
> either. So put first whatever would cause the worst mistake if someone didn't know it —
> **not** the oldest, and **not** whatever was added last. **Adding a bullet is a decision
> about where it goes**; appending to the end means the team never sees it. The cap lives in
> `clientCard()` — see the [render README's parsing contract](../../../.claude/skills/client-intelligence/render/README.md).

- 🔴 **HE IS A TIPPED WORKER, AND FROM 2025 THAT IS A DEDUCTION — his employers report the tips
  in TWO DIFFERENT BOXES, so one of them is easy to miss.** One 2025 employer reported tips in
  **Form W-2 box 7** (`Social security tips`); another reported none in box 7 at all and instead
  put the tip figure in **box 14 marked `TIPS`**, with the tips folded into boxes 1, 3 and 5. The
  box-14 one is by far the larger. **Read box 7 AND box 14 on every W-2 he sends**, every year.
  The deduction is claimed on **Schedule 1-A (Form 1040) Part II**, which did not exist before 2025.
  🔴 **But reporting is not eligibility, and his employers are the risky kind:** a **service charge
  or automatic gratuity distributed to staff is NOT a qualified tip**, and all three tip-bearing
  employers are **contract catering and events** businesses, where a fixed distributed service
  charge is normal. **Ask the employer to split the figure before claiming it.**
- 🔴 **HE HAS MARKETPLACE HEALTH INSURANCE, SO FORM 1095-A GATES HIS RETURN EVERY YEAR — and it
  has already cost him money.** His 2024 return carried an **excess advance premium tax credit
  repayment** on Schedule 2 line 1a because his advance credit exceeded what he was entitled to.
  **Form 8962 is mandatory and blocks e-file**, his coverage has **month-gaps** rather than running
  all twelve months, and his income moving up or down changes the repayment. **Get the 1095-A
  early, and get it as a real PDF** — he photographs documents with his phone (see below).
- 🔴 **HE ANSWERS THE ORGANIZER'S INCOME-SOURCE QUESTION WITH `Wages (W2)` ONLY, WHICH IS WRONG AND
  SILENTLY CLOSES THE WHOLE SELF-EMPLOYED BRANCH.** He did exactly this on the 2025 organizer while
  uploading 1099-NECs in the same submission. Because the organizer is conditional, that single tick
  means he is **never asked** for business expenses, mileage, home office or a P&L — so a Schedule C
  arrives with income and no deductions. **Do not trust that answer; ask the business questions
  directly.**
- 🔴 **ALMOST EVERYTHING HE UPLOADS IS A PHONE PHOTOGRAPH WITH NO TEXT LAYER.** His 1095-A, his
  1099-NECs, his LLC papers, his installment agreement and one of his W-2s are all scans — they
  cannot be read by tooling and must be read by eye. **Ask for the issuer's original PDF** wherever
  one exists (Marketplace, payroll portals), or budget the time to key them manually.
- ⚠️ **He receives 1099-NEC income from companies that are themselves JK clients** — among them
  Pro Title Agency LLC and Maxratings LLC, and the firm prepares those payers' 1099s. That means
  **the firm's own records can corroborate what he was paid**, which is a real advantage; it also
  means a payment can exist in the firm's files without him ever mentioning it. **Check the payer
  side.**
- ⚠️ **He is NOT an owner of Maxratings LLC**, despite using a `@maxratings.com` address. The
  operating agreements name other members entirely. Treat him as a **contractor paid by** that
  company, not a member, unless something new says otherwise.
- ⚠️ **He has an IRS installment agreement** on file from the 2023 cycle. A fresh balance due can
  disturb an existing agreement, so **tell him the number before he is surprised by it**, and check
  whether the agreement is still live before promising him anything about payment.
- ⚠️ **He moved during 2025 and has raised address questions before.** In June 2025 he asked the
  firm whether an ID showing his old address was still usable. Several 2025 documents still carry
  the **Hialeah** address while the organizer gives **Fort Lauderdale**. Confirm the address at
  filing rather than copying last year's.
- ⚠️ **Two of his employers are payroll-processed from out-of-state addresses** (one New York, one
  North Carolina) while the wage copies seen so far are **Florida** copies. Do not infer another
  state's return from an employer's letterhead — **read boxes 15–17** before concluding anything.
- ⓘ **He has a Delaware LLC** whose formation papers he uploaded in April 2025. Its name, its
  status, whether it ever traded and how it relates to the Schedule C are **all unestablished** —
  the documents are unreadable scans and nobody has asked him. This is a standing question, not a
  known fact.
- ⓘ **The firm published a second, much better 2025 organizer in Double in June 2026** — it asks
  about tips, how they were reported, the tipped occupation, overtime and business income — and
  **he never completed it**, because he had already completed the older TaxDome-style organizer in
  April. The Double organizer therefore reads `in progress` and looks abandoned; the `Organizer
  Status` property reading `Completed` refers to the TaxDome one.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
A running, dated record as we build this profile.

- _(2025-04-11)_ — Activated his TaxDome portal account and uploaded, in one sitting, his 2024 W-2s,
  his driver's licence, his 2023 return, an IRS installment agreement and his Delaware LLC papers.
- _(2025-04-12)_ — Completed the **2024** individual tax organizer.
- _(2025-06-16/17)_ — Portal exchange with Irina Jandieri: asked for an updated ID; he replied that
  he was **changing his address** and asked whether the old one would do. Told yes; uploaded an
  image and said "Done."
- _(2025-06-17)_ — **Form 8821 Valentin** prepared and sent by Lilian to Julia. Scope and outcome
  unestablished.
- _(2025-10-14)_ — Preparer signed the 2024 return. (The e-file authorisation had been signed in
  June 2025.)
- _(2025-12-01)_ — **2024 return e-filed**, and the firm's standard "we have e-filed your documents"
  message went out the same day.
- _(2026-01-22)_ — He forwarded Julia a scanned document originating from Pro Title Agency; Julia
  passed it to Liudmyla. This is the period in which the firm prepared the payers' 2025 1099s.
- _(2026-04-15)_ — **Completed the 2025 TaxDome organizer** and uploaded his 2025 W-2s, a 1099-NEC,
  a second 1099 document and his 2025 Form 1095-A — all on the April deadline, several as phone
  photographs.
- _(2026-06-23)_ — The firm published a **new Double-native 2025 1040 organizer** to his portal. It
  has never been opened; every slide is unanswered.
- _(2026-07-16)_ — Zoom call with Julia and Iana Sytnychenko, recorded in Double as
  "Referral program discussion". Covered entity structure, reasonable compensation, retirement
  plans, real-estate lending products, sales-tax registration and a referral relationship.
  ⚠️ **The Ping transcription is heavily garbled** (Russian auto-transcription) — treat anything
  attributed to that call as low confidence unless a second source carries it.
- _(2026-09-12)_ — **Pre-return review run for tax year 2025** (Lilian's request). All ten sources
  read. Client file created — he had none. See the tax-year entry below.

### Tax year 2025 — the review
<!-- Add one per tax year the firm reviews for this client. -->

- **What gated the return.** Four things, and none of them is a missing document in the ordinary
  sense:
  1. **The Form 1095-A cannot be read.** It is on file — he uploaded it — but it is a photograph
     with no text layer, and **Form 8962 cannot be computed without its month-by-month columns.**
     A figure on the return depends on it, so this blocks. It needs a human to read it, or a fresh
     PDF from the Marketplace.
  2. **The Schedule C has income and no expenses.** His 1099-NEC income is established from the
     documents, but the organizer's `Wages (W2)`-only answer meant he was never asked a single
     business question. The prior year deducted fuel and phone costs; this year's equivalents have
     not been collected.
  3. **A 1099-NEC that he did not report may exist.** A 2025 Form 1099-NEC issued by
     **VoiceCapital Inc** naming him sits in the firm's own Google Drive. It is **not** in his
     Double folder and he listed no such payer. If it is his, it changes the Schedule C, the
     self-employment tax and the premium tax credit together.
  4. **The tips deduction is new, large and unclaimed.** He is a bartender with tips reported by
     two different employers in two different W-2 boxes, and he answered **"None of the above"** to
     the organizer's 2025-updates question. The multi-employer computation on Schedule 1-A line 4c
     needs settling before the figure is final.
- **Questions put to the client.** (Answers to be appended here as they arrive.)
  - [ ] Confirm whether he was paid by **VoiceCapital Inc** during 2025, and ask for the form.
  - [ ] Ask for the **business expenses** behind the contractor work — vehicle/fuel, phone, and
        anything else — and whether he kept a mileage log.
  - [ ] Ask what the **contractor work actually was**, so the Schedule C's principal business and
        code are right and so we know whether it is the same activity as the prior year's catering.
  - [ ] Ask for the **Form 1095-A as an original PDF** from the Marketplace, not a photograph.
  - [ ] Ask whether he had **tips at every job**, and ask for final pay stubs or a payroll summary
        for the employer that reported none in box 7.
  - [ ] Ask whether he actually made any **estimated tax payments** in 2025 — his organizer says
        "yes" and then explains that he owes money, which are different things.
  - [ ] Ask about the **Delaware LLC**: its name, whether it traded in 2025, and whether it has its
        own EIN or bank account.
  - [ ] Confirm the **address** to use on the return.
- **What the prior-year return established.** The 2024 return is the firm's own work and it settles
  several things the 2025 documents never mention:
  - Filing status **Single**; no dependants; standard deduction; Florida only, **no state return**.
  - A **Schedule C** existed, with the "started this business" box ticked for 2024 — **that box must
    not be ticked again for 2025.**
  - Every Schedule C deduction sat in **`Other expenses` (line 27a, itemised in Part V)** and
    nothing on a named line. That is **the firm's own convention**, not an outside preparer's, and
    the reproduce-the-prior-year method says to follow it unless there is a reason not to.
  - **A qualified-business-loss carryforward runs into 2025** — the 2024 Form 8995 closed with a
    negative total on its last line. Nothing in the 2025 documents points at it; it is only
    knowable from that return.
  - The 2024 return carried an **excess advance premium tax credit repayment**, with coverage in
    some months and not others.
- **What was decided.** Nothing was computed. **Block A came back blocked**, so the review stopped
  at the question list rather than producing figures — per the firm's rule against preparing around
  a hole.

### Outstanding items (CI-only — never in the SOP)

- 🔴 **Get the 2025 Form 1095-A read** — it is the single thing standing between us and a computable
  return, and it is already in Double.
- 🔴 **Settle the VoiceCapital 1099-NEC** — the firm's own Drive can answer this faster than the
  client can.
- 🔴 **Collect the Schedule C expenses** — the organizer never asked for them.
- ⚠️ **Establish the multi-employer tips computation** before claiming the deduction.
- ⓘ The Delaware LLC has been sitting unexplained in his file since April 2025.
- ⓘ The **Form 8821** prepared in June 2025 has no recorded outcome.

### Information still needed

- [ ] The Delaware LLC's name, status and 2025 activity.
- [ ] Whether the Form 8821 was ever signed and filed, and what it covers.
- [ ] Whether the IRS installment agreement is still live, and for which years.
- [ ] Boxes 15–17 on each 2025 W-2, to close the out-of-state question for good.
- [ ] Whether the catering activity continued in 2025 or was replaced by the contractor work.

## 7. Links

- **Double client:** [Valentin Volzhanskiy — id 710663](https://app.doublehq.com/close?cid=710663)
- **Double tax project:** [2025 Taxes — project 219347](https://app.doublehq.com/tax-return?cid=710663&projectId=219347)
- **Double case note:** none.
- **Google Drive folder (sensitive vault):** `Valentin Volzhanskiy` under Julia's client tree.
- **Working paper for the return:** [`tax-returns/valentin-volzhanskiy/2025-form-1040.md`](../../tax-returns/valentin-volzhanskiy/2025-form-1040.md)
- **Related SOPs:** [`form-1040-preparation.md`](../../sops/form-1040-preparation.md)
