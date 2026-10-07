# Rest Invest Kids LLC

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-10-07

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

- **Business name:** Rest Invest Kids LLC
- **Entity type:** LLC — **foreign-owned U.S. disregarded entity, files a PRO FORMA Form 1120 (+ Form 5472)** — ⚠️ inferred from the 2025 return's **filename** in Double (`…ForeignOwnedUSDEPro…`), not from its content; Double's `Tax Return Type` reads `1120`
- **Home state:** Florida (mailing address in St. Petersburg FL, per the FDOR notice)
- **Industry / what they do:** _(pending)_ — part of the **iKids owner group** (see [iKids Group LLC](./ikids-group.md) §5)
- **Primary language:** Russian / Ukrainian (owner group) _(pending — confirm for this entity)_
- **Our engagement (services we provide):** income tax (the federal pro forma 1120 / 5472) and the annual report _(Double properties: Income Tax ✓, Annual Report ✓, Bookkeeping N/A, 1099 prep ✗)_. **Assigned staff: Lilian.**
- **Fiscal year-end:** December (the FDOR notice is for tax year ending 12/2025)
- **Accounting platform:** none connected in Double (`platform: none`)
- **EIN:** 38-4306118

## 2. Contacts

| Role | Where to find them |
|---|---|
| Owner (single member) — **a foreign INDIVIDUAL, resident in Ukraine, holds an ITIN** _(Lilian, 2026-10-07)_ | Double client |
| Day-to-day contact | Shared with the iKids owner group — see [iKids Group LLC](./ikids-group.md) §2 |

- **Double client:** https://app.doublehq.com/close?cid=710592 (client `710592`)
- **Double case note:** _(none yet)_

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Florida Department of Revenue | An FDOR **corporate income tax** account exists for this entity (it is what generated the 2026 notice) | _(pending)_ | Business Partner / Contract Object numbers are printed on the DR-714 notice — kept off the repo |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** _(pending)_

### Payroll
- **Applies?** _(pending)_

### Bookkeeping & monthly close
- **Applies?** No — Double `Bookkeeping` property is `N/A`.

### Income tax
- **Applies?** Yes.
- **Return type(s) & deadlines:** federal **pro forma Form 1120 + Form 5472** (foreign-owned disregarded entity), due **April 15** for a calendar year. Double's "2025 Taxes" project reads **`filed`**, `filedAt` 2026-05-25; an e-file **acceptance** document for 2025 is in the file library.
- **Florida:** ✅ **NO Florida F-1120 is required** — disregarded single-member LLC whose owner is an **individual**, and Florida has no personal income tax (§5). The pro forma 1120 does not change that. FDOR's DR-714 for 12/2025 must still be **answered** so the corporate income tax account is closed (§6).
- **Our role:** we prepare and file.

### Licenses & other filings
- **Applies?** Yes — Florida annual report (Double `Annual Report` ✓). _(details pending)_

## 5. Key facts & quirks

- 🔴 **FDOR sees this LLC as a CORPORATE income tax filer — and for a disregarded LLC that is normally wrong.** A DR-714 notice (dated 2026-09-09 per the filename it was saved under) says no **Florida F-1120** was received for the tax year ending 12/2025. The likely cause is that the federal filing is a **pro forma Form 1120** — an "1120" on the IRS side, though the LLC is disregarded for income tax. **Florida follows the federal classification**: a disregarded single-member LLC is **not** required to file a separate F-1120 (the notice's own page 2 says so). ✅ **Settled 2026-10-07: the owner is a foreign INDIVIDUAL (Lilian), so no F-1120 is owed by anyone.** The pro forma 1120 exists only because Treas. Reg. §301.7701-2(c)(2)(vi) treats a foreign-owned disregarded entity as a corporation **solely for the Form 5472 / §6038A reporting** — for every other purpose it stays disregarded, and Florida follows the federal classification. Reply "not required" and ask FDOR to close the account.
- ⓘ **Owner group:** related to [iKids Group LLC](./ikids-group.md) (activated alongside it). A **"Rest Invest Kyiv"** — similar name, a Ukrainian supplier — invoiced iKids for kitchen equipment in Sept 2026 (iKids §6). ⚠️ **Whether Rest Invest Kyiv is this LLC's owner is NOT known — do not assume it.**
- ⓘ The iKids **2026-08-13 Zoom meeting note** (Double note `491708`) is filed on **this** client's record, not on iKids'.

## 6. History & open questions

### Log
- 2026-10-07 — **File created.** Lilian brought an FDOR **DR-714** non-filing notice ("We have not received your Florida corporate tax return(s)", tax year ending 12/2025; form revision R. 08/24) and asked how to identify it on a call to FDOR and what the tax theory is. Double read the same day: properties (above), the "2025 Taxes" project (`filed`, 2026-05-25), and the file library — three files: `2024 Tax Return Documents (REST INVEST KIDS LLC) (4).pdf`, `2025 Acceptance.pdf`, `2025 RESTINVESTKIDSLLCForeignOwnedUSDEPro_1.pdf` (**names only — contents not opened**). Explanation given in chat: Florida follows the federal classification; a disregarded SMLLC files no F-1120 unless its owner is a corporation, in which case the owner files. _(Worked by Lilian.)_
- 2026-10-07 — **Lilian confirmed the owner is a foreign individual resident in Ukraine, with an ITIN.** Conclusion given: **no Florida F-1120 is required**; answer the DR-714 under section 2 → "Other" and ask FDOR to close the corporate income tax account. _(Worked by Lilian.)_

### Outstanding items (CI-only — never in the SOP)
- 🔴 **Answer the FDOR DR-714 (tax year 12/2025).** Owner confirmed an individual (2026-10-07), so: notify FDOR that the LLC is a disregarded single-member LLC not required to file F-1120 (section 2 → "Other", or online at floridarevenue.com/taxes/updateaccount) and ask them to close the corporate income tax account. Penalty language on the notice: 10% collection fee, lien, collection agency — **do not let it sit.** Talking to FDOR about the account will likely require a **DR-835** power of attorney (as on [Tsminibears](./tsminibears.md)).
- Find out **why an FDOR corporate income tax account was opened** for this LLC (a registration by someone, or the IRS 1120 data) — if it is not closed, the notice repeats every year.
- Check whether a notice for **2024** also exists.

### Information still needed
- [x] Owner: a foreign **individual**, resident in **Ukraine**, with an ITIN _(Lilian, 2026-10-07)_
- [ ] What the LLC does / whether it is operating
- [ ] Whether the federal 2025 package included a Form 5472 (filename implies it)

## 7. Links

- **Double client:** https://app.doublehq.com/close?cid=710592
- **Double case note:** _(none)_
- **Google Drive folder (sensitive vault):** _(pending)_
- **Related clients:** [iKids Group LLC](./ikids-group.md) (same owner group)
- **Related SOPs:** _(none yet)_
