# Methodology — Cost / "Many-Hats" Approach

This skill uses the **Cost Approach** (also called the *Many-Hats*, *replacement-cost*,
or *ability-to-pay build-up* method) as its backbone. It is the approach used by
RCReports and most valuation practitioners, and it is the easiest to defend because
every dollar of the recommended salary traces to a published market wage for a real
occupation.

## The core idea

An S-corp owner-employee rarely does one job. A solo owner typically wears 5–8 "hats":
they might be the CEO, the bookkeeper, the head of sales, the lead technician, and the
office manager all at once. The reasonable salary is **what the business would have to
pay the open market to replace each of those functions**, weighted by how much of the
owner's time each one consumes.

## The five steps

### 1. Establish the owner's total working time
Get total hours worked per week and weeks worked per year → **annual hours**.
- Full-time baseline is 2,080 hrs/yr (40 × 52).
- Part-time owners scale down proportionally.
- Owners working >40 hrs/wr scale up (a 55-hr/wk owner ≈ 2,860 hrs) — this *raises*
  reasonable comp, which matters for owners who claim a low salary while working long hours.

### 2. Identify the hats (roles)
List every distinct function the owner performs and map each to a real occupation with a
BLS wage (see `wage-data.md` for the occupation library and how to source wages). Typical hats:

| Hat | Typical BLS occupation (SOC) |
|---|---|
| Executive / owner-management | Chief Executives (11-1011) or General & Operations Managers (11-1021) |
| Bookkeeping / accounting | Bookkeeping, Accounting & Auditing Clerks (43-3031) |
| Sales / business development | Sales Managers (11-2022) or Sales Reps (41-401x) |
| Marketing | Marketing Managers (11-2021) |
| Administrative / office | Office Clerks (43-9061) / Admin Assistants (43-6014) |
| Technician / production / delivery | industry-specific SOC (e.g. 47-2111 Electricians) |
| HR / operations | Human Resources / Operations (13-1071 / 11-1021) |

Prefer the **most specific** occupation that matches the actual work. The "Chief
Executive" wage is high; only assign hours to it for genuine strategic/leadership time,
not for time the owner spends doing clerical or production work.

### 3. Allocate hours across hats
Split the annual hours across the hats. Two acceptable inputs:
- **Direct hours** the client gives per hat, or
- **Percentages** of time per hat (must sum to 100%), converted to hours.

Document the source of the allocation (client interview, time study, estimate).

### 4. Price each hat at a market wage (triangulate)
Don't trust one number. For each hat, **triangulate 4–6 independent sources** — BLS OEWS as
the high-side anchor plus market data from Indeed, Glassdoor, Salary.com, Payscale, and
ZipRecruiter (gathered via `WebSearch`; see `wage-data.md` for the full procedure and
guardrails). Then:
- **Geography** — use state or metro (MSA) figures, not national, when available.
- **Reconcile** — drop unexplained outliers, take the median/trimmed mean of the cluster, and
  apply the **defensible-low posture**: land near the low end of the corroborated cluster
  (≈ market 25th percentile) when ≥3 sources support it, else the cluster median. Never go
  below the corroborated cluster.
- **Flag divergence** — BLS often runs *higher* than the open market; when it does, the market
  cluster governs and the report says so explicitly.
- **Experience / skill** — adjust within the range: up for deep experience, credentials,
  supervision, high-cost metro; down for nominal involvement. Always state the reason.
Record every source (figure, date, URL) so the reconciled rate is auditable.

Weighted wage per hat = `allocated hours × hourly wage`.

### 5. Sum → reasonable compensation
`Reasonable comp = Σ (hours_hat × wage_hat)`

Produce a **point estimate** (the sum at the chosen percentiles) and a **defensible
range** (e.g. the sum recomputed at the 25th and 75th percentiles) so the client can
see the safe band rather than a single brittle number.

## Reasonableness cross-checks (do these every time)

The build-up number is the answer, but sanity-check it against reality before publishing:

1. **Ability to pay.** Reasonable comp cannot exceed what the business can actually pay.
   If net income before owner comp is less than the build-up figure, the salary is
   generally capped near available cash — a company losing money is not expected to pay a
   large salary. Document this. (Distributions still generally require salary to be paid
   *first* to the extent of ability.)
2. **Salary-vs-distribution ratio.** Flag when the current W-2 salary is a small
   fraction of total owner cash (salary + distributions). There is no legal bright-line
   ratio, but a very low salary alongside large distributions is the exact pattern the
   IRS challenges (see `irs-factors.md`, *Watson* and *Fleischer*).
3. **Comparison to current comp.** Show current salary vs. the computed figure and label
   the risk: **under-paid** (audit exposure — recommend increasing), **in range**, or
   **over-paid** (over-paying payroll tax unnecessarily — may reduce).
4. **Employee benchmark.** If the company pays non-owner employees for similar work,
   the owner's rate should be coherent with those wages.

## What this method is and is not

- It **is** a documented, occupation-anchored estimate consistent with IRS factors and
  case law — strong support in an examination.
- It is **not** a guarantee, a legal opinion, or a substitute for a formal compensation
  study or valuation when large dollars or litigation are at stake. The report says so
  in its limitations section. Encourage a paid third-party study (e.g. RCReports) for
  high-stakes or contested cases.
