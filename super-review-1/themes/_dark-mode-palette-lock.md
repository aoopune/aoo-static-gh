# Dark / Light / Default — Founder dark palette lock

**Date:** 2026-08-21  
**Repo:** `aoo-static-gh`  
**Job:** Lock dark hex twins for every primary UI color role before main theme build. **No dark CSS shipped. No live boot. No footer pill. No PWA manifest edit in this job.**  
**AskQuestion:** Unavailable — decisions collected in chat (Q1–Q19 + Q20 hardcode remap).

---

### 0. Status

**Palette locked for main build** — Q1–Q19 token twins **and** Q20 hardcode remap appendix (founder chose **A** on every cluster).

Evidence rescan (2026-08-21): named tokens alone were insufficient; ~239 light-assuming hardcoded paints remain in redesigned CSS. **Appendix C** binds exact dark remaps so main build cannot invent interaction colors.

| Cluster | Topic | Choice |
|---|---|---|
| Q1 | Surface ladder + mood mapping | A |
| Q2 | Main / soft / muted / ghost text | A |
| Q3 | Link family + active/visited | A |
| Q4 | Dark button / brand blue + hover/active | A |
| Q5 | Footer / note / nav frost / mix bases | A |
| Q6 | Hairlines / fields / veil / valid-invalid | A |
| Q7 | Explore washes + row selected/hover | A |
| Q8 | Rank three pairs (PREP-15) | A |
| Q9 | Logo plate | A |
| Q11 | Input boxes / field washes | A |
| Q12 | Dropdowns / segments / menus | A |
| Q13 | Side panels / drawers / intel | A |
| Q14 | Cards / sections / flips / hubs | A |
| Q15 | Apply status + washes | A |
| Q16 | Explore steel / meta / limits / delta | A |
| Q17 | Home story + product-demo theme-follow | A |
| Q18 | Title gradients + sitemap hover | A |
| Q19 | Shadows / lifts / plate pad | A |
| Q20 | Hardcoded interaction paint remap appendix | A |

**Open / deferred:** none.

Machine record: `_dark-mode-palette-lock-ledger.json`

---

### 1. Non-negotiables carried forward

| Lock | Source |
|---|---|
| Modes: Dark / Light / Default(`system`); first visit unset → **dark** | Phase A |
| Control later: footer icon pill only (monitor / sun / moon) | Phase A |
| Home story / phone / product-demo **follow theme** — no `data-theme-island="fixed-dark"` | Phase A |
| v1 = 24 redesigned pages; education / legacy / `pages/_*.html` out | Phase A |
| Same token **names**, two value **sets**; no invert; no `--dark-*` vocabulary | Phase A + B |
| Material charcoal ladder — **not** cool-blue canvas — **not** pure `#000` page canvas | Founder visuals |
| Light brand blue exact **`#0071e3`** (and light hover/active) | Founder extras |
| Link blue ≠ button blue (intentional split) | Phase B |
| Ranks: helpful green / costly red / grace amber meaning; PREP-15 AA text ≥ 4.5:1 | Founder + Phase F |
| Bank logos: **light plate** on dark; never recolor bank art | Founder + Phase F |
| PWA splash / dark `theme-color` ship **`#121212`**; light meta **`#fcfcfd`** | Phase G |
| Explore remains `--hlc-*` second system | Phase F |

---

### 2. Full token → dark hex table

Columns: `token` · `light_today` · `dark_locked` · `contrast_notes` · `owner`

#### 2.1 Shell — surfaces & mix

| token | light_today | dark_locked | contrast_notes | owner |
|---|---|---|---|---|
| `--shroffin-surface` | `#fcfcfd` (+ blue 0.75% mix) | `#121212` | Page floor; Material base | shell |
| `--shroffin-canvas-mix-base` | `#ffffff` | `#121212` | Mix destination — not white | shell |
| `--shroffin-footer` | `#f5f7f9` (+ blue 1.5% mix) | `#1E1E1E` | Footer / deep band | shell |
| `--shroffin-footer-mix-base` | `#f4f6f8` | `#1E1E1E` | Footer mix destination | shell |
| `--shroffin-paper-note` | `#eef1f4` | `#2C2C2C` | Note / glance panels | shell |
| Ladder raised 3 (guidance) | — | `#383838` | Highest raise; menus / strong edges | shell |

**Where mapping (Q1):** `#121212` page · `#1E1E1E` nav/footer/soft · `#2C2C2C` clear panels · `#383838` rare high lift.

