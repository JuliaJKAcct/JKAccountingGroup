# JK Accounting Group — Design System (for use with Claude)

You've received the **complete JK Accounting Group design system** in this folder.
It lets you have **Claude generate on-brand marketing material** — business cards,
Instagram posts, graphics, flyers, social copy — that matches the firm exactly.

## What's in this zip
```
START-HERE.md                     ← you are here
JK-Brand-Guide.md                 ← the brand brain: colors, fonts, logo, voice
claude-project-instructions.md    ← paste this into a Claude Project
starter-prompts.md                ← ready-made prompts for common assets

logo/                             ← the ENTIRE logo pack (all formats & variants)
  svg/         vector masters (best quality, scalable)
  png/         ready-rendered images, multiple sizes
  favicon/     app/site icons
  JK-Medallion-logo-system.pdf    visual logo reference
  README.md    logo usage notes

design-system/
  DESIGN.md                       full design tokens & components reference
  jk-brand-showcase.html          OPEN IN A BROWSER to see the whole system live
  styles.css                      production stylesheet (exact colors/spacing)
  landing.css                     landing-page styles
```

## How to use it with Claude (about 5 minutes, once)

**Best way — a Claude Project** (so every chat stays on-brand automatically):
1. In Claude, create a **Project** (e.g. "JK Accounting — Marketing").
2. Upload to the Project's knowledge: **`JK-Brand-Guide.md`** and the files in
   **`logo/`** (at least the `logo/svg/` and `logo/png/` files).
3. Open the Project's **custom instructions** and paste the whole block from
   **`claude-project-instructions.md`**.
4. Start a chat and use a prompt from **`starter-prompts.md`**. That's it.

**No Projects on your plan?** Start a normal chat, paste the block from
`claude-project-instructions.md`, attach `JK-Brand-Guide.md` plus the logo files
you need, then ask.

## Two tips
- **See the system first:** open `design-system/jk-brand-showcase.html` in any web
  browser — it shows the colors, fonts, and components in one page.
- **Logos:** use **SVG** (in `logo/svg/`) when your tool accepts it — it's
  infinitely scalable. Use **PNG** (in `logo/png/`) for tools that don't take SVG.
  Pick `-reversed` versions on dark/teal backgrounds. **Never** put the logo in a
  box, recolor it, or stretch it (see `JK-Brand-Guide.md` §5).

Everything you need is in `JK-Brand-Guide.md` — when in doubt, that file wins.
