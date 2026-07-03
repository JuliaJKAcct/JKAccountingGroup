---
name: reasonable-compensation
description: Calculate and document a defensible reasonable-compensation (reasonable salary) figure for an S-corporation shareholder-employee. Use when the user asks to determine, calculate, justify, or produce a report on reasonable comp / reasonable salary / owner salary for an S-corp owner. Runs an interactive intake, develops three approaches (cost/"many-hats" build-up triangulated across BLS + live market sources, a market-total approach, and the income / Independent Investor Test), scales for company size, shows total compensation, reconciles to a defensible-low figure, cross-checks against the IRS reasonableness factors, and outputs a branded, print-ready HTML report with an analyst certification and source appendix.
---

# Reasonable Compensation Analysis (S-Corp)

Produce a documented, defensible reasonable-salary figure for an S-corporation
shareholder-employee, and a branded HTML report that shows the work. Salary is subject to
payroll tax; distributions are not — so the IRS requires a *reasonable* wage before
distributions, and a low salary with large distributions is the classic audit trigger. This
skill develops **three approaches** (cost, market, income), reconciles them into one figure,
and documents it against the **IRS reasonableness factors** — the same backbone the paid
commercial reports use, kept to focused pages instead of padded appendices.

## Read these first
- `reference/methodology.md` — the five-step cost approach ("many-hats"), cross-checks, what it is/isn't.
- `reference/wage-data.md` — triangulating BLS + market wages, occupation (SOC) map, percentile selection.
- `reference/approaches.md` — the three approaches (cost / market / income & Independent Investor Test) and how to reconcile them.
- `reference/company-scaling.md` — size & complexity scaling, and the total-compensation view.
- `reference/irs-factors.md` — the nine IRS factors, tax mechanics, case-law citations.
- `reference/report-template.html` — the branded output template to fill.

## Guardrails (do not skip)
- **Never fabricate** a wage figure, a BLS statistic, a case citation, or a client fact. If a
  wage isn't retrievable, label it a documented estimate with its basis. If a fact wasn't
  provided, mark it *"Not provided"* — don't guess.
- **This is decision support, not legal/tax advice or a guarantee.** The report's limitations
  section says so; keep it there.
- Confirm the entity is actually an **S-corp** (or S-elected LLC). If it's a sole prop,
  partnership, or C-corp, reasonable-comp rules differ — flag it and stop before computing.
- Keep numbers internally consistent; show every input so the client can audit the math.

## Workflow

### Step 1 — Intake (interview the user)
Ask in grouped batches (use `AskUserQuestion` for choices, plain prose for open numbers).
Don't dump all questions at once — gather the business block, then the owner block, then the
hats. Collect:

**A. Business & entity**
- Legal business name; confirm S-corp / S-elected LLC; tax year.
- Industry (and NAICS if known).
- Location — **state and metro/city** (drives wage geography).
- Gross revenue; **net income before owner compensation**.
- Current owner W-2 salary; distributions taken this year.
- **Company size for scaling** — number of employees, direct reports the owner supervises,
  single vs. multi-entity / multi-state, and total assets if known (see `company-scaling.md`).
- Number of employees and, if relevant, what they're paid for comparable work.

**B. Owner**
- Owner name; ownership %.
- Education, credentials/licenses (CPA, EA, trade license…), years of experience.
- Total hours worked per week; weeks per year → confirm annual hours.

**C. The hats (roles)**
- The distinct functions the owner performs.
- Time per hat — accept **hours** or **% of time** (percentages must total 100%).
- For each hat, note anything affecting skill level (supervises others, specialized, nominal).

**D. For the income approach (Independent Investor Test)**
- **Shareholder equity / capital at risk** (book value of equity, or owner's investment).
- Ask whether they have a target/expected return in mind; otherwise use a documented
  10–20% required return for a closely-held firm of this risk (state the basis).

**E. Total compensation & history**
- Employer **retirement** contributions (SEP/SIMPLE/401(k) match/profit-sharing) and
  **health insurance** premiums paid (note the >2%-shareholder W-2 treatment).
- **Prior 2 years** of salary, distributions, and net income if available (for the trend).

If the user says "I don't know" for a figure, proceed and mark it *Not provided*; note the
limitation it creates (e.g. no equity → income approach is qualitative only).

### Step 2 — Map hats → occupations & triangulate wages
For each hat: pick the most specific SOC (see `wage-data.md`), choose geography (state/metro),
then **triangulate 4–6 independent sources** rather than trusting one number:
- **BLS OEWS** as the high-side anchor, **plus** market figures from Indeed, Glassdoor,
  Salary.com, Payscale, and ZipRecruiter gathered via **`WebSearch`** (one query per role, e.g.
  `"<role> salary <city> <state> 2026 Indeed Glassdoor"`). **Do not scrape those sites** — they
  return 403 and it violates ToS; WebSearch surfaces their published figures compliantly.
- Capture **every data point** (source, geography, date, value, URL) — this becomes the report's
  wage-evidence table.
- **Reconcile:** drop unexplained outliers → median/trimmed mean of the cluster → apply the
  **defensible-low posture** (land near the low end of the corroborated cluster, ≈ market 25th
  pct, when ≥3 sources support it; else the cluster median). **Never go below the corroborated
  cluster**, and **require ≥3 sources** to price a role below the BLS median.
- **Flag divergence:** BLS often runs higher than the open market — when it does, the market
  cluster governs and the report says so.
- If web access is unavailable, ask the user to paste figures they looked up, or use a
  clearly-labeled estimate. **Never present an estimate or a remembered number as a sourced quote.**

### Step 3 — Cost approach (build-up, with size scaling)
1. Annual hours = hours/wk × weeks/yr.
2. Allocate annual hours across hats (from hours or from % × annual hours).
3. **Apply size & complexity scaling** per `company-scaling.md`: scale the *management/executive*
   hats down (or up) for the company's revenue band, headcount, and span of control (typical
   small-company top-management factor ≈ 0.5–0.8×); leave clerical/production hats unscaled. Show
   pre-scaling wage, factor, and post-scaling wage — never a silent discount.
