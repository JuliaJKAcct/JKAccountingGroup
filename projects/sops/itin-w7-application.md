# SOP: Preparing an ITIN application (Form W-7)

> **Status:** Draft · **Owner:** Julia · **Last updated:** 2026-08-13
>
> 🔍 **In review (Aug 2026):** written from the IRS source material while Julia was
> studying for the CAA forensic training — **Publication 5726** (the mandatory
> Acceptance Agent training), **Publication 1915**, Publication 4327, Publication
> 519 and Publication 901. It is a **procedure from the publications, not yet from
> a filed application**. Correct it the first time we actually prepare a W-7.
> Remove this note then.

How the firm prepares and submits a **Form W-7, Application for IRS Individual
Taxpayer Identification Number** — the eligibility gate, the reason box, the
documents, the signatures, and the errors that get an application rejected.

**This is the companion to
[`irs-certifying-acceptance-agent.md`](./irs-certifying-acceptance-agent.md)**,
which covers getting the firm *authorized*. Sections marked **CAA only** apply
once that authorization is signed; everything else applies whether we are acting
as a Certifying Acceptance Agent or simply helping a client file.

> **Where client data goes:** the applicant's passport, birth certificate, visa,
> addresses, dates of birth, the filled-in W-7 and W-7(COA) are **sensitive** and
> belong in the client's folder in **Google Drive / Double** — **never** in this
> repo. This file keeps only the procedure.

---

## The process at a glance

The first question is not "how do we fill this in" — it is **"is this person even
allowed to have an ITIN?"** An individual eligible for a Social Security Number
is **not** eligible for an ITIN.

```mermaid
flowchart TD
  A["§1 SSN gate — is the applicant eligible for an SSN?"] --> B{"Eligible?"}
  B -->|"yes"| C["Send them to the SSA — no ITIN"]
  C --> D{"SSA refuses?"}
  D -->|"yes"| E["Get the SSA denial letter — it must be attached"]
  D -->|"no"| F["They get an SSN. Done — no W-7."]
  B -->|"no"| G["§2 Reason box a–h + tax status (resident vs nonresident)"]
  E --> G
  G --> H{"Is a U.S. tax return attached?"}
  H -->|"no"| I["§3 Claim one of Exceptions 1–5 + attach its proof"]
  H -->|"yes"| J["§4 Complete lines 1a–6g"]
  I --> J
  J --> K["§5 Supporting identification documents — the 13-document list"]
  K --> L["§6 Signatures + the Acceptance Agent's Use ONLY block"]
  L --> M["§7 CAA only: authenticate + attach Form W-7(COA)"]
  M --> N["§8 Assemble and mail the package to Austin"]
  N --> O["Documents returned within ~60 days · ITIN arrives as an assignment letter"]
```

---

## 0. What an ITIN is — and the three things to tell every client

An ITIN is a **tax processing number** issued by the IRS to certain resident and
nonresident aliens, their spouses and dependents, who need a taxpayer
identification number for federal tax purposes but **cannot get an SSN**.

Say these three out loud, every time — clients routinely believe otherwise:

1. An ITIN is for **federal tax reporting only**.
2. An ITIN **does not authorize work** in the U.S. and **does not change
   immigration status**.
3. An ITIN does **not** make anyone eligible for the **Earned Income Tax Credit**.

**Two operational facts that surprise people:**

- **A return cannot be e-filed with an ITIN in the year the ITIN is received.**
  If the applicant receives their ITIN this year, no return using it — including
  prior-year returns — can be e-filed until next year.
- **Spouses and dependents should not apply for, or renew, an ITIN** unless they
  are filing their own return or are **claimed for an allowable tax benefit**,
  and are listed on an attached return with the schedule or form that carries
  that benefit.

---

## 1. The SSN gate — settle this before touching Form W-7

**We are responsible for determining whether the applicant is eligible for an
SSN before completing Form W-7.** An individual eligible for an SSN is **not**
eligible for an ITIN.

1. **If they are eligible** → send them to the **Social Security Administration**
   to apply (Form SS-5).
2. **If the SSA will not issue one** → they must obtain a **denial letter**, and
   it is **attached to the Form W-7**. Without it the application is rejected.
   *(This applies to people holding a visa from the U.S. Department of State that
   would enable them to obtain an SSN.)*
