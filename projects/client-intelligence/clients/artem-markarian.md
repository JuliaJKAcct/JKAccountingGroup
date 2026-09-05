# Artem Markarian

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-09-05

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
- **Home state:** not recorded here. The company operates from **Darien, Connecticut**; his own residence has not been established in this file
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
| **Ishkhan Markarian — his father, and the company's SOLE shareholder in 2023, 2024 AND 2025** | [`ishkhan-markarian.md`](./ishkhan-markarian.md) · the company's Double record and [`ecoorganic-usa.md`](./ecoorganic-usa.md) §2. ✅ **SETTLED 2026-09-02 (evening) by Julia: his father is the sole shareholder for ALL of 2025 and leaves at the END of 31 December 2025, so Artem's first shareholder year is 2026 and he has NO 2025 K-1.** ⛔ *(Two earlier versions of this row are withdrawn: that 2025 was a two-shareholder year, and that Artem was the 100% shareholder from 2025-01-01.)* |

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
  - 🛑 **NO K-1 FOR 2025 — corrected 2026-09-02 (evening).** ~~A Schedule K-1 from the company~~: Julia
    settled that his father was the sole shareholder for the whole of 2025, so **the FY2025 K-1 is his
    father's and Artem receives none.** ✅ **His 1040 no longer waits on the company's return** — his
    **first** K-1 year is **2026**. ⚠️ **One thing does still connect them:** if the company's 2025 payments
    for his benefit are characterised as compensation or as a loan from him rather than as distributions to
    his father, that lands on his 2025 return — Julia decides *(company working paper §6 B-1)*.
  - 🔴 **A Schedule C for the 2025 Turo activity** — Julia's ruling, 2026-09-01 (§5).
  - 🟡 **Form 7203 basis — a 2026 item now, not a 2025 one** *(corrected 2026-09-02 evening)*. 🛑 **He has NO 2024 or 2023 Form 7203 and cannot have one: he held no stock in either year** (both filed returns show his father at 100%). ⛔ **Do not send anyone hunting for one.** 🛑 **REWRITTEN 2026-09-02 (evening): this is a 2026 item, not a 2025 one.** His opening basis is **created by the transfer at the CLOSE of 2025-12-31**, so the first Form 7203 he files is with his **2026** return. How it happened still decides the number: **bought → what he paid · a gift → his father's basis carries over (§1015, dual-basis rule for loss, plus any gift tax paid on the appreciation under §1015(d)) · a bargain sale → the greater of his father's basis or what he paid · newly issued shares → what he contributed.** 🛠️ **One question to the client, and it also decides his father's own 2025 return.**
- **Organizer:** `Organizer Status: Sent`. ⚠️ **A company return runs off its books, not its owner's organizer** — the organizer gates *his* return, not the company's.

### 1099 filings
- **Applies?** `1099 Preparation: false` on his own record. ⚠️ **But see §5 — the Turo activity may itself have created a 1099-NEC question** if he paid the owner of the third car.

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
  payment needed a Form 1099-NEC** are all open.
- ⚠️ **Turo's "reimbursements" are neither income nor a deductible expense** — Turo's own tax
  documentation says so. They stay **out** of gross receipts **and** the reimbursed portion has to come
  **out** of the fuel deduction, or the same fuel is deducted twice.
- ⚠️ **Turo vehicles are LISTED PROPERTY.** Form 4562 Part V wants **business / commuting / other
  mileage per vehicle**, and **no mileage log has been seen**.
- 🛑 **WITHDRAWN 2026-09-02.** This bullet said the two names on the company's vehicle-finance payments
  were evidence toward **splitting the pooled owner-capital account between two shareholders.**
  ⛔ **There is nothing to split** — 2025 has one shareholder. **The names still show who benefited from
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
- 2026-09-02 (evening) — 🔴 **CORRECTED BY JULIA: he was NOT a shareholder in 2025.** His father left the
  company at the **end of 31 December 2025**, so the FY2025 K-1 is his father's and Artem's first
  shareholder year is **2026**. **His 2025 individual return is the Turo Schedule C and no K-1**, and it no
  longer waits on the company's 1120-S. ⚠️ **What did not go away:** the company paid a large amount in 2025
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
  🛑 **SUPERSEDED 2026-09-02 (evening): his 1040 does NOT wait on the company's return — he has no 2025
  K-1** *(the K-1 is his father's)*. **What may still reach his return is the characterisation question in
  §5 / the company's §6 B-1.** ~~his 1040 cannot be completed until the company's FY2025 Form 1120-S is~~ —
  the company's return is past the review's blockers and its gate is the QuickBooks worklist, with a
  **2026-09-15** deadline.
- 🔴 **The per-car earnings breakdown from Turo** — requested 2026-09-01, not yet received.
- 🔴 **Whose Turo account is it?** Not confirmed from the registration. With no 1099-K there is no
  name-and-TIN to read.
- 🔴 **The Kona:** what he received, what he paid the friend, and whether a Form 1099-NEC was owed.
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
