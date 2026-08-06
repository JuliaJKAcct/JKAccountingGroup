# Double support — the note-size 403 (draft request, Aug 2026)

**Status:** drafted 2026-08-06 for Lilian to send. **Not yet sent.** When Double answers, record the
answer in [`../SKILL.md`](../SKILL.md) §7 ("the size wall") and delete or supersede this file.

**Why this file exists:** the limit shapes how the firm's case notes are written (§7), so the exact
evidence is kept here rather than reconstructed from memory the next time it comes up — and if
support asks for detail, or the request has to be re-sent to a different team, it's ready.

## Who this goes to, and why it is short

**Allison Millea, Implementation Specialist at Double** — the firm's implementation contact, with
recurring 30-minute calls with Lilian, Maria and Julia. **She already knows who we are and that we
work through the Claude integration**: Lilian raised a Claude-integration limitation with her on
2026-06-17 (building an organizer template) and Allison answered it directly.

So **no introduction, and no formality** — the firm's existing register with her is short, direct,
one issue per message, ending in a question. Lilian's instruction, 2026-08-06: the explanation was
good but too long; keep it fully understandable and cut the rest.

**Send it as a reply to her open thread**, not a new email: *"Checking in before our 8/18 wrap-up"*
(2026-08-04), where she wrote *"Are there any issues, questions, or features you'd like to dig into?
Happy to help over email so nothing slows you down before we connect."* The next call is **August 17**,
so an email now gets it moving beforehand — and if it isn't resolved, it's already on the agenda.

---

## The email to send

> **Reply to:** "Checking in before our 8/18 wrap-up"
>
> Hi Allison,
>
> Good afternoon, and thank you for checking in — there is one thing we could use help with.
>
> We have started keeping what we call a **case note** in Double: for a client matter that runs for
> weeks, **one single note on the client** holding the whole history — the current status, what we are
> waiting on and from whom, and a dated timeline of every call and email. Anyone on the team can open
> the client and understand the matter in a minute. These notes get long.
>
> The problem: through the Claude integration, **`create_note` and `update_note` return HTTP 403 once
> the note body reaches about 8,000 characters.** Shorter bodies save normally. Measured August 6:
>
> | Note body | Result |
> |---|---|
> | ~7,600 characters | saved |
> | ~8,000 characters | 403 Forbidden |
> | ~10,400 characters | 403 Forbidden |
> | ~8,200 characters of plain filler text — no formatting, no client data | 403 Forbidden |
>
> That last row tells us it is the **size of the request**, not anything in our content. Every other
> call succeeds at the same moment, so it is not the connection either. The response is:
>
> ```
> MCP server returned 403 Forbidden — the request may have been blocked by a firewall or
> security service
> error_code: mcp_request_blocked
> ```
>
> Three questions:
>
> 1. Is there a documented maximum note length for the API?
> 2. If it is a security or request-size rule, can it be raised for our account?
> 3. Does the web interface have the same limit?
>
> For now we are cutting content out of the notes to make them fit, which rather defeats the point of
> keeping the whole history in one place. It happened on client IDs **706709** and **710577** on
> August 6 between roughly 03:25 and 04:45 UTC, and I can send a test payload of the exact failing
> size if that helps you trace it.
>
> Thank you,

---

## Notes for whoever follows this up

- **The content-independence test is already done** — plain filler text at ~8,200 characters was
  refused exactly like real content (2026-08-06). That closes the most likely first
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
