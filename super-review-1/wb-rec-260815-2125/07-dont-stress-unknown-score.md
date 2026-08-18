# Don’t stress someone who has ~750 and doesn’t know 5–10 CIBIL points

They switch to the person filling the box. **If I have 750, how much do you want?** Tell them **not to give so much stress.** **I don’t know so many 5–10 points.** The number **falls** / they are unsure it held. This is the human reason “everyone knows the exact score” (`04`) is false.

## Classification
- kind: discussion | product / CIBIL input (customer memory + stress)
- status: open
- surface: Explore banks / `#hlc-cibil` still showing **780** while they talk about **750**
- viewport: 1366x768 @2x
- speakers: Speaker A as the user who does not know the number. B interjects (“how much do you want?”). ASR unlabeled.

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
- next: `wb-rec-260815-2134` `03` — “you don’t need to know your exact CIBIL”; around 700 → **680–700**
- ASR: this block is 750 / stress / 5–10 points, not Sibyl

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- CIBIL **780** on screen the whole time they say **750**. They do not type 750.
- Click: **05:28.681** `#hlc-cibil` — `0045.jpg` (t=329084); **05:43.335** last CIBIL click this session — `0047.jpg` (t=343737), while saying “If I have 750.”
- Screenshots **05:28–06:00**: `0045.jpg`–`0048.jpg`. Same rest UI.

## What they said (faithful, complete)

**05:28.490–06:00.680** Speaker A, B interjects:
> Raw ASR: “I feel that I will increase the loan interest. And hopefully. How much do you want? This is what I feel. If I have 750. But I feel that How much do you want? Tell me. Then I will take it. Tell him not to give so much stress. I don't know so many 5-10 points. But I fall down a lot.”
> Corrected: If **I have 750**, **how much [score] do you want?** Don’t put **so much stress**. **I don’t know so many 5–10 points.** “Fall down a lot” = the number **drops** / they are unsure it held.
> ASR **“increase the loan interest”**: they are talking **score** in this block, not rewriting the Rate column. Keep the raw line; do not treat it as a new interest-rate feature. “And hopefully” is a filler.
> ASR: **750.** p≈0.44; **stress.** p≈0.96; **5** p≈0.18 (in “5-10 points”).

~19 s silence (06:00–06:19) before they pick up **minimum** and memory in `08`.

## First-principles problem
- What must be true: a person who only knows “around 750” and cannot swear 5–10 points must still be able to use Explore banks without being grilled for 780.
- Root vs symptom: stress is the symptom. Root: the required exact integer assumes knowledge they said they do not have (`04`’s “everyone knows the exact score” fails here).
- Constraint: this does not cancel B’s 1–2 point real-life moves (`06`). Exact when they have it; less stress when they don’t.

## Directions they considered
- Ask **how much do you want?** / they’ll **take it** — user trying to please the form.
- **Don’t give so much stress** — the product direction.
- They do not pick a widget here (that is `09` typeahead and 2134 min/max).

## Company / user / future thinking
- User: remembers **750**, not 776 vs 780. Stress to type 780 is the wrong first ask.
- Company: a comparison that only works if you already have the bureau PDF is not independent help.
- Future: 2134 `03` restates this as “do you remember anything? around 700 → 680–700.” `05` there is raising the score later — different beat (`08` starts that seed).

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `#hlc-cibil` required exact integer; help copy “Changes the rates banks show you.”
- Acceptance criteria in their words: “If I have 750… how much do you want?”; “tell him not to give so much stress”; “I don’t know so many 5–10 points.”
- What NOT to do: do not treat “increase the loan interest” as a Rate-column spec. Do not keep a required 780 as the only path.
- Open questions: how 750 is entered (window, min, typeahead — `09` / 2134).
- Related recordings:
  - continues_from: `04` (“everyone knows the exact score” — contradicted); `06` (don’t want the exact)
  - continues_in: `08` (what is my score / minimum / don’t remember). **`wb-rec-260815-2134` `03`**

## Evidence index
- `audio.vtt` 05:28.490–06:00.680
- `audio.json`: `stress.` p≈0.96; `750.` p≈0.44
- `events.json`: `#hlc-cibil` t=328681 / 343335 (last click of the session)
- `screenshots/0045.jpg`–`0048.jpg`
