# AXDIGITAL LLC

> **Status:** Active · **Owner:** Liudmyla · **Last updated:** 2026-10-07
>
> ✅ **First full historical sweep completed 2026-08-22** — Double (client record — 0 notes,
> contacts, activity log — 191 entries), Gmail (full history, business name + both owner-contact
> emails), Ping (`resolve_person`, org-wide/client-scoped `search_meetings`, `search_contacts`),
> and Google Drive all checked. Fiscal year-end and primary language remain `_(pending)_`.

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
- **Industry / what they do:** **E-commerce / marketplace selling on Amazon** — uses an A2X integration to post Amazon settlements/invoices into QuickBooks _(Gmail, recurring A2X digests, full-historical, 2026-08-22)_. ⚠️ **New 2026-08-26:** a 2025 tax-return document request from the firm asks for **Turo vehicle mileage** (multiple Turo vehicles plus one named vehicle) as of 2025-12-31 — the client also runs a **Turo car-rental operation**, not e-commerce alone. An **eBay** selling-account access handover was also underway 2026-08-26/27, so eBay is a third sales channel alongside Amazon and Turo. _(Gmail, 2026-08-26/27.)_
- **Primary language:** _(pending)_ <!-- EN / RU / UA / ES -->
- **Our engagement (services we provide):** bookkeeping (**Monthly**), income tax (**1120-S**), sales tax (**Monthly**), payroll (**Automatic**) _(Double client properties, 2026-08-11)_. **Assigned staff: Liudmyla Kazannik.**
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** **QuickBooks Online**, connected through Double (`platform: qbo`) _(2026-08-11)_

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
| eBay | Third sales channel (alongside Amazon, Turo) | _(pending — Drive link)_ | Account-access handover to the firm underway 2026-08-26/27 _(Gmail, 2026-08-26/27)_ |
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
- **Process notes (→ future SOP):** An open/unresolved 2026-08 item: the day-to-day contact asked what to do about an employee's payroll/W-2 because a work-authorization renewal for a Ukrainian worker had not come through; a call was scheduled 2026-08-10 to discuss, but no outcome/resolution was found in any source searched.

### Bookkeeping & monthly close
- **Applies?** **Yes** _(Double client properties, 2026-08-11)_
- **Cadence:** **Monthly**
- **Categorization rules / quirks:** _(pending)_
- **Process notes (→ future SOP):** _(pending)_

### Income tax
- **Applies?** **Yes** _(Double client properties, 2026-08-11)_
- **Return type(s) & deadlines:** **1120-S**; deadlines _(pending)_
- **Our role:** _(pending)_
- **Process notes (→ future SOP):** _(pending)_

### Licenses & other filings
- **Applies?** _(pending — only the annual-report flag below is known; local licences, BTRs and any BOI obligation are unchecked)_
- **Annual report:** _(not set in Double)_ _(Double client properties, 2026-08-11)_
- **Organizer Status (Double, hand-maintained by Lilian):** N/A (we have QBO access)
- **What & when:** _(pending)_
- **Process notes (→ future SOP):** _(pending)_
- **New property read this sweep, not previously recorded:** **Signature = Signed** _(Double client properties, 2026-09-12)_ — consistent with the 2025 return having been filed with a client e-signature on 2026-09-08 (§5).

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

