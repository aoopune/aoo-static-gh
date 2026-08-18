# The table UX is a sandwich they spent six to nine months learning to cut

After “the UI fits,” they stop reviewing widgets and explain **how they got here**: making a sandwich — put a layer, cut, nothing extra to do — **learning** that process for **six or nine months**. Not a page ticket. File it so later work does not “simplify” the tab/column system as clutter. The close “people don’t see problems / I have mastered this process” is `10`.

## Classification
- kind: discussion | design-process / keep the model
- status: resolved | not-a-bug (no UI change asked)
- surface: explore-banks results table + tabs (same view as `07` / `08`); no new control named
- viewport: 1366x768 @2x
- speakers: Speaker A throughout. No Speaker B lines in this span. No disagreement. ASR not diarized. Language tag `mr`.

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
- previous: `08` (“the UI fits”)
- next: `10` (people don’t see the problems; mastered this process)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Still the Overview stack from `07` / `08`: form remnant / Adjust eligibility, Filters, **Lenders | Rate | Loan amount | Tenure | EMI**, Apply once. `0064.jpg`–`0069.jpg` identical periodic shots (t=486187–528187).
- No tab change, no Edit, no field edit in this span. The later Lenders checkbox click at 08:51 belongs to `10` (during “I have mastered this process”).
- They never open Guide. They never leave explore-banks.

## What they said (faithful, complete)

**08:13.090–08:24.890** Speaker A:
> Raw ASR: “I remember this. I remember... When I was making a sandwich... There was a sandwich. I put it here. I cut it. I didn't have to do anything.”
> Corrected: the tab/column system is like **making a sandwich**: **put** a layer **here**, **cut**, and then **there is nothing extra to do**. Analogy for a structure that **fits** (`08`), not a food feature. No sandwich UI on the page.

**08:26.890–08:36.670** Speaker A:
> Raw ASR: “I was learning. I put it here. I put it here. I was learning. I was learning.”
> Corrected: same. They **learned** this by placing pieces (columns/tabs) until the cut was clean.

**08:52.940–08:58.490** Speaker A (timespan; the mastery refrain continues in `10`):
> Raw ASR: “Cooking doesn't have to be like this. For six or nine months. That's what it is.”
> Corrected: **six or nine months** on this process. ASR **cooking** continues the sandwich metaphor; **coding** is a possible mishear — they already said sandwich. Do not invent a cooking UI.

They do not name a fix, a screen, or a rewrite in this span. Perception of customers (“people don’t know about problems”) and the triple “I have mastered this process” are `10`.

## First-principles problem
- What must be true: the compare table is **supposed** to feel inevitable (layer, cut, done). That calm is expensive. A later “cleanup” that flattens tabs into one giant grid would throw away the six-to-nine-month cut.
- Root vs symptom: user confusion (“this table is a lot”) may be **the unsolved industry problem showing up**, not a bug in the grouping they just locked in `06`–`08`.
- Constraints: do not add a tutorial overlay because they said people don’t know — that line is `10`. They chose **UX that teaches** (`08`), not a speech.

## Directions they considered
- None as a redesign. Direction is **keep the sandwich**: layers (tabs/columns) you can cut cleanly.
- Time cost they name: **six or nine months.** Treat as history, not a roadmap ticket.

## Company / user / future thinking
- Slow and deep (startup-core): they would rather **master one compare surface** than ship a snappier, dumber table.
- Customer in control still means **the customer may not thank the architecture**. Builders should not panic-delete tabs because a tester calls the grid “a problem” (`10`).
- `2332` does not continue the sandwich story; it continues tabs + numbers (age vs loan amount).

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: none for a new control. Any future change to `.hlc-column-tabs` / Overview columns must still pass `06`–`08`.
- Acceptance in their words: sandwich — put it here, cut, nothing extra; I was learning; six or nine months.
- What NOT to do: do not file a “simplify the table” bug from this speech. Do not add onboarding copy that explains the sandwich. Do not merge this file with `10` (prior pass duplicated the whole close). Do not treat sandwich as layout instructions.
- Open questions: sandwich vs sandbox vs assembling; cooking vs coding — ASR only.
- Related recordings:
  - continues_from: `08-five-parameters-tabs-teach-the-home-loan.md`
  - continues_in: `10-mastered-process-people-dont-see-problems.md`; then `wb-rec-260815-2332` (tabs still best — not this metaphor)

## Evidence index
- `audio.vtt` 08:13.090–08:36.670 and 08:52.940–08:58.490
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.lrc` / `audio.json` sandwich + “six or nine months”
- `events.json`: idle in this span
- `screenshots/0064.jpg`–`0069.jpg`
- `manifest.json` ended_at 2026-08-15T18:01:46.586Z
