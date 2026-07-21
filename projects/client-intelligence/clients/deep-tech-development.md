# Deep Tech Development LLC

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-07-21

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

- **Business name:** Deep Tech Development LLC
- **Entity type:** LLC — files on the owner's **Schedule C** (single-member / disregarded) _(Double)_. **Note:** a **sister entity "Deep Tech Development GROUP LLC"** exists — see §5; don't conflate the two.
- **Home state:** **Florida** (Broward area) _(Gmail — high confidence for FL operations)_
- **Industry / what they do:** **E-commerce (Shopify)** — operating brand "**Go Robots**" (tech / robotics products), with a physical-delivery component (a commercial cargo van, FL-insured). Reads as Shopify retail + local delivery, not software-only. _(Gmail — medium confidence on product line)_
- **Primary language:** **Russian** (Ukrainian ties). _(Gmail)_
- **Our engagement (services we provide):** Bookkeeping (**monthly**); income tax on the owner's **Schedule C**; **sales tax (quarterly — likely FL DR-15)**; **1099 preparation**; annual-report filing. Payroll N/A **for this entity** (the GROUP entity runs the payroll — see §5). **Assigned bookkeeper: Lilian.** _(Double + Gmail, 2026-07-20)_
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** QuickBooks Online (via Double)

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
| QuickBooks Online (via Double) | Bookkeeping ledger | _(pending — Drive link)_ | Managed through Double |
| Sales-tax portal | Filing sales tax (quarterly) | _(pending — Drive link)_ | _(jurisdiction pending)_ |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** Yes — **quarterly** _(Double)_
- **Jurisdiction(s):** Likely **Florida (DR-15)** — FL operations + Shopify sale of tangible goods _(inferred, medium confidence; not seen filed for this entity directly)_.
- **Process notes (→ future SOP):** The internal recurring "Sales Tax" task cadence was changed from due the **1st** of the quarter-end month to due the **5th** _(Double activity log — changed by Lilian, 2026-07-20)_.

### Payroll
- **Applies?** No — **N/A** _(Double)_

### Bookkeeping & monthly close
- **Applies?** Yes — **monthly** _(Double)_

### Income tax
- **Applies?** Yes — the owner's **Schedule C (Form 1040)** _(Double)_
- **Our role:** We prepare income tax _(Double)_; **1099 preparation** included.

### Licenses & other filings
- **Annual report:** Yes — we handle it _(Double)_

## 5. Key facts & quirks

- **Multi-entity owner / naming ambiguity (important).** A sister entity **"Deep Tech Development GROUP LLC"** is the one that runs **Gusto payroll (biweekly)**, holds the **Shopify store**, the "Go Robots" AP mailbox, and the vehicle policy. This file (706685) is the **Schedule C, single-member, payroll-N/A** entity. Automated emails (Gusto, QuickBooks, Shopify, insurance) blur the two names — **attribute payroll / van / Shopify to the GROUP entity** until confirmed.
- **External Ukrainian finance team:** the owner uses an outside Ukrainian bookkeeping / tax group that shares documents and handles the owner's **personal Ukrainian tax declaration**; JK coordinates hand-offs via Google Drive.
- **Ownership (corrected by Lilian, 2026-07-20):** the owner is a **different individual** from Never Give Up KK's owner — Never Give Up's owner was a **former employee** of Deep Tech, not an owner. Separately, the sister entity "Deep Tech Development GROUP LLC" (above) is a distinct company.
- **Never Give Up KK relationship nuanced (2026-07-21):** beyond the past-employment link above, a Drive-held invoice shows **Never Give Up KK LLC billed the sister "GROUP LLC" entity for consulting services** (Sep 2025) — an actual vendor/consulting relationship, not just former employment. No dollar figure recorded here. _(Drive invoice, cross-referenced during Never Give Up KK's 2026-07-21 sweep)_
- **Accounting-platform connection disconnected (2026-07-21):** Double's client record shows the QuickBooks Online connection for **this entity (706685)** as disconnected (`platform: none`), and the Double activity log records a `client_disconnected` action by Julia the same day. Not yet clear if this is an intentional cleanup (e.g., consolidating onto the GROUP entity) or needs reconnecting — verify before the next bookkeeping close. _(Double, 2026-07-21)_

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
- 2026-07-20 — Profile built from Double's **structured client properties** (Assigned Staff = Lilian; Schedule C; monthly bookkeeping; quarterly sales tax).
- 2026-07-20 — **Gmail enrichment sweep:** established the Shopify e-commerce ("Go Robots") profile, FL (Broward), RU language, and the important sister-entity (GROUP LLC) ambiguity. Ping had **no indexed meetings**; facts from Gmail + Double contacts. Ping + Gmail now swept (see sweep-state).
- 2026-07-21 — **Weekend CI incremental sweep** (baseline 2026-07-20): Double activity log showed two changes — the Sales Tax recurring-task due-date shift (1st → 5th, by Lilian, 2026-07-20) and a `client_disconnected` action on the QBO connection (by Julia, 2026-07-21); both added above. Double notes still empty. Ping (client-scoped + org-wide search for "Deep Tech Development" / "Go Robots") found no new indexed meetings — org-wide semantic hits were unrelated/pre-baseline noise, discarded. Gmail (in:inbox + in:sent, business name + owner emails, after:2026/07/20) returned no client-specific new threads. Drive folder link reconfirmed, unchanged.

### Outstanding items (CI-only — never in the SOP)
- **Reconcile the two entities:** confirm which legal entity (LLC vs GROUP LLC) maps to Double 706685 vs the owner's other IDs, and reconcile the payroll-N/A flag against the active Gusto payroll under "Deep Tech Development GROUP LLC."
- Confirm the **sales-tax state / registration** and what's taxed (Shopify goods) for this entity specifically.
- **State Farm UM form** requires a wet signature from the business (mid-July 2026) — hand-off in progress.
- **Confirm the 2026-07-21 QBO disconnection** was intentional; reconnect if not, before the next bookkeeping close.

### Information still needed
- [ ] Fiscal year-end; confirm sales-tax state / registration
- [ ] Credentials Drive link; resolve the LLC-vs-GROUP-LLC entity mapping

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=706685](https://app.doublehq.com/close?cid=706685)
- **Google Drive folder (sensitive vault):** [Drive folder](https://drive.google.com/drive/folders/19OZXViieW60GsVtKUbqta0a2mM2VMZK1) — note: the sister **GROUP LLC** has its own separate Drive folder(s).
- **Related SOPs:** _(pending — links into ../sops/ once written)_