- Named in [`best-broker-realty.md`](./best-broker-realty.md) §5 as one of the entities in the **same owner-group** (the serial-entity owner).
- **Assigned to Liudmyla Kazannik.** Her clients were absent from Client Intelligence entirely until 2026-08-11 — see §6.
- ⚠️ **SETTLED, 2026-09-26 — the "two Double portal contacts" description below is likely wrong: `list_contacts` has now returned only ONE contact (Oleksiy Bereznyak, linked to client ids 706681 and 710625) on TWO consecutive weekly sweeps (2026-09-19 and 2026-09-26).** Treat this file's earlier "two portal contacts, consistent with spouses/co-owners" claim (next bullet, kept for the record) as superseded unless a further check finds a second contact was removed rather than never existing as described. _(Double `list_contacts`, 2026-09-19 and 2026-09-26.)_
- Two Double portal contacts (both full access); one signs consistently as the business's "Project manager," the other is linked in Ping to a combined personal-return client record with the first — consistent with the operating pair being spouses/co-owners. _(Double + Ping, 2026-08-22 — see the bullet above; not reproduced by `list_contacts` in either of the last two sweeps.)_
- A term loan (~$25,000 per a 2026-05 email subject line — figure not otherwise recorded here) exists on the books; several loan-related close tasks ("Uncapped Loan," "AMAZON FIXED RATE LOAN") were marked Done in the same period.
- ✅ **RESOLVED — the 2025 return went from "actively being prepared" to FILED, with both the company AND the owner's personal returns done together.** The progression: `list_projects`/activity log now shows **In Progress → Ready for Review (2026-09-03, Irina Jandieri) → Waiting on Client Approval (2026-09-07, Lilian) → Filed (2026-09-08, Lilian; `filedAt` 2026-09-08T22:53:16Z)**, with the signed PDF (`AXDIGITALLLC2025.pdf`) filed into Drive the same day. A 2026-09-06 email from Julia to the client and Lilian says the tax return is ready for both "Ax Digital and Personal," with a Loom video walkthrough prepared for the client — confirming the owner's individual 1040 was prepared alongside the company return in the same push (not a separate later engagement). Along the way (2026-09-01), the **"Prepare and send organizer"** and **"Prepare and send engagement letter"** tax-project tasks were both marked Done, and a 2026-09-03 email thread shows Julia and the client resolving a home-office square-footage question. _(Double `list_activity_log`/`list_projects` + Gmail, 2026-09-12.)_
- ✅ **A 2026-09-02 client-flagged duplicate-payment appearance on a QuickBooks invoice was investigated and confirmed resolved by 2026-09-08** — the payment had posted once; the duplicate was a QuickBooks display artifact, not an actual double payment. _(Gmail, "invoice 1393" thread, 2026-09-02/08.)_
- A tax organizer ("JK 2025 Business Tax Organizer - AXDigital") was unpublished (reverted to draft) on 2026-07-31 — same day as CANDRAMAS's — while the Organizer Status property still reads "N/A (we have QBO access)." _(Double activity log, 2026-08-22)_ ⚠️ **Superseded by the above**: the organizer/engagement-letter tasks were completed 2026-09-01 and the return has since been filed, so this no longer looks like a live gap — kept for the record.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
A running, dated record as we build this profile.

