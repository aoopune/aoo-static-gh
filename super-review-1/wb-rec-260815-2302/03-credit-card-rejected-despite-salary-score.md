# Credit card rejected despite salary and score — Scapia / HDFC looked at education

They explain *why* the extra home-loan fields still matter (`02`) with a **credit-card** story: applied, **rejected**, with a **decent salary** and **best score**.
They did not even get the **Scapia, HDFC** card, because the issuer looked at **education**.
Speaker B echoes “you get rejected”; A confirms.
The punchline that existing EMI caused it is the next beat (`04`) — this file stops at the rejection, before they click Existing EMIs.

## Classification
- kind: discussion | product (analogy — banks use more than salary and score)
- status: open
- surface: explore-banks / Loan inputs extra block still open (`0003.jpg`–`0005.jpg`). They name **credit card** while **Credit card limits** ₹0 is on the extra row; they do **not** click that field (Existing EMIs click is `04`).
- viewport: 1366x768 @2x
- speakers: Speaker A tells the rejection story. Speaker B: “You get rejected.” then A “Yes, I get rejected.” B: “Okay.” after education. ASR not diarized.

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
- previous: `02` (extras must still affect offers)
- next: `04` (card-to-card, then existing EMI is a big thing — they click that field)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Extra block **open** the whole story: income ₹1,00,000, CIBIL **780**, Credit card limits **₹0**, FOIR 55%, Existing EMIs ₹555.
- Idle only **00:08–00:38**. Periodic shots `0003.jpg` (t=14202), `0004.jpg` (t=24201), `0005.jpg` (t=32201) — same open Adjust eligibility card; table not in view. `0006.jpg` (t=40202) overlaps the pause before `04`.
- They never click Credit card limits, 10% load, or CIBIL. The story is spoken **over** this card, not a new page.

## What they said (faithful, complete)

**00:08.240–00:12.820** Speaker A:
> Raw ASR: “And now what happens to me, I applied for a credit card. So I get rejected.”
> Corrected: same. First-person example, not a Shroffin flow (this page is home loans).

**00:14.540–00:17.880** Speaker A:
> Raw ASR: “When my decent salary, best score...”
> Corrected: “When [I have a] decent salary, [a] best score…” — salary and bureau score were **fine**; still rejected. **best** ~0.69; **score** ~0.45.

**00:17.880–00:18.500** Speaker B:
> Raw ASR / corrected: “You get rejected.”

**00:18.560–00:19.360** Speaker A:
> Raw ASR / corrected: “Yes, I get rejected.”

**00:19.600–00:21.440** Speaker A:
> Raw ASR / corrected: “I don't even get the **Scapia, HDFC** card.”
> Keep **Scapia** as ASR. Scapia ~0.42; HDFC ~0.59. Two names for the card they wanted, not a site control.

**00:24.300–00:25.780** Speaker A:
> Raw ASR / corrected: “Because they are looking at my **education**.”
> **education** ~0.96 — they said this word. Issuer used **education**, not only salary and score. They do **not** ask to add an Education field on Explore banks.

**00:26.820–00:27.240** Speaker B:
> Raw ASR: “Okay.” (~0.12)

**00:27.980–00:32.460** Speaker A:
> Raw ASR: “And I don't know what happens to me. But now I have to apply so much. Oh my god!”
> **happens** ~0.02, **me** ~0.02, **apply** ~0.01 — this stretch is barely usable. Do not invent a second product request from it. Keep: confusion + having to **apply / put in** a lot + frustration.

~6 s pause. “I get card to card…” and the Existing EMIs click are `04`.

## First-principles problem
- What must be true: a “good” salary and a “best” score are **not** the whole underwriting picture. Issuers (and home-loan banks) look at **other** facts — here **education** for a card; on this page, EMI / utilization / FOIR (`04`/`05`).
- Root vs symptom: rejection despite 780-looking inputs is the story. The root for Explore banks is **showing only the primary six fields** as if they were enough (`02`).
- Constraints they implied: do not promise a card (or a home loan) from salary + score alone. Do not add Education unless they ask later.

## Directions they considered
- Tell a real rejection: Scapia/HDFC card, education, salary and score were not enough.
- Use it to justify extra home-loan facts (`04` existing EMI, `05` utilization/FOIR).
- No UI mock for education. No click on Credit card limits in this span.

## Company / user / future thinking
- User: believes salary + CIBIL should be enough (the card on screen shows both). Then a bank says no for a reason that was never on the form — same trust wound as `06`.
- Company: independent comparison means name the **other** things banks look at (EMI, cards, FOIR), not hide them in a dropdown that the math ignores (`01`/`02`).
- Future: do not add Education to Loan inputs from this analogy. Do not publish “best” score/salary targets. Credit card **limits** on this form are a **home-loan load** input (`05`), not a Scapia application.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: none for a new Education control. The on-page cousins are `#hlc-card-limits` / card-load percent and the extras in `#hlc-form-more`. Help copy already says card **limit** (not what you owe) counts as monthly load.
- Acceptance criteria in their words: rejected despite decent salary and best score; don’t even get the Scapia, HDFC card; because they look at education.
- What NOT to do: do not add Education to explore-banks.html from this clip. Do not treat Scapia/HDFC as a lender row to add. Do not bind this story to the leftover CIBIL 780 as if they were editing it. Do not fold `04`’s Existing EMIs click into this file.
- Open questions: none they posed for a new field. How much of this analogy should appear in field help (cards / FOIR) is later copy work — they did not draft it.
- Related recordings:
  - continues_from: `02`
  - continues_in: `04` (card-to-card; existing EMI is a big thing); `05` (utilization / FOIR)

## Evidence index
- `audio.vtt` 00:08.240–00:32.460
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` (Scapia keep; apply ~0.01; education ~0.96)
- `events.json`: idle 00:06–00:42; no clicks in this span
- `screenshots/0003.jpg`–`0005.jpg` (open extra block; Credit card limits ₹0 visible, not focused)
- Site `pages/explore-banks.html`: `#hlc-card-limits` (not used as a click target here)
