# Dark / Light / Default — Phase F Explore ownership (PREP-05 / 11 / 15)

**Date:** 2026-08-21  
**Repo:** `aoo-static-gh`  
**Job:** Freeze Explore as a **second token system** (`--hlc-*`), unify light paints into named roles (appearance unchanged), land `--hlc-logo-plate` + CSS hook, write rank contrast gate, write dark-map plan. **No dark hex palette. No live boot. No footer pill.**

---

### 0. Status

**Phase F complete.**

| Stream | Result |
|---|---|
| F1 Inventory & freeze | Full color-role table below; leftover hex classified |
| F2 Unify light | `css/shroffin-explore-banks.css` — chrome debt collapsed; light look locked |
| F3 Logo plate (PREP-11) | `--hlc-logo-plate` (+ pad / radius / line) + `.hlc-bank-logo` hook; light = invisible |
| F4 Contrast gate (PREP-15) | Non-negotiable gate text in this doc + ledger |
| F5 Dark-map plan | Selector + role twin list + risks; **no full dark palette** |
| F6 Verify | `check:theme-boot` green; metrics recorded |

**Founder visual inputs:** **LOCKED** — `super-review-1/themes/_dark-mode-founder-visual-inputs.md` (+ ledger). Phase F obeys:

| Lock | Phase F obedience |
|---|---|
| Bank logos on dark | **Light plate** via `--hlc-logo-plate`; do **not** recolor bank assets. Exact plate hex later with Explore dark-map (not invented here). Role + CSS hook landed; light = transparent (unchanged). |
| Rank chips | Keep helpful / costly / grace **meaning** colors (green / red / amber); retune for dark contrast under **PREP-15**. Soft / desaturated redesign on dark was **not** chosen. Exact dark hex later — not in Phase F. |
| Dark mood (DRAFT direction only) | Google Material charcoal ladder: base `#121212`, raised `#1E1E1E` → `#2C2C2C` → `#383838`. **Not** cool-blue near-black canvas; **not** pure `#000` UI canvas. Full Explore dark twin table still later — do not invent beyond this guidance. |
| Wordmark / PWA | Phase **G** — **done** 2026-08-21 (`_dark-mode-phase-g-assets.md`). Phase F did not copy or ship. |

---

### 1. Inputs honored

| Input | Honored how |
|---|---|
| Phase A | Explore in v1; modes / footer pill / first-visit dark unchanged and **not built** |
| Phase B | Explore = `stack_local`; ranks Explore-owned; `--hlc-logo-plate` reserved → **landed** |
| Phase C | Boot partial untouched / inert; `npm run check:theme-boot` green |
| Phase E | Explore was intentionally untouched; this phase owns it |
| **Founder visual inputs (locked)** | Light plate on dark; rank meaning colors + PREP-15; Material `#121212` ladder for DRAFT mood only; no wordmark copy / no PWA ship; no full invented dark hex table |
| Token discipline | No new shell chrome; no `--dark-hlc-*`; no invert; no education theming |
| PREP-05 / 11 / 15 | Freeze + plate hook + contrast gate + dark-map plan |

---

### 2. Architecture laws (Explore)

1. Explore stays a **second system** — `--hlc-*` names remain; shell does not replace ranks/washes.
2. Same token **names**, later two value **sets** under dark selector (below).
3. Shell aliases on Explore (`--hlc-page-bg`, nav frost, icon ink/blue) use shell tokens **without** light hex fallbacks (shell always loads on Explore layout).
4. Steel lines `rgba(108,128,155,…)` stay Explore-owned (intentional ≠ shell hair).
5. Rank helpful / costly / grace keep green / red / amber **meaning**; retune for contrast later — do not invent a new meaning system.
6. Bank marks: **never recolor** SVG/PNG; plate behind marks only.
7. One owner file: `css/shroffin-explore-banks.css` — no second Explore theme sheet.

---

### 3. Metrics (F2)

Measured from repo root:

```bash
rg -o '#[0-9a-fA-F]{3,8}\b' css/shroffin-explore-banks.css | wc -l
rg 'var\(--[a-zA-Z0-9-]+,\s*#' css/shroffin-explore-banks.css | wc -l
```

| Metric | Before | After |
|---|---:|---:|
| Hex in `css/shroffin-explore-banks.css` | **272** | **28** |
| `var(--token, #…)` light fallbacks | **203** | **0** |

