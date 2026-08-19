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
| **Prompt in the Routine** | The **2026-08-18** version, pasted by Lilian that evening |
| **First run of that prompt** | 🔴 **Saturday 2026-08-22 — it has never executed.** Everything below is untested in production |
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

**The fix, now in the prompt:** step **1b** re-reads each client's `Outstanding items` and
`Information still needed` and takes every entry **back to the sources as a named query** — *did
this specific document arrive?* — then reports what is still open **with its age in days** and any
deadline. Budget ~5 calls/client, deadline items first, and **name whatever it had no budget to
chase** rather than letting it print as "no movement".

**And in the email:** "Nothing new" now prints **only** when sections 1, 2 *and* 3 are empty, and a
client with anything open is **amber with the oldest item's age**, never green.
**"Nothing new" and "nothing wrong" must never print as the same line.**

---

## 3. Confirmed problem: the run is bigger than one context, and nobody has fixed that

**Lilian's question, 2026-08-18: are there limits on running Client Intelligence?**

**There is no vendor quota.** Every number in this repo — ~10–15 calls/client, ~5 for the chase
pass, ~6 full historical passes per run — is **self-imposed discipline**. Nothing rejects the 200th
call. Saying that plainly matters: a session that believes it is rationing a hard quota cuts
corners it did not need to cut.

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

🔵 **Deliberately not adopted yet.** Changing the prompt again before its first execution would
mean debugging two changes at once, and re-pasting costs a human (the webhook secret cannot be read
back by a session — see §5). **Let 2026-08-22 run, then decide on evidence.** Tracked as
[`FOLLOW-UPS.md`](../../../FOLLOW-UPS.md) row 48.

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

## 5. Why the prompt cannot be fixed by a session alone

`update_trigger` can **write** a prompt. **Nothing exposed to a session can read one** — there is no
`get_trigger`, and `list_triggers` returns id, name, cron, enabled state and next run, never the
prompt body. **The webhook URL and secret exist only inside that prompt.** So a session that
rewrites it destroys credentials it cannot see, and the failure is silent: the sweep keeps merging
correctly and the weekly email simply stops arriving.

**Every prompt change therefore needs a human** to read the two values out of the live prompt first
(or to paste the whole block by hand). That is why this keeps not happening, and why §3's subagent
change is being batched rather than rushed.

---

## 6. ✅ The checklist — run this against the 2026-08-22 report

Work top to bottom. Each row says what to look at and **what the answer means.**

### A. Did the run land at all?

1. **Did the email arrive Saturday morning?** No email = either the run failed or the webhook broke.
   Check the Routine's run history before assuming anything.
2. **Read the SUBJECT LINE first.** It now carries failure: *"… — ⚠️ NOT MERGED, work on branch
   `<name>`"*. If you see that, the work is stranded — **merge the branch** (it is inside the
   no-review carve-out) and treat the cause as the priority finding.
3. **Confirm the commits are on `main`**, not just claimed: `git log --oneline origin/main` should
   show the sweep's merge. _(The run now verifies this itself with `git merge-base --is-ancestor`
   rather than `git log -3`, which was recency, not containment.)_

### B. Did step 1b — the chase pass — actually run?

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

8. **How many clients got an incremental pass, how many a full pass, how many were deferred?**
   The run is now required to state all three. **Expect ~6 full passes** against a queue of ~20.
9. **Did check 2b report any client file missing from the scope/exclusion tables?** On 2026-08-18
   the answer was **none**, and that is the correct result — 2b is a backstop, not a live alarm.
   **A hit is a real finding**, so add the table row rather than dismissing it.
10. **Did the run add ledger rows for the full passes it completed?** It is now told to. If it did
    not, next Saturday re-buys the same expensive passes — check `sweep-state.md`'s diff.
11. 🛑 **Did it add a ledger row for any client it did NOT fully sweep?** That is the
    history-erasing write. **If you see a new row for a client with no full pass in the report,
    revert it before the next Saturday.**

### D. Is the context ceiling biting? (§3)

12. **Compare the depth of the first five clients in the report against the last five.** If the
    late ones are visibly thinner — fewer sources named, no chase results, more deferrals — that is
    §3 showing up, and it is the evidence for adopting subagents (row 48).
13. **Did the run finish?** A truncated report, or a report that stops naming sources partway, says
    the same thing.

---

## 7. What to do with the answers

| What you see | What it means | Action |
|---|---|---|
| Ages in days present, deferrals named, coverage counts stated | **Step 1b took.** The core fix works | Move to §3 — decide on subagents (row 48) |
| Open items with no ages, or a green line over an open item | The prompt did not take, or the email logic did not | Re-check the pasted prompt against [`weekend-ci-sweep.md`](./weekend-ci-sweep.md); this needs a human paste (§5) |
| Late clients thinner than early ones | **The context ceiling (§3)** | Adopt subagents — that is what row 48 is waiting for |
| A NOT-MERGED subject | The work is stranded | Merge the branch, then find out why |
| A new ledger row for a client with no full pass | 🛑 **History-erasing write** | Revert that row before Saturday |
| Everything clean | The design holds at this roster size | Note it here with the date, and re-check when the roster grows |

**Whatever the outcome, write it into this file with its date.** The point of the exercise is that
the next person does not start from scratch — which is exactly what went wrong on 2026-08-18.

---

## 8. The reminder that brings someone back here

A one-shot Routine fires **Monday 2026-08-24, 13:00 UTC** (9am Eastern) in a **fresh session**,
with push + email notification: **`trig_016LK8zUB4js14Y2xANFv2re` — "Sweep health review — the
2026-08-22 run"**. It is written to stand alone: it points the new session at this file, tells it
to work §6's checklist, and asks it to write the outcome back here. It also carries the Pro Title
BTR chase date (~2026-08-28) as a secondary item.

⚠️ **It was created WITHOUT MCP connectors, and that limits it.** The tool that made it could not
pass connectors through, so the fired session may have **no Gmail, Double or Drive** — meaning it
**cannot read the sweep report email**. What it *can* do without them is substantial and is most of
the value: read this file, read `git log`/`git show` on `main` for the Saturday sweep's commits,
check whether `sweep-state.md` baselines advanced, and run the 🛑 B11 history-erasing-row check off
the diff. The prompt tells it to **say so in its first paragraph** rather than reporting a silent
gap, and to ask Lilian either to forward the email or to recreate the reminder from
**claude.ai/code/routines** with connectors attached.

ⓘ **The general lesson, worth more than this one Routine:** a Routine created through the MCP tool
inherits only the connectors the calling session can pass, and a session that has none passes none.
**A Routine that needs to read a mailbox has to be created in the routines UI**, where connectors
are attached by hand — the same trap as the webhook secret in §5, and for the same reason: some
things about a Routine can only be set by a person at a screen.

---

## 9. Update this file when…

- **The 2026-08-22 run happens** — record what the checklist found, and delete any check that
  turned out to be pointless.
- **Subagents are adopted or rejected** (row 48) — §3 becomes history either way.
- **The prompt changes** — §1's "first run of that prompt" date resets, and §6 may need new checks.
- **A new failure mode appears** — add it to §2 as confirmed, or to §4 as retracted. **Both halves
  earn their place**; the retractions are what stop a future session re-proposing a harmful fix.
