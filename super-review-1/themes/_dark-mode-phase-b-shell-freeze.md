# Dark / Light / Default — Phase B shell freeze + light uniformity

**Date:** 2026-08-21  
**Repo:** `aoo-static-gh`  
**Job:** PREP-02 + PREP-03 + light drift map. Freeze light ownership. No dark palette, no footer pill, no boot.

---

### 0. Executive status

**Phase B complete.** The light color spine is frozen (named shell roles, mix-base, gap ownership, drift map, stop-bleed rule); dark theme values are not started.

---

### 1. Phase A inputs honored

| Lock | Honored how |
|---|---|
| Modes Dark / Light / Default(=system) | Contract unchanged; this phase does not implement |
| First visit unset → resolve **dark** (≠ Default) | Documented; no boot yet |
| `localStorage['shroffin-color-preference']` ∈ {dark, light, system} | Locked for later boot |
| Resolved look `html[data-theme="dark"\|"light"]` | Locked; no customer `data-theme` shipped |
| Control later: footer Cursor-style **icon pill** only (monitor / sun / moon; Default→Light→Dark; no Appearance title; aria Default\|Light\|Dark; owner `partials/site-footer.html`) | Recorded; **not** built |
| Home bands **follow theme** — no `data-theme-island="fixed-dark"` in v1 | PREP-08 audit fixed-dark policy **voided**; paints classified `themeable_home_follow` |
| v1 = 24 paths in `data/redesigned-pages.json` | Stop-bleed rule scopes to these + their CSS/JS |
| Out of v1: `css/style.css`, education, `pages/_*.html` | Exempt; do not delete education |

**Architecture:** same token **names**, later two value **sets**. Explore remains a second system (`--hlc-*`). No `--dark-*` parallel vocabulary.

---

### 2. Baseline counts

Re-verified from repo root on 2026-08-21 (live tree; not invented). Audit 2026-08-21 had 677 css hex — tree has drifted slightly downward; **Phase B uses live numbers**.

| Metric | Count | Notes |
|---|---:|---|
| Hex in `css/` | **633** | Prior audit 677 |
| `var(--token, #light)` in `css/` | **369** | Unchanged vs audit |
| `rgba(0,0,0…)` in `css/` | **98** | Prior audit 102 |
| `rgba(255,255,255…)` in `css/` | **49** | Prior audit ~48 |
| `color-mix(` in `css/` | **12** | Shell 2, Explore 6, editorial 3, style.css 1 |
| Customer-facing `data-theme` (excl. super-review / node_modules / golden) | **0** | Confirmed |
| Phase B deliverable files before this job | **absent** | Created fresh (no fork) |

**Top hex files (`css/`):**

| File | Hex matches |
|---|---:|
| `css/shroffin-explore-banks.css` | 271 |
| `css/shroffin-apply.css` | 89 |
| `css/shroffin-editorial.css` | 67 |
| `css/shroffin-shell.css` | (after Part 4: mix-base + promoted defs; still light-only) |
| `css/shroffin-calculators.css` | 31 |
| `css/style.css` | 28 |
| `css/shroffin-product-demo.css` | 26 |
| `css/shroffin-home-calm-phone.css` | 17 |
| `css/shroffin-utility-pages.css` | 16 |
| `css/shroffin-guide.css` | 14 |

**Hottest light-fallback files:** Explore 203, Apply 60, editorial 37, calculators 28, utility 12.

**JS inject owners (drift / policy only — no rewrite):**

| File | Role |
|---|---|
| `js/aoo-loan-table-standalone.js` | `SCOPE_CSS` full light private tokens + white cells |
| `js/apply-flow.js` | Modal/toast `--aoo-*` + teal `#0d9488` |
| `js/apply-button-iframe.js` | Floating buttons `#0d9488` / `#e2e8f0` |

---

### 3. Shell role freeze table

All color-ish roles in `css/shroffin-shell.css` `:root` after Phase B. **Dark twin later?** = same name, second value set under `html[data-theme=dark]` (values not invented here).

