# Valentin Volzhanskiy

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-09-24 *(the 2025 return is finished and reproduces line for line; one item open — the mileage, with the client; the employer-coverage question dropped on her instruction)*

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

- 🔴 **HE ANSWERS THE ORGANIZER'S INCOME-SOURCE QUESTION WITH `Wages (W2)` ONLY, WHICH IS WRONG AND
  SILENTLY CLOSES THE WHOLE SELF-EMPLOYED BRANCH.** He did exactly this on the 2025 organizer while
  uploading 1099-NECs in the same submission. Because the organizer is conditional, that single tick
  means he is **never asked** for business expenses, mileage, home office or a P&L — so a Schedule C
  arrives with income and no deductions. **Do not trust that answer; ask the business questions
  directly.**
- 🔴 **HE HAS MARKETPLACE HEALTH INSURANCE, SO FORM 1095-A GATES HIS RETURN EVERY YEAR — and it
  has already cost him money.** His 2024 return carried an **excess advance premium tax credit
  repayment** on Schedule 2 line 1a because his advance credit exceeded what he was entitled to.
  **Form 8962 is mandatory and blocks e-file**, and his income moving up or down changes the
  repayment. ⚠️ **Coverage months vary year to year and must be read off the form, never assumed:**
  **2024 had a four-month gap; 2025 ran all twelve with NO gap.** *(Corrected 2026-09-17 — this
  bullet used to state the gap as a standing fact, and it is one of the four that publish.)* 🔴 **Get the 1095-A early, and get it as an ORIGINAL PDF from healthcare.gov** — almost
  everything he uploads is a phone photograph with no text layer, which no tool can read and
  which has to be keyed by eye.
- 🔴 **HE IS A TIPPED WORKER, AND FROM 2025 THAT IS A DEDUCTION — his employers report the tips
  in TWO DIFFERENT BOXES, so one of them is easy to miss.** One 2025 employer reported tips in
  **Form W-2 box 7** (`Social security tips`); another reported none in box 7 at all and instead
  put the tip figure in **box 14 marked `TIPS`**, with the tips folded into boxes 1, 3 and 5. The
  box-14 one is by far the larger. **Read box 7 AND box 14 on every W-2 he sends**, every year.
  The deduction is claimed on **Schedule 1-A (Form 1040) Part II**, which did not exist before 2025.
  🔴 **But reporting is not eligibility, and his employers are the risky kind:** a **service charge
  or automatic gratuity distributed to staff is NOT a qualified tip**, and **both tip-bearing
  employers — and in fact all four of his 2025 employers — are contract catering, events or
  concessions businesses**, where a fixed distributed service charge is normal. 🆕 ⚠️ **The figure WAS claimed on 2026-09-13 on the
  reporting route — so the ask moved: split it before FILING, because eligibility is still not
  established.**
  🛑 **ASK IT PRECISELY, OR IT RETURNS A FALSE NEGATIVE.** ✅ **A tip pool qualifies — even a mandatory
  one**; the rule expressly covers a *"mandatory or voluntary tip-sharing arrangement, such as a tip
  pool"*. ⛔ **What disqualifies is a charge added to the CUSTOMER'S BILL** by the establishment.
  🔑 **So "was it mandatory?" is the wrong question. The right one is where the money originated: did
  the customer choose to pay it, or did the invoice impose it?**
- 🔴 **HIS 2024 SCHEDULE C DEDUCTED `GAS & FUEL` WITH NO VEHICLE INFORMATION ON THE PAGES WE
  RECOVERED — AND IF THAT WAS CAR FUEL IT MAY HAVE CLOSED THE BETTER METHOD.** It was deducted as
  an ordinary business cost rather than as a **car and truck expense**, and **nothing on the
  recovered pages asks or answers** when a car went into service, how many miles were business, or
  whether he keeps a log. ⛔ **Two things are NOT established and must not be repeated as fact:**
  **page 12 of 12 of that return was never read** *(and a Form 4562 would print exactly there)*,
  and the detail says only `GAS & FUEL` — **on a catering business that can legitimately be fuel
  for equipment rather than for a car.**
  🔑 **Two consequences.** The deduction has **no business-use percentage** behind it, and the IRS
  does not allow amounts that are approximated. And because deducting fuel is the **actual-expense**
  method, it puts the **mileage-rate method at risk for that car** — for a **leased** car the rules
  are clear that it is out; for a car he **owns** it is **arguable**, and the choice cannot be made
  later because it is fixed at the return's due date. ⚠️ **Not settled — a position to take once the
  facts are in. Establish owned-or-leased, the first business-use year, and the mileage before
  touching the car again.**
- 🔴 **ALMOST EVERYTHING HE UPLOADS IS A PHONE PHOTOGRAPH WITH NO TEXT LAYER.** His 1095-A, his
  1099-NECs, his LLC papers, his installment agreement and one of his W-2s are all scans — they
  cannot be read by tooling and must be read by eye. **Ask for the issuer's original PDF** wherever
  one exists (Marketplace, payroll portals), or budget the time to key them manually.
- 🔑 **He receives 1099-NEC income from companies that are themselves JK clients — and in 2025 that
  is how a whole payer was found that he never mentioned.** Pro Title Agency LLC, Maxratings LLC
  and **VoiceCapital Inc** are all payers the firm prepares 1099s for. So **the firm's own records
  can corroborate what he was paid**, which is a real advantage — but the form lives in the
  **payer's** folder, not his, so it is invisible from his own file, his uploads and his organizer
  answers. ✅ **Standing rule for this client: before computing his Schedule C, search the firm's
  Drive for his NAME across every payer folder, not just his own.** *(2026-09-13 — that search is
  what produced the VoiceCapital form, and reading it confirmed it.)*
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
- _(2026-09-12, later)_ — **Lilian asked why the prior year's Schedule C line 9 was empty** when
  fuel had been deducted. Researched against the IRS instructions and Pub. 463 for both years:
  fuel for a business car belongs on the car-and-truck line, the duty to give the vehicle
  information is triggered by **claiming any vehicle expense** rather than by using that line, and
  the deduction must be limited to the **business portion** worked out from miles. **Recorded as a
  defect with two stated unknowns, not as a finished conclusion** — the working paper's §3E has the
  full working, the branches and the six-step fix.

- _(2026-09-13)_ — **Lilian asked how we knew a VoiceCapital 1099 existed and where to find it.**
  Retrieved the document itself and **settled it: it is his.** It sits in Google Drive in the
  **payer's** folder — `VOICECAPITAL INC` → `2025` → `1099 2025` — prepared by the firm on
  **2026-01-31** through tax1099.com along with that payer's other 1099s. 🔑 **That location is the
  whole explanation of why nobody saw it:** it was never in his own folder, he never uploaded it,
  and he listed no such payer. **Four fields cross-check** — his full name, the **Fort Lauderdale**
  address he gave on the 2025 organizer *(not the older one)*, the last four of the recipient TIN,
  and the 1099's payer-assigned **account-number box, identical to the Pro Title Agency 1099**
  issued to him. ⚠️ **They are four fields of ONE record the firm itself keyed, not four
  observations**, so what carries the confirmation is the **TIN check against a W-2 of his** — the
  only one tested against data the firm did not enter. ⚠️ **And it is narrower than it sounds:** the
  redactor emits tags, never digits, so the only W-2 that could have supplied those four digits is
  the **Compass Group** one — **which came off the same unmasked channel as the 1099**. 🔑 **Both
  sides of the strongest tie are OCR'd digits on one route.** **Blocker ③ closed; the figures stay in the
  working paper, never here.**
  🔴 ⚠️ **AND THE ROUTE MATTERS: it was read through Google Drive's own indexed text, NOT the
  redactor** — the second document on this client pulled in with no masking, and the third use of
  that route *(the working paper's §4
  decision 6 records it; FOLLOW-UPS row 103 is the open decision)*. **Nothing from the identity
  block was written anywhere**, and the ties above are recorded **by existence, never by value**.
  ⚠️ **What is established is that the firm PREPARED it** — ⛔ *not* "issued", which means furnished
  to him; whether it was transmitted to the IRS and furnished to him is a separate, smaller
  question.

- _(2026-09-13, later)_ — 🟡 **THE 2025 RETURN WAS PREPARED** by Lilian in ATX and brought back for
  review. **Blocker ① closed in the same pass** — she supplied the Form 1095-A directly, so the
  unreadable scan never had to be defeated: **twelve months of Marketplace coverage with no gap**,
  which is a change from 2024's four-month gap. The return was **checked line by line** and the
  arithmetic holds throughout. **Two things it got right that nothing in the 2025 paperwork would
  have prompted:** the prior-year **qualified-business-loss carryforward** is on Form 8995 line 3
  *(it exists only on the 2024 return; a preparation that never opened last year would have put a
  zero there)*, and the **Schedule C start-date box was not re-ticked** — the most reproducible error
  in this client's file, and it was not repeated.
  🔴 **Two things are open and both move money.** ① The **Schedule C carries no expenses at all** —
  a declared, documented decision *(the client never returned the P&L template)*, but its cost
  compounds: it overstates the profit, the self-employment tax, the AGI **and the health-insurance
  repayment**, in that order. ② **The larger employer's box-14 tips.** 🆕 ✅ **INVERTED THE SAME DAY
  (p.m.): Lilian KEYED them**, so the deduction is **claimed**, not missing — see the fifth entry
  below. *(It read, in the a.m.: they are nowhere on the return.)* ⛔ **What stays open is their
  ELIGIBILITY**, worth **low four figures** of tax.
  🔑 **And one thing nobody would look for: he lands JUST UNDER the 400%-of-poverty-line threshold
  where the premium-tax-credit repayment cap disappears entirely.** Income that turns up later does
  not cost its marginal tax — **crossing that threshold costs several thousand at once**, because the
  cap goes AND the excess itself grows. **The missing business expenses push him away from it.**
  ⓘ *The percentage, the headroom and the arithmetic are in the working paper §9E — not here.*
  ⓘ *A Double note (**524890**) records the preparer's own three assumptions for the reviewer.*

