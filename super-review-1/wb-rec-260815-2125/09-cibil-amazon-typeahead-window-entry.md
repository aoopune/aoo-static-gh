# CIBIL entry should type-ahead like Amazon and tell them it is a window

After the exact-vs-window fight they switch to **how** the person puts a score in. Today you type a number and nothing opens. They want typing **766** (or even **7**) to open **dropdown suggestions** — like Amazon search (type “football,” see “24 inches”). **Here we talk range but do not give a dropdown.** Either **select** the dropdown **or write the range**, and you must **tell them it is a window**. **If you only type it, the window will not open.** The clip dies mid-Amazon: **when you type F, it freezes.** Next recording picks up Amazon formatting, then ranges again.

## Classification
- kind: issue | form UX (entry / typeahead)
- status: open (unfinished; continues next clip)
- surface: Explore banks / `form#hlc-inputs` / `#hlc-cibil` (text input, no listbox; `#hlc-cibil-note` empty)
- viewport: 1366x768 @2x
- speakers: Speaker A proposes Amazon-style search and 5–5 suggestion lists. Speaker B answers (yes / where / select vs type). Same two people as `01`. This is the **control**, not the rate-matching logic.

## Session metadata
- folder: `wb-rec-260815-2125`
- recording id: `ba64f48a-197b-40a6-883c-3d23b6cf8313`
- started_at: 2026-08-15T15:55:21.859Z
- ended_at: 2026-08-15T16:04:20.986Z
- duration_ms: 539127 (~8 min 59 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 70
- event count: 94
- console: empty
- tabs: 1
- previous: `wb-rec-260815-2116` — not this topic
- next: `wb-rec-260815-2134` `01` — they have **cracked** Amazon: typed digits **normal** weight, untyped **extra** weight (~8.5 s after this clip ends)
- ASR: no Sibyl in this block; **Amazon** p≈0.81 / 0.93; **freezes.** p≈0.61 (sentence incomplete)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Same CIBIL text box as `01`. From **07:36** they are still staring at `#hlc-cibil` = **780**; they do not type 766 or 7 (no `input` events in `events.json`).
- Click: last `#hlc-cibil` click this session is **05:43.335** (`0047.jpg`) — before `07`/`08`. This Amazon block is idle (`0058.jpg`–`0069.jpg`).
- What the JPEGs show: still a single numeric field, no suggestion list, no “window” hint under the box (`#hlc-cibil-note` is empty). That absence is the point (“here we give a range but do not give a dropdown”).
- End frame `0069.jpg` (t=534192): same 780, blue underline leftover, Self-employed / Regular, Overview headers.

## What they said (faithful, complete)

**07:36.560–07:49.560** Speaker A:
> Raw ASR: “When a person puts 766, then the drop downs are open. When he puts 7, then the next 5-5 drop downs of 7 are open. And then it keeps decreasing.”
> Corrected: Type **766** → **dropdowns open**. Type **7** → the next **5–5** dropdowns **of 7** open (five-point-style suggestions under 7xx), then the list **narrows**. This is the same 5–5 family as `03`.

**07:51.340–08:00.900** Speaker A:
> Raw ASR: “There are such searches on Amazon. If you put a football, the football is 24 inches. In the next HS selection, all such things are selected.”
> Corrected: **Amazon search:** type **football**, you get **football, 24 inches** (and similar). ASR **“HS selection”** p≈0.66 ≈ **this / search selection** — those suggestions get selected. Analogy only; they are not adding Amazon to the site.

**08:04.980–08:10.100** Speaker A, B:
> Raw ASR: “And here we give a range but do not give a drop down. Where?”
> Corrected: **Here we [talk] range but do not give a dropdown.** B: **Where?** (on this field — there isn’t one).

**08:12.140–08:33.500** both:
> Raw ASR: “Like now, if you put 766, then the bottom is open. But the person who has seen it before will think that you should put it in action. But you should not put it in action. How do you tell him? You have to select it in the drop down. For that, you have to tell him that you have to write it. You have to write the range. But you should not give him a drop down option.”
> Corrected: If you put **766**, **the bottom [list] is open**. Someone used to today’s box will think they must **put the exact in** (ASR **“in action”** p≈0.76/0.98). **How do you tell them?** Paths they name: **select in the dropdown**, or **tell them they have to write the range**. Then a pushback: **should not give a dropdown option** (vs the earlier “dropdowns are open” — they are still arguing the control).
> ASR: `bottom` p≈0.003 — “bottom is open” is likely **the list below**, not a new layout region.

**08:35.400–08:53.080** both:
> Raw ASR: “Either he should select the drop down. Yes, yes, yes. Or it should be very big. Yes, yes, yes. Here you should not give him a drop down option. But you have to tell him that this is a window. Yes, it is a window. If you type it, the window will not open. Like it is normally done in Amazon.”
> Corrected: **Either select the dropdown** — agreement — **or it should be very big** (the control / the list). Then again: **don’t [only] give a dropdown** — **tell them this is a window**. Agreement: **it is a window**. **If you [only] type it, the window will not open** (today’s field). **Do it like Amazon normally does.**
> ASR: `drop down option.` at 08:43–08:45 is near-zero probability on those three words — the **window** lines after it (p≈0.63–0.98) are the solid instruction.

**08:53.940–08:54.980** Speaker A (cut off):
> Raw ASR: “When you type F, it freezes.”
> Corrected: Amazon typeahead: **when you type F, it [fills / filters / shows]…** ASR **“freezes.”** Sentence is incomplete. Next clip starts: they **cracked the Amazon** behaviour — **typed text normal weight, untyped suggestion extra weight**.

## First-principles problem
- What must be true: if the product uses **windows** (`01`–`08`), the field must **show that it is a window** and help the person **land in a band** without pretending they typed a perfect 780.
- Root vs symptom: empty `#hlc-cibil-note` and a digits-only box are the symptom. Root: **no suggestion layer and no “this is a window” instruction**, so type-exact and pick-a-band fight in the same control.
- Constraints: Amazon is the **interaction** reference (progressive suggestions, 5–5 under “7”), not a shopping metaphor in the copy. Do not hide the window.

## Directions they considered
1. Type **766** → open dropdowns; type **7** → **5–5** suggestions that shrink.
2. Amazon search pattern (query + related sizes).
3. **Select** from dropdown **or write the range** — must be told which.
4. No dropdown at all, but still **tell them it is a window** — incomplete; they bounce between these.
5. Make the control **very big**.
- Lean: they want **visible window + typeahead**, not today’s silent 780. Exact widget (combo box vs two-step min/max) is **not chosen**. Continues in 2134 (Amazon font-weight, then min/max ranges).

## Company / user / future thinking
- User: may type **7** or **766** or only remember “around 750” (`07`). The UI should **meet the digits they have**, then **narrow**, like a search box — without implying they must know 780.
- Company: comparison only works if the entered band is **honest**. A typeahead that still maps to **bank windows** is the UX half of `01`/`05`’s rate problem.
- Future: `wb-rec-260815-2134` `01` continues Amazon (typed vs suggestion weight) and `02` continues **minimum / maximum** ranges. Do not implement Amazon chrome from this clip alone.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `#hlc-cibil` in `pages/explore-banks.html`; compare form JS (`data-hlc-format="digits"`); any new listbox must stay the **one** CIBIL control, not a second score widget.
- Acceptance criteria in their words: putting **766** (or **7**) **opens dropdowns**; **5–5** suggestions under 7 that **decrease**; **tell them this is a window**; either **select** or **write the range**; don’t leave “range” as talk with **no dropdown** on screen.
- What NOT to do: do not add a fake Amazon brand or “football” copy. Do not ship average/high chips (`02` rejected those). Do not treat “when you type F, it freezes” as a freeze/bug report.
- Open questions: combo box vs min+max (2134 `02`). How “very big.” Whether typing exact 766 still needs a window label.
- Related recordings:
  - continues_from: `01`–`08` in this folder (same session; this is the entry method after the rate/memory debate)
  - continues_in: **`wb-rec-260815-2134` `01`** — first lines are Amazon typeahead (font weight of typed vs pending characters), then CIBIL **min/max ranges** in `02`

## Evidence index
- `audio.vtt` 07:36.560–08:54.980 (ends mid-sentence)
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` same span (`Amazon` p≈0.81; `freezes.` p≈0.61; `window` p≈0.98)
- `events.json`: idle after last `#hlc-cibil` click t=343335; no `input` of 766 or 7
- `screenshots/0058.jpg`–`0069.jpg` — still 780, no list
- `pages.json` / `replay.spec.ts` — textbox `#hlc-cibil` only
- Site `pages/explore-banks.html` `#hlc-cibil` `inputmode="numeric"` `data-hlc-max-digits="3"`; `#hlc-cibil-note` empty
