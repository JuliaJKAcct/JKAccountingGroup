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

# Throttle: at most one fetch every 90s, so a run of commits doesn't hit the network
# repeatedly. Marker lives in .git/, which is never tracked.
marker="$(git rev-parse --git-dir 2>/dev/null)/.jk-drift-check"
now=$(date +%s)
last=0
[ -f "$marker" ] && last=$(cat "$marker" 2>/dev/null || echo 0)
if [ $((now - last)) -gt 90 ]; then
  timeout 15 git fetch origin main --quiet >/dev/null 2>&1 || exit 0
  echo "$now" > "$marker" 2>/dev/null || true
fi

behind=$(git log --oneline HEAD..origin/main 2>/dev/null | head -10)
[ -z "$behind" ] && exit 0

# Which of the files I am changing also moved on main since we diverged?
base=$(git merge-base HEAD origin/main 2>/dev/null || echo "")
mine=$(git diff --name-only "$base" HEAD 2>/dev/null; git diff --name-only --cached 2>/dev/null)
theirs=$(git diff --name-only "$base" origin/main 2>/dev/null)
overlap=""
if [ -n "$mine" ] && [ -n "$theirs" ]; then
  overlap=$(echo "$mine" | sort -u | grep -Fx -f <(echo "$theirs" | sort -u) 2>/dev/null | head -8)
fi

msg="⚠ DRIFT CHECK — main moved while you were working.

Landed on origin/main since you branched:
$(echo "$behind" | sed 's/^/  /')
"

if [ -n "$overlap" ]; then
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

# Prefer structured output so the session actually reads it; fall back to stderr.
if command -v python3 >/dev/null 2>&1; then
  python3 -c '
import json,sys
m = sys.stdin.read()
print(json.dumps({"hookSpecificOutput":{"hookEventName":"PreToolUse","additionalContext":m}}))
' <<< "$msg" 2>/dev/null || echo "$msg" >&2
else
  echo "$msg" >&2
fi

exit 0