3. **Unsure?** Check `ssa.gov` before proceeding.

**Two groups who do NOT have to go to the SSA first:**

- **Students on an F, J or M visa** who will not be employed and are in the U.S.
  only to study.
- **People receiving only honoraria payments.**

For these, a letter from the **Designated School Official (DSO), Responsible
Officer (RO) or Authorized School Official** is submitted instead of an SSA
letter.

---

## 2. The reason box (a–h) and the applicant's tax status

**Tax status first.** Someone who is a "nonresident alien" for immigration
purposes may be a **resident alien for tax purposes**. Work it out before
choosing the box — the two authorities are:

- **Publication 519**, *U.S. Tax Guide for Aliens* (residency, the substantial
  presence test)
- **Publication 901**, *U.S. Tax Treaties* (whether a treaty benefit applies, and
  which article)

**Then check the box (a–h) that best describes the reason.** If more than one
could apply, check the **one that best explains** why they are applying — not
several. Checking invalid combinations (for example **a and b** together) is the
IRS's **#1 most common error**.

**Two rules on top:**

- **Claiming a treaty benefit under box "a" or "f"?** You must **also check box
  "h"** and enter the tax treaty information on the lines below it.
- **Box "h" (Other)** is for anything not covered by a–g. Enter the **exception
  number, alpha subsection and category** on the line beside it — e.g.
  `Exception 1d-Pension Distributions`.
- **If a treaty is claimed, the treaty country must match the country on Line 3.**

---

## 3. The five Exceptions — when no tax return is attached

Normally a **valid U.S. federal income tax return must be attached** to the
Form W-7. There are five exceptions; if one applies, **proof of the exception is
submitted in place of the return**.

| Exception | What it covers |
|---|---|
| **1** | **Third-party withholding on passive income** — the applicant owns an asset generating income subject to IRS information reporting / withholding this tax year. **The proof differs by sub-exception:** **1(a)** takes a **copy of the portion of the partnership or LLC agreement** showing the partnership's name and EIN, and the applicant's name and signature, establishing that they are a partner in a partnership conducting business in the U.S. **1(b)–1(d)** take an **original signed letter on official letterhead from the bank, financial institution or withholding agent** (1d covers pension and annuity distributions). |
| **2** | **Wages / salary / compensation and honoraria with treaty benefits claimed · scholarships, fellowships and grants (with or without treaty benefits) · gambling winnings with treaty benefits.** Generally needs the **SSA denial letter**; honoraria-only and non-working F-1/J-1/M-1 students use the school-official certification letter instead. Gambling winnings are only processed under this exception when submitted **through the gaming official acting as an authorized Acceptance Agent**. |
| **3** | **Third-party reporting of mortgage interest** — a first-time filer securing a home loan whose lender reports on Form 1098. Attach evidence of the home mortgage loan. |
| **4** | **Third-party withholding on the disposition by a foreign person of a U.S. real property interest** (FIRPTA) — including a notice of non-recognition under Reg. §1.1445-2(d)(2). |
| **5** | **TD 9363 reporting requirement.** |

> **Exception documentation is not a substitute for identity documents.** It
> replaces the *tax return*, nothing else — the supporting identification
> documents in §5 are still required. It is attached by **both** AAs and CAAs, and
> it is **not** described on the W-7(COA) — with one carve-out: **partnership
> agreement information when Exception 1(a) is claimed.**

Detailed exception tables and completed examples are in **Publication 1915**.

---

## 4. Line by line — the lines that get people rejected

