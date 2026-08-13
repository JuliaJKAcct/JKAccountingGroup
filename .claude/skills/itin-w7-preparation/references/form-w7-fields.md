# Form W-7 and Form W-7-COA — field by field

**Form W-7 (Rev. December 2024)** · **Form W-7-COA (Rev. August 2025)**

Field names and checkbox labels below are taken from the **printed forms**; the
rules from the Instructions for Form W-7, Publication 1915 and Publication 5726.
Where the printed form and a publication disagree on a label, **the form wins for
its own layout** — a publication may be describing an earlier revision.

This is the answer sheet for "what goes in this box?". The same content drives
the **Field reference** tab of the walkthrough tool
(`projects/sops/tools/itin-w7-walkthrough.src.html`) — keep them in step.

---

## Before the form

### Application type — new or renewal

Two boxes: **Apply for a new ITIN** · **Renew an existing ITIN**. Check one.

Renew when the applicant already has an ITIN that has expired or is about to. An
ITIN not appearing on a U.S. federal return at least once in the last **three
consecutive tax years** expires on **31 December of that third year**. ITINs
assigned before 2013 and never renewed have already expired. **Renew only when
there is a federal tax filing purpose.**

> **Trap.** Checking *Renew* makes lines **6e and 6f** mandatory, and a changed
> legal name needs supporting documentation attached.

---

## The reason box (check ONE, a–h)

Exact wording from the form, with what each one forces.

| Box | Form wording | Forces |
|---|---|---|
| **a** | Nonresident alien required to get an ITIN to claim tax treaty benefit | **Also check box h**; complete treaty country + article number |
| **b** | Nonresident alien filing a U.S. federal tax return | **Line 3** complete foreign address |
| **c** | U.S. resident alien (based on days present in the United States) filing a U.S. federal tax return | **Date of entry** on line 6d |
| **d** | Dependent of U.S. citizen/resident alien | **Relationship** on the dotted line; **name + SSN/ITIN of the U.S. person**; date of entry on 6d |
| **e** | Spouse of U.S. citizen/resident alien | **Name + SSN/ITIN of the U.S. person** |
| **f** | Nonresident alien student, professor, or researcher filing a U.S. federal tax return or claiming an exception | **Lines 6a, 6c, 6d, 6g**; passport with valid U.S. visa (except Canada, Mexico, Bermuda). If claiming an exception, **also check h** |
| **g** | Dependent/spouse of a nonresident alien holding a U.S. visa | Attach **copy of the visa**; date of entry on 6d |
| **h** | Other (see instructions) | Write the exception on the line beside it |

**Box a / f treaty line.** The form's "Additional information for a and f" line
takes the **treaty country and treaty article number**. Publication 901 lists the
article by country. The treaty country **must equal the country on line 3**.

**Box h wording.** Exception number, alpha subsection, category:
`Exception 1d-Pension Distributions`.

**Boxes d and e share one dotted line** asking for the **full name and SSN or
ITIN of the U.S. citizen / resident alien**. It is mandatory and the applicant
often does not have it with them — ask before the appointment.

> **Trap.** Checking an invalid combination (a *and* b) is the IRS's **error #1**.
> The only right pairs are a+h and f+h.

---

## Name

### 1a — First name · Middle name · Last name

Exactly as on the identity documents, and identical to the name on any attached
tax return. Many of our clients use **two surnames**, or names with a hyphen or
apostrophe — reproduce what the document shows; do not tidy, shorten, or drop a
second surname because the field looks short.

> **Trap.** A mismatch between 1a, the passport and the attached return is a
> leading cause of a suspended application.

### 1b — First name (name at birth if different)

Only if different from 1a. If a name changed on marriage but the surname is once
again the birth surname, leave blank. On a **renewal with a changed legal name**,
attach the marriage certificate or court order.

---

## Addresses

### 2 — Applicant's mailing address

Street address, apartment number or rural route; then city or town, state or
province, country, ZIP or postal code.

This is where the IRS **returns the original documents** and sends every notice
including the ITIN itself.

**P.O. boxes:** allowed only if the U.S. Postal Service will not deliver to the
physical location, and it must be a **USPS** box — **not** a mailbox rented from
a private firm or company.

> **Trap.** If the client moves before the ITIN arrives, file **Form 8822**
> immediately, putting the ITIN or the notice reference number in the SSN field.

### 3 — Foreign (non-U.S.) address

A **complete non-U.S. address, even if identical to line 2**. If they no longer
have a permanent address abroad because they relocated to the U.S., enter **only
the country** where they last resided.

**No P.O. box. No "in care of" (c/o).**

> **Trap.** Reason **b** always requires line 3. If a treaty is claimed, this
> country must match the treaty country.

---

## Birth and identity

### 4 — Date of birth · country of birth · city and state/province

Date as **MM/DD/YYYY** — 1 January 1972 is `01/01/1972`. The country of birth
must be **recognized by the U.S. Department of State**; use its current name
where a historical name has changed. City and state/province optional.

### 5 — Gender

**Three** boxes on Rev. 12-2024: **Male · Female · Other**. Guidance that says
"male or female" predates this revision.

### 6a — Country(ies) of citizenship

**Complete country name, never abbreviated.** Dual citizenship: both, separated
by `/`. Mandatory for reason f.

### 6b — Foreign tax I.D. number (if any)

Only if the country of residence issued one — e.g. a Canadian Social Insurance
Number. Leave blank if there is none; never invent a placeholder.

### 6c — Type of U.S. visa (if any), number, and expiration date