- _(2026-09-13, third)_ — 🛠️ **THE ATX ENTRY ROUTE FOR BOX-14 TIPS WAS ESTABLISHED** — Lilian keyed
  the larger employer's box-14 tip figure and asked why the Description dropdown offers no `TIPS`
  option. 🔑 **It offers none because the IRS prescribes no codes for box 14 at all** — the box is
  literally *"Other"* and carries whatever the employer chose to write, so **leaving the descriptor
  blank changes no figure.** ⛔ **And box 14 feeds nothing:** the fields that reach Schedule 1-A are
  the **`Qualified Tips (No Tax on Tips)` checkboxes at the top of the same W-2 screen**, plus a
  separate **`Qualified tips (in Box 7)`** dollar field beneath box 7. For this employer the second
  checkbox is the one that fits — *"Box 7 social Security tips is blank"*.
  🛑 **But ticking it is the ELIGIBILITY ASSERTION, not a data-entry step**, and eligibility is still
  the open question that goes to the employer. **Written up with both traps in the working paper
  §9D.** ⓘ *Worth knowing for next season: the 2026 W-2 splits box 14 and adds a dedicated box 12
  code for cash tips, so this route is a 2025-only transition.*
  🔑 **Two things came out of it that outlive this client.** ① **Ticking the checkbox reveals an empty
  field and pulls nothing** — the amount is typed, so "the number is not flowing" is almost always
  that field, not a software fault. ② **That field's label names only the monthly employee tip report
  (Form 4070), which is NARROWER than the IRS rule**: the 2025 Form 1040 instructions give four
  methods for figuring qualified tips and the third is *"if your employer voluntarily chooses to
  report the amount of your tips in box 14 … you can use the amount reported to you"* — **box 14 is a
  source in its own right, with no employee tip report anywhere.** The IRS says why on the same page:
  the 2025 W-2 was never updated to carry this separately.

- _(2026-09-13, fourth)_ — 📋 **A STANDING CONVENTION FOR THIS RETURN, at Lilian's instruction:
  every consideration taken while preparing it is drafted as a note bullet ON THE DAY, and the whole
  note goes to Julia ONCE when the return is finished.** *("Cuando terminemos, hagamos una nota para
  Julia con todos los comentarios de los análisis que hicimos en esta declaración.")* 🔑 **The reason
  is the review gap:** Julia reviews the return afterwards and was not in the room, so reconstructing
  the reasoning on the last day is how it gets lost. **The accumulating draft lives in the working
  paper §10**; the live note is the Double one. 🆕 **All four bullets are now published** *(2026-09-13,
  p.m.)* — the fourth reports the position taken on the tipped income.
  ⚠️ **Rule 11's default keeps our analysis out of Double notes. She authorised it for THIS note by
  name, case by case — it does not generalise.**

- _(2026-09-13, fifth)_ — 🟡 **THE TIPPED INCOME WAS CLAIMED, and the note to Julia was updated to
  say so.** The larger employer's box-14 tip figure had been left off the first version of the return;
  Lilian keyed it, and **every figure on the second version was re-verified** *(two sections were missed on the first sweep and corrected the same day on an independent review)* — the multi-employer
  mechanics resolved correctly and nothing that should have stayed still moved *(the AGI and the
  health-credit repayment are both unchanged, which is what proves it)*.
  🛑 **AND A PROCESS LESSON WORTH MORE THAN THE FIGURE.** The note bullet had been drafted hours
  earlier, when the deduction was **not** on the return, and it said so. ⛔ **Posting it unchecked
  would have told the person who signs the return the OPPOSITE of what the return does** — and
  nothing in the note itself would have shown it. ✅ **It was held instead, with the one number that
  distinguishes the two states written down**, and rewritten once that number was seen.
  🔑 **The rule: a note drafted while someone is still at the keyboard goes stale between the drafting
  and the posting. Name the number that settles it, and hold the bullet until someone looks.**
  ⚠️ **What is still open is now a LIABILITY rather than a gap:** the deduction is claimed and its
  eligibility is not established, so the deadline moved from the keystroke to the filing. **Two
  questions to the employer close it** — what the job actually was, and how much of the figure the
  customer chose to pay rather than the invoice imposing it.

- _(2026-09-17)_ — 🔬 **SECOND PASS OVER THE PREPARED RETURN — Lilian asked for it to be "started",
  and it was already prepared, so the work was to close what the review said it had NOT done.**
  ⛔ **Nothing on the return was changed and nothing was written to Double.** Everything came from the
  working paper, the 2025 forms and instructions at irs.gov, and Double metadata — **no client
  document was opened and no organizer answer was read.**
  🆕 🔴 **THE HEADLINE IS A DEDUCTION NOBODY HAD LOOKED FOR: Schedule 1-A has more than one Part, and
  only Part II was ever analysed.** **Part III — No Tax on Overtime** — is live on someone working at
  four catering, events and concessions employers, and 2025 W-2s were **not required to report
  overtime separately** *(the same transition gap that hid his tips in box 14)*. ⛔ **His pay basis
  and FLSA status are NOT established** and are part of the same employer ask. It is **neither
  claimed nor ruled out**. **Part IV — car loan interest — was never asked about either**, though it
  rides on the owned-or-leased conversation already open. ⓘ *Both Parts carry statutory caps; the
  figures live in the working paper.*
  ✅ **§162(l) IS NOW A COMPUTATION, NOT A QUESTION:** Pub. 974's Worksheets W and X give
  **Schedule 1 line 17 = the repayment amount**, because the advance credit covered **100%** of his
  premiums — so the premiums are **not** the deduction, and the earlier sizing overstated it ~3.6×.
  ⚠️ **It is gated on an EMPLOYER question, not a client one: eligibility — not enrolment — for a
  subsidised plan in any month, across four employers.** ⛔ **And that is NOT the test Form 8962
  already passed**, so the twelve accepted coverage months are not the answer. 🔑 **The same fact
  reaches the credit too**, which is why it is worth asking once and recording.
  ✅ **The estimated-tax penalty is VERIFIED** *(and the paper's description of how was wrong — the
  Form 2210 "short method" no longer exists)*, and **Form 8995 line 11 is confirmed off the
  instruction rather than derived.**
  🛠️ **Four stale statements in THIS file were corrected**, one of them on a **published** card: it
  asserted his coverage has month-gaps as a standing fact *(2024 did; 2025 ran all twelve with none)*;
  two more still described the tips as unclaimed after they had been keyed; and the prior-year
  section still told the next preparer to reproduce 2024's `Other expenses` presentation — **which the
  working paper had reversed** — while naming **line 27a**, which on the **2025** Schedule C is
  `Energy efficient commercial bldgs`, not Other expenses *(that is now line 27b)*.
  ⓘ *Full working, with every figure and its form/line, in the working paper **§11**; the figures stay
  there and never here.*

- _(2026-09-17, later)_ — 📤 **THE ATX WORKLIST WAS DELIVERED TO LILIAN AS AN ON-BRAND PAGE.** She
  asked for the tables to work from at the keyboard, plus what is still to ask and what is missing.
  🔑 **The shape is the one the firm settled on 2026-09-06: she types into the software from the
  page, so the page carries more than the chat would** — every figure in the entries tables with its **form, page,
  part and line**, **the arithmetic that produced it**, marked **typed** or **computed**, and the
  **ATX entry route, marked NOT ESTABLISHED for both** since no session has keyed either; plus a
  **tickable worklist that remembers itself**, grouped by **where she is working** rather than by
  importance.
  ⛔ **Two entries are shown as BLOCKED rather than ready to key** — both wait on the employers, and
  presenting a conditional figure as an instruction is how a wrong number gets typed.
  🛑 **AND WHAT THE PAGE DELIBERATELY DOES NOT CARRY, caught by the independent review: the question
  list and the missing-items inventory are PHASE 1's REVIEW OUTPUT, and the firm's rule is that the
  review goes in the CHAT while the tables go on the page.** The first version carried both; they
  were removed and delivered in chat. ⛔ **There was an argument that restating already-open items is
  not review output — and that is exactly the reasoning the firm forbids.** The page invites her to
  overrule it; a session may not.
  🔒 **No organizer-sourced VALUE reached the page, and no identifier of any kind** — given name only.
  ⚠️ *The first version of this entry claimed "two items" rest on organizer answers; there were at
  least four, three of which left with the question list, and none was ever a value. The wider
  organizer-DATA reading is still an open question for her, not something this delivery settled.*
  ⚠️ *And it is a hosted page whose URL travels onward by itself — not a file that dies with the
  session. Hers to delete once the return is filed; deleting does not undo a forward already made.
  Figures stay in the working paper and on that page — never here.*

- _(2026-09-17, third)_ — 🔁 **THE PREPARED RETURN WAS RE-READ at Lilian's request** *(several days
  had passed and she wanted to know what was outstanding)*. **Read through the redactor.**
  ⚠️ **The by-hand leak grep the firm requires on a glyph-decoding read was clean FOR SSN SHAPES —
  that is what it tests, and it should not be read as a clean bill.** 🔴 **It was not: the taxpayer's
  home street line came through UNMASKED three times**, which is a reproducible gap in the tool and is
  now logged against the follow-up that already tracks that family. **Nothing reached the repo.**
  🛑 **THE HEADLINE: nothing that PRINTS has changed since 13 September**, and **none of the second
  pass's figures appear anywhere.** ⛔ **Stated that way on purpose — this searched a printed package,
  so it cannot see input-screen state**, and two of the open checks live exactly there. Only two
  things moved on the printed package, neither a figure: it was **reprinted** *(the preparer's
  signature date moved with it)*, and **ATX's own penalty worksheet is now in it**, which previously
  was not — itself proof the software was opened that day.
  ✅ **FOUR THINGS THE READ CLOSED**, all previously derived or unchecked: the qualified-business-income
  form's own input line reads the **net-of-SE-tax** figure rather than the gross *(it had been listed as
  an on-screen check and turned out to print)*; its **taxable-income-before-the-deduction line is now READ, not derived**;
  its **carryforward line prints ZERO, so nothing carries into 2026** — established rather than
  inferred; and the **estimated-tax penalty is corroborated by the software's own quarterly
  worksheet**, which foots to the same figure and to the prior-year safe harbour.
  🔴 **AND THE SIGNATURE DATES — an OPEN ITEM, not a defect, and be exact about what is new.** The
  taxpayer's signature is dated the day the **EXTENSION** was filed; the preparer's, the day the
  package was reprinted. ⛔ **That gap was already recorded on 13 September and has moved by three
  days — it is the same finding.** 🆕 **What IS new: the signature form is not in the package at
  all**, so the thing that had to be checked still cannot be checked from a PDF.
  ⛔ **An authorisation dated before the return existed is not valid authorisation.** The signature
  form itself is not in the package, so it has to be checked on the signature screen and a fresh one
  obtained before e-filing.
  ⛔ **Two checks a printed return can never close** — the source of the carryforward input, and a
  W-2 eligibility checkbox — **are input-screen state and print nowhere.** They stay open however
  many times the package is re-read.
  ⓘ *A number that looked like an unexplained adjustment turned out to be the extraction
  concatenating a line number with a zero value; the arithmetic settled it. Recorded in the working
  paper so nobody re-chases it. Figures stay there — never here.*

