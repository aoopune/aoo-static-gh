# Dark / Light / Default — Phase C boot injection lock (PREP-12)

**Date:** 2026-08-21  
**Repo:** `aoo-static-gh`  
**Job:** Lock the **single source of truth** for early theme boot on all redesigned pages. Spec the resolve algorithm. Do **not** activate live dark resolution.  
**Phase D:** **VOID** — Phase A home bands follow theme; no `data-theme-island="fixed-dark"` work.

---

### 0. Executive status

**Phase C complete.** One partial owns the early `<head>` theme-boot slot; chrome sync + content stitch propagate it to all 24 v1 pages; drift checks exist; live stub is **inert** (no `data-theme`, no `color-scheme` change).

---

### 1. Phase A / B inputs honored

| Lock | Honored how |
|---|---|
| Preference `localStorage['shroffin-color-preference']` ∈ {dark, light, system} | Spec-only in this brief + comments in partial; not read on live pages yet |
| Resolved `html[data-theme="dark"\|"light"]` | Spec-only; **no** customer `data-theme` shipped |
| First visit unset → resolve **dark** (≠ Default/system) | Spec algorithm below; not activated |
| Default = `system` → `prefers-color-scheme` | Spec algorithm below; not activated |
| Control later: footer icon pill in `partials/site-footer.html` | Named only; not built |
| Home follows theme; Phase D islands void | No island markers added |
| v1 = 24 paths in `data/redesigned-pages.json` | Sync + contract checks scoped to that set |
| Out of v1: `css/style.css`, education, `pages/_*.html` | No theme-boot required / not synced |
| Phase B: no dark CSS, no footer pill, no live resolving boot | Inert stub only |

---

### 2. Injection owner (single source of truth)

| Role | Exact path |
|---|---|
| **Snippet owner (edit once)** | `partials/theme-boot.html` |
| **Marker pair** | `<!-- SHROFFIN_THEME_BOOT_START -->` … `<!-- SHROFFIN_THEME_BOOT_END -->` |
| **Fill library** | `scripts/lib/site-chrome.js` → `renderThemeBoot()` / `applyThemeBoot()` / included in `applySiteChrome()` |
| **Live-page sync** | `scripts/sync-theme-boot.js` (`npm run build:theme-boot` / `check:theme-boot`) |
| **Layout stitch** | `scripts/build-content.js` → `applySiteChrome(...)` on every content build |
| **Layout fill helper** | `scripts/lib/fill-layout-chrome.js` (`npm run build:layout-chrome`) |
| **Slot location** | Every content layout `<head>`, after viewport meta, **before** the early `js` class script and **before** stylesheets |
| **Logo swap (Phase G landed)** | `partials/global-nav.html` + `css/shroffin-shell.css` — dual-img CSS show/hide; light default without `data-theme` |
| **Footer control (later — named only)** | `partials/site-footer.html` — Phase C does **not** build the pill |

**Architecture law:** Do **not** hand-edit dozens of live HTML files as the way to change boot. Edit `partials/theme-boot.html`, then run the build steps below.

**Layouts covered:** all 25 entries in `data/content-pages.json` (24 v1 + `pages/apply-contact.html` for chrome uniformity). Theme **product** scope remains the 24 redesigned paths.

---

### 3. Build steps that propagate one edit → all v1 outputs

Run from repo root:

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"

# After editing partials/theme-boot.html — refresh live redesigned pages:
npm run build:theme-boot

# Keep layout templates filled (content stitch source of truth):
npm run build:layout-chrome

# Full content restitch (also fills theme-boot via applySiteChrome):
npm run build:content -- --write

# Site pipeline includes theme-boot after nav/footer:
npm run build:site
```

**Minimal one-edit path for boot-only changes:**

```bash
npm run build:theme-boot && npm run build:layout-chrome
```

**Verify sync:**

```bash
npm run check:theme-boot
```

Expect: `Canonical theme-boot is synchronized across 24 pages.`

---

### 4. Proof — editing once updates the v1 set

Verified on 2026-08-21:

1. Added a temporary proof attribute on the inert script in `partials/theme-boot.html`.
2. Ran `npm run build:theme-boot`.
3. **24/24** paths in `data/redesigned-pages.json` contained the proof token inside the theme-boot markers.
4. Removed the proof attribute; re-ran `build:theme-boot` + `build:layout-chrome`.
5. Final state: **24/24** carry `data-shroffin-theme-boot="inert"`; **0** customer pages ship `html[data-theme]`.

---

### 5. Boot algorithm (SPEC ONLY — do not activate on live site in Phase C)

When Phase I ships the real body inside `partials/theme-boot.html`, it must run **inline in `<head>` before first paint** (before stylesheets that depend on resolved theme). Pseudocode:

```
pref = localStorage.getItem('shroffin-color-preference')
       // allowed: "dark" | "light" | "system" | null (unset)