| token | current light value | purpose (plain) | used by | dark twin later? | risk if skipped | notes |
|---|---|---|---|---|---|---|
| `--shroffin-ink` | `#1d1d1f` | Main text | body, nav, forms, most stacks | yes | Unreadable / wrong contrast | Canonical primary ink |
| `--shroffin-ink-soft` | `#3a3a3d` | Softer body / lead ink | **Promoted** (editorial/about/stance still hardcode same hex until Phase E) | yes | Soft ink stays private forever | New in Phase B; do not invent competing softs |
| `--shroffin-ink-strong` | `#000000` | Full-strength chrome hover when rest is already ink | nav flyout / compact / disclaimer | yes — dark `#ffffff` | Hover stays blue forever | Darker (light) / brighter (dark); not link blue |
| `--shroffin-muted` | `#6e6e73` | Secondary / fine print | shell + stacks | yes | Fine print wrong on dark | |
| `--shroffin-quiet` | `rgba(0,0,0,0.56)` | Quiet chrome text (softer than muted) | footer body, Explore help “i” rest | yes — dark `rgba(255,255,255,0.45)` | Footer/help marks stay black on dark | Was hardcoded on `.site-footer`; do not invent parallel quiet rgba |
| `--shroffin-ghost` | `#c5c9cf` | Large decorative numerals | **Promoted** (mag/about still local until E) | yes | Ghost type disappears or chalks | |
| `--shroffin-blue` | `#0071e3` | Brand / accent blue | accents, icons, focus twin | yes — dark `#0A84FF` | Brand chrome wrong | ≠ link blue; ≠ filled CTA on dark |
| `--shroffin-btn-primary` | `#0071e3` | Primary button **fill** | elevated CTAs | yes — dark `#edecec` | CTAs wrong | Light: Apple Buy blue. Dark: Cursor marketing pill (`--color-theme-fg`) |
| `--shroffin-btn-primary-hover` | `#0076df` | Button hover fill | buttons | yes — dark `#d7d6d5` | | Dark: Cursor `--color-theme-fg-02` |
| `--shroffin-btn-primary-active` | `#006edb` | Button pressed fill | buttons | yes — dark `#edecec` | | Dark: Cursor returns to rest fill on `:active` |
| `--shroffin-btn-primary-fg` | `#ffffff` | Label **on** primary fill | elevated CTAs | yes — dark `#14120b` | White text on white pill | Dark: Cursor `--color-theme-bg` |
| `--shroffin-btn-primary-disabled-bg` | `rgba(0,113,227,0.52)` | Disabled primary fill | apply dock etc. | yes — dark `rgba(237,236,236,0.40)` | | Soft fill; label stays `--shroffin-btn-primary-fg` |
| `--shroffin-btn-primary-shadow` | `none` | Rest elevation | buttons | yes | | Flat pill — no glow |
| `--shroffin-btn-primary-shadow-hover` | `none` | Hover elevation | buttons | yes | | |
| `--shroffin-btn-primary-shadow-active` | `none` | Active elevation | buttons | yes | | |
| `--shroffin-btn-secondary-bg` | `transparent` | Secondary rest fill | outline CTAs | yes | | |
| `--shroffin-btn-secondary-border` | `#0066cc` | Secondary rest border | outline CTAs | yes — dark `#edecec` | | Same colour as dark primary pill (not Cursor card-secondary) |
| `--shroffin-btn-secondary-fg` | `#0066cc` | Secondary rest label | outline CTAs | yes — dark `#edecec` | | |
| `--shroffin-btn-secondary-hover-bg` | `var(--shroffin-btn-primary-hover)` | Secondary hover fill | outline CTAs | yes — dark `#edecec` | | Fills to primary pill |
| `--shroffin-btn-secondary-hover-border` | `transparent` | Secondary hover border | | yes | | |
| `--shroffin-btn-secondary-hover-fg` | `var(--shroffin-btn-primary-fg)` | Secondary hover label | | yes — dark `#14120b` | | |
| `--shroffin-btn-secondary-active-bg` | `var(--shroffin-btn-primary-active)` | Secondary pressed fill | | yes — dark `#d7d6d5` | | |
| `--shroffin-btn-secondary-active-border` | `transparent` | Secondary pressed border | | yes | | |
| `--shroffin-btn-secondary-active-fg` | `var(--shroffin-btn-primary-fg)` | Secondary pressed label | | yes — dark `#14120b` | | |
| `--shroffin-link` | `#0066cc` | On-paper text links (Apple web link) | guide, utility, apply, nav/footer hover text | yes — dark `#2997FF` | Links collide with buttons or vanish | Intentional ≠ button fill; Back/text actions use link, not btn-primary |
| `--shroffin-link-active` | `var(--shroffin-link)` | Link active — same as rest | links | yes | | Hover/press via underline + same blue |
| `--shroffin-link-visited` | `var(--shroffin-link)` | Visited — same as rest | links | yes | | One main link blue |
| `--shroffin-link-external` | `var(--shroffin-link)` | Off-site link color | guide-section-link | yes | | Same family |
| `--shroffin-link-external-active` | `var(--shroffin-link)` | Off-site active | | yes | | |
| `--shroffin-link-external-visited` | `var(--shroffin-link)` | Off-site visited | | yes | | |
| `--shroffin-canvas-mix-base` | `#ffffff` | Mix destination for page surface wash | surface `color-mix` | yes | Silent dark-fail if raw `#fff` remains | **Phase B mix-base** |
| `--shroffin-footer-mix-base` | `#f4f6f8` | Mix destination for footer/band wash | footer `color-mix` | yes | Footer stays chalk under dark | Companion mix-base |
| `--shroffin-surface` | `#fcfcfd` then `color-mix(blue 0.75%, canvas-mix-base)` | Page canvas | body/pages | yes | White islands | Fallback hex `#fcfcfd` is light lock-in debt |
| `--shroffin-footer` | `#f5f7f9` then `color-mix(blue 1.5%, footer-mix-base)` | Footer / deep band | footer, calc wash, home demo band target | yes | Bands stay light | |
| `--shroffin-paper-note` | `#eef1f4` | Note / glance panel | **Promoted**; mag/about still hard until E | yes | Notes stay light grey | |
| `--shroffin-hair` | `rgba(0,0,0,0.12)` | Content hairline | **Promoted**; mag still local until E | yes | Lines vanish on dark | Soft family vs rule |
| `--shroffin-hair-soft` | `rgba(0,0,0,0.08)` | Softer hairline | **Promoted**; mag/guide localnav-adjacent | yes | | |
| `--shroffin-rule` | `rgba(0,0,0,0.16)` | Stronger chrome rule | shell chrome | yes | Hairlines invisible | Black-alpha assumes light paper |
| `--shroffin-focus` | `#0071e3` | Focus ring color | a11y | verify | Focus invisible | Usually OK if blue kept |
| `--shroffin-gn-frost` | `#f5f7f9` | Nav solid frost grey | globalnav | yes | Nav bar wrong | Same family as footer base |
| `--shroffin-gn-bg` | `rgba(245,247,249,0.8)` | Nav frosted glass | globalnav | yes | | |
| `--shroffin-gn-bg-fallback` | `rgba(245,247,249,0.96)` | Nav without blur | globalnav | yes | | |
| `--shroffin-gn-bg-open` | `rgba(245,247,249,0.92)` | Nav open / denser | globalnav, Explore nav alias | yes | | |
| `--shroffin-gn-veil` | `rgba(29,29,31,0.28)` | Dim behind open menus | globalnav | retune | Veil too light/dark | Ink-based alpha |
| `--shroffin-gn-border` | `rgba(0,0,0,0.05)` | Nav hair border | globalnav | yes | Border vanishes | Black-alpha |
| `--shroffin-gn-label` | ink @ 72% | Top-bar label rest | globalnav | yes | — | Never link blue |
| `--shroffin-gn-label-open` | `var(--shroffin-ink)` | Open flyout / current page | globalnav | yes | — | Selected / in use |
| `--shroffin-gn-label-hover` | `var(--shroffin-ink-strong)` | Top-bar hover | globalnav | yes | — | Darker light / brighter dark |
| `--shroffin-gn-option` | ink @ 72% | Flyout / compact option rest | globalnav | yes | — | Faded in open menu |
| `--shroffin-gn-option-hover` | `var(--shroffin-ink-strong)` | Flyout option hover | globalnav | yes | — | Darker light / brighter dark |
| `--shroffin-gn-option-value` | muted @ 88% | Flyout secondary line rest | globalnav | yes | — | |
| `--shroffin-gn-option-value-hover` | `var(--shroffin-ink-soft)` | Flyout secondary line hover | globalnav | yes | — | |
| `--shroffin-field-line` | `rgba(0,0,0,0.16)` | Underline field rest | Apply fields site-wide | yes | Fields disappear | |
| `--shroffin-field-line-focus` | `var(--shroffin-focus)` | Field focus line | fields | yes | | Follows accent, **never** primary fill (fill may be white on dark) |
| `--shroffin-field-line-invalid` | `rgba(176,76,76,0.65)` | Invalid field | fields | yes | Status unreadable | Keep semantic red family |
| `--shroffin-field-line-valid` | `rgba(29,122,58,0.45)` | Valid field | fields | yes | | Keep semantic green family |
| `--shroffin-field-placeholder` | `rgba(110,110,115,0.5)` | Placeholder | fields | yes | Placeholder chalk or vanish | Muted-based |

