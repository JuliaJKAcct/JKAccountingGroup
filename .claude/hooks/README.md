# Hooks — the parallel-work safety net

Julia and Lilian both drive this repo through Claude, often in **several sessions at once**, on
work that overlaps. These two hooks exist so a session finds out about the other sessions
*by itself*, instead of depending on someone remembering to check.

They are registered in [`../settings.json`](../settings.json). Hook configuration is read **at
session start**, so they take effect from your **next** session after this lands on `main` — not in
the session that merges it.

| Hook | Fires | What it does |
|---|---|---|
| [`session-start.sh`](./session-start.sh) | `SessionStart` | Fetches, then prints what just landed on `main`, which files `main` has changed most in the last 4 days, and which **unmerged `claude/*` branches were active in the last 3 days** — i.e. what another session is working on right now |
| [`pre-commit-drift-check.sh`](./pre-commit-drift-check.sh) | `PreToolUse` on `Bash`, only when the command contains `git commit` | Fetches (throttled to once per 90s) and, if `main` moved since you branched, lists what landed and **which of your files also changed on `main`** |

## Why there are two, and why the second one matters more

The failure this repo actually suffers is **not** "started from stale `main`". It is:

> A session starts up to date. It works for two hours. Five PRs land on `main` meanwhile. It
> commits against the version of the world it read at the start.

A start-of-session check fires an hour too early to see any of that. `session-start.sh` gives
**situational awareness** — useful, but it cannot see the future. `pre-commit-drift-check.sh` fires
at the **moment of commit**, which is when the drift has actually accumulated. That is the one that
catches the real failure.

Worked example, 2026-08-06: a session audited the Double MCP while three other PRs landed on that
same subject. It wrote *"never open a second note"* into the `double-mcp` skill — the exact
opposite of the `Part 1 / Part 2` rule that had just merged. Both texts were coherent alone, in
different sections; **every git merge would have been clean.** Re-running the drift check on that
branch flags `.claude/skills/double-mcp/SKILL.md` as changed on both sides, which is precisely the
signal that was missing.

## Design rules these scripts follow

- **Never block, never fail a session.** Both always `exit 0` — verified against a garbled
  throttle marker, a missing `timeout`, a missing `python3`, no network, no repo, an empty repo,
  a detached HEAD and a shallow clone. The drift check *warns*; the judgement stays with the
  session, because sometimes committing anyway is right.
- **Bound every network call.** `timeout` (20s at session start, 15s at commit), falling back to
  `gtimeout` — stock macOS ships neither under the first name — and then to git's own
  `http.lowSpeedLimit` abort. **Caveat:** that last fallback is **HTTP-only**. Measured with both
  binaries absent: an HTTPS remote that stalls aborts at ~15s, but an **SSH** remote that hangs is
  unbounded. The firm's remote is HTTPS, so the real case is covered, and Claude Code's own 60s
  hook budget is the outer backstop — worst case is dead air, not a hung session. If anyone ever
  switches the remote to SSH, install coreutils or revisit this.
  `GIT_TERMINAL_PROMPT=0` stops a credential prompt from burning the timeout. The commit-time
  fetch is throttled to once per 90s via a marker in `.git/`, and an identical warning is not
  repeated — see the next rule for what "identical" means.
- **Degrade quietly, but never *falsely reassure*.** No git repo → silence. No network → the
  session-start briefing says it may be stale and shows the last fetch; the drift check compares
  against the stale `origin/main` anyway, because that still catches drift while skipping catches
  nothing. No `python3` → plain text on **stdout** (stderr is discarded on exit 0, so a warning
  sent there would never reach the session). No merge base (shallow clone) → says it could not
  compute the overlap, rather than printing "no overlap".
- **Don't nag, but never go quiet on a CHANGED answer.** The drift warning is suppressed only when
  it would be byte-identical — the key is a hash of `origin/main` + the current branch + the
  computed overlap, not of `origin/main` alone. Switching branch or staging a newly-overlapping
  file changes the answer while `origin/main` stands still; keying on the sha alone stayed silent
  in exactly those cases, which is worse than repeating. (Caught in review, 2026-08-06.)
- **Stay short.** `session-start.sh` output is prepended to every session, so it costs tokens every
  time. It caps at 6 commits, 5 hot files and 5 branches — about 24–30 lines at its longest.

## Changing or switching them off

- **Turn one off:** remove its block from [`../settings.json`](../settings.json).
- **Test without waiting for a session:**
  ```bash
  CLAUDE_PROJECT_DIR="$PWD" ./.claude/hooks/session-start.sh
  echo '{"tool_input":{"command":"git commit -m x"}}' \
    | CLAUDE_PROJECT_DIR="$PWD" ./.claude/hooks/pre-commit-drift-check.sh
  ```
  The drift check prints nothing when there is no drift — that is the pass condition, not a failure.
  To see its warning path, clone the repo to a scratch directory, branch from an older commit, edit
  a file `main` has since changed, and run it there. **Don't test it by checking out an old commit
  in the real working tree** — that pulls the hooks themselves out from under you.
- **The rule these automate** is in [`../../CLAUDE.md`](../../CLAUDE.md) → *"Two people work here in
  parallel"* and *"The drift check"*. Keep the two in step: if a hook changes what it checks, say so
  there.
