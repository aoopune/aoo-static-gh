# Site-words schema

## Human edit loop

1. Open [INDEX.md](INDEX.md) → open the page file (`.words.md`).
2. Find the `##` heading for that bit of copy.
3. Edit the plain text under it (not the `{#id}`).
4. Save → commit → push / `npm run deploy` (runs `build:site`).

## File shape

```markdown
---
id: home
title_for_humans: "Home"
coverage_status: complete
---

# Home

## Hero button {#hero.cta}
Explore banks

## Hero line {#hero.line}
your home loan bank.
```

- `#` = page name (for humans)
- `## Jump to` = clickable index of every **visible** line in this file
- `## Label {#stable.id}` = one editable string
- Body under the heading = the live wording
- `{#…}` = machine id for the website — do not rename unless you also update HTML markers

**Founder scope:** edit only the main `*.words.md` files (visible wording).  
`*.assistive.words.md` siblings hold screen-reader / frame-title spoken names — leave them alone for marketing edits; the build still applies them.

## Markers in HTML

Bodies / partials / layouts use `{{SW:slot.id}}`. Build replaces them from `.words.md` (`scripts/lib/site-words.js`).

## Commands

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
npm run check:site-words
npm run build:site
```

## Out of scope

- Education-loan / legacy pages
- Bank product **values** in `data/home-loans-compare.json`
- Contact **values** in `data/site-contacts.json` (labels are in `chrome.words.md`)

## Folder layout

```text
site-words/
  INDEX.md
  _schema.md
  common/                 Shared nav / footer / strips
  pages/
    home/                 Home
    explore/              Explore → Review → Apply
    guide/                Guide (parent + child pages)
    about/                About us
    tools/
      calculators/        Hub + each calculator
      project-finder/     Project Bank Finder
    company/              Privacy, Terms, Site Map
```

Logical keys → paths live in `scripts/lib/site-words.js` (`PAGE_FILES`).
