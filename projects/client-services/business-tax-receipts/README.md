# Business Tax Receipts (BTR)

Filing Florida **Business Tax Receipts** — the local business licenses a company
needs to legally operate. In Florida this is usually a **two-tier** requirement:
a **city** receipt *and* a **county** receipt, plus (depending on the activity)
state-level licensing.

First jurisdiction covered: **City of Hollywood + Broward County.**

## How this task works

1. **Intake** — copy [`intake-checklist-template.md`](./intake-checklist-template.md)
   into `clients/<client-slug>.md` and fill in the business's details. This
   drives everything (the *activity/classification* decides the fee and whether a
   state license is required).
2. **Follow the guide** — [`hollywood-broward-btr-guide.md`](./hollywood-broward-btr-guide.md)
   is the step-by-step: order of operations, documents, fees, deadlines,
   contacts. The same procedure, written as a self-contained runbook, also lives
   in the firm's SOP index:
   [`sops/hollywood-broward-business-tax-receipt.md`](../../sops/hollywood-broward-business-tax-receipt.md).
3. **Verify current fees/forms** for the exact classification before filing
   (the guide flags what to confirm and gives the phone numbers).
4. **File** — Julia submits and pays; Claude prepares and pre-fills everything.

## Files

- [`hollywood-broward-btr-guide.md`](./hollywood-broward-btr-guide.md) — the reusable guide.
- [`intake-checklist-template.md`](./intake-checklist-template.md) — blank per-client intake sheet.
- `clients/` — per-client working files. **Not committed** (see `clients/.gitignore`).

## Notes

- New jurisdictions (Miami-Dade, Fort Lauderdale, etc.) get their own guide file
  in this folder as they come up. The intake template stays shared.
- If Julia ends up doing these often across many cities, this is the natural
  candidate to graduate into a `business-tax-receipt` **skill** (interactive
  intake → jurisdiction lookup → filled checklist), like the firm's other skills.
