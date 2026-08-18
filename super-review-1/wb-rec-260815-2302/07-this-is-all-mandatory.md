# They call the extra block mandatory — then have to do everything anyway

After the trust scare they collapse and reopen Adjust eligibility again and say **this is all mandatory**.
That is the other side of 2249’s “optional columns / if they don’t fill they can’t go.”
They still have to **do everything** — and they say they already do.
Co-applicant Yes (`08`) is the next demonstration that “everything” gets **bigger**.

## Classification
- kind: issue | product (required vs optional)
- status: open
- surface: explore-banks / `details#hlc-form-more` extra rows (Existing EMIs, cards, FOIR, Tenure*, Co-applicant). Recording: Tenure has `*`; the others do not. They click the **accordion label**, not inner required attributes.
- viewport: 1366x768 @2x
- speakers: Speaker A. ASR not diarized. “Bro, nothing” may be A to B. No clear Speaker B line in this span.

## Session metadata
- folder: `wb-rec-260815-2302`
- recording id: `1c3a6e22-3a9a-475d-8d5b-350dfe605171`
- clip: 20 of 30
- started_at: 2026-08-15T17:32:34.848Z
- ended_at: 2026-08-15T17:34:36.510Z
- duration_ms: 121662 (~2 min 2 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 19
- event count: 34
- console: empty
- tabs: 1
- previous: `06` (surprise/trust); `wb-rec-260815-2249` `04` (optional vs can’t go; why no mandating — formula getting bigger)
- next: `08` (co-applicant Yes — more fields / loan amount)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Click/focus (speech ↔ events):
  - **01:12.017** click accordion **svg** (`0011.jpg`, t=72418) — extra block **collapsed**; table strip (Canara Bank / ₹5,400 / EMI ₹48) in view
  - **01:14.010** click accordion label (`0012.jpg`, t=74413) — extra block **open** again
- Speech “this is all mandatory” **01:13–01:15** sits on that **re-open**. `0013.jpg` (t=84202) stays open, Co-applicant still **No**, before `08`.
- They do not toggle asterisks or HTML `required`. Primary six fields already show `*`. Extra: only Tenure starred in the recording.

## What they said (faithful, complete)

**01:11.750–01:12.530** Speaker A:
> Raw ASR: “Bro, nothing.”
> Corrected: keep raw. **nothing** ~0.25. Likely a short dismiss (of hiding extras / of a workaround), not a UI label. Do not invent “Bro, no thing on the page.”

**01:13.090–01:15.150** Speaker A:
> Raw ASR / corrected: “This is all **mandatory**.”
> **mandatory** ~0.92. **This** = the extra Adjust eligibility set they are opening (`01`/`04`/`05`), not a new section. Opposite pull to 2249 “optional columns” — here they want them treated as **must-have** because of trust (`06`).

**01:15.390–01:16.450** Speaker A:
> Raw ASR: “But I have to do everything.”
> Corrected: same. Filling / answering **everything** (all extra questions) is the cost. **do** ~0.27, **everything** ~0.37.

**01:17.510–01:17.790** Speaker A:
> Raw ASR / corrected: “Already.”

**01:19.350–01:20.690** Speaker A:
> Raw ASR / corrected: “This is it.”

They do not list which of the five rows get a star. They do not disable See options. Co-applicant expansion (`08`) is the next demonstration that “everything” gets **bigger** when Yes.

## First-principles problem
- What must be true: facts that prevent a **surprise** (`06`) cannot stay “skip if you like” if skipping produces a fake EMI. Calling them **mandatory** is one answer to 2249’s “why is there no mandating?”
- Root vs symptom: accordion open/close is the fidget. The root is still **one formula, many questions** (2249 `04`) versus **trust if omitted** (`06`).
- Constraints they implied: dropdown for size (`01`); extras still affect (`02`); **all mandatory**; they already have to do everything. 2249 `05` still said EMI/cards/co-applicant are **not for everyone** — this clip does not repeal that; it raises the stakes.

## Directions they considered
- Name the extra set **mandatory**.
- Accept that the customer **has to do everything** (already).
- They do **not** draw new asterisks. They do **not** say “only FOIR” or “only EMI.”
- Lean: reopen the required/optional fight; do not flatten to “star every extra field” without 2249 `05`’s who-is-this-for.

## Company / user / future thinking
- User: hates a long form (`01`) and hates a lying short form (`06`). “Mandatory” is the trust side of that bind.
- Company: cannot mandate situational fields for people who have no EMI and no co-applicant (2249 `05`) without making the formula bigger again.
- Future: 2304 tries **pre-fill** so mandatory-looking columns are not blank homework, plus importance so “everything” is not equal. Do not treat this line as “delete optional.”

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `required` vs optional on `#hlc-existing-emis`, `#hlc-card-limits`, `#hlc-foir` (not required in recording); `#hlc-tenure` **is** required; `#hlc-coapplicant`; submit `#hlc-see-options`.
- Acceptance criteria in their words: “This is all mandatory.” “But I have to do everything.” “Already.”
- What NOT to do: do not star every extra field as the whole fix. Do not keep them optional and silently assume 0 (2249 `04` / this `06`). Do not ignore 2249 `05` (not everyone has EMI/cards/co-applicant).
- Open questions: mandatory for **whom** — everyone vs only if they have the thing. Tenure already starred inside an “optional” drawer. 2304 pre-fill may be their way out.
- Related recordings:
  - continues_from: `06`; `wb-rec-260815-2249` `04` and `05`
  - continues_in: `08` (Yes adds more mandatory-looking fields); `wb-rec-260815-2304` (don’t write mandatory later; pre-fill)

## Evidence index
- `audio.vtt` 01:11.750–01:20.690
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` (“mandatory” ~0.92)
- `events.json`: accordion t=72017 (closed `0011.jpg`), t=74010 (open `0012.jpg`)
- `screenshots/0011.jpg`–`0013.jpg`
- `replay.spec.ts`: summary svg + span clicks
- `pages.json`: extras required false except Tenure
