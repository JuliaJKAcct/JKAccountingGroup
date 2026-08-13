---
name: itin-w7-preparation
description: Prepare, check or explain an ITIN application (IRS Form W-7) and the firm's Certifying Acceptance Agent work around it. Use when anyone asks how to fill in a specific field or line of Form W-7 or Form W-7-COA ("what goes in 6d?", "which reason box?", "who signs for a child?"), which documents an ITIN applicant must bring, whether a dependent needs proof of U.S. residency, whether an SSA denial letter is required, which of the five Exceptions replaces the tax return, what a CAA may authenticate versus what must be mailed as an original, where the package goes, or why an ITIN application was rejected or suspended. Also use for questions about becoming a CAA — the two trainings, the forensic certificate's acceptance criteria, the e-Services application, the agreement's four-year clock. Carries the field-by-field reference so a person filling in the form can be answered line by line, and points at the interactive walkthrough tool that decides the reason box and document list for one applicant.
---

# Preparing an ITIN application (Form W-7)

The firm's ITIN knowledge, so a session can answer **field-level questions from
someone who has the form open in front of them** — not just point at a document.

## 0. Before answering anything

**Three sources, in this order:**

1. **[`references/form-w7-fields.md`](./references/form-w7-fields.md)** — every
   line of Form W-7 (Rev. 12-2024) and Form W-7-COA (Rev. 8-2025): what goes in
   it, the exact format, the trap. **This is what to quote when someone asks
   about a specific field.**
2. **[`projects/sops/itin-w7-application.md`](../../../projects/sops/itin-w7-application.md)**
   — the procedure end to end, and the reasoning.
3. **[`projects/sops/irs-certifying-acceptance-agent.md`](../../../projects/sops/irs-certifying-acceptance-agent.md)**
   — how the firm becomes a CAA in the first place.

**And point at the tool.** For anyone doing a real application, the
**ITIN Application Walkthrough** (in the Knowledge Hub under *Interactive tools*;
source `projects/sops/tools/itin-w7-walkthrough.src.html`) asks plain questions
and produces a preparation sheet for that one applicant. It decides the reason
box, the documents and the dependent tests so the person doesn't have to. A
field question is worth answering directly; a whole application is worth handing
to the tool.

## 1. The five things a session gets wrong if it answers from memory

These are the ones where general knowledge of ITINs is out of date or too coarse.
**Check the reference before answering on any of them.**

1. **The dependent rules are TWO tests, not one.** Whether the passport can
   *stand alone* (needs a U.S. date of entry unless Canada/Mexico or U.S.
   military overseas — no tax-benefit condition) is a different question from
   whether *U.S. residency must be proved* (excused for U.S. military overseas
   **or** for Canada/Mexico **and** claimed for a benefit other than ODC). The
   ODC condition attaches to the Canada/Mexico branch only. Merging them is the
   classic error and it was caught in review of this very SOP.
2. **What a CAA may authenticate is narrower than people assume.** Primary and
   secondary: everything **except a foreign military ID card**. **Dependents:
   passport and birth certificate only** — every other dependent document
   travels to the IRS as an original or an issuing-agency certified copy.
3. **The photograph exemption is under 14 — or under 18 if a student.** Pub 5726
   restates it loosely as "under 18"; the Form W-7 instructions are narrower and
   are the rule applied.
4. **Form W-7 (COA) was renamed Form W-7-COA** in Rev. 8-2025. Pub 1915, 4520 and
   5726 still use the old style.
5. **Line 5 has three boxes** on Rev. 12-2024 — Male, Female, **Other**.

## 2. The gate that comes before the form

**Anyone eligible for an SSN is not eligible for an ITIN**, and determining that
is the agent's job, not the client's. If they are eligible → SSA (Form SS-5); if
the SSA refuses → the **denial letter must be attached** or the W-7 is rejected.

Two groups skip the SSA: **F/J/M students who will not work**, and people
receiving **only honoraria** — a letter from the Designated School Official /
Responsible Officer / Authorized School Official replaces the SSA letter.

## 3. What an ITIN is not — say this to every client

Federal **tax reporting only** · **not valid for employment** and does not change
immigration status · **no Earned Income Tax Credit**. Also: a return **cannot be
e-filed using an ITIN in the year the ITIN is issued**, prior-year returns
included.

## 4. Answering a "which box?" question

Work it from the applicant's situation, not from the form's wording:

| Their situation | Box |
|---|---|
| Filing their own return, nonresident | **b** (Line 3 foreign address mandatory) |
| Filing their own return, resident by days present | **c** (date of entry on 6d) |
| Claimed as a dependent on a U.S. person's return | **d** (relationship + the U.S. person's name and SSN/ITIN) |
| Spouse of a U.S. citizen / resident alien | **e** (the U.S. person's name and SSN/ITIN) |
| Dependent or spouse of a nonresident alien with a U.S. visa | **g** (copy of visa + date of entry) |
| Student, professor or researcher | **f** (6a, 6c, 6d, 6g all mandatory) |
| Claiming a treaty benefit | **a** — *and* **h**, plus treaty country and article |
| A third party asked for a number | **h** with an Exception |

**One box.** Invalid combinations (a *and* b) top the IRS's error list. Boxes a
and f-with-an-exception are the only cases where two boxes are right, and the
second is always **h**.

## 5. When there is no tax return

Five Exceptions replace it, each with its own proof — **1(a)** the partnership
or LLC agreement; **1(b)–1(d)** an original signed letter on letterhead from the
bank or withholding agent; **2** usually the SSA denial letter (or a school
certification letter); **3** evidence of the mortgage; **4** FIRPTA withholding
documentation; **5** TD 9363 documentation. Exception proof replaces the
**return** and nothing else — identity documents are still required.

## 6. Firm rules that ride on top

- **Client data never enters the repo.** Passports, birth certificates, filled-in
  W-7s and COAs live in the client's folder in Drive or Double. The COA itself
  commits us in writing to retaining copies, including a **signed copy of the
  Form W-7**.
- **A client we do ITIN work for gets a Client Intelligence file** — the standing
  repo rule. Record what was filed and when in their `§6` log.
- **Only a responsible party named on the firm's Acceptance Agent application**
  may sign the agent block or the COA.
- **The five-business-day rule:** a signed W-7 must be submitted by the agent
  within five business days. Do not take a signature until the package is ready.

## 7. Keeping this current

The IRS revises these forms. When it does, update **together**:
`references/form-w7-fields.md`, the `FIELDS[]` array and rule functions in
`projects/sops/tools/itin-w7-walkthrough.src.html`, and the two SOPs — then
rebuild the tool (`node projects/sops/tools/build.mjs`), the SOP renders, and the
Hub.

*Update this skill when a real application teaches us something the publications
did not say — especially the first time the firm actually files one, since both
SOPs are currently marked Draft for exactly that reason.*
