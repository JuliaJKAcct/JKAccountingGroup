---
name: reasonable-compensation
description: Calculate and document a defensible reasonable-compensation (reasonable salary) figure for an S-corporation shareholder-employee. Use when the user asks to determine, calculate, justify, or produce a report on reasonable comp / reasonable salary / owner salary for an S-corp owner. Runs an interactive intake, applies the cost ("many-hats") replacement-wage method anchored to BLS occupational wage data, cross-checks against the IRS reasonableness factors, and outputs a branded, print-ready HTML report.
---

# Reasonable Compensation Analysis (S-Corp)

Produce a documented, defensible reasonable-salary figure for an S-corporation
shareholder-employee, and a branded HTML report that shows the work. Salary is subject to
payroll tax; distributions are not — so the IRS requires a *reasonable* wage before
distributions, and a low salary with large distributions is the classic audit trigger. This
skill computes the number using the **cost / "many-hats" approach** and documents it against
the **IRS reasonableness factors**.

## Read these first
- `reference/methodology.md` — the five-step cost approach, cross-checks, what the method is/isn't.
- `reference/wage-data.md` — sourcing BLS OEWS wages, occupation (SOC) map, percentile selection.
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
- Number of employees and, if relevant, what they're paid for comparable work.

**B. Owner**
- Owner name; ownership %.
- Education, credentials/licenses (CPA, EA, trade license…), years of experience.
- Total hours worked per week; weeks per year → confirm annual hours.

**C. The hats (roles)**
- The distinct functions the owner performs.
- Time per hat — accept **hours** or **% of time** (percentages must total 100%).
- For each hat, note anything affecting skill level (supervises others, specialized, nominal).

If the user says "I don't know" for a financial figure, proceed and mark it *Not provided*;
note any limitation it creates (e.g. can't run the ability-to-pay check).

### Step 2 — Map hats → occupations & wages
For each hat: pick the most specific SOC (see `wage-data.md`), choose geography (state/metro),
and choose a percentile (default median; justify moves up/down per that file). Get the hourly
wage from **BLS OEWS** — if web access is available, look up current figures and record the
release year + geography + percentile; otherwise ask the user for known local rates or use a
clearly-labeled documented estimate. Never present an estimate as a BLS quote.

### Step 3 — Compute
1. Annual hours = hours/wk × weeks/yr.
2. Allocate annual hours across hats (from hours or from % × annual hours).
3. Weighted wage per hat = allocated hours × hourly rate.
4. **Recommended salary = Σ weighted wages** (point estimate at chosen percentiles).
5. **Range** = recompute the sum at one step lower (low) and one step higher (high) percentile.
6. Run the cross-checks from `methodology.md`: ability to pay (cap near net income if lower),
   salary-vs-distribution ratio, and current-vs-recommended → set risk = **under / in-range / over**.

Show the build-up table so every dollar traces to an occupation + rate.

### Step 4 — Generate the report
Copy `reference/report-template.html` and fill **every** `{{PLACEHOLDER}}`:
- Money formatted like `$92,500`; percentiles/geography noted per hat line.
- `{{HAT_ROWS}}` — one `<tr>` per hat (role, occupation+SOC with source note, hours, rate, weighted).
- `{{FACTOR_ROWS}}` — one `.factor` block per IRS factor, answered from intake; *Not provided* where data is missing.
- Risk callout: set `{{RISK_CLASS}}` to `under` | `ok` | `over` and write `{{RISK_LABEL}}` / `{{RISK_PARAGRAPH}}` to match.
- Keep the limitations block intact.
- Voice = JK brand: calm, plain, senior-advisor. No fear, no hype, no jargon walls.

**Save to:** `JK-Design-System/../reasonable-comp/<client-slug>-<tax-year>.html`
(create a top-level `reasonable-comp/` folder if it doesn't exist; slug = lowercase, hyphenated
client name). Then tell the user the path and offer to open/preview it. Do **not** commit or push
unless the user asks.

### Step 5 — Summarize in chat
Give the headline number + range, the risk verdict (and recommended action), and the top 2–3
factors driving it. Note any inputs marked *Not provided* and what a firmer answer would need.

## Notes
- The branding (petrol teal `#123841`, warm bronze `#9C6A39` used once, soft ivory, Source
  Serif 4 / IBM Plex Sans / IBM Plex Mono kicker) is already wired into the template — don't
  restyle it off-brand.
- For high-stakes or contested cases, recommend a formal third-party study (e.g. RCReports)
  in addition to this analysis.
