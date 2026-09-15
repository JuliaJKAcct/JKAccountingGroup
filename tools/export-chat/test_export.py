#!/usr/bin/env python3
"""Tests for export-chat.

The tool makes one promise — the log holds the conversation and nothing else —
and these are what hold it to that. Run after any change:

    python3 tools/export-chat/test_export.py
"""

import json
import os
import subprocess
import sys
import tempfile

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import export  # noqa: E402

BASE = {"cwd": "/home/user/JKAccountingGroup", "gitBranch": "main",
        "sessionId": "test-session"}


def line(kind, role, content, when="2026-09-10T14:00:00.000Z", **extra):
    row = dict(BASE, type=kind, timestamp=when,
               message={"role": role, "content": content})
    row.setdefault("uuid", f"u{len(str(content))}-{when}-{kind}")
    row.update(extra)
    return row


def build(rows):
    handle = tempfile.NamedTemporaryFile("w", suffix=".jsonl", delete=False,
                                         encoding="utf-8")
    for row in rows:
        handle.write(json.dumps(row) + "\n")
    handle.close()
    return handle.name


def export_text(rows):
    path = build(rows)
    try:
        turns, meta = export.read_turns(path)
        return export.render(turns, meta, path, "YOU"), turns
    finally:
        os.unlink(path)


CASES = []


def case(fn):
    CASES.append(fn)
    return fn


@case
def tool_results_are_not_the_person_speaking():
    """A tool_result wears the user role. It must never read as something she said."""
    text, turns = export_text([
        line("user", "user", "check the balance"),
        line("user", "user", [{"type": "tool_result",
                               "content": [{"type": "text", "text": "SECRET-LEDGER-42"}]}]),
        line("assistant", "assistant", [{"type": "text", "text": "done"}]),
    ])
    assert "SECRET-LEDGER-42" not in text
    assert len(turns) == 2, turns


@case
def internal_reasoning_never_appears():
    text, _ = export_text([
        line("assistant", "assistant", [
            {"type": "thinking", "thinking": "PRIVATE-CHAIN-OF-THOUGHT"},
            {"type": "text", "text": "Here is the answer."},
        ]),
    ])
    assert "PRIVATE-CHAIN-OF-THOUGHT" not in text
    assert "Here is the answer." in text


@case
def tool_calls_never_appear():
    text, turns = export_text([
        line("assistant", "assistant", [
            {"type": "tool_use", "name": "Bash",
             "input": {"command": "cat /etc/shadow", "description": "INTERNAL-STEP"}},
        ]),
    ])
    assert "INTERNAL-STEP" not in text and "Bash" not in text
    assert turns == [], "a turn that was only tool calls has nothing to show"


@case
def system_reminders_are_stripped():
    text, _ = export_text([
        line("user", "user",
             "<system-reminder>HIDDEN RULES</system-reminder>What is the deadline?"),
    ])
    assert "HIDDEN RULES" not in text
    assert "What is the deadline?" in text


@case
def subagent_and_meta_lines_are_dropped():
    text, turns = export_text([
        line("assistant", "assistant", [{"type": "text", "text": "SUBAGENT-CHATTER"}],
             isSidechain=True),
        line("user", "user", "META-LINE", isMeta=True),
        line("user", "user", "real question"),
    ])
    assert "SUBAGENT-CHATTER" not in text and "META-LINE" not in text
    assert len(turns) == 1


@case
def unknown_internal_line_types_are_dropped():
    """An allowlist: a line type a future Claude Code adds must not appear by default."""
    text, turns = export_text([
        line("some-future-internal-type", "user", "NEW-INTERNAL-THING"),
        line("user", "user", "hello"),
    ])
    assert "NEW-INTERNAL-THING" not in text
    assert len(turns) == 1


@case
def consecutive_turns_merge_into_one_block():
    """One visual reply can be several transcript lines; it should read as one."""
    _, turns = export_text([
        line("assistant", "assistant", [{"type": "text", "text": "First part."}]),
        line("assistant", "assistant", [{"type": "tool_use", "name": "Bash", "input": {}}]),
        line("assistant", "assistant", [{"type": "text", "text": "Second part."}]),
    ])
    assert len(turns) == 1, turns
    assert "First part." in turns[0]["text"] and "Second part." in turns[0]["text"]


@case
def slash_commands_read_as_typed():
    text, _ = export_text([
        line("user", "user", "<command-name>/code-review</command-name>"
                             "<command-message>running</command-message>"
                             "<command-args>--fix</command-args>"),
    ])
    assert "/code-review --fix" in text
    assert "running" not in text


@case
def command_output_is_stripped():
    text, turns = export_text([
        line("user", "user", "<local-command-stdout>TERMINAL-NOISE</local-command-stdout>"),
        line("user", "user", "a real message"),
    ])
    assert "TERMINAL-NOISE" not in text
    assert len(turns) == 1


@case
def replayed_lines_are_not_duplicated():
    """A session resumed days later can replay lines it already wrote."""
    row = line("user", "user", "only once", uuid="fixed-uuid")
    _, turns = export_text([row, dict(row)])
    assert len(turns) == 1, turns


@case
def a_multi_day_session_is_split_by_day():
    text, turns = export_text([
        line("user", "user", "day one", when="2026-09-10T14:00:00.000Z"),
        line("assistant", "assistant", [{"type": "text", "text": "ok"}],
             when="2026-09-10T14:01:00.000Z"),
        line("user", "user", "day five", when="2026-09-15T14:00:00.000Z"),
    ])
    assert "Thursday, 10 September 2026" in text, text[:400]
    assert "Tuesday, 15 September 2026" in text
    assert len(turns) == 3


@case
def a_truncated_last_line_does_not_crash():
    """The file is being appended to while the session is still running."""
    path = build([line("user", "user", "complete line")])
    with open(path, "a", encoding="utf-8") as handle:
        handle.write('{"type":"user","message":{"role":"user","cont')
    try:
        turns, _ = export.read_turns(path)
        assert len(turns) == 1
    finally:
        os.unlink(path)


@case
def the_cli_writes_a_file():
    path = build([
        line("user", "user", "hello"),
        line("assistant", "assistant", [{"type": "text", "text": "hi there"}]),
    ])
    out = path + ".txt"
    try:
        script = os.path.join(os.path.dirname(os.path.abspath(__file__)), "export.py")
        run = subprocess.run([sys.executable, script, path, "-o", out],
                             capture_output=True, text=True)
        assert run.returncode == 0, run.stderr
        body = open(out, encoding="utf-8").read()
        assert "hello" in body and "hi there" in body
        assert "CLAUDE CODE — CONVERSATION LOG" in body
    finally:
        os.unlink(path)
        if os.path.exists(out):
            os.unlink(out)


def main():
    failures = 0
    for fn in CASES:
        try:
            fn()
            print(f"  ok    {fn.__name__}")
        except AssertionError as err:
            failures += 1
            print(f"  FAIL  {fn.__name__}: {err}")
    print(f"\n{len(CASES) - failures}/{len(CASES)} passed")
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
