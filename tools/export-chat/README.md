# `export-chat` — save a Claude Code session as a plain-text conversation

**What this is for:** a session is deleted when the work in it is done, and sometimes what
was said in it is worth keeping — a return prepared over several days, a matter argued
through to a decision. This writes that conversation to a `.txt` before the session goes.

```bash
python3 tools/export-chat/export.py -o ~/session.txt          # this project's current session
python3 tools/export-chat/export.py --list                    # what is on this machine
python3 tools/export-chat/export.py <transcript.jsonl> -o out.txt
python3 tools/export-chat/export.py -o out.txt --me LILIAN    # label the human side
```

With no `-o` it writes to your home directory. **It refuses to write anywhere inside a git
working tree** — see the confidentiality section; that is not a style preference.

## What it writes, and what it refuses to write

The log holds **the conversation as it appeared in the chat** — what the person typed and
what Claude replied — and nothing else. Dropped: tool calls, tool output, internal
reasoning, system reminders, subagent transcripts, slash-command output, harness
bookkeeping.

_(Lilian, 2026-09-15: "No necesito cosas internas tuyas de tu procesamiento. Simplemente lo
que conversamos, lo que es visible para mí en el chat.")_

**It is an allowlist, not a filter.** Only a `user` or `assistant` line carrying visible
text survives; everything else is dropped by construction. That matters because Claude Code
adds internal line types over time, and a new one must not be able to turn up in an export
because nobody thought to exclude it.

One case is worth naming because it is the one that would quietly corrupt the record: **a
tool's output arrives wearing the `user` role.** Rendered naively it reads as something the
person said — a ledger dump attributed to Lilian. Any message carrying a `tool_result` is
dropped whole.

## What it gets right about a long session

| | |
|---|---|
| **A session that ran for days** | Comes out whole. The transcript on disk is append-only, so the fact that the model's own context was **compacted** along the way costs the file nothing — the export can hold detail the session itself no longer remembers |
| **One reply, several transcript lines** | Merged into one block, so it reads like the chat rather than fragments |
| **A resumed session replaying lines** | De-duplicated by message id |
| **Days** | Separated by a dated heading, in **America/New_York** — a 9pm Miami message would otherwise land on the next day in UTC |
| **A session still running** | A half-written final line is skipped instead of crashing |
| **A turn that interrupted a tool** | The `tool_result` is dropped, the words typed beside it are kept — they are exactly what the log is for |
| **A reply quoting `<system-reminder>` or a slash command** | Left alone. Those envelopes are stripped from a person's prompt only; rewriting Claude's own prose would silently destroy an answer |

## ⛔ The limit that decides how you use this

**A session can only export itself.** Each cloud session runs in its own container, and the
only transcript on that machine is its own — a past session's is not reachable from a new
one. Local CLI sessions keep theirs under `~/.claude/projects/<project>/`, so there `--list`
finds the older ones; a cloud session will list exactly one.

> **So: ask for the export inside the session you want to keep, before deleting it.**

## The export is client material

The conversation carries whatever passed through it — organizer answers, identity details,
client figures, the things the two-data-homes rule deliberately keeps out of this repo. So
the file is **handed to the person**, and:

- ⛔ never committed to this repo, never into an artifact, never into a Double note. The
  tool **refuses to write inside a git working tree** and `claude-session-*.txt` is in
  `.gitignore`, because the realistic failure is not a deliberate commit — it is `git add -A`
  after a default-path export, or an "you have untracked files" prompt;
- it is **not a substitute for deleting the session.** Deleting removes the history from the
  firm's shared Claude account; the export is a private copy, and it belongs where the firm
  keeps client material (Drive / Double), not loose on a desktop.

The header of every export says so, so the warning travels with the file.

## Tests

```bash
python3 tools/export-chat/test_export.py
```

Twenty-one cases, and they exist to hold the one promise above — that nothing internal reaches
the file. Run them after any change; a regression here is silent, because a leak looks like
an ordinary line of text.

## What an earlier draft got wrong

Kept because each was silent, and a reader deciding whether to trust this should see the
shape of what goes wrong here.

1. **Merging a reply's lines across a day boundary.** A day heading vanished and the header
   reported the wrong end time — on the tool's headline feature. Turns now merge only within
   one day, and each carries its own end.
2. **Dropping a whole message on a `tool_result`.** It also threw away the sentence the
   person typed to interrupt the tool.
3. **Re-implementing the project-folder encoding by hand.** Claude Code uses
   `/[^a-zA-Z0-9]/g → '-'`; a hand-rolled version matched the container's path by luck and
   would miss any path with a space or an accent — and the fallback then exported *another
   project's* session. It now uses the real encoding, and the fallback says out loud which
   transcript it chose.
4. **Defaulting the output into the current directory** — which is normally the repo.

## Update this tool when…

- Claude Code changes its transcript format (a new content-block type, a new line type) —
  add a case to the tests first, so the allowlist is proven rather than assumed;
- someone wants a second output shape (Markdown, one file per day) — add a flag, not a
  second script.
