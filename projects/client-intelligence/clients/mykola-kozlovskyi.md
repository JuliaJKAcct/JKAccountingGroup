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
| Double client portal | How he receives and returns documents | _(n/a — client's own portal login)_ | ⚠️ **His Double organizer for 2025 is a `draft` and was never published**, so there are no organizer responses under his own record. The household completed **one joint organizer of the legacy TaxDome generation** — a completed **PDF in the file library**, not a Double organizer entity (`list_organizers` returns none for her either) — and it sits on his ex-wife's record (§5) |
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

- 🔑 **HIS 1040 RUNS OFF THE COMPANY'S RETURN, AND THAT RETURN IS THE PREREQUISITE — a derivation, not a rule anyone stated.** For **2025 he is treated as the sole shareholder of [Kolo Florida Inc](./kolo-florida.md) at 100%**, so the 2025 K-1 (an ordinary **loss**, plus distributions) and the **Form 7203 filed with HIS 1040, not with the 1120-S**, both come off the company's return — which is why his cannot be finalised first. **The figures are in the working paper** (§7), **on `main`**; a session was still refining that company file on 2026-08-18, so re-read it rather than trusting a figure quoted from memory.
  ⚠️ **The 100% is a RULING BY LILIAN AGAINST THE PAPERS, not a plain fact, and it must be carried as one.** The other shareholder's 2024 K-1 shows **50 shares at year end and a full 50% allocation** *alongside* a ticked `Final K-1`. **Lilian ruled on 2026-08-17 that the `Final K-1` box governs** and he is out for 2025 — one K-1, box I = 1. The alternative reading (still a shareholder) is recorded in the working paper's decisions table. **If that ruling ever moves, this whole bullet moves with it.**
- 🔴 **2025 IS A SEPARATE-RETURN YEAR — and the joint organizer the household completed is wrong in a way that matters more on his return than on hers.** The household filled in **one** organizer while still married; it lives on **his ex-wife's** record and answers **"Married"**. Its **sources-of-income answer is "None of the above", which Lilian confirmed on 2026-08-18 is simply an error** — and on his return it is impossible on its face, because he has the S-corporation K-1. Because that one answer closed the branch for the whole household, **the organizer never asked for a single income document from either of them.** Do not read anything into what it does not contain.
- 🔴 **THE MARKETPLACE POLICY HAS TO BE AGREED WITH HIS EX-WIFE, AND IT BLOCKS FILING.** The 2024 joint return reconciled **Marketplace coverage on Form 8962**; the return is **rejected without it**. Filing separately, **Part IV requires an allocation percentage, every return sharing the policy must carry the same figures, and the percentages must total 100%** — and here the policy is shared by **three** returns, his, his ex-wife's and their adult daughter's. ⓘ **The rules are pairwise**: with his ex-wife it is the *divorced-during-the-year* situation, so the split is **by agreement**; with the adult daughter it is a different situation with its own formula. 🔑 **In money it is very nearly neutral**, because everyone's required contribution works out at zero — so this is a **consistency** question, not a money question. ✅ **The 2025 Form 1095-A arrived on 2026-08-18 and is now filed in Double.** It covers **the whole household including all three minor children** — see §6.
- 🔴 **HE HAS NO EARNED INCOME IN 2025 — and SHE DOES, which is what now decides who claims the children.** The company paid **no W-2 wages** and there was **no Uber**; an S-corporation ordinary **loss** is not earned income and neither are distributions. **The earned income credit and the additional child tax credit both require it**, so on his return they are **zero** — while [his ex-wife's consulting income](./liliia-hlebova-kozlovska.md) reaches both. 🔑 **So the two daughters who live with him are worth nothing on his return and real money on hers**, and the way to move that value is a **Form 8332**, which shifts the child tax credit **without** shifting head of household. ⚠️ **A W-2 from another employer is still unconfirmed for him.** ⓘ **The net premium tax credit is a separate matter** — it is refundable and turns on **filing status**, not earned income.
- 🟠 **The 2024 carryovers are HIS, all of them.** The 2024 joint return generated a **net operating loss** and a **qualified-business-income loss carryforward**, and both arose from his K-1 and his Uber Schedule C — his ex-wife holds no interest in the company _(Lilian, 2026-08-17)_. **Nothing carries onto her return; everything carries onto his.** Take it as a decision recorded on both returns, not as a default.
- 📅 **2026 WILL BE THE COMPANY'S FINAL RETURN, and the liquidation lands on HIS 1040.** His 2025 K-1 is deliberately **not** marked `Final`; the company closed in 2026. **Gain or loss on liquidation is computed from his accumulated stock basis**, which is why the Form 7203 ending figure for 2025 is not just this year's paperwork — it is the opening number for the calculation that closes the whole investment. _(The company's 2025 working paper, §7, as at 2026-08-18.)_
- **No Uber in 2025** _(Lilian, 2026-08-18)_. 2024 carried a **Schedule C as an Uber driver** — reported gross with **no expenses claimed at all**, not even vehicle or telephone. ⚠️ If that activity is ever revived, the zero-expense treatment is the thing to question first.
- ✅ **THE DEPENDANTS SPLIT — analysed 2026-08-18, and the recommendation is ONE Form 8332.** Three children, all the couple's own, all under 17 at the end of 2025, all claimed on the **2024 joint** return; two live with him, the youngest with her mother. 🔑 **His return is identical whether he claims two children, one, or none** — there is no tax to offset, and the credits that pay cash need earned income he does not have. **So signing costs him nothing, and he keeps head of household even after releasing** _(Pub 501 Table 4 note 2: the parent the children live with keeps it)_. ⚠️ **But the second release is worth nothing** — his ex-wife's Schedule 8812 ceiling is a percentage of *her* earned income, and one released child already reaches it. **One form, not two.** _(The 2026-08-17 framing — "a child is worth more on his return" — was written before her income was known and is reversed.)_
- **He works by email, in Russian, and he answers.** The firm's correspondence with him runs through his own address and he replies briefly and quickly; he is also the contact for the company's sales tax, annual report and permits. **He does not use the Double portal for this.**
- **He is the shareholder of record on the 2024 Form 7203**, which is what settles that the company's basis history is his and not the household's.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- **2026-08-17** — The **pre-return review of his ex-wife** established the household facts from the **2024 joint return** and flagged that he had no file of his own. Sources read that day: Double notes/files/properties/tax project for both, Julia's Gmail, Google Drive, Ping, the joint 2025 organizer and the 2024 filed return.
- **2026-08-18** — **File created**, under `CLAUDE.md`'s standing rule that a client worked on in a session gets a Client Intelligence file. ⓘ He does **not** meet the Double-based coverage test (`platform: none`, no bookkeeping cadence), so the file is not required by that test — it exists because the work happened. _(An earlier note left this "for Lilian to decide"; she was never asked, and the standing rule already settles it.)_
- **2026-08-18 (Lilian)** — Four rulings: **no Uber in 2025**; **the joint organizer's sources-of-income answer is an error**; his 2025 income is **the company K-1** from the 1120-S just completed; and the **2025 Form 4868 is not to be opened — the information is not in it.**
- **2026-08-18** — **Searched Double, Google Drive and Julia's Gmail for a 2025 Form 1095-A**, at Lilian's request. Not found; the candidate attachment was opened and is a member ID card. Details in the Outstanding item.
  ⓘ **How that card was identified, because it matters for the next document like it:** the file is a **scan with no text layer**, so [`redact-doc`](../../../tools/redact-doc/) correctly refuses it. Lilian instructed the session to open it anyway, and it was read by rasterising the pages and **looking at them** — a route with **no redaction whatever**. It answered the question in one step; it also means nothing on those pages was masked. See the open item below.

- **2026-08-18 (Lilian, later the same day)** — **His return became computable, and one of the session's own statements was corrected.**
  - ✅ **Head of household holds for him.** He was **unmarried at 31 December 2025**, the two middle daughters lived with him all year, and **he paid his housing costs from his savings** — which is precisely what Pub 501 Worksheet 1 asks (*what you paid*; the source of the money is irrelevant). That closes the one head-of-household test the firm had **no** evidence for.
  - 🔴 **CORRECTED — the youngest daughter IS on the Marketplace policy.** The session had reported the policy as covering five people and her as not among them. **Form 1095-A Part II holds only five names; a sixth goes on a continuation page.** The session read that page, counted, and concluded — against the redactor's own printed warning that an absence in a partly-extracted document is not evidence. **Lilian caught it with the paper form in front of her.** **No figure changed.** ⓘ It also closes the "what coverage did she have" question: she was covered all year.
  - ✅ **The dependants analysis was run** at Lilian's request, on the real facts and on a hypothetical she posed to understand the mechanics. **The finding: residence and the claim are two different levers.** The earned income credit follows residence and cannot be released; a Form 8332 moves the child tax credit alone; and **one release exhausts the benefit.**
  - ⓘ **A correction to how the firm asked about the adult daughter.** Her already-filed return is not the firm's business — **one number is needed from her, the allocation percentage she claimed.**

### Tax year 2025 — the review

- **What gates the return.** Two things. **(1)** The **company's 1120-S**, which produces his K-1 and his Form 7203 — being prepared in a separate session. **(2)** The **Form 8962 / Marketplace allocation**, which cannot be settled without his ex-wife.
- **Established from the 2024 filed return** (read 2026-08-17): filed **jointly**; his **Uber Schedule C** with no expenses claimed; his **K-1 from the S corporation**; a **Form 7203 in his name** carrying the stock-basis history; three dependants claimed for the child tax credit; **Marketplace coverage reconciled on Form 8962**; refundable **earned income credit** and **additional child tax credit** claimed, both resting on earned income; a **net operating loss** and a **QBI loss carryforward** generated; **no estimated payments**; **no state return** (Florida). ⓘ **The return does not say whose the single W-2 was** — the firm's own filename in Drive labels it as his.
- **Settled for 2025:** no Uber activity; income is the company K-1; the organizer's nil-income answer is an error; the 2024 carryovers are his; the Form 4868 is not to be opened.
- **Not settled:** the dependants split, and the Marketplace allocation.
- **Questions put to the client:** **none yet.**

### Outstanding items (CI-only — never in the SOP)

- 🟠 **THE FORM 8962 ALLOCATION PERCENTAGE — one Marketplace policy, THREE separate returns.** The 2025 Form 1095-A is in hand and **filed in Double**: it is in his name and covers **six people** — both parents, all three minor daughters, and **the adult eldest daughter, who has already filed her own return**. The percentages must total **100%** across the three returns and every return must carry the same figures. **What the firm needs is one number from the adult daughter: the percentage her filed return claimed.** A split following who was enrolled, by tax family, was proposed on 2026-08-18. ⚠️ **One thing on the form still wants an answer:** the second-lowest-cost-plan figure **jumps in September**, which is the signature of a household or address change reported to the Marketplace — **confirm what was reported and when**, because the form's own cover letter says an unreported change can make that column wrong.
- 🟠 **Whether he signs ONE Form 8332.** It costs him nothing and his head-of-household status is unaffected. **A second one is worth nothing.**
- ✅ ~~Head of household.~~ **CONFIRMED for both parents, 2026-08-18** _(Lilian)_: the two middle daughters lived with him all year, the youngest with her mother, and the eldest is an adult who filed her own return — so **each parent has their own qualifying child**, which is what the rule requires; both were unmarried at year end; and **he paid his home from his savings**. ⓘ **The reasoning is kept in his working paper** because it is the reusable part: the same child cannot give both parents HOH, two people cannot each pay more than half the cost of the *same* home, and "considered unmarried" for HOH is **not** the same test the earned income credit uses. 🔑 **And the stake was never the standard deduction — filing status is the PREMIUM-TAX-CREDIT gate.** Had the marriage not ended by 31 December, married filing separately could not have taken the credit at all. **His HOH is worth nothing in 2025** (no income to shelter) — **but it will matter in 2026**, the company's final year.
- Whether he had any **W-2** in 2025 from any source. The company reports none, and its payroll had stopped.
- 🟠 **WHO the company's 2025 `Contract Labor` payee was** — if it is his ex-wife, it is *additional* self-employment receipts of hers. The 1099 question is closed; the identity question is not.
- 🟠 **Material participation on the K-1 loss, recorded rather than inherited.** Basis is only the first of three gates; §469 is the third, and 2024's nonpassive treatment is the prior preparer's position, not the firm's.
- 🟠 **The company's 1120-S must land before his return is finalised** — the K-1 and Form 7203 figures are provisional until that working paper is merged.
- ⚖️ **For Lilian to rule: may these pages name the marital circumstance at all?** The same open question carried on [his ex-wife's file](./liliia-hlebova-kozlovska.md). [`double-mcp`](../../../.claude/skills/double-mcp/) §2.2 lists a divorce and "living apart from a spouse" among the facts she has **not** ruled on for files that publish to the Knowledge Hub; its standing instruction is to write the *consequence* and ask. It is now on **two** published pages that also link the two people to each other, which raises the stakes rather than lowering them. Kept because §2.2 names **the filing status** among the tax facts a client file may carry, and here the filing status is the fact. ⓘ **The precise date the marriage ended is deliberately NOT written on either page** — it lives in the working papers, which are not published.
- 🔧 **A scan cannot be read safely today, and it came up twice in one session.** `redact-doc` reads PDFs with a text layer only; a photograph or a scan has to be looked at directly, which bypasses every mask. **An OCR route feeding the existing redaction patterns has been proposed to Lilian**, and on 2026-08-18 she ruled: *"por ahora deja todo como está"* — **leave it as it is for now; she will decide later.**
- ⛔ **The 2025 Form 4868 is NOT to be opened** — Lilian, 2026-08-18: the information is not in it. Recorded so no future session spends time on it.

### Information still needed

- [ ] The **allocation percentage** the adult daughter's filed return claimed
- [ ] Whether he will sign **one Form 8332**
- [ ] Whether he had a **W-2** from any source in 2025
- [ ] What was reported to the Marketplace in September 2025, and when
- [ ] Who the company's 2025 `Contract Labor` payee was
- [ ] Whether **material participation** on the S-corporation loss is established in writing
- [ ] What the 2025 **digital-asset transaction** on the joint organizer was, and whose it is
- [ ] His own **bank account** for a refund or payment — the joint organizer carried one household account and each of them now needs their own
- [x] ~~The 2025 Form 1095-A~~ — in hand and filed in Double
- [x] ~~His marital position on 31 December 2025~~ — **unmarried**; head of household
- [x] ~~The dependants split~~ — residence settled; the claim is one Form 8332, at the parents' choice

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=709838](https://app.doublehq.com/close?cid=709838)
- **Double 2025 tax project:** [cid 709838 / project 218726](https://app.doublehq.com/tax-return?cid=709838&projectId=218726)
- **Double case note:** none — ordinary return preparation, not a tracked matter
- **Google Drive folder (sensitive vault):** [MYKOLA KOZLOVSKYI](https://drive.google.com/drive/folders/1180Tn7k9m9hNdN2mol4xXezcxIbxMSx1)
- **His 2025 return working paper — where every figure lives:** `projects/tax-returns/mykola-kozlovskyi/2025-form-1040.md`
- **The company's working paper, behind his K-1 and Form 7203:** `projects/tax-returns/kolo-florida-inc/2025-form-1120s.md`
  ⓘ **Both are written as paths, not links, on purpose** — this page is published to the Knowledge Hub and a link into an unpublished folder resolves to nothing there
- **Related clients:** [`kolo-florida.md`](./kolo-florida.md) (his S corporation — he is its sole shareholder from 2025) · [`liliia-hlebova-kozlovska.md`](./liliia-hlebova-kozlovska.md) (his ex-wife; their 2025 returns share two decisions)
- **Related SOPs:** [`form-1120s-preparation.md`](../../sops/form-1120s-preparation.md) — the procedure behind his company's return
