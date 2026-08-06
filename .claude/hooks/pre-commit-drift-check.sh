#!/bin/bash
# JK Accounting Group — PreToolUse(Bash): the drift check, fired on `git commit`.
#
# WHY THIS EXISTS AND THE SessionStart HOOK IS NOT ENOUGH.
# The failure this repo actually suffers is not "started from stale main". It is:
# a session starts up to date, works for two hours, five PRs land on main in the
# meantime, and it commits against the version of the world it read at the start.
# A start-of-session check fires an hour too early to see any of that. This one
# fires at the moment of commit, which is when the drift has accumulated.
#
# It WARNS, it never blocks: always exits 0, never vetoes the commit. The judgement
# stays with the session. See CLAUDE.md → "The drift check".

set -uo pipefail

payload=$(cat 2>/dev/null || echo "")
# Only interested in commits. Over-triggering is harmless (throttled, non-blocking).
echo "$payload" | grep -q 'git commit' || exit 0

cd "${CLAUDE_PROJECT_DIR:-.}" 2>/dev/null || exit 0
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || exit 0

# `timeout` is GNU and stock macOS does not ship it. Resolve it once; if it is
# missing entirely, still run the fetch (git's own low-speed abort bounds it)
# rather than silently skipping the whole check forever.
TO=""
if command -v timeout >/dev/null 2>&1; then TO="timeout 15"
elif command -v gtimeout >/dev/null 2>&1; then TO="gtimeout 15"
fi
export GIT_TERMINAL_PROMPT=0

# Throttle the network call to once per 90s so a run of commits doesn't refetch.
# Marker lives in .git/, which is never tracked. Sanitised: a garbled marker must
# not crash the hook (`set -u` + arithmetic on a non-number would exit 1).
gitdir=$(git rev-parse --git-dir 2>/dev/null || echo ".git")
marker="$gitdir/.jk-drift-check"
now=$(date +%s)
last=""
[ -f "$marker" ] && last=$(tr -cd '0-9' < "$marker" 2>/dev/null | head -c 18)
[ -z "${last:-}" ] && last=0
if [ $((now - last)) -gt 90 ]; then
  $TO git -c http.lowSpeedLimit=1000 -c http.lowSpeedTime=15 \
     fetch origin main --quiet >/dev/null 2>&1
  echo "$now" > "$marker" 2>/dev/null || true
fi
# Fall through whether or not the fetch worked — comparing against a slightly
# stale origin/main still catches drift; skipping catches nothing.

behind=$(git log --oneline HEAD..origin/main 2>/dev/null | head -10)
[ -z "$behind" ] && exit 0

warned="$gitdir/.jk-drift-warned"
head_main=$(git rev-parse origin/main 2>/dev/null || echo "")

# Which of the files I am about to commit also moved on main since we diverged?
# `mine` must cover committed, staged AND unstaged — `git commit -a` commits the
# last of those, and missing it produced a falsely reassuring "no overlap".
base=$(git merge-base HEAD origin/main 2>/dev/null || echo "")
overlap=""
no_base=0
if [ -z "$base" ]; then
  no_base=1
else
  mine=$( { git diff --name-only "$base" HEAD 2>/dev/null
            git diff --name-only --cached 2>/dev/null
            git diff --name-only HEAD 2>/dev/null; } | sort -u | grep -v '^[[:space:]]*$')
  theirs=$(git diff --name-only "$base" origin/main 2>/dev/null | sort -u | grep -v '^[[:space:]]*$')
  # `-x` is LOAD-BEARING: with an empty pattern list `grep -Fx -f` matches
  # nothing (correct), while plain `grep -F -f` matches everything.
  if [ -n "$mine" ] && [ -n "$theirs" ]; then
    overlap=$(echo "$mine" | grep -Fx -f <(echo "$theirs") 2>/dev/null | head -8)
  fi
fi

msg="⚠ DRIFT CHECK — main moved while you were working.

Landed on origin/main since you branched:
$(echo "$behind" | sed 's/^/  /')
"

if [ "$no_base" -eq 1 ]; then
  msg="${msg}
❓ Could NOT compute which files overlap — no common ancestor with origin/main
   (shallow clone, or unrelated histories). Check by hand before committing:
     git diff --name-only HEAD; git show origin/main --stat"
elif [ -n "$overlap" ]; then
  msg="${msg}
🔴 BOTH you and main changed these files:
$(echo "$overlap" | sed 's/^/  /')

Re-read each one AS IT IS ON MAIN NOW (git show origin/main:<path>) before committing.
Your edit was written against the older version."
else
  msg="${msg}
No file overlaps — but check the subjects above for your TOPIC, not just your files.
The conflict git cannot see is semantic: two sessions writing contradictory rules in
different files merge perfectly cleanly. If any of those commits touches what you are
documenting, read it before you commit."
fi

msg="${msg}

Not a blocker — commit if you have checked. Rebase with: git fetch origin main && git rebase origin/main"

# Don't repeat an IDENTICAL warning on every commit in a row — but key it on the
# ANSWER, not just origin/main's sha. Switching branch, or staging a file that
# newly overlaps, changes the answer while origin/main stands still; keying on the
# sha alone went silent in exactly those cases, which is worse than repeating.
sig=$(printf '%s|%s|%s|%s' "$head_main" "$(git rev-parse --abbrev-ref HEAD 2>/dev/null)" \
        "$no_base" "$overlap" | cksum | cut -d' ' -f1)
if [ -f "$warned" ] && [ "$(cat "$warned" 2>/dev/null)" = "$sig" ]; then
  exit 0
fi
printf '%s' "$sig" > "$warned" 2>/dev/null || true

# Structured output so the session actually reads it. The plain-text fallback goes
# to STDOUT, not stderr: on exit 0 Claude Code surfaces stdout and discards stderr.
if command -v python3 >/dev/null 2>&1; then
  python3 -c '
import json,sys
print(json.dumps({"hookSpecificOutput":{"hookEventName":"PreToolUse","additionalContext":sys.stdin.read()}}))
' <<< "$msg" 2>/dev/null || echo "$msg"
else
  echo "$msg"
fi

exit 0