#### 2.2 Shell — text

| token | light_today | dark_locked | contrast_notes | owner |
|---|---|---|---|---|
| `--shroffin-ink` | `#1d1d1f` | `#F5F5F7` | Main text on `#121212` / `#1E1E1E` — AA | shell |
| `--shroffin-ink-soft` | `#3a3a3d` | `#C7C7CC` | Soft body / leads | shell |
| `--shroffin-muted` | `#6e6e73` | `#A1A1A6` | Fine print / secondary | shell |
| `--shroffin-ghost` | `#c5c9cf` | `#636366` | Decorative large numerals only | shell |

#### 2.3 Shell — links (≠ button)

| token | light_today | dark_locked | contrast_notes | owner |
|---|---|---|---|---|
| `--shroffin-link` | `#3f62c8` | `#8FA3F0` | Brighter `#3f62c8` family | shell |
| `--shroffin-link-active` | `#2f4ba0` | `#7389E0` | One step deeper than link | shell |
| `--shroffin-link-visited` | `#5a4fcf` | `#A89BE8` | Purple-tint family, brighter | shell |
| `--shroffin-link-external` | `var(--shroffin-link)` | `var(--shroffin-link)` → `#8FA3F0` | Same | shell |
| `--shroffin-link-external-active` | `var(--shroffin-link-active)` | `#7389E0` | Same | shell |
| `--shroffin-link-external-visited` | `var(--shroffin-link-visited)` | `#A89BE8` | Same | shell |

#### 2.4 Shell — brand / buttons / focus (**dark only**; light unchanged)

| token | light_today | dark_locked | contrast_notes | owner |
|---|---|---|---|---|
| `--shroffin-blue` | `#0071e3` | `#0A84FF` | Brighter twin for accents/links/icons | shell |
| `--shroffin-btn-primary` | `#0071e3` | `#0071e3` | Apple filled Buy — same on dark | shell |
| `--shroffin-btn-primary-hover` | `#0076df` | `#0076df` | Apple `#0076DF` (slightly lighter) | shell |
| `--shroffin-btn-primary-active` | `#006edb` | `#006edb` | Apple `#006EDB` | shell |
| `--shroffin-focus` | `#0071e3` | `#0A84FF` | Focus follows accent blue on dark | shell |
| `--shroffin-field-line-focus` | `var(--shroffin-btn-primary)` | `#0071e3` | = filled button rest | shell |
| `--shroffin-btn-primary-shadow` | `none` | `none` | Flat Apple Buy (no glow) | shell |
| `--shroffin-btn-primary-shadow-hover` | `none` | `none` | | shell |
| `--shroffin-btn-primary-shadow-active` | `none` | `none` | | shell |

#### 2.5 Shell — nav frost / veil / borders

| token | light_today | dark_locked | contrast_notes | owner |
|---|---|---|---|---|
| `--shroffin-gn-frost` | `#f5f7f9` | `#1E1E1E` | Solid nav frost | shell |
| `--shroffin-gn-bg` | `rgba(245,247,249,0.8)` | `rgba(30,30,30,0.80)` | Translucent frost | shell |
| `--shroffin-gn-bg-fallback` | `rgba(245,247,249,0.96)` | `rgba(30,30,30,0.96)` | No-blur | shell |
| `--shroffin-gn-bg-open` | `rgba(245,247,249,0.92)` | `rgba(30,30,30,0.92)` | Open denser | shell |
| `--shroffin-gn-border` | `rgba(0,0,0,0.05)` | `rgba(255,255,255,0.10)` | White-alpha | shell |
| `--shroffin-gn-veil` | `rgba(29,29,31,0.28)` | `rgba(0,0,0,0.45)` | Dim behind menus/drawers | shell |

#### 2.6 Shell — hairlines / fields

| token | light_today | dark_locked | contrast_notes | owner |
|---|---|---|---|---|
| `--shroffin-rule` | `rgba(0,0,0,0.16)` | `rgba(255,255,255,0.16)` | Strong chrome | shell |
| `--shroffin-hair` | `rgba(0,0,0,0.12)` | `rgba(255,255,255,0.12)` | Content hair | shell |
| `--shroffin-hair-soft` | `rgba(0,0,0,0.08)` | `rgba(255,255,255,0.08)` | Soft hair | shell |
| `--shroffin-field-line` | `rgba(0,0,0,0.16)` | `rgba(255,255,255,0.16)` | Underline rest | shell |
| `--shroffin-field-line-invalid` | `rgba(176,76,76,0.65)` | `rgba(255,105,97,0.70)` | Red family | shell |
| `--shroffin-field-line-valid` | `rgba(29,122,58,0.45)` | `rgba(48,209,88,0.50)` | Green family | shell |
| `--shroffin-field-placeholder` | `rgba(110,110,115,0.5)` | `rgba(161,161,166,0.55)` | From muted `#A1A1A6` | shell |

