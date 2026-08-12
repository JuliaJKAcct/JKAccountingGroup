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

echo "═══ Parallel-work check — other sessions may be editing the same files ═══"
[ "$fetch_ok" -eq 0 ] && echo "(Could not reach origin — this is from the LAST fetch and may be stale.)"

# ── Which Odoo route does this session have? ────────────────────────────────
#
# Two routes reach Odoo and they do not have the same power: the MCP connector
# (any session, 50 calls/day for the whole firm) and the direct API (no cap, but
# its key must be in the session's environment, and an environment is chosen
# when a session STARTS). Stating the route here removes a judgement call: a
# session no longer has to classify a request before discovering what it has.
#
# Lilian's reason for wanting it visible (Aug 2026): Julia often asks for website
# work and does not follow this machinery, so "I can't do that" must never be the
# whole answer. What to say instead is in the skill — deliberately NOT duplicated
# here, so this hook has no facts of its own to go stale.
#
# Printed before the origin/main guard below, so it survives a failed fetch.
# Two lines, per the hooks README's "stay short" rule.
if [ -n "${ODOO_API_KEY:-}" ]; then
  if [ -n "${ODOO_URL:-}" ] && [ -n "${ODOO_DB:-}" ]; then
    echo "Odoo: direct-API credentials present in this session (URL, DB, key)."
  else
    echo "Odoo: ODOO_API_KEY is set but ODOO_URL/ODOO_DB are NOT — the direct route"
    echo "  is misconfigured, and its curl will fail on an empty host, not a 401."
  fi
  echo "  Before using it, read .claude/skills/odoo-mcp §1 — it says what that route"
  echo "  may and may not do today. Do not infer either from this line."
fi
# No `else` branch on purpose: connector-only is the default state, and CLAUDE.md
# already carries it into every session. Printing it here would be a third copy.

if ! git rev-parse --verify --quiet origin/main >/dev/null 2>&1; then
  echo "(No origin/main here yet — nothing to compare against.)"
  echo "═════════════════════════════════════════════════════════════════════════"
  exit 0
fi

echo ""
echo "Just landed on main:"
git log -6 --format='  %h  %cr — %s' origin/main 2>/dev/null | cut -c1-120

hot=$(git log --since='4 days ago' --name-only --format='' origin/main 2>/dev/null \
      | grep -v '^[[:space:]]*$' | sort | uniq -c | sort -rn | head -5 \
      | awk '{printf "  %2sx  %s\n", $1, $2}')
if [ -n "$hot" ]; then
  echo ""
  echo "Files main changed most in the last 4 days — READ these before editing them:"
  echo "$hot"
fi

# Branches other sessions pushed but have not merged. `--no-merged` drops the
# 60-odd finished ones; the 3-day window drops the abandoned ones.
current=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "")
unmerged=$(git branch -r --no-merged origin/main 2>/dev/null | tr -d ' ')
inflight=""
if [ -n "$unmerged" ]; then
  # NOTE: `-x` on the grep below is LOAD-BEARING. With an empty pattern list,
  # `grep -Fx -f` matches nothing (correct); plain `grep -F -f` matches
  # EVERYTHING. Do not drop the -x.
  inflight=$(git for-each-ref --sort=-committerdate \
               --format='%(committerdate:unix)|%(refname:short)' refs/remotes/origin/ 2>/dev/null \
             | awk -F'|' -v now="$(date +%s)" '$1 > now - 259200 {print $2}' \
             | grep -E '^origin/claude/' \
             | grep -Fx -f <(echo "$unmerged") 2>/dev/null \
             | head -5)
  # -x here too: without it, a branch name that PREFIXES another hides it.
  [ -n "$current" ] && inflight=$(echo "$inflight" | grep -vFx "origin/$current")
fi

if [ -n "$inflight" ]; then
  echo ""
  echo "Unmerged branches active in the last 3 days — another session may be working here NOW:"
  while IFS= read -r br; do
    [ -z "$br" ] && continue
    echo "  ${br#origin/}  ·  $(git log -1 --format='%cr — %s' "$br" 2>/dev/null | cut -c1-70)"
  done <<< "$inflight"
  echo "  → If any overlaps your task, read it first (git log -p <branch>) and build on it."
fi

echo ""
echo "Before you commit: git fetch origin main && git log --oneline HEAD..origin/main"
echo "Anything there means re-read the CURRENT version of what you are changing — git"
echo "merges contradictory guidance without complaint. (CLAUDE.md → the drift check.)"

echo "═════════════════════════════════════════════════════════════════════════"

exit 0
