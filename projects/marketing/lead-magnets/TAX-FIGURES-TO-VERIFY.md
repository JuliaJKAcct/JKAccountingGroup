# Tax figures & rules to verify before publishing

> **Status: DRAFT — not publish-ready.** Every calculator below uses the
> numbers here as hard-coded constants. Julia (or a firm reviewer) must confirm
> each one against the current IRS / FL source before any tool goes live. Tax
> figures change yearly and carry real liability. Each page also shows a visible
> "general information, not advice" disclaimer.

Figures used (as gathered 2026-07, for **tax year 2026** unless noted):

## Federal income tax — 2026 (IRS Rev. Proc. 2025-32 / One Big Beautiful Bill)
- **Standard deduction:** Single **$16,100** · MFJ **$32,200**.
- **Brackets — Single:** 10% $0–12,400 · 12% –50,400 · 22% –105,700 · 24%
  –201,775 · 32% –256,225 · 35% –640,600 · 37% 640,601+.
- **Brackets — MFJ:** 10% $0–24,800 · 12% –100,800 · 22% –211,400 · 24%
  –403,550 · 32% –512,450 · 35% –768,700 · 37% 768,701+.
- Used in: **Will You Owe the IRS a Surprise Tax Bill?**

## Self-employment & payroll tax
- **SE tax:** 15.3% (12.4% Social Security + 2.9% Medicare) on **92.35%** of net
  self-employment income; **one-half deductible**.
- **2026 Social Security wage base:** **$184,500** (12.4% applies up to this;
  2.9% Medicare has no cap).
- **Additional Medicare tax:** 0.9% on wages/SE income over $200,000 single /
  $250,000 MFJ — *not modeled in the simplified tools; confirm whether to add.*
- Used in: **LLC or S-Corp**, **Surprise Tax Bill**.

## Substantial Presence Test (residency for tax filing)
- Meet if: days this year ≥ 31 **and** (days this year) + (⅓ × prior year) +
  (⅙ × year before) ≥ **183**. Stable formula.
- **Exceptions not modeled** (exempt individuals: certain visas — students/
  teachers; closer-connection exception; tax treaties). Tool must say "estimate,
  exceptions apply." Confirm disclaimer wording.
- Used in: **Do You File US Taxes as a Resident?**

## Form 5472 (foreign-owned US company)
- Penalty **$25,000** per year for failure to timely file / keep records;
  additional $25,000 per 30 days after 90-day IRS notice. Foreign owner ≥25% of
  a US corporation, or a foreign-owned US single-member LLC treated as a
  corporation for this reporting. Source: IRS Instructions for Form 5472 (Rev.
  Dec 2024) — **re-pull current instructions to confirm still $25,000.**
- Used in: **Could Your Foreign-Owned Company Owe a $25,000 Fine?**

## FBAR / Form 8938 (foreign accounts & assets)
- **FBAR (FinCEN 114):** aggregate foreign financial accounts > **$10,000** at
  any point in the year. Deadline Apr 15, auto-extension to Oct 15.
- **Form 8938 (FATCA):** starts at **$50,000** for US residents; matrix varies
  by filing status and US-vs-abroad residency (up to $600,000). Tested
  independently from FBAR.
- Used in: **Do You Need to Report Money You Have Back Home?**

## Florida local Business Tax Receipt (BTR)
- Two receipts: **county + city**, each its own fee. Tax year **Oct 1 – Sep 30**;
  expires **Sept 30**; **50% first-year rule** if first issued on/after Apr 1.
  City (Hollywood) ≈ **$120 total** ($25 non-refundable + classification tax);
  county ≈ **$30–45**. Amounts approximate, classification-dependent. Source:
  `../../sops/hollywood-broward-business-tax-receipt.md`.
- **Scope:** the tool covers the firm's local area (Miami-Dade / Broward and
  named cities). Confirm any city fees added beyond Hollywood/Broward.
- Used in: **Do I Need a License to Run My Business Here in the USA?**

## Reasonable compensation (S-corp salary)
- The public tool gives a **rough range only** and always routes to the full
  `reasonable-compensation` analysis for a defensible figure. Confirm the
  simplified range logic is acceptable as a lead-magnet estimate.
- Used in: **Am I Paying Myself the Right Salary?**
