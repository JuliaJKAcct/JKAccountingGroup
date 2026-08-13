# MEGABAI

> **Status:** Former (company closed) · **Owner:** Firm · **Last updated:** 2026-08-13

> ⚠️ **NO DOUBLE ACCOUNT, AND THAT IS EXPECTED — it is not a gap to fix.** The company
> closed, so it was never migrated to Double _(Lilian, 2026-08-12)_. This file is therefore
> **the only record the firm has of it**, which is exactly why it exists: *"deja el registro
> en el Client Intelligence… deja esa información guardada."* **A closed client is the one
> whose history nobody can reconstruct later**, so the absence of a Double record is a reason
> to write this down, never a reason to skip it. **There is no Double case note for this
> client and there should not be** — the standing rule that agency matters get one assumes a
> Double account to put it on.

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

- **Business name:** Megabai _(as Lilian's notes name it; the registered legal name is **not** established — see §6)_
- **Entity type:** _(pending)_
- **Home state:** **Florida** _(registered with the FDOR for sales tax and reemployment tax)_
- **Industry / what they do:** _(pending)_
- **Primary language:** _(pending)_
- **Our engagement (services we provide):** **bookkeeping** _(Lilian, 2026-08-12)_, plus the Florida sales-tax and reemployment-tax accounts
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** _(pending)_

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in the firm's systems, not
here. **This client has no Double record**, so the usual pointer does not apply; what the firm
holds is in Julia's Drive and Gmail.

| Role | Where to find them |
|---|---|
| Owner / primary contact | _(pending — Julia's Drive / Gmail)_ |

- **Double client:** **none — the company closed and was never migrated** (see the banner above)
- **Double case note:** **none, and none should be created** — there is no Double account to hold one

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Florida Department of Revenue portal | Sales tax + reemployment tax | _(pending — Drive link)_ | Both accounts were being wound down (§4) |
| Payroll | Reemployment-tax reporting | _(pending — Drive link)_ | Last quarter filed is disputed — see §5 |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** **It did — and the account is CLOSED.** Confirmed closed by the FDOR on **2025-10-30**
- **Jurisdiction(s):** Florida
- **Agency & portal:** Florida Department of Revenue
- **Our role:** the firm dealt with the FDOR directly
- **Current status:** ✅ **Closed**

### Payroll / reemployment tax
- **Applies?** **It did** — and unlike the sales-tax account, **closing it took three attempts over four months**
- **Our role:** the firm requested and chased the closure
- **Current status:** 🟡 **Requested again 2026-01-26, confirmation letter promised — no source records the outcome** (§5)
- **Process notes (→ future SOP):**
  - **The FDOR does not always process a closure request it has received.** Here it received the request by email, and simply had not acted on it — visible only because the firm called.
  - **An unprocessed closure keeps generating bills.** On the 2026-01-26 call the agent **paused the bills** so they would not escalate while the closure was pending. That pause is a thing to ask for by name.
  - **A closure request that is not working can be re-sent by email** to the FDOR's taxpayer-services contact address (in the Drive record) rather than only by phone.

### Bookkeeping & monthly close
- **Applies?** **It did** — this was a bookkeeping client _(Lilian, 2026-08-12)_
- **Cadence:** _(pending)_

### Income tax
- **Applies?** _(pending — whether a final return was owed and filed is unrecorded)_

### Licenses & other filings
- **Applies?** _(pending)_

## 5. Key facts & quirks

> ⚠️ **Order these by consequence — only the first FOUR are published.** Both the Knowledge
> Hub and the client-intelligence review dashboard render **only the first four top-level
> bullets** of this section (and of §6's "Outstanding items"); a fifth never appears on
> either. So put first whatever would cause the worst mistake if someone didn't know it —
> **not** the oldest, and **not** whatever was added last. **Adding a bullet is a decision
> about where it goes**; appending to the end means the team never sees it. The cap lives in
> `clientCard()` — see the [render README's parsing contract](../../../.claude/skills/client-intelligence/render/README.md).

- 🔴 **The reemployment-tax account's closure was still unconfirmed the last time anyone wrote anything down (2026-01-26).** The FDOR agent re-submitted the request, **paused the bills**, and promised a confirming letter, with a callback due in **2–3 weeks**. **No record of that callback, that letter, or the closure exists in anything the firm can reach.** Left open deliberately — silence is not resolution.
- **The two accounts behaved completely differently, and that is the lesson.** The **sales-tax** account closed cleanly. The **reemployment-tax** account took a request the FDOR received and did not process, a phone call four months later to discover that, and a re-submission. **Closing one Florida account tells you nothing about the other.**
- ⚠️ **There is a disagreement on the record about the last payroll quarter filed, and nobody settled it.** On **2025-10-30** the FDOR told Lilian they had received a payroll report for **Q3 2024**; Julia's position was that the last one filed was **Q2**. It matters, because it decides the correct closure date — and the effective date the firm later asked for, **2024-09-30**, is the end of Q3. **Both versions are recorded here with their sources and the fact is unsettled** _(the standing contradiction rule)_.
- **Lilian flagged a limit on her own FDOR calls, and it is worth knowing.** She noted she could not ask everything she wanted because she was speaking as the accountant and some questions would have looked wrong coming from one. Where a call's record looks thin, that is often why — and the fix is to agree the questions before the call.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2026-08-13 — **File created** from Lilian's own call notes, kept on her phone before the firm used Claude, and created on her explicit instruction that a closed client still gets a record. _(Lilian's iCloud notes, migrated — folder "Megabai"; notes dated 2025-10-30 and 2026-01-26.)_ _(Worked by Lilian.)_
  - **2025-10-30 — FDOR call.** The **sales-tax account was successfully closed**. The **reemployment-tax account was still open** and the FDOR **could not see the firm's request on their system at all**. They said they had received a payroll report for **Q3 2024**, which conflicted with Julia's understanding that the last was **Q2** (§5). The instruction was to **submit an updated request by email** to the FDOR's taxpayer-services address.
  - **2026-01-26 — FDOR call.** The FDOR **had** received the emailed request — with an effective closure date of **2024-09-30** — **but never processed it**. The agent submitted the closure again, **paused all the bills so they would not escalate**, and **sent a letter confirming all of this**. The firm was told to call back in **2–3 weeks**, and that once processed **there would be no amount due**.
- **Nothing after 2026-01-26 is recorded anywhere the firm can reach.** Per Lilian's instruction of 2026-08-12, this is left open rather than chased or inferred.

### Tax year YYYY — the review

- _(pending)_

### Outstanding items (CI-only — never in the SOP)

- 🔴 **Did the reemployment-tax account ever close?** Last recorded state: re-requested 2026-01-26, bills paused, letter promised, callback due in 2–3 weeks. **Open.** ⓘ Deliberately not chased — see the log.
- **Settle which payroll quarter was actually last filed** (Q2 vs Q3 2024), since it decides whether **2024-09-30** was the right effective closure date.
- **Establish the company's registered legal name.** "Megabai" is how Lilian's notes refer to it; without the legal name, nothing can be looked up on Sunbiz or matched to an FDOR account.

### Information still needed

- [ ] The registered legal name and EIN
- [ ] What the business did, and who the owner was
- [ ] When the company actually closed, and whether a final income-tax return was filed
- [ ] Whether the reemployment-tax account is closed today
- [ ] Where this client's Drive folder is

## 7. Links

- **Double client:** none — see the banner at the top of this file
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending)_