Non-color shell tokens (type, space, z, radii, durations) are out of this freeze’s dark map — unchanged.

---

### 4. Mix-base decision

| Item | Decision |
|---|---|
| **Primary name** | `--shroffin-canvas-mix-base` |
| **Light value** | `#ffffff` (today’s surface mix destination) |
| **Companion** | `--shroffin-footer-mix-base: #f4f6f8` (today’s footer mix destination) |
| **Rule** | Shell must not use raw `#fff` / `#ffffff` / `#f4f6f8` as `color-mix` destinations going forward |
| **CSS changed** | **yes** — `css/shroffin-shell.css` rewired surface/footer mixes to these tokens |
| **Appearance** | Light-identical: same percentages, same destinations via tokens |
| **Verify** | Visually / by formula: `color-mix(in srgb, #0071e3 0.75%, #ffffff)` ≡ mix with `var(--shroffin-canvas-mix-base)` when base is `#ffffff`; footer likewise with `#f4f6f8` |

Stack `color-mix(... #fff)` in editorial / Explore / legacy `style.css` remains debt for Phase E / out_of_v1 — not mass-retargeted here.

---

### 5. Gap ownership table

Exactly one owner per candidate: `shell_promote` | `stack_local` | `themeable_home_follow` | `out_of_v1`.

