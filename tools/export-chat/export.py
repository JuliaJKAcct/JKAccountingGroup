#!/usr/bin/env python3
"""export-chat — turn a Claude Code session into a plain-text conversation log.

What it writes is the conversation and nothing else: what the person typed and
what Claude replied in the chat. Tool calls, tool results, internal reasoning,
system reminders and subagent chatter are dropped.

    python3 tools/export-chat/export.py --list
    python3 tools/export-chat/export.py -o ~/session.txt
    python3 tools/export-chat/export.py <transcript.jsonl> -o ~/session.txt

Session length is irrelevant: the transcript on disk is an append-only record,
so a conversation that ran over several days comes out whole even though the
model's own context was compacted along the way.
"""

import argparse
import glob
import json
import os
import re
import sys
from datetime import datetime, timezone

try:
    from zoneinfo import ZoneInfo
    LOCAL_TZ = ZoneInfo("America/New_York")     # the firm reads these in Miami time
except Exception:                               # pragma: no cover - missing tzdata
    LOCAL_TZ = timezone.utc

PROJECTS = os.path.expanduser("~/.claude/projects")

# Everything is dropped unless it is one of these. An allowlist, deliberately:
# Claude Code adds internal line types over time, and a new one must not be able
# to appear in a transcript by default.
VISIBLE_TYPES = {"user", "assistant"}

REMINDER = re.compile(r"<system-reminder>.*?</system-reminder>", re.S)
STDOUT = re.compile(r"<local-command-stdout>.*?</local-command-stdout>", re.S)
CMD_MSG = re.compile(r"<command-message>.*?</command-message>", re.S)
CMD_NAME = re.compile(r"<command-name>(.*?)</command-name>", re.S)
CMD_ARGS = re.compile(r"<command-args>(.*?)</command-args>", re.S)


def visible_text(content):
    """The text a person actually saw. Returns None if the message is machine traffic.

    A message carrying a tool_result is a tool's output wearing the user role —
    printing it as something the person said would be a lie about the record.
    """
    if isinstance(content, str):
        return content
    parts = []
    for block in content or []:
        if not isinstance(block, dict):
            continue
        kind = block.get("type")
        if kind == "tool_result":
            return None
        if kind == "text":
            parts.append(block.get("text", ""))
        elif kind == "image":
            parts.append("[image]")
        # thinking / tool_use fall through: internal, never rendered
    return "\n".join(p for p in parts if p)


def clean(text):
    """Strip the envelopes the harness wraps around a person's prompt."""
    text = REMINDER.sub("", text)
    text = STDOUT.sub("", text)
    name = CMD_NAME.search(text)
    if name:
        args = CMD_ARGS.search(text)
        slash = name.group(1).strip()
        extra = args.group(1).strip() if args else ""
        return (slash + (" " + extra if extra else "")).strip()
    text = CMD_MSG.sub("", text)
    return text.strip()


def stamp(raw):
    if not raw:
        return None
    try:
        return datetime.fromisoformat(raw.replace("Z", "+00:00")).astimezone(LOCAL_TZ)
    except ValueError:
        return None


def read_turns(path):
    """Parse a transcript into merged, chronological conversation turns."""
    turns, seen, meta = [], set(), {}
    with open(path, encoding="utf-8", errors="replace") as handle:
        for line in handle:
            line = line.strip()
            if not line:
                continue
            try:
                entry = json.loads(line)
            except json.JSONDecodeError:
                continue            # a half-written last line while the session runs

            if entry.get("type") not in VISIBLE_TYPES or "message" not in entry:
                continue
            if entry.get("isSidechain") or entry.get("isMeta"):
                continue            # subagent transcript, or harness bookkeeping
            uuid = entry.get("uuid")
            if uuid and uuid in seen:
                continue            # a resumed session can replay lines it already wrote
            if uuid:
                seen.add(uuid)

            message = entry["message"]
            body = visible_text(message.get("content"))
            if body is None:
                continue
            body = clean(body)
            if not body:
                continue            # a turn that was only tool calls has nothing to show

            meta.setdefault("session", entry.get("sessionId"))
            meta.setdefault("cwd", entry.get("cwd"))
            meta.setdefault("branch", entry.get("gitBranch"))

            role = message.get("role") or entry.get("type")
            when = stamp(entry.get("timestamp"))
            if turns and turns[-1]["role"] == role:
                turns[-1]["text"] += "\n\n" + body      # one visual turn, several lines
            else:
                turns.append({"role": role, "when": when, "text": body})
    return turns, meta


