# Deep Tech Development Group LLC

> **Status:** ⚠️ **BOOKKEEPING PAUSED** — the client is between chapters, not gone (Lilian, 2026-08-11) · **Owner:** Lilian · **Last updated:** 2026-09-03

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

- **Business name:** Deep Tech Development Group LLC
- **Entity type:** LLC — files on the owner's **Schedule C** (single-member / disregarded) _(Double)_. **One company:** the full legal name is **Deep Tech Development Group LLC**. Earlier notes mistakenly split it into two entities ("…LLC" vs "…GROUP LLC") — it is a **single company** _(corrected by Lilian, 2026-07-22)_.
- **Home state:** **Florida** (Broward area) _(Gmail — high confidence for FL operations)_
- **Industry / what they do:** **E-commerce (Shopify)** — operating brand "**Go Robots**" (tech / robotics products), with a physical-delivery component (a commercial cargo van, FL-insured). Reads as Shopify retail + local delivery, not software-only. _(Gmail — medium confidence on product line)_
- **Primary language:** **Russian** (Ukrainian ties). _(Gmail)_
- **Our engagement (services we provide):** Bookkeeping (**monthly**); income tax on the owner's **Schedule C**; **sales tax (quarterly — likely FL DR-15)**; **1099 preparation**; annual-report filing. **Payroll: not in JK's scope** — N/A per Double; the company runs its **own Gusto payroll (biweekly)** (see §5). **Assigned bookkeeper: Lilian.** _(Double + Gmail, 2026-07-20)_
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** QuickBooks Online — **disconnected from Double on 2026-07-21** (the client record's `platform` now reads "none"). ✅ **Explained 2026-08-11: it follows the bookkeeping pause (§4) — do not chase a reconnection**; reconnect when the client resumes. Treat any Double-synced figure as frozen at the disconnection date. _(Double activity log, 2026-07-21; inferred with medium-high confidence)_

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details.

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client (link below) |

- **Double client:** [app.doublehq.com/close?cid=706685](https://app.doublehq.com/close?cid=706685)
- **Double case notes** (two separate matters — one note each):
  - `CASE · Shopify — transferring store ownership to Vitalii Ivanov` — note **503544**
  - `CASE · FDOR — moving the sales-tax and reemployment-tax effective dates` — note **491845**

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| QuickBooks Online (via Double) | Bookkeeping ledger | _(pending — Drive link)_ | Managed through Double — **disconnected 2026-07-21 as part of the bookkeeping pause** (§4). Not a fault: reconnect when the client resumes _(explained by Lilian, 2026-08-11)_ |
| Shopify — store **"Deep Tech Development"**, domain **gorobots.us** (the "Go Robots" brand) | E-commerce sales platform | _(pending)_ | 🔴 **Registered under Julia, not the client — the transfer to the owner is IN PROGRESS and blocked** (§5, and Double case note `503544`). Plan downgraded from **Grow** to **Basic** (both paid monthly) effective **2026-08-02**, and it still bills monthly to Julia's inbox _(Gmail, 2026-07-28 / 2026-08-02; $49.00 CAD on 2026-09-01)_. **Support conversations are NOT readable by email** — they live in the **Shopify Support Inbox**, `help.shopify.com/en/inbox/14006272`. The notification arrives from **`no-reply@shopify.com`** (find it in Gmail with `from:no-reply@shopify.com`) and carries **none** of the content; 🛑 **never reply to that address — Shopify does not monitor it**, answer inside the conversation on the web |
| Sales-tax portal | Filing sales tax (quarterly) | [Client password vault (Google Doc)](https://docs.google.com/document/d/1dR6glVFYIu9k8bs4DPUzCcx1AnMq-d_-HoJWcTmJNug/edit) | _(jurisdiction pending)_ |
| Penn Credit (collection-agency portal) | Paying the FDOT toll debts that are in collection | [Client password vault (Google Doc)](https://docs.google.com/document/d/1dR6glVFYIu9k8bs4DPUzCcx1AnMq-d_-HoJWcTmJNug/edit) | Portal: [account.penncredit.com/myaccount](https://account.penncredit.com/myaccount) · login is **not** user/password — it asks for the **account/ID number + ZIP code** (both in the vault) |

> **Client password vault.** Practically all of this client's logins live in one Google Doc (linked above and in §7). Sensitive values — the Penn Credit account/ID number and ZIP included — stay there, never in this file.

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** Yes — **quarterly** _(Double)_
- **Jurisdiction(s):** Likely **Florida (DR-15)** — FL operations + Shopify sale of tangible goods _(inferred, medium confidence; not seen filed for this entity directly)_.
- **Process notes (→ future SOP):** The firm's internal recurring sales-tax task was moved from **every 3 months on the 1st** to **every 3 months on the 5th** _(Double activity log, 2026-07-20)_.

### Payroll
- **Applies?** Not in JK's scope — **N/A** per Double. The company runs its **own Gusto payroll (biweekly)**; JK does not process it. _(Double + Gmail)_
- **Quirk:** despite Payroll being **N/A** for JK, JK staff (the assigned bookkeeper plus other team members) are routinely copied on Gusto's automated "payroll due / payroll late" reminder emails for this client's biweekly run — worth confirming why JK stays on that notification list _(Gmail, 2026-07-26 to 2026-07-30)_.
- **Update (2026-08-05, Gmail):** a Gusto payroll-fee debit failed, and the owner asked whether the company's Gusto payroll can be **cancelled** — the company currently has **no employees**, and isn't expected to until the owner is back in the US. Decision pending; if Gusto is cancelled, revisit this section and §5.
- ⚠️ **Unsettled — Gusto is still active and running a payroll as of 2026-08-27, six weeks after the
  cancellation question was raised.** Gusto's automated "payroll is late" reminders kept arriving
  through August — 2026-08-09, 08-11, 08-13 (Aug 3–16 pay period) and now **2026-08-27** for the
  **Aug 17–30, 2026 pay period**, addressed to Julia, Lilian, Maria and the owner
  (`willivanoff@gmail.com`) — which reads as an **active, ongoing biweekly payroll run**, not a
  one-off. This sits uneasily beside the 2026-08-05 note that the company "currently has no
  employees." **Both are on record; the cancellation decision from §6 outstanding items does not
  appear to have been acted on**, or the "no employees" framing was about future hiring rather than
  the current run. Confirm with Julia/the owner before assuming either reading. _(Gmail,
  2026-08-09/11/13/27.)_

### Bookkeeping & monthly close
- **Applies?** **Yes — the engagement is monthly** _(Double)_, but ⏸ **PAUSED right now, deliberately, not a lapse.** _(Lilian, 2026-08-11.)_ The owner is
  **applying for a US visa**; the business is on hold until that is settled. **When he has what he needs,
  he restarts the business and we restart bookkeeping.** Nominally the engagement is monthly _(Double)_,
  and that is what it returns to.
- **What the firm is doing meanwhile:** **administrative work only** — no monthly close.
- ✅ **This explains the QuickBooks disconnection.** QBO was disconnected from Double on **2026-07-21**
  and nobody had recorded why; two sweeps carried it as an open question. It is a **consequence of the
  pause**, not a broken integration — so **do not chase a reconnection** while the client is on hold,
  and expect to reconnect it when bookkeeping resumes. _(Double activity log, 2026-07-21; explained by
  Lilian, 2026-08-11.)_

### Income tax
- **Applies?** Yes — the owner's **Schedule C (Form 1040)** _(Double)_
- **Our role:** We prepare income tax _(Double)_; **1099 preparation** included.

### Licenses & other filings
- **Annual report:** Yes — we handle it _(Double)_

### Toll debts in collection (FDOT → Penn Credit)
- **Applies?** Yes — **ongoing** _(client-provided, 2026-07-22)_
- **What it is:** Unpaid **Florida Department of Transportation (FDOT)** tolls (from the client's vehicle) were referred to the collection agency **Penn Credit**. The client keeps receiving **collection letters** for the outstanding amounts.
- **Our role:** Log in to the Penn Credit portal and **pay the balances** to clear the debt so the letters stop.
- **Portal & login:** [account.penncredit.com/myaccount](https://account.penncredit.com/myaccount) — login is **not** username/password; it asks for the **account/ID number + ZIP code**, both stored in the client password vault (see §3 / §7).
- **Recurring quirk (watch out):** Clearing the balance is **not one-and-done** — after the **last payment brought it to zero, a new amount appeared**. New toll items keep surfacing, so **each time a new collection letter arrives, log back in and pay it down** until the portal reads zero.
- **Process notes (→ future SOP):** _(pending — capture the full pay-down steps as they recur so this becomes a runbook)_

## 5. Key facts & quirks

> ⚠️ **Order these by consequence — only the first FOUR are published.** Both the Knowledge
> Hub and the client-intelligence review dashboard render **only the first four top-level
> bullets** of this section (and of §6's "Outstanding items"); a fifth never appears on
> either. So put first whatever would cause the worst mistake if someone didn't know it —
> **not** the oldest, and **not** whatever was added last. **Adding a bullet is a decision
> about where it goes**; appending to the end means the team never sees it. The cap lives in
> `clientCard()` — see the [render README's parsing contract](../../../.claude/skills/client-intelligence/render/README.md).

- 🔴 **THE SHOPIFY STORE IS REGISTERED UNDER JULIA, NOT THE CLIENT — AND MOVING IT TO THE OWNER IS BLOCKED.** The store **Deep Tech Development** (**gorobots.us**) has Julia as its store owner and `julia@jkaccountinggroup.com` as its email of record; the real owner is **Vitalii Ivanov**. Adding him as a staff user **errors**, and *Transfer ownership* refuses and sends us to support. Shopify's diagnosis (2026-08-25) is that the store's **Shopify Balance account is active and is the blocker, even at $0**, and it has to be **closed permanently** first — a closure Shopify **requested on 2026-08-25, with no ETA and no ticket number**. 🔴 **CORRECTED 2026-09-03 — the case was never waiting on Shopify. Shopify has been waiting on US since 2026-08-27.** Its reply that day (advisor "Alex L") confirms the Balance account shows **$0** and that they can proceed, and then asks for Julia's **express permission in writing, inside the support conversation**, before closing it — *"We'll wait for your confirmation before taking the next step."* **That message sat unread for seven days**, because ⚠️ **Shopify's substantive replies do NOT arrive by email**: the notification is a bare *"you have a new message"* and the text lives only in the **Shopify Support Inbox** (`help.shopify.com/en/inbox/14006272`). So no closure confirmation was ever pending, and none could have arrived. **Ticket `#69851505`.** **Full trail, options and next actions: Double note `503544`.** _(Shopify support chat transcript, 2026-08-25, via Lilian; Gmail sweep 2026-09-03.)_
- ⏸ **The client is paused while the owner pursues a US visa** — the business restarts when he has
  what he needs, and bookkeeping restarts with it. Until then the firm does **administrative work
  only**, and the QuickBooks disconnection of 2026-07-21 is part of the pause rather than a fault to
  fix. Read every recurring obligation below in that light. _(Lilian, 2026-08-11.)_
- ⚠️ **The FDOR sends no acknowledgement that a change request was received or queued** — it writes only when the change is done. Lilian asked explicitly and they said they do not do it. **So the only way to know where a request stands is to telephone and ask**, and a client letter that contradicts a pending request is not evidence the request failed.
- **One company — "Deep Tech Development Group LLC" (not two).** This single company runs **Gusto payroll (biweekly)**, holds the **Shopify store** and the "Go Robots" AP mailbox, and carries the **vehicle policy**; it files on **Schedule C** (single-member) per Double. Automated emails (Gusto, QuickBooks, Shopify, insurance) render the name inconsistently (with/without "GROUP"), which earlier looked like two separate entities — **it is not**. _(Corrected by Lilian, 2026-07-22.)_
- ✅ **THE FDOR EFFECTIVE-DATE CHANGES BOTH WENT THROUGH — sales tax to 1 October 2025, reemployment tax to 1 July 2025.** ⚠️ **This CORRECTS what this file said on 2026-08-13.** Lilian's phone note stopped at "still being processed"; the **migrated TaxDome note on the same matter carries a later line — "THIS IS DONE. WE HAVE A LETTER IN DEEP TECH'S FOLDER"** — so the reemployment-tax change completed and the FDOR's confirmation letter is filed in the client's Drive folder. **The 2025-10-22 bill for Q2 2025 reemployment tax should therefore not stand**; nothing records it being withdrawn, and that is the one piece left to confirm. _(TaxDome notes, migrated — filed under Deep Tech.)_
- **External Ukrainian finance team:** the owner uses an outside Ukrainian bookkeeping / tax group that shares documents and handles the owner's **personal Ukrainian tax declaration**; JK coordinates hand-offs via Google Drive.
- **Ownership (corrected by Lilian, 2026-07-20):** the owner is a **different individual** from Never Give Up KK's owner — Never Give Up's owner was a **former employee** of Deep Tech Development Group, not an owner.
- **Client password vault (one Google Doc).** Practically all of this client's logins are kept in a single Google Doc (linked in §7) — including the Penn Credit account/ID number + ZIP used to log in and pay the FDOT toll debts. It's the fast path when a task needs a credential; sensitive values stay there, never in this file.
- **FDOT tolls are a live, recurring collections item (Penn Credit).** See §4. Paying off one balance has **not** stopped new toll amounts from reappearing at Penn Credit, so treat every new letter as a fresh pay-down rather than assuming the debt is closed.
- **Cancelling two storage units at Safe Guard Self Storage** — requested 2026-07-30, awaiting email confirmation (see §6). Once confirmed, the recurring charge(s) should stop — don't flag the eventual absence of this charge as a missed/abnormal recurring payment.
- **QuickBooks Online was disconnected from Double on 2026-07-21** — ✅ **explained 2026-08-11: it is part of the pause above.** Double-synced figures are frozen at that date; there is nothing to fix and nothing to chase. _(Double activity log, 2026-07-21)_
- **Owner runs other Double-tracked entities.** Per Double's portal-contact records, this client's owner is also linked to **1701 N M ST LLC** (files a 1065) and **Universal Trading Technology LLC**, plus his own individual (1040) Double profile — all assigned to Lilian like this client. Company-specific facts about those entities belong in their own future CI files, not here; noted here only to record the owner-group shape. _(Double contacts + client records, 2026-08-01)_
- **External Ukrainian finance-team contact's access, more precisely:** that contact (see above) has portal access to this client **and** to the owner's other two companies (1701 N M ST LLC, Universal Trading Technology LLC) but **not** to the owner's individual profile — consistent with a bookkeeping/company-side role rather than a personal-tax one. _(Double contacts, 2026-08-01)_
- **JK forwards vendor invoices for robot inventory purchases** directly to the owner as part of the bookkeeping relationship (seen for a batch of robot-purchase invoices). _(Gmail, 2026-07-28)_
- **QuickBooks Online was disconnected 2026-07-21** — part of the pause (§4), not an integration fault.
- **Related-entity group (Double contacts, 2026-08-08):** this company's two portal contacts are also both linked to two other Double clients — **1701 N M ST LLC** and **Universal Trading Technology LLC** — indicating a related-entity group under the same ownership circle. Neither is yet profiled as a separate CI file.
- **Gusto payroll may be paused/cancelled** — see §4 Payroll. The company reports it currently has no employees.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
- 2026-07-20 — Profile built from Double's **structured client properties** (Assigned Staff = Lilian; Schedule C; monthly bookkeeping; quarterly sales tax).
- 2026-07-20 — **Gmail enrichment sweep:** established the Shopify e-commerce ("Go Robots") profile, FL (Broward), RU language, and an apparent "sister-entity (GROUP LLC)" ambiguity **(later corrected 2026-07-22 — it is one company, see below)**. Ping had **no indexed meetings**; facts from Gmail + Double contacts. Ping + Gmail now swept (see sweep-state).
- 2026-07-22 — **Client-provided (Lilian):** recorded the **FDOT tolls → Penn Credit collection** process — the portal ([account.penncredit.com/myaccount](https://account.penncredit.com/myaccount)), the ID-number+ZIP login method, and the client password-vault Google Doc. Captured the recurring pattern (a new balance appeared after the last payment cleared).
- 2026-07-22 — **Correction (Lilian):** this client is **one company — "Deep Tech Development Group LLC"**, not two. Removed the earlier "sister GROUP LLC" two-entity split; re-attributed the Gusto payroll, Shopify store, and vehicle/tolls to the single company; corrected the display name across the CI indexes and the Hub.
- 2026-07-25 — Incremental sweep: Double activity log shows the recurring Sales Tax task's cadence changed from the 1st to the 5th of the month (2026-07-20), and a "client disconnected" event logged 2026-07-21 (ambiguous — could be the accounting-platform connection or a Double-portal disconnect; needs a manual check). No new Penn Credit / FDOT toll activity found this window.
- 2026-07-30 — Update (Lilian): requested cancellation of the **two storage units** the client holds with **Safe Guard Self Storage**. **Awaiting confirmation by email.**
- 2026-08-01 — **Incremental sweep (Julia), 2026-07-20 → 2026-08-01:** Double (client record, properties, notes, contacts, activity log) + Gmail + Ping + Drive folder link checked. Found **QuickBooks Online was disconnected from Double on 2026-07-21** (flagged as an open item). Confirmed the owner-group shape via Double portal contacts — this owner is also linked to **1701 N M ST LLC**, **Universal Trading Technology LLC**, and his own individual (1040) Double profile (no CI files yet for those). Captured a **Shopify plan downgrade** (Grow → Basic, effective 2026-08-02) and a **sales-tax task recurrence-date change** (1st → 5th, 2026-07-20). No update found yet on the Safe Guard Self Storage cancellation confirmation or any new Penn Credit letter. Ping had no legible Deep-Tech-specific meeting content in this window (org-wide semantic search returned only unrelated/garbled matches).
- 2026-08-08 — **Weekend sweep (incremental, from 2026-07-20):** Double activity log shows the client was **disconnected** (QBO) on 2026-07-21 — reason/reconnection status unknown, added to §3/§5. Confirmed via Double contacts a **related-entity group** (1701 N M ST LLC, Universal Trading Technology LLC) sharing this company's two portal contacts — added to §5. Gmail (2026-08-05) surfaced a failed Gusto payroll-fee debit and the owner asking to **cancel Gusto payroll** since the company has no current employees — added to §4/§5, decision pending. No new Penn Credit / FDOT toll letters found, and no Safe Guard Self Storage cancellation confirmation yet. Ping org-wide meeting search returned no relevant/legible content for this client.

- 2026-08-11 — **Lilian: bookkeeping is PAUSED, and the QuickBooks disconnection is explained by it.**
  The owner is applying for a US visa and the business is on hold until it comes through; when he is
  ready he restarts the business and we restart bookkeeping. Meanwhile the firm does administrative
  work only. This closes the open question two sweeps had been carrying about why QBO was disconnected
  from Double on 2026-07-21 — it was the pause, not a broken sync. _(Worked by Lilian.)_
- 2026-08-13 — **The FDOR effective-date matter written up.** _(Lilian's iCloud notes, migrated — folder "Deep Tech"; notes dated 2025-10-13 and 2025-10-30.)_ Full trail in the **Double case note** (§7). _(Worked by Lilian.)_
  - **2025-10-13 — FDOR call.** ① The **sales-tax** effective date was updated to **1 October** and the FDOR sent a confirmation letter. ② A request went in to move the **reemployment-tax** effective date to **1 July**; the firm was told to wait a few days and call if no confirmation letter arrived.
  - **2025-10-22 — FDOR letter to the client**, demanding **reemployment tax for Q2 2025** — a quarter the requested effective date should exclude. Julia passed it on.
  - **2025-10-30 — FDOR call.** The reemployment-tax request was **still being processed** by the Department of Reemployment Tax, with no timescale beyond "it depends on the queue". Lilian asked whether they acknowledge a request in the meantime — **they said they do not**, and write only once the change is done. The **sales-tax** change was confirmed complete.
- ⓘ **SUPERSEDED 2026-08-13.** For one day this file said *"nothing after 2025-10-30 is recorded anywhere the firm can reach"* and carried the matter as open with a possibly-live wrong bill. That was true of the phone note alone; the migrated TaxDome note carries the closing line that resolves it (below).
- 2026-08-13 — **TaxDome notes read (Phase 2).** The migrated note on the FDOR matter **closes what the phone note left open**: both effective-date changes went through and the FDOR's confirmation letter is in the client's Drive folder. ⚠️ **The note says only "this is done" — it does not restate the granted date, so "1 July 2025" is the date REQUESTED on 2025-10-13. The letter in Drive is what confirms what was actually granted, and it has not been read.**. §5 and Double note **491845** corrected the same day. _(TaxDome notes, migrated — filed under Deep Tech.)_ _(Worked by Lilian.)_
- 2026-08-15 — **Weekend sweep (incremental, from 2026-08-08):** Double (`list_client_properties`,
  `list_notes` — the FDOR case note 491845 unchanged since 2026-08-13, `list_contacts`,
  `list_activity_log` from 2026-08-08 — empty) shows no case-note update; the "confirm the FDOR
  withdrew its Q2 2025 demand" loose end is still open. Gmail (`in:inbox`/`in:sent`, "Go Robots" /
  "Deep Tech", after:2026/08/08) surfaced recurring Gusto "payroll is late" reminders for an active
  **Aug 3–16, 2026 pay period** — added to §4 as an unsettled contradiction against the 2026-08-05
  "no employees" note — plus **USPS mail-forwarding-ending notices (forwarding ends 2026-09-18)**
  for this company **and** for the related entities **1701 N M ST LLC** and **Universal Trading
  Technology LLC** (already known from §5), plus one for the individual owner — added to §6
  outstanding items, since it needs action before the deadline. No Safe Guard Self Storage
  cancellation confirmation and no new Penn Credit letter found (both searched directly). Ping
  client-scoped semantic search returned no results specific to this client. Google Drive turned up
  a **new "Deep Tech" folder created 2026-08-10** distinct from the one linked in §7 — flagged below,
  same pattern as the duplicate-folder finding on Masciave.

- 2026-09-03 — **Shopify transfer chased (Lilian).** Question asked: what exactly did Shopify tell us, and has
  the promised confirmation email arrived and been missed? **Answer: no email was missed — none was ever sent,
  and the closure has not happened.** Julia's mailbox was searched exhaustively (`in:anywhere` plus trash, all
  senders, 2026-08-15 onward; **spam was completely empty**) and holds **no** Balance-closure confirmation.
  What it does hold is the opposite evidence: Shopify's **2026-09-03** *"Shopify Balance statements are ready"*
  for **August 2026** on this store, so the Balance account is still open **9 days** after the request, plus the
  normal **2026-09-01** bill of $49.00 CAD. The one thing nobody has read is Shopify's **2026-08-27** reply from
  agent **"Alex L"**, which is unread in the Support Inbox because the email notification carries no content.
  Also noted, without a cause established: Julia's out-of-office auto-reply went back into the Shopify support
  thread twice on 2026-08-25. _(Worked by Lilian.)_
- 2026-09-03 — **The Shopify support conversation opened, and the diagnosis reversed (Lilian).** Alex L's
  message of 2026-08-27 turns out to be a **request for Julia's express written permission** to close the
  Balance account — *"We'll wait for your confirmation before taking the next step."* **So the case was never
  queued at Shopify; it was waiting on us for seven days.** Two facts recovered from the conversation that the
  firm did not have: the **ticket number `#69851505`**, and Shopify's statement of what closure costs (the
  current owner loses that Balance account and any Balance cards or features attached to it). One
  time-sensitive gap found and flagged: **the August 2026 Balance statement was issued 2026-09-03, after Julia
  downloaded the rest on 2026-08-25**, so it must be downloaded **before** the closure is confirmed or it is
  lost with the account. **Double note `503544` rewritten in place** with the corrected status, the ordered
  next actions and the ticket number. _(Worked by Lilian.)_

### Outstanding items (CI-only — never in the SOP)
- 🔴 **SHOPIFY — the ownership transfer is blocked, and the case has been sitting on OUR desk, not Shopify's.**
  The active **Shopify Balance account** is what blocks the transfer; it has to be **closed permanently** first,
  and closure takes the Balance statements with it. Ticket **`#69851505`**. Full trail: Double note **503544**.
  🔴 **ESTABLISHED 2026-09-03, and it corrects the earlier reading.** Shopify's reply of **2026-08-27**
  (advisor "Alex L") confirms the account shows **$0** and that they can proceed — and then asks for Julia's
  **express permission in writing, inside the support conversation**, before they act: *"We'll wait for your
  confirmation before taking the next step."* **Nobody read it for seven days**, so there was never a
  confirmation email pending: Shopify was waiting on us. Corroborating: the store's **August 2026 Balance
  statements** were issued **2026-09-03** (the account is still open) and the **2026-09-01** bill charged
  normally ($49.00 CAD).
  ➡️ **NEXT ACTIONS, in this order:**
  1. ⚠️ **Download the AUGUST 2026 Balance statement first** and file it in the client's Drive folder. Julia
     downloaded every statement on **2026-08-25**; the August one was only issued on **2026-09-03**, so it is
     the one statement not on file, and the closure removes access permanently.
     Route: `nrtr06-xk.myshopify.com/admin/shopify-balance/account/6786369/statements`.
  2. **Reply inside the conversation** (`help.shopify.com/en/inbox/14006272`, button *"Continue conversation"*)
     giving express permission to close Balance, quoting ticket `#69851505`.
     🛑 **Alex writes "please reply to this email" — do not.** That address is `no-reply@shopify.com` and Shopify
     does not monitor it; the reply only counts inside the conversation.
  3. Wait for Shopify to confirm the closure **in that conversation** — check it directly, no notice will come.
  4. Then *Settings → Users → transfer ownership* to Vitalii Ivanov.
  ⓘ **What closure costs, in Shopify's words:** the current owner loses that Balance account and any Balance
  features or cards connected to it — required, they say, so the store transfers cleanly and the new owner sets
  up financial services under his own information.
  ⓘ **Noted, cause NOT established:** Julia's out-of-office auto-reply fired back into the Shopify support
  thread **twice** on 2026-08-25, to `mailer3.shopify.com`. Whether it affected anything is unknown — recorded,
  not diagnosed. _(Shopify support conversation read 2026-09-03; Gmail searched the same day — Lilian.)_
- ⚠️ **USPS mail forwarding for this company (and for 1701 N M ST LLC, Universal Trading Technology
  LLC, and the owner individually) ends 2026-09-18** — confirm whether it needs renewing or whether
  a permanent address change should be filed instead, before mail starts bouncing. STILL OPEN, **20 days
  out**; no evidence found that a decision has been made. _(Gmail, 2026-08-14; re-chased 2026-08-29 — a
  search of Gmail bounded `after:2026/08/22` for USPS forwarding on this company or its related entities
  found nothing new.)_
- ⚠️ **CONFIRM THE FDOR WITHDREW ITS Q2 2025 REEMPLOYMENT-TAX DEMAND** (its letter to the client is dated
  **2025-10-22**) — STILL OPEN, **17 days pending** since first flagged 2026-08-13, no deadline, and **an
  uncancelled FDOR bill escalates on its own**. With the effective date now 1 July 2025 that quarter
  should not be due, but nothing on record shows the bill cancelled. A targeted Gmail search bounded
  `after:2026/08/22`, on 2026-08-29, for FDOR/reemployment-tax correspondence on this client found
  nothing new.
- **Reconcile the payroll flag / Gusto cancellation decision (owner asked 2026-08-05)** — STILL
  UNSETTLED, **24 days pending, and the evidence now points the OTHER way.** Gusto sent an "Action
  required: Payroll is late" reminder for **DEEP TECH DEVELOPMENT GROUP LLC** on **2026-08-27**, for the
  **Aug 17–30, 2026** pay period, addressed to Julia, Lilian, Maria and the owner
  (`willivanoff@gmail.com`) — an active, ongoing biweekly payroll run, not a lapsed one. This reverses
  the 2026-08-22 negative finding (no Gusto emails naming this client 08-15→08-21) and strengthens the
  reading that the cancellation was never actioned, rather than that payroll quietly stopped. _(Gmail,
  2026-08-27, found 2026-08-29.)_
- **Awaiting email confirmation** that the two Safe Guard Self Storage units have been cancelled (requested 2026-07-30) — STILL OPEN, ~30 days pending, no deadline. A search of Gmail bounded `after:2026/08/22`, on 2026-08-29, for "Safe Guard Self Storage" did not find any results.
- **New toll balance appeared** at Penn Credit after the last payment brought it to zero — STILL OPEN, no deadline (recurring item). A search of Gmail bounded `after:2026/08/22`, on 2026-08-29, for "Penn Credit" did not find any results (the portal itself was not logged into — out of scope for this sweep).
- Confirm the **sales-tax state / registration** and what's taxed (Shopify goods).
- **State Farm UM form** requires a wet signature from the business (mid-July 2026) — hand-off in progress.
- A **second "Deep Tech" Google Drive folder** (created 2026-08-10, different parent than the one
  linked in §7) turned up in this sweep — confirm whether it's a duplicate/stale folder or a
  distinct working folder before relying on it. Not re-chased this run (budget).
- ~~File the downloaded Shopify Balance statements into the client's Drive folder~~ — **done, confirmed by
  Lilian 2026-08-25:** they are uploaded to Google Drive. Once Balance closes they are the **only** record of
  that account.
- ~~Confirm the store's payment method moves to the owner with the ownership~~ — **answered by Lilian
  2026-08-25: nothing changes.** The payment method stays as it is and **Deep Tech's bank account is not
  affected** by the transfer. Do not re-raise this as an open item.
- ~~Confirm QuickBooks Online reconnection to Double~~ — **answered 2026-08-11 (Lilian): the disconnection follows the bookkeeping pause.** Reconnect when the client resumes, not before.

### Log (continued)
- 2026-08-22 — **Weekend sweep (incremental, baseline 2026-08-15→2026-08-22).** No new Double notes/activity; the FDOR case note (491845) is unchanged since 2026-08-13. Chase pass on all five §6 items (deadline items first): the **USPS mail-forwarding-ending deadline is 2026-09-18 (27 days out)** — no evidence found that a renewal/address-change decision has been made; the Safe Guard Self Storage cancellation and the Penn Credit toll balance are both still open with no update; the FDOR Q2-2025-demand-withdrawal confirmation is unchanged since 2026-08-13; the Gusto cancellation decision remains UNSETTLED (see above — new negative evidence, not a resolution). The second "Deep Tech" Drive folder identity check was not re-chased this run (budget).
- 2026-08-25 — **The Shopify store's ownership transfer to the owner was worked with Shopify support, and it is
  blocked.** _(Shopify support chat transcript, 2026-08-25, supplied by Lilian; corroborated against Gmail and
  Double.)_ The store is **Deep Tech Development / gorobots.us**, registered under **Julia**, and the owner it has
  to move to is **Vitalii Ivanov** — confirmed as this client's Double admin contact (he is also the contact on
  1701 N M ST LLC, Universal Trading Technology LLC and his own individual profile). Neither adding him as a
  **staff user** nor **Transfer ownership** works from the admin. Across a three-handler chat Shopify concluded the
  store's **Shopify Balance account is active and is the blocker even at $0**, offered either closing it
  permanently or switching payouts to an external bank, and — Julia having only one bank account — **submitted a
  permanent closure request**. Julia downloaded every monthly Balance statement first; Shopify said there was no
  transaction history to export because the account never processed a payout. **No ETA, and the promised ticket
  number had not arrived** when this was written. Recorded as Double case note **503544**; §3 and §5 updated, and
  §5 reordered so the live item is visible on the published card. _(Worked by Lilian.)_
  - ⓘ **Corroboration, because the name reached the session as "DigTech":** Shopify's own billing and Balance
    emails to Julia name the store **"Deep Tech Development" (gorobots.us)**, monthly Balance statements ran
    Nov 2025 → Jul 2026 (an active Balance account, exactly as Shopify found), and no client, contact or email
    anywhere is named "DigTech".
- 2026-08-25 (later the same day) — **Lilian revised the Double note herself and ruled three of this session's
  points out of scope.** She deleted the note's *"three things that are not settled"* block in the Double UI —
  that Shopify's Balance-is-the-blocker diagnosis was untested, that nobody established why the staff-user add
  errored, and that the two advisors contradicted each other on payouts — and confirmed it in words:
  **"ninguna de ellas vale la pena… no son relevantes. Olvida esas tres cosas."** 🛑 **They are not to be
  re-raised**, here or in the note. She also settled two open items: the Balance statements **are uploaded to
  Google Drive**, and the **payment method and Deep Tech's bank account do not change** with the transfer. The
  note was then updated on top of *her* edited body — fetched first, so her cuts were not restored. The general
  lesson (what a case note carries vs. what is our own audit of a third party) is written into the
  [`double-mcp` skill](../../../.claude/skills/double-mcp/SKILL.md) §7 rule 12. _(Worked by Lilian.)_

- 2026-08-29 — **Weekend sweep (incremental, baseline 2026-08-22→2026-08-29).** Double: no new notes
  (both existing notes' `updatedAt` predate this window's start except note 503544's 2026-08-25 update,
  already reflected in the prior sweep's write-up); zero activity-log entries since 2026-08-22. Gmail:
  found a **new Gusto "payroll is late" reminder for this client dated 2026-08-27** (Aug 17–30 pay
  period) — new evidence the payroll is still active, reversing last week's negative finding (added to
  §4/§6); found a **further Shopify Support reply (2026-08-27, agent "Alex L")** whose content sits
  inside Shopify's own Help Center, not the notification email — unread, flagged. Targeted chase
  searches for FDOR/reemployment-tax, Safe Guard Self Storage and Penn Credit (all bounded
  `after:2026/08/22`) found nothing new. Ping: org-wide semantic search for this client returned only
  unrelated pre-2026-08-22 noise. No SOP exists yet for this client (the toll-debt SOP is Draft and
  unaffected); no SOP-proposal candidates queued.

### Information still needed
- [ ] Fiscal year-end; confirm sales-tax state / registration
- [ ] Full Penn Credit pay-down steps (→ future SOP)

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=706685](https://app.doublehq.com/close?cid=706685)
- **Double case notes** (two separate matters — one note each):
  - `CASE · Shopify — transferring store ownership to Vitalii Ivanov` — note **503544**
  - `CASE · FDOR — moving the sales-tax and reemployment-tax effective dates` — note **491845**
- **Google Drive folder (sensitive vault):** [Drive folder](https://drive.google.com/drive/folders/19OZXViieW60GsVtKUbqta0a2mM2VMZK1)
- **Client password vault (Google Doc):** [all client logins — incl. the Penn Credit account/ID number + ZIP](https://docs.google.com/document/d/1dR6glVFYIu9k8bs4DPUzCcx1AnMq-d_-HoJWcTmJNug/edit) — sensitive values live here, never in this file.
- **Penn Credit collection portal:** [account.penncredit.com/myaccount](https://account.penncredit.com/myaccount) — pay down the FDOT toll debts here.
- **Related clients (owner group):** [`vitalii-ivanov.md`](./vitalii-ivanov.md) — **Vitalii Ivanov & Tetiana Mogylova**, the owner's individual (1040) file. **1701 N M ST LLC** and **Universal Trading Technology LLC** share this client's portal contacts and have no CI file yet — ⚠️ shared contacts show a **related-entity group**, not established ownership.
- **Related SOPs:** [Deep Tech — FDOT Toll Debts (Penn Credit)](../../sops/deep-tech-penn-credit-tolls.md) — the pay-down runbook (draft).