#### 2.7 PWA (ship values — already locked; live file unchanged until Phase I)

| token / surface | light_today | dark_locked | contrast_notes | owner |
|---|---|---|---|---|
| PWA `background_color` / splash | `#ffffff` (live) | `#121212` (ship) | Dark-first | pwa |
| PWA `theme_color` manifest fallback | `#1074de` (live) | `#121212` (ship) | | pwa |
| meta `theme-color` | absent | dark `#121212` / light `#fcfcfd` | Resolved theme | pwa |

#### 2.8 Explore — page / washes / rows

| token | light_today | dark_locked | contrast_notes | owner |
|---|---|---|---|---|
| `--hlc-page-bg` | `var(--shroffin-surface)` | `#121212` (via shell) | | explore |
| `--hlc-card-surface` | `var(--hlc-page-bg)` | `#1E1E1E` | Inputs card off page; fields stay `#2C2C2C` | explore |
| `--hlc-card-lift` | soft grey dual shadow | `0 8px 28px rgba(0,0,0,0.28), 0 24px 56px rgba(0,0,0,0.20)` | Soft ambient — not a hard second box | explore |
| `--hlc-wash` | white 80% mix | `rgba(255,255,255,0.08)` (≈`#2A2A2A` on `#1E1E1E`) | Soft panel | explore |
| `--hlc-surface` | white 92% mix | `rgba(255,255,255,0.12)` (≈`#303030`) | Stronger frost | explore |
| `--hlc-surface-strong` | `#ffffff` via mix-base | `#2C2C2C` | Field / chip fill (one step above card) | explore |
| `--hlc-row-selected` | `#e8f0fe` | `#1A2F4A` | Cool select wash | explore |
| `--hlc-row-hover` | `#f2f6fc` | `#1A2330` | Quieter cool hover | explore |
| `--hlc-row-line` | `rgba(29,29,31,0.045)` | `rgba(255,255,255,0.06)` | Whisper divider | explore |
| `--hlc-row-lift` | grey rgba shadow | `0 1px 3px rgba(0,0,0,0.28), 0 4px 14px rgba(0,0,0,0.22)` | Soft row lift | explore |
| `--hlc-header-bg` | steel 5.5% on page-bg | steel 5.5% on `#121212` | Follows page | explore |
| `--hlc-nav-bg` / solid / border | shell aliases | inherit shell dark | | explore |

#### 2.9 Explore — ranks (PREP-15) — see also §4

| token | light_today | dark_locked | contrast_notes | owner |
|---|---|---|---|---|
| `--hlc-rank-helpful-ink` | `#0d652d` | `#8FDBA5` | ~7.3:1 on chip bg | explore |
| `--hlc-rank-helpful-num` | `#137333` | `#A3E4B5` | ~8.2:1 on chip bg | explore |
| `--hlc-rank-helpful-bg` | `#e6f4ea` | `#1B3D2F` | Hue vs `#2C2C2C` | explore |
| `--hlc-rank-costly-ink` | `#a50e0e` | `#F2A4A0` | ~7.5:1 | explore |
| `--hlc-rank-costly-num` | `#c5221f` | `#FFB4AB` | ~8.8:1 | explore |
| `--hlc-rank-costly-bg` | `#fce8e6` | `#3D1F1F` | Hue distinct | explore |
| `--hlc-rank-grace-ink` | `#8a5a00` | `#F5D78E` | ~9.5:1 | explore |
| `--hlc-rank-grace-bg` | `#fef7e0` | `#3A2E14` | Hue distinct | explore |

#### 2.10 Explore — logo plate

| token | light_today | dark_locked | contrast_notes | owner |
|---|---|---|---|---|
| `--hlc-logo-plate` | `transparent` | `#FFFFFF` | Light plate; do not recolor bank art | explore |
| `--hlc-logo-plate-pad` | `0px` | `3px` | Show plate | explore |
| `--hlc-logo-plate-radius` | `0.2rem` | `0.2rem` | Keep | explore |
| `--hlc-logo-plate-line` | `transparent` | `rgba(0,0,0,0.08)` | Soft edge on white | explore |

