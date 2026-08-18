# Mykola Kozlovskyi

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-08-18

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

- **Business name:** Mykola Kozlovskyi — an **individual** client record _(Double `Account Type: Individual`, 2026-08-18)_
- **Entity type:** n/a — individual taxpayer. **Sole shareholder of [Kolo Florida Inc](./kolo-florida.md)** (an S corporation) **from 2025**, at 100% (§5)
- **Home state:** Florida — Sunny Isles Beach, Miami-Dade County _(2024 filed return, 2026-08-17)_
- **Industry / what they do:** n/a as an individual. His business activity reaches the 1040 through the S corporation; a 2024 Uber sole-proprietorship **did not continue into 2025** _(Lilian, 2026-08-18)_
- **Primary language:** **Russian — `Preferred language: Only Russian` in Double**, and the firm's whole correspondence with him is in Russian _(verified 2026-08-18)_
- **Our engagement (services we provide):** **Income tax only — Form 1040** _(Double: `Income Tax: true`, `Tax Return Type: 1040`, `Bookkeeping: N/A`, 2026-08-18)_. The firm's work for his **company** is a separate engagement on its own record
- **Fiscal year-end:** calendar year
- **Accounting platform:** none on this record — `platform: none`, correctly; the books that matter to his return are the company's

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details.