### Tax year 2025 — the review
<!-- Add one per tax year the firm reviews for this client. -->

- **What gated the return.** Four things, and none of them was a missing document in the ordinary
  sense. ⓘ *🟡 **Superseded 2026-09-13: TWO closed that day (① and ③), and Lilian prepared the return
  without the other two** — see the log entry above and the working paper §9. Kept as written because
  it is what the review found:*
  1. ✅ **CLOSED 2026-09-13 — the Form 1095-A was read.** It read: *it is on file — he uploaded it —
     but it is a photograph with no text layer, and Form 8962 cannot be computed without its
     month-by-month columns.* **Lilian supplied the document directly**, so the scan never had to be
     defeated: **twelve months of coverage with no gap**, unlike 2024's four-month one, and Form 8962
     was computed and checked.
  2. **The Schedule C has income and no expenses.** His 1099-NEC income is established from the
     documents, but the organizer's `Wages (W2)`-only answer meant he was never asked a single
     business question. The prior year deducted fuel and phone costs; this year's equivalents have
     not been collected.
  3. ✅ **CLOSED 2026-09-13 — a 1099-NEC he did not report DOES exist, and it is his.** A 2025
     Form 1099-NEC issued by **VoiceCapital Inc** — a payer the firm also serves — was found and
     then read in the **payer's** Drive folder, never his own. It is **not** in his Double folder,
     he did not upload it and he listed no such payer. It is the **second largest** of his three 1099s and close to
     **half his contractor gross**, so it moves the Schedule C, the self-employment tax and the
     premium tax credit together. 🔑 **What
     remains is a client conversation, not a blocker: ask him what the work was**, because the
     Schedule C's principal business and code depend on the answer.
  4. 🆕 🟡 **SUPERSEDED 2026-09-13 (p.m.) — THE TIPS WERE CLAIMED.** *(It read: the deduction is new,
     large and **unclaimed**.)* He is a bartender with tips reported by two different employers in two
     different W-2 boxes, and he answered **"None of the above"** to the organizer's 2025-updates
     question. **Lilian keyed the box-14 figure; the multi-employer computation resolved on the form.**
     🔴 **So this is no longer a gap but a LIABILITY: the deduction is claimed and its ELIGIBILITY is
     still not established, and the deadline moved from the keystroke to the FILING.** ⚠️ **Items 1
     and 3 of this list were individually ticked while this one was not, which made it read as
     current — corrected 2026-09-17.**
- **Questions put to the client.** (Answers to be appended here as they arrive.)
  - [x] ~~Confirm whether he was paid by **VoiceCapital Inc** during 2025~~ — ✅ **answered from the
        firm's own files on 2026-09-13, without asking him.** He was. *(The form is the one the firm
        itself prepared.)*
  - [ ] Ask for the **business expenses** behind the contractor work — vehicle/fuel, phone, and
        anything else — and whether he kept a mileage log.
  - [ ] Ask what the **contractor work actually was**, so the Schedule C's principal business and
        code are right and so we know whether it is the same activity as the prior year's catering.
  - [x] ~~Ask for the **Form 1095-A as an original PDF**~~ — ✅ **answered 2026-09-13**; Lilian
        supplied a readable copy. ⚠️ **But one thing came out of it that is still open: the
        Marketplace holds his OLD address**, which rates next year's benchmark plan off the wrong
        county.
  - [ ] Ask whether he had **tips at every job**, and ask for final pay stubs or a payroll summary
        for the employer that reported none in box 7.
  - [ ] Ask whether he actually made any **estimated tax payments** in 2025 — his organizer says
        "yes" and then explains that he owes money, which are different things.
  - [ ] Ask about the **Delaware LLC**: its name, whether it traded in 2025, and whether it has its
        own EIN or bank account.
  - [ ] Confirm the **address** to use on the return.
  - [ ] Ask whether the **car is owned or leased**, and **when it was first used for this business**
        — this is what decides which expense method is even available.
  - [ ] Ask for **total miles and business miles for 2025**, and whether a **written mileage log**
        exists. Without them no vehicle figure is defensible under either method.
  - [ ] Ask whether the prior year's fuel was for a **car** or for **business equipment** — on a
        catering business it can legitimately be either, and the answer decides how much of the
        vehicle finding applies at all.
- **What the prior-year return established.** The 2024 return is the firm's own work and it settles
  several things the 2025 documents never mention:
  - Filing status **Single**; no dependants; standard deduction; Florida only, **no state return**.
  - A **Schedule C** existed, with the "started this business" box ticked for 2024 — **that box must
    not be ticked again for 2025.**
  - Every Schedule C deduction sat in **`Other expenses` (itemised in Part V)** and nothing on a
    named line — the firm's own convention, not an outside preparer's.
    🔴 **DO NOT REPRODUCE IT WHOLESALE — the working paper REVERSED this on the evidence** *(§3E, §4
    decision 4, 2026-09-12)*: a car's **operating** costs belong on **line 9**, depreciation on 13,
    lease payments on 20a, ⛔ **never `Other expenses`.** *"The firm did it last year" is a reason to
    be consistent, never a reason to repeat an error.*
    ⛔ **AND THE LINE NUMBER HAS MOVED — this bullet used to say "line 27a", which is wrong for 2025.**
    ✅ **Read off the 2025 Schedule C PDF (irs.gov, 2026-09-17): line 27a is now `Energy efficient
    commercial bldgs`; `Other expenses (from line 48)` is line 27b.**
  - **A qualified-business-loss carryforward runs into 2025** — the 2024 Form 8995 closed with a
    negative total on its last line. Nothing in the 2025 documents points at it; it is only
    knowable from that return.
  - The 2024 return carried an **excess advance premium tax credit repayment**, with coverage in
    some months and not others.
- **What was decided.** 🟡 **Superseded on 2026-09-13.** It read: *nothing was computed; Block A came
  back blocked, so the review stopped at the question list rather than producing figures, per the
  firm's rule against preparing around a hole.* **That held for a day.** Two blockers then closed,
  and **Lilian prepared the return without the other two** — the Schedule C expenses as a declared,
  documented decision, the tips question still open. **The return is prepared and checked, and is NOT
  yet filed.**

### 2026-09-18 — the client's own expense workbook, and what it settled

**He uploaded a spreadsheet he had built for us** — a full-year extraction of **four bank and card
accounts of his** *(the institutions are named in Double, and in the working paper)*, with his own
classifications on it. It says of itself that it is *"not a filed tax return"* and refers every
judgement back to us. 🛑 **It has no business-purpose column, so it can be triaged and not
categorised** — the same defect the
[`personal-card-reimbursement`](../../../.claude/skills/personal-card-reimbursement/) skill exists for.
By its own count, well under one per cent of the pooled outflow is a high-confidence deduction
candidate.

🔴 **THE FINDING THAT MATTERS MOST IS ON THE INCOME SIDE AND IT RUNS THE OTHER WAY.** The workbook
leaves a large block of inflows *"unclassified"*, and the client's own sheet labels two of those
payers **"work income"**. 🔑 **They are two of the four W-2 employers already on his return.** The
tool had keyed on the literal word `PAYROLL` in the bank description; one employer changed its
descriptor from `DIRECT DEP` to `PAYROLL` mid-year, and every earlier deposit fell out of the payroll
bucket. **The net-pay tie-out confirms it — for one employer it is exact to the penny against box 1
less boxes 2, 4 and 6.**
⛔ **So "work income" in his vocabulary means "money I earned by working" — it is NOT a statement
about which schedule a dollar belongs on**, and no unclassified deposit goes on a Schedule C until its
payer has been checked against his W-2 employers. **Reporting it would report the same wages twice and
turn them into self-employment income.**

✅ **CREDIT REPAIR IS CONFIRMED** — Lilian suspected it and the client's own sheet says it: his
credit-monitoring subscription is *"used for credit-repair business"*, one contractor he pays is
recorded as *"contractor / credit repair"*, one of his payers is a credit-repair company, and the
largest payer on the return is one too. **On the money it is the main activity, not a sideline.**

🆕 **AND A THIRD ACTIVITY NOBODY HAD RAISED — REAL ESTATE.** The same sheet records **brokerage fees
to a Florida brokerage (LOKATION)**, **real-estate licence-renewal education**, and business meals
described as *"meetings with realtors"*. **Nothing on his return mentions real estate at all, and a
person does not pay a brokerage fee or renew a licence without holding one.** 🔑 **So the open
question is no longer "what was the VoiceCapital work" but "how many businesses is this" — and that is
a question of fact only he can answer.** ⚠️ **It also means the return's stated principal business and
its activity code are both wrong: the code on it is the one for drinking places, not catering, and
neither describes any of his payers.**

🔴 **Unfiled information returns are now a live exposure.** His own sheet confirms he paid contractors,
referral commissions, lead generation and a paralegal, naming the people. **The test is the annual
total per payee**, the 2025 threshold is the old one, and **Zelle does not remove the payer's duty.**
**His Schedule C currently answers "No" to the question of whether he made payments requiring a
Form 1099** — which, if wrong, is a false answer under penalties of perjury on the exact line the IRS
uses to select these cases. ⚠️ **Two of the payees are JK clients** — the same pattern as the
VoiceCapital discovery, and a conflict to name rather than to use.

⚠️ **The file is not a closed system.** His **Chase Prime Visa statements stop on 1 December 2025** and
no statement covering the rest of December was present — **his busiest month** — and five payers he
confirmed as work income have **no matching row anywhere in the extract**. **Completeness cannot be
certified on either side until that is closed.**

🔑 **AND THE ONE OPERATING RULE THAT CAME OUT OF IT: the new income and the expenses go onto the
return in ONE pass.** He is very close to the 400%-of-federal-poverty-line limit that governs how much
of his health-insurance subsidy he repays, and it is a cliff, not a slope. **A return keyed with the
income and not yet the expenses shows a balance due that is wrong by thousands** — so it is never
quoted to him, never printed and never filed in that state. ⚖️ **The same arithmetic run backwards is
why we take the boring documented deductions and refuse the large estimated ones: a deduction
disallowed later does not only cost its own tax, it detonates the subsidy repayment a second time.**