- 2026-08-11 — **File created (seed).** Built from Double's structured client properties during the coverage audit Lilian asked for. **The reason it did not exist before is structural, not accidental:** the weekend sweep's scope list was assembled from Lilian's and Maria's clients, so **every client assigned to Liudmyla was outside it** — seven QuickBooks-connected companies in total. All seven are now in scope. _(Worked by Lilian.)_
- 2026-08-22 — **First full historical sweep (weekend CI sweep, unbounded).** Double: 191 activity-log entries reviewed (most recent 50 in detail, plus a targeted Project-entity pull); 0 notes found. Gmail: full history by business name and both owner-contact emails. Ping: `resolve_person` on both contacts, org-wide + client-scoped `search_meetings`, `search_contacts`. Google Drive: `search_files` with `excludeContentSnippets:true` — confirmed folder + filed documents (1099s, P&L, balance sheet for FY2024). Findings folded into §1/§4/§5 above. No SOP exists for this client. Ping's semantic search for "what does this business do" surfaced no relevant, legible content.
- 2026-08-29 — **Weekend sweep (incremental, baseline 2026-08-22→2026-08-29).** Double: 0 notes; 0 activity-log entries this window (the tax-prep activity below is happening over email/Drive, not logged in Double). Gmail: A2X daily digests (routine); a 2025 tax-return document request sent 2026-08-26 naming Turo vehicles (new business fact, now §1); an eBay account-access exchange 2026-08-26/27 (new system, now §3). `list_projects` re-checked — still `notStarted`, now flagged in §5 as stale relative to the actual work. Chase pass on all three outstanding items — results below.
- 2026-09-12 — **Weekend sweep (incremental, baseline 2026-08-29→2026-09-12; the 2026-09-05 run never completed — see `sweep-state.md`).** Double: 0 notes; activity log shows the **2025 Taxes project completing its whole lifecycle to Filed (2026-09-08)** plus organizer/engagement-letter tasks marked Done (2026-09-01) — now §5; a new "Signature = Signed" property (§4). Gmail: 19 threads this window — the Turo/personal-return prep converged into a filed return with a client walkthrough video (§5); a duplicate-payment question resolved (§5); routine A2X/Gusto/QuickBooks notices; **no new correspondence on the Ukrainian employee's work-authorization/payroll question**. Ping: `search_meetings` scoped to "AxDigital"/Turo/eBay returned only unrelated pre-baseline content (mostly a different client's Turo discussion). Chase pass on the one remaining outstanding item — results below; still open.
- 2026-09-26 — **Manual incremental sweep, baseline 2026-09-19→2026-09-26.** Double: `list_activity_log` shows one entry — a routine September month-end-close status change (2026-09-21); `list_notes` still zero; `list_client_properties` unchanged (Signature still Signed); `list_contacts` **re-run and again returned only ONE portal contact** (Oleksiy Bereznyak) — now confirmed on two consecutive sweeps, so the discrepancy against §5's "two contacts" claim is treated as **settled** (§5 updated). Gmail: a targeted search for "AxDigital"/Bereznyak, bounded after:2026/09/19, found only routine A2X daily digests and a routine Gusto payroll confirmation — **no correspondence on the Ukrainian employee's work-authorization/payroll question.** Ping: org-wide `search_meetings` for the Ukrainian-employee question not independently re-run this pass (same non-result pattern on every prior sweep; budget).
- 2026-09-19 — **Manual incremental sweep, baseline 2026-09-12→2026-09-19.** Double: `list_activity_log` shows one entry — "Monthly Sales Tax" task marked Done 2026-09-16 (routine, not tracked); `list_notes` still zero; `list_client_properties` unchanged (Signature still Signed); `list_projects` unchanged (2025 Taxes still `filed`, `filedAt` 2026-09-08); `list_contacts` this pass returned **only one** portal contact (Oleksiy Bereznyak) for this client id, where §5 previously described "two Double portal contacts" — flagging the discrepancy rather than resolving it (not independently confirmed either way this pass, out of budget). Gmail: a targeted search for "AxDigital"/Bereznyak, bounded after:2026/09/12, found routine A2X digests, a routine sales-tax payment notice, and a **new minor operational item**: the client asked 2026-09-15 why QuickBooks payments were showing but not depositing to the bank account; Julia replied the same day that the merchant account is under a delay/verification review and to wait a few days — **not a tracked open item, monitor only, no action needed from this file.** No new correspondence found on the Ukrainian employee's work-authorization/payroll question. Ping: org-wide `search_meetings` for the Ukrainian-employee question returned no legible, client-scoped result.

### Tax year YYYY — the review
<!-- Add one per tax year the firm reviews for this client. Records what gated the return,
     every question put to the client AND its answer once it arrives, what a prior-year
     return established, and what was decided. The client's TAX FACTS belong here whatever
     source established them, the organizer included (Lilian, 2026-08-12); the identity block,
     contact details and dollar figures never do (double-mcp §2.2). See the organizer-review skill. -->

- _(pending)_