#### 2.11 Explore — forms / chrome leftovers (Q11–Q16)

| token | light_today | dark_locked | contrast_notes | owner |
|---|---|---|---|---|
| `--hlc-field-label` | `#636373` | `#A1A1A6` | = muted | explore |
| `--hlc-field-hint` | `#6e6e6f` | `#A1A1A6` | Secondary | explore |
| `--hlc-field-box-line` | `#8892a4` | `#484848` | Charcoal on `#2C2C2C` fill; not chalky steel | explore |
| `--hlc-input-field-line` | `#8b96a8` | `#484848` | Same family as field-box-line | explore |
| `--hlc-section-line` | `#dde1e6` | `#383838` | Raised edge | explore |
| `--hlc-section-line-strong` | `#6b7787` | `#636366` | Hover edge (= shell ghost); not cool steel | explore |
| `--hlc-seg-track` | `#f2f3f5` | `#1E1E1E` | Segment trough | explore |
| `--hlc-drawer-strip` | `#f7f7f8` | `#2C2C2C` | Drawer header | explore |
| `--hlc-drawer-rule` | `#e8e8ed` | `#383838` | Drawer divider | explore |
| `--hlc-intel-surface` | `#f7f7f7` | `#1E1E1E` | Intel card — matches inputs card | explore |
| `--hlc-intel-line` | `rgba(0,0,0,0.088)` | `rgba(255,255,255,0.10)` | | explore |
| `--hlc-meta-ink` | `#5c5c5c` | `#A1A1A6` | | explore |
| `--hlc-ink-soft` | `#3a3a3c` | `#C7C7CC` | | explore |
| `--hlc-text-primary` | shell ink | `#F5F5F7` | via shell | explore |
| `--hlc-text-secondary` | shell muted | `#A1A1A6` | via shell | explore |
| `--hlc-text-tertiary` | `#86868b` | `#8E8E93` | Between muted/ghost | explore |
| `--hlc-line` | `rgba(108,128,155,0.26)` | `rgba(154,163,181,0.32)` | Steel | explore |
| `--hlc-line-soft` | `rgba(108,128,155,0.14)` | `rgba(154,163,181,0.18)` | | explore |
| `--hlc-line-faint` | `rgba(108,128,155,0.09)` | `rgba(154,163,181,0.10)` | | explore |
| `--hlc-delta-wash` | `rgba(176,142,70,0.16)` | `rgba(245,215,142,0.22)` | Amber family | explore |
| `--hlc-limit-house` | `#7a3410` | `#E0A070` | Brown meaning | explore |
| `--hlc-limit-income` | `#234a82` | `#7EB6FF` | Blue accent ≠ btn fill | explore |
| `--hlc-link-hover` | `#0077ed` | `#2997FF` | Brighter than btn rest | explore |
| `--hlc-icon-rest` | muted | `#A1A1A6` | via shell | explore |
| `--hlc-icon-hover` | ink | `#F5F5F7` | via shell | explore |
| `--hlc-icon-active` | blue | `#0A84FF` | via shell | explore |
| `--hlc-icon-on-mark` | canvas white | `#FFFFFF` | On `#0A84FF` | explore |
| `--hlc-title-wash-from` | `#202027` | `#E8EAED` | Light grey wash on dark | explore |
| `--hlc-title-wash-to` | `#485879` | `#A1A1A6` | | explore |

**Drawer / menu mapping (Q12–Q13):** drawer body `#1E1E1E` · dropdown sheet `#2C2C2C` · selected segment `#2C2C2C` · menu item hover `#383838` · scrim `rgba(0,0,0,0.45)`.

#### 2.12 Apply (stack)

| token | light_today | dark_locked | contrast_notes | owner |
|---|---|---|---|---|
| `--apply-field-wash` | `#f7f8fa` | `#1E1E1E` | Input wash | apply |
| `--apply-field-wash-hover` | `#f9fafc` | `#2C2C2C` | | apply |
| `--apply-verify-wash` | `#f3f7ff` | `#1A2F4A` | Cool help wash | apply |
| `--apply-verify-wash-active` | `#edf4ff` | `#243A52` | Stronger | apply |
| `--apply-error-wash` | `#fef7f7` | `#3D1F1F` | = costly chip bg family | apply |
| `--apply-status-ok` | `#1d7a3a` | `#30D158` | AA on dark | apply |
| `--apply-status-ok-bright` | `#22c55e` | `#32D74B` | | apply |
| `--apply-status-bad` | `#b42318` | `#FF6961` | | apply |
| `--apply-ink-secondary` | `#424245` | `#C7C7CC` | = soft ink | apply |
| `--apply-blue-press` | `var(--shroffin-btn-primary-hover)` | same | = Apple btn hover | apply |