ⓘ **The full analysis, with every figure, its source and where it is typed, is in the working paper's
§13.** Figures stay there.

### 2026-09-19 — the 1099 sweep, the 2024 vehicle, and the posture Lilian set

🔑 **LILIAN SET THE POSTURE FOR THIS RETURN AND IT GOVERNS WHAT WE ASK FOR:** *"no somos auditors…
vamos a tomar la información que nos da el cliente y preparar su declaración… en caso de que él diga
algo incorrecto o falso, sería un problema de él."* ⛔ **So the firm does NOT ask this client for
mileage evidence, trip logs, meal attendees or receipts.** **What we ask for is what the FORMS
require as inputs, and documents the firm cannot produce itself.** *(The working paper's §14H is the
live list; its earlier substantiation discussion stays as the record of the law, not as an
instruction.)*

✅ **THE 1099 SWEEP FOUND THREE — Julia's Drive, full-text, paginated to exhaustion.** The firm holds
1099s naming him from **Maxratings, VoiceCapital and Pro Title Agency.** ⚠️ **That is what the firm
HOLDS, not how many were issued** — a scan with no text layer would not match a full-text search, and
the other payers are outside the firm, so only he can say.
🔑 **The Maxratings one was found the same way the VoiceCapital one was: in the PAYER's Drive folder,
under a filename carrying no person's name**, matched by the full-text index reading inside the PDF.
**One of its batch-mates was renamed and filed into its recipient's folder; his never was** — so it
was invisible from his own file, his uploads and his organizer at once. ⌨️ **Filing the firm's own
copy into his folder under a proper name is the fix.** ⓘ *His own copy of it, already in Double, is a
one-page scan with no text layer — the redactor stops on it, which is why the figure was always taken
from the firm's copy.*
⏳ **AND TWO OF THE PAYERS ARE OUR OWN CLIENTS — Voxago and Paylite — so their 1099 question is the
FIRM's to settle from THEIR books, not his to answer. It is NOT settled yet:** the amounts that make
it look closed come from **his** bank extract, which the firm has already documented as incomplete.
⌨️ **Read the payers' own 2025 ledgers to close it.** ⛔ **Everyone else on his list is outside the
firm**, so only he can say whether they issued one.

🔴 **TRUSTED CREDIT REPAIR LLC is NOT a firm client** — no Double record, no Drive folder, no file.
**It paid him during 2025 and he labelled it work income himself; it is the largest single piece of
income missing from the return.** **So the "did they send you a 1099?" question genuinely has to go
to him.** ⚠️ **The answer does not change what goes on the return** — the income is reportable either
way; it changes only whether a matching notice is coming.

✅ **2024 DEDUCTED FUEL, which answers a question that was open** — inside *Other expenses*, with
**line 9 blank, Schedule C Part IV empty, and no business-use percentage at all.** ⚠️ **Whether it was
CAR fuel or EQUIPMENT fuel is not established** *(on a catering activity either is ordinary)*, **and
if it was equipment fuel there was no actual-expense claim at all.**
🛑 **THREE things decide the 2025 method and none is settled: that question · when the vehicle was
placed in service · and whether the car is OWNED or LEASED.** ⚖️ **The answer differs between the
last two** — for a leased car a prior actual-expense year rules the mileage rate out; for an owned car
the working paper records a real argument the other way. ⛔ **The firm has NOT concluded the route is
closed; that position is Lilian's and Julia's.**

🏠 **On the home office he has already answered the two questions that usually stall it**: he states
the room at the first address was used **exclusively** as an office, and **he himself excluded the
second residence** as mixed-use. 🔴 **What is missing is arithmetic, not judgement — he gave a
PERCENTAGE, and both methods want SQUARE FEET**: the office area and the total area of the home. **A
percentage cannot be typed into either form.**

✂️ **Lilian is asking him to split his expenses by business.** ⚠️ **A caution on the wording, recorded
because it changes the answer he gives:** her framing is *"catering and credit repair"*, but **on this
return the catering work is his W-2 employment**, and **none of his three 1099 payers is a caterer**.
🔑 **Asking him to split by WHICH WORK the expense belongs to, listing the payers, avoids him filing
employment costs under a business that does not exist on his Schedule C.**

### 2026-09-20 — Julia settled the two-business question, and the client ask was drafted

✅ **JULIA CONFIRMED HE HAS TWO ACTIVITIES** *(relayed by Lilian)*: the **catering** work he reported
on his 2024 Schedule C, and a **credit-repair** activity that is new. 🔑 **That closes the question the
firm had been circling** — whether the second business was real, and what the first one was.
⚠️ **BUT THAT IS TWO ACTIVITIES, NOT YET TWO SCHEDULE Cs.** A Schedule C is filed for an activity
that **traded in 2025**, and none of his 2025 1099 payers is a caterer, so **where 2025's catering
receipts would come from is still unknown**. 🔑 **So the expenses are being collected on two separate
templates either way** — that is what settles it. **A catering template that comes back with costs
and no income means the activity did not trade in 2025**, and the return carries one Schedule C, not
two. ⛔ **Nothing should be keyed on the assumption of two until those templates come back.**

🔴 **AND THE VEHICLE USE HAS TO BE SPLIT TOO — Lilian's catch, and it is the right one.** Two
activities means the mileage is apportioned between them, not assigned whole to one. **The draft asks
him for two figures and gives a worked example**, so he cannot answer with a single number.

📨 **A Russian email was DRAFTED for him on 2026-09-20, under Lilian's name, in simple register, and
handed to Lilian.** ⚠️ **The firm has no record of it being sent** — the draft was produced in a
working session and given to her; whether and how it went is not recorded here.
**It asks him to:** confirm the four W-2s are all of them · say whether one payer sent him a 1099 ·
fill **two separate expense templates**, one per activity · describe the car *(make, model, year;
owned or leased; when he began using it for work; odometer at both ends; business, commuting and
personal miles; whether it was the same car the year before)* · split the miles between the two
activities · send the 2025 year-end statement from the **car lender or leasing company** · and give
the **home office in SQUARE FEET**, because the tax form takes an area and not a percentage.
✅ **It deliberately does NOT ask for parking and tolls — he already gave those**, which is
[`method.md`](../../pre-return-review/method.md) rule 1 applied. ⛔ **And it asks for no
substantiation at all**, per the posture set on 2026-09-19.

🚗 **ON THE CAR, TWO DIFFERENT LEVELS OF EVIDENCE, worth keeping separate.** The **make and model are
his word alone**, from his own rules sheet — **they appear in none of the 1,519 transaction rows of
the extract he sent**, which is not the same as saying no record of them exists anywhere. **That is
why the draft asks him to state them.** **The PAYMENTS are verified**: twelve identical monthly withdrawals to a named auto account,
running the whole year. ⚠️ **Twelve identical payments fit a LEASE exactly as well as a loan**, so
what is established is the counterparty, not the contract. 🟢 **That is still enough to ask for a
concrete document — the 2025 year-end statement from that company** — ⛔ **but on a lease there is no
interest statement to get, which is why the owned-or-leased question comes first.**

🔴 **A NEW PROBLEM, FOUND 2026-09-20 AND NOT YET PUT TO HIM: his stated housing dates do not match his
own payments.** He says he was at the first apartment through the spring and at the second from the
summer — **but direct payments to the first reappear in the autumn, and a rent rail he never
mentioned covers the start of the year.** ⚠️ **One spring month shows no payment on any of the three
LANDLORD rails** — ⓘ *said of the transaction extract he sent, which stops on 1 December and may not
be all his accounts; it is what the search returned, not a fact about where he lived.* ⚠️ **TWO of
the companies in the mix are rent-FINANCING services rather than landlords**, which is part of why
the picture is hard to read — **and a financier's repayment schedule cannot date his occupancy at
all**, because what is deductible is when the financier pays the landlord. ⛔ **This is not a question about his honesty — it is a form input**: the home-office deduction
is computed on the **months** the office existed, and those months are not currently knowable. 🔑 **It
should go out with the next message**, alongside the square-footage question already asked.
ⓘ *Two small charges the workbook filed as rent are renters insurance.*

### 2026-09-22 — he answered, and the reply changes the shape of the return

✅ **THE 2026-09-20 EMAIL WENT OUT** — sent that day under Lilian's name, copying Julia. *(The previous
entry recorded it as drafted with no record of sending; that is now settled.)* **He replied in two
days**, in English, with **two draft Profit & Loss statements — one per activity — and a
reconciliation note.**

⛔ **THE THREE ATTACHMENTS HAVE NOT BEEN READ BY ANYONE AT THE FIRM.** The session had no way to
download a Gmail attachment, and they are in neither Google Drive nor his Double file library *(both
searched)*. 🛠️ **Someone needs to save them to Double or Drive** — everything below rests on his own
one-paragraph summary in the email body, not on the files.

✅ **WHAT HE SETTLED**
- 🚗 **The car: a 2021 Hyundai Tucson, FINANCED — not leased.** **That closes a branch that had been
  open since the first pass**, because a lease and a loan are treated completely differently. He also
  says **the loan is now paid off**, and he is chasing the lender for the year's interest total.
- **He split his expenses into the two activities as asked**, rather than lumping them together.
  ⚠️ **That is NOT the same as the worry being closed.** The firm's concern was that costs belonging
  to his employment would end up filed under the catering heading — **and the catering figures that
  came back are exactly where that would show.** 🔑 **The check that settles it has not been run**,
  because it needs the attachment nobody has read.
- **He gave his own percentages** for the home office, the phone and internet, and business meals, and
  correctly left the meals limitation for us to apply.

🔴 **WHAT THE REPLY OPENED, and these matter more than what it closed**
- 🔴 **He proposes to report LESS business income than the three information returns the firm is
  holding for him.** That is not a judgement call — the forms are third-party documents the IRS also
  receives. It changes what the return has to **attach**, and that class of attachment can stop the
  return being filed electronically at all.
- ⚠️ **And the shape the firm most likely lands on puts him right on the edge of a health-insurance
  subsidy band** — close enough that a small amount of additional income moves him across it, on a
  return where two bank statements are still missing. **There the manual calculation and the
  software's automatic one disagree, and the manual one governs**, so that figure has to be worked by
  hand rather than accepted.
