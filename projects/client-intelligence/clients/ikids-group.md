# iKids Group LLC

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-08-11

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

- **Business name:** iKids Group LLC
- **Entity type:** LLC — **partnership** (multi-member; files Form **1065**) _(Double)_
- **Home state:** **Florida** (Fort Lauderdale) _(Gmail — high confidence)_
- **Industry / what they do:** **Children's indoor play park / family-entertainment venue** ("iKidsPark"), being built out at a commercial site in **Fort Lauderdale, FL**. **Pre-operational** (construction / build-out phase; not yet generating revenue). _(Gmail)_
- **Primary language:** **Russian / Ukrainian** (owners are Ukrainian; correspondence in RU/UA, tax docs bilingual). _(Gmail)_
- **Our engagement (services we provide):** Bookkeeping (**monthly**); **income tax (Form 1065 partnership → K-1s)**; **1099 preparation**; annual-report filing. Sales tax N/A; payroll N/A (pre-operational). The firm also does **hands-on AP / bill-pay** (pays vendors from the client's account). **Assigned bookkeeper: Lilian.** _(Double + Gmail, 2026-07-20)_
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** QuickBooks Online (via Double)

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details.

| Role | Where to find them |
|---|---|
| **Manager** — the LLC is manager-managed with a **single** Manager, who is also a member | Double client (portal contact) |
| **Members / partners** — **three**; the Manager holds 33.4%, the other two 33.3% each (see §5) | Double client; Operating Agreement in Drive → `4-Corporate` |
| **CFO** — group-level finance lead; **not** a member and **not** the Manager. He is the one who supplied the corporate documents at onboarding and attended the 2025 Zoom calls | Double client (contact, **no portal access**) |

- **Double client:** [app.doublehq.com/close?cid=706689](https://app.doublehq.com/close?cid=706689)
- **Portal-contact coverage:** two of the three members plus the CFO are registered as Double
  contacts; the **third member is not** (no email address on file anywhere — see §6). Personal
  names, emails, and phone numbers live in Double, never here.

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| QuickBooks Online (via Double) | Bookkeeping ledger | _(pending — Drive link)_ | Managed through Double |
| **The client's AP mailbox — Gmail** | Where the client's **vendor bills and payment confirmations arrive** (water, insurance, permits, the environmental report…). **The firm has access to it** and works it **every month** — see §4 | _(password pending — client's Drive vault / Double)_ | `ap.ikidsllc@gmail.com` — a **company AP mailbox**, not a person's inbox, and **firm-controlled** (Julia is the account-recovery contact) _(Gmail, 2026-07-23)_. It is the **only** place several of these bills exist: nothing is forwarded to us and the client sends nothing |
| Business bank accounts (2 — different banks) | Operating cash | [Drive folder](https://drive.google.com/drive/folders/1_RBDmfPaRsV0mhvzZl-XNjRG8zqgjQfn) | Firm has signer/payment access to pay vendors from the client's account _(Google Drive, 2026-08-01)_ |
| FPL | Electric utility for the build-out site | [Drive folder](https://drive.google.com/drive/folders/1_RBDmfPaRsV0mhvzZl-XNjRG8zqgjQfn) | Firm-managed account _(Google Drive, 2026-08-01)_ |
| City of Fort Lauderdale — utility billing | Water bill for the site | [Drive folder](https://drive.google.com/drive/folders/1_RBDmfPaRsV0mhvzZl-XNjRG8zqgjQfn) | Firm-managed account _(Google Drive, 2026-08-01)_ |
| Broward County ePermits | Building-permit applications for the park build-out | [Drive folder](https://drive.google.com/drive/folders/1_RBDmfPaRsV0mhvzZl-XNjRG8zqgjQfn) | Firm-managed account _(Google Drive, 2026-08-01)_ |
| City of Fort Lauderdale "LauderBuild" portal | Permit-fee payment portal | n/a (firm pays via portal) | Firm pays permit fees here as part of hands-on AP _(Gmail, 2026-07-28)_ |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** No — **N/A** _(Double)_

### Payroll
- **Applies?** No — **N/A** _(Double)_

### Bookkeeping & monthly close
- **Applies?** Yes — **monthly** _(Double)_
- **The runbook:** [`../../sops/ikids-group-bookkeeping-review.md`](../../sops/ikids-group-bookkeeping-review.md) — the
  step-by-step monthly procedure. This section stays the *summary*; the runbook holds the detail.
- **The bills do not come from the client — we fetch them from the client's own mailbox.** Vendor
  bills and payment confirmations land in the client's AP mailbox (§3), which the firm has access
  to. **Every month** someone has to open that mailbox, download the month's bills and
  confirmations, and attach each one to its payment transaction in QuickBooks. Nobody forwards
  them; if the month is skipped, the expense sits in the books with no support behind it.
- **The water bill is on autopay — the payment posts by itself, the document does not.** The
  charge appears in the bank feed with no action from us; the bill and the payment confirmation
  still have to be pulled from the mailbox and matched to that transaction. **Never pay it a
  second time** — it is already paid. _(Lilian, 2026-08-11.)_
- **Where the paperwork is kept:** every invoice and receipt for this client is filed in **Julia's
  Google Drive** → the folder named for the client → **`Bookkeeping`** → **one folder per month of
  the year**. The mailbox is where documents arrive; Drive is where they live, and it is where a
  covering bookkeeper looks for them. _(Lilian, 2026-08-11.)_
- This sits **alongside** the hands-on AP work in §5 (the vendors the firm actively *pays* from
  the client's account) — the same mailbox serves both.

### Income tax
- **Applies?** Yes — **Form 1065** (partnership; multi-member LLC → K-1s to partners) _(Double)_
- **Our role:** We prepare income tax _(Double)_; **1099 preparation** included.
- **Nonresident members:** **two of the three** members were run through **1040-NR + K-1** and a
  **W-7 / ITIN application** via an outside CAA in Apr–May 2026. **The third member's US tax status
  is NOT established here** — no W-7 was filed for him, which may mean he already holds an SSN/ITIN
  or is treated as a resident, but nothing on file confirms either. Do not infer residency from the
  Operating Agreement: all three give **Ukrainian street addresses** there, and that is a 2025
  mailing address, not a residency determination. Settle this before the next 1065 / §1446
  withholding call — see §6.

### Licenses & other filings
- **Annual report:** Yes — we handle it _(Double)_

## 5. Key facts & quirks

- **Pre-operational — startup-cost treatment is the central bookkeeping issue:** expenses are **capitalized as startup costs** until the park "begins operations"; pinning the operations-commencement date is a live judgment call tied to the opening. _(Gmail — Julia's bookkeeping instructions)_
- **Heavier than standard bookkeeping — hands-on AP, run out of the client's own mailbox:** the firm **pays vendors** from the client's account (insurance, environmental report, city permits) and sends confirmations. The **water bill is the exception — it is on autopay**, so it needs no payment action at all, only its paperwork. Everything, paid by us or paid automatically, arrives at the **client's AP mailbox** (§3), which the firm works **monthly** to download the bills and attach them to their transactions (§4). Whether any of the *other* recurring vendors are also on autopay is **not established** _(to verify)_.
- **Ownership & signing authority — exactly THREE members, and only ONE of them can bind the company:** the **Manager holds 33.4%** and the other two **33.3%** each (near-thirds, not exact — the odd 0.1% sits with the Manager). The LLC is **manager-managed with a single Manager** (himself a member) who alone has authority to bind it; the other two members have no day-to-day management or voting role. The **CFO is neither a member nor the Manager** — he does not appear in the agreement at all, so treat that title as a **group/functional role**, not a Florida-LLC office, and route anything needing a company-binding signature to the **Manager**. _(Operating Agreement dated 2025-04-18, Drive → `4-Corporate` — supersedes the earlier "likely 3–4 partners" estimate.)_
- **Part of a related group** of LLCs under the same owners — e.g. **Rest Invest Kids LLC** (activated alongside iKids); iKids appears to be the US **operating** LLC. Each owner is individually linked in Double to **their own separate set** of related-entity records — not one shared group _(Double contacts, 2026-07-25 sweep)_.
- **A concrete example of the hands-on AP:** the permit-expediting vendor **East of Collins Expediting** sends outstanding-balance account statements, which go to the AP mailbox for handling; permit fees themselves are paid through the City of Fort Lauderdale's **LauderBuild** portal _(Gmail, Jul 2026 sweeps)_.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
- 2026-07-20 — Profile built from Double's **structured client properties** (Assigned Staff = Lilian; partnership / 1065; monthly bookkeeping).
- 2026-07-20 — **Gmail enrichment sweep:** established the iKidsPark play-park profile, Fort Lauderdale FL, RU/UA language, pre-operational startup-cost treatment, hands-on AP, and the related-entity group. Ping had **no indexed meetings**; facts are from Gmail + Double contacts. Ping + Gmail now swept (see sweep-state).
- 2026-07-25 — Incremental sweep: no Double/Ping activity in window. Gmail surfaced a concrete hands-on-AP vendor example (East of Collins Expediting) and confirmed the AP inbox is firm-controlled. Recurring-expense monitor (2026-07-20) flagged the QuickBooks subscription and city water bill as not-yet-posted — see outstanding items.
- 2026-08-01 — **Incremental sweep** (baseline 2026-07-20, inclusive): Double (`get_client`, `list_client_properties`, `list_notes`, `list_contacts`, `list_activity_log`) shows **no new notes/activity** on the company record. Ping (`resolve_person` on both owners, org-wide + owner-scoped `search_meetings`, `list_client_meetings`) still finds **no indexed meetings** for iKids or either owner. Gmail (`in:inbox`/`in:sent`, `after:2026/07/20`) surfaced the "LauderBuild" permit-payment portal name and a named permit-expediting vendor (East of Collins Expediting) — both folded into §3/§5. Google Drive folder reviewed for non-sensitive system names only (bank accounts, FPL, water utility, Broward ePermits) — no credentials copied here. QuickBooks (Intuit MCP) not applicable — iKids' QBO ledger is reached through Double, not the firm's directly-connected QuickBooks instance. **Owner-with-several-businesses check:** Andrii Matiukha and Oleksii Balasiuk each carry other Double records (Rest Invest Kids LLC, and each owner's individual 1040 profile) — reviewed at the owner level; no new *iKids-specific* facts surfaced there (Rest Invest Kids LLC's own facts, e.g. it files Form 1120, stay out of this file). Also noted: Andrii Matiukha's duplicate individual Double profile (typo variant, id 719479) was **archived 2026-07-31** — matches FOLLOW-UPS #9, owner-context only, not an iKids fact.
- 2026-08-08 — **Weekend sweep (incremental, from 2026-07-20):** Double's **"2025 Taxes" tax project status was changed from In Progress back to Not Started** (activity log, 2026-08-04, by Julia) — worth reconciling against the "1065 extension appears filed" note below. Confirmed each co-owner also has an individual 1040 profile in Double, and found continuing LauderBuild/permit-expediter activity in Gmail (both added to §5). Ping org-wide meeting search returned no relevant/legible content for this client.
- 2026-08-10 — **Targeted people/ownership sweep** (Lilian, looking for a contact she could not find in Zoom). Read the **Operating Agreement** and settled the ownership structure: three members, equal thirds, single Manager (§5). Established that the **CFO is not a member or Manager**. Located the two **2025 Zoom calls** the CFO attended — 2025-06-20 (titled as the referrer's consultation, not iKids) and 2025-07-15 "Ikids Group LLC Setup" — which is why a Zoom search by client name finds nothing; Ping only indexes from ~Jun 2026, so **neither call has a transcript**. Registered the CFO as a Double contact **with no portal access**. Sources: Gmail, Google Calendar, Google Drive, Double. _(Worked by Lilian.)_
- 2026-08-11 — **Where the paperwork is kept, from Lilian:** Julia's Google Drive → the client's
  folder → `Bookkeeping` → one folder per month of the year. Folded into §4 and the runbook, and it
  closes the open question this file raised the same day.
- 2026-08-11 — **How this client's bookkeeping actually runs, from Lilian.** The client's **AP mailbox** (§3) is where the vendor bills and payment confirmations arrive, the firm has access to it, and **every month** we must go in, download the bills, and attach them to their payment transactions. The **water bill is on autopay** — nothing to pay, only its paperwork to collect. Recorded here and turned into the client's first bookkeeping runbook, [`ikids-group-bookkeeping-review.md`](../../sops/ikids-group-bookkeeping-review.md). _(Worked by Lilian.)_

### Outstanding items (CI-only — never in the SOP)
- **Third member's US tax status is unsettled — this one DOES need an answer.** Only two of the three members were put through a W-7/ITIN (§4). Whether the third already holds an SSN/ITIN, or is a US resident, changes his K-1 treatment and any §1446 withholding. Ask Julia or the client before the next 1065.
- **Both nonresident members' ITIN applications** — W-7 packages went out by certified mail in **May 2026** via the outside CAA. Confirm the ITINs were actually issued.
- A **1065 extension** appears filed (Jul 2026); a bookkeeping task showed overdue in June — verify the return status.
- **Pin the "operations begin" date** so startup-cost capitalization stops and normal expensing / depreciation starts.
- ~~Reconcile "landlord water bill" vs. "City of Fort Lauderdale water — auto-paid"~~ — **answered by Lilian 2026-08-11:** there is **one** water bill, it is the **City of Fort Lauderdale** account, and it is **on autopay**. The old "landlord water bill" wording was wrong and has been corrected in §4/§5.
- QuickBooks subscription and city water bill were overdue as of the 2026-07-20 mid-month check — confirm whether they posted late.
- A possible new recurring vendor charge (monthly, since ~May 2026) was flagged by the recurring-expense monitor for review — not yet on the watchlist.
- AP-inbox Google security alert (new sign-in, 2026-07-23) — confirm it was expected.
- **Tax-season readiness — organizer status for the two iKids partners is still unresolved** as of 2026-07-30 (FOLLOW-UPS #10): bookkeeping/Schedule-C-style clients get no company organizer, so the real gate is each **owner's personal organizer**; both owners' organizers still need chasing.
- Recurring **Double task-digest** emails (Aug 3–7, 2026) show a task assigned to the bookkeeper as due/overdue — confirm it's actioned.

### Information still needed
- [x] Exact number of partners — **three**; Manager 33.4%, the other two 33.3% each; manager-managed with a single Manager _(Operating Agreement, 2026-08-10)_
- [x] The third member's email address, so he can be registered in Double — **⏸ PAUSED INDEFINITELY by Lilian (2026-08-10): do NOT chase this**, in the weekend sweep or anywhere else. No email for him exists in Gmail, Drive or Double; every thread runs through Julia or the outside CAA. To reopen: get it from the client or the CFO, then register him in Double as a contact record with **no portal access**, exactly as was done for the CFO. This is the **contact record only** — the third member's **tax status** is a separate question and is still live (§4, §6 outstanding).
- [ ] Fiscal year-end
- [ ] Credentials Drive link; the "operations begin" date once known
- [ ] **Which other recurring vendors are on autopay** — only the water bill is confirmed. The rest
      are believed to be paid by us on request, but nobody has listed them (§5, and the runbook's
      open-decisions log)
- [x] **Where the downloaded bills are filed** — **answered 2026-08-11 (Lilian):** Julia's Drive →
      the client's folder → `Bookkeeping` → a folder per month, **and** attached to the transaction

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=706689](https://app.doublehq.com/close?cid=706689)
- **Google Drive folder (sensitive vault):** [Drive folder](https://drive.google.com/drive/folders/1_RBDmfPaRsV0mhvzZl-XNjRG8zqgjQfn)
  - `4-Corporate` — Articles of Organization, EIN letter, **Operating Agreement** (the authority on
    members, percentages, and the Manager — §5), and the members' immigration documents.
- **Related SOPs:** [`../../sops/ikids-group-bookkeeping-review.md`](../../sops/ikids-group-bookkeeping-review.md)
  — the monthly bookkeeping runbook (the AP-mailbox retrieval, the autopaid water bill, the
  startup-cost rule).
