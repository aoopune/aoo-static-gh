# PROMPT — Ship locked HLC intelligence UI/UX to live explore-banks

**Use this prompt as the full task brief.** Implement deterministically. Do not improvise a different layout. Do not change match / tip / ranking logic unless this prompt explicitly allows a copy-only line.

**Visual source of truth (locked):**  
`/home/yash/Projects Etc & aoo/aoo-static-gh/pages/_hlc-intelligence-ui-demo.html`  
Open/compare: `http://127.0.0.1:8765/pages/_hlc-intelligence-ui-demo.html` (or local static server).

**Live targets:** explore-banks intelligence strip only (between Compare form and results table).

---

## 0) Goal (one sentence)

Replace the current “shadowed tip-card / uppercase pill” intelligence panel with the **locked demo UI/UX** — form above, intelligence **below** (never beside the form), quiet status, tips as the focus — **without breaking** matching, tip selection, status text generation, results table, filters, or compare flow.

---

## 1) LOCKED product decisions (do not reopen)

### Placement
1. Intelligence stays **below the input/form card**, **above** searching/results.
2. **Never** put form and intelligence side-by-side.
3. Natural **page scroll** — no `max-height` shell that crams form+intel into the viewport; no sticky form; no inner tip scroller as the primary design.

### Hierarchy (user-approved)
1. **Tips are the focus** — pattern locked and liked:
   - Horizon (e.g. `Before you apply`)
   - Heading (fact with ₹ / %)
   - Body (so-what)
2. **Status is a quiet lead-in** — NOT a big hero headline (user rejected oversized status).
3. Tight gap status → tips (~20–24px + hairline), not a large empty band.

### Visual language (locked)
1. Apple-leaning web: **type + space + hairlines** — not SaaS insight cards.
2. **No** left accent bars on tips.
3. **No** uppercase pill chips for horizon.
4. **No** floating soft box-shadow “card” behind the whole panel (`::before` shadow treatment must go).
5. **No** “AI / Insights / Intelligence” marketing titles for users.
6. Visible eyebrow OK: `From your matched list` (12px muted).
7. Provenance behind text control: **`About these figures`** (not ⓘ emoji badge).
8. Provenance copy (exact):  
   `From your matched banks on this search. Figures are indicative. Banks decide final terms.`

### Tip grid (locked)
| Viewport | Tips columns |
|---|---|
| Phone / narrow (`max-width: 733px`) | **1 column** |
| Tablet (`min-width: 734px`) | **2 columns** |
| Wide (`min-width: 1069px`) | **3 columns** |

Hairline dividers between columns/rows — not bordered mini-cards.

### Content / engine (locked — almost no change)
1. Keep `buildIntelligence` tip kinds, thresholds, `rupeeImpact` sort, **max 3 tips**.
2. Keep `buildStatusLine` / `buildStatusStory` sentences.
3. Keep `renderIntelligenceHtml` contract already in code: show panel if **status OR tips**; hide only if both empty.
4. Do **not** add confidence %, directives (“Apply now”), or force always-3 tips.
5. Tip object shape stays: `{ kind, horizon, heading, body, rupeeImpact }`.

### Motion
1. Keep calm reveal: soft ease-out; opacity finishes slightly before transform.
2. Prefer site motion tokens if present (`--shroffin-ease`, reveal band ~1.0–1.45s); else match demo: `cubic-bezier(0.22, 1, 0.36, 1)` / soft Apple curve — **not** snappy.
3. Respect `prefers-reduced-motion: reduce` (instant settle).

### Repo rules that bind this work
1. Permanent engineering only — no temporary hacks.
2. Responsive: phone + desktop; Shroffin nav breakpoint remains 834 for **other** page chrome; **intelligence tip columns** follow the locked demo breakpoints above (733 / 734 / 1069).
3. Do not surface education loan UI.
4. Do not invent new off-site link patterns here.

---

## 2) Files to touch (and only these unless golden/sync requires)

| File | Why |
|---|---|
| `content/pages/explore-banks.body.html` | Canonical body markup (if this repo builds pages from content) |
| `pages/explore-banks.html` | Live page markup OR rebuild via content pipeline — keep in sync |
| `css/shroffin-explore-banks.css` | Replace `.hlc-intelligence` … tip styles |
| `src/hlc-intelligence.js` | Render markup for tips + optional tips `hidden`; **no tip math changes** |
| `src/home-loan-compare.js` | Wire “About these figures” toggle if needed; keep `updateIntelligencePanel` flow |
| `js/home-loan-compare.bundle.js` | Rebuild via `npm run build:compare` (do not hand-edit bundle) |
| `tests/run-unit.js` | Only if render HTML selectors/tests need updating for new nodes |
| `content/_golden/...` | Only if `build:content --check` / bless workflow requires after body change |

**Do not** change match engine, enrichers, filters, table columns, or form fields for this task.

---

## 3) Markup contract (exact structure)

Replace the live intelligence section so it matches this structure (IDs must remain stable where JS already depends on them):

