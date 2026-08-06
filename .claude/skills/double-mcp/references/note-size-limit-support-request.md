# Double support — the note-size 403 (draft request, Aug 2026)

**Status:** drafted 2026-08-06 for Lilian to send. **Not yet sent.** When Double answers, record the
answer in [`../SKILL.md`](../SKILL.md) §7 ("the size wall") and delete or supersede this file.

**Why this file exists:** the limit shapes how the firm's case notes are written (§7), so the exact
evidence is kept here rather than reconstructed from memory the next time it comes up — and if
support asks for detail, or the request has to be re-sent to a different team, it's ready.

---

## The email to send

> **Subject:** MCP integration: `create_note` / `update_note` return HTTP 403 at or above ~8,000-character bodies
>
> Hello,
>
> I'd like help with a limit we're hitting when writing client notes through the API, and I want to
> explain the whole situation so it's clear what we're trying to do.
>
> **Who we are and how we're using Double.** We're JK Accounting Group, an accounting firm using
> Double as our practice-management platform. Besides working in the web app, we connect to Double
> through its **MCP integration**, driven by **Claude** (Anthropic's AI assistant). Claude helps us
> read client data and write notes, so a lot of our note-writing goes through the API rather than
> through typing in the browser.
>
> **What we're trying to do.** We've started keeping what we call a **case note**: for a client
> matter that runs for weeks — a state tax agency issue, a payroll platform dispute, an access
> problem — we keep **one single note on the client** that records the whole history from beginning
> to end. It holds the current status, what we're waiting on and from whom, a dated timeline of every
> call and email, and the open questions. The point is that anyone on our team can open the client in
> Double and understand the matter in a minute, instead of digging through months of email.
>
> Those notes are naturally long: a status line, a "who is who" block, the pending actions, the
> possible resolution paths, and eight or nine dated timeline entries.
>
> **The problem.** When the note body reaches roughly **8,000 characters**, the request fails with
> **HTTP 403 Forbidden**. Shorter bodies are accepted normally. Measured 2026-08-06 against
> `create_note` and `update_note`:
>
> | Note body | Result |
> |---|---|
> | ~7,600 characters of real content | ✅ accepted |
> | ~8,000 characters of real content | ❌ 403 Forbidden |
> | ~10,400 characters of real content | ❌ 403 Forbidden |
> | **~8,200 characters of plain filler text** (one sentence repeated, no markup, no client data) | ❌ **403 Forbidden** |
>
> **That last row is the important one: the same failure happens with meaningless repeated text, so
> this is about request size, not about anything in our content.**
>
> Other details that may help you locate it:
>
> - It affects both **`create_note`** and **`update_note`**.
> - It is **fully reproducible** — the same payload fails every time, and trimming it below the
>   threshold makes it succeed.
> - **Every other API call succeeds at the same moment**, including a plain connectivity check, so
>   this is not a connection or authentication problem.
> - The response we get is:
>
>   ```
>   MCP server returned 403 Forbidden — the request may have been blocked by a firewall or
>   security service
>   error_code: mcp_request_blocked
>   ```
>
>   That shape suggests a **request-size rule in front of the API** rather than a validation error
>   from Double itself — but we can't tell from our side.
> - It happened on client IDs **706709** and **710577**, on **2026-08-06 between roughly 03:25 and
>   04:45 UTC**.
>
> **What I'd like to ask:**
>
> 1. Is there a **documented maximum note length** for the API? If so we'll design around it — but a
>    clear error message would help much more than a 403, which reads like a permissions problem.
> 2. If it's a **security or request-size rule**, can it be **raised or whitelisted** for our account?
> 3. Does the **web interface** have the same limit? That would tell us whether this is only the API
>    path.
>
> **What it costs us today.** We have had to **cut real content out of two case notes** to get them
> under the threshold — the histories are shorter than the matters warrant. Our fallback is to split a
> history across "Part 1 / Part 2" notes, which we have designed but not yet had to use, and which
> defeats the point of keeping one note per matter.
>
> If it helps you trace it, I can send a **synthetic payload of the exact failing size** — better
> evidence than our real notes, since size is the variable under test, and it avoids sending you
> client data you already hold.
>
> Thank you,
>
> Lilian Gonzalez
> Client Success Manager, JK Accounting Group

**Before sending, add your Double account / workspace name** in the opening line. The client IDs imply
the tenant, but naming it outright saves a round trip.

---

## Notes for whoever follows this up

- **The content-independence test is already done** — plain filler text at ~8,200 characters was
  refused exactly like real content (2026-08-06). That closes support's most likely first
  counter-hypothesis, that something *in* our notes trips a pattern rule. Keep that row in the table.
- **Test the web UI if you can, but do it safely.** Paste a ~10,000-character note in the browser and
  see whether it saves. Guardrails, because **the MCP has no `delete_note`** — a test note can only be
  removed by hand in the browser:
  - use an **archived or internal** record, never a client with a live case note (§7 rule 1 forbids a
    second note on a tracked matter);
  - **delete it in the browser immediately** after looking;
  - if the browser accepts it, that is the strongest single piece of evidence that only the API path
    is affected, and question 3 answers itself.
- **The boundary is not bracketed tighter than 7,600–8,200 characters.** If support asks for the exact
  cutoff it can be bisected; nobody has needed it badly enough yet.
- **Character count may not be the unit.** The title and JSON escaping travel with the body, and real
  note bodies are HTML with multi-byte characters (`—`, `§`, `⚠️`, `✅`), so the true limit may be
  expressed in **bytes**. Raise this only if support disputes the numbers.
- **If the limit is raised**, collapse any `Part 1 / Part 2` notes back into one — a single note per
  matter is the shape the convention wants (§7 rule 1).