#### 2.13 Calculators / guide / APF / utility / about / editorial

| token | light_today | dark_locked | contrast_notes | owner |
|---|---|---|---|---|
| `--calc-hub-surface` | `#f5f5f7` | `#2C2C2C` | Hub cards | calc |
| `--calc-wash` | footer | `#1E1E1E` | via footer | calc |
| `--calc-paper` | white mix | mix toward `#121212` | | calc |
| `--calc-line` | hair | white-alpha hair | via shell | calc |
| `--calc-line-soft` | `rgba(29,29,31,0.06)` | `rgba(255,255,255,0.06)` | | calc |
| `--calc-hub-elev` | soft black elev | `0 3px 10px rgba(0,0,0,0.35), 0 10px 28px rgba(0,0,0,0.40)` | Q19 | calc |
| `--guide-card-surface` | `#f7f7f7` | `#2C2C2C` | | guide |
| `--guide-card-elev` | soft elev | same as calc-hub-elev | Q19 | guide |
| `--guide-title-g` | purple→pink→blue | `#5E5CE6` → `#BF5AF2` → `#147CE5` | Brand gradient | guide |
| `--apf-surface` / wash / ink / blue / line | shell aliases | inherit shell dark | | apf |
| `--apf-line-soft` | `rgba(29,29,31,0.06)` | `rgba(255,255,255,0.06)` | | apf |
| `--utility-sitemap-hover` | `#005bb5` | `#2997FF` | Button-family hover | utility |
| `--mag-*` / `--about-*` / `--stance-*` | shell aliases | inherit shell dark twins | | editorial/about/home |
| `--stance-line` | `rgba(0,0,0,0.1)` | `rgba(255,255,255,0.10)` | | home |
| `--home-title-g` | `#5E5CE6`→`#BF5AF2`→`#2997FF` | **keep** same (dark-friendly) | | home |

#### 2.14 Home theme-follow (Q17)

| token | light_today (after theme) | dark_locked | contrast_notes | owner |
|---|---|---|---|---|
| `--home-story-bg` | light paper / `#F5F5F7` or surface family | `#121212` | Not `#1a1a1a` drift | home |
| `--home-story-ink` | `#1d1d1f` | `#F5F5F7` | = main ink | home |
| `--home-device-stage` | `#E8E8ED` soft grey | `#1E1E1E` | Not pure `#000` void | home |
| Product-demo page band | `#f5f7f9` / footer | `#1E1E1E` | | home |
| Phone prop chrome (titanium/bezel) | device greys | **keep device greys** | Prop, not page chrome | home |

---

### 3. Derived states

**Formulas used (do not invent unrelated hues):**

| State | Formula | Locked result |
|---|---|---|
| Link active | one step deeper than link | `#8FA3F0` → `#7389E0` |
| Link visited | purple-tint family, brighter on dark | `#A89BE8` |
| Button hover | Apple `#0076DF` (slightly lighter than rest) | `#0076df` |
| Button active | Apple `#006EDB` | `#006edb` |
| Focus | accent twin on dark | `#0A84FF` |
| Field focus line | = filled button rest | `#0071e3` |
| Nav translucent | frost RGB @ 0.80 / 0.92 / 0.96 | `rgba(30,30,30,…)` |
| Hairlines | white-alpha strength set A | 0.16 / 0.12 / 0.08 / 0.10 |
| Placeholder | muted × ~0.55 alpha | `rgba(161,161,166,0.55)` |
| Button shadows | `none` (flat Apple Buy) | §2.4 |
| Card elev | black-alpha on charcoal | Q19 |
| Logo plate companions | pad `3px`; hair `rgba(0,0,0,0.08)` | Q9+Q19 |

---

### 4. Explore ranks PREP-15

