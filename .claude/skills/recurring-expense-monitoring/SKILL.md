---
name: recurring-expense-monitoring
description: Check whether a bookkeeping client's expected recurring monthly payments (subscriptions, insurance, storage, utilities, payroll-service fees, the firm's own fee, loan/finance payments) actually posted this period, and flag any that are missing or whose amount deviates from normal. Also surfaces newly-appeared recurring charges not yet on the watchlist. Use when running the scheduled mid-month (day 20) or end-of-month recurring-expense check for a monitored client, when someone asks to verify a client's recurring/subscription payments for the month, or to detect new recurring charges. Reads the per-client watchlist from the firm's Google Drive and the transaction ledger from Double (QuickBooks). Read-only: it flags for human review, it never pays, records, or edits anything.
---

# Recurring-Expense Monitoring

Watch a client's **recurring monthly obligations** and raise an early warning when
one **did not post** this period or **posted at an unusual amount** — before it turns
into a late fee, a lapsed policy, or a client asking why we didn't catch it. The
common cause is low funds in the client's bank account (a card declines, an ACH is
returned for insufficient funds), so catching it mid-month buys time to fix it.

This skill is the engine behind the `recurring-expense-monitoring` project. It runs
per client, on a schedule (day 20 and the last day of each month), and emails a
short exception report to the responsible staff member.

## Guardrails (do not skip)
- **Read-only.** Never pay, record, categorize, or modify anything. This skill only
  reads and reports. A human acts on the report.
- **Flag for review, don't conclude.** You are a second set of eyes, not the close.
  If you are unsure whether a payment posted, say so — do not assert it as missing.
- **The memo is the source of truth.** Before flagging anything as missing or
  abnormal, read the transaction memos/descriptions for that vendor. If a memo
  explains the situation (cancelled, paid early, refunded, amount changed), do NOT
  raise it as an alert — list it under "Explained in memo" instead. See below.
- **Never fabricate.** If the ledger or the watchlist can't be read, report that you
  couldn't connect and stop — do not invent a "clean" result.
- **Client data stays out of the repo.** Watchlists and any client figures live in
  Google Drive / Double / QuickBooks — never write them into this repository.
- **English output.** The emailed report is written in English.

## Where things live
- **Per-client watchlists → Google Drive**, in the firm folder
  **"JK Recurring-Expense Watchlists"**, one file per client (e.g.
  `<Client Name> — Recurring Watchlist`). The watchlist is the curated list
  of what to check for that client; it is the single source of truth for *what*
  recurs. See `watchlist-template.md` in the project for the schema.
- **Transaction ledger → Double** (MCP server). Each client has a numeric Double
  `clientId` recorded at the top of its watchlist. The Double bank/credit-card
  **cash feed is the ground truth** for "did the money actually move." (Note: the
  Double *expenses-by-vendor* report is accrual and can miss items paid from
  unlinked accounts or booked as bills — do not rely on it for presence.)
- **Report delivery → email** to the staff member named in the watchlist
  (default `lilian@jkaccountinggroup.com`) via the Gmail integration.

## Tools
- Google Drive MCP — locate and read the client's watchlist file.
- Double MCP — `list_clients`, `get_transactions`, `get_transactions_count`,
  `get_expenses_by_vendor_report` (load schemas via ToolSearch first).
- Gmail MCP — send the report to the responsible staff member.
- If a needed MCP server is unauthenticated in an unattended run, stop and send a
  "could not connect — please re-link <service>" note instead of a false all-clear.

## Workflow

### Step 1 — Establish run context
- **Run type:** `mid-month` (fired ~day 20) or `end-of-month` (fired on/after the
  last day). The date is passed in the trigger prompt; if absent, infer from today.
- **Target month:** the current calendar month.
- Both runs review the **month-to-date** and compare against what *should* have
  posted by now.

### Step 2 — Load the watchlist
- Find the client's file in the Google Drive watchlist folder and read it.
- Parse: the client's Double `clientId`, the responsible staff email, the default
  anomaly threshold, and each watched item (vendor/match text, what it is, typical
  amount, cadence, expected day/window, item **type**, per-item threshold, notes).
- If no watchlist exists for the client, stop and report that (nothing to monitor).

### Step 3 — Pull this period's transactions (plus a short lookback)
- Load Double schemas, `list_clients` to confirm the `clientId`, then
  `get_transactions` for the target month **and the prior ~2 months** (a trailing
  window), sorted by date. The prior months give context you need: each item's
  typical amount, whether it posted last month (for the catch-up check below), and
  whether a newly-seen charge actually recurs.
- Read the **line `description` field** — it holds the raw bank text **and** any memo
  a bookkeeper appended (often a sentence after the bank text). Page through all pages.

### Step 4 — Evaluate each watched item
For every item on the watchlist, by its **type**:

- **`alert` (standard recurring):**
  - **Not found this period** and we are past its expected day/window → candidate
    **missing payment**.
  - **Found but amount deviates** beyond the threshold (default ±25%) → candidate
    **abnormal amount**.
  - **Two charges this month → catch-up vs. duplicate.** First, two **identical
    same-day entries with the same bank reference** read as a **possible duplicate**
    regardless of prior months (usually one transaction booked twice). Otherwise, look
    at the prior month (from the lookback): if the item did **not** post last month,
    treat the second charge as a likely **catch-up for last month's missed/late
    payment** — say so ("two charges this month: likely last month + this month after a
    failed payment"), *not* a duplicate. If instead it posted every prior month with no
    gap, a second same-month charge reads as a **possible duplicate**. With no memo,
    state which it looks like and ask the bookkeeper to confirm.
  - **Match by the item's match text**, which may be a vendor name OR a memo/pattern
    (e.g. some fees post as "Zelle to <person>" — use the match text from the
    watchlist, not just the vendor field).
- **`renewal-reminder` (annual / semi-annual, e.g. semi-annual auto insurance):**
  - Do NOT flag as "missing" in ordinary months. Only in its renewal month, check it
    posted; near the renewal month, add a heads-up that it's due.
- **`soft-reminder` (manual payment, e.g. a utility someone pays by hand):**
  - Never an alarm. If it hasn't posted and enough days have passed, add a gentle
    informational note ("heads-up: <item> hasn't posted yet this month") — framed as
    a reminder, not a problem.
- **`presence-only` (amount varies a lot by design, e.g. a health-insurance premium
  the client keeps changing, or the firm's own variable fee):**
  - Check it posted at all; do not alarm on amount. If timing is irregular, note
    rather than alert.

**Before promoting any candidate to an alert, read that vendor's memos.** If a memo
explains it, move it to "Explained in memo." Only unexplained candidates stay as
alerts.

### Step 5 — New-recurring sweep
Scan this period's transactions for charges that **look recurring** (a vendor/amount
that also appears in recent prior months) but are **not on the watchlist**. Surface
them as "Possible new recurring charge — add to watchlist?" Do not add them yourself;
the team curates the watchlist.
- **Don't suggest things that aren't automatic recurring charges:** one-off supplier
  or vendor payments, and amounts the **firm itself calculates and submits** (e.g. a
  sales-tax remittance to a state department of revenue) — those are manual filings on
  our side, not charges that auto-post, so they don't belong on this watchlist.
- If only one month of history is available (a short-history client), a "new" charge
  can't be confirmed as recurring — label such items as candidates to verify against
  prior months before adding.

### Step 6 — Compose the report (English, sectioned — never one mixed table)
Order by priority; the urgent things first, the reassurance last:

```
Recurring-Expense Report — <Client> — <Month Year>  (<mid-month|end-of-month> check)

🔴 Needs attention
  - Missing: <item> (~$<typical>) has not posted this month.
  - Abnormal amount: <item> posted $<actual> vs ~$<typical> (<±%>).
  - Two charges: <item> posted twice — likely a catch-up for last month's missed
    payment (or a possible duplicate — confirm).
  (omit the section if empty; say "Nothing needs attention." )

🆕 Possible new recurring charges
  - <vendor> $<amt> — seen <months>; not on the watchlist. Add?

ℹ️ Reminders
  - <soft-reminder item> hasn't posted yet this month (manual payment).
  - <renewal-reminder item> renews next month.

🟡 Explained in memo — no action
  - <item>: <one-line memo quote>.

🟢 All good
  - <item> $<amt> ✓ · <item> $<amt> ✓ …
```

### Step 7 — Deliver
- Email the report to the responsible staff member (default
  `lilian@jkaccountinggroup.com`) via Gmail. Subject like
  `Recurring-expense check — <Client> — <Month> (<run type>)`.
- If email sending isn't available in the run, save a draft and note it.
- Keep a one-line log of what ran (client, date, run type, counts).

## Running it for all monitored clients
The scheduled job iterates every client that has a watchlist file in the Drive
folder. Clients marked **Paused** in their watchlist (e.g. bank feed disconnected)
are skipped with a one-line "paused" note, not a false all-clear.

## Anomaly threshold
Default **±25%** from the item's typical amount, overridable per item in the
watchlist. Widen it for items known to vary (utilities, usage-based fees).

## Notes / gotchas
- History depth varies by client; judge "recurring" from the months actually
  available and state low confidence when history is short.
- Some obligations (rent booked without a vendor, payments to an individual
  landlord) won't match by vendor name — rely on the watchlist's match text/notes,
  and flag to the team when categorization makes an item impossible to track.
- This is decision support for the bookkeeper, not a guarantee; the report says so.
