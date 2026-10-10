# Oleg Zakala & Milana Podrugina

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-10-10

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

- **Business name:** Oleg Zakala & Milana Podrugina — the **personal (individual) record** of the owner of [Zakom Incorporated](./zakom-incorporated.md) and his wife _(Double `Account Type: Individual`, 2026-10-01)_
- **Entity type:** n/a — individual taxpayers. ✅ **The return is JOINT** — 2024 was filed **married filing jointly**, and the 2025 organizer confirms they did not live apart, so MFJ is available again _(2026-10-04)_
- **Home state:** ✅ **Florida** (Plantation). ⛔ **No individual state income tax, and the 2025 organizer answers `notApplicable` to any other state** — so the 2025 return is **federal only** _(2026-10-04)_
- **Industry / what they do:** he owns and runs Zakom Incorporated (an S corporation — see its file), so his K-1 from it reaches this return. 🔴 **AND HE IS NOT ONLY A SHAREHOLDER — the 2024 return carried THREE Schedule C businesses of his own**, under a **separate EIN of his own, `92-2705442`**, for a logistics/service activity, a real-estate-property activity and a realtor activity. ⚠️ **Whether any of the three traded in 2025 has never been asked** _(2026-10-04)_
- **Primary language:** _(not stated in any source — but the 2026-10-07 review call with Julia was summarised by both Ping and Zoom in Russian, which suggests the call was held in Russian; his emails to the firm are in English. A lead, not a confirmation — Ping/Zoom, 2026-10-07)_
- **Our engagement (services we provide):** **Income tax only — Form 1040** _(Double: `Income Tax: true`, `Tax Return Type: 1040`, `Bookkeeping: N/A`, `1099 Preparation: false`, `Annual Report: false`, 2026-10-01)_. **Assigned staff and 2025 preparer: Lilian.**
- **Fiscal year-end:** calendar year
- **Accounting platform:** `platform: none`

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details.

