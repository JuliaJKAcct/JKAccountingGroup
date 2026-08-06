# Double support — the note-size 403 (draft request, Aug 2026)

**Status:** drafted 2026-08-06 for Lilian to send. **Not yet sent.** When Double answers, record the
answer in [`../SKILL.md`](../SKILL.md) §7 ("the size wall") and delete or supersede this file.

**Why this file exists:** the limit shapes how the firm's case notes are written (§7), so the exact
evidence is kept here rather than reconstructed from memory the next time it comes up — and if
support asks for detail, or the request has to be re-sent to a different team, it's ready.

---

## The email to send

> **Subject:** Notes API returns HTTP 403 for note bodies over roughly 8,000 characters
>
> Hello,
>
> I'd like help with a limit we're hitting when creating client notes through the API, and I want to
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
> Those notes are naturally long. A real one covers a status line, a "who is who" block, the pending
> actions, two possible resolution paths with their trade-offs, and eight or nine dated timeline
> entries.
>
> **The problem.** When the note body reaches roughly **8,000 characters**, the request fails with
> **HTTP 403 Forbidden**. Shorter bodies are accepted normally. What we measured on 2026-08-06:
>
> | Note body size | Result |
> |---|---|
> | ~7,600 characters | ✅ accepted |
> | ~8,000 characters | ❌ 403 Forbidden |
> | ~10,400 characters | ❌ 403 Forbidden |
>
> Other details that may help you locate it:
>
> - It affects both **creating** and **updating** a note.
> - It is **fully reproducible** — the same content fails every time, and trimming the same content
>   below the threshold makes it succeed.
> - **Every other API call works normally at the same moment**, including a plain connectivity check,
>   so this is not a connection or authentication problem.
> - The error we receive says the request *"may have been blocked by a firewall or security service"*,
>   with an internal code of `mcp_request_blocked`. That shape suggests a **request-size rule in front
>   of the API** rather than a validation error from Double itself — but we can't tell from our side.
> - It happened on client IDs 706709 and 710577, on 2026-08-06 between roughly 03:25 and 04:20 UTC.
>
> **What I'd like to ask:**
>
> 1. Is there a **documented maximum note length** for the API? If so, we'll design around it — but a
>    clear error message would help much more than a 403, which reads like a permissions problem.
> 2. If it's a **security or request-size rule**, can it be **raised or whitelisted** for our account?
> 3. Does the **web interface** have the same limit? We haven't tested a long note in the browser yet,
>    and knowing that would tell us whether this is only the API path.
>
> **What we're doing meanwhile.** We're splitting long histories into "Part 1 / Part 2" notes. It
> works, but it fragments exactly what we were trying to keep in one place, so we'd rather not rely
> on it.
>
> I'm happy to send the exact payloads, timestamps or request identifiers if that helps you trace it.
>
> Thank you,
>
> Lilian Gonzalez
> Client Success Manager, JK Accounting Group

---

## Notes for whoever follows this up

- **Test the web UI first if you can.** Paste a ~10,000-character note in the browser. If it saves,
  that is the strongest single piece of evidence that the API path alone is affected, and it makes
  question 3 in the email self-answering.
- **The boundary is not bracketed tighter than 7,600–8,000 characters.** If support asks for the exact
  cutoff, it can be found by bisecting — nobody has needed it badly enough yet.
- **Character count is not the whole payload.** The note title and JSON escaping travel with the body,
  and the bodies involved are HTML with multi-byte characters, so the real limit may be expressed in
  **bytes**. Worth mentioning only if support pushes back on the numbers.
- **If the limit is raised**, collapse any `Part 1 / Part 2` notes back into one — a single note per
  matter is the shape the convention wants (§7 rule 1).
