# Platforms & vendors

How the systems we work in actually behave — Gusto, QuickBooks, Double, Odoo — and how to
carry out the procedures that aren't in any manual.

## LN-10 — Gusto files nothing, not even $0 returns, until the first check date
- **Tags:** gusto · payroll · providers
- **Certainty:** Established
- **Star:** yes
- **Added:** 2026-08-06
- **Came from:** Tsminibears LLC — Gusto case #43016275
- **Detail:** [`tsminibears.md` §5](../../client-intelligence/clients/tsminibears.md)

**What happened.** The Florida RT account number was sitting in the Gusto account, so
everyone assumed Gusto was filing the zero returns. It wasn't. Gusto's own words: *"We do
not file any returns, including $0 returns, until you report wages and taxes in a state."*
Its authorization begins with the **quarter of the first check date**, and for a notice
covering an earlier period it says plainly that it **cannot help**. The Payroll Service
Terms say the same: at least one processed payroll before Gusto files, and the company
stays **solely responsible** to the taxing authorities.

**The rule.** Having the account number in the payroll platform means nothing. Until the
first payroll actually runs, **the firm files the $0 returns itself** — and when a provider
is engaged, **ask it in writing which quarter it begins filing from.** Everything between
the state registration and the first payroll belongs to the employer, and it's invisible
precisely because a provider is in place and everyone assumes it's handling things.

## LN-34 — Moving the QuickBooks primary admin when the current one can't receive the code
- **Tags:** quickbooks · access · handover · billing
- **Certainty:** Working assumption
- **Star:** yes
- **Added:** 2026-08-06
- **Came from:** Ecoorganic USA — the primary admin is the owner's father, who lost the phone on the account
- **Detail:** [`ecoorganic-usa.md` §3 + §6](../../client-intelligence/clients/ecoorganic-usa.md) · Double case note 485258 · the QR code and support case are with Lilian

**What happened.** The primary admin no longer had the phone tied to the account, so every
verification code QuickBooks sent went to a phone nobody could read — and the in-product
transfer **dead-ends there**. QuickBooks support gave a different route: identity
verification. Marked **Working assumption** because it hasn't completed yet — as of
2026-08-06 it's paused waiting on the original admin.

**The rule — the order, and why it's that order.**

1. **Create a user for the person receiving it.** ⚠️ This can force a **subscription
   upgrade** — a one-user plan has no room for a second — so the account ends up with two
   users **on purpose**; nobody should "clean up" the duplicate.
2. **Change the phone on the account** to the new person's.
3. **Try the in-product transfer.** If the code goes to an unreachable phone, stop — it
   cannot be forced.
4. **Call QuickBooks support for the identity-verification route.** They issue a **QR code**;
   the **original primary admin personally** scans it and uploads **a photo of their ID**.
   Nothing moves until they do it, so if you only reach them through a relative, that
   relative is your whole timeline.
5. **Confirm the new primary admin's access actually works**, and **confirm the firm's own
   access survives a single-user plan** — don't assume it does.
6. **Then delete the old user** — you cannot delete a primary admin, which is why this step
   is here and not earlier.
7. **Then downgrade the subscription**, confirming with the client first because it's their
   billing. **This is the step that gets forgotten**, and the client keeps paying for the
   bigger plan until someone remembers.
