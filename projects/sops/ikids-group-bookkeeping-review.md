# iKids Group LLC — Monthly Bookkeeping & Close Runbook

> **Status:** Active (**seed — expected to grow**) · **Client:** iKids Group LLC (QBO via Double) ·
> **Owner of SOP:** Lilian · **Last updated:** 2026-08-11
>
> **Seeded 2026-08-11** from Lilian's account of how this client's bills reach us, plus the
> operating facts already established in
> [`../client-intelligence/clients/ikids-group.md`](../client-intelligence/clients/ikids-group.md).
> It documents the part of the monthly work that was at risk of living only in one person's head —
> the AP mailbox and the autopaid water bill. **The bank-feed / reconciliation detail is not written
> down yet**; add it here as it is established rather than starting a second document. Internal
> provenance — **stripped from the team-facing Hub view.**
>
> The `.md` is the source of truth (maximum detail). Figures, **all logins**, and the mailbox
> password live in the firm's client systems (Google Drive / Double / QuickBooks) — **never in this
> repo.**

## Client snapshot (operational, non-financial)

- **What the business is:** a **children's indoor play park** ("iKidsPark") being built out at a
  commercial site in **Fort Lauderdale, FL**. **Pre-operational** — construction / build-out phase,
  not yet generating revenue. This one fact drives the categorization (see the rules below).
- **Entity / tax:** LLC taxed as a **partnership** — files **Form 1065**, K-1s to the members.
  Income tax **is** our service; **1099 preparation** included; **annual report** we file.
- **Sales tax:** **N/A.** **Payroll:** **N/A** (pre-operational — no employees).
- **Systems:** QuickBooks Online (via Double). **Assigned bookkeeper: Lilian.**
- **Owners' language:** Russian / Ukrainian; correspondence in RU/UA.
- **Signing authority:** the LLC is **manager-managed with a single Manager** — anything needing a
  company-binding signature goes to him, not to the CFO and not to the other members. Names and
  percentages are in the client file / Double, never here.
- **Heavier than standard bookkeeping — the firm touches AP directly.** We **pay vendors from the
  client's account** (insurance, environmental report, city permits) and send the confirmations.
  The **water bill is the exception: it is on autopay.**
- **The client's AP mailbox — `ap.ikidsllc@gmail.com`.** A company mailbox (not a person's inbox)
  that the firm has access to. **Every vendor bill and payment confirmation arrives there**, and for
  several of them it is the **only** copy that exists: nothing is forwarded to us, and the client
  sends us nothing. The password lives in the client's vault, not here.

## Monthly close process

The one thing that makes this client different from a plain bank-feed client: **the paperwork does
not come to us — we go and get it.** Work the mailbox first, then the ledger.

