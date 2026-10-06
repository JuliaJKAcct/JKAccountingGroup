# Oleg Zakala & Milana Podrugina

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-10-04

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
- **Primary language:** _(pending — see the Zakom file for how the firm corresponds with him)_
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
- ⚠️ **AND OFFICER COMPENSATION AT ZAKOM MAKES HIS PERSONAL RETURN WORSE, NOT BETTER.** It reduces the
  company's ordinary income, which reduces the basis that absorbs the distribution, which **raises** the
  capital gain — while adding wages at ordinary rates and payroll tax on both sides. And at zero basis the
  resulting company loss is **suspended on Form 7203 Part III, not deducted.** 🔑 **It is a price tag on
  Julia's decision, not an argument against a salary** — the reasonable-compensation exposure is separate
  and real. The arithmetic is in the working paper _(2026-10-04)_.
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

- The organizer is at 60% and not completed.
- Extension status for 2025 — not recorded here.
- Joint or separate return — not established.

### Information still needed

- [x] ~~Whether a 2025 extension (Form 4868) was filed~~ — ✅ **yes, `2025 4868 Ext.pdf`; due 2026-10-15** _(2026-10-04)_
- [x] ~~Filing status~~ — ✅ **married filing jointly** _(2026-10-04)_
- [x] ~~Home state~~ — ✅ **Florida; federal-only return** _(2026-10-04)_
- [ ] Whether the three Schedule C businesses traded in 2025 — **a client question**
- [ ] The digital-asset and foreign-account answers — **a client question, and the 1040 box must be ticked**
- [ ] The electric vehicle's acquisition date and papers — **a client question**
- [ ] Whether Oleg made a capital **contribution** to Zakom in 2025 — **ours, off the company's books; it would reduce the gain dollar for dollar**
- [ ] Whether either of them turned 65 during 2025 — **ours, from Double**; it opens Schedule 1-A Part V
- [ ] Whether any 2025 estimated-tax voucher was paid, and whether the 2024 instalment plan is still running

## 7. Links

- **Double client:** [cid 710652](https://app.doublehq.com/close?cid=710652) · [2025 tax project](https://app.doublehq.com/tax-return?cid=710652&projectId=219337) · [2025 organizer](https://app.doublehq.com/clients/710652/portal/organizers/141429)
- **Double case note:** none
- **Google Drive folder (sensitive vault):** _(pending)_
- **The 2025 Form 1040 working paper:** [`projects/tax-returns/oleg-zakala-milana-podrugina/2025-form-1040.md`](../../tax-returns/oleg-zakala-milana-podrugina/2025-form-1040.md) — 🔑 **the only place his dollar figures live**
- **Related clients:** [`zakom-incorporated.md`](./zakom-incorporated.md) — his company
- **Related SOPs:** [`form-1040-preparation.md`](../../sops/form-1040-preparation.md) — modules **M1**, **M2**, **M3**, **M14**, **M15**
