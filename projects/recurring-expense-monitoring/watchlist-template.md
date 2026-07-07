# Recurring Watchlist — <CLIENT NAME>

<!--
  BLANK TEMPLATE. Copy this into the Google Drive folder
  "JK Recurring-Expense Watchlists", rename to "<Client> — Recurring Watchlist",
  and fill it in. Do NOT commit a filled-in copy to the repo — client data lives
  in Drive only.
-->

**Double clientId:** `<numeric id from Double>`
**Report to:** lilian@jkaccountinggroup.com
**Status:** Active   <!-- or: Paused — <reason> -->
**Default anomaly threshold:** ±25%

## Watched items

| Match text (vendor or memo pattern) | What it is | Typical amount | Cadence | Expected day/window | Type | Threshold | Notes |
|---|---|---|---|---|---|---|---|
| e.g. `EXAMPLE SAAS` | Software subscription | $30 | Monthly | ~day 8 | alert | ±25% | |
| e.g. `EXAMPLE INSURANCE` | Business insurance | $200 | Monthly | ~day 1 | alert | ±25% | Policy lapse = high risk |
| e.g. `EXAMPLE AUTO INS` | Auto / GL insurance | $1,500 | Semi-annual | renewal months | renewal-reminder | — | Not a monthly item |
| e.g. `EXAMPLE HEALTH PLAN` | Health insurance | varies | Monthly | ~day 1 | presence-only | — | Amount changes; confirm when it shifts |
| e.g. `EXAMPLE UTILITY` | Utility (paid manually) | $250 | Monthly | mid-month | soft-reminder | — | Manual payment — nudge only, no alarm |
| e.g. `Zelle to <owner name>` | Firm's own fee | $500 | Quarterly | quarterly | presence-only | — | May post as a Zelle to the owner, not a company name |

### Column guide
- **Match text** — vendor name OR the memo/description pattern the payment posts
  under. Use whatever reliably identifies it in the ledger.
- **Type**
  - `alert` — normal recurring; flag if missing or abnormal amount.
  - `presence-only` — amount varies by design; only confirm it posted.
  - `renewal-reminder` — annual/semi-annual; checked only near its renewal month.
  - `soft-reminder` — manual payment; a gentle heads-up, never an alarm.
- **Threshold** — how far from typical before an amount is "abnormal" (default ±25%);
  use `—` for non-`alert` types.
- **Notes** — anything the reviewer should know (risk level, why it varies, etc.).

## Excluded (kept here so we remember the decision)

| Item | Why excluded |
|---|---|
| e.g. Contractor payments to individuals | Per firm rule — not subscriptions |
| e.g. Bank overdraft / NSF fees | Symptoms, not recurring obligations |
| e.g. A cancelled subscription | No longer active |