```html
<section
  class="hlc-intelligence"
  id="hlc-intelligence"
  aria-labelledby="hlc-intelligence-sr-heading"
  hidden
>
  <h2 class="visually-hidden" id="hlc-intelligence-sr-heading">
    From your matched list
  </h2>

  <p class="hlc-intel-eyebrow">From your matched list</p>

  <p
    class="hlc-intel-status"
    id="hlc-intel-status"
    role="status"
    aria-live="polite"
  ></p>

  <p class="hlc-intel-meta">
    <button
      type="button"
      class="hlc-intel-info"
      id="hlc-intel-info"
      aria-expanded="false"
      aria-controls="hlc-intel-provenance"
    >
      About these figures
    </button>
  </p>

  <p class="hlc-intel-provenance" id="hlc-intel-provenance" hidden>
    From your matched banks on this search. Figures are indicative. Banks decide final terms.
  </p>

  <ol
    class="hlc-intel-tips"
    id="hlc-intel-tips"
    aria-label="Facts from your matched list"
  ></ol>
</section>
```

### Markup rules
1. **Remove** always-visible `.hlc-intel-disclaimer` (moved into provenance).
2. Keep placement: after form `</section>`, before `#hlc-searching` / results.
3. Update both `content/pages/explore-banks.body.html` and `pages/explore-banks.html` (or regenerate pages correctly so they match).
4. Visually-hidden `h2` text: `From your matched list` (not “Three facts…”).

---

## 4) CSS contract (match demo; adapt to live tokens)

Rewrite the block starting at `/* ─── HLC Intelligence Panel */` in `css/shroffin-explore-banks.css`.

### Must remove
- `.hlc-intelligence::before` shadow plate
- Tip `border-left` accent
- Horizon pill styles (`text-transform: uppercase`, chip background, tiny 0.625rem uppercase)
- Large status hero sizing
- Huge margin/padding gap before tips (old `1rem` under status + card padding theater is fine to replace; tip list must not sit ~90px below status)

### Must implement (numbers from locked demo)

**Panel**
- Full width of compare column (keep sensible `max-width` consistent with form/results, e.g. existing `56rem` / page content width — do not invent a third width system).
- Background: transparent **or** same as page; if a surface is needed, use existing page/surface tokens — **no** multi-layer drop shadow.
- Padding roughly: desktop generous but calm (`~2–3.5rem` scale); phone tighter (`~1.5–2rem`). Prefer rem that match nearby explore-banks modules.
- Reveal: opacity + modest `translateY` (~8–12px), soft ease, `is-visible` class unchanged in meaning.
- `[hidden] { display: none !important; }`

**Eyebrow** `.hlc-intel-eyebrow`
- ~12px, weight 400, tertiary/muted color, margin-bottom ~12px

**Status** `.hlc-intel-status`
- ~17px phone / ~19px from 734px up
- `font-weight: 400`
- Secondary text color (muted) — **not** primary bold hero
- `max-width` ~42em
- line-height ~1.47
- margin-bottom: 0 (gap handled by tips border spacing)

**Meta / About** `.hlc-intel-meta` + `#hlc-intel-info`
- margin-top ~8px
- Text button: link color (use existing focus/link token if present, else `#0066cc` / site link)
- underline on hover; focus-visible ring
- min-height 44px on phone; auto on desktop

**Provenance** `#hlc-intel-provenance`
- ~14px, secondary, max-width ~34em, margin-top ~12px
- `[hidden]` hides it

**Tips list** `.hlc-intel-tips`
- `list-style: none`
- `margin-top: 20px; padding-top: 20px;` (+ hairline `border-top`)
- from 734px: `margin-top/padding-top: 24px`
- grid columns: 1 / 2 / 3 as table in §1
- when empty: `[hidden]` or empty with no extra border gap — hide list if no tips (`hidden` attribute from JS)

**Tip cell** `.hlc-intel-tip`
- Phone: stacked with bottom hairline; first tip little top pad; last no bottom border
- 734+: column hairlines + padding like demo (`padding` ~8px 36px 36px pattern)
- 1069+: 3-column hairline rules like demo (3n borders)

**Horizon** `.hlc-intel-horizon`
- block, ~12px, weight 400, muted, **sentence case**, **no** pill, **no** uppercase
- Kind modifier classes (`hlc-intel-horizon--cibil` etc.) may remain in HTML for future but **must not** restyle into chips unless they stay invisible/no-op

**Heading** `.hlc-intel-heading`
- ~17px phone / ~19px wider
- weight 600, primary text, tight line-height
- margin-bottom ~8–10px

**Body** `.hlc-intel-body`
- ~14px, secondary, line-height ~1.43
- desktop `max-width: ~22em`; phone full width

**Colors**
- Prefer existing `--hlc-text-*` / page tokens if they already match explore-banks.
- If mapping Apple demo hex, approximate:
  - primary `#1d1d1f` / existing primary
  - secondary `#6e6e73` / `#5f6368`
  - tertiary `#86868b` / `#80868b`
  - line `rgba(0,0,0,0.08)`-class hairline
