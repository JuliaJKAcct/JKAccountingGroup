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
> - **Point 2 below was not done:** the call-date discrepancy was *not* asked in the sent email.
>   🔴 **DEAD as of 2026-08-17** — the call happened that day, and the question has been removed from
>   the follow-up. Do not re-add it.
>
> ➡️ **For where anything goes NOW, read "The route" immediately below — not this box.**
>
## 🔴 The route — CANONICAL. Everything else in the repo points here.

**Changed 2026-08-17.** This is the only place the route is written out. If it changes again, **change
it HERE**, then check that the pointers elsewhere still only *point* — they must not restate it.
*(Written because the first attempt at this reroute left the old route standing in every file it did not
edit. Restating is what makes that happen; pointing does not.)*

| | |
|---|---|
| **Send FROM** | **Lilian**, `lilian@jkaccountinggroup.com` — it is hers to send, and *which* mailbox it leaves from is what decides where a later "has it gone?" check has to look |
| **Send to** | `help@doublehq.com` |
| **Copy** | `allison@doublehq.com` · Julia · Maria — **on matters Allison already worked** (the request-size 403, the deadline write). ⚠️ **Not** on an ask she has never seen: `FOLLOW-UPS.md` row 23 (Bank Feeds) was never raised with her, and copying a departed contact into a first-time feature request is the opposite of the reason she is copied at all |
| **Form** | A **new email**, never a reply on *"Checking in before our 8/18 wrap-up"* |
| **One ask per message** | Do **not** bundle. The 2026-08-06 email carried two and came back with one good answer and one wrong one |
| **Why Allison at all** | She carries the whole history and personally argued the deadline request with Double's developers; a bare `help@` ticket restarts from zero |