if (pref === 'light') {
  resolved = 'light'
} else if (pref === 'dark') {
  resolved = 'dark'
} else if (pref === 'system') {
  resolved = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
} else {
  // First visit: preference unset — product default is dark.
  // Do NOT write "system" (or any value) until the user chooses Default.
  resolved = 'dark'
}

html.setAttribute('data-theme', resolved)   // only "dark" | "light"
html.style.colorScheme = resolved           // or CSS color-scheme via [data-theme] selectors
```

**Contract reminders (Phase A):**

| Case | Stored preference | Resolved `data-theme` |
|---|---|---|
| User chose Dark | `dark` | `dark` |
| User chose Light | `light` | `light` |
| User chose Default | `system` | follow OS dark/light |
| First visit (nothing stored) | *(absent)* | `dark` — **not** the same as Default |

**Phase C live stub:** the partial ships an empty IIFE with `data-shroffin-theme-boot="inert"`. It must **not** read `localStorage`, must **not** set `data-theme`, must **not** set `color-scheme`. Activating the algorithm above before dark CSS exists would risk FOUC / wrong `color-scheme`.

---

### 6. Drift check plan (so the slot cannot silently vanish)

| Check | Command / location | What it guards |
|---|---|---|
| Sync equality | `npm run check:theme-boot` | Live 24 pages match `partials/theme-boot.html` via `applyThemeBoot` |
| Responsive contracts | `scripts/check-responsive-contracts.js` (via `npm run lint:responsive`) | Exactly one START/END marker pair; inert fingerprint present; boot before early `js` script; **no** customer `data-theme` yet |
| Lint pipeline | `lint:responsive` includes `check:theme-boot` | Drift fails CI/predeploy path |
| Site build | `build:site` runs `build:theme-boot` | Fresh site builds re-stamp boot from partial |
| Content stitch | `build-content` → `applySiteChrome` | New stitches cannot omit boot when markers exist in layouts |
| Assert on write | `assertChrome` in `site-chrome.js` | Markers without partial body → hard fail |

**Fail closed rules for later agents:**

- New redesigned layout/page in v1 → must include `SHROFFIN_THEME_BOOT_*` markers in `<head>` before CSS.
- Boot body changes → edit **only** `partials/theme-boot.html`, then `build:theme-boot` (+ `build:layout-chrome` if layouts must match).
- Do **not** paste a second boot script outside the markers.
- Do **not** enable live resolve until Phase I gate (dark tokens + footer pill path ready).

---

### 7. What Phase C did **not** ship (forbidden / deferred)

- Dark CSS / dark token values  
- Footer monitor/sun/moon pill  
- Live boot that sets `data-theme` or `color-scheme`  
- Mass editorial / Explore / Apply retarget (Phase E+)  
- Logo swap implementation — **Phase G landed** (owner remains `partials/global-nav.html`; Phase C only named it)  
- Fixed-dark island markers (Phase D void)  
- Education / `css/style.css` / `pages/_*.html` theming  
- CSS `filter: invert()`

---

### 8. Gate checkboxes

- [x] Injection owner written (exact file + build steps)  
- [x] Markers in every v1 layout `<head>` before CSS / early `js` boot  
- [x] Chrome pipeline fills markers (`site-chrome` + `build:theme-boot` + content stitch)  
- [x] Proof: one edit → all 24 redesigned outputs  
- [x] Boot algorithm documented (spec only)  
- [x] Drift checks wired (`check:theme-boot` + responsive contracts + lint/build site)  
- [x] Live stub inert — no customer `data-theme`  
- [x] Phase D island work skipped (void per Phase A)  
- [x] Logo swap hook named (`partials/global-nav.html`) — **implemented in Phase G**

---

### 9. Next phases (do not execute here)

1. **D:** *void* — home follows theme  
2. **E:** Unify-light stack retarget (editorial, calc, guide, about, utility, apply) — done  
3. **F:** Explore `--hlc-*` dark-map + logo plate + contrast gate — done  
4. **G:** Dark wordmark + PWA / `theme-color` plan — **done** (`_dark-mode-phase-g-assets.md`)  
5. **H:** JS inject / legacy policy  
6. **I:** Gate → theme values + **activate** boot body + footer icon pill + ship PWA colors  

Machine record: `_dark-mode-phase-c-boot-injection-ledger.json`
