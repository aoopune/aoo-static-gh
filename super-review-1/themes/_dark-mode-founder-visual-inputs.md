# Dark / Light / Default — Founder visual inputs lock

**Date:** 2026-08-21  
**Repo:** `aoo-static-gh`  
**Job:** Lock founder visual / asset inputs for later theme build. **No dark CSS, boot, footer pill, or logo copy in this job.**  
**AskQuestion:** Unavailable this session — decisions collected in chat.

---

### 0. Status

**Founder visual inputs locked** (all decision clusters answered).

Still owed for later ship (not blocking this brief):

- [x] Copy dark nav wordmark into the website folder (Phase G) — **done** (`images/logos/logo-h-dark-clear-781x173.png` + nav swap hook)
- [x] Exact dark blue hex twin (family locked; CTAs = Apple Buy `#0071e3`/`#0076df`/`#006edb` flat; accents `#0A84FF`)
- [ ] Exact rank chip hex pairs on dark (meaning locked; numbers at Explore dark-map + PREP-15)
- [x] Exact PWA `background_color` / `theme-color` values — **planned in Phase G** (ship `#121212` with theme activation; live manifest still white until Phase I)

---

### 1. Already locked (Phase A / B pointer)

Do **not** reopen without founder insistence:

| Lock | Source |
|---|---|
| Modes: Dark / Light / Default(`system`); first visit unset → **dark** | Phase A |
| Control: footer icon pill only (monitor / sun / moon); no Appearance title | Phase A |
| Home bands (story, phone chrome, product-demo): **follow theme** — no `data-theme-island="fixed-dark"` | Phase A |
| v1 = 24 redesigned pages; education / legacy / `pages/_*.html` out | Phase A |
| Architecture: tokens + `html[data-theme]`; no invert; same names, two value sets | Phase A + audit |
| Shell **role names** frozen (light values only); dark twins later | Phase B |

Briefs: `_dark-mode-phase-a-product-brief.md`, `_dark-mode-phase-b-shell-freeze.md`.

**Home bands confirmation (this job):** Founder inputs **reconfirm** Phase A — home story / device chrome / product-demo **follow theme**. No change.

---

### 2. Dark mood decision

**Chosen:** Google Material–style dark surfaces (founder-supplied), calm charcoal family — **not** cool-blue near-black, **not** pure cinematic `#000` UI canvas.

**Founder surface stack (locked as guidance for canvas / raised layers):**

| Role | Hex |
|---|---|
| Base canvas | `#121212` |
| Raised step 1 | `#1E1E1E` |
| Raised step 2 | `#2C2C2C` |
| Raised step 3 | `#383838` |

**Plain language for design/engineering:** Dark should feel like Google’s Material dark grey ladder — quiet, soft elevation steps — not a blue-tinted night sky and not a pure black movie screen. Keep the overall calm of today’s light product (Material elevation is calm by nature).

**Rejected / not chosen:** Soft cool-blue near-black (original recommend A); neutral-only without Material hex; deeper pure-black cinematic UI.

**Note:** These hexes lock **mood + surface ladder**. Full shell dark twin table (ink, frost, hairlines, etc.) is still chosen at final theme build after prep gate I — do not invent the whole palette here.

---

### 3. Blues / accents on dark

**Chosen:** Same brand blue **family**. Filled primary pills match Apple Buy **exactly** on light and dark (`#0071e3` / `#0076DF` / `#006EDB`, flat). Accent / link / icon blue on dark stays the brighter twin `#0A84FF`.

| Context | Rule |
|---|---|
| Light UI / brand blue | Keep exact `#0071e3` (see §7 extras) |
| Dark filled buttons (CTAs) | Same as light — Apple filled Buy (not brighter) |
| Dark accents / links / icons | Brighter twin `#0A84FF` |
| Samples | Not required now; engineer proposes candidates when building dark value set |

**Research note (informing choice):** Apple keeps filled `.button` at `rgb(0,113,227)` under `.theme-dark`; `systemBlue` / link blues go brighter. Shroffin follows that split.

---

### 4. Wordmark asset plan

**Chosen:** Use existing brand-kit horizontal lockup **`logo-h-on-black`** (white wordmark + blue mark). Ready now — no new commission.

| | Path |
|---|---|
| Source SVG | `etc/creatives/brand/images/logos/svg/logo-h-on-black.svg` |
| Source PNG (nav-sized) | `etc/creatives/brand/images/logos/png/logo-h-on-black-781x173.png` |
| Website target (later copy) | `aoo-static-gh/images/logos/logo-h-dark-clear-781x173.png` |

**Backup (not chosen):** `logo-h-white-clear` (all-white mono).