| Candidate | Owner | Token / note | Phase to wire |
|---|---|---|---|
| wash / paper-note (`#eef1f4`) | **shell_promote** | `--shroffin-paper-note` (named in shell; mag/about alias later) | E |
| hair / hair-soft | **shell_promote** | `--shroffin-hair`, `--shroffin-hair-soft` | E |
| ink-soft (`#3a3a3d`) | **shell_promote** | `--shroffin-ink-soft` (≥2 stacks) | E |
| ghost (`#c5c9cf`) | **shell_promote** | `--shroffin-ghost` | E |
| guide-card-surface `#f7f7f7` | **stack_local** | `--guide-card-surface` (editorial) | E |
| calc-paper / calc-hub-surface / calc-line* | **stack_local** | `--calc-*` on `.calc-page` | E |
| about note / soft inks | **shell_promote** for shared hexes; about may keep aliases | `--about-*` → shell names in E | E |
| home stance soft ink | **shell_promote** | `--stance-ink-soft` → `--shroffin-ink-soft` in E | E |
| home story paints `#1a1a1a`, `#0a0a0a`, light-on-dark `#f5f5f7` | **themeable_home_follow** | Reserve `--home-story-bg`, `--home-story-ink`, `--home-device-stage` (values later) | theme / home follow |
| phone / level-field / product-demo device chrome | **themeable_home_follow** | Same reserved home/device roles — **not** fixed-dark islands | theme |
| `--hlc-wash`, `--hlc-surface*`, row colors, lines | **stack_local** | Explore `--hlc-*` | F |
| `--hlc-rank-*` (helpful/costly/grace) | **stack_local** | Explore-owned; site-wide reuse **not** proven | F (+ PREP-15 contrast) |
| logo-plate for bank marks | **stack_local** | **Reserved name** `--hlc-logo-plate` (values later) | F / PREP-11 |
| apply hard `#fff` / `#1d1d1f` / status greens-reds | **stack_local** → prefer shell for ink/surface/fields; apply-local for leftover | Map in PREP-06 / Phase E: `--apply-ink-secondary`, `--apply-field-wash*`, `--apply-verify-wash*`, `--apply-blue-press`, `--apply-status-*`, `--apply-error-wash` (defs on `.hl-apply-page`) | E done |
| utility light fallbacks | **shell** consumers with fallback debt | Remove fallbacks after shell always loads; `--utility-sitemap-hover` → `var(--shroffin-ink)` (chrome, not link) | E done |
| legacy teal in apply-flow / apply-button-iframe | **out_of_v1** | `#0d9488` ≠ shell blue; education/legacy injectors | H |
| `aoo-loan-table-standalone` SCOPE_CSS | **out_of_v1** | Documented white-island risk | H |
| `css/style.css` education | **out_of_v1** | Leave light | — |

