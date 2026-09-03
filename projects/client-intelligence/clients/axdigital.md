# AXDIGITAL LLC

> **Status:** Active · **Owner:** Liudmyla · **Last updated:** 2026-09-03
>
> ✅ **First full historical sweep completed 2026-08-22** — Double (client record — 0 notes,
> contacts, activity log — 191 entries), Gmail (full history, business name + both owner-contact
> emails), Ping (`resolve_person`, org-wide/client-scoped `search_meetings`, `search_contacts`),
> and Google Drive all checked. Primary language remains `_(pending)_`; fiscal year-end settled
> 2026-09-03 (calendar year).

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

- **Business name:** AXDIGITAL LLC
- **Entity type:** **LLC**, taxed as an **S-corp** — Tax Return Type **1120-S** _(Double client properties, 2026-08-11)_
- **Home state:** **Florida — Fort Lauderdale (strong signal)** — a recurring email signature from the business's day-to-day contact places the company's office in Fort Lauderdale, FL _(Gmail, 2026-08-22; exact street address withheld per confidentiality rule)_
- **Industry / what they do:** **E-commerce / marketplace selling on Amazon** — uses an A2X integration to post Amazon settlements/invoices into QuickBooks _(Gmail, recurring A2X digests, full-historical, 2026-08-22)_. The company's 2025 sales channels are **Amazon, eBay and Walmart** — eBay selling-account access was handed to the firm 2026-08-26/27 _(Gmail)_.
  ⛔ **CORRECTION, 2026-09-03 — Turo is NOT this company's activity.** An earlier entry here read the firm's 2026-08-26 mileage request as evidence that AXDIGITAL runs a Turo car-rental operation. **It does not.** Turo is **Oleksiy Bereznyak's own** activity and belongs on his personal return: the request itself distinguishes "every **Turo vehicle**" from "the Dodge listed on **the AX Digital**"; the tracking spreadsheet is titled "Доходы_Расходы Turo **Oleksiy**"; the 2024 mileage thread asks him personally, per car; and on 2026-01-12, replying to a preview of his **1040**, he says the Turo activity ran at a loss for 2025. **The 2025 company books hold no Turo income account and no Turo vehicle** — the only fixed asset is one Dodge Durango. _(Gmail + Double books, verified 2026-09-03.)_
- **Primary language:** _(pending)_ <!-- EN / RU / UA / ES -->
- **Our engagement (services we provide):** bookkeeping (**Monthly**), income tax (**1120-S**), sales tax (**Monthly**), payroll (**Automatic**) _(Double client properties, 2026-08-11)_. **Assigned staff: Liudmyla Kazannik.**
- **Accounting platform:** **QuickBooks Online**, connected through Double (`platform: qbo`) _(2026-08-11)_
- **Accounting basis:** **Accrual** — both Double reports render on an accrual basis and the 2025 Form 1120-S Schedule B line 1 is checked Accrual. Real A/R and inventory balances exist; ⚠️ there is **no Accounts Payable account in the chart of accounts at all** _(verified 2026-09-03)_
- **Fiscal year-end:** **31 December** (calendar year — the 1120-S is filed for the calendar year) _(2026-09-03)_

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client (link below) |
| Bookkeeping / day-to-day contact | Double client (link below) |
| _(add roles as needed)_ | |