| Meaning | Ink | Num | Bg | Text-on-chip (claimed) | Chip-on-`#2C2C2C` |
|---|---|---|---|---|---|
| Helpful | `#8FDBA5` | `#A3E4B5` | `#1B3D2F` | **~7.3:1** / **~8.2:1** ≥ AA | ~1.2:1 — distinct by **green hue** |
| Costly | `#F2A4A0` | `#FFB4AB` | `#3D1F1F` | **~7.5:1** / **~8.8:1** ≥ AA | ~1.1:1 — distinct by **red hue** |
| Grace | `#F5D78E` | — | `#3A2E14` | **~9.5:1** ≥ AA | ~1.1:1 — distinct by **amber hue** |

Measured with relative-luminance WCAG contrast (2026-08-21). Main-build PR must re-attach this note (Phase F gate).

---

### 5. Explicitly unchanged (light theme)

Do **not** edit these light values when shipping dark twins:

| Token / surface | Keep (light) |
|---|---|
| `--shroffin-blue` / btn-primary | `#0071e3` |
| `--shroffin-btn-primary-hover` | `#0076df` |
| `--shroffin-btn-primary-active` | `#006edb` |
| Button shadows (light) | `none` (flat Apple Buy) |
| `--shroffin-link` / active / visited | `#3f62c8` / `#2f4ba0` / `#5a4fcf` |
| All light surface / ink / hair / gn / field tokens | Phase B light freeze as today |
| `--hlc-logo-plate` under light | `transparent` (invisible) |
| Explore light ranks / washes / rows | Phase F light spine |
| Live `site.webmanifest` | stays white until Phase I activation |
| Education / `css/style.css` / `pages/_*.html` | out of v1 — leave light |

---

### 6. Main-build binding statement

**Any main-build agent that invents different hexes without a founder change FAILS.**

Main build may proceed **only** using this table, **Appendix C** hardcode remaps, and the ledger. Same token names under `html[data-theme="dark"]` (and Explore block). Hardcoded light paints must be remapped per Appendix C (prefer promoting to tokens; if left as literals under dark selectors, use the exact dark recipes). No cool-blue canvas. No pure `#000` page canvas. No invert. No `--dark-*` names. Light `#0071e3` untouched. Rank meaning colors kept. Bank art unrecolored; plate `#FFFFFF` on dark only.

Still **not** done in this job: live boot, footer pill, dark CSS in `css/`, PWA live manifest edit.

---

### 7. Open only if founder deferred a cluster

*(empty — none deferred)*

---

### Appendix A — Component coverage checklist

| UI area | Locked via |
|---|---|
| Page canvas every redesigned page | Q1 surface |
| Nav / footer | Q5 + Q6 + App C (submenu `#06c`, WhatsApp `#000`) |
| All text levels | Q2 |
| Links / buttons / focus | Q3–Q4 + App C (secondary `#0066cc`, on-blue `#fff`) |
| Input boxes / underlines / washes / autofill | Q6 + Q11 + App C |
| Dropdowns / segments / menus / chips pressed | Q12 + App C |
| Checkboxes / radios / toggle chips | tokens + App C |
| Side panels / drawers / intel | Q13 + App C (backdrop/ink-alpha borders) |
| Cards / sections / flips / calc hubs / flip scrim | Q14 + App C |
| Chapter index / guide seg switch / sel thumb | tokens + App C |
| Apply status / error / verify / phone row glow | Q15 + App C |
| Explore table / steel / ranks / plate | Q7–Q9 + Q16 |
| Home story / product-demo bands | Q17 |
| Title gradients / sitemap hover | Q18 |
| Shadows / lifts | Q19 + App C |
| About / editorial / APF aliases | inherit shell |
| Phone titanium prop | device greys (intentional — App C exempt) |
| Education / legacy | out of v1 |

### Appendix B — Compact engineer box

```
SURFACE:     #121212 | #1E1E1E | #2C2C2C | #383838
INK:         #F5F5F7 | soft #C7C7CC | muted #A1A1A6 | ghost #636366
LINK:        #8FA3F0 | active #7389E0 | visited #A89BE8
BLUE_DARK: #0A84FF (accents/links/icons) | filled CTAs #0071e3 / hover #0076df / active #006edb (Apple Buy flat)
BLUE_LIGHT:  #0071e3 EXACT (do not change)
LINES:       white-alpha 0.16/0.12/0.08; gn-border 0.10; veil rgba(0,0,0,0.45)
EXPLORE_ROW: selected #1A2F4A | hover #1A2330 | strong #2C2C2C
RANKS:       helpful #8FDBA5/#A3E4B5 on #1B3D2F
             costly  #F2A4A0/#FFB4AB on #3D1F1F
             grace   #F5D78E on #3A2E14
PLATE:       #FFFFFF pad 3px hair rgba(0,0,0,0.08)
HOME_DARK:   story #121212 | ink #F5F5F7 | stage #1E1E1E
PWA_SHIP:    #121212 / light meta #fcfcfd
HARDCODE:    see Appendix C — mandatory
```

