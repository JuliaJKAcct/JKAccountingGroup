# Sweep health review — what to check after a run, and what is currently suspected

**Why this file exists.** On **2026-08-18** Lilian asked where two Business Tax Receipt
applications stood. Twenty minutes of manual checking found four things that mattered — and
**every one of them had been sitting in a client file the weekly sweep had already read.** The
sweep was working exactly as instructed and producing very little. This file holds that diagnosis
so nobody has to rediscover it, and turns it into a **checklist to run against the next report**.

> ⚠️ **This is not a to-do list of known bugs.** Two of the three things the 2026-08-18 session
> "found" turned out to be wrong under review, and one of its proposed fixes would have destroyed
> client history. What survived is written below as **confirmed**; what did not is written as
> **retracted**, with the reasoning, because the reasoning is the part that transfers.

---

## 1. The state of play

| | |
|---|---|
| **Routine** | *Client Intelligence — weekly sweep* · `trig_015LaKrto6FDKyUwHmZywqjS` · cron `0 7 * * 6` |
| **Fires** | **Saturdays 07:00 UTC** = 03:00 Eastern (summer) |
| **Prompt in the Routine** | 🔴 **The 2026-08-18 version — and it has DIVERGED from the repo since 2026-08-24.** The canonical copy in [`weekend-ci-sweep.md`](./weekend-ci-sweep.md) now carries three fixes the live Routine does not, and **a session cannot paste them** (`created_via: http_api`, §5). **Until a person pastes it, the live prompt is the 2026-08-18 text** — reason about a run from that, not from the repo |
| **First run of that prompt** | ✅ **Saturday 2026-08-22 — it ran, and the core fix took.** Reviewed against §6 on **2026-08-24**; the result is at the top of §6 |
| **Canonical copy of the prompt** | [`weekend-ci-sweep.md`](./weekend-ci-sweep.md) → *Routine prompt* (with `<WEBHOOK_*>` placeholders) |

⚠️ **A Routine's behaviour lags its prompt by up to a week.** A report is evidence about the
prompt that was live **when it fired**, never the one sitting in the web UI now. The 2026-08-18
session lost real time diagnosing a "regression" that was simply a prompt newer than its last
execution — the 2026-08-15 run had followed the *previous* prompt and described it accurately.

---

## 2. Confirmed problem: the sweep asked "what's new?" and never "what's still open?"

**This is the finding that survived review, and it is the reason for step 1b.**

A sweep bounded by a baseline date can only see things that *happened*. It is structurally blind to:

- something that was **supposed to happen and didn't** — a document awaited for weeks;
- a **deadline approaching** — nothing arrives to announce it;
- and worst, something that **did happen that nobody searched for**, because only the client file
  knew to watch for it.

**All four findings of 2026-08-18 were of that shape:**

| What was found by hand | Why the sweep missed it |
|---|---|
| Best Broker's issued city licence had **arrived by email 26 days earlier**, while the file still read *"if it hasn't arrived yet"* | **Two separate full historical Gmail passes** had swept that client. Neither searched for the licence, because "what changed this week?" was the only question asked |
| The same client's **Sept 30 renewal**, six weeks out, uncalendared | A future date is not an event. Nothing was going to surface it |
| Pro Title's awaited document, **pending 19 days**, with no clock on it | "Awaiting X" with no age reads the same on day 1 and day 40 |
| A **risk the city had put in writing** — operating without the receipt is unlawful | It was in an email the sweep read. The sweep recorded the *requirement* and not the *risk* |

**The 2026-08-15 report filed both clients under "no new meetings, notes, or emails."** That was
**true and worth nothing.** Nothing was new; plenty was wrong.

**The fix, now in the prompt:** step **6** _(called "1b" in the narrative section of `weekend-ci-sweep.md`; the **prompt numbers it 6**, and the report will say "step 6")_ re-reads each client's `Outstanding items` and
`Information still needed` and takes every entry **back to the sources as a named query** — *did
this specific document arrive?* — then reports what is still open **with its age in days** and any
deadline. Budget ~5 calls/client, deadline items first, and **name whatever it had no budget to
chase** rather than letting it print as "no movement".