Remaining **28** hex are **token definition values** on `.explore-banks-page` only (plus none in usage rules). That is the intended light freeze spine — not scattered chrome debt.

---

### 4. Freeze table — Explore color roles (F1)

Owner selector for light defs: `.explore-banks-page` in `css/shroffin-explore-banks.css`.  
Dark twins later: same names under `html[data-theme="dark"] .explore-banks-page` (see §7).

| token | current light value | purpose | used where | dark twin later? | contrast-sensitive? | notes |
|---|---|---|---|---|---|---|
| `--hlc-wash` | `color-mix(canvas-mix-base 80%, transparent)` | Soft white panel wash | panel/card washes | yes | no | ≡ prior `rgba(255,255,255,0.8)` |
| `--hlc-surface` | `color-mix(canvas-mix-base 92%, transparent)` | Stronger frosted panel | surfaces | yes | no | ≡ prior `rgba(255,255,255,0.92)` |
| `--hlc-surface-strong` | `var(--shroffin-canvas-mix-base)` | Solid paper / chip fill | `#fff` replacements (checks, drawers, panels) | yes | chip-on-surface | Was `#fff` |
| `--hlc-row-selected` | `#e8f0fe` | Selected row blue wash | compare rows | yes | vs ink | Gmail-like |
| `--hlc-row-hover` | `#f2f6fc` | Hover row wash | compare rows | yes | vs ink | |
| `--hlc-row-line` | `rgba(29,29,31,0.045)` | Whisper row divider | table rows | yes | no | Ink-alpha; retune on dark |
| `--hlc-row-lift` | dual `rgba(60,64,67,…)` shadow | Hover lift | selected/hover rows | yes | no | Color-bearing shadow |
| `--hlc-line` | `rgba(108,128,155,0.26)` | Explore steel rule | cards, drawers | yes | no | Intentional ≠ shell hair |
| `--hlc-line-soft` | `rgba(108,128,155,0.14)` | Soft steel | sticky / nav chrome | yes | no | |
| `--hlc-line-faint` | `rgba(108,128,155,0.09)` | Faintest steel | accents | yes | no | |
| `--hlc-page-bg` | `var(--shroffin-surface)` | Page canvas | page + sticky tools | yes (via shell twin) | no | Shell alias |
| `--hlc-card-surface` | `var(--hlc-page-bg)` | Inputs / raised panel fill | `.hlc-inputs-card::before` | yes | no | Light = page paper; dark Material `#1E1E1E` |
| `--hlc-card-lift` | dual soft grey shadow | Card depth | inputs + intel `::before` | yes | no | Dark = soft ambient only (no hard second-box) |
| `--hlc-header-bg` | `color-mix(steel 5.5%, page-bg)` | Column header wash | sticky headers | yes | vs ink | Mix follows page-bg |
| `--hlc-nav-bg` | `var(--shroffin-gn-bg-open)` | Frosted Explore nav | Explore top bar | yes (via shell) | no | Shell alias |
| `--hlc-nav-bg-solid` | `var(--shroffin-gn-frost)` | Solid nav fallback | reduced-blur | yes (via shell) | no | |
| `--hlc-nav-border` | `var(--shroffin-gn-border)` | Nav hair | Explore nav | yes (via shell) | no | |
| `--hlc-icon-rest` | `var(--shroffin-muted)` | Idle icon / check border | filters, checks | yes (via shell) | yes | |
| `--hlc-icon-hover` | `var(--shroffin-ink)` | Hover icon | | yes | yes | |
| `--hlc-icon-active` | `var(--shroffin-blue)` | Active / checked fill | | yes | yes | |
| `--hlc-icon-on-mark` | `var(--shroffin-canvas-mix-base)` | Checkmark / badge glyph on fill | checks, filter badge | yes | **yes** | On-blue / on-mark |
| `--hlc-delta-wash` | `rgba(176,142,70,0.16)` | Cell change flash | delta animation | yes | no | Amber family |
| `--hlc-rank-helpful-num` | `#137333` | Helpful rank numeral | rank chips | yes | **yes — PREP-15** | Keep green meaning |
| `--hlc-rank-helpful-ink` | `#0d652d` | Helpful chip text | | yes | **yes — PREP-15** | |
| `--hlc-rank-helpful-bg` | `#e6f4ea` | Helpful chip fill | | yes | **yes — PREP-15** | |
| `--hlc-rank-costly-num` | `#c5221f` | Costly numeral | | yes | **yes — PREP-15** | Keep red meaning |
| `--hlc-rank-costly-ink` | `#a50e0e` | Costly chip text | | yes | **yes — PREP-15** | |
| `--hlc-rank-costly-bg` | `#fce8e6` | Costly chip fill | | yes | **yes — PREP-15** | |
| `--hlc-rank-grace-ink` | `#8a5a00` | Grace chip text | | yes | **yes — PREP-15** | Keep amber meaning |
| `--hlc-rank-grace-bg` | `#fef7e0` | Grace chip fill | | yes | **yes — PREP-15** | |
| `--hlc-section-line` | `#dde1e6` | Form section divider | inputs card | yes | no | |
| `--hlc-section-line-strong` | `#6b7787` | Stronger field hover edge | | yes | no | |
| `--hlc-field-box-line` | `#8892a4` | Field box border | | yes | no | |
| `--hlc-input-field-line` | `#8b96a8` | Inputs-card underline chrome | aliases `--shroffin-field-line` locally | yes | no | Explore steel; ≠ shell rgba field-line |
| `--hlc-field-label` | `#636373` | Form row / label ink | inputs | yes | yes | Intentional ≠ muted |
| `--hlc-field-hint` | `#6e6e6f` | Tiny hint ink | | yes | yes | Near muted; keep exact |
| `--hlc-meta-ink` | `#5c5c5c` | Meta / secondary UI ink | compare chrome | yes | yes | |
| `--hlc-ink-soft` | `#3a3a3c` | Nested drawer label ink | drawer nests | yes | yes | Exact; ≠ shell ink-soft |
| `--hlc-text-primary` | `var(--shroffin-ink)` | Intel primary text | intelligence panel | yes | yes | |
| `--hlc-text-secondary` | `var(--shroffin-muted)` | Intel secondary | | yes | yes | |
| `--hlc-text-tertiary` | `#86868b` | Intel tertiary | | yes | yes | |
| `--hlc-intel-line` | `rgba(0,0,0,0.088)` | Intel hairlines | intelligence panel | yes | no | Black-alpha |
| `--hlc-intel-surface` | `#f7f7f7` | Intel card surface | `::before` | yes | no | Dark twin matches `--hlc-card-surface` (`#1E1E1E`) |
| `--hlc-seg-track` | `#f2f3f5` | Segmented control track | chips | yes | no | |
| `--hlc-drawer-strip` | `#f7f7f8` | Drawer strip wash | | yes | no | |
| `--hlc-drawer-rule` | `#e8e8ed` | Drawer rule / wash | borders + bg | yes | no | Replaces bogus `--shroffin-line` |
| `--hlc-link-hover` | `var(--shroffin-link)` | Explore link hover (= shell link) | | yes | yes | Alias — Apple web `#0066cc` / `#2997FF` |
| `--hlc-limit-house` | `#7a3410` | House-limit accent | math bars | yes | yes | Semantic brown |
| `--hlc-limit-income` | `#234a82` | Income-limit accent | math bars | yes | yes | Semantic blue |
| `--hlc-title-wash-from` | `#202027` | Hero title gradient start | `.hlc-title-wash` | optional | no | Decorative |
| `--hlc-title-wash-to` | `#485879` | Hero title gradient end | | optional | no | Decorative |
| `--hlc-logo-plate` | `transparent` | Pad behind bank marks | `.hlc-bank-logo` | **yes** | plate-on-surface | PREP-11; founder lock: **light plate** on dark; light theme = invisible |
| `--hlc-logo-plate-pad` | `0px` | Plate inset | `.hlc-bank-logo` | yes (size) | no | Dark may add pad |
| `--hlc-logo-plate-radius` | `0.2rem` | Plate corner | | maybe | no | Ready for dark pad |
| `--hlc-logo-plate-line` | `transparent` | Optional 1px hair (inset shadow) | `.hlc-bank-logo` | yes | no | Dark may set soft hair |
| `--hlc-rule-06` … `--hlc-rule-28` | light-identical ink-α | Border ladder (Phase I) | borders | yes | no | Dark twins white-α |
| `--hlc-drawer-veil` | `rgba(29,29,31,0.35)` | Drawer backdrop | drawer | yes | no | Dark → `rgba(0,0,0,0.45)` |

