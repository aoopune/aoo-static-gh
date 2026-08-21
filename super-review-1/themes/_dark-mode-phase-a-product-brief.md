# Dark / Light / Default — Phase A product lock brief

**Date:** 2026-08-21  
**Repo:** `aoo-static-gh`  
**Audience:** Founder (non-engineer) → then engineering  
**Job:** Freeze product choices only. No website build in this phase.  
**Founder lock:** Approved 2026-08-21 (with two changes below).

---

### 0. One-line status

**Phase A product lock — founder approved (locked)**

---

### 1. What we are deciding

People who visit Shroffin should be able to keep the site **dark**, keep it **light**, or let it **match their phone or computer**. The first time someone arrives with no saved choice, the site starts **dark** — that is our product start, not the same thing as “Default.”

This brief freezes **what the three modes mean**, **where the control lives**, **how home-page bands behave with theme**, and **which pages are in the first release**. Engineering does not build the look until these lines are locked — they now are.

---

### 2. Mode meanings (Decision A)

| What the person sees | What it means | What we store |
|---|---|---|
| **Dark** | Site stays dark | `dark` |
| **Light** | Site stays light | `light` |
| **Default** | Follow the phone or computer setting | `system` |
| **First visit (nothing saved yet)** | We start them on **dark** until they choose | *(nothing stored yet)* |

**Analogy:** Default = “follow the phone.” First visit = “we start you on dark until you choose.” Those are two different ideas.

**Status: CONFIRMED** (founder approved)

---

### 3. Where the control lives + how it looks (Decision B)

#### Placement (locked)

**Footer only** — quiet utility area in the shared footer (`partials/site-footer.html`), near Company / legal / Site Map. Same place on phone and desktop. Not in the hero, not next to Apply / Explore banks, not in nav Support, not a floating widget.

#### Control look (locked — founder change)

**Just the three-icon pill** in the footer — same idea as the theme control on [cursor.com](https://cursor.com/):

| Icon (visible) | Meaning | What we store |
|---|---|---|
| Monitor / computer | **Default** (follow device) | `system` |
| Sun | **Light** | `light` |
| Moon | **Dark** | `dark` |

- **No** big “Appearance” heading column required  
- **No** visible word labels Dark / Light / Default on the control  
- **No** helper sentence under the control  
- Selected option shows a quiet highlight (one segment active)  
- Icon order (left → right): **Default · Light · Dark** (monitor · sun · moon), matching the Cursor pattern the founder pointed at  
- Each tap target ≥ ~44×44 px on phone  
- Screen readers still need short names: Default / Light / Dark (not shown as big footer text)

#### Rejected for the control UI

- Text list “Dark / Light / Default” with an Appearance title and helper line  
- Anything larger than this small pill in the footer for v1

#### Engineering note (later — do not build in this job)

Owner partial: `partials/site-footer.html` (synced with `npm run build:footer`).

**Status: CONFIRMED** (founder approved — icon pill in footer)

---

### 4. Home page bands (Decision C)

**CHANGED FROM AUDIT** — founder decision.

There are **no** permanent “always dark” islands on the home page for theme v1.

| Surface | Rule |
|---|---|
| Home story band (today dark) | **Follows the theme** — light when Light; dark when Dark |
| Phone / device chrome demos | **Follows the theme** |
| Product-demo section around demos | **Follows the theme** |

**Today:** those bands are dark — that is fine until theme ships.  
**After theme ships:** they change with the person’s choice (and with Default following the device). Under Light they go light; under Dark they go dark.

Do **not** mark them `data-theme-island="fixed-dark"`. Do **not** keep them dark when the rest of the site is light.

**Status: CHANGED FROM AUDIT** (founder approved)

---

### 5. What is included in the first release (Decision D)

#### In v1 (gets the three modes)

The **24 redesigned pages** listed in `data/redesigned-pages.json` — home, Explore banks, Apply, calculators, Project Bank Finder, guide set, About, privacy, terms, sitemap.

#### Out of v1 (stay light if opened by URL)

- Education / legacy pages that still use the old `css/style.css` stack  
- Prototype pages named like `pages/_….html`  
- Education-loan product stays **in the code** but **not themed** and **not promoted** in the nav

Do **not** delete education code.

**Status: CONFIRMED** (founder approved)

---

### 6. Founder approval checklist

- [x] Modes + first visit = dark (Default ≠ first visit)
- [x] Control placement = footer (quiet utility area)
- [x] Control = Cursor-style icon pill only (monitor / sun / moon) — no Appearance title, no helper line
- [x] Home bands follow theme (no fixed-dark islands) — currently dark is OK until theme ships
- [x] v1 scope = 24 redesigned pages; legacy / education / `_*.html` stay light

**Phase A is locked.** Hand this brief to engineering as frozen.

---

### 7. What happens after approval (do not do it in this job)

**Next engineering phase only:** Phase B from the prep audit — freeze shell color *roles* and stop new light hardcodes on redesigned pages.

**Still not allowed yet:**

- Dark CSS palette / theme values  
- Toggle UI in the live footer  
- Theme boot script in page heads  
- Logo commission / swap (note for later: a dark-bar nav wordmark will be needed — PREP-10)  
- PWA / browser chrome theme-color shipping  
- Any invert filter or second parallel architecture

No dark look ships until later prep gates in the audit are also done.

---

### 8. For engineering (compact contract box)

```
PREFERENCE (stored):  localStorage key shroffin-color-preference ∈ { dark | light | system }
RESOLVED LOOK:        html[data-theme="dark" | "light"]
FIRST VISIT:          preference unset → resolve dark; do NOT write system until user chooses Default
DEFAULT MODE:         preference system → follow prefers-color-scheme → resolve dark|light
CONTROL OWNER:        partials/site-footer.html → footer utility; icon pill only
CONTROL UI:           three-icon segmented control (Cursor-like): monitor=Default/system, sun=Light, moon=Dark
VISIBLE COPY:         none required (no Appearance title, no helper); aria-labels Default|Light|Dark
ICON ORDER:           Default | Light | Dark (left → right)
HOME ISLANDS:         NONE fixed-dark — home story, device chrome, and demo section all follow data-theme
ISLAND MARKER:        do not apply data-theme-island="fixed-dark" on home story / phone demos for v1
V1 PAGE SET:          data/redesigned-pages.json (24 paths)
OUT OF V1:            style.css / education / pages/_*.html — leave light; do not delete education
ARCHITECTURE:         tokens + resolved theme; no page invert; early boot + chrome sync later
PHASE AFTER APPROVAL: Phase B only (shell role freeze + stop new light hardcodes) — no dark CSS yet
AUDIT DELTA:          PREP-08 product policy overridden by founder (theme-follow, not fixed-dark)
```

---

### Appendix — Decision status summary

| Decision | Topic | Status |
|---|---|---|
| A | Mode model (PREP-01) | **CONFIRMED** |
| B | Control placement + labels (PREP-16) | **CONFIRMED** (footer icon pill) |
| C | Home bands (PREP-08) | **CHANGED FROM AUDIT** (follow theme) |
| D | v1 scope (PREP-13) | **CONFIRMED** |
| E | Phase A success / freeze | **Locked** — see §6–§7 |

Machine record: `_dark-mode-phase-a-product-brief-ledger.json`
