# Main concern: they don’t want to type the exact — and one or two CIBIL points change in real life

They name the fight in one line. **Minimum CIBIL score — what does it mean?** The on-page label is **CIBIL score**, not minimum. A’s concern: **you don’t want to put the exact.** B: **one or two points change a lot — it is changing in real life.** They stall (“thinking… what is the problem?”) and one of them has to go. This is the hinge into min/max in the next recording.

## Classification
- kind: issue | discussion / CIBIL input (exact vs minimum)
- status: open (concern named; minimum not designed)
- surface: Explore banks / `#hlc-cibil` label “CIBIL score*” (not “minimum”)
- viewport: 1366x768 @2x
- speakers: Both. A: don’t want to put the exact. B: 1–2 points change in real life. ASR unlabeled.

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
- next: `wb-rec-260815-2134` `02` — **minimum compulsory**, maximum optional; a lone 760 stays 760
- ASR: **Minimum Sibyl → Minimum CIBIL** (Sibyl p≈0.60)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Label is **CIBIL score***, not “Minimum CIBIL.” Value **780**. They probe the word **minimum** while clicking the exact box.
- Click/focus:
  - **04:25.080–04:25.468** triple click `#hlc-cibil` — `0036.jpg` (t=265483), blue underline
  - **04:32.116–04:32.878** quad click `#hlc-cibil` — `0037.jpg` (t=272521)
  - **04:52.927** another click — `0040.jpg` (t=293330)
- Screenshots **04:27–05:00**: `0036.jpg`–`0040.jpg`. Same 780. No min field.

## What they said (faithful, complete)

**04:27.000–04:49.100** both (clicks on `#hlc-cibil` at 04:25 / 04:32):
> Raw ASR: “Minimum Sibyl Score. What does it mean? What is the main thing? You don't want to put the exact. That is the main concern. The main thing is that I feel that I will change a lot in one or two points. He is changing in real life.”
> Corrected: “**Minimum CIBIL score** — what does it mean?” On-page label is **CIBIL score**, not minimum; they are probing **minimum vs exact**. A’s concern named: **you don’t want to put the exact.** B: **one or two points change a lot — it is changing in real life.**
> ASR: **He is changing** p(He)≈0.02 — likely **it** (the rate) is changing in real life, not a third person.

**04:54.600–05:00.480** both:
> Raw ASR: “Thinking. What is the main thing? What is the problem? Once I actually have to go.”
> Corrected: they stall (“thinking”). Main problem still not reduced to one shipped control. “Once I actually have to go” — one speaker stepping away; ~28 s gap before the customer-stress story in `07`. Not a product direction.

## First-principles problem
- What must be true: the field has to say whether it is asking for **the score**, a **floor**, or a **window** — and the rate logic has to honour that **1–2 points can move the offer in real life**.
- Root vs symptom: clicking 780 over and over is the symptom. Root: **exact** and **minimum** are different questions, and the label only asks for exact.
- Constraints: they already rejected approximate + invalid-star (`04`). Minimum is asked, not specified until 2134.

## Directions they considered
1. Keep exact — B, because 1–2 points move real rates.
2. Ask for a **minimum** instead of (or as well as) exact — asked, not designed.
- Lean: **open**. This is the sentence 2134 answers with min compulsory / max optional.

## Company / user / future thinking
- User: “don’t want to put the exact” is the main concern they finally name.
- Company: if real banks move 1–2 points, a fake wide window is a lie; if the person only has a floor, forcing 780 is also a lie.
- Future: `wb-rec-260815-2134` `02` — give **both** dropdown and min/max; minimum compulsory; don’t invent a range from a single 760.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `#hlc-cibil` label/help; any new min field must stay the **one** CIBIL control family, not a second score widget.
- Acceptance criteria in their words: “Minimum CIBIL score — what does it mean?”; “you don’t want to put the exact — that is the main concern”; “I will change a lot in one or two points… changing in real life.”
- What NOT to do: do not relabel the box “minimum” and keep a single 780 with no max. Do not ignore 1–2 point moves.
- Open questions: min vs exact vs range — answered as **both** in 2134, not here.
- Related recordings:
  - continues_from: `01` / `05`
  - continues_in: `07` (don’t stress the person who doesn’t know). **`wb-rec-260815-2134` `02`**

## Evidence index
- `audio.vtt` 04:27.000–05:00.480
- `audio.json`: `Minimum` p≈0.76; `Sibyl` p≈0.60
- `events.json`: `#hlc-cibil` t=265080–265468 (triple), 272116–272878 (quad), 292927
- `screenshots/0036.jpg`–`0040.jpg`
- Site label “CIBIL score*” not “Minimum”