| Role | Where to find them |
|---|---|
| The client himself | Double client (link below) |
| **His ex-wife** — her own separate Double client, and the counterparty on every 2025 decision that has to match | [`liliia-hlebova-kozlovska.md`](./liliia-hlebova-kozlovska.md) · [Double cid 710644](https://app.doublehq.com/close?cid=710644) |
| His company | [`kolo-florida.md`](./kolo-florida.md) · [Double cid 706626](https://app.doublehq.com/close?cid=706626) |

- **Double client:** [app.doublehq.com/close?cid=709838](https://app.doublehq.com/close?cid=709838)
- **Double case note:** none — ordinary return preparation, not a tracked matter

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Double client portal | How he receives and returns documents | _(n/a — client's own portal login)_ | ⚠️ **His Double organizer for 2025 is a `draft` and was never published**, so there are no organizer responses under his own record. The household completed **one joint organizer**, and it sits on his ex-wife's record (§5) |
| Healthcare.gov / Marketplace | Health coverage → Form 1095-A → Form 8962 | _(n/a — client's own account)_ | The 2024 policy covered the whole household on **one** policy; the 2025 position is the open item in §6 |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** No on this record. His **company** files monthly Florida sales tax — see [`kolo-florida.md`](./kolo-florida.md).

### Payroll
- **Applies?** No. The company's payroll stopped, and his 2025 K-1 reports **no W-2 wages** from it _(the 2025 1120-S working paper, 2026-08-18)_.

### Bookkeeping & monthly close
- **Applies?** No — `Bookkeeping: N/A` on this record.

### Income tax
- **Applies?** **Yes — Form 1040**, and this is the whole engagement on this record.
- **Return type(s) & deadlines:** 1040, calendar year. **2024 was filed jointly with his ex-wife**; **2025 is the first year he files separately.** An **extension is on file for 2025**.
- **Our role:** the firm prepares and files. Assigned staff: **Lilian**.
- **Process notes (→ future SOP):**
  - **2025 tax project:** [`2025 Taxes`, cid 709838 / project 218726](https://app.doublehq.com/tax-return?cid=709838&projectId=218726) — status `inProgress` as at 2026-08-18, **ahead of his ex-wife's**, which is why the shared decisions in §5 have to be settled before his is finalised.
  - 🔑 **His return CANNOT be finished before the company's.** The K-1 and the Form 7203 both come off the 1120-S — see §5 and the working paper linked in §7.

### Licenses & other filings
- **Applies?** No on this record — the company's filings are on its own file.

## 5. Key facts & quirks

<!-- ORDER MATTERS: the client card renders only the FIRST FOUR bullets of this
     section. Keep live, consequential work at the top and let settled or
     historical items sink. See .claude/skills/client-intelligence/SKILL.md. -->

- 🔑 **HIS 1040 RUNS OFF THE COMPANY'S RETURN, AND THE COMPANY'S RETURN IS THE PREREQUISITE.** From **2025 he is the sole shareholder of [Kolo Florida Inc](./kolo-florida.md) at 100%** — the other shareholder left, and his 2024 K-1 carries a ticked `Final K-1`, which is what decided the 2025 shareholder count. So the 2025 K-1 (an ordinary **loss**, plus distributions) and the **Form 7203 that is filed with HIS 1040, not with the 1120-S**, both come off the company's return. **The figures are in the working paper, not here** (§7). ⚠️ **As at 2026-08-18 that working paper was still on an unmerged branch and its session was still open — treat every figure as provisional until it lands on `main`.**
- 🔴 **2025 IS A SEPARATE-RETURN YEAR — and the joint organizer the household completed is wrong in a way that matters more on his return than on hers.** The household filled in **one** organizer while still married; it lives on **his ex-wife's** record and answers **"Married"**. Its **sources-of-income answer is "None of the above", which Lilian confirmed on 2026-08-18 is simply an error** — and on his return it is impossible on its face, because he has the S-corporation K-1. Because that one answer closed the branch for the whole household, **the organizer never asked for a single income document from either of them.** Do not read anything into what it does not contain.
- 🔴 **THE MARKETPLACE POLICY HAS TO BE AGREED WITH HIS EX-WIFE, AND IT BLOCKS FILING.** The 2024 joint return reconciled **Marketplace coverage on Form 8962**; the return is **rejected without it**. Filing separately, if the two of them shared a policy in 2025 then **Part IV requires an allocation percentage they both agree on, and both returns must carry the same figure**. The dependants split changes the tax family size and therefore the calculation, so **the allocation and the dependants decision are one decision**.
- 🟠 **The 2024 carryovers are HIS, all of them.** The 2024 joint return generated a **net operating loss** and a **qualified-business-income loss carryforward**, and both arose from his K-1 and his Uber Schedule C — his ex-wife holds no interest in the company _(Lilian, 2026-08-17)_. **Nothing carries onto her return; everything carries onto his.** Take it as a decision recorded on both returns, not as a default.
- **No Uber in 2025** _(Lilian, 2026-08-18)_. 2024 carried a **Schedule C as an Uber driver** — reported gross with **no expenses claimed at all**, not even vehicle or telephone. ⚠️ If that activity is ever revived, the zero-expense treatment is the thing to question first.
- **The dependants split is undecided and deliberately so.** Three children, all the couple's own, all under 17 at the end of 2025, all claimed on the **2024 joint** return. Who claims whom in 2025 is being analysed separately _(Lilian, 2026-08-17)_. ⓘ **The asymmetry that decides it:** the refundable credits require **earned income**, and on the 2024 return the only earned income identified by name was his — so on the current picture a child is worth materially more on his return than on hers, whose value is the Form 8962 family size.
- **He works by email, in Russian, and he answers.** The firm's correspondence with him runs through his own address and he replies briefly and quickly; he is also the contact for the company's sales tax, annual report and permits. **He does not use the Double portal for this.**
- **He is the shareholder of record on the 2024 Form 7203**, which is what settles that the company's basis history is his and not the household's.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- **2026-08-17 (Lilian)** — Created as a by-product of the **pre-return review of his ex-wife**, which established the household facts from the **2024 joint return** and flagged that he had no file of his own. Sources read that day: Double notes/files/properties/tax project for both, Julia's Gmail, Google Drive, Ping, the joint 2025 organizer and the 2024 filed return.
- **2026-08-18 (Lilian)** — File created, and three things settled by Lilian: **no Uber in 2025**; **the organizer's sources-of-income answer is an error**; and the 2025 income is **the company K-1**, from the 1120-S just completed. She also instructed that the **2025 Form 4868 is not to be opened — the information is not in it.**
- **2026-08-18 (Lilian)** — **Searched Julia's Gmail and Google Drive for a 2025 Form 1095-A**, at her request. **Not found in the searches run** — see the Tax-year entry below for exactly what was searched and what turned up instead.

### Tax year 2025 — the review

- **What gates the return.** Two things. **(1)** The **company's 1120-S**, which produces his K-1 and his Form 7203 — being prepared in a separate session. **(2)** The **Form 8962 / Marketplace allocation**, which cannot be settled without his ex-wife.
- **Established from the 2024 filed return** (read 2026-08-17): filed **jointly**; his **Uber Schedule C** with no expenses claimed; his **K-1 from the S corporation**; a **Form 7203 in his name** carrying the stock-basis history; three dependants claimed for the child tax credit; **Marketplace coverage reconciled on Form 8962**; refundable **earned income credit** and **additional child tax credit** claimed, both resting on earned income; a **net operating loss** and a **QBI loss carryforward** generated; **no estimated payments**; **no state return** (Florida). ⓘ **The return does not say whose the single W-2 was** — the firm's own filename in Drive labels it as his.
- **Settled for 2025:** no Uber activity; income is the company K-1; the organizer's nil-income answer is an error; the 2024 carryovers are his; the Form 4868 is not to be opened.
- **Not settled:** the dependants split, and the Marketplace allocation.
- **Questions put to the client:** **none yet.**

### Outstanding items (CI-only — never in the SOP)

- 🔴 **The 2025 Form 1095-A has not been located, and the return cannot be filed without the Form 8962 it feeds.** Searched on 2026-08-18: Julia's Gmail (the term `1095`; both of their email addresses as `from:`/`to:`; and everything mentioning either surname since 2026-01-01), and Google Drive (files titled `1095`, and a folder-by-folder walk of both of their client folders and every subfolder). **What those searches found was a 2024 Form 1095-A and nothing for 2025** — that is a statement about those searches, not proof the document does not exist. ⓘ **The strongest candidate is not named for what it is:** on the joint organizer the household attached `scan_Feb-15-2026_11-50-10.pdf` (2 pages, `TaxDome > … > Client uploaded documents`) to the **1095-A question**, dated in the window these forms arrive. **It is a scan with no text layer, so the redactor cannot read it and its identity is unconfirmed.** Confirm it before asking the client for a document they may already have sent.
- 🔴 **The dependants split with his ex-wife** — decided jointly with the Form 8962 allocation. Deferred by Lilian on 2026-08-17.
- 🔴 **The Marketplace allocation percentage**, which both returns must carry identically.
- 🟠 **The company's 1120-S must land before his return is finalised** — the K-1 and Form 7203 figures are provisional until that working paper is merged.
- Whether he had any **W-2** in 2025 from any source. The company reports none, and its payroll had stopped.
- ⛔ **The 2025 Form 4868 is NOT to be opened** — Lilian, 2026-08-18: the information is not in it. Recorded so no future session spends time on it.

### Information still needed

- [ ] The **2025 Form 1095-A**, or confirmation that the scan named above is it
- [ ] The **Marketplace allocation percentage** agreed between the two of them
- [ ] The **dependants split**
- [ ] His **marital position on 31 December 2025**, and the date it changed
- [ ] Whether he had a **W-2** from any source in 2025
- [ ] His own **bank account** for a refund or payment — the joint organizer carried one household account and each of them now needs their own

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=709838](https://app.doublehq.com/close?cid=709838)
- **Double 2025 tax project:** [cid 709838 / project 218726](https://app.doublehq.com/tax-return?cid=709838&projectId=218726)
- **Double case note:** none — ordinary return preparation, not a tracked matter
- **Google Drive folder (sensitive vault):** [MYKOLA KOZLOVSKYI](https://drive.google.com/drive/folders/1180Tn7k9m9hNdN2mol4xXezcxIbxMSx1)
- **The figures behind his K-1 and Form 7203:** the company's working paper, `projects/tax-returns/kolo-florida-inc/2025-form-1120s.md` — **the only place the firm keeps return figures**, and deliberately not published
- **Related clients:** [`kolo-florida.md`](./kolo-florida.md) (his S corporation — he is its sole shareholder from 2025) · [`liliia-hlebova-kozlovska.md`](./liliia-hlebova-kozlovska.md) (his ex-wife; their 2025 returns share two decisions)
- **Related SOPs:** [`form-1120s-preparation.md`](../../sops/form-1120s-preparation.md) — the procedure behind his company's return
