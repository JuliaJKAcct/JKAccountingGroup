# Deep Tech Development Group LLC

> **Status:** ⚠️ **BOOKKEEPING PAUSED** — the client is between chapters, not gone (Lilian, 2026-08-11) · **Owner:** Lilian · **Last updated:** 2026-08-11

> **Sensitive data lives in the firm's systems, not here.** This file holds
> non-sensitive knowledge and links only. Logins, passwords, full account numbers,
> EINs, dollar figures, and personal contact details stay in Google Drive / Double
> / QuickBooks and are referenced by link. Never paste a secret or personal data
> into this file.

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
- **Accounting platform:** QuickBooks Online — **disconnected from Double on 2026-07-21** (Double activity log shows a `client_disconnected` event by Julia; the client record's `platform` field now reads "none"). Confirm reconnection status before assuming Double-synced books are current — see §5. _(Double activity log, 2026-07-21; inferred with medium-high confidence)_

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details.

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client (link below) |

- **Double client:** [app.doublehq.com/close?cid=706685](https://app.doublehq.com/close?cid=706685)

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| QuickBooks Online (via Double) | Bookkeeping ledger | _(pending — Drive link)_ | Managed through Double — **disconnected 2026-07-21**; reconnect/confirm status before relying on Double-synced data _(Double activity log, 2026-07-21)_ |
| Shopify ("Go Robots" store) | E-commerce sales platform | _(pending)_ | Plan scheduled to downgrade from **Grow** to **Basic** (both paid monthly) effective **2026-08-02** _(Gmail, 2026-07-28)_ |
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

### Bookkeeping & monthly close
- **Applies?** ⏸ **PAUSED — and this is deliberate, not a lapse.** _(Lilian, 2026-08-11.)_ The owner is
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

- ⏸ **The client is paused while the owner pursues a US visa** — the business restarts when he has
  what he needs, and bookkeeping restarts with it. Until then the firm does **administrative work
  only**, and the QuickBooks disconnection of 2026-07-21 is part of the pause rather than a fault to
  fix. Read every recurring obligation below in that light. _(Lilian, 2026-08-11.)_
- **One company — "Deep Tech Development Group LLC" (not two).** This single company runs **Gusto payroll (biweekly)**, holds the **Shopify store** and the "Go Robots" AP mailbox, and carries the **vehicle policy**; it files on **Schedule C** (single-member) per Double. Automated emails (Gusto, QuickBooks, Shopify, insurance) render the name inconsistently (with/without "GROUP"), which earlier looked like two separate entities — **it is not**. _(Corrected by Lilian, 2026-07-22.)_
- **External Ukrainian finance team:** the owner uses an outside Ukrainian bookkeeping / tax group that shares documents and handles the owner's **personal Ukrainian tax declaration**; JK coordinates hand-offs via Google Drive.
- **Ownership (corrected by Lilian, 2026-07-20):** the owner is a **different individual** from Never Give Up KK's owner — Never Give Up's owner was a **former employee** of Deep Tech Development Group, not an owner.
- **Client password vault (one Google Doc).** Practically all of this client's logins are kept in a single Google Doc (linked in §7) — including the Penn Credit account/ID number + ZIP used to log in and pay the FDOT toll debts. It's the fast path when a task needs a credential; sensitive values stay there, never in this file.
- **FDOT tolls are a live, recurring collections item (Penn Credit).** See §4. Paying off one balance has **not** stopped new toll amounts from reappearing at Penn Credit, so treat every new letter as a fresh pay-down rather than assuming the debt is closed.
- **Cancelling two storage units at Safe Guard Self Storage** — requested 2026-07-30, awaiting email confirmation (see §6). Once confirmed, the recurring charge(s) should stop — don't flag the eventual absence of this charge as a missed/abnormal recurring payment.
- **QuickBooks Online was disconnected from Double on 2026-07-21** (Double activity log: a `client_disconnected` event by Julia; the client record's `platform` now reads "none", vs. an accounting platform being the norm for a monthly-bookkeeping client). No reconnection has been logged since. Treat any Double-synced bookkeeping figures as potentially stale until this is confirmed/resolved. _(Double activity log, 2026-07-21)_
- **Owner runs other Double-tracked entities.** Per Double's portal-contact records, this client's owner is also linked to **1701 N M ST LLC** (files a 1065) and **Universal Trading Technology LLC**, plus his own individual (1040) Double profile — all assigned to Lilian like this client. Company-specific facts about those entities belong in their own future CI files, not here; noted here only to record the owner-group shape. _(Double contacts + client records, 2026-08-01)_
- **External Ukrainian finance-team contact's access, more precisely:** that contact (see above) has portal access to this client **and** to the owner's other two companies (1701 N M ST LLC, Universal Trading Technology LLC) but **not** to the owner's individual profile — consistent with a bookkeeping/company-side role rather than a personal-tax one. _(Double contacts, 2026-08-01)_
- **JK forwards vendor invoices for robot inventory purchases** directly to the owner as part of the bookkeeping relationship (seen for a batch of robot-purchase invoices). _(Gmail, 2026-07-28)_
- **QuickBooks Online was disconnected 2026-07-21** (Double activity log). Not yet confirmed whether/when it was reconnected — check before relying on live bank feeds for this client.
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

### Outstanding items (CI-only — never in the SOP)
- **Awaiting email confirmation** that the two Safe Guard Self Storage units have been cancelled (requested 2026-07-30) — no confirmation seen as of 2026-08-01.
- ~~Confirm QuickBooks Online reconnection to Double~~ — **answered 2026-08-11 (Lilian): the disconnection follows the bookkeeping pause.** Reconnect when the client resumes, not before.
- **New toll balance appeared** at Penn Credit after the last payment brought it to zero — log in and pay it down, and keep re-checking whenever a new collection letter arrives until the portal reads zero.
- **Reconcile the payroll flag** _(and note the pause makes this live):_ Double marks payroll **N/A** for JK, but the company runs its **own Gusto payroll (biweekly)** — confirm this is employees-only and that JK has no payroll role here. **Update (2026-08-08):** the owner is now asking to cancel Gusto entirely (no current employees) — get a decision and update §4.
- Confirm the **sales-tax state / registration** and what's taxed (Shopify goods).
- **State Farm UM form** requires a wet signature from the business (mid-July 2026) — hand-off in progress.

### Information still needed
- [ ] Fiscal year-end; confirm sales-tax state / registration
- [ ] Full Penn Credit pay-down steps (→ future SOP)

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=706685](https://app.doublehq.com/close?cid=706685)
- **Google Drive folder (sensitive vault):** [Drive folder](https://drive.google.com/drive/folders/19OZXViieW60GsVtKUbqta0a2mM2VMZK1)
- **Client password vault (Google Doc):** [all client logins — incl. the Penn Credit account/ID number + ZIP](https://docs.google.com/document/d/1dR6glVFYIu9k8bs4DPUzCcx1AnMq-d_-HoJWcTmJNug/edit) — sensitive values live here, never in this file.
- **Penn Credit collection portal:** [account.penncredit.com/myaccount](https://account.penncredit.com/myaccount) — pay down the FDOT toll debts here.
- **Related SOPs:** [Deep Tech — FDOT Toll Debts (Penn Credit)](../../sops/deep-tech-penn-credit-tolls.md) — the pay-down runbook (draft).