Non-color layout tokens (`--hlc-gap*`, filter widths, radii sizes, durations, font stacks) are out of the dark color map except where listed as color-bearing above.

#### Leftover raw hex classification

| Class | Item | Decision |
|---|---|---|
| **(A) moved into token now** | All prior scattered `#fff`, `#1d1d1f`, `#636373`, rank usage fallbacks, intel `#f7f7f7`, drawer accents, title wash, field lines | Done — defs on `.explore-banks-page` |
| **(B) intentional one-off** | None remaining in usage rules after F2 | Title wash now tokenized (A) |
| **(C) defer** | Many `rgba(29,29,31,…)` / `rgba(0,0,0,…)` one-off borders/scrims/shadows in drawers & mobile chrome; card lift shadows not fully named | Ticket: when dark-mapping drawers, promote repeated ink-alpha borders to `--hlc-ink-alpha-*` or reuse `--hlc-intel-line` / `--hlc-row-line` families — do not block Phase F |

---

### 5. Logo plate (PREP-11) — F3

| Item | Spec |
|---|---|
| Role | `--hlc-logo-plate` (+ `--hlc-logo-plate-pad`, `--hlc-logo-plate-radius`, `--hlc-logo-plate-line`) |
| Light | `transparent` / `0px` / transparent line → **no visible plate** (appearance unchanged) |
| Hook | `.hlc-bank-logo` — `background-color`, `padding`, `border-radius`, inset `box-shadow` hair (transparent = no layout shift) |
| Dark intent (**founder locked**) | **Light plate** behind each bank mark; optional 1px hair via `--hlc-logo-plate-line`; **never** recolor bank art. Exact plate hex at Explore dark-map — not invented in Phase F. |
| Phase G | Nav wordmark (`logo-h-on-black` → site logos) and PWA / `theme-color` are **out of scope** — source paths locked in founder brief only; do not copy or ship values in Phase F |

