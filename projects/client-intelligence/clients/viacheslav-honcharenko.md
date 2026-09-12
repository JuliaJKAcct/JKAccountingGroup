# Viacheslav Honcharenko

> **Status:** Active · **Owner:** Firm · **Last updated:** 2026-09-12

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

> ✅ **FIRST FULL HISTORICAL SWEEP COMPLETED 2026-09-12.** Gmail searched unbounded (no date
> filter) by every surname spelling + both known emails — 15 threads, resultCountEstimate matched
> returned count, read to exhaustion, oldest hit 2025-04-26. Google Drive searched by name (two
> pages) — every hit reviewed. Double fully re-read: `get_client`, `list_client_properties`,
> `list_notes` (0 notes), `list_contacts`, `list_activity_log` (9/9 events, full history since
> client creation), `list_projects`, `list_tasks` (12/12), `list_files` (16/16). **Ping: genuinely
> empty, not unsearched** — `resolve_person` found the client, but `search_meetings` scoped to his
> Ping client ID returned zero results, and an org-wide semantic search for his name/business
> returned no results specific to him (the org-wide "matches" were keyword collisions with other
> clients' unrelated meetings) — `list_action_items` also returned zero. The client simply has no
> recorded meetings in Ping's index (169 org meetings / 111 accessible recorded events, none his).

## 1. Snapshot

- **Business name:** Viacheslav Honcharenko — an **individual** client
- **Entity type:** Individual taxpayer — Form 1040 _(Double: `Account Type = Individual`, `Tax Return Type = 1040`, read 2026-08-14)_
- **Home state:** **Florida** — he holds a **Broward County** business tax receipt (§5)
- **Industry / what they do:** ⚠️ **He has business activity** — a Broward County business tax receipt approved 2026-07-07, and **1099 income from at least two payers** (§5). What the business actually does is _(pending)_
- **Primary language:** **Russian** — the firm writes to him in Russian _(Lilian's 2026-04-12 email)_
- **Our engagement (services we provide):** individual income tax (1040). Bookkeeping **N/A**, `1099 Preparation = false`, `Annual Report = false` _(Double properties)_
- **Fiscal year-end:** calendar year
- **Accounting platform:** Double `platform: none` — **no QuickBooks connected** _(2026-08-14)_

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| The client | Double client (link below) |
| **A dependent daughter**, added to the 2025 organizer | Double — 🔒 her **date of birth and SSN** are in the migrated note and are recorded **nowhere** here |
| A second adult whose driver's licence is on file _(surname spelled differently again)_ | Double / TaxDome documents. **Confirmed 2026-09-12: this is a second Double portal contact with tax access enabled** (`hasTaxAccess: true`) — consistent with a spouse/partner rather than a one-off document upload |
| Assigned staff | **Lilian Gonzalez** _(Double)_ |

- **Double client:** [app.doublehq.com/close?cid=710665](https://app.doublehq.com/close?cid=710665)
- **Double case note:** none — no agency matter has been worked for this client

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| **TaxDome** (legacy) | Where the 2025 organizer and documents actually live | n/a | ⚠️ 2025 organizer completed **in TaxDome on 2026-03-31**, not Double (§4) |
| Double client portal | The current portal | n/a | `Organizer Status = Completed` mirrors the TaxDome event |
| Broward County BTExpress | Business tax receipt | n/a | Applied 2026-07-06, **approved 2026-07-07** (§5) |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** ⚠️ _(unsettled — he has a county business tax receipt and 1099 income; whether anything he does is subject to Florida sales tax has never been established)_

### Payroll
- **Applies?** No _(Double)_

### Bookkeeping & monthly close
- **Applies?** **No — `Bookkeeping = N/A`** _(Double)_. ⚠️ But he has business activity (§5), so **who keeps those books, if anyone, is an open question.**

### Income tax
- **Applies?** **Yes**
- **Return type(s) & deadlines:** **Form 1040**, calendar year. ⚠️ **`Tax Return Type` says plain `1040`, but he received 1099s as a payee** (§5) — that is Schedule C or Schedule 1 territory. Both readings are recorded; **the fact is unsettled and must be confirmed, not assumed either way.**
- **Our role:** the firm prepares and files
- **Current status:** 🔴 **2025 return not filed.** Double's "2025 Taxes" project is **`waitingOnClient`**, `filedAt` empty, **original** due date 2026-04-15. ⓘ **An extension is very likely on file** — the firm's own 2026-04-12 email to him says *"мы работаем над продлением подачи Вашей налоговой декларации"* (we are working on the extension), and Lilian assigned "File Extension" tasks across the roster in May 2026. **With a 4868 the deadline is 2026-10-15 and he is not late** — confirm the 4868 rather than repeating "overdue".
- **Organizer status:** **Completed 2026-03-31 in TaxDome.**
- **Process notes (→ future SOP):**
  - **A dependent daughter was added for 2025** _(Lilian, 2026-04-07)_ — first dependant on record, so filing status and credits may both move.

### Licenses & other filings
- **Applies?** ⚠️ **Yes — a Broward County business tax receipt**, approved 2026-07-07. County BTRs **renew annually (Florida's run to 30 September)**, so this is a recurring obligation, not a one-off.

## 5. Key facts & quirks

> ⚠️ **Order these by consequence — only the first FOUR are published.** Both the Knowledge
> Hub and the client-intelligence review dashboard render **only the first four top-level
> bullets** of this section (and of §6's "Outstanding items"); a fifth never appears on
> either. So put first whatever would cause the worst mistake if someone didn't know it —
> **not** the oldest, and **not** whatever was added last. **Adding a bullet is a decision
> about where it goes**; appending to the end means the team never sees it. The cap lives in
> `clientCard()` — see the [render README's parsing contract](../../../.claude/skills/client-intelligence/render/README.md).

- 🔴 **HE IS NOT A PLAIN 1040 CLIENT — HE HAS BUSINESS ACTIVITY, AND DOUBLE'S COLUMNS DO NOT SHOW IT.** He uploaded **1099s from THREE payers** on 2026-03-31 — Maxrating LLC, OPTIC GOLD INC, and **a third payer not previously recorded here: PRO MANAGEMENT AGENCY LLC** (Double `list_files`, confirmed 2026-09-12) — plus a **Home Office Deduction** worksheet the same day. Liudmyla separately listed him among the **2025 W-9 requests for Optic Gold** in January 2026. **Broward County approved a business tax receipt in his name on 2026-07-07.** Double still reads `Tax Return Type = 1040`, `Bookkeeping = N/A`.
  🔵 **New lead, 2026-09-12 sweep: Pro Management Agency LLC sits inside a cluster of businesses this firm already serves for one person, Sergey Karpenko.** Karpenko's personal inbox (found in Gmail, not written here) is cc'd on billing/business correspondence for **Best Broker Realty LLC** (706712 — the SAME company Honcharenko's own Double portal-contact record is separately linked to, per `list_contacts`), **Pro Title Agency LLC** (706716 — whose admin@protitleagency.com correspondence explicitly calls Julia "Sergey's Accountant" and "Sergey's CPA"), **Optic Gold Inc** (706702), and **VoiceCapital Inc** (710725); a fifth entity, "Paylite," appears in the same billing cc chain with no Double record found yet. **Pro Management Agency LLC itself was dissolved 2026-04-29** (Sunbiz Doc #L24000494171, notice to the firm). **And the SAME DAY (2026-07-06) the firm filed Honcharenko's Broward BTR, it also filed one for "Sergey A Karpenko" personally** — both confirmation emails landed in one Gmail thread. **The Honcharenko↔Karpenko relationship itself is NOT established** (contractor? employee? colleague? no direct email between them found) — but the pattern points at real-estate/title-adjacent work inside Karpenko's group rather than a stand-alone business. **Settle the Schedule C position — and who Karpenko is to this client — before preparing anything.**
- 🔴 **WHAT THE 2025 RETURN IS WAITING ON IS ALREADY WRITTEN DOWN — DO NOT ASK HIM AGAIN.** Lilian emailed him on **2026-04-12** (in Russian): the firm's tax software **flagged an error in at least one of the names** while filing the extension. He replied on **2026-04-13 and 2026-04-14** through the TaxDome thread *"Недостающая информация — налоговая декларация за 2025 год"*. **Read that thread first** — the answer may already be in it.
- ⚠️ **The surname is transliterated at least three ways** — Honcharenko, Goncharenko, and `goncharencko` in his own email address; a second adult's licence on file reads **"Honarenko"**. Search every spelling before concluding a source has nothing, and expect the name mismatch to be exactly what the tax software objected to.
- ⚠️ **A dependent daughter was added for 2025** _(Lilian, 2026-04-07)_. The prior year is **not** a template: a first dependant moves filing status, the Child Tax Credit, and any care or education credits. 🔒 Her date of birth and SSN are in the migrated note and are recorded nowhere here — read them from Double if a filing needs them.
- **The 2025 organizer lives in TaxDome, not Double.** Completed there 2026-03-31, with documents (licences, 1099s, a mortgage statement, ALTA/lender documents) attached to that account.
- **He holds a Broward County business tax receipt**, so a **county BTR renewal** is a live annual obligation nobody has assigned.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2026-08-14 — **File created**, then **corrected the same day.** The first version concluded "no business activity" and "nobody wrote down what the return is waiting on" from a six-day Gmail window; an independent review falsified both. A wider Gmail pass (2026-03 → 2026-08) produced the entries below. _(Worked by Lilian.)_
  - **2026-03-31 — organizer completed in TaxDome**, with documents uploaded the same day: two driver's licences (his and a second adult's), **1099s from Maxrating LLC and OPTIC GOLD INC**, a mortgage statement, and ALTA/lender documents.
  - **2026-04-07 — the migrated TaxDome note.** _(Lilian.)_ A **dependent daughter** was added to the 2025 organizer.
  - **2026-04-12 — Lilian emailed him in Russian** about the 2025 extension: the tax software **reported an error in at least one of the names**. He replied **2026-04-13** (with his name spelled out) and again **2026-04-14** asking whether there was any news.
  - **2026-07-06 → 07-07 — Broward County BTExpress**: business tax receipt applied for and **approved**.
- **2026-01-14 — earlier, and worth knowing:** Liudmyla asked Optic Gold to collect **2025 W-9s**, listing him among the payees. That is the other side of the 1099 he later uploaded.
- 2026-09-12 — **first full historical sweep (Lilian's session).** Double: `list_notes` returned 0 notes (none exist); `list_contacts` (2, one with tax access — see §2); `list_activity_log` read in full (9/9 events, since client creation 2026-05-19); `list_tasks` (12/12, all project-checklist tasks `notStarted` — no "Extension Filed" nonclosing task exists for this client, unlike Iurii Iakovenko's, but the **file itself (`2025 4868 Ext.pdf`) exists in the File Library, confirming the extension was actually filed**); `list_projects` unchanged (`waitingOnClient`, moved there 2026-08-04 by Julia, from `inProgress` since 2026-06-29 per Lilian). Gmail searched unbounded by every surname spelling: found a **2025-04-26 "Conference call with Julia CPA" invitation** naming Sergey Karpenko (admin@protitleagency.com) as organizer, with Honcharenko among the invitees — the first documented link between him and Pro Title Agency LLC's principal. Broadened search on "Sergey Karpenko" / "zhukbanda" (the email cc'd across several other firm clients' invoices) surfaced the Karpenko-cluster finding written into §5 above. Google Drive: his folder confirmed (two parallel copies exist — one under Julia's Drive, one under Maria Zavarce's, both from the 2026-05 TaxDome-to-Drive migration batch — a duplicate-folder pattern also seen on other backfilled clients, not itself concerning). Ping: `resolve_person`, `search_contacts`, and `search_meetings` (both client-scoped and org-wide) all returned no meetings genuinely about this client — recorded as a confirmed negative, not an unsearched gap.
- **Nothing further was found in the sources actually searched.** Every source reached in this pass — Double (all planes), Gmail (unbounded), Google Drive, Ping — either returned material or a confirmed empty result; none was left unsearched.

### Tax year 2025 — the review

- **Filing position:** Form 1040, **with a dependant for the first time on record**, and **with 1099 income** whose treatment is unsettled.
- **Organizer:** Completed 2026-03-31 (TaxDome).
- **Status:** `waitingOnClient`, unfiled; extension very likely on file, unconfirmed.
- **The blocker on record:** a name mismatch the tax software rejected (2026-04-12).

### Outstanding items (CI-only — never in the SOP)

- 🔴 **Read the TaxDome thread from 2026-04-13/14 before contacting him.** The firm asked, he answered, and nobody recorded the outcome. Asking again is the failure `method.md` rule 1 exists to prevent.
- 🔴 **Settle the Schedule C position** — 1099s from THREE payers (see §5) and a county business tax receipt, against a Double column that says plain `1040`.
- 🔴 **Find out who Sergey Karpenko is to this client** (2026-09-12) — the evidence points at his business activity being connected to Karpenko's group (Best Broker Realty, Pro Title Agency, Optic Gold, VoiceCapital, the now-dissolved Pro Management Agency), but the nature of the relationship (contractor, employee, colleague) is unconfirmed. This likely settles the Schedule C question above once known.
- [x] **Confirm the 2025 Form 4868 is on file** — **YES, confirmed 2026-09-12**: `2025 4868 Ext.pdf` exists in the Double File Library _(Double `list_files`, 2026-09-12)_. Deadline is 2026-10-15.
- **Assign the Broward County BTR renewal** — it is annual, and nobody owns it.

### Information still needed

- [ ] What the business does, and whether it needs a Schedule C
- [ ] Who Sergey Karpenko is to this client, and what the third 1099 payer (Pro Management Agency LLC) actually paid him for
- [ ] Who the second adult on the documents is (spouse? the daughter?)
- [ ] Whether the name mismatch was resolved and the extension accepted
- [ ] Whether sales tax touches any of the activity
- [x] Ping, Drive, and everything before 2026 — **swept 2026-09-12, first full historical pass, COMPLETE** (see banner and §6 log)

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710665](https://app.doublehq.com/close?cid=710665)
- **Double tax project (2025):** [tax-return?cid=710665&projectId=219349](https://app.doublehq.com/tax-return?cid=710665&projectId=219349)
- **Related — he is a 1099 payee of [OPTIC GOLD INC](./optic-gold.md)**, another client of the firm. Anything about that payment relationship touches both files.
- **Migrated TaxDome notes:** Drive `4. Documents > Viacheslav Honcharenko` — read 2026-08-13.
- **Google Drive folder (sensitive vault):** [Viacheslav Honcharenko](https://drive.google.com/drive/folders/1Xv24MpX7Mr_3o6U29IkpCe4InQ8QZMaF) _(a second, duplicate folder from the 2026-05 migration also exists at [this link](https://drive.google.com/drive/folders/1oXs9Xptwokkww7z1DBJTtFWcMdHZVuAi) — not merged, not investigated further)_
- **Related — possibly connected to [Sergey Karpenko's business cluster](#5-key-facts--quirks)**, which the firm also serves through Best Broker Realty LLC, Pro Title Agency LLC, Optic Gold Inc and VoiceCapital Inc — relationship unconfirmed, see §5 and §6 outstanding items.
- **Related SOPs:** _(pending)_