---

### 6. Light uniformity / drift map

Not a redesign. Freeze quality gate: one role = one meaning; near-duplicates documented; true intentional differences called out.

| role | canonical token (or NONE — drift) | canonical light value | places that match via token | places that hardcode same/near value | places that intentionally differ | severity | phase to fix |
|---|---|---|---|---|---|---|---|
| Page canvas | `--shroffin-surface` | mix → near `#fcfcfd` | shell body, Explore `--hlc-page-bg`, apply page bg, calc, about paper, utility, spd default | Fallback `#fcfcfd` everywhere; editorial `--mag-paper` aliases with fallback | Explore washes use white rgba panels on top of canvas | should_unify_later (fallbacks) | E |
| Footer / deep band | `--shroffin-footer` | mix → near `#f5f7f9` | shell footer; calc `--calc-wash`; about paper-deep | `.spd-section--home` hard `#f5f7f9`; gn-frost `#f5f7f9` solid | Footer mix-base `#f4f6f8` vs displayed `#f5f7f9` family — related, not identical | should_unify_later | E |
| Primary ink | `--shroffin-ink` | `#1d1d1f` | shell; many `var(--shroffin-ink)` | Apply ~23× hard `#1d1d1f`; about title hard; editorial `--mag-ink` hard same hex | Home story on-dark ink `#f5f5f7` (different role) | should_unify_later | E |
| Soft ink | `--shroffin-ink-soft` | `#3a3a3d` | shell (new); none aliased yet | `--mag-ink-soft`, `--about-ink-soft`, `--stance-ink-soft` all hard `#3a3a3d` | — | should_unify_later | E |
| Muted | `--shroffin-muted` | `#6e6e73` | shell + aliases | Apply ~13× hard; editorial `--mag-muted` hard same | Utility meta `rgba(0,0,0,0.56)` near-muted without token | should_unify_later | E |
| Link blue | `--shroffin-link` | `#0066cc` (dark `#2997FF`) | shell; utility; apply; nav/footer hover; mag-accent | — | Button blue `#0071e3` intentional | ok (Apple web link pair) | — |
| Button / brand accent | `--shroffin-blue` / btn-primary fill | blue light / soft-white dark | shell buttons; mag-accent-button aliases fill | Apply press aliases hover | Link `#0066cc` / `#2997FF` intentional; label = `--shroffin-btn-primary-fg` | ok (fill ≠ accent on dark) | — |
| Hairline (content) | `--shroffin-hair` | `rgba(0,0,0,0.12)` | shell (new) | `--mag-hair` same; `--calc-line` / `--apf-line` `rgba(29,29,31,0.12)` near-same | `--shroffin-rule` / field-line at 0.16 stronger chrome | should_unify_later | E |
| Hairline soft | `--shroffin-hair-soft` | `rgba(0,0,0,0.08)` | shell (new) | `--mag-hair-soft`; guide localnav border `rgba(0,0,0,0.08)` | Explore steel lines `rgba(108,128,155,…)` intentional Explore language | should_unify_later (guide→gn) | E |
| Nav frost | `--shroffin-gn-*` | `#f5f7f9` / rgba family | shell globalnav; Explore nav aliases | Guide `.localnav` hard `rgba(245,247,249,0.82)` / editorial `0.78` | — | should_unify_later | E |
| Note / wash panel | `--shroffin-paper-note` | `#eef1f4` | shell (new) | `--mag-paper-note`, `--about-paper-note` hard | `--guide-card-surface` `#f7f7f7`; `--calc-hub-surface` `#f5f5f7` — near family drift | should_unify_later | E |
| Guide card surface | `--guide-card-surface` | `#f7f7f7` | editorial stack_local | Fallback `#f7f7f7` repeated | paper-note `#eef1f4` cooler | ok (stack) until E decides merge | E |
| Rank helpful | `--hlc-rank-helpful-*` | ink `#0d652d` / bg `#e6f4ea` | Explore only | — | ≠ link/button greens elsewhere | ok (intentional Explore) | F |
| Rank costly | `--hlc-rank-costly-*` | ink `#a50e0e` / bg `#fce8e6` | Explore only | Apply status reds near but different hex | Semantic status ≠ rank chip | ok | F |
| Rank grace | `--hlc-rank-grace-*` | ink `#8a5a00` / bg `#fef7e0` | Explore only | — | | ok | F |
| On-dark story bg | NONE — drift / reserved `--home-story-bg` | `#1a1a1a` | — | `templates/layouts/home.html` / `index.html` `.home-story-dark` | Device stage `#0a0a0a` deeper void | should_unify_later (tokenise) | theme / home follow |
| On-dark story ink | NONE — reserved `--home-story-ink` | `#f5f5f7` | — | home layout inline; calm-phone copy | Light paper `#f5f5f7` calc hub — **same hex, opposite roles** | true_bug_risk if themed blindly | theme |
| Device stage void | NONE — reserved `--home-device-stage` | `#0a0a0a` | — | calm-phone, level-field, home feature visuals, product-demo chrome | Story band `#1a1a1a` slightly lighter | should_unify_later | theme |
| Explore table wash | `--hlc-wash` / surface | white alphas / `#fff` | Explore stack | Hard whites inside Explore | Shell canvas cooler soft blue | ok (second system) | F |
| Legacy teal accent | NONE — out_of_v1 | `#0d9488` | — | `apply-flow.js`, `apply-button-iframe.js` | Shell blue / link intentional product chrome | ok as known non-uniformity (legacy) | H / later |
| Mix toward raw white | shell fixed; stacks NOT | canvas-mix-base | shell surface/footer | editorial `color-mix(... #fff)`; style.css mix | Explore header mix uses page-bg (better) | should_unify_later | E |
| Light `var` fallbacks | debt | various | — | 369 css matches; Explore 203 hottest | — | should_unify_later | E |