All three on one line: `B-1/B-2, 123456, 12/31/2026`. Visa issued for duration of
stay → enter `D/S` as the expiration date. **Attach any I-20 / I-94.** Mandatory
for reason f.

### 6d — Identification document(s) submitted

**The printed form gives four tick-boxes only** — **Passport · Driver's
license/State I.D. · USCIS documentation · Other** — although **thirteen**
document types are acceptable. Anything outside the first three is written in
under *Other*.

Then: **Issued by** (state, country or other issuer) · **Number** · **Exp. date**
(MM/DD/YYYY).

**Multiple documents:** only the **first** document's details go on this line;
the rest on an attached sheet in the same format.

**Date of entry into the United States** also lives on this line, MM/DD/YYYY. If
they have never entered, write `Never entered the United States`.

> **Trap.** Reasons **c, d and g** all require the date of entry. Omitting it is
> the IRS's **error #9**.

### 6e — Previously received an ITIN or IRSN?

**No/Don't know** (skip 6f) or **Yes** (complete 6f). An **IRSN** is a temporary
Internal Revenue Service Number assigned internally — a client may have one
without knowing the term, so ask whether the IRS has ever written to them with a
number that was not an SSN. More than one → list on a sheet and attach.

### 6f — The ITIN and/or IRSN, and the name it was issued under

The number(s), then the **first, middle and last name it was issued under** —
which may not be today's name. Mandatory on every renewal.

### 6g — Name of college/university or company

Reason **f** only. The **institution's name**, the **city and state**, and the
applicant's **length of stay** in the United States. If they are here temporarily
for business rather than study, the same three for the **company**.

---

## Signatures

### Sign Here — applicant, or delegate

The applicant signs, and the signature must match **line 1a**.

If someone else signs, the form calls them a **delegate**: print the delegate's
name and tick the relationship — **Parent · Power of attorney · Court-appointed
guardian**. There is no fourth option.

| Situation | Who may sign |
|---|---|
| Under 18 | Applicant, **parent**, or **court-appointed guardian** (attach court papers) |
| 18 or older | Applicant, **court-appointed guardian**, or **parent**; anyone else needs **Form 2848** |
| Cannot sign | A **mark** (X or thumbprint) **before a witness**; the witness signs and is identified as a witness |

A substitute POA must contain every element of Form 2848; a foreign-language POA
needs a certified English translation.

> **Trap.** **A spouse cannot sign for a spouse** unless the **Power of attorney**
> box is ticked and Form 2848 is attached. Marriage is not authority to sign.

### Date signed — and the five-day clock

Dated when signed; the agent must **submit within five (5) business days**. A
signed W-7 sitting in a folder is a defect.

### Acceptance Agent's Use ONLY — nine fields

**Signature · Date · Phone · Fax · Name and title · Name of company · EIN ·
PTIN · Office code.**

The **office code** is the 8-digit number the ITIN Policy Section assigns once
the agreement is approved; the IRS derives it from the firm's **EFIN preceded by
two zeros**, which is why it looks familiar. *(The EFIN itself never goes on the
Acceptance Agent application — see the CAA SOP.)*

> **Trap.** Only a **responsible party named on the firm's Acceptance Agent
> application** may sign this block.

---

## Form W-7-COA (Rev. August 2025)

Renamed — it was **Form W-7 (COA)**, and Pub 1915, 4520 and 5726 still say so.
Used **only** by Certifying Acceptance Agents, **one per Form W-7 submitted**.

### What it asserts

That the applicant is **not eligible for an SSN**, and that the documentation
shown supports **identity**, **foreign status** and, if applicable, **residency**
— and is **authentic, complete and accurate** per the procedures in the signed
Acceptance Agent Agreement.

### The fields

1. The undersigned **responsible party**, and the **CAA business name**
2. **The date the Acceptance Agent Agreement was entered into** — find it before
   the first application, not during
3. The **Form W-7 applicant's name**
4. The **document table**, with **two tick columns: Identity | Foreign Status** —
   tick under each category the document actually supports
5. **Signature of the responsible party · date signed · EIN · office code · PTIN**

### The document table's own footnotes

- A **passport is the only stand-alone document**; without one, two or more
  documents are needed.
- The passport **must have a date of entry for dependents**, unless they meet
  certain criteria.
- **Civil birth certificate — required for applicants under 18 if a passport is
  not provided.**
- **Medical records** valid only for dependents **under 6**; **school records**
  only **under 24**.
- Medical/school/birth records establish **foreign status only if the documents
  are foreign**.

### What the COA does NOT cover

**All supplemental documentation — residency support, Exception criteria, and any
SSA denial letter — must still be attached to the Form W-7 itself.** The COA
describes identity and foreign status only.

### Retention

The form commits the CAA in writing to **retaining copies of all relevant
documents, including signed copies of the Forms W-7** relied on to certify
foreign status and identity. Those copies live in the client's folder in Drive or
Double — never in the repo.

---

## Where the package goes

```
Internal Revenue Service
ITIN Operations
P.O. Box 149342
Austin, TX 78714-9342
```

Private delivery service:

```
Internal Revenue Service
ITIN Operations
Mail Stop 6090-AUSC
3651 S. Interregional Hwy 35
Austin, TX 78741-0000
```

**Never** the address printed in the attached tax return's own instructions, and
never a copy of the return to any other IRS office.

Originals are returned in about **60 days**; copies are never returned. The
applicant may include a **prepaid Express Mail or courier envelope** for a faster
return.