### Outstanding items (CI-only — never in the SOP)
- 🆕 **2026-10-07 — the IRS income-verification letter, now READ IN FULL (Lilian brought the scan into a session).** It is a **Letter 12C dated 2026-09-24**, addressed to **both spouses**, about their **2025 joint Form 1040** (tax period 202512) — **the owners' personal return, not AXDigital's**. ⚠️ **It carries a DEADLINE, which corrects the 2026-10-03 entry below ("no stated deadline"): reply within 20 days of the letter's date → 2026-10-14.** Without a reply the IRS will not process the return. It asks for: pages 1-2 of the 1040 marked `COPY, DO NOT PROCESS`; the **amounts and dates of every 2025 estimated tax payment**; the documents supporting income and withholding; and a copy of the letter. Routes: fax to the IRS (the number and the cover-sheet fields are on the letter's page 2, `Attention: ICO Rejects Team OSPC`, with the control number), upload at IRS.gov/Connect, or mail to the Ogden address — **one route only; a faxed reply must not also be mailed**. Julia's instruction to Lilian is to pull and print all income paperwork; her note names **one estimated payment made 2026-01-14 from the couple's bank (`USATAXPYMT`, a Q4-2025-style payment)** — the amount stays in Double/Drive. 🔑 **The likely trigger, NOT confirmed:** a 12C is the usual letter when the payments claimed on the return do not match what the IRS has on file, so the check to make is **whether the estimated-payments line on the filed 1040 equals the payments the IRS actually credited to 2025** (a January payment can post to the wrong year or the other spouse's SSN). _(Letter scan + Julia's note, via Lilian, 2026-10-07.)_
  - **Same day — the search for 2025 Forms 1099-INT / 1099-DIV / 1099-B, at Lilian's request.** Searched: the client's 2025 tax folder in Julia's Drive and all its subfolders (TURO, ITPOINT, `Liudmyla Statements 2025`, `1095a`, `Year End`), Drive full-text for the couple's names with `1099-INT`/`1099-DIV`/dividend/interest, Double files on both clients (`710625`, `706681`), Julia's Gmail (the clients' three addresses, attachments since 2026-01-01, and the form names), and Ping email search. **None was found.** Julia's own **2025 1040 checklist** (Drive, `Bereznyak20251040checklist.xlsx`, 2026-09-01) marks 1099-INT, 1099-DIV and 1099-B as **NO — "nothing has arrived for 2025 — ask"**, although the 2024 return carried interest, dividends and a Schedule D. **The only "dividends" on file are from the Ukrainian company (ITPOINT folder: dividend resolution + certificates)** — not a 1099, and the checklist rules them **not 2025 income** (declared April 2026, payable Q2 2026). ⚠️ **Whether the FILED return reports any interest or dividends was not checked** (that needs the return itself). 🔑 **The same checklist, row 52, bears directly on the IRS letter:** the January 2026 payment was **for exactly the 2024 balance due but tagged to 2025, and which year it belongs to was left unresolved** — the likeliest reason the IRS cannot match the estimated payments. **Raised to Julia through Lilian.** ⓘ **Julia started a response folder in Drive on 2026-10-07** holding the letter, the 2025 W-2 and the AXDIGITAL K-1.
  - **Same day — Turo, and how to tell what was reported to the IRS.** The couple's Turo material for 2025 is in the **`TURO` subfolder** of the client's 2025 tax folder in Julia's Drive: each spouse's Turo **`2025 tax summary`** and **`2025 earnings information`** screenshots (client uploads), the client's two Turo expense workbooks (`Turo Alex 2025.xlsx`, `Turo Mila 2025.xlsx`), Julia's `Bereznyak2025TuroScheduleC.xlsx`, and the vehicle insurance settlement PDF. **No Turo Form 1099-K is on file for either host account** (the checklist already marked it missing). Turo issues a **1099-K per host account** only above the federal threshold — **for 2025, more than $20,000 gross AND more than 200 transactions** (the threshold the July 2025 act restored; *stated from general knowledge, not yet checked against the 2025 Form 1099-K instructions*). **The income is reportable either way** — per Julia's `Bereznyak2025TuroScheduleC.xlsx` and her checklist, Turo's gross earnings went on each spouse's Schedule C (the filed return itself not checked). 🔑 **The definitive way to see every information return filed under each spouse's SSN for 2025 — Turo 1099-K, 1099-INT, 1099-DIV, 1099-B, W-2, 1099-NEC — is the IRS Wage & Income transcript**, which is also what the IRS matches the return against. **Recommended to Julia, via Lilian, before the 12C reply goes out:** pull both spouses' 2025 transcripts (the clients' own IRS online account, or the firm through an authorization — **Julia under a Form 2848 or 8821; Lilian only under a Form 8821**, `projects/sops/firm-identity.md` §4). **Not yet done.**
  - **Response package status, 2026-10-07:** Lilian is assembling and printing the documents. ⚠️ **Whether the package has been SENT is not confirmed** — her message read *"uno los he enviado"*, which is most likely a dictation of *"aún no los he enviado"* (not sent yet); asked, answer pending. **Reply deadline 2026-10-14.**
  - **Update 2026-10-07 (later) — the reply route is decided: NOT yet sent.** Lilian is building **one combined PDF** (the letter + the requested documents + a one-page cover statement listing the 2025 estimated payment), to email to the client with instructions so **the client uploads it himself at IRS.gov/Connect** under the letter's control number (the online route printed on the letter itself). Order agreed: cover statement → copy of the letter → Form 1040 pages 1-2 marked `COPY, DO NOT PROCESS` → payment proof → income documents. ⓘ **Likely better payment proof than the bank line:** Double holds a file named `2025 EST Tax Payment Beneznyak.pdf` (spelling as filed; contents not opened) (on both clients, filed under the TaxDome-era folders) — suggested as the attachment. ⚠️ **The open question stands and should be answered by Julia BEFORE the PDF goes out:** whether the January 2026 payment is really a 2025 estimated payment (as the cover statement will say) or was applied to the 2024 balance — checklist row 52.
  - ✅ **SETTLED 2026-10-07 — the January 2026 payment WAS designated to 2025.** Lilian brought in the **IRS Direct Pay confirmation** (screenshot). TRANSCRIBED IN FULL (account digits omitted): `Signed in as: Oleksiy Bereznyak` · Submitted `01-13-2026 01:53 PM ET` · Payment Status `Scheduled` · Payment Date `January 14, 2026` · Reason for Payment **`Estimated Tax`** · Payment Type **`1040ES (for 1040, 1040A, 1040EZ)`** · Tax Year for Payment **`2025`** · Bank `Bank of America, N.A.` (account masked; not recorded) · confirmation email to the firm's address · confirmation number on file in the screenshot. **Its confirmation number's last digits match the trace ID on the 2026-01-14 `USATAXPYMT` bank line Julia quoted to Lilian** (compared in session; neither number recorded here) — the same payment. The amount stays in Double/Drive. ⇒ **This closes checklist row 52's designation question: it is a 2025 estimated payment.** The status shown is `Scheduled` (as of submission); the bank line shows the debit went through, so if the IRS has not credited it to 2025, that is a misapplication on the IRS side and this confirmation is the evidence. **It goes in the 12C package as the payment proof**, ahead of the bank line.
  - 🔴 **2026-10-07 (evening) — Lilian's draft package reviewed, and THE FILED 1040 ITSELF points at the likely trigger.** On the copy of the filed 2025 Form 1040 in her PDF, **line 26 (estimated tax payments) is BLANK** and **line 31 (`Amount from Schedule 3, line 15`) equals the January payment to the cent** (compared in session) — most likely Schedule 3 line 10, *amount paid with an extension request* (**not confirmed — Schedule 3 was not in the package; and since the return was filed on extension, a separate extension payment of the same amount is not ruled out — Julia to confirm**). The payment was **submitted** as a **1040-ES estimated payment** (Direct Pay, above); how the IRS actually posted it is unconfirmed until the account transcript is pulled. If both hold, the return claims it under a different payment type than it was made. **The reply's cover statement should say so in one sentence** and ask the IRS to apply it to 2025. Draft-package edits advised (Lilian): keep only Copy B of the W-2 and the 1099-NEC; drop the blank K-1 statement page; add the Direct Pay confirmation; footer with control number on every page.
  - **The ITPOINT (Ukraine) documents — read at Lilian's request, 2026-10-07; all three are one-page SCANS, read by rendering (redactor refused: no text layer), renders deleted after. No identifiers recorded here.**
    - `Довідки дивіденти 2025.pdf` — **misnamed: it is Order (Наказ) No. 60 dated 2026-04-10**, executing members' Decision No. 180 to accrue and pay a dividend **out of 2025 profit**, payable Q2 2026. ⇒ **a 2026 item — NOT for the 2025 reply.**
    - `Рішення дивіденти 2025.pdf` — **Decision No. 180 itself, dated 2026-04-10**, same dividend, payable Q2 2026 (its second paragraph misprints the payment window as April **2024**). ⇒ **NOT for the reply** — and it carries the owner's passport, date of birth, Ukrainian tax ID and home address.
    - `Довідка про доходи 2025.pdf` — **salary certificate No. ITP 28 dated 2026-04-08**: the owner has worked at ITPOINT since 2015-10-01, now as director; a month-by-month 2025 table of accrued pay, Ukrainian personal income tax (ПДФО), military levy (військовий збір) and net paid, with annual totals. **Its accrued total at the 2025 average rate ties to Form 1040 line 1h (foreign employer compensation).** ⇒ **the support for line 1h — INCLUDE, with an English summary.** ⚠️ **Observation, not a conclusion:** the **December 2025** accrual is roughly **27× a normal month**; Julia should be ready to explain it if the IRS asks.
    - 🔴 **The support for line 3b (dividends) is NOT on file.** Julia's 5471 workbook cites a *dividend-payment certificate* for the 2025 distribution (paid out of 2024 retained earnings); **no such document was found** in the ITPOINT folder — both "dividend" files are the April 2026 dividend. ⚠️ **And the return's line 3b converts that distribution at the 12/31/2024 rate while the workbook's Schedule R uses the 12/31/2025 rate** (same UAH, two USD figures). **Julia to decide** whether to include dividend support and which conversion stands.
  - **Turo — both hosts' 2025 tax-summary screenshots read.** Each host's **gross earnings are well under the $20,000 threshold assumed above** (not yet verified against the 2025 Form 1099-K instructions), which is consistent with no Turo 1099-K existing. Liudmyla's summary cross-foots (trip earnings + Turo fees = gross). **Include each host's `2025 tax summary` (gross earnings — the figure Schedule C line 1 used per Julia's checklist); leave out the `earnings` chart screens** (net of fees, a different basis that would not tie).
  - **The online route, researched and verified against irs.gov 2026-10-07:** `IRS.gov/Connect` redirects to **IRS Secure Messaging** (eGain) — **not** the Document Upload Tool and not the Online Account. Sign-in is **ID.me**; Letter 12C is itself the invitation. **A preparer may use it for the client only if an approved Form 2848 or 8821 is on file** (Julia: either; Lilian: 8821 only). **No cover sheet is required online** (the letter asks for one only for fax); the control number goes on page 1 of the PDF, in a footer, and in the message body. One combined PDF is fine (no IRS preference stated; up to 1 GB per file). **Only requested documents are processed.** A message with no attachment is closed. **Save the `Success!` screen and the exact PDF sent into Double** — the IRS deletes the thread 30 days after closing it. Avoid Saturday 6–10 p.m. ET (maintenance). The return shows an overpayment, mostly applied to 2026 estimated tax; any refund part follows ~6–8 weeks after the reply is received.
  - 🔴 **2026-10-07 (night) — THE SALARY CERTIFICATE'S DECEMBER LINE APPEARS TO CONTAIN THE 2025 DIVIDEND. A finding for Julia, not a conclusion.** Re-read in full to translate it. Every month Jan–Nov carries Ukrainian personal income tax at exactly **18%** (the salary rate). **December does not:** its income tax equals, to the kopiyka, **5% (Ukraine's dividend rate) on the amount Julia's 5471 workbook records as the 2025 dividend, plus 18% on the small remainder**; its military levy is 5% of the whole month. ⇒ **The certificate's "income accrued" total — which converts to Form 1040 line 1h (foreign employer compensation) — appears to include that dividend, and line 3b reports the same dividend again.** If that reading holds, the return **double-counts the dividend and overstates income** (line 1h would be the salary only), and **this certificate is itself the missing dividend support**, dating the payment to **December 2025** — which bears on the conversion-rate question above. ⚠️ **Raised to Julia through Lilian before the 12C reply goes out**; the letter forbids answering with a 1040-X, so any correction is a separate decision. Row and column totals of the certificate were cross-footed in session — all consistent.
  - **English translation of the salary certificate prepared 2026-10-07** — one page, same layout as the original, personal ID code and company bank account omitted (see original), translator's note at the foot. **Delivered to Lilian as a PDF; never committed, never an artifact.** **An English email to the client with the Secure Messaging upload steps was drafted for Lilian** (send only after Julia answers the open points).