- **Double client:** [app.doublehq.com/close?cid=706681](https://app.doublehq.com/close?cid=706681)
- **Double case note** _(only if this client has a matter being tracked start to finish — see the [`double-mcp`](../../../.claude/skills/double-mcp/) skill §7):_ _(note title + ID)_

## 3. Systems & access

Which systems we use for this client and **where the credentials live** (a Drive
link). Never write the credential itself here.

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| QuickBooks Online (via Double) | Bookkeeping ledger | _(pending — Drive link)_ | Connected — `platform: qbo` _(2026-08-11)_ |
| Sales-tax portal | Filing sales tax | _(pending — Drive link)_ | _(pending)_ |
| Bank | Statements / reconciliation | _(pending — Drive link)_ | _(account ending in ####)_ |
| Payroll | _(pending)_ | _(pending — Drive link)_ | _(pending)_ |
| eBay | Third sales channel (alongside Amazon and Walmart) | _(pending — Drive link)_ | Account-access handover to the firm underway 2026-08-26/27 _(Gmail, 2026-08-26/27)_ |
| _(add systems as needed)_ | | | |

## 4. Obligations & recurring processes

The recurring work the firm does for this client. **Each obligation below becomes
the raw material for that client's SOP.** Fill the ones that apply; mark the rest
"Applies? _(pending)_" or "Not applicable."

### Sales tax
- **Applies?** **Yes** _(Double client properties, 2026-08-11)_
- **Frequency:** **Monthly** _(same source)_
- **Jurisdiction(s):** _(pending)_
- **Frequency & due date:** _(pending)_ <!-- e.g. monthly, due the 20th -->
- **Agency & portal:** _(pending)_
- **Form:** _(pending)_
- **Our role:** Firm staff prepare monthly filings; several months (Apr–Aug 2026) show "no tax due" _(Gmail, 2026-08-22)_.
- **Current status:** One 2026-05 incident: sales tax was incorrectly triggered on an out-of-state (Indiana) shipment and was manually removed by staff — the firm's stated position is that out-of-state shipments don't require tax collection unless an economic-nexus revenue threshold is crossed.
- **Process notes (→ future SOP):** _(pending)_

### Payroll
- **Applies?** **Yes — Automatic** _(Double client properties, 2026-08-11)_
- **Provider / frequency:** **Gusto AutoPilot**, plus a company-sponsored **401(k) plan through Human Interest**, onboarded January 2025 with at least one enrolled employee _(Gmail, 2026-08-22)_.
- **Our role:** _(pending)_
- 🔑 **Headcount, 2025: ONE employee — the owner.** Every 2025 payroll journal entry carries a single Regular Wages line with one net-pay debit and employer Social Security/Medicare computed on that one figure, across 23 pay periods. So on the 1120-S the whole wage cost is **officer compensation** and *Salaries and wages* is legitimately zero. **Re-check this for 2026** — the work-authorisation item below implies a second person may since have been added. _(Double payroll JEs, verified 2026-09-03.)_
- **Process notes (→ future SOP):** An open/unresolved 2026-08 item: the day-to-day contact asked what to do about an employee's payroll/W-2 because a work-authorization renewal for a Ukrainian worker had not come through; a call was scheduled 2026-08-10 to discuss, but no outcome/resolution was found in any source searched.

### Bookkeeping & monthly close
- **Applies?** **Yes** _(Double client properties, 2026-08-11)_
- **Cadence:** **Monthly**
- **Categorization rules / quirks:** _(pending)_
- **Process notes (→ future SOP):** _(pending)_

### Income tax
- **Applies?** **Yes** _(Double client properties, 2026-08-11)_
- **Return type(s) & deadlines:** **1120-S**, calendar year. Original due date is 15 March (16 March for TY2025, the 15th being a Sunday); **extended to 15 September** where Form 7004 is filed. **The firm's practice for this client is to extend every year** — Julia to the client, 2026-03-11: *"Filing extensions, like we discussed. It will give us until September."*
- **TY2025 extension:** ✅ **filed** — `2025 7004 EXT.pdf` in Double's file library _(2026-09-03)_
- **Our role:** the firm prepares. TY2025 preparer of record on the Double project is **Irina Jandieri**; assigned staff for the client is Liudmyla Kazannik.
- **Process notes (→ future SOP):** _(pending)_

### Licenses & other filings
- **Applies?** _(pending — only the annual-report flag below is known; local licences, BTRs and any BOI obligation are unchecked)_
- **Annual report:** _(not set in Double)_ _(Double client properties, 2026-08-11)_
- **Organizer Status (Double, hand-maintained by Lilian):** N/A (we have QBO access)
- **What & when:** _(pending)_
- **Process notes (→ future SOP):** _(pending)_

### _(Add other recurring obligations as needed)_

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

- 🔴 **THE 2025 1120-S WAS REVIEWED 2026-09-03 AND MUST NOT BE TRANSMITTED AS DRAFTED — nine corrections are open.** The return's *totals* all tie to the books; the errors are in which line figures were typed on and in what the return therefore asserts. **Two of them are on the Schedule K-1 and would be relied on by whoever prepares the owner's 1040.** The findings, each with its fix, are in the working paper: [`projects/tax-returns/axdigital-llc/2025-form-1120s-review.md`](../../tax-returns/axdigital-llc/2025-form-1120s-review.md). ⛔ **Figures live there, never here.** **The extended due date is 2026-09-15.**
- 🔑 **Turo belongs to the OWNER, not to this company** — see the correction in §1. Any request about Turo vehicles, mileage or income is **1040 work**, and asking about it does not mean something is missing from the 1120-S.
- ✅ **The Double project status is now `readyForReview`** (preparer of record **Irina Jandieri**), which resolves the stale-`notStarted` flag carried here since 2026-08-29. ⓘ It had been **reverted** from In Progress to Not Started on 2026-08-04; the whole prep then ran over email and Drive rather than through Double, so **this client's Double project status has historically lagged the real work — don't read it as the state of play.**
- Named in [`best-broker-realty.md`](./best-broker-realty.md) §5 as one of the entities in the **same owner-group** (the serial-entity owner).
- A tax organizer ("JK 2025 Business Tax Organizer - AXDigital") was unpublished (reverted to draft) on 2026-07-31 — same day as CANDRAMAS's — while the Organizer Status property still reads "N/A (we have QBO access)." _(Double activity log, 2026-08-22)_ ⓘ For an entity return with QBO access an organizer is not what gates the work; the **books** are.
- **Assigned to Liudmyla Kazannik.** Her clients were absent from Client Intelligence entirely until 2026-08-11 — see §6.
- Two Double portal contacts (both full access); one signs consistently as the business's "Project manager," the other is linked in Ping to a combined personal-return client record with the first — consistent with the operating pair being spouses/co-owners. _(Double + Ping, 2026-08-22)_
- A term loan (~$25,000 per a 2026-05 email subject line — figure not otherwise recorded here) exists on the books; several loan-related close tasks ("Uncapped Loan," "AMAZON FIXED RATE LOAN") were marked Done in the same period.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
A running, dated record as we build this profile.

- 2026-08-11 — **File created (seed).** Built from Double's structured client properties during the coverage audit Lilian asked for. **The reason it did not exist before is structural, not accidental:** the weekend sweep's scope list was assembled from Lilian's and Maria's clients, so **every client assigned to Liudmyla was outside it** — seven QuickBooks-connected companies in total. All seven are now in scope. _(Worked by Lilian.)_
- 2026-08-22 — **First full historical sweep (weekend CI sweep, unbounded).** Double: 191 activity-log entries reviewed (most recent 50 in detail, plus a targeted Project-entity pull); 0 notes found. Gmail: full history by business name and both owner-contact emails. Ping: `resolve_person` on both contacts, org-wide + client-scoped `search_meetings`, `search_contacts`. Google Drive: `search_files` with `excludeContentSnippets:true` — confirmed folder + filed documents (1099s, P&L, balance sheet for FY2024). Findings folded into §1/§4/§5 above. No SOP exists for this client. Ping's semantic search for "what does this business do" surfaced no relevant, legible content.
- 2026-08-29 — **Weekend sweep (incremental, baseline 2026-08-22→2026-08-29).** Double: 0 notes; 0 activity-log entries this window (the tax-prep activity below is happening over email/Drive, not logged in Double). Gmail: A2X daily digests (routine); a 2025 tax-return document request sent 2026-08-26 naming Turo vehicles (new business fact, now §1); an eBay account-access exchange 2026-08-26/27 (new system, now §3). `list_projects` re-checked — still `notStarted`, now flagged in §5 as stale relative to the actual work. Chase pass on all three outstanding items — results below.
- 2026-09-03 — **Accuracy review of the prepared 2025 Form 1120-S, at Julia's request.** Read the prepared return against the 2025 and 2024 books pulled from Double, the 2025 payroll journal entries, the Double file library and Julia's Gmail. **Every total ties to the books; nine corrections are open**, two of them on the Schedule K-1 (see the tax-year section below). Three things this settled and folded back into §1/§4/§5: **Turo is the owner's activity, not the company's** (correcting an entry made here 2026-08-26); **2025 headcount is one employee, the owner**; and the **TY2025 extension was filed**. The Double project has moved to `readyForReview` (preparer Irina Jandieri). ⛔ **No figure from the return is recorded in this file** — they are in [`projects/tax-returns/axdigital-llc/2025-form-1120s-review.md`](../../tax-returns/axdigital-llc/2025-form-1120s-review.md). Nothing was written to Double and nothing in the return was changed.

### Tax year 2025 — the review
<!-- Add one per tax year the firm reviews for this client. Records what gated the return,
     every question put to the client AND its answer once it arrives, what a prior-year
     return established, and what was decided. The client's TAX FACTS belong here whatever
     source established them, the organizer included (Lilian, 2026-08-12); the identity block,
     contact details and dollar figures never do (double-mcp §2.2). See the organizer-review skill. -->

**Form 1120-S, calendar year 2025. Extension filed; extended due date 2026-09-15.**
Reviewed 2026-09-03 against the books. ⛔ **All figures are in the
[working paper](../../tax-returns/axdigital-llc/2025-form-1120s-review.md)** — this section
records only what was established and what is still open.

**Established (tax facts, no figures):**
- Accrual method; the return's Schedule B answer matches the basis the books actually render on.
- Sole shareholder, 100%, all year; **no** loans to or from the shareholder; **no** accumulated
  earnings and profits (never a C corporation); **no** shareholder contributions in 2025.
- One employee — the owner — so all wage cost is officer compensation.
- One fixed asset, a vehicle placed in service in 2022 and already fully depreciated, which still
  produces §199A unadjusted basis until 2032 and **must not be removed from the asset schedule.**
- Turo is the owner's personal activity → **his 1040**, not this return.
- 1099s: contract-labour payments were made and 1099s are reported as filed; two 1099 PDFs sit in
  Double's library — **confirm they are the 2025 copies.**

**Open questions put, or to be put, to the client / the preparer:**
1. 🔴 **The 2025 mileage log for the company vehicle.** The return claims 100% business use with
   zero personal miles *and* answers "no written evidence" on Form 4562. Asked of the client
   2026-08-26; **the reply of 2026-08-27 may already contain it — check before asking again.**
2. 🟡 **Is the home-office amount a reimbursement under an accountable plan, or rent paid to the
   shareholder?** Same treatment both years, so it is an established convention — but the answer
   decides whether the owner has rental income on his own return, and §280A(c)(6) would deny him
   the offsetting deduction. **Get it in writing.**
3. 🟡 **Is electronics genuinely the primary product line?** It decides whether the business
   activity code on the return is the right one.
4. 🟡 **Confirm with the bookkeeper that no year-end supplier bill is unrecorded** — there is no
   Accounts Payable account at all on an accrual-basis return with substantial purchases.
5. 🔵 **For his 1040 (separate request):** his prior-year **Form 7203** is needed for opening stock
   basis, and if none exists it must be reconstructed as scoped work.

**Decided:** prior-year conventions are reproduced, not improved — the fixes correct errors only.

### Outstanding items (CI-only — never in the SOP)
Open follow-ups from meetings / emails / calls — e.g. what Julia discussed last,
tasks owed. Keep the **live** list in Double tasks / Ping action items and point to
it here; these never go into the client SOP.

- 🔴 **The Ukrainian employee's work-authorization/payroll question raised 2026-08-04** (call scheduled 2026-08-10) — STILL OPEN, **25 days** pending; a targeted search this window found no outcome or follow-up.
- [x] The reverted "2025 Taxes" project status (Not Started as of 2026-08-04) — **resolved as "prep resumed"**: an active document exchange for the 2025 return ran 2026-08-26/27 (§1/§5), even though the Double project record itself hasn't been updated.
- The unpublished 2025 Business Tax Organizer — confirm intent, same as CANDRAMAS; not re-chased this window (budget).
- 🔴 **2026-09-03 — the nine corrections on the prepared 2025 1120-S are open, and the extended due date is 2026-09-15.** None needs anything from the client except the vehicle mileage log. Owner: whoever transmits. See the [working paper §4](../../tax-returns/axdigital-llc/2025-form-1120s-review.md).

### Information still needed
The checklist of what's not captured yet — this is what the completeness audit
reports for this client.

- [x] What the business actually does — e-commerce/Amazon marketplace selling (§1)
- [x] Home state — Florida, Fort Lauderdale (strong signal, §1)
- [x] Fiscal year-end — calendar year (§1, 2026-09-03)
- [ ] Owner's primary language
- [x] Contacts and their roles — two portal contacts, consistent with spouses/co-owners (§5)
- [ ] Bank/card feeds and where credentials live (Drive vault link) — Drive folder confirmed, credentials link still pending
- [x] Whether the client belongs to a known owner-group already profiled here — yes, the `best-broker-realty.md` serial-entity group (§5)
- [ ] Whether Liudmyla keeps working notes for this client that should feed this file

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=706681](https://app.doublehq.com/close?cid=706681)
- **Double case note** _(only if this client has a matter being tracked start to finish — see the [`double-mcp`](../../../.claude/skills/double-mcp/) skill §7):_ _(note title + ID)_
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending — links into ../sops/ once written)_
