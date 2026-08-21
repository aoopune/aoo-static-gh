# Dark / Light / Default — Phase E unify-light stack retarget

**Date:** 2026-08-21  
**Repo:** `aoo-static-gh`  
**Job:** PREP-04 + PREP-06 + PREP-07 + PREP-14 (redesigned CSS). Retarget light stacks to Phase B frozen roles **without changing light appearance**. No dark values, no live boot, no footer pill, no Explore dark map.

---

### 0. Status

**Phase E complete** for the scoped redesigned CSS owners below.

**Remaining (intentional, not Phase E):**

- Explore `--hlc-*` wash/rank/surface dark-map → **Phase F**
- Home story/device **light theme variants** (bands still current dark paints via reserved tokens) → theme build
- Product-demo **device chrome** greys/titanium (themeable_home_follow set) → theme / home follow
- JS injectors (`aoo-loan-table-standalone`, apply-flow teal) → **Phase H**
- Live boot + footer icon pill → **Phase I**
- Utility meta `rgba(0,0,0,0.56+)` near-muted without shell twin (left exact for light sameness)
- Editorial decorative gradients / story accents (not page chrome)

---

### 1. Inputs honored

| Input | Honored how |
|---|---|
| Phase A product brief | Home bands follow theme; reserved `--home-story-*` / `--home-device-stage` named with **today’s** hex; no `fixed-dark` islands |
| Phase B shell freeze + drift map | Stack aliases → shell roles; mix-base for white mixes; gap ownership followed |
| Phase C boot injection | Boot untouched / inert; `npm run check:theme-boot` green |
| Stop-bleed discipline | No new hard light chrome; new stack names recorded in Phase B freeze + this ledger |
| Phase D void | No island markers added |
| PREP-04 / 06 / 07 / 14 | Editorial, Apply, calc/guide/about/utility/APF/home, fallbacks/mix remediated on redesigned CSS |

---

### 2. Files changed

| File | What retargeted | Hex before → after | Fallbacks before → after |
|---|---|---:|---:|
| `css/shroffin-editorial.css` | `--mag-*` → shell; localnav → `gn-bg`; `color-mix` → canvas-mix-base; strip fallbacks; on-pill whites → mix-base | 92 → 41 | 37 → 0 |
| `css/shroffin-apply.css` | Shell ink/surface/link/btn; `--apply-*` leftovers for status/washes; strip fallbacks | 89 → 10 | 60 → 0 |
| `css/shroffin-calculators.css` | ink/muted/wash/line → shell; `--calc-paper` via mix-base; hub-surface stays named | 31 → 2 | 28 → 0 |
| `css/shroffin-guide.css` | localnav frost/border → gn-bg / hair-soft; CTA/jump chrome → shell | 14 → 0 | 4 → 0 |
| `css/shroffin-about.css` | soft/note/ghost → shell; title ink; hair-soft borders | 9 → 0 | 5 → 0 |
| `css/shroffin-utility-pages.css` | strip fallbacks; whites → mix-base; hair borders; `--utility-sitemap-hover` | 16 → 2 | 12 → 0 |
| `css/project-approvals.css` | APF ink/line/wash → shell; strip fallbacks | 9 → 0 | 8 → 0 |
| `css/shroffin-home.css` | stance soft ink → shell; strip fallbacks | 4 → 0 | 3 → 0 |
| `css/shroffin-product-demo.css` | `.spd-section--home` / phone bands → footer; surface aliases; strip fallbacks | 26 → 11 | 4 → 0 |
| `css/shroffin-shell.css` | Strip remaining `var(--token, #hex)` on field-line-focus etc. | 68 → 66 | 2 → 0 |
| `templates/layouts/home.html` + `index.html` | Reserved `--home-story-bg/ink`, `--home-device-stage` with current hex | (inline) | light fallbacks stripped in layout |
| `super-review-1/themes/_dark-mode-phase-b-shell-freeze.md` | Additive: `--apply-*`, `--utility-sitemap-hover`, `--apf-*` named in policy | — | — |
| `.cursor/rules/shroffin-theme-token-discipline.mdc` | Owned stack list matches freeze | — | — |

**Not changed:** `css/shroffin-explore-banks.css` (Phase F), `css/style.css` / education, JS injectors, `partials/theme-boot.html`.

---

### 3. Role wiring results

