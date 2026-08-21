# Dark / Light / Default — Phase G assets (PREP-10)

**Date:** 2026-08-21  
**Repo:** `aoo-static-gh`  
**Job:** Land dark-bar nav wordmark; wire single-owner logo swap hook; lock PWA / splash / `theme-color` ship plan. **No live theme activation. No dark CSS value sets. No footer pill.**

---

### 0. Executive status

**Phase G complete.**

| Stream | Result |
|---|---|
| G1 Dark wordmark asset | Landed at locked DST path (byte-identical to founder brand-kit PNG) |
| G2 Logo swap hook | Dual-`<img>` + CSS keyed off `html[data-theme]` in `partials/global-nav.html` + `css/shroffin-shell.css`; light remains default while boot is inert |
| G3 PWA / theme-color plan | Exact ship-time values documented below; **live `site.webmanifest` unchanged** (avoids dark-splash → light-site mismatch) |
| G4 Favicon / app-icon | Suitability documented — keep current icons for v1 |

---

### 1. Inputs honored

| Input | Honored how |
|---|---|
| Founder visual inputs (locked) | Source `logo-h-on-black` → DST `logo-h-dark-clear-781x173.png`; PWA dark-first toward `#121212`; no cool-blue canvas; bank plate / ranks out of scope |
| Phase A | First visit → dark (splash plan aligns); control still footer-only later; home follows theme (no fixed-dark) |
| Phase B | No new light chrome hex debt; no invert; no `--dark-*` vocabulary |
| Phase C | Boot stub stays inert; `check:theme-boot` green; logo owner was named — **hook implemented here** |
| Phase E / F | Not re-touched; Explore plate stays F’s job |
| Token discipline | No dark shell twins; no live-resolving boot |

---

### 2. G1 — Wordmark asset

| | Path |
|---|---|
| **Source PNG** | `etc/creatives/brand/images/logos/png/logo-h-on-black-781x173.png` |
| **Website DST (locked filename)** | `aoo-static-gh/images/logos/logo-h-dark-clear-781x173.png` |
| **Companion SVG (optional)** | `aoo-static-gh/images/logos/logo-h-dark-clear.svg` (from `etc/.../svg/logo-h-on-black.svg`) — not used by nav; kept for brand kit parity |
| **Light mark (unchanged)** | `images/logos/logo-h-light-clear-781x173.png` |

**Verify (ran 2026-08-21):**

```bash
file images/logos/logo-h-dark-clear-781x173.png
# PNG image data, 781 x 173, 8-bit/color RGBA, non-interlaced
```

Byte-identical to source PNG. White wordmark + blue mark on transparent — for **dark frost / dark chrome bars**, not for light nav.

**Backup not chosen:** `logo-h-white-clear` (all-white mono).

**`logo-mark-white-clear-*`:** remains mark-only / unused on live redesigned nav. Optional later for marketing or islands — **not** the nav wordmark.

---

### 3. G2 — Logo swap architecture (permanent)

#### Owner (one edit → all v1 pages)

| Role | Exact path |
|---|---|
| Markup owner | `partials/global-nav.html` |
| CSS owner | `css/shroffin-shell.css` (`.globalnav-logo--*` rules) |
| Propagate | `npm run build:nav` (+ `npm run build:layout-chrome` for templates) |
| Check | `npm run check:nav` |

**Law:** Do **not** hand-edit dozens of HTML logo `src`s. Edit the partial once, rebuild nav.

#### Pattern chosen: dual `<img>` + CSS show/hide

Prefer CSS-only swap keyed off `html[data-theme]` so **inert boot (no attribute) keeps the light logo**.

```html
<a class="globalnav-link globalnav-link-brand" href="/" aria-label="Shroffin Home">
  <img
    class="globalnav-logo globalnav-logo--light"
    src="/images/logos/logo-h-light-clear-781x173.png"
    alt="Shroffin"
    width="99"
    height="22"
  >
  <img
    class="globalnav-logo globalnav-logo--dark"
    src="/images/logos/logo-h-dark-clear-781x173.png"
    alt=""
    width="99"
    height="22"
    aria-hidden="true"
    decoding="async"
  >
</a>
```

```css
.globalnav-logo--dark { display: none; }
html[data-theme="dark"] .globalnav-logo--light { display: none; }
html[data-theme="dark"] .globalnav-logo--dark { display: block; }
```

| Condition | Visible mark |
|---|---|
| No `data-theme` (today — Phase C inert) | **Light** |
| `html[data-theme="light"]` | Light |
| `html[data-theme="dark"]` (Phase I+) | Dark |

**Rejected:** `filter: invert` on the light mark; per-page `src` edits; JS `src` swap that runs before inert boot exists.

**A11y:** Only the light img carries `alt="Shroffin"` while it is the default visible mark; dark img is decorative (`alt=""`, `aria-hidden="true"`). Link already has `aria-label="Shroffin Home"`.

---

### 4. G3 — PWA / splash / theme-color plan (ship with theme activation)

#### Today (unchanged — intentional)

| File / surface | Today |
|---|---|
| `site.webmanifest` `background_color` | `#ffffff` |
| `site.webmanifest` `theme_color` | `#1074de` |
| Page `<meta name="theme-color">` | **Absent** on customer pages |
| `html` `color-scheme` / `data-theme` | **Not set** (boot inert) |