| Line | What goes in it |
|---|---|
| **Application type** | New ITIN **or** renewal. If **renewal**, lines **6e and 6f** must be completed. |
| **1a — Legal name** | Exactly as it appears on the identifying documents, and **the same name on any attached tax return**. Watch for **two surnames, hyphens and apostrophes** — common in our client base and a frequent source of mismatch. |
| **1b — Name at birth** | Only if different from 1a. If the name changed by marriage but the surname is again the birth surname, leave it blank. On a **renewal with a changed legal name**, attach the marriage certificate or court order. |
| **2 — Mailing address** | Where the IRS **returns the original documents** and sends all ITIN correspondence. If the client moves before the ITIN arrives, file **Form 8822** immediately. |
| **3 — Foreign address** | **Complete non-U.S. address, even if identical to Line 2.** If they no longer have a permanent foreign residence, enter **only the country** where they last resided. **No P.O. Box, no "c/o".** If a treaty is claimed, this country must match the treaty country. Reason **"b"** always requires a complete foreign address here. |
| **4 — Birth information** | Date as **MM/DD/YYYY**. Country of birth must be **recognized by the U.S. Department of State**. City / state / province if available. |
| **5 — Gender** | Male or female. |
| **6a — Citizenship** | Full country name, **never abbreviated**. Dual citizenship: both, separated by `/`. |
| **6b — Foreign tax ID** | If their country of residence issued one (e.g. a Canadian Social Insurance Number). |
| **6c — U.S. visa** | Type, number and expiration: `B-1/B-2, 123456, 12/31/2020`. **Attach any I-20 / I-94.** If issued for duration of stay, enter **`D/S`**. |
| **6d — ID documents submitted** | Tick the document type; enter **issuer, document number, expiration date (MM/DD/YYYY)**. **Use only one document's details here** — a second document goes on an attached sheet in the same format. Also carries the **date of entry into the United States**; if they have never entered, write **"Never entered the United States"**. |
| **6e / 6f — Previous ITIN or IRSN** | If they were ever issued either, tick **Yes** on 6e and give the number and the name it was issued under on 6f. Otherwise **No / Do not know**. |
| **6g — College / university / company** | Only when box **"f"** was checked. Name of the institution, city and state, and the length of stay — or the equivalent for a company if they are here temporarily on business. |

---

## 5. Supporting identification documents

Documents prove **foreign status**, **identity** and, where required,
**U.S. residency**. They must be:

- **Original**, **or**
- **Certified copies from the issuing agency** — or certified by a U.S. embassy
  or consulate abroad.

> ⚠️ **A certified copy from the issuing agency is NOT the same as a notarized
> copy. Notarized documents are not accepted.** The single exception is below.

**Current means current:** birth certificates have no expiry and are always
current; a **passport or national ID card showing an expiration date is only
acceptable if it has not expired before the date the W-7 is submitted**.

### The 13 acceptable documents

1. **Passport** — *the only stand-alone document* (proves both identity and
   foreign status)
2. USCIS photo identification
3. Visa issued by the U.S. Department of State
4. U.S. driver's license
5. U.S. military identification card
6. Foreign driver's license
7. Foreign military identification card
8. National identification card *(current, with name, address, photograph, date
   of birth and expiration date — e.g. the Mexican Matrícula)*
9. U.S. state identification card
10. Foreign voter's registration card
11. Civil birth certificate †
12. Medical records *(dependents under 6 only)* †
13. School records *(dependents under 24 only, if a student)* †

† *May establish foreign status only if the document is foreign.*

**If no passport is provided:** at least **two** documents, **one bearing a
recent photograph** — except children under 14 (under 18 if a student).
**A dependent's documentation must include a civil birth certificate unless a
passport is submitted.**

**Copies of a passport must include the U.S. visa pages** if a visa is required
for the application. If a document has information on **both sides**, the copy
must show **both sides**. Foreign-language documents may be asked for a
**certified English translation**.

### The dependent rules — the part that gets missed

> ⚠️ **These are TWO separate tests, and merging them is the classic mistake.**
> One asks whether the passport can stand alone; the other asks whether U.S.
> residency must be proved at all. They have different carve-outs, and the ODC
> condition belongs to only one of them.

**Test 1 — can the passport stand alone?** A passport **without a date of entry
into the United States** is **not** accepted as a stand-alone document for a
dependent, unless the dependent is:

- from **Canada or Mexico**, **or**
- a dependent of **U.S. military personnel stationed overseas**.

*(No tax-benefit condition applies to this test.)*

**Test 2 — must U.S. residency be proved?** A dependent must **also prove U.S.
residency**, unless:

- they are a dependent of **U.S. military personnel stationed overseas**, **or**
- they are **from Canada or Mexico *and*** are claimed for an allowable tax
  benefit **other than** the Credit for Other Dependents (ODC).