4. Weighted wage per hat = allocated hours × post-scaling defensible-low rate.
5. **Cost-approach value = Σ weighted wages**; also compute a low/high **range** (bottom of
   clusters vs. ≈75th pct).

### Step 4 — Market & income approaches, then reconcile
Per `approaches.md`:
- **Market approach** — via `WebSearch`, gather **total-compensation** comparables for an
  owner-manager of this industry and size band (not per-role); adjust for company size; produce a
  market figure + range. It should land near the cost approach.
- **Income approach / Independent Investor Test** — if equity was provided: compute post-comp
  return = (net income after the proposed comp) ÷ shareholder equity, compare to the required
  return (10–20%, basis stated). Confirm the recommended salary leaves an independent investor a
  satisfactory return (affordability/ceiling). If no equity data, treat this approach qualitatively.
- **Reconcile** — weight the three by relevance (hands-on service S-corp: cost ≈60–70%, market
  ≈20–30%, income as check/ceiling), explain the weighting, and land the **reconciled reasonable
  compensation** — keeping the defensible-low posture within the reconciled range.
- **Total compensation** — present the reconciled **cash salary** (the headline, payroll-taxable
  figure) with retirement + health shown as a separate total-comp panel; note the >2%-shareholder
  health-insurance W-2 mechanic. Benefits do **not** reduce the cash salary.
- **Cross-checks** from `methodology.md`: ability to pay, salary-vs-distribution ratio, and
  current-vs-recommended → set risk = **under / in-range / over**.

### Step 5 — Generate the report
Copy `reference/report-template.html` and fill **every** `{{PLACEHOLDER}}`:
- Money formatted like `$92,500`; percentiles/geography noted per hat line.
- `{{HAT_ROWS}}` — one `<tr>` per hat (role, SOC, hours, pre-scaling rate, size factor, post-scaling rate, weighted).
- `{{EVIDENCE_ROWS}}` — the **wage-evidence table**: one `<tr>` per (role × source) data point with
  platform, geography, date, figure. Note in `{{TRIANGULATION_PARAGRAPH}}` where BLS diverged high.
- `{{APPROACHES_ROWS}}` — the three-approach reconciliation rows (each approach's value, **qualitative
  emphasis** — Primary/Corroborating/Ceiling·check, not a numeric weight — and role); plus the Independent
  Investor Test cells `{{EQUITY_SHORT}}`, `{{REQUIRED_RETURN}}`, `{{RETURN_AFTER}}`, `{{POST_COMP_ROE}}`
  (and their `*_CAP` captions). `{{RECONCILE_NOTE}}` must say the figure is a judgment reconciliation
  landed at the defensible low, not a mechanical average.
- Total-compensation cells `{{RETIREMENT}}`, `{{HEALTH}}`, `{{TOTAL_PACKAGE}}` — cash salary + retirement + health.
- `{{HISTORY_ROWS}}` — the multi-year salary / distribution / net-income trend (or *Not provided*).
- `{{FACTOR_ROWS}}` — one `.factor` block per IRS factor; *Not provided* where data is missing.
- `{{CERTIFICATION}}` — the analyst certification & signature block (preparer, firm, date, sources, method).
- Risk callout: set `{{RISK_CLASS}}` to `under` | `ok` | `over` and match `{{RISK_LABEL}}` / `{{RISK_PARAGRAPH}}`.
- Keep the limitations block intact. Voice = JK brand: calm, plain, senior-advisor. No fear, no hype.

**Save to:** `projects/reasonable-compensation/reports/<client-slug>-<tax-year>.html`
(create the `projects/reasonable-compensation/reports/` folder if it doesn't exist; slug = lowercase,
hyphenated client name). Then tell the user the path and offer to open/preview it. Do **not** commit or
push unless the user asks.

### Step 6 — Summarize in chat
Give the headline reconciled number + range, how the three approaches converged, the risk verdict
(and recommended action), and the top 2–3 factors driving it. Note any inputs marked *Not provided*
and what a firmer answer would need.

## Notes
- The branding (petrol teal `#123841`, warm bronze `#9C6A39` used once, soft ivory, Source
  Serif 4 / IBM Plex Sans / IBM Plex Mono kicker) is already wired into the template — don't
  restyle it off-brand.
- For high-stakes or contested cases, recommend a formal third-party study (e.g. RCReports)
  in addition to this analysis.