- 🆕 **2026-10-03 sweep.** (1) **IRS letters:** 2026-09-29 the owner's project manager forwarded an IRS letter asking for income-verification documents; Julia replied the same day that the firm will prepare the response with the documents requested, and forwarded it to Lilian to pull and print the paperwork used for income (a 2026-10-02 forward to Lilian schedules it "Monday or Tuesday"). Whether the package has been sent to the IRS: a search of Gmail, bounded after 2026/09/26, on 2026-10-03, did not find a send confirmation. A **second** IRS office letter (2026-10-01) was answered by Julia 2026-10-02 as needing no action (an address update, address unchanged). Open: IRS response package — pending since 2026-09-29 = **4 days**, no stated deadline. (2) **Client asked for a 15-30 min call** (sent 2026-09-30, "several questions about the LLC", wanted within the week **before 2026-10-09**; chased 2026-10-02 "have you received my email regarding zoom?"). No reply found in Gmail sent as of 2026-10-03 — pending since 2026-09-30 = **3 days, client-stated target 2026-10-09 (6 days)**. Topic not stated; may or may not be the work-authorization question. (3) Ukrainian employee's work-authorization/payroll question (raised 2026-08-04) = **60 days** pending; a Ping search bounded 2026-09-26→10-03, on 2026-10-03, did not find it discussed. Gusto invoice for September paid 2026-10-02; Q3 payroll filings handled by Gusto; A2X settlements continue posting (Gmail, to 10-03).
Open follow-ups from meetings / emails / calls — e.g. what Julia discussed last,
tasks owed. Keep the **live** list in Double tasks / Ping action items and point to
it here; these never go into the client SOP.