- Do **not** introduce purple/glow/AI gradients.

---

## 5) JS / render contract

### `src/hlc-intelligence.js` → `renderIntelligenceHtml`
Keep show/hide logic:
- Hide panel if no status and no tips.
- Show if status and/or tips.

Update tip list rendering:
1. Same tip HTML shape (horizon + heading + body).
2. If `tips.length === 0`, clear list and set `tipsEl.hidden = true` (and remove leftover border gap via CSS `[hidden]`).
3. If tips exist, `tipsEl.hidden = false`.
4. Escape all dynamic strings with existing `escHtml`.
5. Do **not** change tip text generation functions for layout reasons.

### `src/home-loan-compare.js`
1. Keep `updateIntelligencePanel` calling `buildIntelligence` + `renderIntelligenceHtml` + `is-visible` double-rAF.
2. Add **one** durable listener for `#hlc-intel-info` toggling `#hlc-intel-provenance` `hidden` and `aria-expanded` (init once in `initPage` / existing intel setup). Reset provenance to closed when panel is hidden or on each successful re-render if that avoids stale open state — prefer: close provenance whenever panel is re-rendered or hidden.
3. Do not change compare submit, matching, filters, selection, or table logic.

### Bundle
After JS changes:
```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh" && npm run build:compare
```

### Content sync
If explore-banks is generated from `content/pages/explore-banks.body.html`:
```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh" && npm run build:content -- --write
```
(or the repo’s required write/bless path so `pages/explore-banks.html` matches). Do not leave body and page divergent.

---

## 6) Explicit non-goals (do not do)

1. Do not redesign the form/input card in this task.
2. Do not move intelligence beside the form.
3. Do not collapse tips / “1 more from your list” accordion (locked demo shows all tips up to engine max 3, in grid).
4. Do not raise engine max tips above 3.
5. Do not add charts, confidence %, guarantee badges, or Apply CTAs inside intelligence.
6. Do not change tip ranking or thresholds.
7. Do not rewrite brand copy system-wide.
8. Do not “improve” unrelated explore-banks CSS.
9. Do not leave temporary TODO/FIXME or commented dead CSS stacked on old rules — **replace** obsolete intelligence CSS cleanly.

---

## 7) Verify (must pass)

### Automated
```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh" && npm run build:compare && node tests/run-unit.js
```
Intelligence unit tests (T01–T25 area), especially:
- max 3 tips
- empty rows → empty status/tips
- status-only render still shows panel
- empty status+tips hides panel
- tip headings/bodies still have figures; no banned vague fillers

### Manual UI (deterministic checklist)
1. Open explore-banks, fill required fields, Compare.
2. Intelligence appears **below form**, **above** table.
3. Status is quiet (not huge).
4. Tips look like demo: horizon / bold fact / body; **no pills**, **no left bars**, **no shadow card**.
5. Phone (~375): tips **1 column**; status→tips gap tight.
6. ~800px: tips **2 columns** with hairlines.
7. ~1200px: tips **3 columns** with hairlines.
8. “About these figures” toggles provenance; closed by default.
9. Status-only case (if you can force 0 tips in tests or a profile): panel still shows status; tips list not leaving a bald border.
10. New Compare updates text; reduced-motion: no long motion.
11. Filters / table / Apply once / co-applicant still work — **unchanged**.

### Visual parity
Side-by-side compare locked demo vs live strip: same hierarchy and spacing spirit. Live page may use Shroffin fonts (Google Sans Flex) — **do not** switch whole site to SF Pro; only match structure, weight, size scale, color roles, and spacing.

---

## 8) Definition of done

- [ ] Markup matches §3 in content + live page
- [ ] CSS matches §4; old intelligence card styles removed
- [ ] Render + About toggle match §5; tip logic unchanged
- [ ] Bundle rebuilt; unit tests pass
- [ ] Manual checklist §7 green
- [ ] No regressions in compare/results
- [ ] Demo file `_hlc-intelligence-ui-demo.html` left as reference (do not delete)

---

## 9) Implementation order (deterministic)

1. Update HTML structure (content body + page / build:content).
2. Replace intelligence CSS block completely.
3. Adjust `renderIntelligenceHtml` for empty tips `hidden` + keep status-only.
4. Wire About toggle in `home-loan-compare.js`.
5. `npm run build:compare`.
6. Run unit tests; fix only what this change broke.
7. Manual verify §7.
8. Stop. Do not drive-by refactor.

---

## 10) Architecture note (why this is sound)

- **One presentation owner:** CSS + thin render HTML — computation stays in `buildIntelligence`.
- **Stable IDs:** `#hlc-intelligence`, `#hlc-intel-status`, `#hlc-intel-tips` preserved for existing callers.
- **Progressive disclosure:** provenance on demand (Flights fundamental) without changing tip math.
- **Fail closed on empty:** hide only when nothing to say; status-only still informs.

If anything in the live page conflicts with the locked demo, **prefer the locked demo UI** for the intelligence strip only, while preserving live form/table behavior.