#### Callouts (required)

**Near-black family drift (redesigned CSS):**  
Canonical ink `#1d1d1f` (~123 css matches) vs home voids `#0a0a0a` / `#1a1a1a` vs soft `#3a3a3d` vs apply `#424245` (~4) vs `#000` (~5). Soft and voids are different jobs; apply `#424245` is accidental near-muted/ink drift → unify in Phase E.

**Near-white / paper drift:**  
`#fff`/`#ffffff` (~64 combined), `#fcfcfd` (18), `#f5f7f9` (11), `#f5f5f7` (4 — **also** on-dark copy), `#f7f7f7` (6), `#eef1f4` (2), `#f4f6f8` (1 mix-base), `#f7f8fa` / `#f9fafc` (apply). One calm product should collapse chrome paper to surface/footer/paper-note/card roles in Phase E — not leave a hex salad.

**Blue vs link vs teal:**  
`#0071e3` (button) vs `#0066cc` / dark `#2997FF` (text link, Apple web pair) = **intentional**. Legacy `#0d9488` in JS injectors = **known non-uniformity / out_of_v1**, not “fine forever” and not shell.

**Black-alpha hairlines:**  
Assume light paper. Shell rule/field/gn-border + mag/calc/apf/guide/product-demo. Under dark they fail silently — remediate with token twins (Phase E + theme), not invert.

**`var(--x, #light)` lock-in debt:**  
**369** in `css/`. Hottest: Explore 203, Apply 60, editorial 37, calculators 28. Removing fallbacks is Phase E after shell always loads on redesigned paths.

---

### 7. Home theme-follow implication

**Phase A voids** the prep-audit PREP-08 “fixed-dark both themes” recommendation. Do **not** mark `data-theme-island="fixed-dark"` on home story / phone / demo for v1.

Today’s hard paints that must become **themeable roles** later (reserved names; no dark values now):

| Paint today | Where | Reserved role name |
|---|---|---|
| `#1a1a1a` story band | `templates/layouts/home.html` / `index.html` `.home-story-dark` | `--home-story-bg` |
| `#f5f5f7` on-dark copy | same + feature titles | `--home-story-ink` |
| `#0a0a0a` feature / device stage | `.home-feature-card` / `.home-feature-visual`, calm-phone, level-field | `--home-device-stage` |
| Bezel / titanium greys | `shroffin-home-calm-phone.css` | keep stack-local device chrome; follow theme as a set |
| Product-demo phone chrome dark family | `shroffin-product-demo.css` | follow theme with device set |
| `.spd-section--home` `#f5f7f9` | product-demo | alias `--shroffin-footer` / surface in E then theme |