- 🔴 **The Ukrainian employee's work-authorization/payroll question raised 2026-08-04** (call scheduled 2026-08-10) — STILL OPEN, **≈53 days** pending; the 2026-09-26 targeted search again found no outcome or follow-up.
- [x] **The "one contact vs. two contacts" discrepancy — SETTLED 2026-09-26**: `list_contacts` returned exactly one portal contact (Oleksiy Bereznyak) on both the 2026-09-19 and 2026-09-26 sweeps; the file's earlier "two contacts, consistent with spouses/co-owners" description is treated as superseded (§5).
- **New, non-tracked (2026-09-19):** a 2026-09-15 QuickBooks-deposit/merchant-verification question, resolved by Julia the same day as "wait a few days" — monitor only, not carried forward as an outstanding item unless it recurs.
- [x] The reverted "2025 Taxes" project status (Not Started as of 2026-08-04) — **fully resolved**: the return (company and owner's personal 1040 together) was completed, e-signed and filed 2026-09-08.
- [x] The unpublished 2025 Business Tax Organizer — **overtaken by events**: the organizer/engagement-letter tasks were marked Done 2026-09-01 and the return has since been filed. No longer tracked as an open item.

### Information still needed
The checklist of what's not captured yet — this is what the completeness audit
reports for this client.

- [x] What the business actually does — e-commerce/Amazon marketplace selling (§1)
- [x] Home state — Florida, Fort Lauderdale (strong signal, §1)
- [ ] Owner's primary language; fiscal year-end
- [x] Contacts and their roles — **corrected 2026-09-26**: only ONE portal contact confirmed on two consecutive sweeps (Oleksiy Bereznyak); the earlier "two contacts" claim is superseded (§5)
- [ ] Bank/card feeds and where credentials live (Drive vault link) — Drive folder confirmed, credentials link still pending
- [x] Whether the client belongs to a known owner-group already profiled here — yes, the `best-broker-realty.md` serial-entity group (§5)
- [ ] Whether Liudmyla keeps working notes for this client that should feed this file

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=706681](https://app.doublehq.com/close?cid=706681)
- **Double case note** _(only if this client has a matter being tracked start to finish — see the [`double-mcp`](../../../.claude/skills/double-mcp/) skill §7):_ _(note title + ID)_
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending — links into ../sops/ once written)_