**Why it changed:** Allison closed her implementation period on 2026-08-17 (*"Dedicated Double Support
Period Winding Down"*) and directed us to `help@doublehq.com` or the in-app chat.

**Governs:** the follow-up below, and `FOLLOW-UPS.md` rows 19, 22 and 23.

📌 **Two known weaknesses in this arrangement, left open deliberately rather than churned:**
① **This is the wrong home.** Where the firm's asks to Double go is general routing; it is bolted onto
a file about one incident. **It belongs in [`../SKILL.md`](../SKILL.md) §7 or a firm-contacts SOP** —
do that move as its own change, repointing SKILL, the capability map and FOLLOW-UPS rows 19/22/23 in
the same pass, rather than as a rider on whatever closes the 403. ② **The 2026-08-17 hand-off is
narrated in several places in this file** (its header, this section, the historical section, the
follow-up). That is tolerable *inside* one file, which is partly a chronology — **but the ROUTE
itself is stated only here**, and that is the invariant to protect.

ⓘ **A second live contact, and NOT a route:** **Ryan Quill** (`ryan.quill@doublehq.com`), account-side,
opened a conversation 2026-08-24 pitching the Plus/Scale tiers and asking for a call. Raising a
technical ask there is **Lilian's commercial judgement and nobody else's** — a session must not choose
it, and the FOLLOW-UPS rows that mention him say so.

---

When this is finally settled, record the outcome in [`../SKILL.md`](../SKILL.md) §7 ("the size wall").
🛑 **Do NOT simply delete this file** — *"The route"* (the section immediately above) governs asks that have nothing to do with the
403 (`FOLLOW-UPS.md` rows 22 and 23) and is pointed at from SKILL §7, the capability map and three
FOLLOW-UPS rows. **Move that section to SKILL §7 and repoint everything first**, then supersede the rest.

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

## Who this goes to, and why it is short — ⚠️ HISTORICAL, superseded 2026-08-17

🔴 **This section describes the ORIGINAL send of 2026-08-06 and is kept only as the record of why that
email was written the way it was. Its routing instructions are DEAD** — Allison closed her
implementation period on 2026-08-17, the thread it names is closed, and the call it says to confirm has
happened. **For where anything goes now, read *"The route"* at the top of this file.**

**Allison Millea, Implementation Specialist at Double** *(as she was during implementation)* — the firm's implementation contact, with
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

⚠️ **Superseded — the escalation was written, and it did NOT restore the firm introduction.** The email
at the end of this file opens with two lines of context instead, and per its rule 2 carries the evidence
in plain sentences with **no table**. Do not reintroduce either from git history. *(Original note:
restore the firm introduction from git history.)* It was removed because *Allison* knew us — her onboarding
email (2026-05-15) described her as the implementation contact "for the next three months", so the
wrap-up call was the end of that window. **That hand-off has now happened: 2026-08-17.**

---

## The ORIGINAL draft — ⚠️ NOT what was sent

⚠️ *(Editor's note, not part of the email.)* **Question 2 below asks for the limit to be raised "for
our account". That wording is why rule 5ⓒ exists — it is kept here as the archival record of what was
drafted, and must never be copied into a live message.**

⚠️ **Kept for the evidence table and the phrasing, not as a record of our correspondence.** What went
out differed in the three ways listed in the header — most importantly it asked **two** questions,
not the three below; **the web-UI question (3) was never sent.** ⚠️ **The escalation to `help@doublehq.com` is already written** (end of
this file) and deliberately uses plain sentences, **not** this table. Reuse the **error text and the
measurements** from here if you need them; never this question list — re-asking a question Double never
received, as though it had been ignored, hands them a version of the thread that does not match theirs.

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

🛑 **These notes predate the review rounds and the rewrite. Where one disagrees with the numbered
rules in *"The follow-up"*, THE RULES WIN** — in particular: this section says to keep the evidence
**table** (the rules say plain sentences, and never restore the table), says to raise the bytes point
**only if support disputes it** (the email now raises it up front, so an engineer cannot convert our
character counts by mistake), and calls the web-UI test *not critical* (row 19 now makes it a
prerequisite before rewording `case-core.js`).

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

🔴 **Do not send this to Allison on the old thread. That window closed.** ➡️ **The route is in the *"The route"* section at the top of this file — deliberately not repeated
here.** The follow-up, first drafted 2026-08-13 and **materially rewritten on 2026-08-25** (the ask, the
impact paragraph and the probe strings), is **still unsent as at 2026-08-25**, and in that time the situation moved twice:

- **2026-08-17 — Allison ended her implementation period** (*"Dedicated Double Support Period Winding
  Down"*, after the wrap-up call she and Lilian held that day). Her words: *"While I won't be your main
  point of contact moving forward, the team at Double is still here for you. If you ever need help or
  have a question, please reach out to **help@doublehq.com** or use the in-app chat."* Maria replied
  and thanked her. **Searched 2026-08-25 in JULIA's mailbox** (`julia@jkaccountinggroup.com` — the
  thread itself, plus every message to or from `doublehq.com` after 2026-08-13): the thread has not
  moved since Allison's 08-13 answer, and nothing has gone to `help@doublehq.com`. ⚠️ **That is Julia's
  mailbox, and this email is Lilian's to send from `lilian@`** — a send from her own account with
  nobody at `jkaccountinggroup.com` copied would be invisible to it. **So: ask Lilian whether she has
  already sent it, or re-run the search in her mailbox, before sending.** The evidence says *unsent*;
  it does not prove it.
- **2026-08-24 — Ryan Quill** (`ryan.quill@doublehq.com`) opened a fresh account conversation: he had
  audited the account, praised the firm's use of the integration, and pitched the new **Plus / Scale**
  tiers with launch-promotion pricing plus a 15-minute call. Julia's out-of-office answered him.

⚠️ **Two questions in the old draft are now DEAD and must not be sent:** *"is our call on the 17th or
18th?"* (it happened on the 17th) and anything addressed to Allison as the owner of the issue.

**Written in plain language for a reader who may not be an engineer**, per Lilian's instruction of
2026-08-13 (*"más escueta y mejor explicada… para que Allison no se atormente con tanta cosa
técnica"*) and 2026-08-24 (*"lenguaje sencillo y bien explicativo… el objetivo es que Double entienda
bien qué está sucediendo"*). The body stays plain; the measurements sit in a block at the end that a
support agent can hand to an engineer. **SIX rules if you edit it again.** ⚠️ **Rules 5 and 6 carry the hardest-won ones — they are rules, not
trailing asides; do not drop them.**

1. **Concede the note question early.** Arguing that notes *do* have a limit is what got this closed
   as "out of scope" the first time.
2. **The evidence goes in plain sentences, NOT a table.** *A short version of the same question works; the long one
   does not; the same long text goes through to another system* — that is the whole proof.
3. **The technical block must stand alone** — workspace, dates, client IDs, error code — because it
   will be forwarded, and an engineer who cannot find the request in a log closes the ticket as
   unreproducible.
4. **Never restore from git history:** not the firm introduction (the escalation opens with two lines
   of context instead) and not the three-row evidence table (rule 2). Older versions of this file
   recommend both; they are superseded.
5. **Three things the email must carry.** ⓐ The **user-visible symptom, and since when we have been
   working around it** — a support agent triages on impact, and a bare `403` is not impact. ⚠️ **State
   the last date we actually confirmed the failure, not that it is happening today**, unless someone
   has just re-tested: we avoid the wall by keeping notes short, so "still happening" is an inference,
   not an observation. ⓑ **Both probe strings**, refused *and* accepted — the pair is what shows size
   was the variable; either alone is one refused request. ⓒ The raise-it ask scoped **"for us, or
   generally"** — ⚠️ *never* "for our account", which invites the true answer *"that limit is not
   per-account"* as a way to close the ticket. **ⓒ is the one with history: it was corrected in #285
   and the correction failed to reach the email, so the account-scoped wording still stands in "The
   ORIGINAL draft" section ABOVE — that copy is the archival record and must never be mined forward.**
6. **Two things plain language must NOT cost us.** ⓐ **Name the surface — "the MCP integration"**:
   Allison answered a "Claude integration" question with *Ask Double* on 2026-06-17. ⓑ **Ask about
   BOTH** the thing in front of the endpoint *and* the MCP server itself — we cannot tell them apart,
   and naming only the firewall is how this gets closed "out of scope" twice.

**Subject:** `MCP integration — requests over about 8,000 characters are refused with a 403 (JK Accounting Group)`

**To:** `help@doublehq.com`

**Cc:** `allison@doublehq.com`, Julia, Maria

⚠️ *(Editor's note, not part of the email.)* **The subject states the MEASURED unit — characters.** The body may still offer *"somewhere around
8 KB"* as a **lead** ([`../SKILL.md`](../SKILL.md) §7: *"give them the observation, let them find the
actual rule"*), and that is not a contradiction: characters are what we counted, 8 KB is the hint about
where to look. What must never happen is a **byte figure presented as our measurement** — the subject is
the most-quoted line in the thread, and an engineer who converts our passing 7,600-character HTML note
and finds it already over 8,192 bytes stops trusting the rest.

> Hello,
>
> We worked on this with Allison Millea during our implementation, and since that period has now ended
> we are bringing it here, as her hand-off note suggested. Allison is copied in — she has the full
> history.
>
> **The short version:** when we use Double through the **MCP integration** with Claude, large requests
> come back as `403 Forbidden` while small ones work normally. On the calls we have measured most
> closely — saving a note — the change happens between about 7,600 and about 8,000 characters.
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
> That points to something on Double's side refusing our request before it reaches the part of Double
> that stores notes. From outside we cannot tell whether that is something sitting in front of your MCP
> endpoint, such as a firewall, or a size limit inside the MCP server itself. **Could you have someone
> check both?** **And if a limit is found, can it be raised — for us, or generally?** That is what we
> are really asking for — the size limit is what stops us keeping a case history in one note.
>
> Why it matters to us: we keep one running note per client matter, holding the whole history of a case
> so that anyone on the team can open the client and understand it in a minute. When one grows past the
> limit it does not save — and the response does not tell us whether anything was written, so we have
> to go and check before retrying. The history then has to be split across two notes to fit, which
> defeats the purpose. **And the limit is not really about notes** — a plain client search with a long
> filter is refused in the same way, which is how we know it is the size of the request rather than
> anything about a note. We have been working around this since **6 August 2026** by keeping notes
> short and splitting them; we last confirmed the failure on **13 August 2026** and have not
> deliberately re-tested since, though nothing suggests it has changed. Happy to re-run it any time.
>
> **Technical details, if they help:**
>
> - Workspace: **JK Accounting Group** (account owner Julia Kononova).
> - Error: `403 Forbidden`, `error_code: mcp_request_blocked`, on the MCP endpoint.
> - **Note writes:** bodies of about 7,600 characters save; about 8,000 and about 10,400 are refused.
>   Measured 6 August 2026, roughly 03:25–04:45 UTC, on client IDs **706709** and **710577**.
> - **Read-only calls:** a `list_clients` name filter of about 48 characters works; about 9,000
>   characters is refused. Tested 13 August 2026. We have not tested any size between 48 and 9,000, so
>   on this path that is as close as we can put it. There is no client ID to narrow it by — it is a
>   roster-wide search — **but both filter strings are unique and you can grep for them directly:**
>   - refused: the 100-character block
>     `FILLER-2026-08-13-SIZE-TEST-NO-CLIENT-DATA-JKACCOUNTINGGROUP-DOUBLE-MCP-REQUEST-SIZE-PROBE-0000000NN`
>     repeated 90 times, with `NN` running 01 to 90;
>   - accepted, same tool, same session: `FILLER-2026-08-13-SIZE-TEST-NO-CLIENT-DATA-PROBE`.
>
>   That pair is what shows size is the variable: same endpoint, same account, same tool, one short and
>   one long. We did not record the exact times, so please search the whole of 13 August 2026 — or ask
>   us to re-run both while you watch.
> - **The note writes reproduce every time:** the same body is refused on every attempt, while a
>   shorter body of about 7,600 characters saves.
> - **The tightest bracket we have** is the note-write one: between about 7,600 and about 8,000
>   characters. Everything above is counted in characters — **we have not measured any payload in
>   bytes.**
> - **A hint, not a measurement of ours:** an 8 KB request-body limit is a common default, and it may
>   be worth checking whether one is configured anywhere in this path. Please do not convert our
>   character counts into bytes to test that — our note bodies are HTML with multi-byte characters, so
>   the conversion would not be reliable.
> - **It is not our content:** a note body of about 8,200 characters of plain repeated filler — no
>   formatting, no client data, nothing resembling an attack pattern — was refused exactly like real
>   text.
> - **The comparison that points away from Claude:** the system that accepted the identical ~9,000
>   characters is a different MCP integration on the same Claude account, tested about a minute apart —
>   so it is like-for-like.
> - We are happy to run the failing request at a time you choose, so someone can watch it reach your
>   logs, and we can send a payload of any size you like.
>
> Thank you very much for your help.
>
> Lilian Gonzalez
> JK Accounting Group

