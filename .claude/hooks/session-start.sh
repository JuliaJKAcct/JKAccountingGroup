#!/bin/bash
# JK Accounting Group — SessionStart: the parallel-work briefing.
#
# Julia and Lilian both drive this repo through Claude, often in several sessions
# at once, on work that overlaps. This prints what just landed on main and what
# other sessions have in flight, so a starting session reads that work and
# enriches it instead of writing a contradicting version of it.
#
# See CLAUDE.md → "Two people work here in parallel" and "The drift check".
#
# Design rules: never block a session, never fail one, never hang. Every step is
# guarded and the script always exits 0. Keep the output short — it is prepended
# to every session.

set -uo pipefail

cd "${CLAUDE_PROJECT_DIR:-.}" 2>/dev/null || exit 0
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || exit 0

# `timeout` is GNU; stock macOS does not ship it. Resolve once and fall back to
# git's own low-speed abort rather than silently skipping the whole check.
TO=""
if command -v timeout >/dev/null 2>&1; then TO="timeout 20"
elif command -v gtimeout >/dev/null 2>&1; then TO="gtimeout 20"
fi
export GIT_TERMINAL_PROMPT=0   # a credential prompt would just burn the timeout

fetch_ok=1
$TO git -c http.lowSpeedLimit=1000 -c http.lowSpeedTime=20 \
   fetch origin --prune --quiet >/dev/null 2>&1 || fetch_ok=0

echo "── parallel-work check (for Claude — no need to read this) ──"
[ "$fetch_ok" -eq 0 ] && echo "· offline: this is the LAST fetch, may be stale"

if ! git rev-parse --verify --quiet origin/main >/dev/null 2>&1; then
  echo "· no origin/main here — nothing to compare against"
  exit 0
fi

n=$(git log --oneline HEAD..origin/main 2>/dev/null | wc -l | tr -d ' ')
echo "· main: ${n} commit(s) ahead of you · latest: $(git log -1 --format='%s' origin/main 2>/dev/null | cut -c1-70)"

hot=$(git log --since='4 days ago' --name-only --format='' origin/main 2>/dev/null \
      | grep -v '^[[:space:]]*$' | sort | uniq -c | sort -rn | head -4 \
      | awk '{printf "%s x%s, ", $2, $1}' | sed 's/, $//')
[ -n "$hot" ] && echo "· hot files (4d): $hot"

# Branches other sessions pushed but have not merged. `--no-merged` drops the
# 60-odd finished ones; the 3-day window drops the abandoned ones.
current=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "")
unmerged=$(git branch -r --no-merged origin/main 2>/dev/null | tr -d ' ')
inflight=""
if [ -n "$unmerged" ]; then
  # NOTE: `-x` on the greps below is LOAD-BEARING. With an empty pattern list,
  # `grep -Fx -f` matches nothing (correct); plain `grep -F -f` matches
  # EVERYTHING. And without -x, a branch name that PREFIXES another hides it.
  inflight=$(git for-each-ref --sort=-committerdate \
               --format='%(committerdate:unix)|%(refname:short)' refs/remotes/origin/ 2>/dev/null \
             | awk -F'|' -v now="$(date +%s)" '$1 > now - 259200 {print $2}' \
             | grep -E '^origin/claude/' \
             | grep -Fx -f <(echo "$unmerged") 2>/dev/null \
             | head -4)
  [ -n "$current" ] && inflight=$(echo "$inflight" | grep -vFx "origin/$current")
fi

if [ -n "$inflight" ]; then
  live=$(while IFS= read -r br; do
           [ -z "$br" ] && continue
           printf '%s (%s), ' "${br#origin/claude/}" "$(git log -1 --format='%cr' "$br" 2>/dev/null | sed 's/ ago//;s/ minutes/m/;s/ hours/h/;s/ days/d/;s/ minute/m/;s/ hour/h/;s/ day/d/')"
         done <<< "$inflight" | sed 's/, $//')
  [ -n "$live" ] && echo "· OTHER SESSIONS LIVE: $live"
fi

exit 0