### Appendix C — Hardcode remap (Q20) — binding

**Scope:** All redesigned CSS under theme discipline (`css/shroffin-*.css`, `css/project-approvals.css`, home layout home tokens). Prefer promoting literals to tokens; if a dark selector must keep a literal, use the **dark recipe** below. **Do not invent new hues.**

**Evidence baseline (2026-08-21 rescan):** ~73 black-alpha · ~64 `rgba(29,29,31,…)` · ~47 white-rgba · ~16 `rgba(0,113,227,…)` · ~15 `#fff` · ~9 `#0066cc`/`#06c`/`#000` · ~9 canvas-252 — must follow these recipes under dark.

#### C.1 Pattern recipes (global)

| Light pattern | Dark recipe | Notes |
|---|---|---|
| `rgba(0,0,0,α)` used as **hairline / border / divider** on paper | `rgba(255,255,255,α′)` with α′ ≈ max(α, 0.06) and typically α′ ∈ {0.06, 0.08, 0.10, 0.12, 0.16} matching Q6 strength bands | Prefer `--shroffin-hair*` / `--shroffin-rule` / `--shroffin-gn-border` when possible |
| `rgba(0,0,0,α)` used as **elevation shadow** | Keep black-alpha; use Q19 card/row strengths (`0.28`–`0.40`) — do not flip to white | Shadows need dark pigment |
| `rgba(0,0,0,α)` used as **scrim / backdrop** | `rgba(0,0,0,0.45)` (veil) or up to `0.55` for denser drawers | Q6/Q13 |
| `rgba(29,29,31,α)` (ink-alpha borders/fills/hovers) | `rgba(255,255,255,α′)` — map: `0.03→0.04`, `0.04→0.05`, `0.06→0.06`, `0.08→0.08`, `0.10→0.10`, `0.14→0.12`, `0.18→0.14`, `0.22→0.16`, `0.28→0.18`, `0.35→0.22`, `0.45→0.28`, `0.56→0.45`, `0.65→0.50`, `0.72→0.55`, `0.84→0.72` | Hover washes stay quiet |
| `rgba(255,255,255,α)` frost on light chrome | On dark: use raised solid `#1E1E1E` / `#2C2C2C` **or** `rgba(30,30,30,0.80–0.92)` (nav frost family) — do not keep opaque white panels | Chapter index / local frost |
| `rgba(255,255,255,α)` fade edges (index paddles) | `rgba(18,18,18,α)` fading to transparent (from `#121212`) | Keep edge cue |
| `rgba(252,252,253,α)` / `#fcfcfd` scrim | `#121212` @ same alpha **or** `rgba(18,18,18,α)` | Flip focus scrim |
| `rgba(0,113,227,α)` (light brand blue alpha) | `rgba(10,132,255,α)` (`#0A84FF`) — keep α unless noted | Chip pressed, focus glow |
| `rgba(0,88,176,α)` / `rgba(0,74,150,α)` | Use dark hover/active `#0070E0` / `#005BB8` alphas | Button shadow leftovers |
| `rgba(0,102,204,α)` | `rgba(10,132,255,α)` | Intel plus hover |
| `#fff` / `#ffffff` as **on-primary button label** | Keep `#FFFFFF` | Readable on `#0A84FF` |
| `#fff` as **seg/switch thumb fill** (`.shroffin-sel-thumb--pill`) | `#2C2C2C` + shadow `0 1px 2px rgba(0,0,0,0.35)` | Q12 selected |
| `#fff` autofill inset (`box-shadow: 0 0 0 1000px #fff inset`) | `0 0 0 1000px #1E1E1E inset` + ink fill `#F5F5F7` | Input inside |
| `#0066cc` secondary CTA border/text | `#0A84FF` | Align dark button family |
| `#06c` submenu hover | `#8FA3F0` (link) **or** `#0A84FF` if treated as action — **lock: `#8FA3F0`** (nav text link hover) | Not button fill |
| `#000` WhatsApp icon in support flyout | `#F5F5F7` (main ink) | Visible on dark frost |
| `rgba(60,64,67,α)` / `rgba(15,23,42,α)` soft shadows | `rgba(0,0,0,α′)` with α′ ≈ 0.28–0.40 per Q19 | |
| `color-mix(… ink N% , transparent)` muted text | Keep mix but ink is `#F5F5F7` under dark — OK | |
| `color-mix(… blue N% , transparent)` wash | Mix toward `#0A84FF` on dark | Filters toggle etc. |
| `color-mix(… canvas-mix-base …)` | Canvas base is `#121212` — mix follows | |
| Primary label `#fff` on blue | `#FFFFFF` | |

