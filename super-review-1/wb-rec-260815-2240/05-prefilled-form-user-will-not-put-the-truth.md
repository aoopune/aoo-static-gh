# Pre-filled form is the demo — the user will not put the truth (they will put a better income)

They leave philosophy and point at the filled Loan inputs card. The pre-filled form is one of the “best optimizations”: a visitor sees “this is the profile,” asks what *their* profile would look like, then types. As that user, they will **never** think they should put the truth. They will not put current income; they will say income will be this much in a year and a half — unless the tool can show them in a way that makes putting **current** income the move.

## Classification
- kind: issue | product-thinking (incentives on the form)
- status: open
- surface: explore-banks / `#hlc-inputs` — especially `#hlc-monthly-income` (they focus it). Continues 2204 “they will game parameters.”
- viewport: 1366x768 @2x
- speakers: Speaker A in the user’s voice. Speaker B: “Exactly.” ASR is not diarized.

## Session metadata
- folder: `wb-rec-260815-2240`
- recording id: `a82e9a9f-c11f-4376-881d-25a436d5e6f5`
- clip: 18 of 30
- started_at: 2026-08-15T17:10:04.687Z
- ended_at: 2026-08-15T17:19:10.273Z
- duration_ms: 545586 (~9 min 6 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 67
- event count: 127
- console: empty
- tabs: 1
- previous: `wb-rec-260815-2231`
- next: `wb-rec-260815-2249`

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Section: Loan inputs card. Visible values: Monthly income **₹1,00,000** (placeholder family `1,00,000`); Property **₹6,000** leftover; Age 35; CIBIL 780; Self-employed; Regular.
- Click/focus:
  - **03:59.183** (`t=239183`) **focus** `#hlc-monthly-income` while they say they will not put the truth / not put current income. `0028.jpg` (t=246224) shows the income field with a blue underline.
  - **03:59.865** scroll `y=0` (no real move).
- Screenshots: `0023.jpg`–`0027.jpg` card at rest; `0028.jpg`–`0031.jpg` income focused during the “current income / year and a half” talk.

## What they said (faithful, complete)

**03:05.050–03:21.490** Speaker A (why the form is already filled):
> Raw ASR: “These are the three best optimizations. And this optimization is working for this pre-filled form. So he will also understand. He will say, this is the profile. If this profile does like this, will it be like this? He will put my profile. I will put it.”
> Corrected: same. `These` is near-zero confidence (~0.02) — do not invent a prior list. They do **not** name the other two optimizations in this clip. The one they name: **pre-filled form**. Job of the fill: the visitor sees a worked example (“this is the profile”), asks whether *their* case would look like that, then puts **their** profile. “He will put my profile / I will put it” = switch from demo numbers to the user’s numbers.

**03:30.450–03:37.870** Speaker A as the user, Speaker B agrees:
> Raw ASR: “I will never think that I should put the truth. I will always think... Who will look? I will not put anything. Exactly.”
> Corrected: same. Two failure modes, both in the user’s head: (1) lie / shade the numbers; (2) put **nothing** because “who will look?” Speaker B: “Exactly.”

**03:40.650–03:52.870** Speaker A (income example):
> Raw ASR: “I will think that I can do the best. I don't want to put my current income. I will say that my income will be this much in a year and a half. I can do the best. I will not put it. How can you show me like this? I will say that I will put my current income.”
> Corrected: same on the future-income story. Last sentence (`current` ~0.006, `income.` ~0.00) is almost empty ASR — keep the *sense* they already stated: **if the tool shows them in a certain way**, they *would* put current income. They do not specify the UI of “like this” in this span — `06`–`07` are the glance / live-update ideas.

This is the same incentive as `wb-rec-260815-2204` (do not tell best parameters; they will game CIBIL / salaried / age). Here the game is **future income instead of current**, or blanking the field. They are not asking to delete the pre-fill; they are asking how to show results so honesty is the rational move.

## First-principles problem
- What must be true: the card may land **already filled** so the page is understandable at a glance; the visitor must still be willing to type **today’s** take-home, not a hoped-for income, and not leave it empty.
- Root vs symptom: empty or fake income is the symptom. Root: the user is optimizing the **deal** (“I can do the best”), does not know who looks, and the demo profile does not by itself make current income the winning input.
- Constraints they implied: keep the pre-fill (it is “working”); do not assume the next typed number is true; showing *how the profile behaves* is what might get current income.

## Directions they considered
- Pre-filled form as a landing optimization (keep).
- User will replace demo with “my profile” (desired).
- User will not put the truth / will put future income / will put nothing (problem).
- If you “show me like this,” they will put current income (desired; mechanism not specified yet).
- Lean: this is a real incentive bug, not a nit on the ₹1,00,000 demo.

## Company / user / future thinking
- User: hunting a better loan, not filling a KYC form. Will project income 18 months out. Same person as 2204 (small loan, pay slip, wife’s name).
- Company: Shroffin’s helpers already say take-home not CTC (2116). That copy does not stop future-income gaming. The company-level `03` (“people cannot tell their problems”) shows up here as **people will not type the true number**.
- Future: `06` wants tips + table visible together so the page explains itself; `07` wants changing income/property/age to *show* what moves (including ROI). Those are the “show me like this” candidates — capture there, do not invent a widget in this file.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `#hlc-monthly-income` and landing defaults in `pages/explore-banks.html`; any empty-state / demo profile that teaches the page. Not the table chrome yet.
- Acceptance criteria in their words: pre-filled form so they understand “this is the profile”; they will put their profile; they will **not** think they should put the truth / current income unless you show them in a way that makes current income the thing they put.
- What NOT to do: do not remove the pre-fill (they call it a best optimization). Do not lecture “enter current income” as a “best parameter” (2204 forbids that). Do not treat ₹6,000 property as this issue.
- Open questions: what the other two of “three best optimizations” are — not listed here. What “show me like this” looks like — `06`/`07`.
- Related recordings:
  - continues_from: `wb-rec-260815-2204` (don’t tell best parameters; they will game); this clip `01`–`04` (then “that’s it,” back to the form). Earlier: 2116 take-home not CTC; 2134 CIBIL farming.
  - continues_in: this clip `06` (form + tips + table at a glance) and `07` (change a field, show what happens).

## Evidence index
- `audio.vtt` 03:05.050–03:52.870
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` same span
- `events.json`: focus `#hlc-monthly-income` t=239183; scroll y=0 t=239865
- `screenshots/0023.jpg`–`0031.jpg` (esp. `0028.jpg` income underline)
- `replay.spec.ts`: later fills only; this span is focus without fill
- Site `pages/explore-banks.html`: `#hlc-monthly-income`
