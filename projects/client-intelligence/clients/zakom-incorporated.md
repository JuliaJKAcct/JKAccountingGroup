# Zakom Incorporated

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-09-13

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

- **Business name:** Zakom Incorporated _(the client writes it "Zakom Inc" on the organizer; no trade name)_
- **Entity type:** S corporation — files **Form 1120-S**. Double's `Tax Return Type` says `1120-S` and the client selected "S Corporation (files Form 1120-S)" on the 2025 organizer, so the two agree
- **Home state:** FL _(state of formation per the organizer)_
- 🔴 **States filed: FLORIDA *and* ILLINOIS.** Established from the firm's own 2022 filing correspondence — Julia: *"It has to be separated as we are doing 2 state reporting… properly report income and expenses for each state period"*, and the 2022 return carried an Illinois tax deduction while *"we don't pay anything to Florida"*. The company's Fifth Third banking centre is in **Bloomingdale, IL**. ⛔ **The client answered "no" to "did the entity do business in more than one state?" on the 2025 organizer** — that answer contradicts the firm's own filing history and suppressed the follow-up asking which states
- **Industry / what they do:** Transportation — trucking. ⚠️ The client typed the principal business activity and the product/service as **"Transportatioin"** (his typo, in both fields); the string that goes on the return has to be corrected before it is keyed
- **Primary language:** _(pending — the owner corresponds in English on the organizer; RU/UA not established)_
- **Our engagement (services we provide):** Income tax (`Income Tax` ✓) and **1099 preparation** (`1099 Preparation` ✓). **No bookkeeping** — `Bookkeeping: N/A`. `Annual Report` is unchecked, so the firm does not file it
- **Fiscal year-end:** _(pending — calendar year assumed from the organizer's 2025 framing, not established)_
- **Accounting platform:** **None.** Double reports `platform: none` / `connectionStatus: unconnected` — there is no QuickBooks behind this client, so there is no ledger the firm can read. The books arrive as whatever the client hands over

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Owner / principal shareholder / portal contact | Oleg Zakala — one contact covers all three roles; details on the Double client (link below) |
| Bookkeeping / day-to-day contact | Not applicable — no bookkeeping engagement |

- **Double client:** [`Zakom Incorporated` — id `710612`](https://app.doublehq.com/close?cid=710612)
- **Double case note** _(only if this client has a matter being tracked start to finish — see the [`double-mcp`](../../../.claude/skills/double-mcp/) skill §7):_ none — **this client has no Double notes at all** (checked 2026-09-13)

## 3. Systems & access

Which systems we use for this client and **where the credentials live** (a Drive
link). Never write the credential itself here.

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Double client portal | How the client sends us documents and completes the organizer | n/a — client's own login | One portal contact, the owner |
| QuickBooks | — | n/a | **Not connected** (`platform: none`) — there is no QuickBooks file for this client |
| Bank | Statements for the return | _(pending — client uploads them himself)_ | **Fifth Third Bank**, account type `5/3 BUS ELITE CKG` (Business Elite Checking, a demand-deposit account), **account ending 7807**, banking centre **Bloomingdale, IL**. Verified 2026-09-13 by opening the January 2025 statement through the redactor; the account and routing numbers were emailed in full in 2023 and stay in Gmail — never in this file. Statements arrive through the organizer, not a bank connection. 🔑 **The recurring `ZAKOM 7807 CASH DISB … OFFSET TRANSACTION` entries are this same account**, not a second one |
| American Express | Company card — a source the firm asks for every year | n/a | 🔴 **The company HAS an Amex and always has.** The client calls it *"Zakom Amex"* in his own words and files it separately from *"Zakom Checking acc"*; the firm holds `Amex Zakom YearEndSummary_2023.pdf`, `Amex 2024 Zakom.pdf` and `Dec Amex balance stmnt.pdf`. **The firm's own annual request letter asks for the December bank AND credit-card statement to confirm balances** _(Julia to the client, Feb 2023)_. ⛔ **Nothing for 2025 has been provided**, though January 2025 shows two Amex ACH payments under two different Amex references |
| American Express — Mema Colors LLC | A SECOND Amex, on a different entity | n/a | ⚠️ See §5 — the client says Mema Colors LLC has no activity except its Amex. **Probably the second Amex reference paid out of Zakom's account in January 2025**, which would make it an intercompany or distribution item, not a Zakom expense |

## 4. Obligations & recurring processes

The recurring work the firm does for this client. **Each obligation below becomes
the raw material for that client's SOP.** Fill the ones that apply; mark the rest
"Applies? _(pending)_" or "Not applicable."

### Sales tax
- **Applies?** _(pending — never raised on any source read so far; a trucking company selling no goods would not normally register)_
- **Jurisdiction(s):** _(pending)_
- **Frequency & due date:** _(pending)_
- **Agency & portal:** _(pending)_
- **Form:** _(pending)_
- **Our role:** _(pending)_
- **Current status:** _(pending)_
- **Process notes (→ future SOP):** _(pending)_

### Payroll
- **Applies?** **No — and that is the finding, not a blank.** The client answered **"no"** to W-2 employees for 2025 on the organizer, so nobody was on payroll, the owner included. See §5 bullet 1
- **Provider / frequency:** none
- **Our role:** none
- **Process notes (→ future SOP):** _(pending)_

### Bookkeeping & monthly close
- **Applies?** **No** — `Bookkeeping: N/A` in Double and no QuickBooks connection
- **Cadence:** not applicable
- **Categorization rules / quirks:** not applicable
- **Process notes (→ future SOP):** the consequence is in §5 bullet 3 — an 1120-S runs off a ledger, and for this client the firm does not hold one

### Income tax
- **Applies?** **Yes** — `Income Tax` ✓
- **Return type(s) & deadlines:** Form **1120-S**. Double's 2025 tax project (`2025 Taxes`, id `219303`) carries a due date of **2026-04-15** and status **Not Started**. ⚠️ A file named `2025 7004 EXT.pdf` sits in `JK Accounting Group > Tax Return Filed > 2025`, so an extension exists — **which tax year it covers has not been checked**
- **Our role:** we prepare and file
- **Process notes (→ future SOP):** the 2025 organizer is the intake route; the method for the return itself is [`form-1120s-preparation.md`](../../sops/form-1120s-preparation.md)

### Licenses & other filings
- **Applies?** Annual report — **not ours** (`Annual Report` unchecked in Double)
- **What & when:** _(pending)_
- **Process notes (→ future SOP):** _(pending)_

### 1099 preparation
- **Applies?** **Yes** — `1099 Preparation` ✓, and the firm has done it before: `Zakom Incorporated - 1099 Preparation 2024.pdf` and `… 2025.pdf` are in Double, with recipient copies filed by year
- **What & when:** the firm prepares the 1099s; the recipients are the company's drivers
- **Process notes (→ future SOP):** the client answered **yes** to making 1099-MISC payments and **yes** that they were filed, but then wrote on the same organizer that **some payees had no corporate name and he can supply names and addresses** — so more may be owed than were issued. That contradiction is open (§6)

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

- 🔴 **This company files in TWO states — Florida and Illinois — and the 2025 organizer says otherwise.** The firm itself established the split when it prepared 2022 (Julia: *"It has to be separated as we are doing 2 state reporting"*, with an Illinois tax deduction on that return and nothing paid to Florida), and the bank's own banking centre is in Illinois. The client then answered **"no"** to operating in more than one state on the 2025 organizer, which suppressed the follow-up asking *which* states. **Anyone working this return off the organizer alone would file Florida only.**
- 🔴 **There is no ledger.** No QuickBooks (`platform: none`), no bookkeeping engagement, so the only books the firm gets are what the client uploads. On 2026-09-13 he returned the firm's own **`Balance Sheet & P&L Templates`** and **`Home Office Deduction`** spreadsheets through the organizer — **whether either is filled in has not been checked.** An 1120-S is prepared off the ledger, not off the organizer, so this is the gate on the whole return.
- 🔴 **No W-2 employees in 2025 — so the S-corp owner took no salary.** The client answered "no" to W-2 employees and "no" to officer compensation, while the company ran a trucking operation all year. That is the **reasonable-compensation** exposure ([`reasonable-compensation` skill](../../../.claude/skills/reasonable-compensation/)), and it is also the condition Julia's netting policy is written around — [`form-1120s-preparation.md`](../../sops/form-1120s-preparation.md) §5C-v applies *"at least"* to S-corp owners who took no reasonable salary. Establish it before the return is prepared, not after.
- 🔴 **The company HAS a credit card, the firm has always known it, and 2025 is the first year nothing was sent.** Established 2026-09-13 from Gmail, in the client's own words: he uploaded `Amex 2024 Zakom.pdf` with the message *"Hi, Zakom Amex 2024"* and filed it separately from *"Zakom Checking acc 24 Stmnts"*. A 2023 Amex year-end summary and a December Amex balance statement are also on file, and **the firm's own annual request has asked for "the December Bank AND Credit card statement to confirm balances" since at least February 2023.** ⛔ **For 2025 there is nothing** — while January 2025 shows **two Amex ACH payments in one day under two different Amex references.**
  🔴 **And a SECOND entity has its own Amex, which Zakom's bank account appears to be paying.** The client, twice in Aug 2025 (by email to Julia and in the portal): **Mema Colors LLC** *"had no activity/revenue in 2024 again just Amex expenses"* and *"I only used its Amex for expenses."* That is the most likely explanation for the second Amex reference paid out of Zakom's account, which would make it **intercompany or a distribution, not a Zakom expense** — ⚠️ **likely, not established.** **Mema Colors has no Double record and no CI file**, yet the firm filed its **BOI report** (Dec 2024) and prepared an **amendment** (Nov 2024). A third entity, **Palm Terra LLC**, also exists — the firm sent its articles, EIN and operating agreement in May 2024, copied to a second person. **Whether either is a live engagement is unestablished — put it to Lilian.**
- 🔴 **The client answered "No" to "was the number of shareholders at the end of the year fewer than 100?"** Read literally that says 100 or more shareholders, which an S corporation cannot have. It is a misread of the question, not a fact — **correct it with him before anything is keyed**, because the organizer's own logic then suppressed the shareholder-list upload that a "yes" would have asked for.
- 🟢 **The `ZAKOM 7807` question is CLOSED, and the answer is reassuring.** `7807` is the **trailing digits of Zakom's own Fifth Third checking account** (the full number was emailed to Julia in 2023 and stays in Gmail, never here). So January's thirteen `CASH DISB … OFFSET TRANSACTION` entries are movements on **this** account, **not** a second account nobody knew about. ⚠️ The **line of credit is still separately real** — the statement answers "Business Loan or Line of Credit? Yes", and the firm holds line-of-credit and SBA documents for 2024 but none for 2025.
- 🟠 **The 2024 filed return is not where the folder convention says it should be.** `JK Accounting Group > Tax Return Filed > 2024` is **empty**; the activity log shows `2024 ZAKOMINCORPORATED.pdf` was placed there on 2026-06-02 and then moved, eight minutes later, into `JK Accounting Group > 1099 > 2024`, where it still sits. `Tax Return Filed > 2023` holds `ZAKOMINCORPORATED_2.pdf`. The prior-year return is the anchor of the 1120-S method, so anyone looking for it in the obvious place will not find it.
- **The owner has a second, personal client record** — `Oleg Zakala & Milana Podrugina` (Double `710652`). A document uploaded to the company's organizer on 2026-09-13, `MilanaPodrugina-LoanDocs.pdf`, belongs to that personal side, not to the 1120-S.
- **Method of accounting is unsettled:** the client answered **"Not sure"**. Read it off the prior-year return rather than asking him again.
- **Vehicles — and one ruling already on record.** The 2025 uploads carry an Audi Q6 **lease** and Porsche Macan financing, and the client answered **"yes"** to purchasing an alternative-fuel vehicle. 🔑 **Julia ruled in Aug 2025 that the 2021 Audi is 100% in use for Zakom Incorporated**, which is why she refused car usage on his personal real-estate 1099; the client confirmed he *"never accounted personal vehicle under Zakom operation in 2024"* and gave the Audi's mileage at 12/31/24. Whether the 2025 Audi Q6 replaces that vehicle, and leased vs purchased, is not established.
- **§179 was used before:** the firm took section 179 on the equipment purchased in 2022, and the equipment is financed with the figures taken from the annual amortisation schedule (the client, Aug 2025). Relevant to how 2025's truck and trailer additions are treated.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
A running, dated record as we build this profile.

- _(2026-05-19)_ — Client record created in Double by Maria Zavarce; the firm's folder structure built 2026-05-28 and the TaxDome material migrated 2026-06-02.
- _(2026-07-30)_ — Lilian set the 2025 tax project to In Progress and **published the `JK 2025 Business Tax Organizer`** to the portal. Julia moved the project back to **Not Started** on 2026-08-04.
- _(2026-09-12)_ — Lilian uploaded `Business Tax Organizer 2023.pdf` and `Business Tax Organizer 2024.pdf` into `JK Accounting Group > Others` (copies of the two already in the migrated `1. Completed organizers` folder).
- _(2026-09-13)_ — **Gmail and Drive swept for the first time** (this client had never been swept). What it settled is in §5: the **two-state FL + IL** filing history, that the **Amex is real and asked for every year**, the **Mema Colors LLC** second Amex, **Palm Terra LLC**, Julia's **2021 Audi = 100% Zakom** ruling, and **§179 on the 2022 equipment**. It also showed the firm chasing the 2023 return in **August 2025** in a portal thread called *"2023 Zakom Tax Preparation - Documents Needed by 8/23"*, and the 2024 organizer completed 2025-08-13 — **this client runs late every year.** ⚠️ The client's **bank account and routing numbers were emailed in plain text in Sep 2023**; they stay in Gmail and are recorded nowhere here.
- _(2026-09-13)_ — **First Client Intelligence file for this client**, created while answering Julia's question about what the client had uploaded. The client has been working the organizer since 2026-09-12 (opened eight times over two days) and has attached the 2025 material himself. Full inventory in the review below.

### Tax year 2025 — the review
<!-- Add one per tax year the firm reviews for this client. -->

- **Organizer:** `JK 2025 Business Tax Organizer - Zakom Incorporated` (id `147762`), published 2026-07-30, **in progress at 75% and NOT submitted** as of 2026-09-13. Visibility is `admins_only`. Double's hand-maintained `Organizer Status` still reads **Sent**, which is behind what the client has actually done.
- **What the client uploaded himself (all into the one "books" question):** **twelve monthly statement files covering January to December 2025** — ⚠️ **and "statement" is all their names say.** None carries an institution, an account or a card name, so **whether they are bank statements, credit-card statements or a mix is NOT established**, and nobody has opened one. In 2023 and 2024 this client named his bank files and his **Amex** files differently and explicitly; the 2025 set uses a third convention (`<mon>25 stmnt.pdf`) that identifies nothing. 🔴 **No 2025 credit-card statement is identifiable, and no 2025 line-of-credit or SBA statement was uploaded either** — all three exist for earlier years. **That is a question for the client, not a conclusion.** 🔎 **The cheapest test:** `Jan 25 Zakom.pdf` (old convention, already in `Client uploaded documents`) and `Jan 25 stmnt.pdf` (the organizer upload) are the same month — same document means the twelve are the bank's and the card is missing; different documents mean there are **two accounts** and both series must be requested. Then: equipment and truck **interest** statements; trailer and truck **invoices and financing contracts** (Benson trailer 2022, Reitnouer 2026, a 2023 freight document); **vehicle** documents (Audi Q6 lease, Macan financing); the firm's own **Balance Sheet & P&L** and **Home Office Deduction** templates returned; and one **personal loan document belonging to the owner's partner**. Several are duplicates and three sit outside tax year 2025 (2022, 2023 and 2026 dates).
- **What the organizer still does not have:** the **EIN / SS-4 letter** and the **driver's licence or passport** — both required, and both answered with the text *"na"* instead of a file; the **state incorporation documents** (required, empty — but the firm already holds articles of incorporation in the migrated `Client uploaded documents` folder, so **do not ask him for it**); the **date the business started**, the **dates of the federal and state S-corporation elections**, the **date of incorporation** and the **percentage of ownership**, all blank; and the **digital-asset question**, which is required and unanswered.
- **Answered, and worth having recorded:** no W-2 employees; 1099-MISC payments made and filed, with a written note that some payees had no corporate name; no inventory; no foreign financial accounts and no foreign taxes paid; no cancelled or renegotiated debt; no estimated tax payments made for the year; not a member of a controlled group, not a subsidiary, not a personal holding company, not a qualified personal service corporation; no dividends paid or received; no tax-exempt interest; no research or experimental expenditure; no low-income housing; one state only; accounting method **"Not sure"**; **yes** to an alternative-fuel vehicle purchase but **no** to the fuel credits.
- 🔑 **The firm's own request letter names what is missing.** Julia's standing template email to this client _(Feb 2023, and the pattern every year since)_ asks for the completed **Profit & Loss, Balance Sheet and Asset List**, plus **the December bank AND credit-card statement to confirm balances**. Measured against that list, 2025 has the bank statements and **neither a completed P&L/balance sheet nor any credit-card statement** — so the gap is not a judgement call, it is the firm's own checklist unfilled.
- **Statement identity — SETTLED 2026-09-13.** `Jan 25 Zakom.pdf` (migrated `Client uploaded documents`) and `Jan 25 stmnt.pdf` (the organizer upload) were both opened through [`tools/redact-doc/`](../../../tools/redact-doc/) at Lilian's request: the redacted text is **byte-for-byte identical** (same page count, same character count, same mask counts, same checksum). **They are the same document, so the same account** — **Fifth Third Bank `5/3 BUS ELITE CKG`**, a business checking account, one account on the statement. ⚠️ **Only January was opened**; that the other eleven months are the same account follows from the naming pattern and is **not verified**. ⚠️ **Pages 4–6 of the statement carry only a repeated page header in the extraction** — the substantive content (summary, debits, deposits, daily balances) is on pages 1–3 and did come through, but **nothing may be reported as absent on the basis of those three pages**.
- **What January 2025 establishes about the year** _(figures stay out of the repo — they are in the statement itself)_: the company's deposits are dominated by ACH and RTP receipts from a single payer, **OWL LAND OF ILLINOIS INC**, so revenue concentration is a question worth asking and a 1099 from that payer worth looking for; the account pays **FPL**, **Verizon** and fuel at **Costco**; and it carries a **monthly service charge with waiver criteria**, one of which the statement answers as "Business Loan or Line of Credit? **Yes**".
- **Live activity to be aware of:** the client removed two attachments on 2026-09-13 (`1840 trt invoice 263894.pdf` at 19:10 UTC and `Balance Sheet & P&L Templates (2) (1).xlsx` at 20:01 UTC) and both names are present again in the responses read at 20:12 UTC — he is swapping files as he goes. **Nothing here should be treated as final until he submits.**

### Outstanding items (CI-only — never in the SOP)
Open follow-ups from meetings / emails / calls — e.g. what Julia discussed last,
tasks owed. Keep the **live** list in Double tasks / Ping action items and point to
it here; these never go into the client SOP.

- **Reasonable compensation for 2025** — no W-2, no officer compensation, a full year of operations. To be settled before the return (§5 bullet 1).
- **The shareholder-count answer** has to be corrected with the client (§5 bullet 2).
- **Are the returned Balance Sheet / P&L and Home Office templates actually filled in?** Nobody has opened them. This is the gate on the return.
- **The 1099 contradiction** — filed, yet payees without a corporate name remain and he offered names and addresses. Ask what is still owed.

### Information still needed

- [x] **Which account the 2025 "stmnt" files belong to** — **Fifth Third Bank business checking (`5/3 BUS ELITE CKG`)**, established 2026-09-13 by opening January through the redactor; the two January copies are the same document. ⚠️ Only January was opened — the other eleven months are assumed, not verified
- [ ] 🔴 **WHICH STATES the 2025 return covers** — the firm filed FL + IL for 2022; the client answered "no" to multi-state on the 2025 organizer. Settle it before preparing, and check whether an Illinois return is owed for 2023 and 2024 too
- [ ] 🔴 **Is Mema Colors LLC a live engagement, and is Zakom paying its Amex?** No Double record, no CI file, yet the firm filed its BOI and an amendment. Same question for **Palm Terra LLC**. **Lilian decides whether either gets its own file**
- [ ] 🔴 **The 2025 Amex statements — a CONFIRMED gap, not a question.** January 2025 shows two Amex ACH payments with two different Amex references, so the card(s) were live. Ask for the full 2025 statements of each, **and establish whether the cards are the company's or the owner's personally** — the payments carry his name, which makes company-paid personal cards a distribution question
- [x] **What `ZAKOM 7807 CASH DISB … OFFSET TRANSACTION` is** — **movements on Zakom's own Fifth Third account** (`7807` is its trailing digits, from the 2023 email). Not a second account. The line-of-credit statements are still owed
- [ ] **The Cash App payments to named individuals** from the business debit card — recurring in January, and the same 1099 question the client raised himself
- [ ] **2025 line-of-credit and SBA loan statements** — both on file for 2024, neither for 2025, and the January statement confirms a facility is still in place
- [ ] Whether the returned `Balance Sheet & P&L Templates` and `Home Office Deduction` spreadsheets contain figures
- [ ] Reasonable-compensation position for 2025 (no payroll ran)
- [ ] Method of accounting — read it off the prior-year return, do not re-ask
- [ ] Dates: business started, incorporation, federal and state S-election
- [ ] Percentage of ownership for the principal shareholder
- [ ] The digital-asset question (required, unanswered)
- [ ] Corrected shareholder-count answer
- [ ] Which tax year `2025 7004 EXT.pdf` actually extends
- [ ] Whether `2024 ZAKOMINCORPORATED.pdf` in `1099 > 2024` is the filed 2024 return, and refiling it under `Tax Return Filed > 2024`
- [ ] Audi Q6 and Macan — leased or purchased, and business versus personal use
- [ ] Whether the company really operated in one state only, for interstate trucking
- [ ] Primary language of correspondence
- [ ] Fiscal year-end (calendar year assumed, not established)
- [ ] Sales-tax position — whether the company is registered at all

## 7. Links

- **Double client:** [`Zakom Incorporated` — id `710612`](https://app.doublehq.com/close?cid=710612)
- **Double case note** _(only if this client has a matter being tracked start to finish — see the [`double-mcp`](../../../.claude/skills/double-mcp/) skill §7):_ none — no notes exist on this client
- **Double 2025 organizer:** [`JK 2025 Business Tax Organizer - Zakom Incorporated` — id `147762`](https://app.doublehq.com/clients/710612/portal/organizers/147762)
- **Double 2025 tax project:** [`2025 Taxes` — id `219303`](https://app.doublehq.com/tax-return?cid=710612&projectId=219303)
- **Google Drive folder (sensitive vault):** _(pending — none located)_
- **Related clients:** [`Oleg Zakala & Milana Podrugina`](https://app.doublehq.com/close?cid=710652) — Double `710652`, the owner's personal record; no CI file yet
- **Related SOPs:** [`form-1120s-preparation.md`](../../sops/form-1120s-preparation.md) — the return method for this client's form
