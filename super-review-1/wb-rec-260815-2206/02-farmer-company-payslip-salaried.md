# A farmer will start or join a company and take a pay slip if you say salaried wins

Next game after property: **occupation**. If you tell them salaried is worth more than self-employed, a farmer will put a company, or join someone else’s, and **take a pay slip**. They click **Salaried** while they say it — the pill flips from Self-employed (carried from the last clip) and stays Salaried for the rest of this recording.

They already said they have started this kind of work **by themselves**. Then they treat “salary” as a what-if: how much EMI, how much loan? That probing is the start of `03`.

## Classification
- kind: discussion | product (incentive on Occupation)
- status: open
- surface: explore-banks / Loan inputs / Salaried vs Self-employed pills (`.hlc-occupation-pills`; hidden `#hlc-occupation`). They name farmer / company / pay slip; they do **not** ask for a Farmer chip in this beat.
- viewport: 1366x768 @2x
- speakers: Speaker A in the user’s voice. Speaker B not heard. ASR not diarized.

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
- previous: `01` (property / black). 2204 already said “salaried is more than self-employed → I will get a pay slip for six months” without clicking the pill.
- next: `03` — they treat salary / CIBIL / age as knobs and then want the **company** to give that intelligence.

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Control: Occupation pills — Salaried / Self-employed. Helper (page snapshot): “Changes which offers and rates you see.”
- Visible state:
  - Start (`0000.jpg`–`0005.jpg`): **Self-employed** selected (from 2204).
  - **00:36.242–00:36.243** focus+click **Salaried** (`getByRole("button", { name: "Salaried" })`). From `0006.jpg` onward: **Salaried** for the rest of the session.
- They do not open the occupation (i). They do not type income (stays ₹1,00,000). Property stays ₹6,000 leftover.
- Screenshots: `0004.jpg`–`0005.jpg` still Self-employed during farmer/company talk; `0006.jpg` (t=41176) Salaried as they move to “if there is a salary… EMI.”

## What they said (faithful, complete)

**00:19.690–00:23.030** Speaker A:
> Raw ASR: “You told me that it takes more to sell than self-employed.”
> Corrected: “You told me that **salaried** [is / takes] more than self-employed.”
> ASR: **sell ≈ salaried** (same mix-up as 2204’s “salary”). “You told me” = the company or this tool publishing that salaried wins — 2204’s example, restated.

**00:23.130–00:30.250** Speaker A:
> Raw ASR: “I am a farmer. So, what I will do is I will put a company or I will join their company. And I will take a payslip from them.”
> Corrected: same. **Farmer** = the user who does not already have a salary slip. **Put a company** = set up / use a company on paper. **Join their company** = join someone else’s. **Payslip** = a salary slip so banks (and this tool’s Salaried pill) treat them as salaried.

**00:30.250–00:34.770** Speaker A:
> Raw ASR: “Basically, I have started doing this work by myself.”
> Corrected: they have **already started** this kind of work **on their own** — manufacturing the profile / probing — because nobody handed them the intelligence (`03` is that ask).

**00:36.070–00:40.230** Speaker A (click Salaried at **00:36**):
> Raw ASR: “If there is a salary, then how much will be my EMI? And how much will be my loan?”
> Corrected: **If [I am] salaried**, how much EMI, how much loan? First of three probe questions (CIBIL and age in `03`). They are no longer only telling a farmer story; they are **using the Salaried pill as a what-if**.

No Speaker B. They do not ask to hide occupation. Later (`10`) they return to salary-slip **help** for rural / cash users — that is a different stance (help people who truly have no slip). This file is the **gaming** example.

## First-principles problem
- What must be true: Occupation changes which bank offers and rates appear. If “Salaried” is advertised as the winning side, people without a slip (farmer, cash income) will **obtain** a slip rather than compare as they are.
- Root vs symptom: clicking Salaried is them acting out the game, not a mis-click. The root is **publishing a ranking of income types**.
- Constraints: they still want the pill (they use it). They do not want the site to say “salaried is more.”

## Directions they considered
- Named game: farmer → company (own or someone else’s) → pay slip → appear salaried.
- Then immediately: use that salary state to read EMI and loan (`03`).
- Lean: real incentive issue. Do not treat “I am a farmer” as a request for a Farmer occupation chip unless a later clip asks for that control.
- Counter-direction later (`10`): **help** cash/rural people take a **real** job and a **real** slip over months. Do not collapse that into this gaming note.

## Company / user / future thinking
- **Debate / example:** 2204 already used “salaried beats self-employed → I will get a pay slip.” This clip adds the **farmer / company** story and **clicks the pill**. Pros of showing that salaried often gets better rates: it is how banks actually behave. Cons they act out: a farmer will join a company for paper.
- **User:** occupation is a lever, not an identity field. They will wait months (`09`) because lakhs beat a year of ordinary saving.
- **Company:** Shroffin is not a bank; it shows how banks treat salaried vs self-employed. Ranking those types in copy turns the comparison into a **how to look salaried** guide. Independence means a fair view of both, not a winner announced.
- **Future:** `03` wants Shroffin to **say** the sensitivity so people do not farm it. `10` wants honest help for people with no slip. 2213: this whole hack layer may need another tool. Fake employment vs “do a job” (`10`) is a compliance fork — this beat is the fake/paper path they fear if you only **rank** salaried.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `.hlc-occupation-pills` / `#hlc-occupation` and occupation help in `pages/explore-banks.html`. Any copy that says salaried **beats** self-employed.
- Acceptance criteria in their words: if you tell them salaried is more than self-employed, a farmer will put/join a company and take a pay slip. They have already started doing this work themselves.
- What NOT to do: do not remove Salaried / Self-employed. Do not add a Farmer pill from this clip alone. Do not write a “how to get a fake pay slip” tutorial. Do not collapse `10` (help people who truly have no slip) into this gaming note.
- Open questions: how to show **what banks do** with occupation without ranking the two pills. Where honest “get a genuine salary slip over months” advice lives vs this form.
- Related recordings:
  - continues_from: `wb-rec-260815-2204` occupation / pay-slip example (no click). `01` in this folder.
  - continues_in: `03` (probe salary → EMI/loan, then company-given intelligence); `10` (rural/cash, wait 4 months, take a slip, ₹5 lakh). `wb-rec-260815-2213` for a different tool.

## Evidence index
- `audio.vtt` 00:19.690–00:40.230
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` (sell, payslip, farmer)
- `events.json`: click Salaried t=36242–36243
- `pages.json` / `RECAP.md`: buttons Salaried / Self-employed
- `screenshots/0004.jpg`–`0006.jpg` (occupation flip)
- `manifest.json`; `replay.spec.ts` Salaried button click
- Site `pages/explore-banks.html`: `.hlc-occupation-pills`, `#hlc-occupation`
