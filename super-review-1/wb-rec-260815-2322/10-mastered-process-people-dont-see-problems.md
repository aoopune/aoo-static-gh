# They say they have mastered this process; people don’t see the problems they solved

After the sandwich / six-to-nine-months story (`09`), one founder says people **don’t know about the problems**; they **think it’s a problem**. Perfect. Then, three times: **I have mastered this process**. This is builder reflection, not a new control. Prior pass dumped this span into both `09` and `10` — this file is the perception close only.

## Classification
- kind: discussion | process / craft (not a UI ticket)
- status: resolved | not-a-bug (no change requested)
- surface: none new — still the stacked Explore banks view from `07` / `08`
- viewport: 1366x768 @2x
- speakers: Speaker A. Repeats “I have mastered this process.” No disagreement recorded. ASR not diarized. Language tag `mr`.

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
- previous: `09` (sandwich; six or nine months of learning the cut)
- next: `wb-rec-260815-2332` starts 2026-08-15T18:02:07.502Z (~21 s later) — Clear all, then “these tabs are the best”

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Same still as `08` / `09`: Adjust eligibility + Overview table (`0053.jpg`–`0069.jpg`). Last interaction: **08:51.102** click `th#hlc-th-bank … svg:nth-of-type(2)` — accessible name **Deselect all visible banks** (`0070.jpg` t=531507). Speech is not about that checkbox; the pointer is idle on the table they are praising.
- They never open Guide, never leave explore-banks.

## What they said (faithful, complete)

**08:37.610–08:48.490** Speaker A:
> Raw ASR: “I didn't say this. People don't know about problems. They think it's a problem. Perfect.”
> Corrected: they **didn’t have to announce** the architecture (`09` sandwich). **People don’t see the problems** this UI already removes; they may **mistake the table for a problem**. Then: **Perfect** (the fit, not a new issue).
> Unclear whether “they” = customers seeing a simple UI and assuming it’s trivial, or customers thinking the *loan* is the problem. Do not pick one meaning beyond the words.

**08:58.490–09:04.530** Speaker A:
> Raw ASR: “I have mastered this process. I have mastered this process. I have mastered this process.”
> Corrected: same, three times. End of clip. The timespan “for six or nine months” that precedes this refrain is in `09`.

They do not name a fix, a screen, or a rewrite. Next clip’s first product beat is Clear all / tabs praise — not this story.

## First-principles problem
- What must be true: the comparison table should feel obvious to the customer. The months of grouping, tabs, and strict rows should not show as complexity.
- Root vs symptom: not a bug. The “problem” they mention is **hidden work**, not a broken button.
- Constraints: do not add UI to explain how hard it was. `08` already said don’t send people to the Guide to learn the loan.

## Directions they considered
- None for the product. Lean: the process is mastered; the UI can stay looking simple (“perfect”).

## Company / user / future thinking
- User: they should feel the table is calm and complete (`06`–`08`), not that someone struggled for months.
- Company: six–nine months (`09`) to get column groups + tabs + edit stack is the craft behind “independent compare.” Customer copy still prefers **banks** (`03`); this beat is not a naming change.
- Future: session replay they planned in `03` is how they will check whether customers see problems. This clip does not start that plugin.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: none for this beat.
- Acceptance in their words: “people don’t know about problems”; “they think it’s a problem”; “perfect”; “I have mastered this process.”
- What NOT to do: do not add a “how we built this” story to the page. Do not treat sandwich/cooking as layout instructions (`09`). Do not reopen tabs or Lenders from this paragraph. Do not duplicate the sandwich / six-to-nine-months block here.
- Open questions: who “they” are in “they think it’s a problem” — customers vs later builders. Unspoken.
- Related recordings:
  - continues_from: `09-sandwich-six-to-nine-months-process-mastery.md`; `08-five-parameters-tabs-teach-the-home-loan.md`
  - continues_in: `wb-rec-260815-2332` (Clear all, then tabs are the best — new take, same page)

## Evidence index
- `audio.vtt` 08:37.610–08:48.490 and 08:58.490–09:04.530
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.lrc` / `audio.json` same spans (closing: “I have mastered this process” ×3)
- `events.json`: deselect-all t=531102 only click in this span
- `screenshots/0064.jpg`–`0071.jpg`
- `manifest.json` ended_at 2026-08-15T18:01:46.586Z; next folder `wb-rec-260815-2332` started_at 2026-08-15T18:02:07.502Z
