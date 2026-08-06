# ECOORGANIC USA LLC

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-08-06

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

- **Business name:** ECOORGANIC USA LLC
- **Entity type:** LLC
- **Home state:** Connecticut
- **Industry / what they do:** Spray-foam insulation contractor
- **Primary language:** **Russian.** The owner corresponds in Russian and is addressed formally ("Вы") — see §5 for how to write to him _(confirmed 2026-08-04)_.
- **Our engagement (services we provide):** Monthly bookkeeping — a staff bookkeeper does the work; Claude acts as the **independent reviewer**. (Other services: _(pending)_)
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** QuickBooks Online (via Double)

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details.

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client (link below) — **the owner we correspond with**, in Russian (see §5) |
| Second owner | Double client — **there are two owner contacts**, each with their own individual (1040) client account, so the 1120-S issues **two K-1s** _(confirmed 2026-07-30)_ |

Both owner contacts are on file in **Ping** as well as Double, with no recent meetings
indexed _(2026-08-04)_.

- **Double client:** [app.doublehq.com/close?cid=719473](https://app.doublehq.com/close?cid=719473)

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| QuickBooks Online (via Double) | Bookkeeping ledger | _(pending — Drive link)_ | Managed through Double. **The primary admin is the wrong owner and the transfer is half-done — read the subsection below before touching users or the plan** |
| Bank feed | Reconciliation | _(pending — Drive link)_ | One live feed: Chase business checking (see the bookkeeping SOP); other accounts frozen |
| **Turo** | A **company** account — its earnings and any **1099-K**; which return reports it is settled in §4 | _(n/a — the account is **closed**; see §4)_ | **The account is closed, so there is no web access to the reports.** Turo support **+1-415-965-4525**; in the voice menu press **2, 3, 3** _(Lilian's note from her 2026-08-04 call — not re-verified since)_. Turo will release the documents **only to the account holder** — and **will not talk to the firm at all unless the owner is on the call**, so every Turo call is scheduled with him |

### ⚠️ QuickBooks primary-admin transfer — IN PROGRESS, and the account is mid-change (2026-08-06)

The QuickBooks **primary admin** is the **second owner (the father)**, who **no longer has access
to the phone number on that account** — so every verification code QuickBooks sends goes to a phone
nobody can read. The **owner we correspond with (his son)** asked the firm to help move the primary
admin over to him. **The account is deliberately in a half-changed state right now**; don't tidy it
up without reading this.

**Where it stands**

- ✅ **A second user was created for the son.** He has his own QuickBooks user now.
- ⚠️ **To create it, the QuickBooks subscription had to be UPGRADED** — the plan the client was on
  allows only **one** user. **The upgrade is temporary and exists only to hold two users during the
  handover** _(Lilian, 2026-08-06)_.
- ❌ **The primary-admin transfer itself did NOT go through.** QuickBooks sends a verification code
  to the phone on the account — the phone the father can't reach — so the in-product transfer is a
  dead end.
- 🔧 **QuickBooks support gave an identity-verification route instead**, and it is **partly done**:
  the **phone on the account was changed to the son's phone**, but the remaining step is on the
  **father personally** — he has to **scan a QR code support provided** and **upload a photo of his
  ID**. Nothing moves until he does that. _(Support instructions, via Lilian, 2026-08-06. The QR
  code and any support case reference are with Lilian, not in this file.)_

**The plan once the father completes his verification** _(Lilian, 2026-08-06)_ — in this order:

1. Make the **son** the sole **primary admin**.
2. **Delete the father's user.**
3. **Downgrade the QuickBooks subscription** back to the single-user plan it was on.

> **Two things must not be forgotten.** (a) **The downgrade** — the client is paying for a bigger
> plan than they need until it happens, and the reason for the upgrade disappears the moment the
> father's user is deleted. (b) **Two users existing is expected, not a mistake** — nobody should
> "clean up" the duplicate while the handover is open.

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** _(pending — confirm)_

### Payroll
- **Applies?** _(pending — confirm)_

### Bookkeeping & monthly close
- **Applies?** Yes — this is the core engagement.
- **Cadence:** Monthly.
- **Categorization rules / quirks:** Detailed, client-specific rules already
  documented — check/deposit evidence required, gas-station **$25** threshold
  (< $25 → distributions, ≥ $25 → fuel), **all food/restaurant/convenience →
  distributions** (non-deductible; no client/crew/personal split), owner-personal
  transfers as equity, cash-out **investigated** (not
  blanket owner draws — may be subcontractor cash, 1099 exposure), job costs to
  COGS *(to verify)*, holding accounts to $0 at close. See the SOP.
- **Our role:** Staff bookkeeper does the work; Claude is the independent reviewer.
- **Process notes (→ SOP):** **Already has a full SOP** —
  [`../../sops/ecoorganic-bookkeeping-review.md`](../../sops/ecoorganic-bookkeeping-review.md).

### Income tax
- **Applies?** Yes — the **2025 return is a 1120-S**, prepared by the firm, **in progress** and waiting on information from the client (see §6). It issues **two K-1s**, one per owner.
- **Open blocker — the Turo documents (2026-08-04):** we need the **Earnings Report and any 1099-K for 2025** from **Turo**. The Turo account **has been closed**, so nobody can log in and download them, and **Turo will only release them to the account holder** — not to us, and not even by email to the address already on the account. _(That the 1120-S is specifically waiting on these is a reasonable read, not something recorded: the 2026-07-30 entry in §6 says only "waiting on information from the client" without itemising it. Confirm with Lilian.)_
  - **How we first tried it — SUPERSEDED, don't send him off alone:** the owner calls Turo himself at the support number in §3, works through the voice menu, and asks for the **Earnings Report** and **1099-K for 2025**. That route is no longer the plan; read the two bullets below before doing anything.
  - **Status (2026-08-04, second call):** Lilian and the owner called Turo **together**. Turo said **they cannot access the account themselves** and are **escalating** the case. The answer will come **by email to the account's address within 1–2 business days**. **We do not call again — we wait for that email**, and only call back if it doesn't arrive.
  - 🔑 **Any call to Turo has to be made WITH the owner on the line.** Turo gives us nothing without him — it's their security check. Don't plan a Turo call the firm can make alone; schedule it with him. _(Learned 2026-08-04: the first attempt, with Lilian alone, went nowhere; the joint call is what got the case escalated.)_
  - **Whose account is it? — the company's.** The Turo account belongs to **ECOORGANIC USA LLC**, so any income and any 1099-K go on the **1120-S**, not on an owner's 1040. _(Per Lilian, 2026-08-04 — her statement; the basis is not recorded and no document was seen. The account is closed, so this has not been verified against the registration.)_
  - Turo's refusal to deal with the firm says **nothing** about who owns the account — it only means we are not the account holder, which is why the owner has to place the call. How a company-owned account squares with Turo dealing only with an individual account holder is **not established**.
  - **On the next contact with Turo — the escalation email or a further call — get the registered account name and the name / TIN on any 1099-K.** That corroborates the ownership answer and, more importantly, determines whether the 1099-K will match to the LLC's EIN — if it comes out under his SSN, the return position has to be handled deliberately whoever "owns" the account.

### Licenses & other filings
- **Applies?** _(pending)_

## 5. Key facts & quirks

- 🔑 **Turo will not deal with the firm unless the owner is on the call.** Every Turo call is scheduled with him — a call the firm makes alone gets nowhere _(2026-08-04)_.
- **Any Turo income is the company's**, not an owner's personally _(per Lilian, 2026-08-04 — §4)_. Whether the account actually produced income, and in which years, is **still unknown** — the platform account is **closed** and its 2025 earnings report / 1099-K have not been obtained (§4). **Not yet checked** whether Turo payouts appear in the Chase feed or in QuickBooks, so don't conclude anything in either direction until someone looks — and note that company income can still have been paid into a personal account (a distribution), so absence from the Chase feed would not disprove company ownership.
- **A QuickBooks primary admin who has lost the phone on the account cannot hand the role over in-product.** The transfer fires a verification code to that phone, so it dead-ends. The way through is **QuickBooks support's identity check**: change the phone on the account, then the **current primary admin has to scan a QR code and upload a photo of his ID himself** — the firm cannot do that step for him. Budget for the client's own delay _(learned on this client, 2026-08-06 — §3)_.
- **Adding a second QuickBooks user can force a plan upgrade.** This client's plan allowed only one user, so a second user meant paying for a bigger plan. When the upgrade exists only to carry out a handover, **write the downgrade down as a task** — it is the step that gets forgotten once the visible problem is solved _(2026-08-06 — §3)_.
- Check- and cash-heavy business; many Zelle payments to subcontractors (W-9 / 1099 tracking matters).
- Only **one live bank feed** (Chase business checking); other bank/card accounts are disconnected and **frozen** pending client confirmation of which are closed.
- **2025 books are closed** — renames/renumbers only; never merge/retype accounts with 2025 activity.
- Several open categorization decisions (vehicle finance lease-vs-loan, which disconnected accounts are closed, COGS-vs-opex) tracked in the SOP's Open decisions log. *(Meals/gas policy is now resolved — see the log.)*
- **Writing to this client:** messages go out in **Russian**, addressed formally ("Вы"), in simple wording — the owner reads Russian, not English. How to draft and shorten a client message at all is the firm-wide rule in [`CLAUDE.md`](../../../CLAUDE.md); only the language is specific to this client.

## 6. History & open questions

### Log
- 2026-08-06 — **QuickBooks primary-admin handover, started and paused (Lilian).** The **owner we correspond with (the son)** asked for help getting himself onto QuickBooks as a user, because the **primary admin is the second owner (his father)**, who **no longer has access to the phone tied to that account**. Work done: a **user was created for the son** — which required **upgrading the QuickBooks subscription**, since the client's plan allowed only **one** user — and then the **primary-admin transfer failed**, because QuickBooks sends the confirmation code to that unreachable phone. Lilian **contacted QuickBooks support**, which gave an identity-verification route; following it, the **phone on the account was changed to the son's**, and the remaining step is the **father's personally: scan a QR code support provided and upload a photo of his ID**. **Paused there** — nothing else can move until he does it. Once he does: make the son primary admin, **delete the father's user, then downgrade the subscription** back to the single-user plan. **So the account currently has two users on purpose.** Full state and the ordered plan in §3; the transferable lessons in §5; the QR code and any support case reference stay with Lilian.
- 2026-08-04 — **Turo documents chased (Lilian).** The firm had already asked for access to the client's **Turo account** earlier; the account has since been **closed**, so the earnings report and any 1099-K can't be downloaded. Lilian **called Turo support**: they confirmed they *can* produce the documents but will hand them **only to the account holder** — they refused to give them to Lilian, and refused even to email them to the address already on the account without the owner calling himself. She captured the working route through the phone tree (see §3) and **sent the owner a message in Russian** with the number, the key sequence, and what to ask for (**Earnings Report and 1099-K, 2025**). **Waiting on him to call.** The message as sent:
  > Добрый день, Артем! Как у Вас дела?
  >
  > Это Лилиан.
  >
  > Я звонила в Turo. Они могут помочь с отчётами, но предоставить эту информацию они могут только Вам, а не мне.
  >
  > Я попросила, чтобы они отправили её по почте на адрес, указанный в Вашем аккаунте, но они всё равно попросили, чтобы Вы им позвонили.
  >
  > Вот как можно легко с ними связаться:
  >
  > Номер телефона:
  > +1-415-965-4525
  >
  > Затем в голосовом меню нажмите: 2, 3, 3.
  >
  > Попросите Earnings Report и форму 1099-K за 2025 год.

  Lilian stated the same day that the **Turo account is the company's**, not the owner's personally — so any income and any 1099-K belong on Ecoorganic's 1120-S _(her statement; basis not recorded, and unverifiable against the closed account — see §4)_. Note that the sent message does **not** ask Turo to email the documents to the account address — that line was in a draft and was cut — so the owner was told only to call and ask. The message-drafting lesson from the same session is now a firm-wide rule in `CLAUDE.md`. _(Source: a working session originally run in the wrong repository — `JuliaJKAcct/LilianA-T`, branch `claude/turo-artyom-message-gyvksn` — and moved here on 2026-08-04.)_
- 2026-08-04 — **Second Turo call, this time WITH the owner on the line** (Lilian + the owner). Turo said **they cannot access the account** and **escalated** the case. The resolution comes **by email to the account's address, 1–2 business days** — no further call needed unless it fails to arrive. Also learned, and now the standing rule for this client: **Turo will not give the firm anything without the owner present** — every call has to be scheduled with him. _(§3, §4.)_
- 2026-07-30 — **2025 tax return (1120-S) is in progress**, waiting on information from the client
  (Lilian). Two notes on the Double tracking: `Tax Return Status = Not Started` is **stale**, while
  the blank `Organizer Status` is **correct** — as a bookkeeping client no company organizer is owed
  (see the [`tax-season-readiness`](../../../.claude/skills/tax-season-readiness/) skill §1b). The
  1120-S runs off the books and the items being chased; it does **not** wait on anyone's personal
  organizer — it produces the K-1s that the shareholders' 1040s need, so it comes first.
- 2026-07-20 — Profile started from the existing Ecoorganic bookkeeping SOP and the Double record (ECOORGANIC USA LLC, QBO). This client already has a full bookkeeping SOP; the profile mainly points to it.
- 2026-07-20 — Sweep: no Double notes yet; Ping has the client + contacts on file but **no indexed meetings**. Nothing new beyond the bookkeeping SOP.
- 2026-07-21 — Firm recently took this client over (from the prior bookkeeper); active cleanup in progress. Working session refined the SOP as understanding builds: gas-station threshold moved $30 → **$25** with small charges now → distributions (not meals holding); cash-out withdrawals changed from blanket owner-draws to an **investigate-first** procedure (ATM vs transfer; known contractor vs personal account; 1099 exposure); COGS-vs-opex rule flagged **to verify** (provenance unconfirmed); Double noted as the vendor/1099/W-9 tracking tool; COA renumbering reframed as a later, incremental step (classify first). SOP rules now tagged provisional until validated against the client's history.
- 2026-07-21 — Reviewed the only connected feed (Chase checking 8310), Apr–Jul 2026 (357 transactions), to learn the client's actual keeping. Findings reported to Lilian (client figures kept out of the repo). Confirmed business type (spray-foam/insulation contractor). Corrected the SOP's account names to the real QBO chart (the personal/draws account is **Owner's distribution**, not "Owner's Pay & Personal Expenses"; there is a single **Cost of Goods Sold** account with no Materials/Sub-labor/Job-disposal sub-accounts). Key issues surfaced: subcontractor labor (incl. several payees ≥ $2,000) parked in **Outside services** with no W-9/1099 tracking; small gas/convenience charges coded to **Meals**; some …2935 owner transfers hitting **COGS**; owner transfers lumped in the **Owner's Equity** parent instead of contribution/distribution; frequent overdraft fees; triage sits at ~$0 but many categories are still wrong. Judgment calls (meals policy, COGS-vs-opex intent, which payees are 1099 subs) pending Lilian/client.
- 2026-07-21 — Decisions from Lilian: **meals policy resolved** (per Julia) — no client/crew/personal split; all food/restaurant/fast-food/convenience → distributions (non-deductible for now), gas ≥ $25 → fuel, < $25 → distributions (so the Meals account should trend to ~$0). **1099s deferred** — Lilian will resolve payee-by-payee over time; tracked via Double for now, no repo worklist needed. Grocery/food stores → distributions, **except** supply/materials stores (Home Depot, hardware, work-parts, rental/supply houses) → Supplies & Materials/COGS. Vehicle financing left as an **open question** (SOP's "Hyundai/Ally" doesn't match the actual RAM truck loans — to reconcile later). Lilian notes she's "flying blind" on this new client and will study it piece by piece.

### Outstanding items (CI-only — never in the SOP)
- **Watch for Turo's email — due 1–2 business days from 2026-08-04, so by ~2026-08-06.** It goes to the **account's** email address, not ours, so the owner has to forward it. **If nothing arrives, call Turo again with him on the line** (§3) — never alone.
- **QuickBooks primary admin — waiting on the FATHER to scan the QR code and upload his ID.** That one step is the whole blocker (§3). Chase him through the son, who is the one we correspond with. **Then, in order:** make the son primary admin → **delete the father's user** → **downgrade the subscription** back to the single-user plan. **The downgrade is the step that gets forgotten** — the client keeps paying for the bigger plan until it's done. Meanwhile, **two users on the account is intentional**; don't let anyone "clean it up". — due 1–2 business days from 2026-08-04, so by ~2026-08-06.** It goes to the **account's** email address, not ours, so the owner has to forward it. **If nothing arrives, call Turo again with him on the line** (§3) — never alone.
- **Before filing — get the registered Turo account name and the name / TIN on any 1099-K** at the next contact with Turo (§4). It corroborates the ownership answer and shows whether the 1099-K will match to the LLC's EIN or to his SSN.
- **Check whether any Turo payouts are already in the books** — whether those deposits landed in the Chase feed and were categorised, or are missing entirely (§5). Nobody has looked yet.
- Open categorization decisions (vehicle finance lease-vs-loan, which disconnected accounts are closed, COGS-vs-opex to verify) — tracked in the SOP's **Open decisions log**; live status in Double. Meals/gas policy is resolved.

### Information still needed
- [ ] Fiscal year-end _(primary language answered 2026-08-04: Russian)_
- [ ] Whether the Turo account produced income at all, and for which years _(whose account it is: answered 2026-08-04 — the company's, per Lilian)_
- [ ] Whether a **1099-K was actually issued** for 2025
- [ ] Sales tax / payroll applicability and who prepares each _(income tax answered 2026-08-04: 1120-S, prepared by the firm)_
- [ ] Any business licenses / annual filings
- [ ] Where credentials live (Drive vault link)
- [ ] **Whether the firm has its own QuickBooks access to this client independent of the owners' users** — the primary-admin handover in §3 shows the access picture was never written down. Worth settling while someone is in the account.
- [ ] Resolve the SOP's open decisions: vehicle financing (reconcile the actual RAM truck loans vs the SOP's "Hyundai/Ally"), which accounts are closed, COGS-vs-opex intent

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=719473](https://app.doublehq.com/close?cid=719473)
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** [`../../sops/ecoorganic-bookkeeping-review.md`](../../sops/ecoorganic-bookkeeping-review.md)