**Why not ship dark splash now:** Founder direction is dark-first splash, but the **visible site is still light-only**. Shipping `#121212` splash while pages stay light would flash dark → light. Default: **document exact values; ship with Phase I theme activation**.

#### Exact ship-time values (locked for Phase I / theme PR)

| Surface | Dark / first-visit default | Light (when resolved light) |
|---|---|---|
| PWA `background_color` (splash) | **`#121212`** (Material base / founder ladder) | Keep splash dark-first for v1 (product default alignment) — dual light splash **not** chosen |
| PWA `theme_color` (manifest static fallback) | **`#121212`** | Manifest stays dark-first fallback; live chrome follows meta below |
| Page `<meta name="theme-color" content="…">` | **`#121212`** when resolved dark | **`#fcfcfd`** when resolved light (= today’s `--shroffin-surface` light lock family / near canvas) |
| CSS `color-scheme` | `dark` when `data-theme=dark` | `light` when `data-theme=light` |

**Notes:**

1. **Dark-first splash** matches Phase A first-visit → dark. Dual light/dark splash assets were **not** chosen for v1.
2. **Dynamic `theme-color`:** when Phase I activates boot, update (or inject) `<meta name="theme-color">` to match **resolved** theme — not preference alone. Owner: theme boot / chrome sync path (extend `partials/theme-boot.html` or a tiny companion in the same injection slot — do not hand-edit 24 heads).
3. Manifest `theme_color` / `background_color` change in the **same PR** that turns on live resolve + dark CSS — not earlier.
4. Do **not** invent cool-blue splash (`#0a0a12` etc.). Founder rejected cool-blue canvas; base is `#121212`.

#### Ship commands (Phase I — do not run in Phase G)

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"

# 1. Edit site.webmanifest:
#    "theme_color": "#121212",
#    "background_color": "#121212"

# 2. Activate boot body in partials/theme-boot.html (sets data-theme + color-scheme
#    + syncs theme-color meta to #121212 | #fcfcfd per resolved)

# 3. Propagate:
npm run build:theme-boot && npm run build:layout-chrome
# or full: npm run build:site

# 4. Verify:
npm run check:theme-boot
# Expect: live pages set data-theme; theme-color meta matches resolved; splash #121212
```

---

### 5. G4 — Favicon / app-icon suitability

| Asset | Path | On dark OS chrome / splash |
|---|---|---|
| Favicon ICO | `favicon.ico` | Keep — full-color mark reads on light and dark status areas |
| Favicon PNG 16/32 | `images/logos/favicon-16.png`, `favicon-32.png` | Keep |
| Apple touch | `apple-touch-icon.png` / `images/logos/app-icon-ios-*.png` | Keep — iOS masks/pads; current blue mark on clear/light plate is acceptable |
| Android chrome 192/512 | `images/logos/android-chrome-192.png`, `android-chrome-512.png` | Keep — full-color on transparent; OK on dark home screens for v1 |

**Decision:** **No new favicon / app-icon commission for theme v1.** Optional later: maskable Android icon with explicit safe-zone plate if install UX needs it — out of Phase G.

Head links (sample — home layout) stay as today:

```html
<link rel="icon" href="favicon.ico?v=6" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="images/logos/favicon-32.png?v=6">
<link rel="icon" type="image/png" sizes="16x16" href="images/logos/favicon-16.png?v=6">
<link rel="apple-touch-icon" href="apple-touch-icon.png?v=6">
```

---

### 6. What Phase G did **not** ship

- Live-resolving theme boot / customer `html[data-theme]`  
- Dark shell / Explore / editorial CSS value sets  
- Footer monitor / sun / moon pill  
- `site.webmanifest` dark splash values (deferred to Phase I)  
- Page `<meta name="theme-color">` live  
- Bank logo recolor or Explore plate hex changes (Phase F owns plate)  
- Education / legacy / `pages/_*.html` theming  
- Fixed-dark home islands  
- `filter: invert`  
- Full ink/frost dark hex table beyond founder surface ladder  

---

### 7. Gate checkboxes

- [x] `logo-h-dark-clear-781x173.png` present (781×173 RGBA)  
- [x] Optional SVG companion copied  
- [x] Swap hook in `partials/global-nav.html` + shell CSS  
- [x] `npm run build:nav` + `check:nav` green  
- [x] Light mark still default (no `data-theme` on live pages)  
- [x] `check:theme-boot` green / boot inert  
- [x] PWA / theme-color exact ship-time values documented  
- [x] Live manifest left white until theme activation  
- [x] Favicon / app-icon keep decision documented  
- [x] PREP-10 done  

---

### 8. Build / verify recipe (Phase G)

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"

# Asset already at:
# images/logos/logo-h-dark-clear-781x173.png

# After editing partials/global-nav.html:
npm run build:nav
npm run build:layout-chrome

# Verify:
npm run check:nav
npm run check:theme-boot
file images/logos/logo-h-dark-clear-781x173.png
# Expect: PNG 781 x 173 RGBA; nav sync OK; theme-boot inert fingerprint present
```

---

### 9. Next phases (do not execute here)

1. **H:** JS inject matrix / legacy policy  
2. **I:** Gate → dark token values + **activate** boot + footer icon pill + **ship** manifest/`theme-color` values from §4  

Machine record: `_dark-mode-phase-g-assets-ledger.json`
