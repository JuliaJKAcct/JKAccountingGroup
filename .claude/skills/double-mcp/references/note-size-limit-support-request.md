# Double support — the request-size 403 (Aug 2026)

> **Findability:** this is the **request-size / payload-size / 8 KB / `mcp_request_blocked` / 403** file. It is filed under *note-size* because that is what we thought it was when it was opened, and the filename is left alone so links from other sessions' branches keep working — but the wall is **not** note-specific.

> ## ✅ SENT — and ANSWERED. Do not send the original again.
>
> **Sent 2026-08-06 14:34 UTC** by Lilian, as a reply on Allison's *"Checking in before our 8/18
> wrap-up"* thread, with Julia and Maria in copy. **Allison replied 2026-08-13 — see
> "Double's answer" below. The answer was "not us", and it is wrong**; the follow-up that
> answers it is drafted at the end of this file and **has not been sent** (Lilian's call).
>
> **What actually went out differed from the draft below in three ways:**
>
> - It carried a **second, unrelated ask** in the same message — a write on the tax project's
>   deadline (see [`capability-map.md`](./capability-map.md) → "Open requests with Double", and
>   [`FOLLOW-UPS.md`](../../../../FOLLOW-UPS.md) row 22). **That one got a good answer:** a feature
>   request was filed with their dev team.
> - It asked **two questions, not three**: the documented-limit question and the can-it-be-raised
>   question. **The web-UI question was dropped.**
> - **Point 2 below was not done:** the call-date discrepancy was *not* asked in the sent email. It
>   is still open, and the call is now days away.

When this is finally settled, record the outcome in [`../SKILL.md`](../SKILL.md) §7 ("the size wall")
and delete or supersede this file.

---

## Double's answer — 2026-08-13, and why it does not close the matter

Allison, relaying her team, on the same thread:

> - There is no maximum length for notes in Double and no restrictions from our side for the MCP
>   connectors to limit notes. I have been instructed that the issue is coming from Claude's API, so
>   unfortunately, it is out of our scope.
> - While this is currently read_only, I've submitted a feature request on your behalf (and spoken
>   directly with our devs team about this and why it's such an important feature) so hopefully we
>   see this one soon!

**The second bullet is a win** (that is the deadline write, row 22 — nothing more to do but wait).
**The first bullet answers a question nobody asked.** Three calls run on 2026-08-13 show why:

| Call | Server | Payload | Result |
|---|---|---|---|
| `list_clients(name=…)` — read-only, **no note in the request** | Double | ~48 chars | ✅ 200 |
| `list_clients(name=…)` — read-only, **no note in the request** | Double | **~9,000 chars** | ❌ **403 `mcp_request_blocked`** |
| `search_emails(query=…)` — read-only | **Ping Assistant** | **the identical ~9,000-char string** | ✅ 200 |

- **"No maximum length for notes" is true, and we concede it.** It is simply not what is failing: row 2
  is a *read*, it creates nothing and contains no note, and it is blocked anyway. ⚠️ **Never argue the
  opposite** — that notes *do* have a limit — which is the move that got this closed the first time.
- **"It is coming from Claude's API" does not survive row 3.** Rows 2 and 3 are the same account, the
  same MCP connector plumbing and the *same string*, seconds apart. One server took it; Double's did
  not — so there is **no blanket size cap** on Anthropic's side. ⚠️ **Say it that way, not "proven not
  Claude".** Strictly this does not rule out a rule specific to the *Double connector's own
  registration*; overstate it and that is the hole Double bounces this back through.
- **Row 1 is the control** — same tool, same parameter, shorter — so Double is up and authenticated,
  and payload size is the only variable that moved.

**What is actually happening:** something **on Double's side refuses the POST before it reaches the
layer that stores notes.** This is why their engineers can check the product, find no limit, and answer
in complete good faith. *The request never reaches the code they looked at.* **The follow-up must
therefore not argue about note length at all** — it has to move the question off the product.

⚠️ **But it must not over-specify either, and an earlier draft of this file did.** The evidence
localises the block to Double and **no further**: an edge in front of the endpoint (WAF/CDN/load
balancer) and a request-body cap inside Double's own MCP server produce an identical `403` with an
identical correlation to size. **Nothing we measured tells the two apart.** Say "on your side, before
the product" and ask them to check **both** — telling infrastructure it is their firewall, when it is
in the MCP server, gets this closed "out of scope" a second time. The five-stage ownership table in
[`../SKILL.md`](../SKILL.md) §7 is the fuller version.

**A number to hand them as a lead, not a finding:** the failures start somewhere near **8 KB**, and
8,192 bytes is a common default request-body ceiling (AWS WAF's `SizeRestrictions_BODY`, and the
default body-parser limits of several server frameworks). ⚠️ **Do not present it as arithmetic.** We
never measured a payload in *bytes*, and the note that passed at ~7,600 characters was real HTML with
em-dashes, `§` and emoji — in bytes it may already have been over 8,192, which would sink the tidy
story. If this ever needs to be tighter, **measure the payloads in bytes first**.

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
version.** ⓘ **Superseded 2026-08-13** — the read-only and cross-server tests above turned out to be
far stronger evidence than the UI paste would have been, and they are what the follow-up is built on.
The UI test is still worth running, but as a *practical* question now, not the decisive one.

**If this is escalated to Support, or re-sent after the implementation window closes**, restore the
firm introduction from git history. It was removed because *Allison* knows us — Allison's onboarding
email (2026-05-15) describes her as the implementation contact "for the next three months", so this
wrap-up call is the end of that window and a hand-off is a live scenario.

---

## The ORIGINAL draft — ⚠️ NOT what was sent

⚠️ **Kept for the evidence table and the phrasing, not as a record of our correspondence.** What went
out differed in the three ways listed in the header — most importantly it asked **two** questions,
not the three below; **the web-UI question (3) was never sent.** If you are escalating to
`help@doublehq.com`, reuse the table and the error text, **not** this question list — re-asking a
question Double never received, as though it had been ignored, hands them a version of the thread
that does not match theirs.

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
- **The read-only test (2026-08-13) supersedes it as the headline evidence** — a `list_clients` call
  with a ~9,000-character filter, containing no note and creating nothing, is refused identically. It
  is a cleaner proof than the filler-note test because it removes notes from the picture entirely.
  **Lead with it.**
- **The cross-server control (2026-08-13) is what refutes "it's Claude"** — the same string, the same
  minute, accepted by a different MCP server. Without this row the follow-up is an assertion; with it,
  it is a measurement.
- **The web-UI test is still worth doing, but it is no longer the critical one.** It now answers a
  *practical* question rather than a diagnostic one: **can a person paste a long note by hand while
  this is unfixed?** Guardrails, because **the MCP has no `delete_note`** — a test note can only be
  removed by hand in the browser:
  - use an **archived or internal** record, never a client with a live case note (§7 rule 1 forbids a
    second note on a tracked matter);
  - **delete it in the browser immediately** after looking.
- **The boundary is not bracketed tighter than 7,600–8,000 characters** on the write path (7,600 passed, 8,000 failed; the ~8,200 filler was the *content-independence* control, not a bound). On the **read** path the only two points are ~48 (passes) and ~9,000 (fails) — a far wider bracket, and untested in between. If support asks for the exact
  cutoff it can be bisected; nobody has needed it badly enough yet.
- **Character count may not be the unit.** The title and JSON escaping travel with the body, and real
  note bodies are HTML with multi-byte characters (`—`, `§`, `⚠️`, `✅`), so the true limit may be
  expressed in **bytes**. Raise this only if support disputes the numbers.
- **If the limit is raised**, collapse any `Part 1 / Part 2` notes back into one — a single note per
  matter is the shape the convention wants (§7 rule 1).

---

## The follow-up — ⚠️ NOT SENT, and the ROUTE CHANGED on 2026-08-17

🔴 **Do not send this to Allison on the old thread. That window closed.** The follow-up drafted on
2026-08-13 sat unsent for eleven days, and in that time the situation moved twice:

- **2026-08-17 — Allison ended her implementation period** (*"Dedicated Double Support Period Winding
  Down"*, after the wrap-up call she and Lilian held that day). Her words: *"While I won't be your main
  point of contact moving forward, the team at Double is still here for you. If you ever need help or
  have a question, please reach out to **help@doublehq.com** or use the in-app chat."* Maria replied
  and thanked her; **the matter was never raised again on that thread.**
- **2026-08-24 — Ryan Quill** (`ryan.quill@doublehq.com`) opened a fresh account conversation: he had
  audited the account, praised the firm's use of the integration, and pitched the new **Plus / Scale**
  tiers with launch-promotion pricing plus a 15-minute call. Julia's out-of-office answered him.

⚠️ **Two questions in the old draft are now DEAD and must not be sent:** *"is our call on the 17th or
18th?"* (it happened on the 17th) and anything addressed to Allison as the owner of the issue.

**The route now:** send it to **`help@doublehq.com`**, which is where Allison directed us, and
**copy Allison** — she carries the entire history, she personally argued the deadline feature request
with their developers, and a bare ticket at `help@` restarts from zero. Julia and Maria in copy as
before. **A new email, not a reply on the old thread** — the thread belongs to an implementation that
is formally closed.

ⓘ **Unused leverage, Lilian's call and nobody else's:** Ryan Quill is asking for a call to sell an
upgrade. A paying customer with an open technical blocker is in a reasonable position to raise it
there. **Not written into the email** — it is a commercial judgement, not a support fact.

**Written in plain language for a reader who may not be an engineer**, per Lilian's instruction of
2026-08-13 (*"más escueta y mejor explicada… para que Allison no se atormente con tanta cosa
técnica"*) and 2026-08-24 (*"lenguaje sencillo y bien explicativo… el objetivo es que Double entienda
bien qué está sucediendo"*). The body stays plain; the measurements sit in a block at the end that a
support agent can hand to an engineer. **Four rules if you edit it again:**

1. **Concede the note question early.** Arguing that notes *do* have a limit is what got this closed
   as "out of scope" the first time.
2. **The evidence goes in plain sentences.** *A short version of the same question works; the long one
   does not; the same long text goes through to another system* — that is the whole proof.
3. **The technical block must stand alone** — workspace, dates, client IDs, error code — because it
   will be forwarded, and an engineer who cannot find the request in a log closes the ticket as
   unreproducible.
4. **Two things plain language must NOT cost us.** ⓐ **Name the surface — "the MCP integration"**:
   Allison answered a "Claude integration" question with *Ask Double* on 2026-06-17. ⓑ **Ask about
   BOTH** the thing in front of the endpoint *and* the MCP server itself — we cannot tell them apart,
   and naming only the firewall is how this gets closed "out of scope" twice.

**Subject:** `MCP integration — requests over about 8 KB are refused with a 403 (JK Accounting Group)`
**To:** `help@doublehq.com` · **Cc:** Allison, Julia, Maria

> Hello,
>
> Allison Millea helped us with this during our implementation, and suggested we write to you now that
> our dedicated support period has ended. Allison is copied here — she has the full history.
>
> **The short version:** when we use Double through the **MCP integration** with Claude, any request
> over roughly 8,000 characters comes back as `403 Forbidden`. Smaller requests work normally.
>
> We first reported this as a problem with long notes, and the answer that came back was that Double
> has no limit on note length and that the problem must be coming from Claude's API. We think the first
> part is correct — and that is exactly why we believe the question went to the wrong place.
>
> **What is being blocked is not a note.** We tested it: we asked Double a simple question — "list the
> clients whose name matches this" — using a very long search text. That call saves nothing and
> contains no note at all. It was refused with the same error. The same question with a short search
> text works fine.
>
> **And it does not appear to be Claude.** We sent the identical long text to a different system we
> connect to in the same way, from the same Claude account, about a minute apart. It went through with
> no problem — so there is no general size limit on Claude's side.
>
> That leaves something on Double's side refusing our request before it reaches the part of Double that
> stores notes. From outside we cannot tell whether that is something sitting in front of your MCP
> endpoint, such as a firewall, or a size limit inside the MCP server itself. **Could you have someone
> check both?**
>
> Why it matters to us: we keep one running note per client matter, holding the whole history of a case
> so that anyone on the team can open the client and understand it in a minute. Today we have to split
> those notes in two, which defeats the purpose.
>
> **Technical details, if they help:**
>
> - Workspace: **JK Accounting Group** (account owner Julia Kononova).
> - Error: `403 Forbidden`, `error_code: mcp_request_blocked`, on the MCP endpoint.
> - **Note writes:** bodies of about 7,600 characters save; about 8,000 and about 10,400 are refused.
>   Measured 6 August 2026, roughly 03:25–04:45 UTC, on client IDs **706709** and **710577**.
> - **Read-only calls:** a `list_clients` name filter of about 48 characters works; about 9,000
>   characters is refused. Tested 13 August 2026. We have not tested sizes in between, so we cannot
>   give an exact cut-off — only that it is somewhere around 8 KB.
> - **It is not our content:** a note body of about 8,200 characters of plain repeated filler — no
>   formatting, no client data, nothing resembling an attack pattern — was refused exactly like real
>   text.
> - We are happy to run the failing request at a time you choose, so someone can watch it reach your
>   logs, and we can send a payload of any size you like.
>
> Thank you very much for your help.
>
> Lilian Gonzalez
> JK Accounting Group