- 🔴 **He now says a payment the firm had treated as business income is "a refund of my own funds".**
  ⚠️ **His own expense workbook labelled that same payment as work income four days earlier.** Two
  statements from the same person pointing opposite ways — **and there is a mechanical way to settle
  it**: a refund has a matching payment going out, income does not. The firm looks, rather than asking
  him a third time.
- 🔴 **The catering activity came back with NO revenue at all and a full year of expenses.** The firm
  had written down in advance that this exact result would mean the activity did not trade that year —
  so it is the answer to a test, not a surprise. **It decides whether the return carries one business
  or two**, and that is a position for Lilian. **The one fact still needed from him is simply whether
  he did any catering work at all in 2025.**
- ⚠️ **He allocates most of the car to the activity that earned nothing.**
- 💊 **Whether the two activities go on one form or two is now worth real money** — the health-insurance
  deduction is capped by the profit of the business the policy sits under, and on a combined form that
  profit is almost nothing. **The firm had recorded this as the one place the split would bite; it has
  bitten.**

⛔ **WHAT HE DID NOT ANSWER — all of it was in the email, and none of it is optional**
- 🔴 **The square footage of the office and of the apartment.** He sent the percentage again. **Both
  methods of claiming a home office require an AREA; a percentage cannot be entered.** Nothing about
  the home office can be done until this arrives.
- 🔴 **The mileage figures and the odometer readings**, and **the date he began using the car for the
  business** — all of which the forms require.
- 🟡 **Whether the four W-2 employers are all of them.**
- 🟡 **Whether that company ever sent him an information return.** He answered a different question.
- 🟡 **The housing dates**, which his own payment history contradicts — he repeated them unchanged.

🆕 **One new gap he raised himself: a bank statement for September 2025 is missing**, and he has
offered to send it. **The firm already knew December was missing; this is a second month.**

### 2026-09-22 (later) — the attachments were read, and the note behind them says more than the email

✅ **Lilian supplied the three files directly**, so the gap the earlier entry flagged is closed.
🟢 **Every figure the client summarised in his email checked out exactly** against the two workbooks.
🔴 **But the reconciliation note behind them carries a great deal the email did not**, and four
things in it change the work.

🔑 **First, what these documents ARE.** They were built from **the same transaction file the firm
already had** — so they are not new records, they are that file's own rules applied to it. **And the
client did not write the note**: it refers to him in the third person throughout and opens by saying
nothing should be sent to the accountant until he separately confirms. **He then confirmed and sent
it.** ⓘ *Worth knowing because it explains why the note argues with his own instructions in places —
it was written TO him.*

🔴 **THE SHARPEST FINDING, and it is not an expense question.** He leaves out a payment from one of
the companies that reported paying him, treating it as personal — **and the firm is the one that
PREPARED that form for the payer.** So the return as he proposes it would report less from that payer
than a document the firm itself produced. ⚠️ **Whether that form was ever filed with the tax
authority is a separate thing the firm has NOT established** — and it decides whether this risks a
matching notice or is simply an internal contradiction to explain. **Checking it is ours to do, not
a question for him.** ⚖️ **Whether
the payment really was personal is a fact only he has** — but it cannot simply be dropped without
explanation, and it is exactly what the attached statement the return now needs would have to
explain.

🔴 **The catering activity has no costs of its own either.** Every line on its statement is a share
of something shared with the other activity — right down to half of the firm's own fee. **No income
and no cost of its own** is the fact that most informs whether it was a business at all that year.

🔴 **Four of the splits between the two activities have no stated basis** — the vehicle, the meals,
the phone, and the home office. The note says plainly of one of them that the underlying context is
unclear. **And the two big ones pull opposite ways: the desk-based activity gets all of the home
office, while the activity with no income gets most of the car.** ⚠️ **These are not
substantiation questions — they are figures the firm types onto two forms**, so they are ours to
settle.

🔴 **A third activity — real estate — has its own costs sitting in neither statement**, including a
state professional-licence fee and brokerage fees, and the note leaves them for the firm to place.
**It also flags that one payer it moved into the credit-repair column may belong to the real-estate
side instead** — a title company paying a commission to someone taking a real-estate licence.

✅ **Two things the note settles in our favour, and one the firm settled for itself.** The
housing-date problem the firm found independently is **confirmed from his own side** — his preparer
could not identify a payment for the month in question either, and flagged the later payments as
needing explanation. And he states that the company behind the disputed payment **issued no
information return** at all.

🔑 **AND THE DISPUTED PAYMENT IS NOW SETTLED — it is income.** The firm searched his own transaction
file for money going OUT to that company, which is what a refund would need. **There is none, and
the account the money arrived in is covered for the whole year.** ⛔ **So his September
reclassification is not supported by his own bank data**, and the label on his original file was the
right one. ⚠️ *What bank records cannot rule out is a repayment in cash, or one that never crossed
these accounts.*

⚠️ **One thing the note says about itself, worth recording:** the expense claim moved from the small
set of items the source file had actually confirmed to the full figure now proposed, by applying the
file's rule sheet to everything it had left unclassified. **The note presents that as expected. It
does not make the figures wrong — it does say what kind of figures they are.**

### 2026-09-23 — the return was re-read with two Schedule C forms, and one thing the software dropped

🔁 **The return has changed shape since the last read: the one Schedule C became TWO**, one for each
activity, with all of the revenue on the credit-repair form and none on the catering one. **What he
owes came down accordingly.**

✅ **The EXPENSE keying is faithful.** Both of his draft profit-and-loss workbooks were traced line
by line onto the return and every expense reconciles **to the cent** — nothing was mis-typed and
nothing was invented. ⚠️ **The one line that does NOT tie is the revenue**, and that is deliberate:
the return takes the information returns as issued, while he proposes a figure that excludes one
payment and adds another nobody reported. 🔑 **What else is at issue is what was left OUT** — the
vehicle fuel and repairs on both activities, the credit-repair share of the car insurance, and the
home-office rent. ⛔ **Nothing on the return says why**, and leaving the vehicle out pending a
mileage record may well be deliberate.
🔴 **AND ONE THING WENT IN THAT SHOULD NOT HAVE, which the first read of this return missed:** the
electricity share of the home office is deducted among the ordinary utilities. **Business use of a
home may only ever go on its own line**, through one of the two dedicated routes. ⚠️ **Correcting it
RAISES his tax**, which is exactly why that kind of error survives a read.

🔴 **THE ONE REAL DEFECT IS THE SOFTWARE'S, NOT ANYONE'S JUDGEMENT.** The qualified-business-income
form now lists only the **catering** activity. **The profitable one is simply absent from it**, so
the deduction comes out at zero and a business-loss carryforward is pushed into next year that should
not exist. 🔑 **Before the activities were split, the same form worked.** ⚠️ **The carryforward is the
half that costs twice** — nobody re-derives one; it is typed across from last year's return.

⚖️ **A ruling of Lilian's is recorded so nobody re-derives it later.** In his workbook he put the car
policy on a row labelled only *"insurance"*. **She read it as the car policy and moved it out of the
general-insurance line and into the vehicle line** — which is right, and she annotated both of his
workbooks to say so. ✅ **His own reconciliation note then corroborates her**: it sets that amount
inside a table headed with the car, alongside the same splits she reached independently. 🔑 **So the
ruling rests on the document, not only on a reading of an ambiguous label.** 🔑 **Doing that exposes an inconsistency:**
the car insurance is claimed on one activity while the fuel and repairs are claimed on neither, and
all of it rests on the same unsupported business-use percentage. ⚖️ **The claim has to be taken whole
or held back whole.**

✅ **ANSWERED — the credit-repair activity qualifies for the small-business income deduction.** It is
not one of the specified service trades the statute excludes, **and the point is academic at his
income level**, because that exclusion only begins to apply far above where he is.

🔴 **ANSWERED, and the answer is no — the home-office measurements are in nothing he has sent.** His
reconciliation note and both workbooks were searched in full for any floor area, room dimension or
room count. **There is none.** 📨 **And this is the SECOND time of asking** — both numbers were put to
him on 20 September and he answered with the percentage again. ✏️ **The message carries two numbers
and nothing else**; the follow-ups that usually go with them are already answered in his own words.
🔑 **Worth chasing hard, and not for the size of the deduction:** he is sitting just above a step in
the Marketplace-subsidy repayment cap, and **even the smallest version of this deduction carries him
under it** — the band is worth more than the deduction.

🔑 **AND THE THING THAT MOVES THE MOST MONEY IS NOT A DEDUCTION AT ALL — BUT THE FIRM CANNOT REACH
IT ALONE.** He is sitting just above a step in the Marketplace-subsidy repayment cap. **The
corrections that are purely ours do NOT carry him across it** — they stop just short. ⚖️ **The two
things that do both need an answer from outside the firm:** the self-employed health-insurance
deduction, which is gated on a question nobody has put to him about his employers' coverage, and the
home office, which is gated on the two measurements. ⛔ **Recorded because the obvious reading — that
fixing our own errors gets him there — is wrong.**

📤 **An Excel working worksheet was delivered to Lilian** — the two activities line by line against
his own figures, the vehicle pool, the home office, a live model of the return, and the open items
ranked. ⛔ **It carries client figures, so it was handed over and not committed** *(the full detail is
in the working paper)*.

### 2026-09-24 — the expenses were rebuilt from the client's own transaction file

🔁 **A change of method, and it is the right one.** Where the earlier passes worked from the two
profit-and-loss statements the client sent, Lilian went back to the **1,519-row transaction package
behind them** and rebuilt the expense side from its own category totals — annotating both statements
as she went with where each figure came from.

✅ **THREE OF HER FINDINGS CHECK OUT EXACTLY** against the package's own summary sheet: the meals
pool, the rent pool and the combined utilities-and-phone pool all tie to the cent, and the business
percentage she applied to the meals is the client's own, printed in his file rather than assumed.

✅ **AND THREE THINGS ON THE RETURN ARE NOW RIGHT THAT WERE NOT.** The qualified-business-income form
carries **both** businesses, so the deduction is live and the loss carryforward into next year has
gone. The vehicle claim is held back **whole** instead of half-in — the car insurance came off the
general-insurance line, which was the inconsistency the last pass flagged. And the home office is on
the return for the first time, on the simplified method.