**Phase G note (2026-08-21):** Explore bank plates ≠ nav wordmark. Nav wordmark + PWA plan landed in `_dark-mode-phase-g-assets.md` — out of Phase F scope; do not redo here.

---

### 6. Contrast gate (PREP-15) — F4 — **non-negotiable**

1. Any future dark values for `--hlc-rank-*` **must** document measured (or calculated) contrast for:
   - **Text-on-chip** (ink/num on bg) — target **WCAG AA ≥ 4.5:1** for text
   - **Chip-on-surface** (chip bg vs `--hlc-surface-strong` / row / page surface) — must remain distinguishable; note ratio used
2. A dark-map PR / theme ship **cannot merge** Explore dark ranks without that contrast note attached (PR description or theme ledger entry).
3. Phase F does **not** require final dark rank hex — gate only. Exact pairs land at Explore dark-map after this gate.
4. Meaning families stay helpful=green / costly=red / grace=amber; **retune pairs for contrast** — do **not** soft / desaturate / invent a new meaning system (**founder lock**).

---

### 7. Dark-map plan (F5) — plan only, no palette

#### Selector strategy

```css
/* Later theme ship — same token names, second value set */
html[data-theme="dark"] .explore-banks-page {
  --hlc-wash: /* … */;
  --hlc-surface: /* … */;
  /* … every twin-needed role from §4 … */
}
```

- Prefer **one block** on `html[data-theme="dark"] .explore-banks-page` so descendants inherit.
- Do **not** invent `--dark-hlc-*` names.
- Shell-aliased roles (`--hlc-page-bg` → `--shroffin-surface`, nav, icon ink/blue) inherit shell dark twins when shell ships; Explore still must twin **Explore-local** paints (washes, ranks, steel lines, plate, intel, rows).
- **Non-goal this phase / non-goal for Explore-only PRs:** site-wide shell / editorial / apply dark value sets (later ship phase / Phase I gate).

#### Roles that need dark twins

All rows in §4 marked `dark twin later? = yes` (and logo-plate companions). Decorative title wash = optional.

#### Risks to watch when values land

| Risk | Why |
|---|---|
| White washes / `surface-strong` | Still chalk if mix-base or strong surface stay light |
| Sticky headers (`--hlc-header-bg`) | Mix toward page-bg; wrong page-bg → wrong header |
| Selected / hover row blues | May glow or vanish on dark paper — retune, keep “selected” meaning |
| Row lift shadows | Light-paper grey shadows fail on dark |
| `--hlc-icon-on-mark` | Must stay readable on active blue / filled checks |
| Rank chips | **PREP-15** — cannot ship without contrast proof |
| Logo plate | Founder lock: **light plate** under dark; dark marks on transparent die without it |
| Steel lines | May need opacity retune on dark surfaces |
| Intel black-alpha lines | Fail silently on dark — twin required |
| Drawer scrims / overlays | Many deferred rgba ink-alphas (class C) |
| Cool-blue canvas temptation | **Rejected** by founder — do not map Explore paper toward cool-blue near-black |

