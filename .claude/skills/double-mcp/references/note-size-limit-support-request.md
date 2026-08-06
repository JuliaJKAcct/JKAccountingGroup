# Double support — the note-size 403 (Aug 2026)

> ## ✅ SENT — do not send it again
>
> **Sent 2026-08-06 14:34 UTC** by Lilian, as a reply on Allison's *"Checking in before our 8/18
> wrap-up"* thread, with Julia and Maria in copy. **Awaiting her reply.** If you were asked to
> "send the Double note-size email", it has already gone out — follow up on that thread instead of
> writing a new one.
>
> **What actually went out differed from the draft below in three ways:**
>
> - It carried a **second, unrelated ask** in the same message — a write on the tax project's
>   deadline (see [`capability-map.md`](./capability-map.md) → "Open requests with Double", and
>   [`FOLLOW-UPS.md`](../../../../FOLLOW-UPS.md) row 22).
> - It asked **two questions, not three**: the documented-limit question and the can-it-be-raised
>   question. **The web-UI question was dropped**, which is exactly why the web-UI test is still an
>   open next action — running it now gives us something to follow up with.
> - **Point 2 below was not done:** the call-date discrepancy was *not* asked in the sent email. It
>   is still open.

When Double answers, record the answer in [`../SKILL.md`](../SKILL.md) §7 ("the size wall") and
delete or supersede this file.

**Why this file exists:** the limit shapes how the firm's case notes are written (§7), so the exact
evidence is kept here rather than reconstructed from memory the next time it comes up.

## Who this goes to, and why it is short

**Allison Millea, Implementation Specialist at Double** — the firm's implementation contact, with
recurring 30-minute calls with Lilian, Maria and Julia. **She already knows who we are and that we
work through the Claude integration**: Lilian raised a Claude-integration limitation with her on
2026-06-17 and Allison answered directly.

So **no introduction, and no formality** — the firm's register with her is short, direct, one issue per
message, ending in a question and a warm close. Lilian's instruction, 2026-08-06: the explanation was
good but too long; keep it fully understandable and cut the rest.

Four things this email had to get right (kept as the record of why it is written the way it is — and see the header for which of them actually made it into the sent version):

1. **Send it as a reply to her open thread**, not a new email: *"Checking in before our 8/18 wrap-up"*
   (2026-08-04), where she wrote *"Are there any issues, questions, or features you'd like to dig into?
   Happy to help over email so nothing slows you down before we connect."*
2. **The next call's date is unsettled** — her email body says **August 17th**, her own subject line
   says **8/18**, and **no invite for either date is on the calendar** (the last two were Jun 17 and
   Jul 20). Worth confirming in the same reply.
3. **Say "MCP integration", not just "Claude".** When Lilian raised "the Claude integration" on
   2026-06-17, Allison answered about **"the Ask Double feature"** — a different surface. `create_note`
   and `update_note` are MCP tool names she has never seen, so name the surface explicitly.
4. **Keep the name and the workspace in the body.** Allison's habit with technical bugs is to **forward
   them**: on 2026-05-20 she looped in `help@doublehq.com` on a bank-feed issue, which became dev
   ticket #102495635. Lilian's signature is an image, so in a forwarded plaintext ticket this email
   would otherwise identify neither sender nor tenant.

**The web-UI test (below) was not done before sending, and question 3 was dropped from the sent
version.** Running the test now is therefore the strongest thing we can add to the thread — a
measured result beats the question we didn't ask.

**If this is escalated to Support, or re-sent after the implementation window closes**, restore the
firm introduction from git history. It was removed because *Allison* knows us — Allison's onboarding
email (2026-05-15) describes her as the implementation contact "for the next three months", so this
wrap-up call is the end of that window and a hand-off is a live scenario.

---

## The email as sent — a reply on "Checking in before our 8/18 wrap-up"

> Hi Allison,
>
> Good afternoon, and thank you for checking in. Could you please help us with something?
>
> We have started keeping what we call a **case note** in Double: for a client matter that runs for
> weeks, **one single note on the client** holding the whole history — the current status, what we are
> waiting on and from whom, and a dated timeline of every call and email. Anyone on the team can open
> the client and understand the matter in a minute. These notes get long.
>
> The problem: through the **MCP integration we drive with Claude** (not Ask Double), the `create_note`
> and `update_note` calls **return HTTP 403 once the note body reaches about 8,000 characters.**
> Shorter bodies save normally. Measured August 6 on our workspace, JK Accounting Group:
>
> | Note body | Result |
> |---|---|
> | ~7,600 characters of real content | saved |
> | ~8,000 characters | 403 Forbidden |
> | ~10,400 characters | 403 Forbidden |
> | ~8,200 characters of plain filler text — no formatting, no client data | 403 Forbidden |
>
> That last row tells us it is the **size of the request**, not anything in our content. It is fully
> reproducible: the same payload fails every time, and trimming it below the threshold makes it
> succeed. Every other call succeeds at the same moment, so it is not the connection or authentication
> either. The response is:
>
> ```
> MCP server returned 403 Forbidden — the request may have been blocked by a firewall or
> security service
> error_code: mcp_request_blocked
> ```
>
> Client IDs: **706709**, **710577**
> When: **2026-08-06, ~03:25–04:45 UTC**
>
> Three questions:
>
> 1. Is there a documented maximum note length for the API?
> 2. If it is a security or request-size rule, can it be raised for our account?
> 3. Does the web interface have the same limit?
>
> For now we are cutting content out of the notes to make them fit, which defeats the point of keeping
> the whole history in one place. I can send a test payload of the exact failing size if that helps you
> trace it.
>
> Thank you so much in advance for your help, and see you on our next call!
>
> Lilian — JK Accounting Group

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