🔴 **THE HOME OFFICE IS WHERE THE REAL PROBLEM IS, and the first version of this entry got it wrong.**
⛔ *It said the return used the simplified method. It does not — it carries a separate home-office
form for EACH business, on the regular method, and the session had not read that far into the
document before saying so.*
🔴 **What is actually happening: the business percentage is applied TWICE.** The figures entered on
those forms had already been reduced to the business share and split between the two activities — and
the form then applies the percentage again, because the column they sit in is for the expense of the
**whole** home. **That is why the deduction came out at a fraction of what it should be.**
🔴 **And two things are on the wrong forms, each deducted twice.** The **telephone** is on the
home-office form, where it cannot go at all — it is an ordinary business expense. The **home's
electricity** is on the ordinary utilities line, where it cannot go either. **They are the wrong way
round.**

⚠️ **AND THE NEW UTILITIES CALCULATION DOES NOT FIX IT — it reproduces it.** The percentage she
applied appears nowhere in the client's file; it lands within two dollars of his own combined total,
which is the tell. 🔑 **The pool it is applied to mixes two things that follow different rules and
belong on different lines: the phone, which is a business expense, and the home's electricity, which
is business use of the home.** Strip the electricity out and his own split between the two businesses
was an even one, not the uneven one now in use.

⚠️ **The rent figure still has to be settled, and the two open questions are narrower than they
looked.** The package's own rent total is missing several months — the rent reached the landlord by
five different payment routes and a total built from one of them cannot see the others — **but the
client's own note itemises the full schedule**, so the material is not missing from the firm.
🔑 **What is genuinely open is what HIS note flags: a possible double-count in March, and one month
that is not identified in the statements at all.** ✏️ **Ask for the month-by-month rent schedule
alongside the two measurements** — that is what settles both.

🔑 **AND THE ORDER OF THE OUTSTANDING CLIENT QUESTIONS IS NOW SETTLED: the vehicle first.** It is the
only pending answer that carries him below the subsidy-repayment threshold, and it is worth roughly
**2.7 times** the home-office work.

ⓘ **One assignment worth remembering:** all the business meals are now on the credit-repair activity.
Two thirds of them fall in the last quarter of the year — which is exactly when his real-estate
licence activity appears in the records, and his own note describes the meals as being with realtors.
**It changes no tax while the return carries two activities, but it is the same open question as the
title company's commission.**

📤 **A rebuilt worksheet was delivered to Lilian, then RE-ISSUED the same day** once an independent
review found that its home-office section rested on the wrong premise. — nine tabs, every figure with
its origin and its arithmetic, and a column that says what to enter rather than what is already there.
⛔ **Client figures, so it was handed over and not committed.**
🛑 **The failure is recorded because it is the kind that matters: a negative was asserted about a
document nobody had searched to the end.** The session read the return partway through and stated
that a form was absent; it was there, a few pages later. ✅ **Caught in review before anything was
filed — but it reached her desk first.**

### 2026-09-24 (later) — the client's question about his card interest, and one answer settled early

📧 **Lilian wrote to him that morning, copying Julia**, with the vehicle questions, the subcontractor
1099 question and — asked properly this time, as two separate measurements rather than a percentage —
the apartment and office areas. 🔴 **One question in it, though, is one he has already answered — and his answer works
against us.** Asked whether he has another vehicle for personal use, his own package says of the car:
**"only vehicle in 2025; used for work daily."** A taxpayer with one car has done his personal
driving in it, so that answer **undercuts** the high business-use share the return claims rather than
supporting it. The tax form asks the same question, and we should expect to answer it **No**.

⛔ **THREE ASKS ARE MISSING FROM IT, and one blocks work already scheduled.** He has still never been
asked to reconcile the months he says he paid rent against the months the statements show payments —
and the home-office form cannot be completed without that, whatever areas he sends back. The
employer-health-coverage question is not in it either, nor the date he first used the car for work,
which he was asked once and did not answer.

💳 **THE CARD INTEREST — HE ASKED US TO DIVIDE IT BETWEEN HIS TWO BUSINESSES, AND THE DIVISION TURNED
OUT NOT TO BE THE QUESTION.** The rule allocates interest by tracing what the borrowed money bought,
and the statements answer that: **on six of his nine cards he paid more interest than he charged to
that card across the whole period the statements cover**, and on one of them four interest postings
sit against not a single purchase. ⚠️ **Scoped deliberately — only one of these nine accounts covers
the whole year**, so this is what the records the firm holds show, not a statement about his year.
**The balances arrived before those records open**, so the spending in them cannot describe what the
debt bought. And of the charges that are there, **only a small part is backed by anything he actually
told us** — the rest the file still marks as needing review, and reading those descriptions turns up
a soap subscription, an aquarium ticket, a vape shop and, in the bank-fee pool, **late-payment
penalties**.

⚖️ **So the recommendation is to claim none of it — a position for Lilian and Julia to take, not a
computation** — with a defensible split ready if they claim it anyway: **about 52 / 48**, built from
allocations the firm had already decided, which lands close enough to half-and-half that the simple
answer and the principled one agree. 🔑 **And one correction was put to her: the SPLIT really is
tax-neutral as she assumed, but the AMOUNT is not** — it moves his income, and through it his
Marketplace repayment.

✅ **A separate question was settled before it could be got wrong.** 2025 is the first year with a
federal deduction for car-loan interest on its own line, and his does **not** qualify — the loan is
too old and he claims the car as predominantly business, which that deduction expressly excludes.
**It belongs on his business schedule instead, at the business-use share** — and *where* it goes
holds whichever vehicle method is chosen, so that much is settled. **The amount still waits on the
mileage**, because the share is business miles over total miles rather than the percentage he
asserted.

📤 **The worksheet was re-delivered with the new section, and then re-delivered AGAIN in the same
session** — the first copy understated the business-classified charges because two pools had been
left out of a subtotal without saying so. ✅ **Caught by the sheet's own tie-out before she worked
from it**, and correcting it strengthened the case rather than weakening it: it is what surfaced the
late-payment penalties. ⛔ **Client figures, so handed over and not committed.**

🛑 **And the independent review of the write-up found four more, all confirmed and all fixed before
anything was filed — three of them the same mistake in different clothes.** Each was a claim about
**the world** where the file only supported a claim about **the search**: that the interest exceeded
the charges *for the year* rather than for the months on file; that nobody had asked about a second
vehicle, when the client's own sheet answers it; and that he had *confirmed* charges the package
itself flags with "confirm". ⚠️ **The arithmetic was right in every case and the framing was not** —
which is the second time in two sessions on this client, and it is written into the working paper as
a pattern rather than as four separate slips.

### 2026-09-24 (later still) — the posture changed, and it moved three numbers

🔑 **Lilian set a standing rule for this client, and it is the right one for what he is:** *"nuestro
trabajo no es auditar los números del cliente. Él no es nuestro cliente de bookkeeping… tenemos que
confiar, en cierta medida, en lo que cabe en la información que él nos da."* **He is a tax-preparation
client, not a bookkeeping client. We take his figures and his percentages and put them in the right
place.** ⓘ *Which percentages are his and which are ours is now written out explicitly in the
worksheet he is billed against, so the distinction survives this session.*

⚖️ **And she ruled on the card interest: it is not to be zero.** She asked for a defensible figure to
put to Julia with an explanation, and Julia decides. **That is exactly the right shape** — the earlier
recommendation of zero was a recommendation, and the signer overruled it.

✅ **THE ANSWER CAME OUT OF HIS OWN FILE.** His handoff sheet does not leave the interest open at all:
it says **"Allocate based on underlying business purchases"** and **"Do not deduct all card
interest."** So applying **his own percentages** — the vehicle at 80%, the meals at 75%, his software at 100% —
to everything he charged to those nine cards gives a business share of about **29%**, and that share
of the interest is the figure. **The buckets he told us not to force are left at nothing, on his
instruction** — though one of the three we zeroed is our own earlier ruling about card penalties, not
his, and the working paper now says so. ⓘ *The split between his two activities works out at essentially half and half, and it
cannot change his tax either way.*

🔴 **AND THE BIGGEST FIND OF THE DAY WAS NOT THE INTEREST.** His home-office form is carrying about
**half the rent he actually paid** — his own reconciliation note totals it in one line, and his
transaction file had filed the two largest payments of the year under "other". **That is not
second-guessing his classification; it is reading what he wrote.** The same pool also contains
renter's insurance from the months after he had already moved, which he explicitly does not claim.

🏠 **Two more corrections went with it.** The home office is on **two** forms where the IRS
instruction says to compute **one** and allocate the result — and because the catering activity has no
revenue, half of it is being suspended to next year for nothing. And the **phone** is buried inside
the home-office form at 30% when he told us it is **85%** business and the IRS says telephone is never
a cost of the home.

💰 **Together the three corrections are worth about a third of what he currently owes, and the
mileage he has not yet sent is worth about twice that again** — it is the only answer that takes him
under the subsidy-repayment threshold. **Chase the miles first.**

✅ **Her own keying was clean.** The whole return was rebuilt from her two business figures and
reproduces line for line. 🛑 **The one disagreement was the CHECKER's fault** — it rounded a
Marketplace figure down where the software correctly rounded it up, because of how binary arithmetic
stores a number ending in 5. **A control that disagrees with the return is not evidence against the
return until you know which side is wrong.**

### 2026-09-24 — the rent question was the right one, and the answer is a filing label

🔑 **Lilian pushed back on the home-office rent finding, and she was right to.** The client's own file
shows one figure and the working paper asserted roughly double it, without ever explaining the gap.
**A finding nobody can follow is a finding nobody should act on**, so this is written out properly now.

📋 **The explanation is mundane: his transaction file sorts every payment into a category by reading
the BANK DESCRIPTION.** Rent paid through the rent-payment app arrives with the word "rent" in the
text and got the rent label. **Rent paid by card straight to the landlord arrives with only the
building's name in it** — so the two largest rent payments of the year were filed under "other,
needs review", where they sit as the two biggest rows in that whole bucket.

✅ **And the arithmetic settles which figure is real.** His own notes put the apartment at roughly
what a two-bedroom costs in that area, and the complete months each come to about that. The smaller
figure would work out at less than half a month's rent per month. **It is a labelling artefact, not a
fact about what he paid.**

✅ **Her instinct — ask him to confirm — is the right move and is now written out as three questions**,
two of which are **his own**: he flags in his note that one month may be double-counted and that a
month's payment cannot be found at all. **Those go in the next email; they are in none of the ones
sent so far.**