**Read that second bullet carefully — the ODC condition attaches only to the
Canada/Mexico branch.** A dependent of U.S. military stationed overseas is
excused from proving residency *whatever* they are claimed for; a Canadian or
Mexican dependent claimed **only for ODC** must prove residency.

**Proof of U.S. residency, by age:**

| Dependent's age | Acceptable proof of U.S. residency (in addition to the passport) |
|---|---|
| **Under 6** | U.S. medical record · U.S. school record · U.S. state ID card · U.S. visa |
| **6 to under 18** | U.S. school record · U.S. state ID card · U.S. driver's license · U.S. visa |
| **18 and older** | U.S. school record (under 24 only) · U.S. state ID card · U.S. driver's license · U.S. visa · U.S. bank statement · U.S. rental statement · U.S. utility bill from a U.S. property showing the applicant's name and U.S. address |

**A dependent must be a U.S. citizen or resident alien, or reside in Mexico or
Canada** — submitting a W-7 for a dependent who is neither is a top-10 error.

**What a medical record must contain** (dependents under 6):

- An official document — a shot/immunization record, or a **dated, signed** letter
  from the medical provider **on official letterhead**
- The applicant's **name, date of birth and address** (a **U.S.** address if U.S.
  residency must be proved)
- **Date of medical care within 12 months** before the W-7 date
- The **doctor's name and the facility's address** (U.S. address if residency
  must be proved)
- A **combination** of official documents may be used to cover all of it

**What a school record must contain** (dependents under 24, students):

- An official document — a report card, transcript, or a **dated, signed** letter
  from a school official **on letterhead**
- The applicant's **name and address** (U.S. if residency must be proved)
- **Record of attendance or coursework with grades**
- The **school's name and address** (U.S. if residency must be proved)
- **School term dates ending no more than 12 months** from the W-7 date
- A **combination** of official documents may be used

**The one notarized-copy exception:** spouses and dependents of **U.S. military
personnel** may submit **notarized copies**, provided a **copy of the
servicemember's U.S. military ID** is included and the applicant is applying
**from an overseas or APO/FPO address**. (Military spouses use box **"e"**;
dependents use box **"d"**.)

---

## 6. Signatures

| Situation | Who may sign |
|---|---|
| **Dependent under 18** | The applicant, the applicant's **parent**, or a **court-appointed guardian** (attach the court-appointment papers). |
| **Dependent 18 or older** | The applicant, a **court-appointed guardian**, or anyone granted **Power of Attorney** (attach the guardianship documents or **Form 2848**). Anyone other than the applicant signs in the space provided **and ticks the box showing their relationship**. |
| **Applicant cannot sign** | They sign their **mark** (an "X" or a thumbprint) **in the presence of a witness**; the **witness signs and is identified as a witness**. |

**A substitute Power of Attorney** must contain every element of Form 2848, and a
foreign-language POA needs a **certified English translation**.

> ⏱ **The five-day rule.** The application is dated when signed, and must be
> **signed and submitted by the AA or CAA within five (5) business days.** Do not
> let a signed W-7 sit in a folder.

### The "Acceptance Agent's Use ONLY" block

Every application we submit as an agent carries:

1. The **signature and title of the Responsible Party**, matching the person on
   our Acceptance Agent application
2. The **date signed**, MM/DD/YYYY
3. The **business name under which we were established as an Acceptance Agent**,
   with **phone and fax numbers**
4. Our **EIN** and our **Office Code Number** — an **8-digit number assigned to us
   by the ITIN Policy Section** once the agreement is approved. *(The IRS derives
   it from our EFIN, preceded by two zeros — which is why it looks familiar. That
   is the IRS's bookkeeping after approval; the EFIN itself never goes on the
   Acceptance Agent application.)*

---

## 7. CAA only — authenticating documents and Form W-7(COA)

**The difference between the two agent types** (Rev. Proc. 2006-10):

- An **Acceptance Agent (AA)** reviews the documents and **attaches the originals
  or issuing-agency certified copies** to the Form W-7.
- A **Certifying Acceptance Agent (CAA)** **reviews and validates** the documents
  and identifies them on **Form W-7(COA)** — so the client keeps the originals.

**What a CAA may authenticate:**

