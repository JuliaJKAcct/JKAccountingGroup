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
    """The text a person actually saw.

    A tool_result is a tool's output wearing the user role — rendering it as
    something the person said would be a lie about the record, so those blocks
    are dropped. Only those: a message can carry a tool_result AND text the
    person typed (they interrupted a running tool), and those words are the
    whole point of the log.
    """
    if isinstance(content, str):
        return content
    parts = []
    for block in content or []:
        if not isinstance(block, dict):
            continue
        kind = block.get("type")
        if kind == "text":
            parts.append(block.get("text", ""))
        elif kind == "image":
            parts.append("[image]")
        # thinking / tool_use fall through: internal, never rendered
    return "\n".join(p for p in parts if p)


def clean(text, role):
    """Strip the envelopes the harness wraps around a person's prompt.

    Only a user turn. Claude quoting `<command-name>` or `<system-reminder>`
    in a reply is ordinary prose, and rewriting it would silently destroy the
    answer — the failure this tool's tests exist to catch.
    """
    if role != "user":
        return text.strip()
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
    """Never raise: this runs once, on a session that is about to be deleted."""
    if not isinstance(raw, str) or not raw:
        return None
    try:
        return datetime.fromisoformat(raw.replace("Z", "+00:00")).astimezone(LOCAL_TZ)
    except (ValueError, TypeError):
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
            if not body.strip():
                continue            # a turn that was only tool calls has nothing to show

            for key, field in (("session", "sessionId"), ("cwd", "cwd"),
                               ("branch", "gitBranch")):
                if not meta.get(key):
                    meta[key] = entry.get(field)

            role = message.get("role") or entry.get("type")
            when = stamp(entry.get("timestamp"))
            body = clean(body, role)
            if not body:
                continue
            # One visual reply is several transcript lines, so merge them — but never
            # across a day boundary, or a multi-day session loses a day heading and
            # reports the wrong end time.
            same_day = (turns and turns[-1]["role"] == role
                        and bool(turns[-1]["when"]) == bool(when)
                        and (when is None or turns[-1]["when"].date() == when.date()))
            if same_day:
                turns[-1]["text"] += "\n\n" + body
                if when:
                    turns[-1]["end"] = when
            else:
                turns.append({"role": role, "when": when, "end": when, "text": body})
    return turns, meta


def render(turns, meta, source, me):
    label = {"user": me, "assistant": "CLAUDE"}
    first = next((t["when"] for t in turns if t["when"]), None)
    last = next((t["end"] or t["when"] for t in reversed(turns)
                 if t["end"] or t["when"]), None)
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
    """Claude Code's own project-folder encoding: /[^a-zA-Z0-9]/g -> '-'.

    It must match exactly. A near-miss (a path with a space or an accent) finds
    no folder, and the caller then falls back to every project on the machine.
    """
    return re.sub(r"[^a-zA-Z0-9]", "-", path)


def opening_line(path):
    """The first thing the person typed — how you tell two sessions apart."""
    try:
        with open(path, encoding="utf-8", errors="replace") as handle:
            for line in handle:
                try:
                    entry = json.loads(line)
                except json.JSONDecodeError:
                    continue
                if entry.get("type") != "user" or entry.get("isSidechain"):
                    continue
                text = visible_text(entry.get("message", {}).get("content"))
                text = clean(text or "", "user")
                if text:
                    text = " ".join(text.split())
                    return text[:64] + ("..." if len(text) > 64 else "")
    except OSError:
        pass
    return "(no conversation)"


def inside_a_repo(path):
    """The working tree is the one place a client transcript must never land."""
    folder = os.path.dirname(os.path.abspath(path)) or os.getcwd()
    while True:
        if os.path.isdir(os.path.join(folder, ".git")):
            return folder
        parent = os.path.dirname(folder)
        if parent == folder:
            return None
        folder = parent


def main():
    parser = argparse.ArgumentParser(
        description="Export a Claude Code session's conversation to a .txt file.")
    parser.add_argument("transcript", nargs="?",
                        help="path to a .jsonl transcript (default: this project's most recent)")
    parser.add_argument("-o", "--out", help="file to write (default: your home directory)")
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
            when = datetime.fromtimestamp(os.path.getmtime(path), LOCAL_TZ)
            print(f"{when.strftime('%Y-%m-%d %H:%M')}  {os.path.getsize(path) / 1024:8.0f} KB  "
                  f"{os.path.splitext(os.path.basename(path))[0]}\n"
                  f"    {opening_line(path)}\n    {path}")
        return 0

    path = args.transcript
    if not path:
        found = transcripts(slug(os.getcwd()))
        if not found:
            # Nothing for this directory. Widening the search can reach another
            # project's session, and the export is client material — so say so.
            found = transcripts()
            if found:
                print(f"No transcript for {os.getcwd()}; falling back to the most "
                      f"recent on this machine:\n  {found[0]}\n"
                      f"  {opening_line(found[0])}\n"
                      f"Check that is the session you meant, or pass the path.",
                      file=sys.stderr)
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

    out = args.out or os.path.join(
        os.path.expanduser("~"),
        f"claude-session-{datetime.now(LOCAL_TZ).strftime('%Y-%m-%d')}.txt")
    repo = inside_a_repo(out)
    if repo:
        print(f"Refusing to write inside the git working tree at {repo}.\n"
              f"A session's conversation is client material and must never land in a "
              f"repository. Pass -o with a path outside it.", file=sys.stderr)
        return 1

    with open(out, "w", encoding="utf-8") as handle:
        handle.write(render(turns, meta, path, args.me))
    print(f"{out}  —  {len(turns)} turns, {os.path.getsize(out):,} bytes")
    return 0


if __name__ == "__main__":
    sys.exit(main())
