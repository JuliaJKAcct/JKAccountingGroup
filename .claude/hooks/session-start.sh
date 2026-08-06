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
# Design rules: never block a session, never fail one. Every step is guarded and
# the script always exits 0. Keep the output short — it is prepended to every
# session.

set -uo pipefail

cd "${CLAUDE_PROJECT_DIR:-.}" 2>/dev/null || exit 0
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || exit 0

# 20s ceiling: a slow network must not delay the session.
if ! timeout 20 git fetch origin --prune --quiet >/dev/null 2>&1; then
  echo "[parallel-work check] Could not reach origin. Run 'git fetch origin main' before you commit."
  exit 0
fi

echo "═══ Parallel-work check — other sessions may be editing the same files ═══"

echo ""
echo "Just landed on main:"
git log -6 --format='  %h  %cr — %s' origin/main 2>/dev/null | cut -c1-120

hot=$(git log --since='4 days ago' --name-only --format='' origin/main 2>/dev/null \
      | grep -v '^[[:space:]]*$' | sort | uniq -c | sort -rn | head -6 \
      | awk '{printf "  %2sx  %s\n", $1, $2}')
if [ -n "$hot" ]; then
  echo ""
  echo "Files main changed most in the last 4 days — READ these before editing them:"
  echo "$hot"
fi

# Branches other sessions have pushed but not yet merged. `--no-merged` keeps
# the 60-odd finished branches out; the 3-day window keeps abandoned ones out.
current=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "")
unmerged=$(git branch -r --no-merged origin/main 2>/dev/null | tr -d ' ')
inflight=$(git for-each-ref --sort=-committerdate \
             --format='%(committerdate:unix)|%(refname:short)' refs/remotes/origin/ 2>/dev/null \
           | awk -F'|' -v now="$(date +%s)" '$1 > now - 259200 {print $2}' \
           | grep -E '^origin/claude/' \
           | grep -Fx -f <(echo "$unmerged") 2>/dev/null \
           | grep -v -F "origin/$current" \
           | head -6)

if [ -n "$inflight" ]; then
  echo ""
  echo "Unmerged branches active in the last 3 days — another session may be working here NOW:"
  while IFS= read -r br; do
    [ -z "$br" ] && continue
    subj=$(git log -1 --format='%cr — %s' "$br" 2>/dev/null | cut -c1-80)
    echo "  ${br#origin/}"
    echo "      $subj"
  done <<< "$inflight"
  echo "  → If any of these overlaps your task, read it first (git log -p <branch>) and build on it."
fi

echo ""
echo "Before you commit: git fetch origin main && git log --oneline HEAD..origin/main"
echo "Anything there means re-read the CURRENT version of what you are changing — git"
echo "merges contradictory guidance without complaint. (CLAUDE.md → the drift check.)"
echo "═════════════════════════════════════════════════════════════════════════"

exit 0
