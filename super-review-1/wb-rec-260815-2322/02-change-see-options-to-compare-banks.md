# Change the form button from “See options” to “Compare banks”

They scroll the Loan inputs card, point at the outlined button, and say they have to change it to **Compare banks**. On screen in this recording the label is **See options**. That is a copy change, not a new control. Speaker B says “Okay, next.”

## Classification
- kind: issue | copy / CTA
- status: open in the review (recording shows See options). Later source `pages/explore-banks.html` `#hlc-see-options` already reads “Compare banks” — that is a later-file fact, not this clip shipping the fix.
- surface: explore-banks / form submit `#hlc-see-options` (class `home-hero-cta home-hero-cta-secondary`)
- viewport: 1366x768 @2x
- speakers: Speaker A states the change. Speaker B: “Okay.” then “Okay, next.” No disagreement. ASR is not diarized. Language tag `mr`.

## Session metadata
- folder: `wb-rec-260815-2322`
- recording id: `bcd9788e-d24d-4ab3-8482-49a528a01c2f`
- clip: 23 of 30
- started_at: 2026-08-15T17:52:41.328Z
- ended_at: 2026-08-15T18:01:46.586Z
- duration_ms: 545258 (~9 min 5 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 72
- event count: 149
- console: empty
- tabs: 1
- previous: `wb-rec-260815-2313` — last file there already points at this button as the next beat
- next: `03` in this folder (banks vs lenders), then `wb-rec-260815-2332`

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Control: blue-outline pill on the right of the Loan inputs / Adjust eligibility card. Replay: submit `#hlc-see-options`. Visible label in **every** screenshot of this session: **See options** (`0000.jpg`, `0003.jpg`–`0007.jpg`, `0051.jpg`–`0053.jpg`, `0070.jpg`).
- They do **not** click it. After Regular they scroll the card: **00:27.332** y=817, **00:28.097** y=875.5 (button in view), **00:31.030** y=303.5 (they say the change), **00:35.364** y=528.5, **00:37.529** y=700.
- Same card also has h1 **Explore banks.** — they are not renaming the page title here.
- Results chrome (**Apply once**, **Lenders** column) is a different button; not this ticket.

## What they said (faithful, complete)

**00:29.180–00:29.240** Speaker B:
> Raw ASR / corrected: “Okay.”

**00:30.120–00:33.900** Speaker A:
> Raw ASR: “We have come down from here. We have to change a button to compare banks.”
> Corrected: “We have come down from here. We have to change **the** button to **Compare banks**.”
> “Come down” = scrolled the form to the submit. Target label = **Compare banks** (title case as a button).

**00:35.100–00:36.200** Speaker B:
> Raw ASR / corrected: “Okay, next.”

**00:36.600–00:38.020** Speaker A:
> Raw ASR / corrected: “We have come down from here.”
> Repeat of the scroll landmark; they then pause and start the banks vs lenders talk (`03`).

They do not discuss Explore banks (h1 / homepage CTA), Apply once, or “Finding your options.” Only this form button.

## First-principles problem
- What must be true: the action that runs the comparison should *say* comparison — **compare banks** — not a vague “see options.”
- Root vs symptom: the control is already the compare submit (`#hlc-see-options`). The bug is the **words**, leftover from an older “see / finding options” story (`hlc-searching-title` still says “Finding your options.”).
- Constraints: they want the button to say Compare banks. They do not ask to change the searcher line, Apply once, or the page title in this beat.

## Directions they considered
- Only one: change **See options** → **Compare banks**.
- Lean: do it. “Okay, next.”

## Company / user / future thinking
- Customer language on this page is already **banks** in the h1 (“Explore banks.”). The submit should match that verb + noun: compare **banks**, not “options.”
- This sits next to the naming fight in `03`: they are about to notice the table says **Lenders** while the hero and this CTA want **banks**. Do not “fix” See options by switching it to Compare lenders unless `03` / `2332` settle that.
- Shroffin-today (startup-core): compare every home-loan **bank**, apply once. Homepage hero CTA in `index.html` is still **Explore banks** — not discussed here.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `pages/explore-banks.html` `#hlc-see-options`; product-demo frames still using “See options” (`pages/_product-demo-frame.html`, `partials/product-demo.html`) if those must stay in sync.
- Acceptance in their words: “change a button to compare banks.” Visible label **Compare banks**.
- What NOT to do: do not invent a second submit. Do not retitle the page. Do not fold this into the lenders debate.
- Open questions: should “Finding your options.” follow to “Finding banks” / “Comparing banks”? Unspoken.
- Related recordings:
  - continues_from: `01-sixty-lakh-property-how-many-options.md` (same scroll down the card); `wb-rec-260815-2313`
  - continues_in: `03-banks-vs-lenders-naming-philosophy.md`. `wb-rec-260815-2332` does not re-open this button.

## Evidence index
- `audio.vtt` 00:29.180–00:38.020
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.lrc` same span
- `events.json`: scroll y=817 / 875.5 / 303.5 / 528.5 / 700 at 27.33–37.53s; no click on the button
- `screenshots/0003.jpg`–`0007.jpg` — See options visible
- `replay.spec.ts`: no `#hlc-see-options` click
- Site at audit time: `#hlc-see-options` text “Compare banks” (recording-time UI was See options)
