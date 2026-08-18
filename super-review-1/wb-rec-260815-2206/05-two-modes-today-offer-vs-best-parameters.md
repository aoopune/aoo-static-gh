# Two ways to use the tool: exact details for today’s offer vs “how do I do best”

They describe overall tool usage as **two jobs**. (1) Thinking about a home loan **today**, with exact details, no plan to take it tomorrow — **tell me what offer I get today**. (2) Thinking about taking a home loan — **how can I do my best in these parameters**, whoever will make them comfortable. They need to know that second job.

They click monthly income as they say “today… exact details… offer today.” After that they idle on income through lawyer / Pareto / CIBIL talk. The page still has **one** form.

## Classification
- kind: discussion | product (tool-usage / information architecture)
- status: open
- surface: explore-banks / `#hlc-inputs` as a single form that today only serves job (1). Not a visual bug.
- viewport: 1366x768 @2x
- speakers: Speaker A. Speaker B not heard. ASR not diarized.

## Session metadata
- folder: `wb-rec-260815-2206`
- recording id: `125a22f8-b64d-419e-9196-9126d5f613f3`
- clip: 14 of 30
- started_at: 2026-08-15T16:36:16.832Z
- ended_at: 2026-08-15T16:43:07.910Z
- duration_ms: 411078 (~6 min 51 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 52
- event count: 71
- console: empty
- tabs: 1
- previous: `04` — want all the hacks.
- next: `06` — lawyer as the person who thinks of my benefit; don’t make me probe inputs.

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- **02:20.069** click `#hlc-monthly-income` (`0020.jpg`) as they say “if I am thinking about my home loan today… exact details… offer today.”
- After that click they idle on income (`0021.jpg` onward). Last **input** click of the session.
- On-page: one card, required income / property / age / CIBIL, See options. No “I’m just exploring” vs “these are my final numbers” mode. Occupation still **Salaried**; property still leftover ₹6,000.

## What they said (faithful, complete)

**02:14.810–02:27.550** Speaker A:
> Raw ASR: “And my overall tool usage will be like this. If I am thinking about my home loan today, I don't have any idea that I want to take home loan tomorrow. That's why these are my exact details. Tell me what offer you will get today.”
> Corrected: overall **tool usage** looks like this. If I am thinking about my home loan **today**, I don’t [necessarily] mean I will take it **tomorrow**. **That’s why these are my exact details. Tell me what offer I will get today.**
> Job 1 = honest current numbers → **today’s offer**. ASR “you will get” is “I will get.”

**02:27.910–02:42.250** Speaker A:
> Raw ASR: “Actually, I am thinking about taking home loan. I am thinking about taking home loan. No matter where, How can I do my best in these parameters? The one who will make me feel comfortable with the home loan. I need to know this.”
> Corrected: **Actually, I am thinking about taking a home loan** — **no matter where** [I am in the process]. **How can I do my best in these parameters?** [I want] **the one who will make me feel comfortable with the home loan. I need to know this.**
> Job 2 = not submitting a frozen profile; **optimising the parameters** (the hacks / intelligence) and finding the party that makes the loan **comfortable**. “No matter where” = wherever they are in the journey, not a location field.

Two modes, both first-person as the user. They do not name tabs or a second URL in this beat. Comfort / lawyer is `06`. “Nobody arrives loan tomorrow” is `07`. 2213 will argue job 2 cannot just be bolted onto this form — then also float putting tips here.

## First-principles problem
- What must be true: “fill this form, see banks” only matches **exact details → today’s offer**. The other job — **how do I do best in these parameters** — has no mode.
- Root vs symptom: not unclear labels. The root is **one surface, two jobs**.
- Constraints: they still want job 1 (exact details, today’s offer). Job 2 is additive. They have not chosen a toggle, a second page, or a tips rail yet.

## Directions they considered
- Dual usage: today-offer vs planning / best-in-parameters.
- Lean: both are real. No UI pattern picked here.
- `07` will say the “tomorrow + parameters + quickest” visitor is rare; that is an argument about **who walks in first**, not a vote to delete job 1.

## Company / user / future thinking
- **Debate:** Job 1 pro: honest numbers, today’s comparison, what Explore banks already is. Job 1 con: matches the visitor they later say **won’t come** (`07`). Job 2 pro: matches Indian mentality / hacks / lawyer (`04`, `06`). Job 2 con: 2204 — if “best in these parameters” means publishing targets, people game them; 2213 — you may need a **different tool** so this form does not become the hack surface.
- **Example:** “I don’t have any idea that I want to take home loan tomorrow” vs “how can I do my best in these parameters?” Same person, two days in the journey.
- **User:** sometimes comparing **as I am**; sometimes asking **how to get comfortable / do best** before a loan they will only take a few times in life (`07`).
- **Company:** Explore banks is built for job 1. Job 2 is the intelligence/hacks product. Putting both on one card is the open architecture fight.
- **Future:** 2213 opens “Bro, we need to make a different tool… we can’t just put it here” then reverses toward inline suggestions. Do not collapse this clip into that compromise.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: IA around `pages/explore-banks.html` vs a future advice surface. Do not split the form in this clip’s name without 2213.
- Acceptance criteria in their words: overall tool usage = (1) exact details, offer today; (2) thinking about taking a home loan, how can I do my best in these parameters, who will make me comfortable. I need to know this.
- What NOT to do: do not delete today’s offer path. Do not force every visitor through hacks. Do not treat leftover ₹6,000 as a “planning mode” demo. Do not add a “loan tomorrow” mode from `07`.
- Open questions: one page with two intents vs two tools (2213 leans two, then also floats putting tips on this page like Google Flights).
- Related recordings:
  - continues_from: `04`
  - continues_in: `06`, `07`; `wb-rec-260815-2213` (different tool vs put it here)

## Evidence index
- `audio.vtt` 02:14.810–02:42.250
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json`
- `events.json`: click `#hlc-monthly-income` t=140069 (`screenshot_id` 20)
- `screenshots/0020.jpg`–`0022.jpg`
- Site `pages/explore-banks.html`: `#hlc-inputs`, recorded submit **See options** (`#hlc-see-options`; live label may now be Compare banks)
