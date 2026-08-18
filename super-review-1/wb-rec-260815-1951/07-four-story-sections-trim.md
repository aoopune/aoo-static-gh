# Do we need these four dark story slides, or can we trim some?

After sitting in the zeros and “Best of all” blocks, they pull the camera back. The homepage has **four** of these big dark story slides. Do we need all four? Can we cut some? That is a structure question, not a typo. They do not name which slide to kill in this clip. They scroll back to the first slide to see what unique information actually lives there (`08`).

## Classification
- kind: product-thinking
- status: open
- surface: homepage / `.home-story-dark` — four stacked sticky sections: `home-lead`, `home-clear`, `home-zero`, `home-best`
- viewport: 1366×768 @2x
- speakers: Speaker A raises the concern. Speaker B does not answer in this clip. No vote.

## Session metadata
- folder: `wb-rec-260815-1951`
- recording id: `ce85813c-385e-4259-a46a-98178da92985`
- started_at: 2026-08-15T14:21:00.929Z
- ended_at: 2026-08-15T14:29:32.515Z
- duration_ms: 511586
- start_url: `http://localhost:8765/`
- hosts: `localhost:8765`
- events: 91 · screenshots: 62 · console: 0 · tabs: 1
- viewport: 1366×768, device_scale_factor 2

## Where on the page
- URL: `http://localhost:8765/`
- They ask this **while still visually on** `section.home-best` (`0042.png`, t=350218 — spam / hard sell / pushy notifications still filling the viewport).
- Then they **scroll back up** through the dark column (and briefly past “Built around you.”) to the first story slide:
  - **06:05.739** (`t=365739`) y=**1168.5**
  - **06:12.106** (`t=372106`) y=**1608**
  - **06:15.306** (`t=375306`) y=**1257**
  - **06:18.440** (`t=378440`) y=**1651.5**
- Screenshots of the jump:
  - `0042.png` — still Best of all when they ask “four sections”
  - `0043.png` (t=358218) — **pass-through**, not a topic: leftover dark band over white “Built around you.” + guides accordion. They do **not** talk about Built around you.
  - `0044.png` (t=366218) — dark block with only “We completely re-engineered your home loan journey.” high on the left (early lead scrub)
  - `0045.png` (t=374219) — four-line story stack
- The four sections they mean, in page order (`pages.json` / `index.html`):
  1. `section.home-lead` — “We completely re-engineered your home loan journey.” + three lines
  2. `section.home-clear` — “Transparent, like never before.”
  3. `section.home-zero` — “Zero commissions. Zero bias.”
  4. `section.home-best` — “Best of all, you can look through…”
- They do **not** name “Transparent” out loud here. Next clip does.

## What they said (faithful, complete)

**05:56.700–06:05.280** Speaker A:
> Raw ASR: “Now, I have a concern that these four sections do we need these four sections?”
> Corrected: same. Concern, not a decision: are all four needed?

**06:07.840–06:10.260** Speaker A:
> Raw ASR: “Can we trim some of these sections?”
> Corrected: same. Trim is on the table. They do not name which ones to cut in this clip.

**06:11.780–06:16.020** Speaker A:
> Raw ASR: “Now, this section basically,”
> Corrected: they turn to **this** section — and the next speech is the re-engineered journey (they have scrolled to `home-lead`). The four-section question stays open; they inspect the first slide for unique information (`08`).

They do not vote to delete a specific slide here. They do not mention footer, nav, or Built around you as part of the four.

## First-principles problem
- What must be true: each big homepage slide should earn its height with **unique** information. Four sticky chapters is a lot if some only repeat.
- Root vs symptom: length / fatigue is the symptom. The root is whether four beats are four facts or one fact restated.
- Constraint: they still like a coherent story (1929 praise; they repeat “coherent story” at the end of this clip in `08`). Trim ≠ throw away the plot.

## Directions they considered
1. Keep asking: do we need all four?
2. Trim some.
3. Immediate next move: go back to the first section and inventory unique info rather than cutting blind.
- Pros of four: each slide currently has a different heading (journey / transparent / zeros / pace).
- Cons: they have just spent minutes unpacking zeros and “best of all”; they already suspect overlap. 1929 already doubted the Transparent body lines.
- Lean: open structural question. Next clip (`2000`) gets specific (Transparent may not deserve a whole slide; six unique points; “the analogy of four sections”).

## Company / user / future thinking
- User: four full-viewport dark slides in a row is a long sit before tools and guides.
- Company: the homepage’s job is to tell the independence + journey story without a lecture. Extra slides that don’t add a new fact cost attention.
- Future: they want consolidation. 2000 says the goal of the whole activity is consolidation; this clip is the first time they **count** “four sections.”

## Fix metadata
- Code owners: `.home-story-dark` and the four sections in `index.html` / `content/pages/home.body.html` (`home-lead`, `home-clear`, `home-zero`, `home-best`), plus their scrub CSS/JS.
- Acceptance in their words: answer “do we need these four sections?”; “can we trim some?” — they did not pick which in this clip.
- What NOT to do: do not delete all four. Do not merge blindly without the unique-info inventory they start next. Do not restyle Built around you because `0043.png` flashed it. Do not treat this clip as “they decided to kill Transparent” — they didn’t name it here.
- Open: which of the four (especially Transparent — named in 2000, not here) can go or shrink.
- continues_from: `wb-rec-260815-1929` liked story **coherence** and already doubted Transparent’s “so you find what works” / “with no surprises” (skip or redesign that section). This clip generalizes to **all four**.
- continues_in: `wb-rec-260815-2000` `01-transparent-slide-unnecessary.md`, `04-four-lead-texts-heavy-transparent-in-middle.md`, `05-refactor-six-points-into-a-story.md` — “the analogy of four sections” vs six points.

## Evidence index
- `audio.vtt` 05:56.700–06:16.020
- `audio.txt` / `audio.text` / `audio.tsv` same span
- `events.json` scrolls t=365739–378440 from y=5611.5 up to ~1651
- `screenshots/0042.png` (still on Best of all when they ask), `0043.png` (pass-through), `0044.png`–`0045.png` (arrived at lead)
- `pages.json` four story headings
- Site `index.html` `.home-story-dark` children