✅ **She was also right about the revenue figure.** It comes from the Forms 1099 and is what was
reported to the IRS, which is the right place to start; the difference from his own statement was
already decomposed weeks ago and is not an open item.

📋 **She has keyed the card interest and nothing else, and asked where she stands.** The answer: **two
keystrokes left that are hers** — the home-office form and the phone — and after those the return is
as finished as his information allows. **What remains waits on him, on Julia, or on one firm action of
ours** *(confirming whether an information return we prepared for a payer was actually transmitted —
it decides whether a payment he excludes from income is an exposure or just an internal
contradiction)*. 🔑 **A status board now leads the worksheet so that question can be answered at a
glance next time.**

⚠️ **And one of the questions still to put to him turns out to be worth far more than the file had
been saying — not less.** The employer-health-coverage question was being carried at the size of the
*deduction* rather than what it saves. Priced properly it is **five times more valuable once those two
keystrokes are in**, because at that point it pushes him across the subsidy threshold and the
repayment cap drops with it. **It gets better while she waits, not worse.**

⚠️ **One small thing turned up in passing: a fee inside the licence pool he classified as business
reads as a DRIVER'S licence.** Not on the return, so nothing is wrong today — but it should not be
added. ⓘ *It is an inference from a bank description and is recorded as one; his own file is not
unqualified about that pool either.*

### 2026-09-24 (later) — the instruction was the defect, not her keying

🛑 **She could not follow an instruction of ours, and she was right not to.** We told her to move the
phone "to line 25" and to change "line 21" — **without ever saying those are two different forms.**
Her software puts a home's utilities and a business's telephone on lines with almost the same name,
and she reasonably read one instruction as being about one place. **Written down because the failure
was in how it was said, not in what she did.**

📖 **The distinction that matters:** a home-office worksheet's utilities line is for utilities **of the
home**, and everything on it is reduced to the business-use percentage. A business schedule's utilities
line is for the **business's own** telephone and internet, at their own percentage, with no reduction.
**The IRS booklet on business use of the home says plainly that telephone is never a cost of the home
and must be deducted separately.** Left where it is, his phone is being reduced twice over.

🏠 **And her screen settled something we had got structurally wrong.** We had been describing the home
office as two independent forms and telling her to delete one. **Her software holds ONE worksheet that
allocates across both activities** — the two forms that print are its output. So the instruction is to
**detach** the activity that cannot use it, not to delete a form that does not exist as a separate
thing.

🔴 **That matters in money:** the worksheet is giving **45% of the home-office pool to the activity with
no revenue**, where the law's income limit disallows every dollar of it and parks it for a future year
that may never come. **Roughly a fifth of what he currently owes.**

📋 **One keying slip, worth nothing and still worth fixing:** the card interest went onto the
**insurance** line rather than the interest line. **Not a dollar changes** — but that is the very line
the earlier passes cleared of a vehicle cost that did not belong there, and on the face of the return
he now shows insurance he never paid and no interest when he paid some.

⚠️ **And one of our own recommendations turned out to be two recommendations pulling opposite ways.**
Moving the phone off the home-office form is required by the IRS booklet and gains money. Trimming the
home's electricity to the months he actually lived there is **his own rule** and **costs** money. They
had been bundled as one change with one figure; separated, the phone is worth about six times the net
and the other half is a small price for following what he told us. **Written down because a net figure
hides a decision.**

✅ **Her arithmetic is clean.** The whole return rebuilds from her two business figures and reproduces
line for line.

🛑 **AND THE RENT IS CLOSED ON HER INSTRUCTION.** *"Vamos a dejarlo así y no vamos a seguir buscando
meses."* **His figure is keyed; the questions drafted for him are withdrawn and nobody chases them.**
🔑 **Closed, not answered** — the evidence stays in the working paper for whoever asks later.

### 2026-09-24 (later still) — why there are no utilities for the rest of the year, and the two halves are reversed

🗣️ **Her question, and it is the right one to have asked:** *"¿por qué no tenemos gastos de utilidades
del resto del año?"* — **and she asked us to look for a client note before answering.** ✅ **There is
one, in three separate documents of his.**

🔑 **THE ANSWER IS SUBSTANTIVE, NOT AN OVERSIGHT: there is no home office for the rest of the year.**
The home office is the **first apartment, January to May**. In June he moved, and **he told us three
times not to claim the new place** — his rules sheet marks it OUT as personal/mixed housing, his
handoff sheet says the allocation applies **only during the first apartment's period**, and his own
email says **January–May only**. 🔑 **And he gives the reason each time: it is a STUDIO, the work area
is mixed personal use, and a COWORKING SPACE IS INCLUDED IN THE RENT.** The law needs an area used
regularly and **exclusively** for business; a studio with a coworking membership paid inside the rent
has neither. ✅ **The form already corroborates it on the line above** — there is **no post-move rent on it
at all**, so the form carries **rent from before he moved and electricity from after it**. The two
lines describe different homes.

🔴 **BUT THE TWO HALVES OF THE YEAR ARE THE WRONG WAY ROUND.** The figure on the form is the
**post-move** electricity — the exact months he said not to claim — and the pre-move figure is
slightly larger. 💵 **The money is trivial, about one dollar.** 🛑 **The reason to fix it is not the
money: the months are printed NOWHERE on the return**, so nothing on paper would ever reveal that the
form carries **rent from before he moved and electricity from after it**. ⓘ *His electricity account ran all year because he kept the account through the move; the
postings in his file are not one a month — two of them carry two each.*

📞 **The phone split she applied is OURS, NOT HIS — and an earlier version of this entry said the
opposite.** She asked what we thought of the 55/45. The argument that it was **his** came from two
figures in his draft profit-and-loss that differ from each other **only because one of them had the
home-office electricity folded into it** — **the very electricity this same pass was moving onto the
home-office form.** 🔑 **His own note states his split in his own words, and it is FIFTY-FIFTY — the
same amount to each business.** ⛔ **The split cannot change the tax at all** *(both activities' results
are added together before anything else happens)*, **so nothing on the return changes and it stays** —
**but it is a FIRM allocation and must be put to Julia as ours, not as his.** ⚠️ **One flag,
unchanged:** it deepens the loss on the activity with **no revenue at all**, which makes that
activity's status — a trade or business, or start-up costs — the open question for her. **The split
did not create that question; it enlarged it.**

🔴 **AND THAT ERROR WAS HIDING A REAL ONE: THE PHONE TOTAL ITSELF IS SHORT.** His own phone base
includes a second carrier's March and April bills, which his file had parked under *"other expense —
needs review"* and **his own note pulls back in.** The return is built on the smaller base, so it is
missing a real slice of deduction — **worth roughly ten times the electricity fix, and it is one more
keystroke.** ✏️ **The cleanest keying is his own equal split.** ⓘ *The superseded note that covered
this pool was stamped for a different reason — the percentage and the line had changed, not the base —
which is exactly how it got through.*

✅ **AND SHE PUT THE PHONE SOMEWHERE BETTER THAN WE TOLD HER TO.** We said the business utilities
line; she listed it in the schedule's *other expenses* part, described **"Phone"**. **Identical
arithmetic, identical tax — and a line that says "Phone" cannot be misread the way "Utilities" was,
which is the exact word that caused the confusion the day before.** 🛑 **Recorded so nobody raises it
as a correction. It stays.**

✅ **All three of the changes from the previous pass are keyed, and her return rebuilds line for line
from her two business figures.** The interest is on the interest line and the insurance line is clear;
the home office is ONE worksheet on the activity that actually traded, and **nothing is parked for a
future year any more.**

ⓘ **One thing that was NOT checked and is not being chased:** the IRS booklet's non-deductible piece is
the basic charge for the **first landline** into a home. His phone pool is a mobile carrier plus a
second carrier, and **nobody has established whether either is a landline at the apartment.** Written
down so no later session assumes it was tested.

📤 **The worksheet was rebuilt on the return she sent and delivered to her** *(and delivered twice —
the first build said the phone was on the business utilities line, which the return does not support;
reading the form itself caught it)*. ⛔ **Never committed.**

### 2026-09-24 (last) — the return is finished, and the worksheet was rebuilt to explain every figure on it

✅ **BOTH REMAINING CHANGES ARE KEYED AND THE RETURN REPRODUCES LINE FOR LINE.** The home office now
carries the pre-move electricity, and the phone carries his full base rather than the short one. Read
off the return itself, not modelled: rebuilt from her two business figures alone, every line of the
return comes out exactly as the software printed it — the poverty-line percentage and the applicable
figure included, which are the two most easily got wrong.

🔑 **She took the firm's split on the corrected phone base rather than the client's own equal split,
and it is worth EXACTLY the same tax** — one dollar of deduction between them, inside the same tax band
and the same subsidy band. ⛔ **Nothing to change, and it is not a defect.** ⚠️ *It does mean the firm's
split stays on the list of allocations that are ours rather than his.*

🗣️ **Her instruction for the worksheet, and it changed its shape completely:** *"que explique de dónde
salió cada cosa… **no puede quedar nada como en el limbo.** Todos los números tienen que tener su
justificación y su explicación de dónde salieron."*
🔑 **The old worksheet was built around WHAT TO CHANGE — a "now" column and an "after" column — and
there is nothing left to change.** So it was rebuilt from zero around the opposite question: **why is
every figure on a finished return the figure it is.** Every tab now carries the same five columns, two
of them new: **how it was computed** *(the arithmetic, to the cent)* and **where the figure comes
from** *(which document, or whose decision, in their words)*.
🆕 **And one tab is new in kind: what is NOT on the return, and why each one is off it** — his own
written instructions to leave pools alone, the judgements the firm made, and the one thing waiting on
evidence. **An absence needs a reason as much as a figure does.**

⛔ **THE EMPLOYER HEALTH-COVERAGE QUESTION IS DROPPED ON HER INSTRUCTION** — *"olvida la pregunta
acerca de la cobertura médica"*. It is in none of the emails the firm has sent him, nobody chases it,
and **no figure on the return depends on it**, because that deduction was never claimed. **Closed, not resolved** — the same shape as
the rent questions she closed earlier in the day.