#### Direction paragraph (DRAFT mood only — not a hex table)

**Founder visual inputs locked.** For a later dark Explore pass, DRAFT direction only:

- Surfaces follow the Material charcoal ladder guidance: base `#121212`, raised `#1E1E1E` → `#2C2C2C` → `#383838` (map Explore page / surface / wash / intel roles onto this ladder at theme build — do not invent a full Explore dark hex salad in Phase F).
- Keep helpful / costly / grace meaning colors; retune under PREP-15 — no soft desaturated redesign.
- Enable **light** `--hlc-logo-plate` behind bank marks; never recolor bank art.
- Do not invert the page; do not copy nav wordmark or ship PWA values here (Phase G).

**No candidate full dark hex table in Phase F** beyond the founder-locked surface ladder cited above as mood guidance.

---

### 8. Files changed

| File | Change |
|---|---|
| `css/shroffin-explore-banks.css` | Expanded `.explore-banks-page` token spine; stripped light `#` fallbacks; hard paints → `var(--hlc-*)` / shell; logo plate hook on `.hlc-bank-logo` |
| `super-review-1/themes/_dark-mode-phase-f-explore-ownership.md` | This brief |
| `super-review-1/themes/_dark-mode-phase-f-explore-ownership-ledger.json` | Machine record |
| `super-review-1/themes/_dark-mode-phase-b-shell-freeze.md` | Additive note: Explore freeze landed in Phase F |
| `super-review-1/themes/_dark-mode-prep-audit.md` | PREP-05 / 11 / 15 checkboxes |

**Not changed:** `partials/theme-boot.html`, shell/editorial/apply dark values, footer pill, education / `css/style.css`, home fixed-dark islands, nav wordmark assets.

---

### 9. Verify commands + results

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"

npm run check:theme-boot
# → Canonical theme-boot is synchronized across 24 pages.

rg -o '#[0-9a-fA-F]{3,8}\b' css/shroffin-explore-banks.css | wc -l
# → 28 (token defs only)

rg 'var\(--[a-zA-Z0-9-]+,\s*#' css/shroffin-explore-banks.css | wc -l
# → 0
```

Customer `data-theme` activation: **none**. Boot stub remains `data-shroffin-theme-boot="inert"`.

---

### 10. Visual sameness statement

- Shell aliases use the same shell values Explore already depended on; only fallbacks removed.
- White surfaces resolve through `--shroffin-canvas-mix-base` (`#ffffff`) — identical to prior `#fff`.
- Washes rewritten as `color-mix(… canvas-mix-base N%, transparent)` ≡ prior white rgba when mix-base is white.
- Near-muted label/hint/meta/ink-soft hexes kept as **exact** Explore tokens (not forced to shell near-matches).
- Logo plate light defaults are transparent / zero pad / transparent hair → no visible pad, no layout shift (inset shadow + `border-box`).
- Anything that would redesign Explore light UI was not done.

**Eye-check:** Explore banks light — filters, compare table, rank chips, bank logos, drawers, intel strip — should match pre-Phase-F.

---

### 11. Gate checkboxes

- [x] Explore ownership frozen (second system; not shell-only)
- [x] Light unify in `shroffin-explore-banks.css` (hex/fallback debt down; light same)
- [x] `--hlc-logo-plate` + `.hlc-bank-logo` hook (light invisible)
- [x] PREP-15 contrast gate written (no dark rank ship without proof)
- [x] Dark-map plan (selector + twin list + risks); no full dark palette
- [x] Boot still inert; `check:theme-boot` green
- [x] No footer pill / no education theme / no invert

---

### 12. Next phases (do not execute here)

1. **G** — Dark wordmark + PWA / `theme-color` plan  
2. **H** — JS inject / legacy policy  
3. **I** — Gate → theme values + activate boot + footer icon pill (Explore dark twins only after PREP-15 note)

Machine record: `_dark-mode-phase-f-explore-ownership-ledger.json`