#### C.2 Component-specific locks

| Component | Light hardcode (examples) | Dark locked behavior |
|---|---|---|
| **Navbar / flyout** | gn tokens; submenu `#06c`; WhatsApp `#000` | Tokens + `#8FA3F0` hover label; icon `#F5F5F7` |
| **Focus outline** | `var(--shroffin-focus)` | `#0A84FF` (already) |
| **Input underline fields** | field-line tokens | Q6 |
| **Apply phone/email row** | white inset highlight; `rgba(0,113,227,…)` hover/focus ring | Inset → `rgba(255,255,255,0.06)`; glow → `rgba(10,132,255,0.18–0.34)` + `0 0 0 4px rgba(10,132,255,0.12)` |
| **Autofill** | `#fff` inset | `#1E1E1E` inset (C.1) |
| **Checkbox checked** | blue token + white SVG stroke | Keep; stroke stays `#FFFFFF` on `#0A84FF` |
| **Filter option hover** | `rgba(29,29,31,0.04)` | `rgba(255,255,255,0.05)` |
| **Chip pressed (blue wash)** | `rgba(0,113,227,0.08)` bg + `0.4` border | `rgba(10,132,255,0.14)` bg + `rgba(10,132,255,0.45)` border; color `--shroffin-blue` dark |
| **Toggle chips pressed** | ink-alpha bg/border | white-alpha per C.1 map; text main ink |
| **Segment / guide-seg selected thumb** | `#fff` pill | `#2C2C2C` (C.1) |
| **Chapter index strip / mag-index** | `rgba(255,255,255,0.92)` bar; black-alpha current `0.08` / hover `0.04` / strong `0.10` | Bar `#1E1E1E` @ 0.92 or solid `#1E1E1E`; current `rgba(255,255,255,0.10)`; hover `0.06`; strong `0.14` |
| **Index edge fades** | white→transparent gradients | `#121212`→transparent |
| **Guide flip focus scrim** | `rgba(252,252,253,0.88)` | `rgba(18,18,18,0.72)` (calm dim, not white veil) |
| **Drawer backdrop** | `rgba(29,29,31,0.35)` | `rgba(0,0,0,0.45)` |
| **Drawer / table ink-alpha borders** | many `rgba(29,29,31,0.06–0.18)` | white-alpha C.1 map |
| **Secondary CTA** | `#0066cc` | `#0A84FF`; hover fill still btn-hover tokens; on-fill label `#FFFFFF` |
| **Calc choice checked face** | `rgba(0,113,227,…)` | `rgba(10,132,255,…)` same α |
| **Disabled primary dock** | `rgba(0,113,227,0.52)` | `rgba(10,132,255,0.40)` (calmer on dark) |
| **Stance / tile white hover** | white rgba | `rgba(255,255,255,0.06–0.10)` on dark story — or skip if band is already `#121212` |
| **Phone / Safari demo props** | titanium / bezel greys | **Exempt** — keep device greys (Q17) |
| **Footer meta** | `rgba(0,0,0,0.56)` | `rgba(255,255,255,0.45)` or muted `#A1A1A6` |

#### C.3 Main-build enforcement

1. When implementing dark, run a rescan for the light patterns in C.1 on redesigned CSS; zero unresolved hits under `html[data-theme="dark"]` paths (literals either tokenized or remapped).  
2. Prefer tokens over new literals.  
3. Inventing a new interaction hex outside this appendix + §§2–4 **FAILS**.

#### C.4 Coverage statement (after Q20)

| Layer | Status |
|---|---|
| Named token dark twins | Locked Q1–Q19 |
| Hardcoded interaction / hover / input / checkbox / border / chapter-index / nav leftover paints | Locked Q20 Appendix C |
| Phone device prop chrome | Exempt (intentional) |
| Education / legacy | Out of v1 |

**Main build may proceed only using this table + Appendix C.**
