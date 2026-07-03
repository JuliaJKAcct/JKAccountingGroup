# Marketing — generating on-brand assets (for use with Claude)

This project uses Claude to **generate on-brand marketing material** for JK
Accounting Group — business cards, Instagram posts, graphics, flyers, social
copy — that matches the firm exactly.

The visual raw material (colors, fonts, logo, voice) is **not** stored here. It
lives once, for the whole repo, in the shared **[`brand/`](../../brand/)**
folder. This project is the *instructions and prompts* for turning that brand
into finished marketing pieces.

## What's in this project
```
START-HERE.md                     ← you are here
claude-project-instructions.md    ← paste this into a Claude Project
starter-prompts.md                ← ready-made prompts for common assets
```

## The brand lives in `brand/` (shared)
```
../../brand/JK-Brand-Guide.md     ← the brand brain: colors, fonts, logo, voice
../../brand/logo/                 ← the ENTIRE logo pack (all formats & variants)
    svg/         vector masters (best quality, scalable)
    png/         ready-rendered images, multiple sizes
    favicon/     app/site icons
../../brand/design-system/
    DESIGN.md                     full design tokens & components reference
    jk-brand-showcase.html        OPEN IN A BROWSER to see the whole system live
    styles.css                    production stylesheet (exact colors/spacing)
    landing.css                   landing-page styles
```

## How to use it with Claude (about 5 minutes, once)

**Best way — a Claude Project** (so every chat stays on-brand automatically):
1. In Claude, create a **Project** (e.g. "JK Accounting — Marketing").
2. Upload to the Project's knowledge: **`brand/JK-Brand-Guide.md`** and the files
   in **`brand/logo/`** (at least the `svg/` and `png/` files).
3. Open the Project's **custom instructions** and paste the whole block from
   **`claude-project-instructions.md`**.
4. Start a chat and use a prompt from **`starter-prompts.md`**. That's it.

**No Projects on your plan?** Start a normal chat, paste the block from
`claude-project-instructions.md`, attach `brand/JK-Brand-Guide.md` plus the logo
files you need, then ask.

## Two tips
- **See the system first:** open `brand/design-system/jk-brand-showcase.html` in
  any web browser — it shows the colors, fonts, and components in one page.
- **Logos:** use **SVG** (in `brand/logo/svg/`) when your tool accepts it — it's
  infinitely scalable. Use **PNG** (in `brand/logo/png/`) for tools that don't
  take SVG. Pick `-reversed` versions on dark/teal backgrounds. **Never** put the
  logo in a box, recolor it, or stretch it (see `brand/JK-Brand-Guide.md` §5).

Everything about the brand is in `brand/JK-Brand-Guide.md` — when in doubt, that
file wins.
