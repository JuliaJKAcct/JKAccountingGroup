# Write safety — the six layers

> ⚠️ **Six is the design. In force today: fewer.** Layer 1 is **waived** (the key sits on
> Julia's administrator user — see its box). **Do not trust any summary of which rules are
> enforced — including this one. Read the `[code]` / `[convention]` tag on each rule**, and the
> enforcement box just below.

**The standing rules for changing anything in Odoo**, whichever route is used — the MCP
connector, or the direct API (reading since 2026-08-10; writing once it goes through
[`tools/odoo-api/`](../../../../tools/odoo-api/)). They apply to the website above all, because
that is what the public sees.

> **Why they exist.** The 50-call/day ceiling used to work as a handbrake: a mistake stopped
> itself after 50 calls. **The direct API removed that handbrake on 2026-08-10.** A bad loop can
> now touch hundreds of records in seconds. These stopped being good habits and became the only
> protection there is.
>
> **And be clear about where the risk actually sits.** Lilian approves changes that are
> explained to her; the realistic failure is **Claude executing something wrong**. These
> layers are aimed at that: default simulation, a snapshot before every write, and an
> after-check that is *measured*, not eyeballed.

Designed as layers — if one fails, the next still catches it.

> **What actually enforces each layer, today.** **`tools/odoo-api/` was built 2026-08-10**
> ([`direct-api-setup.md` §5](./direct-api-setup.md#5--the-tool--built-2026-08-10)), so the
> rules tagged **[code]** below are now mechanically enforced — the tool refuses, and
> `--execute` does not override it. The ones tagged **[convention]** are still down to the
> operator, and they are the ones to watch.
>
> ⚠️ **The tool is only a brake on writes that go through the tool.** A raw `curl`, or any code
> that imports `lib/client.mjs` directly, bypasses every layer here. That is a deliberate
> trade-off — reads have to stay cheap and unceremonious — but it means the rule "**writes go
> through `odoo.mjs`, always**" is itself a convention, and it is the one everything else rests
> on.

---

## Layer 1 — Limit what the key can do

The API key carries **exactly the power of its user**, so the first control is permissions,
not code.

> ### ⚠️ 2026-08-10 — this layer is WAIVED. It is not protecting anything today.
>
> The key the firm actually uses **sits on Julia's user, which is the administrator, and it never
> expires** (confirmed by Lilian). The dedicated user in rule 1 was **never created**: an extra
> internal user costs a full Odoo seat (+$31.10/month) and would have doubled the Odoo bill.
>
> Rules 1–3 therefore describe the design the firm **did not buy**. Do not read them as a
> description of the current setup — and do not "fix" it by moving the key, because that is a
> paid decision and it is **Lilian's to make**, not a session's.
>
> **What follows from the waiver, stated honestly.** These layers were written as a defence
> *behind* a scoped key. There is no scoped key, so for writes they are the front line, and the
> count is smaller than six: **Layer 1 is waived, leaving Layers 2–6 as the entire defence.**
> That is why [`direct-api-setup.md` §5](./direct-api-setup.md#5--the-tool--built-2026-08-10)
> gated the first direct-API write on `tools/odoo-api/` existing — **and as of 2026-08-10 it
> does**, so Layer 2's snapshot rule and all of Layer 4 are now enforced in code rather than by
> memory. **The limit of that guarantee:** it only binds writes that go through the tool. A raw
> `curl` bypasses every layer here, and the 50-call ceiling that used to backstop mistakes does
> not exist on the direct route.
>
> **And the practical consequence:** revocation is the only way to withdraw this credential —
> Julia's *avatar → My Preferences → Account Security*. Worth knowing before it is needed in a
> hurry.

1. **A dedicated user**, never Julia's. Revocable without touching anyone's account.
   ⚠️ **Not done — see the box above. The key is on Julia's administrator user.**
2. **Start with no write rights at all.** Prove the reads work first; add the website-edit
   right only when the person is ready to make a change.
   ⚠️ **Not done — an administrator key has every right from the start.**
3. **Never grant Administration / Settings.**
   ⚠️ **Not applicable — the user this key belongs to *is* the Settings user.**

## Layer 2 — Always be able to undo

4. **A full Odoo backup before the first writing session** — `odoo.com` → *My Databases*
   (signed in as the database administrator). This is the big red button; take it once,
   before any of this starts. **[convention]**
5. **A snapshot of every record before touching it — and of everything that points at it.**
   Read it, write its current contents to a timestamped file, and record the exact command
   that puts it back. **No snapshot, no write.** **[code]** — `store.snapshot()`; the write refuses if it throws

   The record alone is **not enough** on the website models, because Odoo cascades:

   | Relation | Behaviour | Consequence |
   |---|---|---|
   | `website.page.view_id` → `ir.ui.view` | **cascade** | Deleting a view **silently deletes the page** pointing at it — with its URL, menu entries, published flag and SEO fields. Re-creating the view does **not** bring the page back |
   | `ir.ui.view.inherit_id` | **restrict** | If any view inherits from the target, the delete **fails outright** — a different outcome than "it worked", and better known in advance |

   So before deleting a view, also `search_read`: `ir.ui.view` where `inherit_id = <id>`,
   `website.page` where `view_id = <id>`, `website.menu` where `page_id = …`, and the
   `ir.model.data` row. **Snapshot the record *and its dependents*.**
6. **Never delete as the first move — deactivate and observe.** If a record genuinely has to
   be deleted, export its full definition (and its dependents, above) first, so it can be
   recreated identically. **[convention]**

   > **Deactivation is a probe, not the fix.** For the `ir.ui.view` 2010 case specifically,
   > [`INSTALL-ODOO.md`](../../../../projects/marketing/consultation-booking/INSTALL-ODOO.md#-known-breakage-every-booking-page-returns-500-found-aug-2026)
   > explains why un-ticking *Active* may leave the page still broken: a **primary**
   > website-specific copy is resolved by key + website, and that lookup is not reliably
   > filtered on `active`. Deactivate to learn; delete to fix.

## Layer 3 — Three verifications per change

| | When | What happens |
|---|---|---|
| **1 — Before** | Before anything is written | Present the plan: which record, which field, **current value → new value**, and how to undo it. **The owner approves.** No approval, no execution **[convention]** |
| **2 — At execution** | The moment of the change | The tool runs **in dry-run by default** — it prints what it would do without doing it. A real write requires an explicit, separate flag **[code]** — dry run unless `--execute` |
| **3 — After** | Immediately after | Re-fetch the changed page over HTTP **and a canary set** of pages, and compare against the baseline recorded before **[code]** — every `--execute` sweeps before and after and exits non-zero on a regression |

**The third one is the one everybody skips.** Checking only the page you edited is not enough:
Odoo pages share templates, so a change can break something else entirely. The canary set —
at minimum the home page, `/pricing`, `/consultation`, `/ua/konsultatsiia`, `/appointment/1`
and `/appointment/3` — is checked **before and after**. It costs nothing (plain HTTP, not API
calls), so repeat it as many times as it takes to be sure.

**Judge it against the baseline, not against 200.** The principle stands, but **the example
it used is out of date: `/appointment/1` and `/appointment/3` return 200 as of 2026-08-10**,
rendering "Discovery Call" and "Consultation" — they are no longer broken. The test is
therefore, always: **no page may get worse than its recorded baseline**, and the pages the
change was meant to fix must get better. Record a fresh baseline (`odoo.mjs baseline`) rather
than trusting any status written down here.

## Layer 4 — Hard limits inside the tool

**All four are now in the code of `tools/odoo-api/lib/safety.mjs`** and were verified by
running them — each refuses with a non-zero exit code even when `--execute` is passed. **[code]**

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

11. Every change leaves a record: **what, when, why, and how to undo it.** Where that record
    lives depends on the model, and the difference matters:

    - **Models with chatter** (accounting entries, partners, CRM leads — anything inheriting
      `mail.thread`): post a note with `mail.mt_note`, **never** `mail.mt_comment`, which
      emails every follower. This is the convention in the skill's §2.
    - **Website records have no chatter at all.** Neither `ir.ui.view` nor `website.page`
      inherits `mail.thread`, so `post_message` simply fails on them. For website changes the
      **snapshot file plus the repo change log are the only trail there is** — which raises
      the stakes on Layer 2, it does not lower them. Never skip the snapshot on the assumption
      that a chatter note is recording things.

## Layer 6 — Rehearse where nobody can see

12. For substantial content changes — the Ukrainian landing, for instance — **duplicate the
    page, edit the unpublished copy, review it calmly, and only then publish**. The public
    never sees an intermediate state.

---

## The order of work matters too

Do the **reversible** things first and the irreversible last — *unless something irreversible
is blocking everything else*.

> ### ⚠️ 2026-08-10 — the exception that drove this section has expired. Do not act on it.
> This section used to say **the `ir.ui.view` 2010 deletion goes FIRST**, because until it was
> done "nothing on the site can be booked at all".
>
> **Both halves are now false, verified live:** every booking page returns **HTTP 200** and
> renders (`/appointment/1` → "Discovery Call", `/appointment/3` → "Consultation"), **and view
> 2010 still exists and is active** — so the prescribed fix was never applied and the pages
> recovered anyway. Whatever resolved it, deleting an active view to fix a page that works
> would now be an unforced, irreversible change.
>
> **So the plain rule applies again: reversible first, irreversible last.** Before touching
> view 2010 for any reason, re-verify the breakage still exists. See
> [`FOLLOW-UPS.md`](../../../../FOLLOW-UPS.md) row 20.

---

*Agreed with Lilian, Aug 2026, as the condition for opening a direct API connection. If a
rule here turns out to be impractical in real use, change it deliberately and say so in the
commit — do not quietly skip it.*