**And in the email:** "Nothing new" now prints **only** when sections 1, 2 *and* 3 are empty, and a
client with anything open is **amber with the oldest item's age**, never green.
**"Nothing new" and "nothing wrong" must never print as the same line.**

### ✅ It worked — and the same confusion survives one level up (found 2026-08-24)

**The fix itself is proven.** On the 2026-08-22 report **Best Broker Realty**, the designated test
client, came back with *both* halves right: the LBTR certificate confirmed saved (2026-08-18) and
the **Sept-30 renewal surfaced as a dated open item**. Those are the exact two facts that sat unseen
for 26 days and that two full historical passes had walked straight past. Ages in days now print
across the report — *"131 days"*, *"158 days"*, *"159 days"* — and deadlines print with them
(*"USPS mail-forwarding — deadline 2026-09-18, 27 days out"*). Section 4 never printed at all; **8
clients came back amber and 0 green.**

🔴 **But `AT A GLANCE` still answers the wrong question, and it is the same defect one storey up.**
Both the prompt and [`email-template.html`](./email-template.html) define the states as *mutually
exclusive and ranked* — proposals ▸ new facts ▸ nothing-new — with amber scoped to **"nothing new
BUT items still open"**. So the amber-with-an-age treatment can only ever reach a client who had a
quiet week. **A client with one new fact and a rotting item prints neutral blue, with no age.**
On 2026-08-22 **OPTIC GOLD INC** printed `[BLUE] 1 new fact(s) saved` while carrying a 🔴 **15-day
unopened Sunbiz notice** *and* a **159-day** IRS-address item; Ihor Naum and Ecoorganic did the
same. The green ban held — blue is not green — but the one-line summary is still ordered by *"did
something happen this week?"* rather than *"what is rotting?"*, which is what §2 set out to end.
✅ **The rule to write instead: colour AT A GLANCE by OPEN ITEMS, independently of whether new facts
were saved — any client with an open item is amber and carries the oldest item's age; the "new
facts" count rides alongside it, it does not replace it.**

⚠️ **Second, smaller: about a third of open items still print with no clock** — *"Sales-tax nexus
analysis — no update"*, *"BOI report — no update"*, *"1065 extension — still unverified"*. That is
**not** step 6 failing (it plainly ran); it is that those items have **no start date recorded in the
client file**, so no age can be computed. The trouble is that an unclockable item and an unchased
one print identically, which is the ambiguity this whole section exists to remove. ✅ **Say which it
is: *"pending since unknown — no start date in the file"*.**

---

## 3. Confirmed problem: the run is bigger than one context, and nobody has fixed that

**Lilian's question, 2026-08-18: are there limits on running Client Intelligence?**

**No vendor quota has ever stopped this firm's sweep**, and every number in this repo — ~10–15
calls/client, ~5 for the chase pass, ~6 full historical passes per run — is **self-imposed
discipline**, not a limit anyone enforces. Saying that plainly matters: a session that believes it
is rationing a hard quota cuts corners it did not need to cut.
⚠️ **That is an absence of experience, not a proof of absence** _(rule 1b, which this file leans on
elsewhere)_. Google and Intuit publish their own API quotas, and Double has a documented
**request-size** wall of ~8 KB per call ([`double-mcp`](../../../.claude/skills/double-mcp/SKILL.md)
§7) — a limit on payload, not on count, but a limit. **If a run ever starts getting refusals
mid-roster, record which connector and at what volume here** — that would be the first real quota
the firm has met, and the subagent design in the next section would have to account for it.

| | Real limit? |
|---|---|
| **Double MCP** — the sweep's main source | ❌ No published cap ([`double-mcp`](../../../.claude/skills/double-mcp/SKILL.md) §0) |
| **Gmail · Drive · Ping · QuickBooks** | ❌ Nothing the firm has hit |
| **Odoo MCP** — hard **50/day**, firm-wide | ⚠️ Real, **but the sweep never touches Odoo.** The cap everyone remembers; the wrong one for this job |
| 🔴 **One session's context window** | ✅ **The actual ceiling** |
| 🔴 **The shared Claude account's usage** | ✅ Real — what the sweep burns on Saturday morning, Julia and Lilian do not have that day |