| Role | Where to find them |
|---|---|
| Oleg Zakala — the client, and the portal contact who opens the organizer | Double client (link below) |
| Milana Podrugina — his wife, named on the record | Double client (link below) |
| His company | [`zakom-incorporated.md`](./zakom-incorporated.md) · [Double cid 710612](https://app.doublehq.com/close?cid=710612) |

- **Double client:** [app.doublehq.com/close?cid=710652](https://app.doublehq.com/close?cid=710652)
- **Double case note:** none — no note on this record (per the 2026-09-26 sweep recorded in the Zakom file)

## 3. Systems & access

| System | What it's for | Where credentials live | Non-sensitive reference |
|---|---|---|---|
| Double client portal | The 2025 organizer and document exchange | _(n/a — client's own portal login)_ | `JK 2025 1040 Organizer`, id `141429`, published 2026-06-22 |

## 4. Obligations & recurring processes

### Income tax
- **Applies?** Yes — **Form 1040**, prepared by this firm, Lilian as preparer.
- **Return type(s) & deadlines:** 2025 return. ✅ **AN EXTENSION WAS FILED** — `2025 4868 Ext.pdf` sits in the Double folder `JK Accounting Group / Tax Return Filed / 2025`, so the return is due **2026-10-15**, not 2026-04-15 _(established 2026-10-04)_. ⚠️ **The Double project still shows `dueDate` 2026-04-15 and status `notStarted`** — the project record has not been updated and must not be read as the deadline. ❓ **Whether any payment went with the extension is not established.**
- **What feeds it:** the **Schedule K-1 from Zakom Incorporated's 2025 Form 1120-S**, being prepared now — see [`projects/tax-returns/zakom-incorporated/`](../../tax-returns/zakom-incorporated/). So this return waits on the company's.
- **Process notes (→ future SOP):** the return is prepared under [`form-1040-preparation.md`](../../sops/form-1040-preparation.md), and the modules it actually needs are **M1 (W-2)**, **M2 (Schedule C)**, **M3 (Schedule E + Form 7203)**, **M14 (Form 1098)** and **M15 (Schedule A)**. ⓘ **M1, M14 and M15 were written on 2026-10-04 because this return needed them and all three were stubs.**

### 1099 filings / annual report
- **Applies?** No — `1099 Preparation: false`, `Annual Report: false`.

## 5. Key facts & quirks

- 🔑 **DOUBLE CANNOT TELL YOU WHEN HE LAST *CHANGED* AN ANSWER — ONLY WHEN HE *OPENED* THE ORGANIZER.** The activity log has `organizer_opened` for a client, but **no action at all for a client saving or editing a response**, and the organizer itself carries no last-modified field. So "last modified" is answered with the last **opening** plus the **completion percentage** at that moment — never as a fact about an edit. _(Established 2026-10-01 when Lilian asked.)_
- **The 2025 organizer is 60% complete as of 2026-10-01** — not completed; `Organizer Status: Sent`.
- 🔴 **HIS STOCK BASIS IN ZAKOM IS EXHAUSTED, AND THAT IS THE CENTRE OF HIS RETURN.** The 2024 Form 7203
  closed the year with his stock basis **exhausted**, and with **no** debt basis and **no** suspended losses. 🔑 **So a
  distribution from Zakom above his share of its income is NOT tax-free — the excess is a long-term capital
  gain on his 1040**, and the 2024 return already reported one that way, on Form 8949 **Part II box (F)**
  with the description `Excess Distributions (K-1 (1120S))`. ⚠️ **This is the firm's own established
  treatment for this client, not a theory** _(2026-10-04)_.
- 🔴 **OFFICER COMPENSATION AT ZAKOM DOES NOT CHANGE HOW MUCH HE IS TAXED ON — and the reading that said
  it makes his return worse is WITHDRAWN** _(2026-10-06; it stood from 2026-10-04 and was found by an
  independent review)_. **Because that company has no books with an equity section, the distribution
  reported on his K-1 is a DERIVED residual rather than a document figure — so booking a salary reduces the
  company's ordinary income and reduces the distribution by the same amount, and the two cancel.**
  🔑 **His capital gain is unchanged at any salary up to the company's income before that salary, and FALLS
  above it; the total reaching this return from the company does not move at all.** **What the salary
  changes is the CHARACTER: K-1 ordinary income becomes wages — same marginal rate, but payroll tax on both
  sides and no business-income deduction on it; above that boundary it converts long-term capital gain into
  wages, which is a real rate cost, and strands the excess as a suspended loss he cannot deduct at zero
  basis.** ⚠️ **One exception: employer payroll tax actually PAID does raise the gain, because cash leaves
  the company while the derived distribution does not.** 🔑 **It is still a price tag on Julia's decision —
  payroll tax, the payroll filings, and the rate on the part above the boundary — not an argument against a
  salary; the reasonable-compensation exposure is separate and real.** The whole table is in the working paper.
- **He itemizes, and it is a CLOSE call that 2025 reverses.** 2024 itemized on mortgage interest and
  real-estate taxes, beating the standard deduction by a small margin — and for 2025 **the standard
  deduction rose while the SALT cap rose far more**, so the choice must be computed both ways and last
  year's answer does not carry forward _(2026-10-04)_.
- 🔴 **THE 2025 FORM 1098 HAS BEEN READ, AND IT SETTLES THE ITEMIZE QUESTION.** The servicer is
  **Mr. Cooper (Nationstar Mortgage LLC)**, and the mortgage interest **ROSE sharply** against 2024 — enough
  on its own to beat the 2025 standard deduction, before any state or local tax is added. ⛔ **So the
  standard deduction is the wrong choice for 2025, and the question is no longer close.** ✅ **It also
  closes a double-count risk: the escrow disburses hazard insurance ONLY, no property tax, so the county
  bill is the sole source for the real-estate-tax line.** ⚠️ **An earlier entry called this document
  unreadable — same `pypdf` failure as the loan documents.** _(Figures in the working paper §3G.)_
- ✅ **NO FORM 1095 OF ANY KIND IS ON HIS RECORD** — searched by name across the File Library and the
  organizer attachments on 2026-10-06, and the 63-file library has none. **The 2025 organizer answers
  `notApplicable` to Marketplace coverage and the 2024 filed return carries no Form 8962**, so the two
  agree. ⛔ **There is no Form 1095-A to chase and no Form 8962 to prepare.**
- **He claims a HOME OFFICE** — Form 8829, attached to the logistics Schedule C _(2024; the total area of
  the home carries forward and the business area does not)_.
- ✅ **No Marketplace coverage, no dependants, no rental property, no NOL carryforward, no AMT, no net
  investment income tax, no state return.** All six checked against the 2024 filed return and the 2025
  organizer on 2026-10-04, so none of them is a document to chase.
- ⚠️ **2024 ended with an unpaid balance and a Form 9465 instalment request**, and the return printed four
  2025 estimated-tax vouchers. **Whether any of them was paid, and whether that plan is still running, is
  not established** — it decides whether 2025 adds to an existing IRS balance _(2026-10-04)_.
- 🔴 **RESOLVED 2026-10-06 — `MilanaPodrugina-LoanDocs.pdf` IS THE EXECUTED LOAN PACKAGE for the Porsche
  Macan, and its page 1 is the `CLOSED-END NOTE, DISCLOSURE, LOAN AND SECURITY AGREEMENT`** — the most
  informative document in the whole matter. ⛔ **A 2026-10-04 entry here said it "carries no client data at
  all". That was WRONG and is withdrawn.** 🔑 **The cause: the firm's redactor reads PDFs with `pypdf`, which
  cannot read this producer's pages. `pdfium` reads them perfectly** — **so the values were machine-readable
  all along, and a session mistook "my reader found nothing" for "the document contains nothing"**
  _(Lilian: "tal vez el lector que utilizas no pudo leer la información, pero no están en blanco")_.
  ⚠️ **A tooling defect with a known fix — and the fix is not one line: the redactor's masks were written
  against what `pypdf` surfaced, and on the better extract they let a VIN, two dates of birth and the
  account numbers through.** ✅ **Both documents are now read end to end and the figures are
  transcribed in the working paper §3D ②.** _(The 2026-09-13 hedge was right
  to hedge; it got resolved the wrong way.)_ See [`zakom-incorporated.md`](./zakom-incorporated.md) §5.
- 🚗 **THEY BOUGHT A `2023 PORSCHE MACAN` ON 7 AUGUST 2025**, bought from **Audi Fort Lauderdale** and financed by **Tropical Financial Credit Union** (lienholder control `#2032`), with **Milana as the PRIMARY buyer and Oleg as co-buyer**; they **declined** GAP, depreciation protection and mechanical-breakdown protection. 🔴 **No tax credit reaches it** — §30D, §25E and §45W all need a plug-in or fuel-cell vehicle, and the **new car-loan interest deduction needs US final assembly**, which the vehicle's own identifier contradicts. ✅ **But the SALES TAX on the purchase IS deductible**, added to the optional sales-tax table on Schedule A — and unlike 2024 it is **not** wasted, because the 2025 SALT cap is far higher. ⛔ **The firm does NOT hold the purchase document, so the tax figure has to be asked for** — and the executed note **itemizes no sales tax**, so the receipt is on the dealer's buyer's order. ⛔ **That is not the same as proving none was financed** — the payment to the dealer is a single line with no price beside it. 🔴 **AND IT IS NOT A SIDE ISSUE: it is very likely what decides whether this return itemizes or takes the standard deduction** (working paper §3E). _(2026-10-04; the analysis and the authorities are in the working paper §3D.)_

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2026-05-19 — record created in Double (TaxDome migration).
- 2026-06-22 — Lilian published the **JK 2025 1040 Organizer** (id `141429`).
- 2026-09-09 15:11, 2026-09-14 13:39 _(Miami time)_ — Oleg **opened** the organizer.
- 2026-09-28 22:22 _(Miami time)_ — Julia created a **custom reminder schedule** on this record.
- 2026-09-30 22:10 and 2026-10-01 10:59 _(Miami time)_ — Oleg **opened** the organizer twice more — the first two openings after Julia's reminder schedule. ⚠️ That the reminder prompted them is an inference from the timing, not something the log says.
- 2026-10-02 — Lilian asked whether Oleg had uploaded a **Form 1098 for property taxes**. ✅ **Found — on
  THIS record (`710652`), not on the company's.** The company's register had never had `list_files` run
  against it. See [`zakom-incorporated.md`](./zakom-incorporated.md) §6 and the 1120-S working paper §1
  row 38. ⚠️ **Partly superseded two days later** — see the next entry.
- 2026-10-04 — 🔴 **PHASE 1 OF HIS 2025 FORM 1040 WAS RUN IN FULL**, at Lilian's request (*"Ahora vamos a
  empezar a calcular la declaración individual de Oleg"*). The working paper is
  [`projects/tax-returns/oleg-zakala-milana-podrugina/2025-form-1040.md`](../../tax-returns/oleg-zakala-milana-podrugina/2025-form-1040.md),
  which holds every figure. **What the review established:**
  - **The 2024 filed return is 43 pages and the firm prepared it** — `JK Accounting Group` and `Kononova`
    are on the Form 8879 and the preparer block, so there is **no prepared-elsewhere carryover gap**. It
    was read through `tools/redact-doc/` and **transcribed in full** into the paper, once, so nobody has
    to open it again.
  - 🔴 **His basis is exhausted** — see §5 above.
  - 🔴 **The organizer is NOT complete** — `in_progress`, `completedAt: null`, **60%**. It had been
    described as completed. **It stops asking about income once someone answers "none", so its silence
    is not evidence**, and the three Schedule C businesses are unaccounted for in 2025.
  - ✅ **Three of Lilian's readings confirmed:** the W-2 is **Milana's**; **both 1099s are addressed to
    Zakom**, not to him; mortgage interest and real-property taxes are ticked as paid.
  - 🔴 **The organizer holds CURRENT-YEAR documents** — a 2025 property-tax image and a 2025 Form 1098.
    **This supersedes the 2026-10-02 answer**, which expected the 2025 property-tax figure to need a
    public look-up. It does not.
  - 🔴 **Two 2025 items nobody had mentioned, both with money attached and neither supportable on what is
    in hand:** a **vehicle bought on a loan originated after 31 December 2024** — for which his own
    answer to *"final assembly in the United States"* is **No**, which the 2025 Form 1040 instructions'
    own definition says **disqualifies the new car-loan-interest deduction**; and an **electric vehicle
    purchased in 2025**, with the date, the agreement and the vehicle identifier all left blank.
  - ⚠️ **The digital-asset and foreign-account questions are BLANK**, and the Form 1040 page 1
    digital-asset box has to be ticked one way or the other. 2024 answered **No** and filed no Schedule B.
  - 🔴 **All three documents Lilian named are machine-unreadable** — the W-2 extract returned only the
    IRS's own boilerplate, the "1098" is an escrow statement on page 1, and the property-tax bill is an
    **image**, which the redactor correctly refuses. ✅ **Under [`tax-return-sop`](../../../.claude/skills/tax-return-sop/)
    §1B.6 that makes them *not reachable from a session*, so the ask goes to LILIAN** — ⛔ **never to
    Oleg, who has already sent all three.**
  - ⚠️ **A defect in the firm's own redactor was found and reported** — it let an unmasked nine-digit
    identifier and the street line through on two pages of the 2024 return, because the label and the
    value land on different lines. **Neither value was recorded anywhere.** It is a row in
    [`FOLLOW-UPS.md`](../../../FOLLOW-UPS.md).
  - **Four client questions, in one message, and nothing else:** the digital-asset and foreign-account
    answers; whether the three named businesses traded in 2025; the electric vehicle's acquisition date
    and papers; and whether there was any charitable giving. **Everything else on the list is ours.**
- 2026-10-01 — **File created** at Lilian's request (*"¿cuándo fue la última vez que Oleg modificó el organizer de su cuenta individual?"*). Sources: Double only — client, properties, 2025 project, organizer metadata (incl. completion %, read without the answers), activity log. Until now this record was swept only as part of the Zakom file.

- 2026-10-10 — **FIRST FULL HISTORICAL SWEEP of this owner (unbounded; Gmail, Double, Ping, Drive), run at owner level with company facts routed to [`zakom-incorporated.md`](./zakom-incorporated.md).** Findings, by source:
  - **Gmail** (Julia's mailbox; `Zakala OR Podrugina OR "Oleg Zakala" OR Milana`, excluding "Zakom", read to the end of the result set — 46 threads, oldest 2022-07-21). **Relationship history for the PERSONAL returns, newly recorded:** engagement began around **2023-08-14** ("2022 Tax Preparation Services" thread); the **2022 return** was signed **2023-10-16** with an instalment-agreement request attached, accepted by the IRS 2023-10-18, first instalment due 2023-12-15 (amounts withheld); the **2023 return**: organizer completed **2024-09-02**, document signed **2024-10-03**; the **2024 return**: extension filed by the firm **2025-04-16**, organizer completed **2025-08-13**, document signed **2025-09-06**. (Gmail, TaxDome notifications and thread bodies, 2023-2025.)
  - **Real-estate 1099 (first seen for tax year 2024):** on 2025-08-13/14 Oleg sent a 1099-NEC for real-estate commissions and estimated his own expenses; **Julia ruled on 2025-08-14 that car usage cannot be deducted against that 1099 because his vehicle is 100% used by Zakom (the 2021 audit position), and told him to claim actual expenses only and not double-count anything already booked under Zakom**; he agreed on 2025-08-18 that no personal vehicle was ever booked under Zakom for 2024. (Gmail thread "Oleg Zakala 1099 (real estate side)", 2025-08-13 → 08-18.) This is the firm's standing instruction for his realtor Schedule C.
  - **2024-07-26:** Julia introduced him to a third-party law firm for a revocable living trust; the firm's reply quoted its fee. **Whether he went ahead is not recorded anywhere reachable** (Gmail, 2024-07-26 → 08-01).
  - **2025-09-10/12:** he messaged Lilian asking about an IRS charge and had **no IRS online account then** (Lilian's 2025-09-12 update to Julia). On the 2026-10-07 call he and Julia **logged into his IRS individual online account together** and saw the 2024 instalment plan still running.
  - **Double:** 710652 `list_notes` returns **one note, created 2026-10-07 by Julia: the Ping summary of the "Zakala Tax Return Review" call (10:30-11:00 AM)** — *the first note on this record; the file said "no note"*. `list_activity_log` (25 entries, full): the 2025 project moved **Not Started → Ready for Filing → Waiting on Client Approval on 2026-10-07 20:19 UTC (Lilian)**; Oleg opened the organizer six more times 2026-10-01 → 10-05 (last 2026-10-05); no `filedAt` on the project. Tasks: all 12 project-checklist tasks still `notStarted`, 9 of them due 2026-10-15. Contacts: Milana (portal contact, tax access) and Oleg (also linked to the company record 710612). Files: 63, none new since the 2026-06-02 migration batch.
  - 🆕 **The 2026-10-07 call (Julia ↔ Oleg; Ping note + Zoom summary):** (1) they walked through the preliminary 2025 picture — his S-corp pay and Milana's W-2 wages, the excess-distribution capital gain, itemized deductions; (2) Julia **proposed a monthly engagement for the company** (QuickBooks bookkeeping, monthly reports, payroll set-up, 1099s, the 1120-S; personal returns excluded; one-time hourly cleanup separately) starting October 2026 with a set-up call about **2026-10-16** — **he said he would review it, no acceptance recorded** (route: Zakom file); (3) payroll to be set up so federal tax is pre-paid from about **November 2026**; (4) he proposed an **upfront payment plus a monthly instalment** for the 2025 balance — **the arrangement was still to be finalized**; the 2024 instalment plan keeps auto-debiting and he can add payments through his IRS account; (5) health: the Marketplace premium subsidy may need to be repaid if 2026 income is high — Julia advised getting the unsubsidized premium before renewing; (6) **a daughter was born 2026-09-23** (no 2025 dependant effect; a 2026 dependant), Medicaid / Florida KidCare for the newborn discussed; Milana is a graduate student and teaches ESL; (7) 2026 planning raised, not decided: company 401(k), an IRA for Milana, a 529 plan. (Ping note id on the Double note; Zoom meeting-assets email 2026-10-07.)
  - ⚠️ **CONTRADICTION (unsettled): this file's 2026-10-07 entry says Julia SIGNED AND E-FILED the 2025 Form 1040 on 2026-10-07; Double's project reads `Waiting on Client Approval` (set 2026-10-07 20:19 UTC by Lilian) with `filedAt` empty, and Julia's call at 10:30 AM that day describes the figures as a "preliminary 2025 tax picture" with Oleg still to agree the payment arrangement.** Possible reading: the return was prepared and sent for his approval that evening, and "filed" in the 10-07 entry was written ahead of the e-file. **Not established which — ask Lilian/Julia; the 10-15 deadline makes the answer time-sensitive.** (Double activity log and project status vs this file, 2026-10-10.)
  - **Ping:** `resolve_person` — one match (the couple's client record, linked to the household's portal address); org-wide `search_meetings` (4 queries on the review, instalment plan, Milana's return) — no meeting transcript beyond the 2026-10-07 call whose note is in Double; the hits were other clients' calls (garbled, discarded).
  - **Google Drive** (title/full-text search for the owner names and the other entity's name, metadata only, pages 1-2 read, each hit's folder noted): the **firm filed the couple's 2021 Form 1040** (a copy dated 2023-02-27 sits in Julia's Drive), plus 2022-2024 signed return PDFs, the 2023/2024 individual organizers, the closing documents for two real-estate purchases (2023), a Broward County real-estate bill, and the Zakom/other-entity bank and card statements (Zakom's file covers those). **Two personal client folders exist** (Julia's Drive and Maria Zavarce's, both created in the 2026-05 migration) — see §7.
  - **Company-level facts for the Zakom file (NOT edited here):** (a) the 2026-10-07 monthly-engagement proposal (already in that file's 2026-10-07 log); (b) Julia's 2025-08-14 rule that the personal vehicle is 100% Zakom's; (c) Mema Colors LLC — Florida state dissolution notice **2024-12-03** and a BOI report filed 2024-12-04 by the firm; (d) the 2023-11 IRS extension letter / instalment correspondence concerns the 2022 *personal* return, not the company.

### Tax year 2025 — the review

✅ **RUN IN FULL 2026-10-04** — phase 1 of [`tax-return-sop`](../../../.claude/skills/tax-return-sop/) §4A,
with the [`organizer-review`](../../../.claude/skills/organizer-review/) skill. **Block A's verdict:
🟡 yes, with open questions** — and **only because Lilian ruled it**, telling the session to assume
Zakom's distribution figure until Julia decides what to do with it. ⛔ **A session may not reach that
verdict on its own.**

**The findings, the prior-year comparison, the question list and every figure are in the working paper:**
[`2025-form-1040.md`](../../tax-returns/oleg-zakala-milana-podrugina/2025-form-1040.md). The log entry for
2026-10-04 above carries the summary. ⚠️ **The organizer's answers HAVE now been read**, under
[`double-mcp`](../../../.claude/skills/double-mcp/) §2.2 — Lilian was told beforehand what the call brings
in, and reminded to delete the session afterwards.

### Outstanding items (CI-only — never in the SOP)

- 🔴 **Confirm whether the 2025 Form 1040 is filed** — file says e-filed 2026-10-07, Double says Waiting on Client Approval with no filed date (contradiction, 2026-10-10 log). Deadline 2026-10-15 (5 days).
- The organizer was 60% complete at last measure (2026-10-01) and was opened six more times to 2026-10-05; completion not re-measured (organizer tools not used in the weekend sweep).
- _(Extension and joint filing are settled — see Information still needed.)_

### Information still needed

- [x] ~~Whether a 2025 extension (Form 4868) was filed~~ — ✅ **yes, `2025 4868 Ext.pdf`; due 2026-10-15** _(2026-10-04)_
- [x] ~~Filing status~~ — ✅ **married filing jointly** _(2026-10-04)_
- [x] ~~Home state~~ — ✅ **Florida; federal-only return** _(2026-10-04)_
- [ ] Whether the three Schedule C businesses traded in 2025 — **a client question**
- [ ] The digital-asset and foreign-account answers — **a client question, and the 1040 box must be ticked**
- [ ] The electric vehicle's acquisition date and papers — **a client question**
- [ ] Whether Oleg made a capital **contribution** to Zakom in 2025 — **ours, off the company's books; it would reduce the gain dollar for dollar**
- [ ] Whether either of them turned 65 during 2025 — **ours, from Double**; it opens Schedule 1-A Part V
- [ ] Whether any 2025 estimated-tax voucher was paid — **partly answered 2026-10-07: the 2024 instalment plan IS still running** (auto-debit; seen in his IRS online account on the call). Estimated-voucher payments for 2025 still unestablished
- [ ] **Whether the 2025 Form 1040 is actually filed** — this file (2026-10-07 entry) says e-filed; Double says Waiting on Client Approval, no `filedAt` (2026-10-10). Open, deadline 2026-10-15
- [ ] Whether he signed the proposed monthly company engagement (route: Zakom file) and the final 2025 payment arrangement
- [ ] Whether the 2024 revocable-trust referral (2024-07-26) went ahead

### 2026-10-06 · ⚖️ The return ITEMIZES, Julia has already spoken to the client, and the final worksheet is DEFERRED

**Lilian ruled that this return uses ITEMIZED deductions rather than the standard deduction, relaying that
Julia applied them after discussing the return with the client.** **It reverses the working premise of two days
earlier and confirms what the 2025 Form 1098 had already shown on its own: the mortgage interest alone exceeds
the married-filing-jointly standard deduction, before any state and local tax.** *(Working paper §3H ②.)*

🔴 **The bigger consequence is procedural, and it changes what the firm should do next.** **Because Julia had
the client in front of her, most of the working paper's open items are no longer questions for the firm to work
out — they are lines to READ off the filed return.** **The paper now carries that mapping row by row** *(§3H
③ⓐ)*, **and the client question list that was ready to send is STOPPED: asking him for what he has already
given Julia is the failure the firm's own analysis method names first.** ☑️ **Read the filed return, then ask
only for what it genuinely leaves blank — and ask JULIA, not him, for what he told her by phone.**

**One technical point sharpened rather than closed by the ruling:** **on the standard deduction the whole
business-use share of mortgage interest and property tax would have gone on the home-office form; on itemized
the personal share goes to Schedule A and only the business share to the home-office form.** ⚠️ **So there are
now two opposite ways the filed return can be wrong — the same interest counted twice, or the business share
dropped altogether — and which one applies depends on whether the Schedule C businesses traded in 2025.**

**Lilian's email to Julia on the company's return closes with this return's shareholder-basis computation, and
it matches the working paper exactly.** ⚠️ **Recorded as the preparer's own dated statement of the position,
not as a second route to the figure: both computations run off the same two inputs, so neither tests the
other.**

⏳ **THE FINAL WORKSHEET IS NOT BUILT.** **Lilian's trigger: Julia discusses both returns with the client, he
approves, and she uploads both — then one final worksheet per return, never one covering both.**

⚠️ **One word in her message did not parse and was NOT interpreted** — she dictates, and the firm's standing
rule makes an unparseable word a question to put rather than a guess to write down. **The meaning of the
sentence was not in doubt; the stray word is simply flagged.**

### 2026-10-07 · 📄 The 2025 Form 1040 is FILED, and the permanent worksheet is built

**Julia signed and e-filed the 2025 Form 1040 on 7 October 2026.** **The whole return was read end to end and
the firm's permanent record was built from it** *(working paper §3K)*. **It itemizes, as decided — the itemized
total is well above the standard deduction, and the mortgage interest alone clears it before any state and
local tax.**

🔴 **THE BIGGEST THING IN THE FILED RETURN WAS NOT PREDICTED BY ANY MODEL THE FIRM HAD BUILT: the officer
compensation from his S corporation arrived here as SCHEDULE C income under his own employer identification
number, with self-employment tax paid on it — not as W-2 wages.** **He has no Form W-2 at all; the only wage
figure on the return is his wife's.** **Read as a package it is coherent and deliberate: the company deducted
the amount as compensation of officers and reported it as section 199A W-2 wages, its own taxes-and-licences
line is blank because NO PAYROLL WAS EVER RUN, and the self-employment tax on this return collects
substantially the same payroll tax through him instead — without filing payroll returns that were never
filed.** ⚖️ **Recorded as JULIA'S decision, which is how Lilian asked that changes be recorded.** ⛔ **It is
not the statutory form of it — officer compensation from an S corporation is wages — and the alternative, late
payroll for 2025 with its penalties, is named beside it in the worksheet.**
✅ **It also explains the nil qualified-business-income deduction, which would otherwise read as an omission:
wages are excluded from qualified business income by statute, so excluding a figure that IS compensation is the
consistent choice, and the conservative one.**

**Three more things the filed return settles:**

- ✅ **THE HOME OFFICE IS NOT CLAIMED, and the long-open question of whether the mortgage interest would be
  double-counted or dropped is answered: DROPPED.** The home-office form is attached with its area and
  percentage worked out and claims nothing; the whole mortgage interest and property tax went to the itemized
  schedule. **That is the conservative side, and it avoids claiming a third of a home against an activity that
  is in substance payment for his labour.**
- ✅ **THE NET INVESTMENT INCOME TAX THRESHOLD on the filed form is the married-filing-jointly figure**, which
  confirms a correction the firm made days earlier — the file had been carrying the single-filer figure on five
  surfaces. **No tax is due; their income is below it.**
- ✅ **Only ONE of the three business activities from the prior year is filed**, and it is the one carrying the
  officer compensation rather than trading receipts.

**What is owed was paid for by an instalment agreement covering BOTH open years in one request, by direct debit,
at a monthly amount far above the minimum — so it clears in well under two years.** Nothing had been withheld
on either wage figure and no estimated payments were made, so the whole liability fell due with the return,
along with an estimated-tax penalty.

🔴 **ONE ITEM NEEDS JULIA AND IS NOT A MATTER OF PRESENTATION.** **His company passed him the gain on two
fully-expensed trucks it disposed of in 2025. Its own return reported that to him correctly. His return
carries it NOWHERE — neither as income on his Form 4797 nor as the basis increase it also produces on his
Form 7203.** **The two omissions cancel on the total and differ on the character: reported, part of what is now
all long-term capital gain would instead be ordinary recapture, so correcting it RAISES the tax.** **Both IRS
sources were read the same day and both say the shareholder reports it.** ⚖️ **The return is submitted, so the
route is an amended return and the decision is hers. Nothing was re-keyed.**

⏳ **The final worksheet is handed over and must be SAVED IN DOUBLE on this client.**

## 7. Links

- **Double client:** [cid 710652](https://app.doublehq.com/close?cid=710652) · [2025 tax project](https://app.doublehq.com/tax-return?cid=710652&projectId=219337) · [2025 organizer](https://app.doublehq.com/clients/710652/portal/organizers/141429)
- **Double case note:** none
- **Google Drive folder (sensitive vault):** [Oleg Zakala (Julia's Drive)](https://drive.google.com/drive/folders/1jPM6AzJZ5f8Vfyufax2DD9x5vvts_iW5) _(a second, separate folder of the same name from the 2026-05 migration also exists under Maria Zavarce's Drive — not merged; found 2026-10-10)_
- **The 2025 Form 1040 working paper:** [`projects/tax-returns/oleg-zakala-milana-podrugina/2025-form-1040.md`](../../tax-returns/oleg-zakala-milana-podrugina/2025-form-1040.md) — 🔑 **the only place his dollar figures live**
- **Related clients:** [`zakom-incorporated.md`](./zakom-incorporated.md) — his company
- **Related SOPs:** [`form-1040-preparation.md`](../../sops/form-1040-preparation.md) — modules **M1**, **M2**, **M3**, **M14**, **M15**
