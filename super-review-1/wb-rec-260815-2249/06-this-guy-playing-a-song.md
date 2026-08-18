# Aside: “this guy is playing a song”

After the extra-field inventory they stop. Last line of the clip: **this guy is playing a song.** It is room talk, not a Shroffin control. Capture it so it is not mistaken for product copy or a missed issue.

## Classification
- kind: aside | not-a-product
- status: closed | not-a-bug
- surface: none on explore-banks. Extra block still **open** on screen (`0019.jpg`) while they say it; they are not naming a UI.
- viewport: 1366x768 @2x
- speakers: Speaker A (or whoever is nearest the mic). **This** ~0.03. Speaker B not a separate turn. ASR not diarized; language tag `mr`.

## Session metadata
- folder: `wb-rec-260815-2249`
- recording id: `55f40b18-3bf3-46a3-b169-7adabe6886b1`
- clip: 19 of 30
- started_at: 2026-08-15T17:19:17.338Z
- ended_at: 2026-08-15T17:21:34.102Z
- duration_ms: 136764 (~2 min 17 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 20
- event count: 43
- console: empty
- tabs: 1
- previous: `05` (field inventory ends 02:07.770)
- next: `wb-rec-260815-2302` starts ~11 min later — dropdown so the form does not get too big; no song talk

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- No click after **01:36.787**. Periodic shots `0016.jpg`–`0019.jpg` still show Loan inputs with Adjust eligibility **open** (₹555 EMI, ₹0 cards, FOIR 55%, tenure 20, co-applicant No).
- `0019.jpg` (t=132186, ~02:12) is the frame under this line. Nothing on the page is a player, a song, or a “guy.”

## What they said (faithful, complete)

**02:13.070–02:15.470** Speaker A:
> Raw ASR / corrected: “This guy is playing a song.”
> **This** ~0.03; **guy** ~0.62; **song** ~0.88. Segment `avg_logprob` is the weakest in the file (−0.88). Best reading: someone in the room / nearby is playing music. Not “this UI is playing a song.” Not a bank name.

Speaker B: none. No product example. No pros/cons for the site.

Gap **02:07.770–02:13.070** is silence or untranscribed noise before the aside.

## First-principles problem
- What must be true: this line does not change Explore banks.
- Root vs symptom: not a UI bug. Do not hunt a “song” feature.
- Constraints: none for the page.

## Directions they considered
- None for the product. They do not come back to columns, banks, or mandating in this clip.

## Company / user / future thinking
- User / company: not applicable. The next real product sentence is `2302` `01` (drop down so the form does not get too big) — a size answer to `01`+`02`, not to this aside.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: none.
- Acceptance criteria in their words: none. Do not implement a song, a guest avatar, or a sound cue.
- What NOT to do: do not attach this line to See options, Adjust eligibility, or Bank options. Do not treat weak **This** as “this [field].”
- Open questions: who was playing music — irrelevant to the site.
- Related recordings:
  - continues_from: `05` (last product talk)
  - continues_in: `wb-rec-260815-2302` `01` (next product take, ~11 min later)

## Evidence index
- `audio.vtt` 02:13.070–02:15.470
- `audio.json` segment 35 (weak **This**; language `mr`)
- `events.json`: idle only after t=96787
- `screenshots/0019.jpg` (and `0016.jpg`–`0018.jpg` unchanged open form)
- `manifest.json` mic: true; `console.json` `[]`
- No matching control in `pages.json` / `replay.spec.ts`