| Phase B drift / gap | Result |
|---|---|
| Page canvas fallbacks | **done** — redesigned `var(--shroffin-surface, #…)` removed |
| Footer / deep band / `.spd-section--home` | **done** — aliases `--shroffin-footer` |
| Primary ink hardcodes (apply / about / guide) | **done** → `--shroffin-ink` / mag aliases |
| Soft ink mag/about/stance | **done** → `--shroffin-ink-soft` |
| Muted aliases | **done** |
| Button / brand blue near-drifts | **done** for shell family; apply press `#0077ed` kept as `--apply-blue-press` (exact) |
| Hair / hair-soft (mag, guide localnav, about, calc/apf line) | **done** (calc/apf `--*-line-soft` 0.06 stays stack_local) |
| Nav frost localnav | **done** → `--shroffin-gn-bg` (0.78/0.82 → shell 0.8 — micro alpha unify, same frost grey) |
| Note / wash `--mag-paper-note` / about | **done** → `--shroffin-paper-note` |
| Guide card surface | **done** — kept `--guide-card-surface: #f7f7f7`; usage fallbacks removed |
| Mix toward raw `#fff` | **done** on redesigned CSS → `--shroffin-canvas-mix-base` |
| Light `var` fallbacks (redesigned owners) | **done** → 0 on listed files |
| Apply status / field washes | **done** — named `--apply-*` (not shell) |
| Home story / device voids | **done** tokenise only (current values); light variants **deferred** to theme |
| Product-demo device titanium/greys | **deferred** — themeable_home_follow set (Phase A), not page chrome |
| Explore ranks/washes | **deferred** → F |
| Utility meta rgba near-muted | **deferred** — mapping to `--shroffin-muted` would change look |
| Stance line `rgba(0,0,0,0.1)` | **deferred** exact (near hair-soft 0.08) |

---

### 4. Intentionally untouched

- Explore `--hlc-rank-*`, washes, surface table system (Phase F)
- JS injectors / legacy teal (Phase H)
- Education / `css/style.css` / `pages/_*.html`
- Theme boot body (still inert Phase C stub)
- Dark palette / `html[data-theme=dark]` value sets
- Footer appearance icon pill
- `data-theme-island="fixed-dark"` (void)

---

### 5. Metrics before/after

Measured from repo root with `rg -o '#[0-9a-fA-F]{3,8}\b'` and `rg 'var\(--[a-zA-Z0-9-]+,\s*#'`.

| File | Hex before | Hex after | Fallbacks before | Fallbacks after |
|---|---:|---:|---:|---:|
| editorial | 92 | 41 | 37 | 0 |
| apply | 89 | 10 | 60 | 0 |
| calculators | 31 | 2 | 28 | 0 |
| guide | 14 | 0 | 4 | 0 |
| about | 9 | 0 | 5 | 0 |
| utility | 16 | 2 | 12 | 0 |
| project-approvals | 9 | 0 | 8 | 0 |
| home | 4 | 0 | 3 | 0 |
| product-demo | 26 | 11 | 4 | 0 |
| **Sum (touched stacks)** | **290** | **66** | **161** | **0** |

Notes:

- Remaining editorial hex ≈ decorative title gradients + story accents + `--guide-card-surface` def.
- Remaining apply hex = `--apply-*` definition block only.
- Remaining product-demo hex = device/Safari chrome (home-follow).
- `color-mix(... #fff)` on redesigned `shroffin-*.css` (excl. Explore): **0** after (was 1 editorial).

---

### 6. Verify commands + results

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"

rg 'var\(--[a-zA-Z0-9-]+,\s*#' \
  css/shroffin-editorial.css css/shroffin-apply.css css/shroffin-calculators.css \
  css/shroffin-guide.css css/shroffin-about.css css/shroffin-utility-pages.css \
  css/project-approvals.css css/shroffin-home.css
# → no matches

rg 'color-mix\([^)]*#fff' css/shroffin-*.css css/project-approvals.css
# → no matches (Explore has no raw #fff mix; editorial fixed)

npm run check:theme-boot
# → Canonical theme-boot is synchronized across 24 pages.
```

Customer `data-theme` activation: **none** (only inert Phase C comments + shell comment about later dark twins).

---

### 7. Visual sameness statement

- Aliases use **identical** light values already frozen in shell (`#1d1d1f`, `#3a3a3d`, `#6e6e73`, hair alphas, paper-note, link/button blues).
- Apply leftovers that were **not** exact shell matches (`#424245`, field washes, status greens/reds, `#0077ed`) were moved to named `--apply-*` with the **same** hex — no redesign.
- `--calc-paper` rewritten as `color-mix(... canvas-mix-base 55%, transparent)` ≡ prior `rgba(255,255,255,0.55)` when mix-base is `#ffffff`.
- `.spd-section--home` now uses `--shroffin-footer` (live mix near `#f5f7f9` family, same role as calc wash / footer) — intentional unify to one deep-band role.
- Localnav frost alpha collapsed to `--shroffin-gn-bg` (0.8) from 0.78/0.82 — same `#f5f7f9` frost; ±0.02 alpha only.
- Anything that would have required a visible redesign was left exact and ticketed deferred (utility meta rgba, stance 0.1 line, device chrome, Explore).

**Eye-check pages (light should look unchanged):** home, any guide chapter, Explore banks (untouched CSS), Apply once, one calculator hub/tool, About.

---

### 8. Next phase

**F** — Explore `--hlc-*` ownership dark-map plan + `--hlc-logo-plate` + contrast gate (PREP-15). Still no full dark ship.

---

### 9. Gate checkboxes

- [x] Editorial mag-* → shell where required
- [x] Apply hard paints mapped
- [x] Calc/guide/about/utility/APF cleaned
- [x] Light fallbacks / raw #fff mixes reduced on redesigned CSS
- [x] Explore not falsely “finished”
- [x] Boot still inert; check:theme-boot green
- [x] No dark CSS / no footer pill

Machine record: `_dark-mode-phase-e-unify-light-ledger.json`