🔴 **ONE THING IS OPEN, and it is with the client: THE MILEAGE.** Odometer at both ends of the year,
business miles, the first-business-use date, and whether any log exists. **It is the largest number
still WITH THE CLIENT** *(the tips deduction below is larger, and also open)* — it crosses two thresholds at once, neither of them a tax rate:
the subsidy repayment cap drops a band, and his self-employment earnings fall under the floor where
that tax disappears entirely. The worksheet has it built and priced so the day he answers it is
arithmetic and not analysis.

⚠️ **AND ONE FIGURE THAT HAD GONE STALE IN THE WORKING PAPER WAS CORRECTED: what the tips deduction is
worth.** It had been carried unchanged since 13 September, through five sections, priced against a
version of the return that no longer existed. Recomputed on the return as filed it is materially
larger — and it is the largest single DEDUCTION on this return, while **its eligibility is still not
established**. The price is corrected; the open question is not touched.

### Outstanding items (CI-only — never in the SOP)


- 🔴 **The box-14 tips are CLAIMED but not ESTABLISHED — close it before filing.** Worth **low four
  figures** of tax. **Two questions, and they go to the EMPLOYER, not the client:** what job he
  actually did there *(a role off the tipped-occupation list voids the whole amount)*, and how much
  of the figure the **customer chose** to pay rather than the invoice imposing it. ⛔ **Do not ask
  "was it mandatory" — a mandatory tip pool still qualifies, and that wording returns a false
  negative.**
- 🟡 **The Schedule C expenses ARRIVED on 2026-09-18 — as a workbook, not as deductions.** *(See the
  log entry for that date.)* 🔄 **REWRITTEN 2026-09-20 — the posture changed on 2026-09-19** *(Lilian:
  we are not auditors; we take what the client gives us and prepare the return)*. ⛔ **So the
  business-purpose-per-line ask, the mileage evidence and the exclusive-use challenge are RETIRED** —
  he has stated exclusive use and we take it. ✅ **What replaced the workbook is TWO expense
  templates, one per activity, asked on 2026-09-20.** 🔴 **What is still genuinely missing is a
  month-by-month rent schedule** *(rent reached the landlord by five different routes, two of them
  financing companies, so the same rent can appear twice)* — **and it is now blocked on the housing
  dates below, not just on the routes.**
- 🔴 **The return's principal business and activity code are both wrong** and are typed fields.
  **Neither can be corrected until he answers what the work actually is.** ⛔ *(This supersedes the
  narrower "ask him what the VoiceCapital work was" below — it is the same question, widened.)*
- 🔴 **Unfiled 2025 Forms 1099-NEC, and Schedule C line I currently says "No".** Needs the year total
  per payee before anything else. **A missing 1099 does not disallow the deduction** — the exposure is
  penalties, and it is a separate question from the expense.
- 🔴 **Get the Chase Prime Visa statement for 2–31 December 2025.** Without it neither income nor
  expenses can be called complete, and December is his busiest month.
- ⚠️ **Check the taxpayer signature date before e-file** — the prepared return carries an April date
  against a September preparation, which looks like a field inherited from the extension.
- ⚠️ **Tell him the balance due BEFORE the IRS does** — he has a live installment agreement and a new
  balance can default it.
- ✅ ~~**HOW MANY BUSINESSES IS THIS?**~~ — **ANSWERED 2026-09-20 by Julia: catering and credit
  repair.** *(See the log entry for that date.)* 🟡 **What survives is narrower and still open:**
  whether the **catering** activity actually **traded in 2025** — so whether the return carries one
  Schedule C or two — and whether the **real-estate** work is a third. **The two expense templates
  are what answer both.** ⓘ *Splitting is nearly money-neutral this year* — one Schedule SE combines
  them and the QBI carryforward applies to the aggregate — *except for the health-insurance
  deduction, which can sit under only one business.*
- ✅ ~~Get the 2025 Form 1095-A read~~ — **closed 2026-09-13**, supplied directly by Lilian.
- ⚠️ **Ask him what the VoiceCapital work actually was** — the Schedule C's principal business and
  code turn on it, and **none of his three 1099 payers is a caterer.**
- ✅ **The VoiceCapital 1099-NEC itself is settled** *(2026-09-13)* — the firm's own Drive answered
  it faster than the client could have; only the question above is left.
- ⚠️ **Correct his address with the Marketplace** — it still holds the old one. It changes nothing on
  2025, but the second-lowest-cost silver plan is rated by county, so 2026 would be priced off the
  wrong area.
- ⓘ The Delaware LLC has been sitting unexplained in his file since April 2025.
- ⓘ The **Form 8821** prepared in June 2025 has no recorded outcome.

### Information still needed

- [ ] The Delaware LLC's name, status and 2025 activity.
- [ ] Whether the Form 8821 was ever signed and filed, and what it covers.
- [ ] Whether the IRS installment agreement is still live, and for which years.
- [ ] Boxes 15–17 on each 2025 W-2, to close the out-of-state question for good.
- [ ] Whether the catering activity continued in 2025 or was replaced by the contractor work.
- [ ] 🆕 **Whether he holds a Florida real-estate licence, and whether he earned anything from it in
      2025** — brokerage fees and a licence renewal are in his own records; the return knows nothing
      of it.
- [ ] 🆕 Whether he was **eligible** for a subsidised health plan at any of his employers, and for
      which months. 🔑 **Eligibility, not enrolment — and it is the highest-value unanswered question
      on the return.**
- [ ] 🆕 Whether he paid **dental, vision or long-term-care** premiums separately in 2025.
- [x] ✅ 🚗 **The car's make, model, year and whether it is owned, financed or leased** — **ANSWERED
      2026-09-22: a 2021 Hyundai Tucson, financed, not leased**, and the loan is now paid off.
      🔑 **That closes the branch the firm could not settle from the bank rows alone** — twelve
      identical monthly payments fit a lease exactly as well as a loan.
- [ ] 🆕 🔴 **The DATE he first used the car for the business, the odometer at both ends of the year,
      and the miles by category** — **asked 2026-09-20 and NOT answered**; he sent percentages
      instead. **The forms require the dates and the miles, not a percentage.**
- [ ] 🆕 🔴 **THE HOME OFFICE'S TWO MEASUREMENTS — the apartment's total floor area and the office
      room's, in square feet.** **Confirmed 2026-09-23 to be absent from everything he has sent**:
      his reconciliation note and both workbooks were searched in full and contain no floor area at
      all. ⛔ **He gave a percentage, and neither of the two forms that compute this has anywhere to
      put one.** ⓘ *Ask in the same message whether the room was used **exclusively** for business,
      **which** activity it served, and whether he kept a home office after moving mid-year — each
      changes the answer more than the percentage does.*
- [ ] 🆕 Whether any **other bank or card account** was used in 2025 that is not in the workbook.
- [ ] 🆕 🔴 **Which months he lived at each address** — his own dates and his own payments disagree, and
      the home-office months cannot be computed until they are reconciled *(2026-09-20)*.
- [x] ✅ 🆕 **How the vehicle use divides between the two activities** — **ANSWERED 2026-09-22**, and
      ⚠️ **his answer puts most of the car on the activity that earned nothing**, which is a question
      of its own rather than a closed item.
- [ ] 🆕 🔴 **The square footage of the office room and of the whole apartment** — **asked 2026-09-20
      and NOT answered**; he sent the percentage again. ⛔ **Nothing about the home office can be done
      until this arrives** — both methods require an area.
- [ ] 🆕 🔴 **Did he do ANY catering work in 2025?** — the one fact the firm needs before deciding
      whether the return carries one business or two. **His catering figures came back with no revenue
      at all** — 🆕 **and its statement shows no cost of its own either: every line is a share of
      something shared with the other activity.** ⚠️ **Note the zero revenue is an ASSIGNMENT his
      own preparer declined to make** — the note says the payers could not be reliably attributed to
      either activity — **so this question also decides where the income sits.**
- [x] ✅ 🆕 **Whether that company ever sent him an information return** — **ANSWERED 2026-09-22**:
      his reconciliation note says none was issued. ⓘ *It does not change whether the money is
      reportable — only whether a matching notice is coming.*
- [ ] 🆕 🔴 **What one specific December payment from a payer was for** — he treats it as personal and
      leaves it out, but it is inside an information return **the firm itself prepared for that
      payer**. **Only he can say what it was; it cannot be dropped silently.**

- [ ] 🆕 ⚖️ **Four splits between the two activities need the firm's decision** — the vehicle, the
      meals, the phone and the home office. **None has a stated basis, and two of them pull opposite
      ways.**
- [ ] 🆕 🔴 **Where the real-estate activity's costs go, and whether one payer's commission belongs
      there rather than to credit repair.**
- [ ] 🆕 ⏳ **The September 2025 bank statement** — he raised the gap himself and offered to send it.
      **A second missing month; December was already known.**

## 7. Links

- **Double client:** [Valentin Volzhanskiy — id 710663](https://app.doublehq.com/close?cid=710663)
- **Double tax project:** [2025 Taxes — project 219347](https://app.doublehq.com/tax-return?cid=710663&projectId=219347)
- **Double case note:** `2025 Form 1040 — preparation notes for review` — note **524890**
  *(the preparer's own assumptions, written for Julia, 2026-09-13)*.
- **Google Drive folder (sensitive vault):** `Valentin Volzhanskiy` under Julia's client tree.
- **Working paper for the return:** [`tax-returns/valentin-volzhanskiy/2025-form-1040.md`](../../tax-returns/valentin-volzhanskiy/2025-form-1040.md)
- **Related SOPs:** [`form-1040-preparation.md`](../../sops/form-1040-preparation.md)
- 🔑 **Related clients — three of his 1099 payers are OUR clients, and their folders hold forms his
  own file never will:** [`voicecapital.md`](./voicecapital.md) ·
  [`pro-title-agency.md`](./pro-title-agency.md) · **Maxratings LLC** *(no Client Intelligence file
  yet — FOLLOW-UPS row 109)*.
- 🔴 **THE WORKING WORKSHEET — and there are TWO files, one of which must be discarded.**
  ✅ **LIVE: `Volzhanskiy-2025-worksheet.xlsx`** *(first issued 2026-09-23, extended tab by tab since;
  the tabs are numbered)*. ⛔ **DISCARD: `Volzhanskiy-2025-working-paper.xlsx`** *(2026-09-24)* — it was
  built from a state of the working paper that was **five merged PRs and one open PR behind**, so its
  figures **contradict** the live one rather than merely lagging it. 🔗 **The working paper's §24 has
  the whole account.** ⓘ *Neither file is in the repo — they carry client figures and are handed over,
  never committed.*