Under Light after theme ships: these bands go light. Under Dark: dark. Current dark paint is OK until theme implementation.

---

### 8. Stop-bleed rule

**Path:** `.cursor/rules/shroffin-theme-token-discipline.mdc` (`alwaysApply: true`)

**Summary of forbids (redesigned surfaces):**

- No **new** raw light page-chrome hex (`#fff`, `#1d1d1f`, paper greys, etc.) — use frozen `--shroffin-*` or owned stack tokens listed in this freeze  
- No **new** black-alpha hairlines inventing private opacity recipes  
- No **new** `color-mix(... #fff / #ffffff / #f4f6f8)` — use mix-base tokens  
- No **new** `var(--token, #lighthex)` fallbacks on redesigned paths  
- No `filter: invert` theming  
- No `--dark-*` parallel names  
- No fixed-dark home islands; later control = footer icon pill only  
- Existing debt tracked by later prep phases — do not expand it  
- Exempt: `css/style.css`, education pages, `pages/_*.html`

---

### 9. Known non-goals / next phases

**Not done in Phase B (forbidden here):** dark CSS, footer theme pill, theme boot, logo swap, PWA theme shipping, mass stack retarget, education theming.

**Remaining path (order — do not execute now):**

1. **C:** ~~Boot injection owner~~ — **done** (`partials/theme-boot.html` + chrome sync; live stub inert). See `_dark-mode-phase-c-boot-injection.md`.  
2. **D:** *(skipped / void for islands)* — Phase A: home follows theme; no fixed-dark island work as previously audited  
3. **E:** Stack retarget while light — editorial, calc, guide, about, utility, apply hard paints, rgba/fallback remediation — **unify-light wiring phase**  
4. **F:** Explore `--hlc-*` dark-map plan + `--hlc-logo-plate` + contrast gate (PREP-15)  
5. **G:** Dark wordmark + PWA / `theme-color` plan — **done** (`_dark-mode-phase-g-assets.md`)  
6. **H:** JS inject matrix / legacy policy  
7. **I:** Gate → only then theme values + boot body + footer icon pill + ship PWA colors  

---

### 10. Gate checkboxes

- [x] Shell roles frozen  
- [x] Mix-base decided  
- [x] Gaps owned  
- [x] Light drift map complete  
- [x] Stop-bleed rule landed  
- [x] No dark/toggle/boot shipped  
- [x] Light appearance unchanged (shell mix-base + promoted unused tokens only; stacks not half-migrated)

---

### 11. No new private roles policy

Redesigned work **may not** invent new chrome color custom properties without updating this freeze file (`_dark-mode-phase-b-shell-freeze.md`) and ledger. New UI chrome must use frozen `--shroffin-*` or an already-owned stack token (`--mag-*`, `--hlc-*`, `--calc-*`, `--about-*`, `--apf-*`, `--apply-*`, `--guide-card-surface`, `--utility-sitemap-hover`, reserved `--home-*`, `--hlc-logo-plate`).

**Phase E additive note (2026-08-21):** Named apply-local leftovers (`--apply-*`) and `--utility-sitemap-hover` so hard paints are not scattered; values are today’s light hex only. No dark twins.

**Chrome hover note (2026-08-22):** Nav / footer / sitemap chrome uses ink emphasis on hover (`--shroffin-ink` from muted/translucent rest; `--shroffin-ink-strong` when rest is already ink). Body text links stay `--shroffin-link` (`#0066cc` / `#2997FF`).

**Phase F additive note (2026-08-21):** Explore `--hlc-*` color role freeze, light unify, `--hlc-logo-plate` (+ pad/radius/line), PREP-15 contrast gate, and dark-map plan live in `super-review-1/themes/_dark-mode-phase-f-explore-ownership.md` (+ ledger). Explore remains `stack_local` second system. No dark Explore values shipped.

**Explore card surface (2026-08-21):** `--hlc-card-surface` — light = page paper; dark Material raised `#1E1E1E`. Inputs card + intel share that step; field fills stay `--hlc-surface-strong` `#2C2C2C`. Dark `--hlc-card-lift` is soft ambient only (no hard second-box offset).

Machine record: `_dark-mode-phase-b-shell-freeze-ledger.json`