1. **Open the client's AP mailbox and pull the month's bills and payment confirmations.** Sign in to
   `ap.ikidsllc@gmail.com` (password in the client's vault) and download **everything for the
   month** — vendor bills and the confirmations that a payment went through. Do this **every
   month**, as its own step: nobody forwards these and the client does not send them, so a month
   skipped is a month whose expenses sit in the books with no support behind them.
2. **The water bill: collect it, never pay it.** The water payment is **automatic** — the charge
   posts to the bank by itself, with no action from us. What is **not** automatic is the paperwork:
   the bill and its payment confirmation still have to be downloaded from the mailbox and matched to
   that transaction. **Do not pay it a second time** and do not chase the vendor for it — it is
   already paid.
3. **Attach each document to its payment transaction in QuickBooks.** Match every downloaded bill
   (and its confirmation) to the corresponding transaction so the expense carries its own support.
   Where a bill has no matching transaction yet, or a payment has no bill, that is the exception to
   raise — not something to categorize around.
4. **Categorize the month against the startup-cost rule.** The park has not opened: expenses are
   **capitalized as startup costs**, not expensed (see *Categorization rules*). Override any
   QuickBooks auto-suggestion that expenses them.
5. **Close gate — triage reads $0.** *Ask My Accountant* / uncategorized / holding accounts must be
   **$0** before the month is called closed. A $0 triage is necessary, not sufficient: it does not
   mean the categories are right.

## Categorization rules

These override any QuickBooks auto-suggestion — QBO is frequently wrong on this client precisely
because the business is pre-operational.

1. **Pre-operational — expenses are capitalized as startup costs, not expensed.** Until the park
   "begins operations", the build-out spend is **capitalized**; it does not hit the P&L as ordinary
   expense. **When operations begin is a live judgment call** tied to the opening date, and it is
   not settled — see the open-decisions log. Until it is, keep capitalizing and flag anything that
   looks like the business has started trading.
2. **Every bill we pay is a document we must hold.** The firm pays vendors from the client's
   account, so the only trail is the one we file: bill + payment confirmation attached to the
   transaction. A payment we made with nothing attached is an open item, not a closed one.
3. **The water bill is autopaid — treat the bank charge as expected.** It will appear without any
   instruction from us. Its bill comes from the mailbox, not from the client.
4. **Money in from the members is equity, never income.** This company has no revenue yet; funds
   arriving from a member are a **capital contribution**, and money going back out is a
   **distribution**. Post them to the specific equity accounts — never to the equity parent, and
   never to Sales.
5. **Every transaction gets a payee/vendor**, except member contributions, distributions, and
   transfers. An unidentifiable descriptor goes to *Ask My Accountant* (triage) — never a guess.
6. **Parents never receive postings** — post to sub-accounts only.

## Vendor & 1099 tracking — use Double

- The firm prepares this client's **1099s**, and the build-out means a real chance of contractor
  payments. Track every payee crossing the **$2,000** threshold (2026), collect a **W-9**, and sweep
  **across every labor account** at each close. Double flags missing payees and 1099 readiness — use
  it rather than eyeballing the ledger.
- Because we pay the vendors ourselves, a missing W-9 is **our** gap to close, not the client's.

## Chart of accounts conventions

- The firm's number-prefix grammar is the target here as everywhere: **100s assets · 200s
  liabilities · 300s equity · 400s income · 500s COGS · 600s opex · 800s other income · 901
  depreciation · 997/998/999 triage.** See the firm standard,
  [`chart-of-accounts-standard.md`](./chart-of-accounts-standard.md).
- **Startup costs are capitalized — they belong in the asset range**, not in opex, for as long as
  the pre-operational rule holds. When the "operations begin" date is settled, the changeover is a
  deliberate, dated reclassification done in **one batch**, not a drift.
- Classify first, restructure the chart second. Renames and renumbers are safe; merges and
  type-changes on a year with activity are not.

## Monthly review checklist (what the reviewer verifies)

1. The **AP mailbox was worked this month** — the month's bills and confirmations downloaded.
2. The **water bill** for the month is in hand **and attached** to the automatic payment — and was
   **not** paid a second time.
3. Every bill has a matching transaction, and every payment we made has its bill attached.
4. Build-out spend is **capitalized as startup costs**, not expensed.
5. Member money in/out is posted to the **equity sub-accounts**, not to income or the parent.
6. Payees present on everything except contributions, distributions and transfers; any payee at or
   above **$2,000** has a **W-9** on file.
7. **Close gate:** triage / *Ask My Accountant* reads **$0**.

## Open decisions log

| # | Question | Status | Notes |
|---|---|---|---|
| 1 | **When do "operations begin"?** — the date that stops startup-cost capitalization and starts normal expensing / depreciation | Pending | Tied to the park's opening. Julia's call; until it is fixed, keep capitalizing |
| 2 | Are any **other recurring vendors on autopay**, or is water the only one? | To verify | Only water is confirmed (Lilian, 2026-08-11). The rest are believed paid by us on request, but nobody has listed them |
| 3 | Where do the downloaded bills get **filed** — attached to the QuickBooks transaction only, or also into Double / the client's Drive folder? | To verify | Today the runbook says "attach to the transaction". Confirm with Lilian whether a second copy is expected |
| 4 | The **bank feeds and the reconciliation step** are not documented here yet | Pending | Add them to *Monthly close process* once established — this runbook is deliberately a seed |
| 5 | Is there a **fixed day of the month** the mailbox should be worked? | To verify | Doing it at close works; an earlier date would catch a missing bill while the vendor still answers |
