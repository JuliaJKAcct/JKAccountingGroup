# Wage Data — Multi-Source Triangulation

Each "hat" in the build-up is priced by **triangulating several independent wage sources**,
not by trusting a single number. This matters because the government/BLS wage for a given
occupation often runs **higher** than what the open market actually pays (BLS skews toward
larger, established employers), while any single job-board figure can be a noisy outlier.
Triangulation pins down the *true market rate* — frequently lower than BLS — and, just as
importantly, **documents** that it is lower with corroborating evidence. A lower figure that
five sources agree on is defensible; a lone lowball is not.

## Default posture: **Defensible low**

Set the recommended rate near the **bottom of the corroborated cluster** (≈ the market 25th
percentile) **whenever at least 3 independent sources support it**. This minimizes the
client's payroll tax while staying fully documented. Guardrails (never break these):
- **Never go below the corroborated cluster.** The point estimate must sit at or above the
  lowest *credible, clustered* data — never below the minimum, never below a single outlier.
- **Require ≥3 corroborating sources** to use a figure below the BLS median. With fewer, fall
  back toward the median of what you have and note the thin evidence as a limitation.
- **Show every data point** (source, geography, date, URL, value) in the report's wage-evidence
  table. Transparency is what makes "lower" hold up.

## The sources (aim for 4–6 per role)

| Tier | Source | How to get it |
|---|---|---|
| Anchor | **BLS OEWS** (bls.gov/oes) | Government, authoritative; state/metro + percentiles. The high-side anchor. |
| Market | **Indeed** | via `WebSearch` — publishes avg + range by role & metro |
| Market | **Glassdoor** | via `WebSearch` — avg + 25th/75th, employee-reported |
| Market | **Salary.com** | via `WebSearch` — percentile bands |
| Market | **Payscale** | via `WebSearch` — hourly & experience-adjusted |
| Market | **ZipRecruiter** | via `WebSearch` — postings-based |

> **Do not scrape these sites directly.** Indeed/Glassdoor/LinkedIn return `403` to automated
> fetches and their ToS forbids scraping. Use **`WebSearch`** — it surfaces their published
> figures compliantly. A query like `"<role> salary <city> <state> 2026 Indeed Glassdoor"`
> returns numbers from several platforms at once. If web access is unavailable in the session,
> ask the analyst to paste figures they looked up manually, or use a clearly-labeled estimate.
> **Never present an estimate or a remembered number as a sourced quote.**

## Step-by-step per role

1. **Pick the occupation (SOC).** Most specific match to the actual work (map below). Role
   definition matters enormously — e.g. "bookkeeper" (~$48–55k Miami) vs. "full-charge
   bookkeeper" (~$79k Miami) are different jobs. Choose the one that fits the real duties.
2. **Anchor with BLS** — median + 25th/75th for the SOC and geography.
3. **Gather market points** — one `WebSearch` per role/geography; capture each platform's
   figure (convert annual↔hourly as needed; note if it's an average vs. a percentile).
4. **Build the evidence table** — every point with source, geography, date, value, URL.
5. **Reconcile** to a triangulated rate:
   - Drop obvious outliers (a point far outside the cluster with no explanation).
   - Compute the **median or trimmed mean** of the remaining points (robust to noise).
   - Apply the **posture**: for *defensible low*, take the low end of the corroborated cluster
     (≈ market 25th pct) when ≥3 sources support it; otherwise the cluster median.
   - **Flag divergence:** when BLS sits well above the market cluster, state it plainly — this
     is the "government rate exceeds market" case, and the market figure governs.
6. **Adjust for skill/experience** within the range: move up for deep experience, credentials,
   supervision, high-cost metro; down for nominal/occasional performance. State the reason.

## Occupation (SOC) quick map

| Hat / function | SOC | Occupation |
|---|---|---|
| Owner / executive leadership | 11-1011 | Chief Executives |
| General management / operations | 11-1021 | General & Operations Managers |
| Bookkeeping | 43-3031 | Bookkeeping, Accounting & Auditing Clerks |
| Accountant / tax prep (credentialed) | 13-2011 | Accountants & Auditors |
| Sales management | 11-2022 | Sales Managers |
| Sales representative | 41-4012 | Sales Representatives |
| Marketing management | 11-2021 | Marketing Managers |
| Administrative assistant | 43-6014 | Secretaries & Admin Assistants |
| Office clerk (general) | 43-9061 | Office Clerks, General |
| Customer service | 43-4051 | Customer Service Representatives |
| Human resources | 13-1071 | HR Specialists |
| Industry technician/trade | (varies) | e.g. 47-2111 Electricians, 35-1011 Chefs |

> The "Chief Executive" wage is high and pulls totals up fast — reserve it for genuine
> strategic leadership; route routine management to *General & Operations Managers* and
> hands-on work to its own SOC.

## Documentation requirements (per role, in the report)

Record for each role: occupation + SOC · geography · **every source with its figure, date, and
URL** · the outliers dropped and why · the reconciled rate + posture applied · the
experience/percentile adjustment. If BLS diverged high from market, say so in words. This
evidence table is the backbone of defensibility.
