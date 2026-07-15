# SOP: Federal EIN Application (IRS Form SS-4) — after the entity is active on Sunbiz

> **Status:** Active · **Owner:** Julia · **Last updated:** 2026-07-15

The complete, self-contained procedure for getting a **federal EIN** (Employer
Identification Number) from the IRS for a company that is **already formed and
active on Sunbiz**. This is **Part 2** (the federal step) of the firm's Florida
company-formation flow — **Part 1**, the Sunbiz filing itself, is
[`florida-company-formation-sunbiz.md`](./florida-company-formation-sunbiz.md).

> **Scope note:** starts the moment the entity shows **Active** on Sunbiz and you
> have its exact legal name and formation date. Everything to obtain the EIN
> lives here — the go/no-go decision, both application paths, the answers people
> get wrong, and the after-steps.

> **Where client data goes:** the client's real legal name, address, the
> responsible party's SSN/ITIN, the filled-in SS-4, and the assigned EIN are
> **sensitive** and belong in **your client systems** (Google Drive / Double /
> QuickBooks) — **not** in this repo. Copy the blank intake at the bottom into
> the client's folder there and fill it in. This repo keeps only the reusable
> procedure + the blank template.

> 💵 **The EIN is free, direct from the IRS.** Never use a paid "EIN filing"
> site — they charge for a free government service and become an unnecessary
> middleman holding the client's data. Apply only through IRS.gov, fax, mail, or
> the IRS phone line below.

---

## 0. Intake — gather these before you touch the application

The whole application is answerable from these. Get them all first; the online
tool **times out after 15 minutes of inactivity and cannot be saved** (see §2),
so you do not want to be hunting for an answer mid-flow.

