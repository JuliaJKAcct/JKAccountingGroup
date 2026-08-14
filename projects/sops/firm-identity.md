# JK Accounting Group — the firm's own details

> **Status:** Active · **Owner:** Julia · **Last updated:** 2026-08-14

The firm's own identity, in one place, because **other people's forms keep asking for
it** — the SS-4's Third-Party Designee block, a Form 2848 or 8821, a Business Tax
Receipt application, the CAA application. Before this file the values were scattered:
the phone numbers inside the email signatures, the letterhead convention inside the
proposal tool's docs, the address and fax inside one SOP. Nobody could answer *"what is
our fax number?"* without knowing which project to open.

**This is a reference sheet, not a procedure.** It says what our details *are*; the
SOPs say where each one goes.

> ⛔ **This file does NOT govern the proposal tools, and nothing here may be used to
> change them.** The proposals and engagement letters in
> [`projects/proposal-tool/`](../proposal-tool/) produce output **Julia fixed and wants
> preserved exactly as it is** _(Lilian, 2026-08-14)_. Those tools carry their own
> hard-coded letterhead on purpose. **If a value in this file ever disagrees with what a
> proposal prints, the proposal is right** — add a note here explaining the difference;
> do not "harmonize" the tool. The one known difference is deliberate and is in §3.

> **Where the brand lives instead.** How the firm *looks* — logo, palette, type, the
> design system — is [`brand/`](../../brand/), and this file never duplicates it. This
> is only the factual identity: names, numbers, addresses.

---

## 1. The firm

