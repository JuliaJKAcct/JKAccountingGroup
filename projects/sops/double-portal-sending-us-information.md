# Double Client Portal — how a client sends us information

> **Status:** Active · **Owner:** Lilian · **Started:** 2026-08

## Why this exists

Clients get into the portal (that's [the first-login SOP](./double-portal-first-login.md))
and then get stuck on the next question: **"I have information for you — where do I
put it?"** They want to send bank-account details, a document, a photo of a letter, or
just a plain message, and the portal doesn't make the place obvious. So they fall back
to WhatsApp or text, where it isn't attached to their file.

It is the same question every time, and answering it costs the same twenty minutes
every time — open the portal on the phone, screenshot each screen, mark the button,
send it over WhatsApp with an explanation. This SOP ends that: the flow is written
down once, and the ready-to-send guide is already made.

**The place is "Qs for us"** — *Questions for us*, the last-but-one item in the portal's
bottom menu bar on a phone. Despite the name it is not only for questions: it is the
client's general "send this to my accountant" channel — free text, attachments, photos —
and our reply lands in the same thread.

## The procedure (what the client does, on a phone)

1. Open the Client Portal and tap **"Qs for us"** in the bottom menu bar (third of four:
   Home · Non-Txn Qs · **Qs for us** · More). The screen is titled **"Questions for us."**
2. Tap the round **"+"** button, bottom right, just above the menu bar.
3. In the **"Add to Client Portal"** window that opens, tap **"Ask a question."**
   (The other option, **"Upload photo,"** goes straight to the camera / photo library —
   use it only when a picture on its own is the whole message.)
4. Fill in the **"Ask a question"** form and tap **Submit**:
   - **Subject** — a short line ("Bank details for the new account").
   - **Question** — the actual text. This is where account numbers, explanations, or a
     plain message go.
   - **Upload…** — attaches files to *this* question. **Prefer this over "Upload photo"**:
     the text and the document stay together in one thread, so nothing arrives without
     context.
   - **Team visibility** — leave it alone. It shows *"Currently visible only to you"* and
     governs which of the **client's own** people can see the item in their portal; we
     receive it either way. *(Read off the field itself — not confirmed with Double
     support. Don't over-explain it to a client; "leave it as it is" is enough.)*

## What happens on our side

- A client-raised item lands in Double's **questions** data as a `contactToUser` question
  (the mirror of `userToContact`, which is what *we* send *them*). *Inferred from the
  documented question types in the [`double-mcp` capability map](../../.claude/skills/double-mcp/references/capability-map.md#8-notes-comments-questions);
  not yet confirmed against a live record.*
- The Double **`Client Portal` property column** shows `n/m. Q: k` per client — portal
  items done/total plus **open questions**. That `Q:` count is how the roster shows a
  client is waiting on us.
- **Answer in the same thread**, not by email. That is the whole reason to push clients
  here: the exchange stays attached to the client's file instead of scattering across
  inboxes.

## Client-ready templates

Ready-to-send versions live in [`client-guides/`](./client-guides/):

| File | Use |
|---|---|
| [`double-send-info-guide-en.html`](./client-guides/double-send-info-guide-en.html) | **Visual one-page guide, English — recommended.** Self-contained; nothing to host. |
| [`double-send-info-guide-ru.html`](./client-guides/double-send-info-guide-ru.html) | **Visual one-page guide, Russian — recommended.** Self-contained; nothing to host. |
| [`double-send-info-en.pdf`](./client-guides/double-send-info-en.pdf) · [`…-ru.pdf`](./client-guides/double-send-info-ru.pdf) | The guide as exactly one PDF page — the file you attach to an email. Regenerate from the `…-guide-*.html` if the guide changes. |
| [`double-send-info-en.png`](./client-guides/double-send-info-en.png) · [`…-ru.png`](./client-guides/double-send-info-ru.png) | The guide as a single high-resolution image (2700 px wide) — the WhatsApp-ready form, sent as a photo. |
| [`double-send-info-email-template.md`](./client-guides/double-send-info-email-template.md) | Saved email / Double message-template copy (EN + RU) — subject + body to keep as a canned response; attach the PDF. |
| [`double-send-info-whatsapp-en.md`](./client-guides/double-send-info-whatsapp-en.md) · [`…-ru.md`](./client-guides/double-send-info-whatsapp-ru.md) | Short WhatsApp-ready text, English / Russian. |

Same construction as the first-login guide: the four portal screens are **recreated in
HTML/CSS, not screenshots**, so the guide is one self-contained file with our own teal
"tap this" markers on top of Double's bronze buttons — nothing to host, no ordering of
loose images to get right, and it exports to exactly one page. The originals Lilian
marked up on her phone are kept as the drawing reference in
[`client-guides/reference/`](./client-guides/reference/); the recreation is built from them.

**Producing a guide like this for any other portal screen is a skill** —
[`client-portal-guides`](../../.claude/skills/client-portal-guides/). Send it the
screenshots, say which control to mark, and it produces the SOP entry, the EN/RU guide,
the PDF/PNG, and the message copy in the same house shape.

## Notes & open items

- **Verified on a phone only** (2026-08-11, from Lilian's own portal view). The desktop
  browser layout has no bottom menu bar, so the first two steps look different there —
  **not documented yet**. Capture it the next time a client is on a computer, and add a
  desktop variant to the guide.
- Generic portal UI guidance, not client-specific — safe to reuse for every client.
- If a client keeps sending things by WhatsApp anyway, send the one-page image once and
  answer the substance in the portal thread — the reply arriving there is what teaches
  the habit.