> **Where the answers come from — the client's Business Intake Form.** The firm
> sends every new client a **Business Intake Form** up front, and its answers feed
> this application. Pull the values from the client's **completed** intake form
> rather than re-interviewing; the working sheet in the appendix is just to
> transcribe the few fields this filing needs. If the form is missing something
> this filing requires (e.g. the responsible party's SSN/ITIN), that is the one
> thing to go back to the client for.

1. **Exact legal name** of the entity — spelled **exactly** as it appears on
   Sunbiz (including "LLC" / "Inc." / "Corp."). The IRS name must match Sunbiz.
2. **Sunbiz document number** and **formation/effective date** (this is the
   "date the business started," line 11).
3. **Entity type** as formed on Sunbiz: **LLC** (single- or multi-member) or
   **Corporation** (Inc./Corp.). → drives §4A.
4. **Number of LLC members** (if an LLC).
5. **Will this entity elect S-corp?** (very common here) → does **not** change
   the EIN application, but flags the separate Form 2553 step (see §4B).
6. **Responsible party**: the one individual who owns/controls the entity, plus
   their **SSN or ITIN** (or the fact that they have **neither**). → this is the
   go/no-go decision in §1. See §4C for who qualifies.
7. **US mailing address** and **physical (principal business) address**, with
   **county** and state.
8. **Reason for applying** — for a new FL company this is "Started a new
   business."
9. **Expected employees in the next 12 months** (0 is a valid answer) and, if
   any, the **first date wages will be paid**.
10. **Principal activity / line of business** (what the company actually does).
11. **Closing month of the accounting year** — almost always **December**.
12. **Is the firm filing on the client's behalf?** → if yes, you'll name the
    firm as **Third-Party Designee** (see §4D); the client must authorize it.

---

## 1. The go/no-go decision — does the responsible party have an SSN or ITIN?

This single fact decides which path you take. Resolve it **before** anything
else.

- **✅ Responsible party HAS a valid SSN or ITIN** → **Path A: apply online**
  (§2). EIN issued **immediately**, on screen, same session. This is the default
  and by far the fastest.
- **❌ Responsible party has NEITHER an SSN nor an ITIN** (common for a foreign
  owner) → you **cannot use the online tool**. Use **Path B: Form SS-4 by fax,
  mail, or the international phone line** (§3). Fax turnaround is ~4 business
  days; phone can be same-call for international applicants.

> **Frequent JK situation — foreign owner, no SSN/ITIN.** You do **not** need to
> wait for the owner to get an ITIN before the company can get its EIN. File
> **Form SS-4 by fax** with **"Foreign"** on line 7b (see §3). Getting an ITIN
> (Form W-7) is a separate, slower track and is **not** a prerequisite for the
> EIN.

---

## 2. Path A — Apply online (responsible party has SSN/ITIN)

**Where:** IRS EIN Assistant —
<https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online>

**Before you click "Begin application," know the rules of the tool:**

- **Availability:** weekdays only, roughly **7 a.m.–10 p.m. Eastern** (verify the
  current window on the page — the IRS occasionally changes it). Not available
  overnight or on weekends.
- **One session, no saving:** it **times out after 15 minutes of inactivity**
  and cannot be resumed. Have every §0 answer in front of you.
- **One EIN per responsible party per day** — online, phone, fax, or mail. If
  you're setting up several entities for the same person, you can only get one
  per calendar day.
- **Principal business must be in the US or a US territory**, and the
  responsible party must have a valid **SSN, ITIN, or EIN**.
- **Result:** the EIN appears **on screen immediately**. **Download and save the
  EIN Confirmation Notice PDF** (the online equivalent of the **CP 575**) right
  then — this is the client's proof of EIN and you may not get another copy
  easily.

### The wizard, screen by screen (verified 2026-07)

The tool is a **6-step wizard** with a progress bar at the top:
**1 Legal Structure → 2 Identity → 3 Addresses → 4 Additional Details →
5 Review & Submit → 6 EIN Assignment.** All required fields are marked `*`. A
language selector sits in the top-right header, but treat the tool as
English-only.

**Step 1 — Legal Structure.**
- *"What type of legal structure is applying for an EIN?"* — choose the entity's
  **legal** form as filed on Sunbiz: **Limited Liability Company (LLC)** or
  **Corporations** (this option's help text notes it "includes S corporations…").
  A confirm box explains the choice. → **Do not try to make the S-election here**
  (see §4A/§4B).
- **LLC path** → *"How many member(s) are in the LLC?"* + *"state/territory where
  the business is physically located"* (**Florida (FL)**).
  - A confirm box states the default: **single-member = disregarded entity**;
    **multi-member = partnership**. It explicitly points to **Form 8832**
    (corporate status) or **Form 2553** (S-corp status) if you want to change it
    — confirming that the EIN app itself does **not** elect S-corp (§4B).
- *"Why is the … requesting an EIN?"* → **Started a new business** (other options:
  Hired employees, Banking purposes, Changed type of organization, Purchased
  active business).

**Step 2 — Identity.** *"Please tell us about the Responsible Party"* —
*"Must match IRS records or this application cannot be processed."*
- **SSN/ITIN** (required), **First / Middle / Last name**, Suffix.
- **Your role:** *"I am one of the owners, members, or the managing member"* **or**
  *"I am a third party applying for an EIN on behalf of this LLC."* → pick the
  third-party option when the firm is filing for the client (§4D).

**Step 3 — Addresses.** Mailing + physical business address (with county/state).

**Step 4 — Additional Details (two screens).**

*Screen 4a — "Tell us about the LLC":*
- **Legal name** (must match articles of organization). ⚠️ For an LLC the field
  **may not contain the endings "Corp" or "Inc"**; only `-` and `&` are allowed.
- **Trade name / DBA** (only if different) — may not contain "LLC", "LC", "PLLC",
  "PA", "Corp", or "Inc".
- **County** and **State/Territory** where the LLC is located.
- **State/Territory where the articles of organization are (or will be) filed**
  (Florida).
- **Start date** (Month / Year) = the Sunbiz formation date.
- Then five yes/no triggers — for a typical small company all are **No**:
  1. Own a **highway motor vehicle ≥ 55,000 lbs** taxable gross weight?
  2. Involve **gambling / wagering**?
  3. Need to file **Form 720** (Quarterly Federal Excise Tax)?
  4. **Sell or manufacture alcohol, tobacco, or firearms**?
  5. **Have, or expect to have, employees who will receive Forms W-2 in the next
     12 months?** ← answer **Yes** only if there will be payroll; it flags the
     Form 941/940 obligations.

*Screen 4b — "Provided Business Activity and Services":* pick the one **category**
that best fits, then answer its **follow-up** (see the matrix below). Most JK
service clients land on **Other → Consulting** or **Other → Service**.

| Category | Follow-up question / options |
|---|---|
| Accommodations | Casino hotel / Hotel / Motel / Other |
| Construction | "Do you focus on a single construction trade (concrete, framing, roofing, electrical, plumbing, HVAC, flooring, etc.)?" Yes/No |
| Finance | Commodities broker / Credit card issuing / Investment advice / Investment club / Investment holding / Mortgage broker / Mortgage company / Portfolio management / Sales financing / Securities broker / Trust administration / Venture capital / Other |
| Food Service | Bar / Bar and restaurant / Catering / Coffee shop / Fast food / Full service restaurant / Ice cream shop / Mobile food service / Other |
| Health Care | "Does your establishment include medical practitioners with an M.D. or D.O. degree?" Yes/No |
| Insurance | Insurance carrier / Insurance agent or broker / Other |
| Manufacturing | Free text: "specify the type of goods you manufacture and the primary materials used (e.g. 'wood furniture')" |
| Real Estate | Rent/lease property I own / Use capital to build property / Sell property for others / Manage real estate for others / Other |
| Rental & Leasing | Rent/lease/sell real estate / Rent or lease goods (+ specify goods) / Manage real estate for others |
| Retail | Internet-only / Storefront / Direct sales / Auction house / Other |
| Social Assistance | Nursing home / Shelter / Youth services / Other |
| Transportation | "Do you primarily transport cargo or passengers?" Cargo / Passengers / Support activity |
| Warehousing | (selecting it advances to the next step) |
| Wholesale | "Do you own or take title to the goods you sell?" Yes/No |
| **Other** | **Consulting / Manufacturing / Organization (religious, environmental, social/civic, athletic…) / Rental / Repair / Sell goods / Service / Other (+ specify)** |

**Step 5 — Review & Submit.** A read-only summary of every answer —
*"if any of the information below is incorrect, you will need to start a new
application"* (there is no going back to edit after submit). Also choose:
- **"How would you like to receive your EIN Confirmation Letter?"**
  - ✅ **"Receive letter digitally in the next step"** — view/print/**save the PDF
    immediately** (requires a PDF reader; not mailed). **Always pick this.**
  - "Receive letter by mail (allow up to 4 weeks)" — mailed to the address given.
- Click **Submit EIN Request**.

**Step 6 — EIN Assignment.** *"Congratulations! Your EIN has been successfully
assigned."* The screen shows **Your EIN Details** — the **EIN assigned**, **Legal
name**, **Name control** — and a **Download EIN confirmation Letter [PDF]** button
plus **Print Page**.
- 👉 **Download the PDF and Print/Save the page now** — this CP 575-equivalent
  letter is the client's official proof of EIN and is not easily re-issued (a
  147C by phone is the only replacement). Store it in the client's system, not
  this repo (§5).

---

## 3. Path B — Form SS-4 by fax / mail / phone (no SSN or ITIN)

Use this when the responsible party has **neither an SSN nor an ITIN**. Complete
**Form SS-4** (Rev. December 2025 or later):

- Form: <https://www.irs.gov/pub/irs-pdf/fss4.pdf>
- Instructions: <https://www.irs.gov/instructions/iss4>

### SS-4 line-by-line (the lines that matter)

| Line | What to put |
|---|---|
| **1** | Legal name of the entity — **exactly** as on Sunbiz |
| **2** | Trade name / DBA (only if operating under a fictitious name) |
| **4a/4b** | Mailing address |
| **5a/5b** | Street address (if different from mailing) |
| **6** | **County and state** where the principal business is located |
| **7a** | Responsible party's **name** |
| **7b** | **"Foreign"** — when the responsible party has no SSN/ITIN and isn't required to have one *(some filers write "N/A"; "Foreign" is the accepted convention for a foreign responsible party)* |
| **8a–8c** | Is it an LLC? number of members? organized in the US? |
| **9a** | Type of entity — Corporation (enter the form number, e.g. 1120) / Partnership / etc. For an LLC, this reflects how it's **taxed** (see §4A) |
| **10** | Reason for applying → "Started new business" |
| **11** | Date business started = **Sunbiz formation date** |
| **12** | Closing month of accounting year → **December** (usual) |
| **13** | Highest number of employees expected next 12 months (0 is fine) |
| **14** | Check the box to file **Form 944** annually instead of 941 quarterly only if you expect ≤ **$1,000** in annual payroll tax (usually leave unchecked) |
| **15** | First date wages were/will be paid (blank if no payroll yet) |
| **16** | Principal activity |
| **17** | Principal line of merchandise/services |
| **18** | Has this entity ever applied for an EIN before? (No, for a new entity) |
| **Third-Party Designee** | If the firm is applying for the client, complete this block so the IRS releases the EIN to the firm; the **client signs** the form (see §4D) |

### Where to send it

**Applicant is inside the 50 states or DC** (the responsible party lives in the
US but has no SSN/ITIN):

- **Fax:** **855-641-6935** — include your **return fax number** and the IRS
  faxes the EIN back, generally within **~4 business days**.
- **Mail:** Internal Revenue Service, **Attn: EIN Operation, Cincinnati, OH
  45999** — allow **~4–5 weeks**.

**Applicant has no legal residence / principal place of business / office in any
state** (international applicant):

- **Fax:** **855-215-1627** (from within the US) or **304-707-9471** (from
  outside the US). Return fax → EIN generally within **~4 business days**.
- **Mail:** Internal Revenue Service, **Attn: EIN International Operation,
  Cincinnati, OH 45999**.
- **Phone (international applicants only):** **267-941-1099** (not toll-free),
  **Mon–Fri, 6 a.m.–11 p.m. Eastern**. The caller must be authorized and able to
  answer every SS-4 line — **fill out the SS-4 first**, then call; the EIN can be
  issued on the call.

> **Fax is the practical default for a no-SSN owner living in Florida:** ~4
> business days vs. ~4–5 weeks by mail, and you keep a paper trail.

---

## 4. The answers people get wrong

### 4A. LLC classification — what the "entity type" answer really means

For an **LLC**, the EIN application is **not** where you choose how the company
is taxed for real — it only records the **default**:

- **Single-member LLC** → default **disregarded entity** (owner reports the
  activity on their own return).
- **Multi-member LLC** → default **partnership** (Form 1065).

Technically a single-member LLC with **no employees and no excise tax** isn't
*required* to have its own EIN — but **always get one anyway**: you need it for a
business bank account, to elect S-corp, to issue/receive 1099s, and to keep the
owner's SSN off vendor paperwork.

### 4B. S-corp election is a SEPARATE step — the EIN app never makes it

This matters for almost every S-corp client (and everything the
reasonable-compensation work depends on):

- **Obtaining the EIN does not make the entity an S-corp.** Selecting
  "S Corporation" (or "Corporation") in the online interview does **not** create
  the election — the IRS will still expect **Form 2553**.
- **Sequence:** form on Sunbiz → **get the EIN (this SOP)** → **file Form 2553**
  to elect S-corp status.
- **2553 deadline:** generally within **2 months and 15 days** of the entity's
  formation/effective date (or the start of the tax year the election is to take
  effect). Missed it? **Rev. Proc. 2013-30** late-election relief is usually
  available — file 2553 with the reasonable-cause statement. Track this
  deadline the moment the EIN is in hand.
- An **LLC electing S-corp** does this via Form 2553 alone (it's treated as also
  electing corporate classification); you do **not** pick "S corporation" as the
  entity type when getting the EIN — record it as the LLC it is.

### 4C. Who the "responsible party" is

- Must be a **natural person** (an individual), not another company — the one who
  **ultimately owns or controls** the entity and directs its funds and assets
  (the true principal owner/officer/member, general partner, grantor, or
  trustor).
- **Only one** responsible party per EIN. Use **their** SSN/ITIN (or "Foreign"
  on paper if they have neither).
- For a multi-owner entity, pick the individual who genuinely controls it; the
  IRS expects the real principal, not a nominee.

### 4D. Third-Party Designee — when the firm applies for the client

If JK completes and submits the application **on the client's behalf**:

- **Paper SS-4:** fill in the **Third-Party Designee** block (firm name, address,
  phone/fax) so the IRS releases the EIN to the firm — and the **client (the
  responsible party) signs** the form.
- **Online:** the tool is meant to be completed by someone authorized to receive
  the EIN for the entity; enter the client's responsible-party info with the
  client's authorization.
- The designee's authority to receive the EIN **ends once the EIN is assigned** —
  it is not ongoing power of attorney.

---

## 5. After you have the EIN

1. **Save the confirmation** in the client's system:
   - Online → the downloaded **EIN Confirmation Notice PDF** (CP 575 equivalent).
   - Fax → the **fax-back** page from the IRS.
   - Keep it in the client's Drive/Double folder — the client will need it for
     the bank, and the mailed **CP 575** is hard to replace (an EIN verification
     letter, **147C**, is the only re-issue and must be requested by phone).
2. **Record the EIN** in the client record (Double / QuickBooks / Drive) — never
   in this repo.
3. **Trigger the next steps** the EIN unlocks (all outside this SOP):
   - **Form 2553** if electing S-corp (§4B) — mind the deadline.
   - **Business bank account.**
   - **FL Dept. of Revenue** registration (sales & use tax / reemployment tax) if
     the activity requires it.
   - **Local Business Tax Receipt** (see
     [`hollywood-broward-business-tax-receipt.md`](./hollywood-broward-business-tax-receipt.md)
     for the Hollywood/Broward version).
   - **Payroll setup** if there will be employees.

---

## 6. Common pitfalls

- **Name mismatch with Sunbiz.** Even a punctuation difference causes downstream
  headaches — copy the legal name **exactly**.
- **Applying before Sunbiz is Active.** Get the entity formed and the formation
  date first; the IRS asks for it.
- **Assuming a foreign owner needs an ITIN first.** They don't — fax the SS-4
  with **"Foreign"** on line 7b (§3). The ITIN track is separate and slower.
- **Thinking the EIN made the S-election.** It didn't — **file Form 2553** (§4B).
- **The 15-minute online timeout.** Have all §0 answers ready; you can't save and
  return.
- **One EIN per responsible party per day** — plan multi-entity days accordingly.
- **Not saving the confirmation letter.** Download/keep it immediately;
  replacement is a phone-only **147C**.
- **Paying a third-party "EIN service."** It's free from the IRS (see top).

---

## 7. Contacts & links

| Who | For | Link / number |
|---|---|---|
| IRS — Apply for an EIN online | Path A (SSN/ITIN) | <https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online> |
| IRS — Form SS-4 (PDF) | Path B form | <https://www.irs.gov/pub/irs-pdf/fss4.pdf> |
| IRS — Instructions for Form SS-4 | Line-by-line | <https://www.irs.gov/instructions/iss4> |
| IRS — Where to file SS-4 | Fax/mail addresses | <https://www.irs.gov/filing/where-to-file-your-taxes-for-form-ss-4> |
| IRS — SS-4 fax (50 states + DC) | Domestic fax | **855-641-6935** |
| IRS — SS-4 fax (international) | No US residence | **855-215-1627** (in US) · **304-707-9471** (outside US) |
| IRS — EIN by phone (international only) | No-SSN/ITIN international applicant | **267-941-1099**, Mon–Fri 6 a.m.–11 p.m. ET (not toll-free) |
| IRS — Business & Specialty Tax Line | 147C re-issue, EIN questions | **800-829-4933**, Mon–Fri 7 a.m.–7 p.m. local |
| IRS — mail (domestic) | Domestic SS-4 by mail | Internal Revenue Service, Attn: EIN Operation, Cincinnati, OH 45999 |
| IRS — mail (international) | International SS-4 by mail | Internal Revenue Service, Attn: EIN International Operation, Cincinnati, OH 45999 |
| Sunbiz (Division of Corporations) | Confirm the entity is Active + exact legal name | <https://search.sunbiz.org/Inquiry/CorporationSearch/ByName> |

---

## Appendix — Blank intake (copy into the client's file in YOUR system)

> Copy this block into the client's folder in Drive/Double/QuickBooks and fill it
> there **from the client's completed Business Intake Form**. **Keep filled-in
> client data — SSN/ITIN, addresses, the EIN — out of this repo.**

```
EIN Intake — <legal entity name>

Entity (must match Sunbiz)
- Exact legal name (as on Sunbiz):
- Sunbiz document #:
- Sunbiz status:  ☐ Active   (must be Active before applying)
- Formation / effective date (= "business start date"):
- Entity type:  ☐ Single-member LLC  ☐ Multi-member LLC (# members: ___)  ☐ Corporation (Inc./Corp.)
- Will elect S-corp?  ☐ No  ☐ Yes → file Form 2553 after EIN (deadline: 2mo 15d from formation)

Responsible party  (the individual who owns/controls the entity)
- Name:
- SSN / ITIN:  ☐ Has SSN  ☐ Has ITIN  ☐ Has NEITHER  → determines path:
      • Has SSN/ITIN → PATH A: apply online (same-day EIN)
      • Has neither  → PATH B: SS-4 by fax "Foreign" on line 7b (~4 business days)

Addresses
- Mailing address:
- Physical / principal business address (+ COUNTY):

Business details
- Reason for applying:  ☐ Started a new business  ☐ Other: ____
- Principal activity / line of business:
- Employees expected next 12 months:  ___   First wage date (if any): ____
- Closing month of accounting year:  ☐ December  ☐ Other: ____

Filing
- Firm filing on client's behalf?  ☐ No  ☐ Yes → Third-Party Designee block + client signs
- Path used:  ☐ A online   ☐ B fax (domestic 855-641-6935 / intl 855-215-1627)   ☐ B mail   ☐ B phone (intl 267-941-1099)

Result  (store in client system, NOT the repo)
- EIN assigned:
- Date assigned:
- Confirmation saved?  ☐ Online PDF (CP 575 equiv.)  ☐ Fax-back page   Location: ____
- Next: ☐ Form 2553 (if S-corp)  ☐ Bank account  ☐ FL DOR (sales/reemployment)  ☐ Local BTR  ☐ Payroll

Notes / open questions:
```

_Sources: IRS "How to apply for an EIN," "Apply for an EIN online," Instructions
for Form SS-4 (Rev. Dec 2025), and "Where to file your taxes for Form SS-4";
IRS EIN telephone guidance for international applicants. Verify fax numbers,
hours, and mailing addresses against the official IRS pages before filing — the
IRS changes them periodically._