**Not for dark nav:** wordmark-only assets; light/black wordmarks; baked “on-dark” preview plates as primary nav src.

**Phase G (2026-08-21):** File **is** in `aoo-static-gh/images/logos/logo-h-dark-clear-781x173.png`. Logo swap hook landed in `partials/global-nav.html` (CSS dual-img; light default while boot inert). Live theme boot still Phase I.

**Unused today on site:** `logo-mark-white-clear-*` remains mark-only; not the nav wordmark plan.

---

### 5. Bank logo plate

**Chosen:** **Light plate** behind each bank mark on dark Explore (PREP-11).

- Do not recolor bank assets.
- Plate role already reserved in Phase B / Explore ownership (`--hlc-logo-plate` or equivalent).
- Exact plate hex later with Explore dark-map.

---

### 6. PWA / splash / theme-color direction

**Chosen:** **Dark-first** splash / background to match first-visit dark.

| Today | Direction / ship values (Phase G lock) |
|---|---|
| `site.webmanifest` `background_color: #ffffff` | **Ship with Phase I:** `background_color: #121212` (dark-first). Live file stays white until theme activation (no dark-splash → light-site mismatch). |
| Browser `theme-color` / chrome sync | **Ship with Phase I:** meta `theme-color` = `#121212` (resolved dark) / `#fcfcfd` (resolved light); manifest static fallback `#121212`. |

Dual light/dark splash at ship time was **not** chosen as the v1 direction; dark-first is the product default alignment. Full plan: `_dark-mode-phase-g-assets.md`.

---

### 7. Rank chips direction

**Chosen:** Keep meaning colors (helpful green / costly red / grace amber), **retuned for dark contrast** (PREP-15 gate: WCAG AA text ≥ 4.5:1). Exact hex at Explore dark-map — not invented here.

Softer / less colorful on dark was **not** chosen.

---

### 8. What engineering still must NOT do

Until prep gate **Phase I** (and remaining must-before-build PREPs):

- No dark CSS value sets shipped to customers  
- No live-resolving theme boot / `data-theme` activation beyond inert Phase C injection slot  
- No footer theme pill UI  
- No inventing a full dark hex table beyond founder-locked surface ladder + rules above  
- No invert / parallel `--dark-*` vocabulary  
- No live dark splash / `theme-color` ship while the visible site is still light-only (Phase G documents values; Phase I ships)

These inputs feed **Phase G (assets — done)** + **final theme build** after prep.

---

### 9. Open blockers for founder

- [x] Dark mood / surface ladder  
- [x] Blue-on-dark rule (filled CTAs = Apple Buy flat; accents brighter `#0A84FF`)  
- [x] Wordmark source chosen (`logo-h-on-black`)  
- [x] **Copy** wordmark into `aoo-static-gh/images/logos/logo-h-dark-clear-781x173.png` (Phase G done)  
- [x] Bank logo plate rule  
- [x] PWA splash direction (+ Phase G exact ship-time hex plan)  
- [x] Rank chips direction  
- [x] Light brand blue hard lock  

Optional later: approve proposed dark blue twin hex and rank chip pairs when engineering shows samples.

---

### 10. For engineering (compact box)

```
MOOD:                 Material dark surfaces; calm charcoal (not cool-blue, not pure #000 canvas)
SURFACE_BASE:         #121212
SURFACE_RAISED:       #1E1E1E → #2C2C2C → #383838  (elevation ladder guidance)
BLUE_LIGHT:           exact #0071e3 (must keep on light)
BLUE_DARK_ACCENT:     #0A84FF (links/icons/accents)
BLUE_CTA:             #0071e3 / hover #0076df / active #006edb — flat, light+dark (Apple Buy)
WORDMARK_SRC:         etc/.../logo-h-on-black.svg | png/logo-h-on-black-781x173.png
WORDMARK_DST:         images/logos/logo-h-dark-clear-781x173.png (Phase G landed + nav CSS swap hook)
BANK_LOGOS_DARK:      light plate behind marks; do not recolor assets; --hlc-logo-plate
PWA_SPLASH:           dark-first #121212 at Phase I ship; live manifest white until then (Phase G plan)
THEME_COLOR_SHIP:     dark #121212 / light #fcfcfd meta; manifest fallback #121212 (Phase I)
RANK_CHIPS:           keep green/red/amber meaning; retune for dark; PREP-15 AA gate
HOME_BANDS:           follow theme (Phase A reconfirmed)
NO_FULL_PALETTE_YET:  ink/frost/hair/link twins beyond above — after prep I
```

Machine record: `_dark-mode-founder-visual-inputs-ledger.json`  
Phase G brief: `_dark-mode-phase-g-assets.md`
