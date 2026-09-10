# Artem Markarian

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-09-06

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

- **Business name:** Artem Markarian — an **individual** client record _(Double `Account Type: Individual`, 2026-09-01)_
- **Entity type:** n/a — individual taxpayer. 🔴 **A 50% SHAREHOLDER of [ECOORGANIC USA LLC](./ecoorganic-usa.md) FOR 2025** — he and his father each hold 50%, and **he gets a 2025 K-1** *(Julia's notes, relayed by Lilian 2026-09-03)*. ~~**NOT a shareholder during 2025 — he becomes one on 2026-01-01**~~ ⛔ **That reading stood for one day and is WITHDRAWN**; it came from the departure date *(his father leaves at the end of 31 December 2025)*, which says when the father STOPS, not when the son STARTS. 🔴 **Still open, and it decides his K-1: WHEN in 2025 he was admitted** — a mid-year admission forces a per-day allocation under §1377(a)(1) and a flat half misstates both K-1s — **and whether he is an eligible S-corporation shareholder under §1361 on that date**, which nobody has asked. He is also **the person who runs the business and the one the firm corresponds with**, which is a separate fact from owning it *(and the 2026-04-07 Connecticut annual report removed his father and added him as principal agent — §6)*
- **Home state:** 🟡 **Connecticut is the working position and it is NOT confirmed.** The company operates from **Darien, Connecticut**; his own federal return carries a **Wilton, CT** address; the company's state return codes him a Connecticut resident. ⛔ **Nobody has established it, and it decides which state form he files** — with Julia (2026-09-10)
- **Industry / what they do:** his business activity reaches the 1040 through the S corporation — **plus a second, separate activity: he hosted cars on Turo during 2025** (§5), which Julia has ruled belongs on his individual return
- **Primary language:** **Russian** — the firm's correspondence with him is in Russian
- **Our engagement (services we provide):** **Income tax only — Form 1040** _(Double: `Income Tax: true`, `Tax Return Type: 1040`, `Bookkeeping: N/A`, `1099 Preparation: false`, `Annual Report: false`, 2026-09-01)_. **Assigned staff: Lilian.** The firm's work for the company is a separate engagement on its own record
- **Fiscal year-end:** calendar year
- **Accounting platform:** `platform: none` — correctly. The books that matter to his return are the company's

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details.

| Role | Where to find them |
|---|---|
| The client himself | Double client (link below) |
| **His company** — an S corporation, and the source of his K-1 | [`ecoorganic-usa.md`](./ecoorganic-usa.md) · [Double cid 719473](https://app.doublehq.com/close?cid=719473) |
| **Ishkhan Markarian — his father, and the company's SOLE shareholder in 2023, 2024 AND 2025** | [`ishkhan-markarian.md`](./ishkhan-markarian.md) · the company's Double record and [`ecoorganic-usa.md`](./ecoorganic-usa.md) §2. ⛔ ~~**SETTLED 2026-09-02 (evening) by Julia: his father is the sole shareholder for ALL of 2025 … Artem has NO 2025 K-1.**~~ 🛑 **SUPERSEDED THE NEXT DAY — 2026-09-03, Julia's notes relayed by Lilian:** he IS a **50% shareholder for 2025** and **does** get a 2025 K-1. ⛔ **The 09-02 reading came from the departure date, which says when the FATHER stops, not when the SON starts.** *(§2 "Entity type" carries the live position; the 2026-09-05 work runs on 50/50.)* 🔴 **What stays open is WHEN in 2025 he was admitted** — a mid-year admission forces a §1377(a)(1) per-day allocation.  ⓘ *This fact has now moved THREE times — a two-shareholder year, then 100% Artem from 2025-01-01, then the 09-02 no-K-1 reading — and the current position is 50/50 with a K-1.* |

- **Double client:** [app.doublehq.com/close?cid=710623](https://app.doublehq.com/close?cid=710623)
- **Double case note:** **`510952` — `CASE · 2025 Turo host activity`**, opened 2026-09-01. It carries **Turo's reply verbatim** and the client's own answer on which cars were hosted. ⛔ **One note per case — update that note, never open a second one.**

## 3. Systems & access

| System | What it's for | Where credentials live | Non-sensitive reference |
|---|---|---|---|
| Double client portal | How he receives and returns documents | _(n/a — client's own portal login)_ | **`Organizer Status: Sent`** as of 2026-09-01 — sent, not returned |
| **Turo** (host account) | The 2025 rental activity → Schedule C | _(the client's own account)_ | 🔴 **He cannot log in.** That is why the 2025 earnings figures had to come from Turo Support by email rather than from the Earnings Summary download. **Worth restoring access before the next filing season** — the per-car breakdown and every future year depend on it |
| WhatsApp / text | How Julia reaches him in practice | n/a | The 2026-09-01 answer on which cars were on Turo came back by text, in Russian |

## 4. Obligations & recurring processes

### Income tax
- **Applies?** Yes — **Form 1040**, prepared by this firm, assigned to Lilian.
- **What feeds it:**
  - 🔴 **A SCHEDULE K-1 FROM THE COMPANY, at 50%** *(Julia's notes relayed by Lilian, 2026-09-03)*.
    ⛔ ~~**NO K-1 FOR 2025 — corrected 2026-09-02 (evening):** his father was the sole shareholder for the
    whole of 2025, so the FY2025 K-1 is his father's and Artem receives none; his 1040 no longer waits on
    the company's return~~ — 🛑 **SUPERSEDED THE NEXT DAY — 2026-09-03, Julia's notes relayed by Lilian:** he IS a **50% shareholder for 2025** and **does** get a 2025 K-1. ⛔ **The 09-02 reading came from the departure date, which says when the FATHER stops, not when the SON starts.** *(§2 "Entity type" carries the live position; the 2026-09-05 work runs on 50/50.)* 🔴 **What stays open is WHEN in 2025 he was admitted** — a mid-year admission forces a §1377(a)(1) per-day allocation. ⚠️ **So his 1040 DOES wait on the company's FY2025 Form 1120-S.** ⚠️ **One thing does still connect them:** if the company's 2025 payments
    for his benefit are characterised as compensation or as a loan from him rather than as distributions to
    his father, that lands on his 2025 return — Julia decides *(company working paper §6 B-1)*.
  - 🔴 **A Schedule C for the 2025 Turo activity** — Julia's ruling, 2026-09-01 (§5).
  - 🟡 **Form 7203 basis — a 2026 item now, not a 2025 one** *(corrected 2026-09-02 evening)*. 🛑 **He has NO 2024 or 2023 Form 7203 and cannot have one: he held no stock in either year** (both filed returns show his father at 100%). ⛔ **Do not send anyone hunting for one.** 🛑 **REWRITTEN 2026-09-02 (evening): this is a 2026 item, not a 2025 one.** His opening basis is **created by the transfer at the CLOSE of 2025-12-31**, so the first Form 7203 he files is with his **2026** return. How it happened still decides the number: **bought → what he paid · a gift → his father's basis carries over (§1015, dual-basis rule for loss, plus any gift tax paid on the appreciation under §1015(d)) · a bargain sale → the greater of his father's basis or what he paid · newly issued shares → what he contributed.** 🛠️ **One question to the client, and it also decides his father's own 2025 return.**
- **Organizer:** `Organizer Status: Sent`. ⚠️ **A company return runs off its books, not its owner's organizer** — the organizer gates *his* return, not the company's.

### 1099 filings
- **Applies?** `1099 Preparation: false` on his own record. ⚠️ **But see §5 — the Turo activity may itself have created a **Form 1099-MISC box 1** question — 🔑 **paying for the USE of a car is RENT**, not services; 1099-NEC only for a service element *(an operator, cleaning, detailing)*, prorated out. **$600 threshold for 2025** — ⚠️ *OBBBA raises §6041 to **$2,000** for payments made after 31 Dec 2025*** if he paid the owner of the third car.

### Annual report / other filings
- **Applies?** `Annual Report: false` on this record. The company's filings sit on the company's record.

## 5. Key facts & quirks

- 🔴 **HE HOSTED CARS ON TURO IN 2025, AND IT IS HIS — NOT THE COMPANY'S.**
  **Julia's decision, 2026-09-01:** *"el income y los gastos, es decir, toda la actividad relacionada
  con Turo, pertenece a Artem y, por tanto, debe ir en su declaración individual."* So the income and
  the costs that go with it land on **his Schedule C**, and the company's Turo-related spending becomes
  **owner distributions** there. **Figures live in the company's
  [working paper](../../tax-returns/ecoorganic-usa-llc/2025-form-1120s.md) §8A and in Double note
  `510952` — never in this file.**
- 🔴 **NO FORM 1099-K WAS ISSUED FOR 2025**, and Turo said so in writing: his host earnings did not meet
  the IRS threshold. ⚠️ **Two things follow.** The income is **taxable regardless** — the absence of a
  form changes nothing. And the corroboration the firm had planned on is **gone permanently**: the plan
  was to read the **name and TIN on the 1099-K** to settle whether the Turo account is the company's or
  his personally. **There is no form, so that route does not exist** — it is settled by asking, or from
  the account registration.
- **The three cars he named** *(by text to Julia, 2026-09-01, in Russian)*: a **Hyundai Santa Fe**, an
  **Audi A6**, and — *"и пару раз сдавал товарища Хундай Kona"* — **a friend's Hyundai Kona**, rented
  out through his account a couple of times.
  🔴 **The Kona is the one that creates work.** He **cannot depreciate a car he does not own**, and its
  costs are not his. **What he received for it, what (if anything) he paid the friend, and whether that
  payment needed a **Form 1099-MISC box 1** question — 🔑 **paying for the USE of a car is RENT**, not services; 1099-NEC only for a service element *(an operator, cleaning, detailing)*, prorated out. **$600 threshold for 2025** — ⚠️ *OBBBA raises §6041 to **$2,000** for payments made after 31 Dec 2025*** are all open.
- ⚠️ **Turo's "reimbursements" are neither income nor a deductible expense** — Turo's own tax
  documentation says so. They stay **out** of gross receipts **and** the reimbursed portion has to come
  **out** of the fuel deduction, or the same fuel is deducted twice.
- ⚠️ **Turo vehicles are LISTED PROPERTY.** Form 4562 Part V wants **business / commuting / other
  mileage per vehicle**, and **no mileage log has been seen**.
- 🛑 **WITHDRAWN 2026-09-02.** This bullet said the two names on the company's vehicle-finance payments
  were evidence toward **splitting the pooled owner-capital account between two shareholders.**
  ⛔ ~~**There is nothing to split** — 2025 has one shareholder.~~ 🛑 **SUPERSEDED 2026-09-03** — that ground was the no-K-1 reading, withdrawn the next day *(§2 "Entity type")*. ✅ **The pooled owner-capital account IS being split 50/50** as a documented working assumption — the working paper's **Form 7203 line 2** runs on it, so it feeds his stock basis. ⚠️ **Still unevidenced per shareholder:** the contributions and distributions each sit in ONE account with nothing allocating them. **The names still show who benefited from
  which payment**, which matters for the personal-vs-business analysis; they say nothing about
  shareholding. Detail in the company's working paper.
- **A per-car earnings breakdown has been requested from Turo.** Julia asked him on 2026-09-01 to reply
  to Turo by email and ask for the 2025 earnings **broken down by car** — as audit backup, and because
  it is the only thing that splits the total across three vehicles. **Pending.**
- 🔑 **THE COMPANY'S 2025 BOOKS SHOW A SOUTH-FLORIDA STAY IN MARCH 2025 — AND EVERY TURO *GUEST* RENTAL
  THAT COST THE COMPANY ANYTHING CARRIES A MARCH TRIP DATE** *(read off the ledger dates, 2026-09-02)*:
  fuel in Fort Lauderdale, parking at Bal Harbour and at a mall read as Sunny Isles, fuel brands that do
  not operate in Connecticut *(inferred from the brands)*, what reads as rental-car insurance the day of
  a Turo rental, the Audi and a BMW serviced in Miami, then what looks like a drive north *(truck-stop
  fuel on consecutive days)*. A second Miami visit in July, and premiums from an insurer the paper reads
  as a Florida/Alabama one starting that week. 🛑 **NARROWED 2026-09-02 (evening) by the full General
  Ledger: the rentals are NOT all inside that trip** — there are February rentals too, and February's fuel
  is all Connecticut, so those look local. **The March cluster still reads as one Florida stay.** **So the Turo rentals
  the company paid for look like his trips, not jobs** — they are recommended as distributions to him in
  the company's worklist *(working paper §D-6, tier 2 — Julia decides)*, and **on his side they are only
  Schedule C costs if the trips were for the Turo cars.** ❓ **Ask him what the March and July trips
  were** — and the April trip to the Chicago area the same ledger shows.

## 6. History & open questions

### Log

- 2026-09-10 (ninth pass) — 🗓️ **HIS SHAREHOLDER START DATE IS SETTLED, AND HIS STATE RETURN IS BUILT.**
  ✅ **① He was admitted on 1 January 2025** *(Lilian)*. **That closes a real risk**: a mid-year admission
  would have forced a day-by-day allocation of the company's income, and the flat half we used would have
  been wrong on **both** shareholders' K-1s. **With 1 January, the half is right.** ⚠️ **It does not settle
  how he ACQUIRED the shares**, which is a different question and still open — it sets his opening basis.
  🇺🇸 **② His Connecticut return is prepared**, from the 2025 forms downloaded from the state's own site.
  **He owes Connecticut very little — and possibly nothing at all**, because a state credit for property
  tax paid on a home or a car is worth more than his whole state tax.
  🔴 **③ The thing that gates it: nobody has established that he is a Connecticut resident.** This file has
  said his residence is unknown since it was created. **The evidence all points one way** — the address on
  his own federal return, the company's location, where he buys fuel — **and the company's state return
  already asserts it.** ⛔ **But asserting is not establishing, and if the answer is different, both returns
  change.** **It is Julia's to confirm.**
  🛠️ **④ Three things to get from him:** what he paid in state property tax on his home and one car during
  2025 *(with the dates)*; whether he owes any out-of-state use tax; and whether a state extension was
  filed in his name.
  🔑 **⑤ One consequence recorded for the firm, not for him:** the company did not make the state's optional
  entity-level tax election, so he gets no credit for it and pays the state himself. **The election cannot
  be undone — it is a decision for next year.**
- 2026-09-10 (eighth pass) — 🛑 **LILIAN CORRECTED US: HIS RETURN WAS ALREADY FINISHED, AND THE
  "MISSING ENTRY" WAS OUR ERROR.**
  🗣️ Her instruction, which she had given before: **both shareholders report zero contributions and zero
  distributions**, and the officer's compensation goes in full on **Artem's** self-employment schedule.
  ✅ **On that basis his basis form is right exactly as the software already printed it** — there was
  nothing to type.
  🔴 **What we got wrong, and it is worth naming because it is a repeatable shape:** the company posted a
  journal entry that reduced the **pooled** owners'-draw account, and we subtracted that whole entry from
  **one shareholder's half** of it, on the correct-but-irrelevant ground that the compensation was his. **The
  adjustment belongs to the account; the split happens after it.** ⛔ **It would have overstated his
  closing basis, and it invented a capital gain for his father that does not exist.**
  🚩 **The warning sign was there and was misread as a nice result:** the wrong figure came out as exactly
  half the journal entry, and that was written up as a memorable shortcut rather than questioned.
  ✅ **Father and son now come out the same way** — no capital gain for either, and each carries his own
  share of the year's income, less his non-deductible half of the meals, into next year.
  ⚠️ **One consequence to put in front of the reviewer:** Artem picks up the whole of the compensation as
  income, with self-employment tax on it, while the reduction in draws that funded it fell on both
  shareholders equally. **Recorded as a consequence of the decision, not argued.**
  🟡 **The company's own working file still carries the overruled split in many places** and is flagged for
  a sweep; the correction itself is recorded at the top of that file and in his.
- 2026-09-09 (seventh pass) — 🛠️ **HIS RETURN IS ONE ENTRY FROM FINISHED, AND THE DELIVERY HAD TO BE
  REWRITTEN BEFORE SHE COULD USE IT.**
  🔴 **① Why the basis form would not come out right:** the contributions line was never filled in, so
  the form was building his ending basis from the year's income alone. **Everything else on it was already
  correct.** 🔑 **And the draft itself proved where the distributions line comes from** — it printed zero
  without anybody typing it, which means the software takes it from the K-1's own box. ⛔ **So the
  contributions have to go in NET of his distributions**; the gross would overstate his basis by the whole
  distribution, because nothing subtracts it anywhere.
  🟢 **② What she had already done right:** the qualified-business-income block is entered and working, the
  premium-tax-credit form is deleted, and his share of the company's income landed in the correct
  (non-passive) column of the supplemental-income schedule — **verified by measuring where the figure sits
  on the printed page**, because in the wrong column the totals come out identical and nothing warns you.
  🛑 **③ The real finding was about US, not about her.** Her words: *"No sé de qué fila hablas, no sé de qué
  forma, qué página. No entiendo nada."* **The delivery had been addressing fields the way the IRS FORM is
  laid out while she was looking at a data-entry SCREEN that uses different words and a different
  structure.** ✅ **Fixed:** every keyboard instruction now carries **form → tab → section → the literal row
  label**, and the delivery says openly where nobody has seen the screen yet rather than inventing a field
  name. ⚠️ **One claim in the firm's own procedure was found to have been INFERRED and was wrong** — it
  described a form as accepting entries it does not accept at all. **Corrected, with the lesson written
  down: a statement about a screen has to come from a screen.**
  🟡 **④ Still open on his return:** how he acquired his shares *(the signer's question, and it sets his
  opening basis)*; the running costs of the cars, which decide whether a refundable credit comes into
  play and whether a due-diligence form is required; and one checkbox on the K-1 screen that may be
  wrongly ticked — it changes no tax this year but it is false data.
- 2026-09-07 (sixth pass) — 🔎 **HIS DRAFT RETURN WAS REVIEWED, AND THE SIGNER SETTLED THE
  DISTRIBUTIONS QUESTION.**
  🟢 **① The decision:** his share of the company's distributions is **reported at ZERO on his basis
  form**, matching the K-1 the company issues — the firm's own netting policy applied consistently.
  🔑 **It costs nothing in substance** *(both presentations reach the same ending basis)* **and it closes
  an escalation** that had been raised because the alternative would have left his captured K-1
  disagreeing with the one the company issued. ⚠️ **But netting moves BOTH sides**, and the draft had moved
  only one — the contributions figure has to become the net, or his basis is understated.
  🔴 **② A defect the review found, and it is the kind that reaches the IRS:** the draft still carries a
  **premium-tax-credit form rolled over from 2024**, filled from the return's own figures so that it looks
  completed — **and he had no health insurance in 2025**, which was established and recorded the day
  before. **He meets none of the conditions for filing it**, so it is not part of his return — ⓘ *it computes zero
  either way, so this is a processing defect rather than a money one.* ⛔ **Also present: the paid-preparer
  due-diligence checklist, required only for credits he does not claim** — 🛑 **but deleting THAT one is
  conditional**: it comes back, with a preparer penalty attached, if the open scenario below is decided the
  other way and the refundable credit is claimed.
  🔴 **③ The company's QBI information never reached his return** — the software greys the K-1 box and
  routes it to a separate section, which was empty. **A correctness fix that does not change his tax as the
  return now stands**, because the deduction is already capped by his taxable income. ⚠️ **That last part
  depends on an open position** — if the officer compensation turns out not to be qualified business income,
  the cap releases and the same entry becomes worth real money.
  ✅ **Everything else ties to the working paper to the cent.**
  ⚠️ **Two things stay open and both are decisions, not calculations:** his **opening basis** *(it depends
  on how he acquired the stock, which is still unanswered)*, and **whether the cars' running costs belong
  on the Schedule C** — the scenario without them forecloses a refundable credit that the scenario with
  them would make live.
  🛠️ **The draft was read through the firm's own redactor**, after rebuilding the extraction from the
  file's own font maps — a naive read of that PDF reports "nothing sensitive found" while decoding nothing,
  which is exactly the blind case the tool refuses. ⚠️ **But the tool's own front door could not run in this
  session** *(its PDF library would not install)*, so only its masking was used and the decoded text existed
  briefly outside it. 🛠️ **The next person hits the same wall** — tracked as a tooling gap alongside the two
  already open on that tool.
  ⛔ **No figures here — they stay in the working paper.**

- 2026-09-07 (fifth pass) — 🔴 **THE K-1 SECTION OF HIS DELIVERY WAS REBUILT AGAIN, BECAUSE THE
  CORRECTION MADE THE DAY BEFORE STILL DID NOT WORK AT THE KEYBOARD.**
  🗣️ **Lilian:** *"Tus instrucciones acerca de cómo llenar el Schedule E no son buenas para seguir en
  ATX. **No encuentro dónde entrar a nada.**"*
  🔑 **THE CAUSE, and it is worth keeping: the figure is not entered on the form it appears on.** In the
  firm's tax software **the K-1 is keyed on its own form**, and Schedule E, the basis form and the QBI form
  are all built from that one screen. 🛑 **Both earlier versions gave the coordinates on the IRS FORM and
  no route through the PROGRAM**, which is unusable for the person typing.
  ⚠️ **AND THE FIRST FIX OVERSHOT, caught by the review before it shipped:** it said the schedule *"opens no
  line at all"*, which is false — **a few ticks and one Yes/No on it are still the preparer's**, and
  **where those are entered is a different, unanswered question.** 🔑 **Over-correcting would have sent her
  hunting on the wrong screen for a third time.**
  ⛔ **AND THE ROUTE WAS ALREADY IN THE FIRM'S OWN FILES** — written down in August from Lilian's keyboard
  while working another client's return. 🔑 **The evidence being on file is not the same as the evidence
  being used**, which is the second time in a week that has been the cause. 🛠️ **A rule now says to search
  the firm's prior working papers for a form's name before delivering any entry route.**
  ⚠️ **Two things are still unconfirmed and need one look at her screen**: how the program labels the
  columns in its own version of that grid, and where the *basis computation required* tick actually lives.
  **Neither changes a figure.**
  🔴 **And one real tax error was caught in the same review, before it reached her:** a troubleshooting
  note claimed that an activity classified the wrong way would never reach the schedule at all. **It does —
  it lands one column over, and the TOTAL IS IDENTICAL.** 🔑 **So the check is *which column*, never
  *did it arrive*** — a distinction no total can make, now written into the firm's rules.
  🟢 **AND LATER THE SAME DAY LILIAN OPENED THE VENDOR'S SUPPORT SITE FOR THE SESSION**, which settled
  the last of it: **the form to add has an exact name, now read from the vendor's own published forms
  list rather than inferred.** ⛔ **A rule written that morning saying the vendor's site was unreachable was
  wrong within hours and has been corrected** — the session had drawn it from one tool failing, without
  retrying another that works. 🔑 **The vendor's step-by-step articles are still shut** *(they need the
  firm's own customer login, which Lilian has and a session does not)*, **so what a SCREEN looks like is
  still established only from a screenshot or a prior working paper.**
  🔴 **What her screenshot actually showed, and it was the whole answer:** she had the **rental** input
  sheet open, and **her return contained no K-1 form at all.**
  🔴 **THIRD ROUND THE SAME DAY, and it is the one worth keeping.** 🗣️ *"Me demoro mucho tratando de
  encontrar dónde introducir la información."* **Given the right form's name, she added a neighbouring one**
  — a K-1 belonging to a **foreign partnership**, and an *issuing* form rather than a receiving one.
  🔑 **The cause is not carelessness: searching an individual return for "K1" returns four
  near-identical names, and the one wrong-direction form the software offers there is the one for a
  FOREIGN partnership — one line from the right one. Picking it opens a plausible screen, not an error.**
  ✅ **So the firm's rules now require the DISAMBIGUATION, not just the name** — which of the look-alikes it
  is *not*, **scoped to the return type the person is actually in**, the naming convention that separates a
  K-1 you **receive** from one you **issue**, and **a tell that works without remembering any of it.**
  ⛔ **The first version of that tell was wrong and a review caught it before it did harm:** it said an
  issuing form is the one that asks for allocation percentages — but a **received** K-1 carries its own
  percentage too, so the test would have condemned the correct form, and the procedure said to delete it.
  ✅ **The tell is now structural: the wrong screen is a grid with one row per OWNER and asks for the
  OWNERS' names; the right one asks for the COMPANY's.**
  🛑 **Twice in one day a delivery gave a name and no way to tell it from its neighbours.**
  🟢 **FOURTH ROUND — she found the sheet herself and sent a screenshot, which closed it.** 🗣️ *"Parte 3,
  casilla 1: ¿dónde está eso?"* ⛔ **Nowhere — the software's input sheet carries no "Part III" and renames
  the boxes.** 🔑 **Every route the firm had given her was written in the IRS FORM's geography while she
  was reading a SCREEN**, which is now the rule: an entry route is written in the software's own words —
  its section heading, its line number, its label — and says where those differ from the IRS's.
  🔴 **The screenshot also settled three things nobody had asked the right question about:** the sheet's
  **checkboxes** are where the passive/nonpassive position, the basis form and the QBI form are actually
  decided *(and one of them works by being left EMPTY)*; the sheet's **own printed instructions** state the
  import route and where the basis section sits, both of which had been carried as unverified leads; and
  the boxes are **reworded** from the IRS's.
  🛑 **The standing lesson: one screenshot outranks every search result, and it is one message away —
  ask for it early instead of delivering a third guess.**
  ⛔ **No figures here — they stay in the working paper.**

- 2026-09-06 (fourth pass) — 🛠️ **THREE THINGS ON HIS RETURN WERE REWORKED BECAUSE LILIAN COULD NOT WORK
  FROM THEM, AND ONE OF THEM THE FIRM HAD WRONG.**
  🔴 **① The rental-platform's service fee goes in the return's OTHER EXPENSES section, not on the named
  commissions line** — Lilian's instruction, *"porque así fue como lo hizo [Julia] en 2024 y quise
  ser consecuente con eso"*. ✅ **His 2024 return corroborates it**: everything it deducted beyond
  depreciation sat in *other expenses*, nothing on a named line. 🔑 **Following the prior year's mapping is
  the firm's method**, so this is a convention to record, not a preference. 🟢 **AND THE FIRM PREPARED THAT 2024 RETURN
  ITSELF — JULIA DID** *(confirmed by Lilian, 2026-09-07)*. 🔑 **So this is not a prior preparer's habit
  the firm chose to follow — it is the firm's OWN convention, set by the person who signs.**
  🛑 **Changing the line in 2025 would have meant the firm contradicting itself on the same client's same
  activity in consecutive years, with nothing recorded to say why** — the reason to follow it, not merely
  the provenance. 🔑 **The exception is correctness: had the 2024 line been wrong, it would be a defect to
  fix and record, not a convention to keep.**
  🔑 **② and ③ were failures of the DELIVERY, not of the figures** — the K-1's landing place and the basis
  form were described in a way she could not act on. Both are rebuilt in his working paper and on his live
  page, and **the general lessons went into the firm's rules** so the next return does not repeat them.
  ⛔ **No figures here — they stay in the working paper.**

- 2026-09-06 (third pass) — 🟢 **THE BIGGEST OPEN ITEM ON HIS RETURN CLOSED, AND THE COMPANY'S RETURN
  MOVED UNDER HIM ON THE SAME DAY.**
  🟢 **① HE HAD NO HEALTH INSURANCE IN 2025.** Lilian, relaying him: *"Artem dijo que no tenía seguro
  médico en 2025. Por tanto, descartamos que exista un documento 1095-A."* ✅ **So there is no Marketplace
  statement, no premium-tax-credit reconciliation form, and the electronic-filing rejection that would
  otherwise have held the return cannot arise.** ⚠️ **The 2024 facts recorded above stay true and stay
  recorded** — he *was* enrolled all twelve months of 2024 with advance credit paid on his behalf and
  nothing repaid — **which is exactly why this had to be ASKED rather than assumed in either direction.**
  🔴 **② THE COMPANY ELECTED OUT OF BONUS DEPRECIATION, SO HIS SHARE OF IT FLIPS FROM A LOSS TO INCOME.**
  Julia's decision on the company's 2025 return *(recorded on that client's file)*. **What it does to
  him:** his share is now **income, not a deductible loss**; that income **builds his basis**, so what he
  carries into 2026 is several times what it was; and — the practical consequence — **his adjusted gross
  income rises enough to decide whether he qualifies for the earned income credit at all.**
  ⚠️ **Which way it goes depends on an answer still owed by him**: whether the year's vehicle running
  costs are established as his. On one reading the credit is **foreclosed on income alone**; on the other
  it is **in play and has to be computed.** 🛑 **Two traps recorded in the working paper so nobody gets
  this wrong: an S-corporation shareholder's share of company income is NOT earned income for that credit
  — it only raises the income that can disqualify him, so it hurts twice and helps never — and the
  credit's phase-out runs on the higher of earned income and adjusted gross income.**
  🟡 **③ THE HYUNDAI SANTA FE IS PROVISIONALLY OUT.** Julia, relayed by Lilian: it will **not** be added
  to the car-rental activity nor put on his return as a depreciable asset. ⚠️ **NOT FINAL — she gives the
  definitive answer on Tuesday 2026-09-08**, and Lilian's own wording was *"lo más probable"*. 🛠️ **The
  intake questions are being HELD, not deleted**, in the working paper: if the car comes back in, the
  first question is not whose name is on the title but **whether the car is really his** — who paid for
  it, who insures it, who bears the loss if it is wrecked — and the mileage split is not optional,
  because a car is listed property.
  📄 **Everything above is folded into his working paper and republished to the same live page.** ⛔ **The
  figures stay there, never here.**
  ⓘ *This entry ABSORBS an earlier same-day note filed out of order lower down the log, which said the
  working paper "needs redoing". It has been redone; the duplicate was removed rather than left to be
  read as still-open work.*

- 2026-09-06 (later) — 🔴 **HIS FILED 2024 RETURN WAS READ, AND IT FOUND THE THING THAT BLOCKS HIS 2025
  RETURN: HE HAS MARKETPLACE HEALTH INSURANCE.** Lilian asked for his Double documents to be reviewed and
  **discarded the 2025 organizer** — he did not complete one and, in her words, nothing has changed.
  🛑 **That decision is exactly why the prior year had to be read: the coverage is on no list the firm
  keeps, and only the 2024 return shows it.** He was enrolled **all twelve months**, with an advance
  premium credit paid on his behalf and **nothing repaid**, because his income that year was **far below the federal
  poverty line**. 🟢 **AND THE 2025 EXPOSURE IS SMALL — a first version of this entry said it could be
  larger than every other tax on the return, which was wrong and came from an income figure this session
  had already withdrawn.** On the corrected figures he stays **under 150% of the poverty line**, where the
  required contribution is zero and there is nothing to repay; **the worst case, if that is wrong, is a
  capped repayment of a few hundred dollars.** 🛠️ **His 2025 Form 1095-A is still needed** — if advance
  credit was paid for him, the electronic filing is rejected until the reconciliation form is attached —
  **and so is what the Marketplace had on record as his income when he enrolled**, which is the rule that
  keeps him eligible at all when his income lands below the poverty line. 🛠️ **Ask him for it, whether he was enrolled in 2025 at all and
  for which months, and whether he told the Marketplace his income had changed.**
  ✅ **What the same read CLOSED:** he files **Single**, has **no dependants**, his address is unchanged
  *(it is the company's address)*, he had **no W-2**, and he carries **no capital-loss, NOL or QBI
  carryforward** into 2025 *(read off the pages that extracted cleanly — one page of the return did not)*.
  🟢 **He is also probably owed a small refundable earned-income credit again**, which an earlier draft
  of this entry would have had the preparer skip.
  🔑 **And it made 2025 computable.** His **car-rental activity is not new** — it was already a Schedule C
  in 2024 with material participation, and **one car** sits on its depreciation schedule, placed in
  service in September 2024 at **90% business use** evidenced by a real mileage split. **2025 is simply
  year two of that schedule**, which turns his rental activity from the profit the firm had assumed into
  a **loss** — and that loss offsets his other self-employment income, so his self-employment tax is
  materially lower than the earlier estimate. ⚠️ **He also elected out of bonus depreciation for 2024, and
  that election has to be made again each year.**
  🔴 **Two new open items.** **The second car the firm believes he hosts is NOT on the 2024 depreciation
  schedule** — its cost, in-service date and business-use share are all unknown, or it is not his to
  depreciate. And **his Double file library holds a document named for a THIRD company**, neither
  Ecoorganic nor Turo and not opened: ⚠️ **if he owns or is an officer of it, a second K-1 may exist and
  this return is incomplete without it.**
  ⓘ **A Form 4868 was filed for him, so his 2025 individual return is due in October, not April.**
  ⛔ **The redacted text of his 2024 return was deleted after use and never entered the repo; figures live
  only in his working paper.**

- 2026-09-06 — 📐 **HIS 2025 INDIVIDUAL RETURN NOW HAS ITS OWN WORKING PAPER, AND A LIVE PAGE LILIAN
  CAN WORK FROM.** Preparing the company's return produced everything his own return receives, so it was
  written up as
  [`projects/tax-returns/artem-markarian/2025-form-1040.md`](../../tax-returns/artem-markarian/2025-form-1040.md)
  — **the master; figures live there, never here** — and delivered to Lilian as an **artifact at a stable
  link** *(her request: "un artefacto que sea un link vivo que podamos modificar")*. **The page carries no
  identifier of any kind.**
  🛑 **THE ONE THING ANYONE OPENING EITHER MUST KNOW: THE REVIEW HAS NOT RUN FOR HIS RETURN.** It is
  phase-2 material only — the company-side handoff plus what follows from it arithmetically. **His
  organizer, his prior year and his own documents have not been read**, so filing status, dependants,
  other income, health coverage, withholding and state residency are all unknown. ⛔ **Nothing in either
  can be filed.**
  ✅ **What IS settled and good for him:** his share of the company's loss is **fully deductible in 2025**
  and he carries basis into 2026 — a direct consequence of Julia's ruling that the whole officer's
  compensation is his. ⚠️ **He pays for it in self-employment tax**, because that compensation reaches
  him on a Schedule C rather than a W-2.
  🔴 **Still blocking, and three of them are his to answer:** the **per-car Turo breakdown** *(asked
  2026-09-01, still pending)*, **mileage per car** *(the cars are listed property and no log has been
  seen)*, **the friend's Kona** *(what he received, what he paid, and whether an information return was owed — 🔑 **Form 1099-MISC box 1, because paying for the USE of a car is RENT**, not a 1099-NEC, which is for services)*, and —
  for Julia — **when he was admitted as a shareholder** *(a mid-year admission breaks both K-1s)* and
  **his Connecticut residency for 2025**.

- 2026-09-01 — 🚗 **Turo established as his, and the documentation captured.** Working on the company's
  FY2025 return, the firm reached Turo's own answer on his 2025 host earnings — obtained by the client
  from Turo Executive Support after Julia asked him to write to them, because **he cannot log in to his
  own Turo account**. **Turo confirmed no Form 1099-K was issued for 2025.** Julia then ruled that the
  whole Turo activity — income and expenses — is **his, not the company's**, which puts it on a
  **Schedule C** in his 2025 individual return. The same day he named the cars by text: a Hyundai Santa
  Fe, an Audi A6, and **a friend's Hyundai Kona**. **A Double case note (`510952`) was opened on this
  record carrying Turo's reply verbatim and his own answer**, so the 1040 can be built from source
  documents rather than from memory. ✅ **The threshold Turo quoted was checked against irs.gov** and
  matches what the IRS publishes. **This file was created in the same pass** — he had none until now,
  despite being a named client with his own Double account. _(Worked by Lilian.)_
- 2026-09-02 (evening) — ⛔ ~~**CORRECTED BY JULIA: he was NOT a shareholder in 2025.** His father left the
  company at the **end of 31 December 2025**, so the FY2025 K-1 is his father's and Artem's first
  shareholder year is **2026**; his 2025 individual return is the Turo Schedule C and no K-1, and it no
  longer waits on the company's 1120-S.~~ 🛑 **SUPERSEDED THE NEXT DAY — 2026-09-03, Julia's notes relayed by Lilian:** he IS a **50% shareholder for 2025** and **does** get a 2025 K-1. ⛔ **The 09-02 reading came from the departure date, which says when the FATHER stops, not when the SON starts.** *(§2 "Entity type" carries the live position; the 2026-09-05 work runs on 50/50.)* 🔴 **What stays open is WHEN in 2025 he was admitted** — a mid-year admission forces a §1377(a)(1) per-day allocation.  ⚠️ **What did not go away:** the company paid a large amount in 2025
  that may have been for his benefit — a monthly apartment rent, cash, personal card spending — and whether
  that is a distribution to his father, compensation to him, or repayment of money he lent the company is
  **Julia's decision**, with real consequences for his own return *(company working paper §6 B-1)*.
  _(Worked by Lilian.)_
- 2026-09-02 (evening) — ⛔ **NOTHING IN THE COMPANY'S OWNER ACCOUNTS IS HIS.** Lilian ruled that the whole
  of both accounts is his father's, *"aunque veas cosas que van hacia Artyom"* — including payments that
  visibly went to or for him, which are his father's money spent for him and are **not** re-characterised as
  his loan, his pay, or a gift to be reported. **So he takes nothing from the company's equity section into
  his 2025 return.** ✅ **What he does still take is the Turo Schedule C (§5) — unchanged.** 🔑 **And one
  correction from the company's General Ledger: the company's own Turo rental charges run from FEBRUARY, not
  March**, and February's fuel is all Connecticut — so the "one Florida trip" reading of them is withdrawn.
  **It changes nothing about what belongs to whom.** _(Worked by Lilian.)_
- 2026-09-02 — 📅 **Two working assumptions set by Lilian for the company's return, both his:** the
  transfer is taken as **effective at the close of 2024-12-31**, so he is the shareholder for every day
  of 2025 and receives the **one** K-1 — 🛑 **WITHDRAWN the same evening, see above** — and **how he got the
  shares stays open until she speaks to Julia** — it creates his opening basis and is the one item still open on his Form 7203. 🔑 **And the
  company's ledger, read date by date, placed the Turo guest rentals and a cluster of Florida charges in
  one March 2025 trip** (§5). _(Worked by Lilian.)_
- 2026-09-05 — 🔴 **WHAT THE COMPANY'S RECLASSIFICATION ENTRY DOES TO HIS OWN 2025 RETURN (Lilian).** The
  company moved part of the year's owner distributions into **officer's compensation** *(the company file
  and its working paper carry the mechanics)*. On the firm's working assumptions — 50/50 with his father,
  and an opening basis of zero — **for him it is a trade:** ✅ **the capital gain he would have had on the
  2025 distributions disappears**; 🔴 **his 2025 K-1 now carries an ordinary LOSS he cannot deduct in
  2025** — basis is zero after the distributions, so it is **suspended and carries into 2026** on his Form
  7203, along with **a §199A loss on his own Form 8995** *(so his 2025 QBI deduction is gone)*; 🔴 **the
  reclassified amount reaches his 2025 Form 1040 as COMPENSATION**, by a route the K-1 does not
  carry — **a W-2 if the company late-files 2025 payroll, or a Schedule C with self-employment tax on the
  alternative route** — **the route is still Julia's decision.**
  🟢 **2026-09-05 — THE ATTRIBUTION IS SETTLED, BY LILIAN: the WHOLE of the reclassified compensation is
  ARTEM'S** *(company working paper §4 decision 24, confirmed in her own words)*. ⛔ **This replaces the
  half-and-half reading above and it goes the GOOD way for him:** because the compensation comes out of
  the pooled distributions, **his own distributions fall by the whole of it** — so **he has NO capital
  gain**, his nondeductible expenses are absorbed, **his 2025 ordinary loss becomes FULLY DEDUCTIBLE in
  2025 instead of suspended**, and he carries stock basis into 2026 rather than nothing. 🔴 **The cost
  lands on his father instead**, whose distributions rise by the same amount — see that file.
  ⚠️ **AND ONE THING GOT BIGGER, not smaller: the compensation on Artem's own 1040 is now the WHOLE
  amount, not half** — with the employment tax that goes with it, on whichever route Julia picks.
  🔑 **Two more decisions of hers reached the return the same day and neither changes his tax:**
  **contributions and distributions are NETTED OUT on the face of the return** *(so his K-1's
  distribution code reports nil)* — ⛔ **presentation only: his Form 7203 and his basis still run on the
  GROSS ledger figures, which is exactly where the result above comes from** — and **the company's
  paid-in-capital line is derived rather than rolled forward** *(a balance-sheet keying rule, no effect
  on him)*. ⚠️ **He now has two things on his 2025 1040 from
  this family of returns** — the company's K-1 *(and possibly compensation)* and the Turo Schedule C —
  and they are separate requests on separate days. 🔗 **Whoever prepares his 1040 must be told the
  compensation figure and its route by the person asking — nothing on the K-1 will say it.**
  _(Figures in the company's working paper only. Worked by Lilian.)_

### Outstanding items (CI-only — never in the SOP)

- 🔴 **His 1040 cannot be completed until the company's FY2025 Form 1120-S is** — the K-1 comes from it,
  ⛔ ~~**SUPERSEDED 2026-09-02 (evening): his 1040 does NOT wait on the company's return — he has no 2025
  K-1** *(the K-1 is his father's)*.~~ 🛑 **SUPERSEDED THE NEXT DAY — 2026-09-03, Julia's notes relayed by Lilian:** he IS a **50% shareholder for 2025** and **does** get a 2025 K-1. ⛔ **The 09-02 reading came from the departure date, which says when the FATHER stops, not when the SON starts.** *(§2 "Entity type" carries the live position; the 2026-09-05 work runs on 50/50.)* 🔴 **What stays open is WHEN in 2025 he was admitted** — a mid-year admission forces a §1377(a)(1) per-day allocation. ✅ **So the ORIGINAL bullet stands again: his 1040 waits on the company's FY2025 1120-S.** **What may still reach his return is the characterisation question in
  §5 / the company's §6 B-1.** ~~his 1040 cannot be completed until the company's FY2025 Form 1120-S is~~ —
  the company's return is past the review's blockers and its gate is the QuickBooks worklist, with a
  **2026-09-15** deadline.
- 🔴 **The per-car earnings breakdown from Turo** — requested 2026-09-01, not yet received.
- 🔴 **Whose Turo account is it?** Not confirmed from the registration. With no 1099-K there is no
  name-and-TIN to read.
- 🔴 **The Kona:** what he received, what he paid the friend, and whether a **Form 1099-MISC box 1** question — 🔑 **paying for the USE of a car is RENT**, not services; 1099-NEC only for a service element *(an operator, cleaning, detailing)*, prorated out. **$600 threshold for 2025** — ⚠️ *OBBBA raises §6041 to **$2,000** for payments made after 31 Dec 2025* was owed. ⚠️ **And he cannot depreciate a car that is not his** — *"his" is benefits and burdens, not the title (Pub 946 incidents of ownership; Helvering v. Lazarus, 308 U.S. 252; Grodt & McKay, 77 T.C. 1221)*.
- 🔴 **Form 7203 — a 2026 matter now, not 2025.** His opening basis is created by the transfer at the **close of 2025-12-31**, so the first Form 7203 he files is with his **2026** return. How the transfer happened is the question, and **Lilian is putting it to Julia herself (2026-09-02)**. Not urgent for the company's return: no capital gain on any reading.
- ⚠️ **Turo account access** — he cannot log in. Restore it before the next season.
- ⚠️ **His residence / state** is not recorded here and has not been established.

### Information still needed

- His mileage records for the Turo cars, per vehicle, for 2025 — **business, commuting and other**.
- Whether any of the company's Turo **guest** rentals (the company paying to rent a car) were for a job
  — that is the opposite side of the platform from his hosting, and moving them wrongly throws away a
  real deduction. 🔑 **2026-09-02: all that cost anything carry March 2025 trip dates, inside the Florida stay (§5) — a
  job is now the less likely reading, but it is still his to say.**

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710623](https://app.doublehq.com/close?cid=710623)
- **Double case note `510952`:** [the 2025 Turo case log](https://app.doublehq.com/clients/710623/info/notes/510952)
- **His company:** [`ecoorganic-usa.md`](./ecoorganic-usa.md) · [Double cid 719473](https://app.doublehq.com/close?cid=719473)
- **The company's FY2025 working paper** (figures live there, not here): [`2025-form-1120s.md`](../../tax-returns/ecoorganic-usa-llc/2025-form-1120s.md)
