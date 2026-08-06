# Write safety — the six layers

**The standing rules for changing anything in Odoo**, whichever route is used: the MCP
connector today, the direct API once it exists. They apply to the website above all, because
that is what the public sees.

> **Why they exist.** Today the 50-call/day ceiling works as a handbrake: a mistake stops
> itself after 50 calls. **A direct API connection removes that handbrake.** A bad loop can
> touch hundreds of records in seconds. So these stop being good habits and become the only
> protection there is.
>
> **And be clear about where the risk actually sits.** Lilian approves changes that are
> explained to her; the realistic failure is **Claude executing something wrong**. These
> layers are aimed at that: default simulation, a snapshot before every write, and an
> after-check that is *measured*, not eyeballed.

Designed as layers — if one fails, the next still catches it. None depend on anyone
remembering to be careful.

---

## Layer 1 — Limit what the key can do

The API key carries **exactly the power of its user**, so the first control is permissions,
not code.

1. **A dedicated user**, never Julia's. Revocable without touching anyone's account.
2. **Start with no write rights at all.** Prove the reads work first; add the website-edit
   right only when the person is ready to make a change.
3. **Never grant Administration / Settings.**

## Layer 2 — Always be able to undo

4. **A full Odoo backup before the first writing session** (`odoo.com` → *My Databases*).
   This is the big red button — take it once, before any of this starts.
5. **A snapshot of every record before touching it.** Read it, write its current contents to
   a timestamped file, and record the exact command that puts it back. **No snapshot, no
   write.**
6. **Never delete first — deactivate.** If a record genuinely has to be deleted (the
   `ir.ui.view` 2010 case), **export its full definition to a file first** so it can be
   recreated identically.

## Layer 3 — Three verifications per change

| | When | What happens |
|---|---|---|
| **1 — Before** | Before anything is written | Present the plan: which record, which field, **current value → new value**, and how to undo it. **The owner approves.** No approval, no execution |
| **2 — At execution** | The moment of the change | The tool runs **in dry-run by default** — it prints what it would do without doing it. A real write requires an explicit, separate flag |
| **3 — After** | Immediately after | Re-fetch the changed page over HTTP **and a canary set** of pages. Confirm 200 and the expected text on all of them |

**The third one is the one everybody skips.** Checking only the page you edited is not enough:
Odoo pages share templates, so a change can break something else entirely. The canary set —
at minimum the home page, `/pricing`, `/consultation`, `/ua/konsultatsiia`, `/appointment/1`
and `/appointment/3` — is checked **before and after**. It costs nothing (plain HTTP, not API
calls), so repeat it as many times as it takes to be sure.

## Layer 4 — Hard limits inside the tool

Written into the code, not left to judgment:

7. **Model allow-list.** Only the models agreed for the task (website views and pages,
   appointment types). Everything else refuses, even if asked.
8. **Absolute deny-list**, never writable by automation: `res.users`, `res.groups`,
   `ir.model.access`, `ir.rule`, and any deletion of `account.move`, `account.move.line`,
   `account.payment`. Permission and accounting changes are done by a human in the UI.
9. **One record at a time on the website.** No bulk writes to pages or views. (Batching is for
   accounting data under the MCP budget — it is not a licence to mass-edit the site.)
10. **An automatic brake:** if an operation would touch more than a handful of records, stop
    and ask.

## Layer 5 — Leave a trail

11. Every change leaves a record: **what, when, why, and how to undo it** — as a chatter note
    on the affected record (`mail.mt_note`, never `mail.mt_comment`) and in the repo's change
    log. If something looks wrong in a month, it must be possible to reconstruct what happened.

## Layer 6 — Rehearse where nobody can see

12. For substantial content changes — the Ukrainian landing, for instance — **duplicate the
    page, edit the unpublished copy, review it calmly, and only then publish**. The public
    never sees an intermediate state.

---

## The order of work matters too

Do the **reversible** things first and the irreversible last. The one known exception is the
booking-page 500, whose fix is a deletion — which is exactly why Layer 2's "export the full
definition first" is not optional there.

---

*Agreed with Lilian, Aug 2026, as the condition for opening a direct API connection. If a
rule here turns out to be impractical in real use, change it deliberately and say so in the
commit — do not quietly skip it.*
