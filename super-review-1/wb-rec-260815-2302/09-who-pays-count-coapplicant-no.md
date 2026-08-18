# They count 1-2-2-1-1-1, ask who pays, then set Co-applicant back to No

With co-applicant **Yes** still open they ask for “the fixers,” rattle **1, 2, 2, 1, 1, 1**, then **who is going to pay the rent** — **whoever is going to pay**.
Speaker B: **What do you want?**
They click **No**, extras collapse, and end **that’s why I didn’t come / that’s it.**
Next take (`2304`) starts on surprise, **pre-fill**, and **stars/meter** for how important each column is — do not fold that design into this clip.

## Classification
- kind: discussion | product (co-applicant revert + early importance/count)
- status: open
- surface: explore-banks / `#hlc-coapplicant` **Yes** then **No**; extra co-applicant fields in `0015.jpg`; **No** click is `0016.jpg` (third redaction still there — income row likely still on screen at the click). `0017.jpg` / `0018.jpg` drop that redaction: extras gone. Scroll remains `y=333.5` so Age/CIBIL/occupation sit at the top of the card and the table header is in view.
- viewport: 1366x768 @2x
- speakers: Speaker A on fixers / numbers / who pays. Speaker B: “What do you want?” ASR not diarized; several words are weak — clicks are the ground truth.

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
- previous: `08` (Yes; increases loan amount)
- next: **`wb-rec-260815-2304`** immediately (~19 s) — pre-fill; stars / meter / score for column importance; count 6 then 4 more columns

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- `0015.jpg` (t=96202): still **Yes**; co-applicant income/EMIs/card limits ₹0; Overview / Apply once / Filters visible under the card. Extra redaction at y=536 (heuristic on the new income row).
- **01:43.644** focus+click **No** (`button:nth-of-type(1)`), `0016.jpg` (t=104048) — click shot; third mask rect still present (do not treat this frame as extras already gone).
- **01:44.546** fill `#hlc-coapplicant` = `"no"` — extra co-applicant fields hidden (`#hlc-coapplicant-fields`).
- `0017.jpg` / `0018.jpg` (t=112202 / 120202): **No**; only two mask rects; extra income/EMI/card rows gone; extra block still **open**; Canara Bank row (8.80%, ₹5,400, 20 yrs, EMI ₹48) in view. Idle to end of take.
- No typing in co-applicant money fields. No See options click.

## What they said (faithful, complete)

**01:37.880–01:39.380** Speaker A:
> Raw ASR: “Brother, please give me the fixers.”
> Corrected: **Brother** ≈ **0.02** — likely **bhai** / a vocative, not a UI name. **fixers** ~0.25. Plausible hearings: **figures** or **fields** (the extra numbers now on screen). Keep raw; do **not** invent a “Fixers” control.

**01:40.340–01:41.840** Speaker A:
> Raw ASR / corrected: “**1, 2, 2, 1, 1, 1.**”
> After the first **1** (~0.26), the rest are strong (~0.75–0.97). This is **not** 2304’s “1, 2, 3, 4, 5, 6” count of six columns. It is a **six-number string**. Possible: pointing along extra rows, or a first pass at **weights**. Do not file it as a finished star rating — 2304 is where they propose stars / meter / 10-on-10.

**01:45.460–01:46.020** Speaker B:
> Raw ASR / corrected: “What do you want?”
> Timed just after **No** (01:43.644). B asking A’s intent.

**01:46.800–01:49.700** Speaker A:
> Raw ASR: “Brother, I want to know who is going to pay the rent. Whoever is going to pay the rent.”
> Corrected: they want to know **who is going to pay**. **rent** ~0.32 then ~0.79 — keep the word; do not add a Rent field they never pointed at. On this control, **who pays** = the **co-applicant** question (second person on the loan / EMI). **going** first take ~0.10; **pay** first take ~0.11, second take ~0.79.

**01:52.060–01:55.280** Speaker A:
> Raw ASR: “That's why I didn't come. That's it.”
> Corrected: **come** ~0.21. They have just set co-applicant **No**. Possible: that’s why they **didn’t add** a co-applicant / didn’t “come” to Yes. Do not invent a navigation they didn’t do (single tab, still Explore banks). **That's it** closes the take.

2304’s “I will come. I will sit here only. I have to keep a pre-field” is the **next** thought — do not fold pre-fill into this clip.

## First-principles problem
- What must be true: co-applicant is **who else pays** (income and obligations), not a decorative Yes. If they don’t have that person, **No** must be valid (`08` / 2249 `05`). If they do, the extra figures matter (`02`/`06`).
- Root vs symptom: Yes/No toggling is the fidget. The root is: extra columns need a **reason to fill** (who pays; how important) without exploding the form (`01`) or surprising later (`06`).
- Constraints they implied: they counted or weighted something; they care **who pays**; they left the control on **No**.

## Directions they considered
- Ask for the figures/fields; list **1, 2, 2, 1, 1, 1**.
- State the question: **who is going to pay** (the rent / the obligation).
- Put co-applicant back to **No**.
- Lean: unfinished — 2304 supplies pre-fill and importance UI. Do not treat 1-2-2-1-1-1 as a spec to ship.

## Company / user / future thinking
- User: will not turn Yes without knowing **why** (who pays, loan amount up). Blank extra rows after Yes feel like more homework (`07`).
- Company: take details **when** there is a co-applicant (2304 will say that). Don’t force a second person.
- Future: 2304 — pre-fill all columns, mark importance (stars/meter/score), so counting fields is not scary. This clip’s 1-2-2-1-1-1 is a **hint**, not that design.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `#hlc-coapplicant` Yes/No; copy/help that should answer **who pays** / whose EMI; do not invent a Rent input.
- Acceptance criteria in their words: “1, 2, 2, 1, 1, 1”; “I want to know who is going to pay the rent. Whoever is going to pay the rent.” Co-applicant ends on **No**.
- What NOT to do: do not ship a “Fixers” button. Do not add Rent as a loan-input field from ASR. Do not keep Yes stuck on after they chose No. Do not implement stars in this clip’s recipe — that is 2304. Do not interpret leftover table EMI ₹48 as “rent.”
- Open questions: what 1-2-2-1-1-1 mapped to (which six things). Whether “rent” was EMI / the house payment. Pre-fill design is the next recording.
- Related recordings:
  - continues_from: `08`; `wb-rec-260815-2249` `05` (co-applicant not for everyone)
  - continues_in: **`wb-rec-260815-2304`** (surprise; pre-fill; stars/meter; 6+4 columns)

## Evidence index
- `audio.vtt` 01:37.880–01:55.280
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` (Brother ~0.02; fixers ~0.25; 1,2,2,1,1,1; rent)
- `events.json`: No click t=103644; fill `"no"` t=104546; scroll already y=333.5
- `screenshots/0015.jpg` (Yes + extras) / `0016.jpg` (No click; extras likely still painted) / `0017.jpg`–`0018.jpg` (No, extras gone)
- `replay.spec.ts`: No button; `#hlc-coapplicant` fill no
- `wb-rec-260815-2304` `audio.vtt` 00:03.380 (surprise) / 00:07.780 (sit here / pre-fill)
- Site `pages/explore-banks.html`: `#hlc-coapplicant` pills