def render(turns, meta, source, me):
    label = {"user": me, "assistant": "CLAUDE"}
    first = next((t["when"] for t in turns if t["when"]), None)
    last = next((t["when"] for t in reversed(turns) if t["when"]), None)
    fmt = "%Y-%m-%d %H:%M"

    out = [
        "CLAUDE CODE — CONVERSATION LOG",
        "",
        f"Session  : {meta.get('session') or '(unknown)'}",
        f"Project  : {meta.get('cwd') or '(unknown)'}   (branch {meta.get('branch') or '-'})",
        f"Period   : {first.strftime(fmt) if first else '?'}  ->  {last.strftime(fmt) if last else '?'}",
        f"Turns    : {len(turns)}",
        f"Source   : {source}",
        f"Exported : {datetime.now(LOCAL_TZ).strftime(fmt)}",
        "",
        "The conversation only — no tool calls, no tool output, no internal reasoning.",
        "Times are America/New_York.",
        "",
        "This may contain client information. Keep it where the firm keeps client",
        "material. Do not commit it to the repository.",
    ]

    day = None
    for turn in turns:
        when = turn["when"]
        if when and when.date() != day:
            day = when.date()
            out += ["", "=" * 72, f"  {when.strftime('%A, %d %B %Y')}", "=" * 72]
        head = f"[{when.strftime('%H:%M')}]  " if when else ""
        out += ["", "-" * 72, f"{head}{label.get(turn['role'], turn['role'].upper())}",
                "-" * 72, "", turn["text"]]
    return "\n".join(out) + "\n"


def transcripts(project=None):
    root = os.path.join(PROJECTS, project) if project else PROJECTS
    found = glob.glob(os.path.join(root, "*.jsonl")) if project \
        else glob.glob(os.path.join(root, "*", "*.jsonl"))
    return sorted(found, key=os.path.getmtime, reverse=True)


def slug(path):
    """Claude Code names a project folder after its path, with separators as dashes."""
    return path.replace("/", "-").replace(".", "-").replace("_", "-")


def main():
    parser = argparse.ArgumentParser(
        description="Export a Claude Code session's conversation to a .txt file.")
    parser.add_argument("transcript", nargs="?",
                        help="path to a .jsonl transcript (default: this project's most recent)")
    parser.add_argument("-o", "--out", help="file to write")
    parser.add_argument("--list", action="store_true",
                        help="list the transcripts on this machine and exit")
    parser.add_argument("--me", default="YOU", help="label for the human side (default: YOU)")
    args = parser.parse_args()

    if args.list:
        found = transcripts()
        if not found:
            print(f"No transcripts under {PROJECTS}", file=sys.stderr)
            return 1
        for path in found:
            turns, meta = read_turns(path)
            when = datetime.fromtimestamp(os.path.getmtime(path), LOCAL_TZ)
            print(f"{when.strftime('%Y-%m-%d %H:%M')}  {len(turns):4d} turns  "
                  f"{meta.get('session') or '?'}\n    {path}")
        return 0

    path = args.transcript
    if not path:
        found = transcripts(slug(os.getcwd())) or transcripts()
        if not found:
            print(f"No transcript found under {PROJECTS}. Run --list to look around.",
                  file=sys.stderr)
            return 1
        path = found[0]
    if not os.path.exists(path):
        print(f"No such transcript: {path}", file=sys.stderr)
        return 1

    turns, meta = read_turns(path)
    if not turns:
        print(f"{path} holds no conversation turns.", file=sys.stderr)
        return 1

    out = args.out or f"claude-session-{datetime.now(LOCAL_TZ).strftime('%Y-%m-%d')}.txt"
    with open(out, "w", encoding="utf-8") as handle:
        handle.write(render(turns, meta, path, args.me))
    print(f"{out}  —  {len(turns)} turns, {os.path.getsize(out):,} bytes")
    return 0


if __name__ == "__main__":
    sys.exit(main())