| Applicant | May authenticate | Must still be original / issuing-agency certified |
|---|---|---|
| **Primary** | All supporting identification documents **except the foreign military identification card** | Foreign military ID card |
| **Secondary** | Same | Foreign military ID card |
| **Dependent** | **Passport and birth certificate only** | **Every other document** |

**Form W-7(COA), Certificate of Accuracy:**

1. Completed and **signed — only by an approved Responsible Party**
2. **Identifies the specific type** of foreign-status and identity document
   attached (passport, birth certificate, visa…)
3. **Attached to every submitted Form W-7**
4. **Declares that we reviewed the documentation and certify it is authentic,
   complete and accurate**, per the procedures in our signed CAA agreement

**Copies of the documents go with it** — for the primary and secondary applicant,
and for the dependent's passport and birth certificate.

---

## 8. Assembling and mailing the package

**What goes in the envelope:**

1. **Form W-7** (or **W-7(SP)**) — always the **most current revision**
2. The **valid U.S. federal income tax return**, *or* the **exception
   documentation** in its place
3. The **supporting identification documents** — originals / issuing-agency
   certified copies, or (CAA) copies with the **W-7(COA)**
4. The **SSA denial letter**, if applicable
5. **I-20 / I-94**, if applicable
6. **Form 2848 / guardianship papers**, if anyone but the applicant signed

**Where it goes:**

```
Internal Revenue Service
ITIN Operations
P.O. Box 149342
Austin, TX 78714-9342
```

Private delivery service (street address):

```
Internal Revenue Service
ITIN Operations
Mail Stop 6090-AUSC
3651 S. Interregional Hwy 35
Austin, TX 78741-0000
```

> ⚠️ **If the tax return is attached to the W-7, do NOT use the mailing address
> from the tax return's instructions**, and do not send a copy of the return to
> any other IRS office.

**After mailing:**

- **Original documents are returned within ~60 days.** No return envelope is
  needed; the applicant may include a **prepaid Express Mail or courier envelope**
  for faster return. **Copies are not returned.** If originals have not come back
  in 60 days, call the IRS.
- The ITIN arrives as an **assignment letter**.
- **As a CAA we can call the Austin ITIN Unit for status**, and we **receive a
  copy of every ITIN notice** sent to the applicant.

---

## 9. Renewals and expiration

- An ITIN **not included on a U.S. federal tax return at least once in the last
  three consecutive tax years expires on December 31 of that third year** and must
  be renewed before it is used again.
- **ITINs assigned before 2013 that were never renewed have expired.**
- **Renew only when there is a federal tax filing purpose.** A renewal is a
  Form W-7 with the return attached (unless an exception applies) and the
  identification documents again — same package, same address.
- On a renewal, complete **lines 6e and 6f**, and attach documentation for any
  **legal name change**.

---

## 10. The IRS's top 10 Form W-7 errors

Check every one of these before the envelope closes — an application with any of
them is **suspended or rejected**.

1. **Not checking the right alpha box (a–h)**, or checking an **invalid
   combination** (e.g. a *and* b).
2. **Not attaching supporting identification documentation** proving identity,
   foreign status or U.S. residency. **At least one document must carry a recent
   photograph — except a dependent under 14 (under 18 if a student).** *(Pub 5726
   restates this loosely as "under 18"; use the Form W-7 instructions' age above,
   which is narrower and is the rule that will be applied.)* *(CAAs: the W-7(COA)
   plus document copies — and only passport and birth certificate for
   dependents.)*
3. **Not attaching a valid U.S. tax return** to show a tax purpose, without
   meeting one of Exceptions 1–5.
4. **Attaching documents that are not on the 13-document list.**
5. **A W-7 for a dependent who is not shown on the attached return**, or not
   claimed for an allowable tax benefit.
6. **A W-7 for a dependent who is not a U.S. citizen or resident alien and does
   not reside in Mexico or Canada.**
7. **No foreign address on Line 3** where one is required (always for reason
   "b"); if there is no current foreign residence, the **most recent** one.
8. **Incomplete birth information on Line 4.**
9. **Line 6d incomplete** — in particular the **date of entry into the U.S.**
10. **The form was not properly signed** — the applicant did not sign as their
    name appears on Line 1, or the signer was not an eligible signer for the
    applicant's age (see §6).

---

## 11. Contacts & links