| Field | Value |
|---|---|
| **Trading name** | JK Accounting Group |
| **Exact legal entity name** | ⚠️ _(pending — nobody has written down whether it is an LLC, Inc. or PA. **Form 2848's representative block and the CAA application both need it exactly right**, so this is worth five minutes on Sunbiz)_ |
| **Federal EIN** | ⚠️ _(pending — required for the [CAA application](./irs-certifying-acceptance-agent.md); it is public information and belongs here once someone writes it down)_ |
| **Street address** | **11347 SW 13 Street, Pembroke Pines, FL 33025** — the company's registered address, public on Sunbiz |
| **Main phone** | **(786) 318-1505** — this is **Julia's direct line**, doubling as the number the firm's documents carry |
| **Fax** | **(786) 866-6298** |
| **Website** | www.jkaccountinggroup.com |
| **Email** | `firstname@jkaccountinggroup.com` — see §2 for the exact addresses |

## 2. The people

| Person | Role | Direct line | Email | May they act for a client before the IRS? |
|---|---|---|---|---|
| **Julia Kononova**, MBA, **EA** | CEO · Chief Accountant | (786) 318-1505 | `julia@` | ✅ **Yes — Enrolled Agent.** Form 2848 Part II designation **(c)**; needs her **enrollment card number**, which is ⚠️ _(pending)_ |
| **Lilian Gonzalez** | Client Success Manager | (754) 286-1478 | `lilian@` | ⚠️ **Not as a representative** — see §4. She can be an **SS-4 third-party designee** and a **Form 8821 designee** |
| **Maria Zavarce** | Senior Accountant | (786) 318-1315 | `mariaf@` | _(pending — does she hold a CPA/EA/PTIN?)_ |
| **Liudmyla Kazannik** | Bookkeeper | (786) 318-1369 | `liudmylak@` | _(pending)_ |

_(Source for names, roles, direct lines and emails: the firm's own
[email signatures](../marketing/email-branding/signatures/), which are the master copy —
if a number changes, change it there **and** here.)_

> ⚠️ **Julia's title is not one value.** Her email signature carries **"CEO · Chief
> Accountant."** On **proposals and engagement letters her title is "Chief Accountant",
> never "CEO"** — a standing firm rule recorded in the
> [`proposal-generator` skill](../../.claude/skills/proposal-generator/). **Both are
> correct in their own place.** Do not make them agree.

## 3. Which paperwork asks for what

| Where | What it wants | Which value |
|---|---|---|
| **SS-4 — Third-Party Designee block** ([EIN SOP §4D](./ein-application-irs.md)) | name · address · phone · fax | **Lilian Gonzalez** · the street address · **(754) 286-1478** · **(786) 866-6298**. ⚠️ Never the client's address or phone — it forces the application to mail/fax only |
| **Form 2848 — representative block** | name · address · phone · fax · CAF · PTIN | **Julia** (see §4) · the street address · her direct line · the fax. CAF and PTIN ⚠️ _(pending)_ |
| **Form 8821 — designee block** | name · address · phone · fax · CAF | Whoever needs the information — **Lilian is eligible here** (§4) |
| **Business Tax Receipt applications** ([BTR SOP](./hollywood-broward-business-tax-receipt.md)) | a monitored email | The **firm's** email — the SOP's rule is that without it the filing cannot be tracked at all |
| **Proposals & engagement letters** | letterhead | ⛔ **Not from this file.** They print **"Pembroke Pines, Florida"** (city only, no street) and **786-318-1505**, hard-coded in the tool. **This is deliberate** — a government form needs a full street address and a working fax; a client letter does not. **Leave it alone** |

## 4. Who may sign what for a client — the credential rule

This is the part that is easy to get wrong, because the three authorizations look
similar and **only one of them is open to anybody.**

| Form | What it lets the person do | Who may be named |
|---|---|---|
| **SS-4 Third-Party Designee** | Answer questions about the SS-4 and **receive the entity's EIN**. Dies when the EIN is assigned | **Anyone the client names.** No credential required — this is why Lilian is our standing designee |
| **Form 8821** — Tax Information Authorization | **Inspect and receive** the client's confidential information — *"verbally or in writing"*, so **they can call and be told things**. It does **not** let them *"speak on your behalf … advocate your position … execute waivers, consents, closing agreements; or represent you in any other manner"* | **Anyone** — *"any individual, corporation, firm, organization, or partnership you designate"* |
| **Form 2848** — Power of Attorney | **Represent** the client — argue, agree, sign, resolve | ⚠️ **Only someone eligible to practice before the IRS.** *"You may only name individuals who are eligible to practice before the IRS as representatives."* Part II designations (a)–(r): attorney, CPA, **enrolled agent**, an officer or full-time employee **of the taxpayer**, a family member, enrolled actuary, ERPA, and unenrolled return preparers under a narrow limit |

**What that means for this firm, concretely:**

- **Lilian makes the IRS calls** _(her own words, 2026-08-14: Julia very rarely does)_ — and
  she is **not** an attorney, CPA or EA. So **a Form 2848 naming Lilian is not valid.**
  The form for her is **Form 8821**, which is enough for what those calls actually are:
  getting information.
- **A Form 2848 for a client names Julia**, under designation **(c) Enrolled Agent**.
  Use it when someone has to *do* something — not merely be told something.
- 👍 **Form 8821 covers EIN work explicitly.** Its instructions list **"Form SS-4,
  Application for Employer Identification Number"** among the specific uses **not
  recorded on the CAF** — so an 8821 with `Form SS-4` in the matter column and the
  **line 4 box checked** is the IRS's own contemplated route, not a workaround.
- **Both the 2848 and the 8821 route need the entity's EIN in the taxpayer box**, so
  neither works while the EIN is still pending. That window belongs to the **SS-4
  designee block** — which is exactly why we fill it every time.

## 5. Where these values are already copied

Markdown cannot transclude, so this file is **the place to look things up and the
checklist for changing them** — not a magic single source that updates the others.
**Change a value here and then walk this list:**

| Value | Also lives in |
|---|---|
| Direct lines + emails | [`projects/marketing/email-branding/signatures/*.html`](../marketing/email-branding/signatures/) — **the master copy for these two** |
| Address + fax | [`ein-application-irs.md` §4D](./ein-application-irs.md) (the designee block, written out so nobody has to leave the form to fill it) |
| Letterhead city + main phone | ⛔ `projects/proposal-tool/` — **hard-coded and frozen. Do not touch** (§3) |
| Firm email on filings | [`hollywood-broward-business-tax-receipt.md`](./hollywood-broward-business-tax-receipt.md) |

## 6. Still missing

The gaps that will block a real filing the day someone needs them:

- [ ] **The exact legal entity name** (Sunbiz) — needed on Form 2848, Form 8821 and the CAA application
- [ ] **The firm's federal EIN** — needed for the [CAA application](./irs-certifying-acceptance-agent.md)
- [ ] **Julia's EA enrollment card number** — required in Form 2848 Part II, designation (c)
- [ ] **CAF number(s)** — for Julia, and for anyone we name on an 8821. If none has been assigned, both forms take `NONE` and the IRS issues one
- [ ] **PTIN(s)** — Julia's for Form 2848; whether Maria or Liudmyla hold one
- [ ] **Maria's and Liudmyla's practice status** — so §4 can answer for them too

---

_Sources: the firm's own [email signatures](../marketing/email-branding/signatures/)
(names, roles, direct lines, emails); the letterhead convention from the proposal tool's
own documentation, **read only, never edited**; the street address and fax **given by
Lilian on 2026-08-14**, with her explicit decision that the address is the company's
registered address, public on Sunbiz, and may be written here. **§4's rules are quoted
from the IRS instructions** — Instructions for Form 2848 (Rev. 09/2021) for the
eligible-to-practice rule and the Part II designations, and Instructions for Form 8821
(read 2026-08-14) for what an 8821 does and does not permit and for the Form SS-4
specific-use listing. **The application of those rules to named people here is the
firm's own** — that Julia qualifies rests on the "EA" in her signature, and that Lilian
does not rests on her recorded role; **neither has been checked against an IRS record**,
and the enrollment number is missing. Everything marked _(pending)_ is genuinely unknown
to this repo, not omitted for sensitivity._
