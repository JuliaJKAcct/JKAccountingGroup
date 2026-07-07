# SOP: Recurring-Expense Monitoring

> **Status:** Active · **Owner:** Julia · **Last updated:** 2026-07-07

The runbook for the recurring-expense watch: what it does, how it runs, how to read
the report, and how to keep each client's watchlist current. Written for the team
(Lilian operates it day to day).

> **Where client data goes:** the per-client watchlists (real vendors and dollar
> amounts) live in **Google Drive**, folder **"JK Recurring-Expense Watchlists"** —
> **never** in this repo. This SOP and the blank `watchlist-template.md` are the only
> things kept here.

---

## 1. What this does

For each monitored client, twice a month, the system checks the client's
QuickBooks/Double ledger and answers two questions:

1. **Did every expected recurring payment post this month?** (subscriptions,
   insurance, storage, utilities, payroll fees, our own fee, loan/finance payments)
2. **Did any post at an unusual amount?** (or twice, or way off the normal)

It also watches for **new** recurring charges that aren't on the list yet. It then
emails a short report — **only the exceptions get top billing**; the "all good" list
sits at the bottom.

It is **read-only**: it never pays or changes anything. It raises a flag; a person
decides what to do.

## 2. Schedule

- **Day 20** of each month — catches early-month failures while there's still time
  to fix the payment before a late fee.
- **Last day** of each month — the full-month view / safety net.
- Report is emailed to **lilian@jkaccountinggroup.com** (set per client in the
  watchlist).

## 3. How to read the report

| Section | What it means | What to do |
|---|---|---|
| 🔴 **Needs attention** | A recurring payment is **missing** or the **amount is off**. | Investigate. Usually low funds / a declined card. Contact the client or arrange the payment before penalties. |
| 🆕 **Possible new recurring charge** | A charge that looks recurring but isn't on the watchlist. | Decide: add it to the watchlist (in Drive) or ignore it. |
| ℹ️ **Reminders** | A manual payment (one the team pays by hand) not yet posted, or an annual/semi-annual item coming due. | A nudge — make the manual payment, or note the upcoming renewal. |
| 🟡 **Explained in memo** | Something looked off, but a memo explains it. | Nothing — shown only so you know it was reviewed. |
| 🟢 **All good** | Posted, normal amount. | Nothing. |

## 4. The memo trick (how to silence a false alarm)

If a payment legitimately didn't happen or came in at a different amount this month
and there's a reason, **write the reason in the transaction's memo in QuickBooks** (e.g. "client
cancelled this subscription", "paid double last month, skipped this month", "rent
increased"). Next run, the system reads the memo and moves that item to **"Explained
in memo"** instead of flagging it. **The memo is the source of truth** — one note and
it stops bothering you about it.

## 5. Curating a client's watchlist (in Google Drive)

Open the client's file in the **"JK Recurring-Expense Watchlists"** Drive folder and
edit the table. Use the columns in `watchlist-template.md`. Common edits:

- **Add** a new subscription the client started (often prompted by a 🆕 line).
- **Remove** something that was cancelled (or mark it so it's ignored).
- **Adjust** the typical amount after a price change, or widen the threshold for an
  item that naturally varies.
- **Set the type** for special cases:
  - `alert` — normal recurring; alarm if missing/abnormal.
  - `presence-only` — amount varies by design; only check it posted (e.g. a health
    plan the client keeps changing, or our own variable fee).
  - `renewal-reminder` — annual/semi-annual (e.g. semi-annual auto insurance); only
    checked near its renewal month.
  - `soft-reminder` — a manual payment; a gentle heads-up, never an alarm.
- **Match text:** if a payment doesn't post under an obvious vendor name (e.g. our
  fee posts as a Zelle to the owner rather than a company name), put that text in the
  match column so the system recognizes it.

## 6. Adding or pausing a client

- **Add:** copy `watchlist-template.md` into the Drive folder, name it
  `<Client> — Recurring Watchlist`, fill in the client's Double `clientId` and items.
- **Pause:** mark the client **Paused** at the top of its watchlist (e.g. bank feed
  disconnected). It's skipped with a one-line note, not a false all-clear.

## 7. Scope

The monitored clients are Lilian's assigned book of business. The **authoritative
list is simply the set of watchlist files in the Drive folder** — add or pause a
client there, not here. A client can be **Paused** at any time (e.g. while a bank
feed is disconnected); paused clients are skipped with a one-line note.

## 8. Good to know / limits

- It reads the **bank/credit-card cash feed** — the real money movement. If a payment
  was made but never recorded, it will look "missing" until it's booked (often that's
  exactly what you want to catch).
- Short client history = lower confidence on what "recurring" means; the report says
  so when it's unsure.
- It's decision support, not a guarantee. A person still reviews.
