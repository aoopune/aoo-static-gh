# Give a risk model — high processing fee / high interest because default is more likely

After they say **write “highest”**, B asks **“Highest?”** A does not stop at a badge. **What do you do after so many years?** **I have to give a risk model.** High risk, high interest, **maximum because there are more chances of default.** Paying **maximum interest** for years; a side beat about **furniture from No EMI**. Then they open IDFC (`06`) as the worked example.

## Classification
- kind: issue | intelligence / why the dear banks are dear
- status: open
- surface: still Charges / DCB processing-fee drawer (`0041.png`–`0046.png`) from **05:10.821** until Close **06:02.126**, then idle on the expensive cluster until IDFC **06:31.256**. No separate “risk” UI.
- viewport: 1366x768 @2x
- speakers: Speaker A. “Highest?” likely B. ASR not diarized.

## Session metadata
- folder: `wb-rec-260816-0004`
- recording id: `08aa721b-3f2e-484c-b39e-58b789d21095`
- clip: 27 of 30
- started_at: 2026-08-15T18:34:46.547Z
- ended_at: 2026-08-15T18:43:30.319Z
- duration_ms: 523772 (~8 min 44 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 72
- event count: 128
- console: empty
- tabs: 1
- previous: `wb-rec-260815-2355` (~5 s earlier)
- next: `wb-rec-260816-0013` (~3 s later) — floating vs fixed, CIBIL to change the rate, MCLR, overdue — more of this intelligence family.

## Where on the page
- DCB drawer: ₹48L × **2.00%** = **₹96,000**, above ₹5,000 minimum. Table neighbours ICICI / Kotak / RBL also ₹96,000; IDFC ₹1,44,000 below (`0039.png`, `0041.png`).
- They do not open Rate / EMI here. “High interest” is spoken as the **same intelligence family** as high processing fee, not a click on Overview. Overview loan-amount math (Punjab & Sind, 08:07) is `08`, after they leave Charges.

## What they said (faithful, complete)

**05:35.920–05:55.960** B then A:
> Raw ASR: “Highest? What do you do after so many years? What do I do? I have to give a risk model. I have to pay high risk and high interest. I have to pay maximum because there are more chances of default.”
> Corrected: **Highest?** (B). **What do you do after so many years?** — the customer lives with this bank for years. **I have to give a risk model** (**risk** p≈0.07 then p≈0.41). **High risk and high interest.** **Pay maximum because there are more chances of default** (**default** p≈0.90). This is **why** a bank can sit in the highest-fee cluster (`06`), not a new calculator they clicked.

**06:00.140–06:23.600** Speaker A:
> Raw ASR: “What do you do after so many years? I have to pay maximum interest. I have to buy furniture from No EMI. I have to pay… maximum interest. I have to pay. What is this?”
> Corrected: same loop on **years** and **maximum interest** (that **maximum** p≈0.001 — they are repeating the idea, not naming a new product). **Furniture from No EMI** — **furniture** p≈0.75, **No** p≈0.36, **EMI** p≈0.75; keep as a spoken aside (buying furniture without EMI vs years of loan interest). Do **not** invent an NBFC or furniture-loan product. “What is this?” lands as they look toward IDFC (`06` 3%).

## First-principles problem
- What must be true: “highest processing fee” is not a random insult — they want a **risk model** the customer can use: dear fee / dear rate ↔ **more default risk** (as they phrased it), lived **over years**.
- Root vs symptom: a “Highest” badge without **why** is a symptom. The root is **intelligence** (`05`) that explains the dear end.
- Constraints: they did not give a formula or a CIBIL input here. Do not invent bands. Next clip talks CIBIL / floating-fixed as more intelligence.

## Directions they considered
- After “highest,” **give a risk model**.
- Tie **high risk**, **high interest**, **maximum**, **more chances of default**.
- Keep the **years** question (cost is not a one-day fee).
- Lean: explanation next to the label (`06`), not a separate risk app.

## Company / user / future thinking
- User: otherwise sees ₹96,000 / 3% and only feels cheated, not informed.
- Company: independent comparison includes **why** a bank is dear — still the customer decides.
- Future: `wb-rec-260816-0013` — floating vs fixed, CIBIL to change the rate, MCLR, overdue. Do not close “risk model” as done in this clip.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: processing-fee (and later rate) intelligence copy beside the highest labels (`06`). No new dataset was named here.
- Acceptance criteria in their words: “I have to give a risk model”; “high risk and high interest”; “maximum because there are more chances of default”; “after so many years.”
- What NOT to do: do not ship “highest” with no why. Do not invent a scored risk meter they did not specify. Do not turn “furniture from No EMI” into a feature. Do not claim Shroffin has a default-probability model they did not describe.
- Open questions: what facts the risk model is allowed to show (they named default chance + years of max interest only). Whether it lives on the row, the drawer, or the guide (`03`).
- Related recordings:
  - continues_from: `06` (“Highest?”)
  - continues_in: `06` IDFC 3% as the example; `wb-rec-260816-0013` — intelligence / save money / CIBIL / rates (ASR garbled)

## Evidence index
- `audio.vtt` 05:35.920–06:25.600
- `audio.json`: **Highest?** p≈0.65; **default** p≈0.90; **furniture** / **No EMI**
- `events.json`: DCB drawer open; Close t=362126; IDFC click t=391256
- `screenshots/0041.png`–`0050.png`
- On-screen: DCB 2% / ₹96,000 — no risk copy