| For | Where |
|---|---|
| The mandatory Acceptance Agent training | [Publication 5726](https://www.irs.gov/pub/irs-pdf/p5726.pdf) |
| The main ITIN reference — exceptions, examples, FAQs | [Publication 1915](https://www.irs.gov/pub/irs-pdf/p1915.pdf) |
| The agent's operating guide | [Publication 4520](https://www.irs.gov/pub/irs-pdf/p4520.pdf) |
| Bilingual client-facing ITIN brochure (EN/ES) | [Publication 4327](https://www.irs.gov/pub/irs-pdf/p4327.pdf) |
| Resident vs nonresident, substantial presence | [Publication 519](https://www.irs.gov/pub/irs-pdf/p519.pdf) |
| Treaty benefits, article by country | [Publication 901](https://www.irs.gov/pub/irs-pdf/p901.pdf) |
| Who qualifies as a dependent | [Publication 501](https://www.irs.gov/pub/irs-pdf/p501.pdf) |
| Form W-7 line-by-line | [Instructions for Form W-7](https://www.irs.gov/instructions/iw7) |
| The Certificate of Accuracy | [Form W-7 (COA)](https://www.irs.gov/pub/irs-pdf/fw7coa.pdf) |
| SSN eligibility | [ssa.gov](https://www.ssa.gov) |
| IRS help (U.S.) | 1-800-829-1040 |
| IRS help (outside the U.S., not toll-free) | 1-267-941-1000 |
| Taxpayer Assistance Center appointments | 1-844-545-5640 |

---

## Appendix — pre-submission checklist

Copy into the client's folder and work through it before the package is sealed.

```
ITIN W-7 CHECKLIST — <applicant>

GATE
☐ SSN eligibility determined      ☐ SSA denial letter attached (if applicable)
☐ Tax status determined (resident / nonresident) — Pub 519
☐ Treaty benefit? ☐ No ☐ Yes → article ______ · country matches Line 3 ☐

THE FORM
☐ New ☐ Renewal (→ lines 6e + 6f completed)
☐ ONE reason box a–h checked · no invalid combination
☐ Box h used? → exception number + subsection + category written on the line
☐ Line 1a name matches the documents AND the attached return
☐ Line 3 complete foreign address (no P.O. Box, no c/o)
☐ Line 4 birth date + country recognized by the Dept. of State
☐ Line 6c visa type/number/expiry · I-20 or I-94 attached
☐ Line 6d issuer + number + expiry + date of entry into the U.S.

DOCUMENTS
☐ Passport (stand-alone)
   OR ☐ two+ documents, one with a recent photograph
        (photo not required for a dependent under 14 — under 18 if a student)
☐ Dependent: civil birth certificate present (unless passport)
☐ Dependent TEST 1 — passport shows a U.S. date of entry?
   ☐ Yes  ☐ No, but from Canada/Mexico or a dependent of US military overseas
☐ Dependent TEST 2 — residency proof needed?  (skip only if a dependent of US
   military overseas, or from Canada/Mexico AND claimed for a benefit other
   than ODC)   ☐ Not needed  ☐ Provided for the age band
☐ All originals or issuing-agency certified copies (NOT notarized)
☐ Nothing expired as of the submission date
☐ Both sides copied where the document is two-sided
☐ Passport visa pages included where a visa is required

RETURN OR EXCEPTION
☐ Valid U.S. federal tax return attached
   OR ☐ Exception ___ claimed + its proof attached

SIGNATURES
☐ Signed by an eligible signer for the applicant's age
☐ Form 2848 / guardianship papers attached if not the applicant
☐ Witness signature if signed by mark
☐ Acceptance Agent's Use ONLY: RP signature + title · date · business name ·
  phone/fax · EIN · 8-digit Office Code

CAA ONLY
☐ Form W-7(COA) completed, signed by an approved Responsible Party
☐ Document types named on the COA
☐ Copies attached (primary/secondary: all; dependent: passport + birth cert only)
☐ Anything we may NOT authenticate sent as original / issuing-agency certified

SEND
☐ Signed and submitted within 5 business days of the signature date
☐ Mailed to ITIN Operations, Austin (NOT the tax return's address)
☐ Copy of the whole package filed in the client's folder
```