**The arithmetic is the whole point.** 48 client files × 15–20 calls ≈ **700–1,000 tool results in a
single conversation.** No context holds that, and **it does not fail loudly — it thins out**: the
clients at the end of the roster get a shallower pass than the ones at the start, the catch-up cap
is spent early, and the report still reads as though everything was swept.

> **That is the most likely reason coverage has been uneven, and it is a design problem, not a
> discipline problem.** No amount of care inside one context fixes a run that does not fit in it.

### The lever, already in the repo and unused: subagents

[`double-mcp`](../../../.claude/skills/double-mcp/SKILL.md) §5 item 4 already says it — *"Delegate
roster-wide sweeps to a subagent … A 120-client property sweep is one subagent, not 120 calls in
the main thread."* **The Routine prompt uses none.** A subagent gets its **own context**, so N
clients cost the main run N compact summaries instead of N×20 raw payloads. That is what turns
*every client, every week, chasing every open item* from unaffordable into routine.

⚠️ **The one carve-out, and it does not bite here:** subagents are **banned for organizer
responses** (§2.2 — each is another copy of a client's SSNs). **A CI sweep never reads organizer
responses**, so the ban does not reach this work. Any future step that added them would have to
stay in the main thread.

🔵 **Deliberately not adopted yet — for ONE reason, not two.** Changing the prompt again before its
first execution would mean debugging two changes at once. _(An earlier version added "and re-pasting
costs a human because the webhook secret cannot be read back" — **that was false**; see §5. The
re-paste is cheap and a session can do it.)_ **Let 2026-08-22 run, then decide on evidence.** Tracked as
[`FOLLOW-UPS.md`](../../../FOLLOW-UPS.md) row 48.

### 🔵 The evidence arrived — recommendation 2026-08-24: STILL NOT YET, and here is the reasoning

**The thinning signature §3 predicted is visible, and it is confined to exactly one place.** The run
spent its full ~6-pass cap, and **the last two full passes of the run are the two that admit
incomplete work**: VOICECAPITAL INC (*"only the first page of ~201 estimated results reviewed … a
second page was not paged through"*) and VOXAGO LLC (*"only the first page of ~40"*). The clients at
the end of the expensive block got the shallow pass. That is the ceiling, not carelessness.

**But it is a backlog symptom, not a steady-state one.** The first-pass queue went from ~17 to
**11** in one run and drains at ~6 a run: **two more Saturdays (2026-08-29, 2026-09-05) and the
expensive block is empty.** What remains after that is 40-odd cheap incremental passes plus the
chase pass — the part that showed no thinning at all this week. Adopting subagents now would mean
changing the prompt again in the same week its rewrite finally proved out, and debugging two changes
at once is the exact reason this was parked.

⚠️ **AND THE DRAIN ARITHMETIC ABOVE IS TOO OPTIMISTIC — the fix itself slows it.** "17 → 11 → 5 → 0
by 09-05" assumed the queue only ever empties. It does not any more: step 2c now has a **second
population**, and every run that thins at the tail puts those clients *back* into it. The 2026-08-22
run produced **2 incomplete passes out of 6**, so at that rate a run clears ~6 and re-queues ~2 —
**a net drain nearer 4, and a terminating condition of "no queue left" that may never arrive.**

✅ **So the recommendation stands but the gate changes: re-decide on 2026-09-05 REGARDLESS of what
the queue looks like** — not "when the queue is empty", which is now a condition the fix can defeat.
The question to ask that day is narrower and answerable: **how many CATCH-UP OWED rows did 08-29 and
09-05 create between them?** Near zero → the ceiling was the backlog, and it is gone. Two a run,
steadily → the run cannot finish what it starts inside one context, which is the structural case,
and **subagents are the answer.** ⓘ That number is also the cleanest evidence anyone has ever had
for this decision: it is the ceiling made countable, which is precisely what §3 lacked in August.

---

## 4. ⛔ Retracted — do not act on these, and here is why they were wrong

Both were reported confidently by the 2026-08-18 session and killed by independent review the same
day. They are kept because **the errors are more instructive than the findings.**

### ⛔ "Four client files have no ledger row and are invisible to the routine forever"

- **The count was wrong.** The check matched client names against the **whole file** of
  [`sweep-state.md`](./sweep-state.md), so it counted names appearing in its closing *"THREE GROUPS
  DELIBERATELY HAVE NO ROW HERE"* prose as though they were table rows. **Real figures: 48 client
  files · 28 dated rows · 20 with no row.**
- **The diagnosis was backwards.** All 48 files are named in the **scope or exclusion tables**, so
  the routine reaches every one. A ledger row is a **search bound**; its *absence* is the signal
  that says *never swept — give a full historical pass*.
- 🔴 **The proposed fix would have destroyed data and nearly merged:** *"any session that creates a
  client file adds its row in the same commit."* That is the exact instruction **removed on
  2026-08-14**, whose own note says following it *"would have destroyed the history of 14 clients
  across two backfills."* A row dated today bounds the next run to *after* today and erases
  everything before it.

**What is actually true is smaller and duller:** 20 clients are owed a first full pass, the cap is
~6 per run, so the queue is about three runs deep. That is a **queue** problem, not a coverage one.

### ⛔ "The live Routine is stale and still says *Do NOT merge to main*"

The 2026-08-15 run **did** strand 25 files on a branch (recovered as PR #235). But the cause was not
a stale prompt sitting there today: **Lilian re-pasted it after that Saturday**, and it fires
Saturdays only. That run executed the *previous* prompt and reported its own instructions correctly.

**The transferable lesson is the one at the top of §1** — never read a run's behaviour as evidence
about the prompt currently in the web UI.

---

## 5. ⛔ CORRECTED — a session CAN read the prompt back, and the secret is not hidden

**This section said the opposite until an independent review tested it on 2026-08-18.** The claim
was: *"`update_trigger` can write a prompt but nothing exposed to a session can read one — there is
no `get_trigger`, and `list_triggers` returns id, name, cron, enabled state and next run, never the
prompt body."*

🔴 **`list_triggers` returns the ENTIRE prompt body.** Verified by calling it: the response carries
`job_config.ccr.events[0].data.message.content` — the whole ~9 KB sweep prompt verbatim, **including
the literal webhook secret and URL.** The **recurring-expense monitor** Routine leaks the same pair.
There is no `get_trigger`, which is what made the guess plausible; `list_triggers` simply does the
job.

**Two consequences, and they point in opposite directions:**

1. ⚠️ **HALF RIGHT, AND THE OTHER HALF WAS TESTED ON 2026-08-24 — it is false.** Reading is free, as
   above. **Writing is not: `update_trigger` on THIS Routine is refused outright** — *"Agents can
   only update routines they created (via create_trigger). A routine's own session may still disable
   itself (enabled=false only)."* 🔴 **The gate is `created_via`**, the same field the
   [`automated-email-reports`](../../../.claude/skills/automated-email-reports/SKILL.md) skill
   already named for connectors and git sources — **it gates writes too**, and the weekly sweep is
   `http_api`. So the real loop is: **a session reads the live prompt, drafts the new one with the
   real webhook values already in it, and checks it — and Lilian or Julia pastes it.** _(The
   original claim here — "nothing exposed to a session can read one" — was wrong. Its correction
   then over-reached and asserted a session could rewrite any prompt. **Both are the same error:
   a capability asserted from one observation.** This one at least was caught by trying it.)_
2. ⚠️ **The webhook secret is readable by any session holding the Claude-Code-Remote MCP.** The repo
   keeps `<WEBHOOK_SECRET>` placeholders out of git, and that stays right — git history is permanent
   and far more widely readable. But the *reason* written down was wrong: the value is not
   unreachable, it is one tool call away for anyone with the account. **If that matters, the fix is
   to rotate the secret in the Apps Script and in both Routines** — not to rely on it being hidden.

📋 **The full tested capability map is in the [`automated-email-reports`](../../../.claude/skills/automated-email-reports/SKILL.md)
skill** — *"What a SESSION can and cannot do to a Routine"*, every row exercised or refused in a live
call, and **the single place these facts are maintained.** One line of it is what matters here:
**a session can read this Routine's prompt and draft its replacement, but only a person can paste
it** — `created_via: http_api`. Budget for the paste; it is not optional and it is not automatable.

_(Kept rather than deleted because the error is instructive **and it happened twice, in opposite
directions**: a plausible mechanism was asserted without being tested, repeated in five places
including inside a live scheduled Routine, and parked a real decision behind an imaginary obstacle —
then the correction generalised one successful call into a blanket "a session can rewrite any
Routine", which the 2026-08-24 attempt disproved. **Neither direction was tested against the Routine
it was being claimed about.** That is the lesson worth keeping.)_

---

## 6. ✅ The checklist — and what it found on the 2026-08-22 run

> ### 🟢 RESULT — worked 2026-08-24 by Lilian, with Gmail and the commit diff both in hand
>
> **Verdict: the rewrite took. The run landed, merged itself, and the chase pass — the fix this
> whole file was written for — demonstrably works.** Two new defects and one pending human action
> came out of it; none of them is a regression, and none is urgent enough to touch before Saturday
> without Lilian's say-so.
>
> | # | Check | Answer |
> |---|---|---|
> | **A1** | Email arrived? | ✅ Sat **2026-08-22 07:40 UTC** → `lilian@`, one send |
> | **A2** | Subject line | ✅ Clean — no `NOT MERGED` |
> | **A3** | Commits on `main` | ✅ Merge **`2bed4b3`** (PR **#267**), 36 files. **100% inside the no-review carve-out** — `clients/`, `sweep-state.md`, `sop-proposals.md`, nothing else |
> | **B4** | Ages in days? | ✅ **Yes** — *"131 days"*, *"158 days"*, *"159 days"*, with deadlines beside them. ⚠️ ~⅓ of items still print with no clock (see §2) |
> | **B5** | Green over an open item? | ✅ **Never.** Section 4 did not print at all; **8 amber, 0 green**. ⚠️ But `AT A GLANCE` shows blue over open items — §2 |
> | **B6** | Unchased items named? | ⚪ **None named, and none evident** — all 34 clients carry a *Still needed* block. The email never states the count the prompt asks for, so this is unproven either way |
> | **B7** | Spot-check (Best Broker) | ✅✅ **Both halves right** — certificate confirmed saved, Sept-30 renewal surfaced as a dated open item. **This is the proof** |
> | **C8** | Every moved Double note re-read? | ✅ On the evidence available — Melnyk's **both** notes (485225 *and* 490984, the exact pair of the 08-15 miss), plus VOICECAPITAL 491840 and VOXAGO 491841, all re-read in full. Not provable roster-wide |
> | **C9** | Counts stated? | ✅ **34 swept = 27 incremental + 6 first-time full + 1 bounded** (Kompozit). **11 deferred, all named** |
> | **C10** | 2b hit? | 🛑 **YES — Kompozit USA**, correctly found and reported (the run may not write that file itself). ✅ **Actioned in this same pass** — it now has its scope-table row in [`weekend-ci-sweep.md`](./weekend-ci-sweep.md), as a prospect: Gmail + Drive only, no ledger row until it signs |
> | **C11** | Ledger rows for the full passes? | ✅ All **6** written — next Saturday will not re-buy them |
> | **C12** | 🛑 History-erasing row? | ✅ **No.** Kompozit deliberately got **no** row, with the reasoning stated. ⚠️ **A softer form exists** — see *What to change*, item 1 |
> | **D13** | Thinning? | ⚠️ **Visible, and confined to the tail of the expensive block** — the run's last two full passes are the two admitting unread Gmail pages. §3 has the reasoning and the recommendation |
> | **D14** | Did it finish? | ✅ Complete report, sources named throughout |
>
> **✅ And the reconciliation the ledger kept saying it owed is now clean.** Counted by hand
> 2026-08-24: **49 client files = 34 ledger rows + 11 in the first-pass queue + 3 in the exclusion
> table** (MAYS EXPRESS, MEGABAI, SETATECH USA) **+ Kompozit USA** (the C10 flag). Nothing is
> unaccounted for. 🛑 **The footnote at the foot of [`sweep-state.md`](./sweep-state.md) saying the
> reconciliation "still hasn't been done" for Andrii Tymchenko, VOICECAPITAL, VOXAGO and YMI
> TRUCKING is now STALE** — three of those four hold rows as of this run.
>
> ### What to change — three small things, in priority order
>
> 1. 🔴 **A partial full pass must not become a completed one.** VOICECAPITAL and VOXAGO both got
>    *"First full historical sweep completed"* rows **with the baseline advanced to 2026-08-22**,
>    while the same rows admit their Gmail history was only read one page deep. **The run was honest
>    — it wrote the limit into the Coverage-gaps column — but nothing acts on it**, because step 2c
>    queues only clients with **no row**, so a client with a row and an admitted gap is never
>    re-queued. The bound is now permanent and the unread pages are out of the routine's reach.
>    ✅ **Fix, and it is small:** when a full pass finishes incomplete, write the Coverage-gaps cell
>    as an explicit **`⚠️ CATCH-UP OWED: <source> — <what was not read>`**, and make **step 2c queue
>    those alongside the row-less clients** (step 4 already knows "coverage-gap FULL historical
>    passes" exist and counts them against the cap — it is only 2c's queue computation that misses
>    them).
> 2. 🟠 **Colour `AT A GLANCE` by open items, not by "nothing new"** — §2, the OPTIC GOLD case.
>    This one needs the **template** changed as well as the prompt; both carry the same wording.
> 3. 🟡 **An item with no start date says so** — *"pending since unknown — no start date in the
>    file"* rather than a bare *"no update"*. §2.
>
> ✅ **All three were written into the canonical prompt and the template on 2026-08-24, with
> Lilian's go-ahead.** 🛑 **But the live Routine is NOT updated and cannot be from a session** —
> `created_via: http_api`, see §5. **Nothing changes until the new prompt is pasted at
> claude.ai/code/routines**, with the real webhook URL and secret carried across. Until then
> Saturday runs the 2026-08-18 text, which is safe — none of the three is a regression.

**The checklist itself, for the next run.** Work top to bottom. Each row says what to look at and
**what the answer means.**

### A. Did the run land at all?

1. **Did the email arrive Saturday morning?** No email = either the run failed or the webhook broke.
   Check the Routine's run history before assuming anything.
2. **Read the SUBJECT LINE first.** It now carries failure: *"… — NOT MERGED, work on branch
   `<name>`"*. ⚠️ **Scan for the words `NOT MERGED`, not for the ⚠️ emoji** — the prompt specifies
   the string twice and only one copy carries the emoji, so a run following the payload spec emits
   it without. If you see that, the work is stranded — **merge the branch** (it is inside the
   no-review carve-out) and treat the cause as the priority finding.
3. **Confirm the commits are on `main`**, not just claimed: `git log --oneline origin/main` should
   show the sweep's merge. _(The run now verifies this itself with `git merge-base --is-ancestor`
   rather than `git log -3`, which was recency, not containment.)_

### B. Did the chase pass — **step 6** in the prompt — actually run?

4. **Is there a "Still needed" section with AGES IN DAYS?** *"Awaiting X — 19 days"*, not
   *"Awaiting X"*. **An open item with no clock means step 1b did not run**, or ran and was not
   reported. This is the single most important thing to check.
5. **Did any client print the green "nothing new" line while also having open items?** That
   combination is now forbidden. If you see it, the email logic did not take.
6. **Did the run name the items it had no budget to chase?** Silence here is the dangerous case —
   an unchased item that prints as "no movement" is a false statement the next run inherits.
7. **Spot-check one client against reality.** Pick a client with a known open item and confirm the
   report says something true about it. **Best Broker Realty** is the natural test: its Sept 30
   licence renewal should surface as a deadline, and its unfiled certificate as an open item.
### C. Did coverage work?
8. 🔴 **DID THE RUN RE-READ EVERY DOUBLE NOTE WHOSE `updatedAt` MOVED — or just notice that one had?**
   ⚠️ **Double's activity log records no Note entity at all**, so a note whose content changed reads
   as untouched there. **`list_notes` does carry the signal** — it returns every note's `updatedAt`
   **and its body** in one call — so the failure is not usually "no data", it is **noticing a note
   moved and not reading it.** That is exactly what happened: the **2026-08-15** run wrote that note
   **490984**'s metadata *"shows it was touched again"*, re-read that one, and reported *"nothing has
   moved"* for the client — while note **485225** had taken the client's remaining business expenses
   on **2026-08-13**. ⓘ **Those expenses are not themselves what gates that return** — the point is
   that a document delivery went unnoticed for five days, and the next one may be the one that does. Found five days later by a human reading the note. **It bites every client**,
   because the firm's convention is that a working note is **rewritten in place**
   ([`double-mcp`](../../../.claude/skills/double-mcp/) §7 rule 1) — content changes without a new
   note appearing anywhere. ✅ **The rule to check for: compare `updatedAt` on EVERY note returned,
   and re-read the body of every one that moved — not just the first one noticed.** **A run reporting
   "no movement" without that has not established it**; treat the claim as unsupported, not as a
   finding. _(Now also written where it can PREVENT the miss rather than detect it: the operative
   prompt `weekend-ci-sweep.md` step 5 (Double), the [`client-intelligence`](../../../.claude/skills/client-intelligence/)
   skill's sweep sources, and [`double-mcp`](../../../.claude/skills/double-mcp/) §7 rule 1 — so an
   ad-hoc sweep run by hand meets it too.)_

9. **How many clients got an incremental pass, how many a full pass, how many were deferred?**
   The run is now required to state all three. **Expect ~6 full passes** against a queue of ~20.
10. **Did check 2b report any client file missing from the scope/exclusion tables?** 🛑 **A hit is a
   REAL FINDING — add the table row.** It means a session created a client file for someone the
   routine cannot reach, which is exactly the case 2b exists for. _(On 2026-08-18 the answer
   happened to be none. That is a dated observation, not the expected answer — the prompt says so
   itself and tells the run to recompute every time. Do not read a hit as a measurement error.)_
11. **Did the run add ledger rows for the full passes it completed?** It is now told to. If it did
    not, next Saturday re-buys the same expensive passes — check `sweep-state.md`'s diff.
12. 🛑 **Did it add a ledger row for any client it did NOT fully sweep?** That is the
    history-erasing write. **If you see a new row for a client with no full pass in the report,
    revert it before the next Saturday.**

### D. Is the context ceiling biting? (§3)

13. **Look for thinning, but NOT by reading the report top to bottom.** ⚠️ The email is ordered by
    *significance* (proposals first), not by sweep order, and a thinly-swept client collapses into
    the same one-line "nothing new" block as a genuinely quiet one — so comparing the first five
    entries against the last five measures nothing. **Use the run's own counts instead**, which it
    is now required to state: **how many clients got a full pass vs the ~6 cap, how many were
    deferred, and how many open items it had no budget to chase.** A run that deferred more than it
    completed, or that names unchased items on many clients, is hitting the ceiling. Cross-check
    against the commit diff: a client whose file gained nothing while its ledger baseline still
    advanced is the signature to look for.
14. **Did the run finish?** A truncated report, or a report that stops naming sources partway, says
    the same thing.

---

## 7. What to do with the answers

| What you see | What it means | Action |
|---|---|---|
| Ages in days present, deferrals named, coverage counts stated | **The chase pass took.** The core fix works | Move to §3 — decide on subagents (row 48) |
| Open items with no ages, or a green line over an open item | The prompt did not take, or the email logic did not | Re-check the live prompt (`list_triggers`) against [`weekend-ci-sweep.md`](./weekend-ci-sweep.md) and rewrite it (`update_trigger`) — **a session can do this unaided (§5)**; ask Lilian first, since it is a live scheduled job |
| Late clients thinner than early ones | **The context ceiling (§3)** | Adopt subagents — that is what row 48 is waiting for |
| A NOT-MERGED subject | The work is stranded | Merge the branch, then find out why |
| A new ledger row for a client with no full pass | 🛑 **History-erasing write** | Revert that row before Saturday |
| Everything clean | The design holds at this roster size | Note it here with the date, and re-check when the roster grows |

**Whatever the outcome, write it into this file with its date.** The point of the exercise is that
the next person does not start from scratch — which is exactly what went wrong on 2026-08-18.

---

## 8. The reminder that brings someone back here

✅ **It fired — 2026-08-24 13:03 UTC — and the connector warning below turned out to be exactly
right.** The fired session carried **no MCP connectors**, so it could not open the report email;
the review recorded in §6 was worked **in a separate session of Lilian's the same afternoon**, which
had Gmail, Double and the checkout together. **The lesson stands and is now tested twice: a Routine
that must read a mailbox has to be created in the routines UI.** The one-shot has disabled itself
(`run_once_fired`) and needs no cleanup.

A one-shot Routine fired **Monday 2026-08-24, 13:00 UTC** (9am Eastern) in a **fresh session**,
with push + email notification: **`trig_016LK8zUB4js14Y2xANFv2re` — "Sweep health review — the
2026-08-22 run"**. It is written to stand alone: it points the new session at this file, tells it
to work §6's checklist, and asks it to write the outcome back here. It also carries the Pro Title
BTR chase date (~2026-08-28) as a secondary item.

ⓘ **A second one-shot fires 2026-08-28** — `trig_01X8wmHqbqHqi5uVGS8pHw7S`, *"Pro Title BTR — chase
the City of Hollywood (App #40698)"* — the chase date for the BTR reply. Separate on purpose: two
different matters, two different weeks, and neither should be buried inside the other's report.

⚠️ **Both were created WITHOUT MCP connectors AND without a git source, and both limits are real.**
The tool that made them could not pass connectors through, so a fired session may have **no Gmail,
Double or Drive** — it **cannot read the sweep report email**. It may also have **no checkout**:
the weekly sweep Routine carries `sources: [{git_repository: …}]`, these two carry none, so both
prompts now open with *"locate the repo, or clone it"*. _(The repo-coherence audit Routine has
defended against exactly this since July — the pattern was there to copy and was missed.)_ What it *can* do without them is substantial and is most of
the value: read this file, read `git log`/`git show` on `main` for the Saturday sweep's commits,
check whether `sweep-state.md` baselines advanced, and run the 🛑 B11 history-erasing-row check off
the diff. Each prompt tells the session to **say so in its first paragraph** rather than report a silent gap,
and to ask Lilian either to forward the email or to recreate the reminder from
**claude.ai/code/routines** with connectors attached.

ⓘ **The general lesson, worth more than these two Routines:** a Routine created through the MCP
tool gets **neither connectors nor a git source**: `create_trigger`'s `connectors` parameter is
**refused outright for this organization** _(tested — it is not about what the calling session
holds)_, and there is **no parameter for a git source at all**. So **a Routine
that must read a mailbox, or that must have a checkout waiting, has to be created in the routines
UI**, where both are attached by hand. **Everything else about a Routine — including its prompt and
the credentials inside it — a session can read and write perfectly well (§5).** The line is not
"sessions cannot configure Routines"; it is **"connectors and sources are UI-only"**.
✅ **Tested 2026-08-18 — and the full table lives in ONE place**, the
[`automated-email-reports`](../../../.claude/skills/automated-email-reports/SKILL.md) skill,
*"What a SESSION can and cannot do to a Routine"*. Read it there rather than trusting a summary
here: copying these facts around is precisely the failure §4 and §5 of this file document.

---

## 9. Update this file when…

- ~~**The 2026-08-22 run happens**~~ ✅ **done 2026-08-24 — the result is at the top of §6.** No
  check turned out pointless; **B7 (the Best Broker spot-check) is the one that settled it**, and
  **C12 needed widening** — it caught the row-with-no-pass it was written for, but not the
  row-for-a-PARTIAL-pass that actually occurred.
- **The next run happens (2026-08-29)** — check whether §6's three *What to change* items landed,
  and whether a run with a shorter first-pass queue still thins at the tail (§3).
- **Subagents are adopted or rejected** (row 48) — §3 becomes history either way.
- **The prompt changes** — §1's "first run of that prompt" date resets, and §6 may need new checks.
- **A new failure mode appears** — add it to §2 as confirmed, or to §4 as retracted. **Both halves
  earn their place**; the retractions are what stop a future session re-proposing a harmful fix.
