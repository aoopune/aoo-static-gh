# Nobody knows how EMI is calculated — revolutionary; we don’t lie; empower you

They keep the EMI math on screen and name the company job. **Nobody knows how EMI is calculated.** Showing it is a **revolutionary product.** The household and the **agent** do not know this much; banks give a **system** or **head-office** sheet — **there is nothing like this.** After they demo the click (`11`), they say it is true **we don’t lie to the customer** and **we are here to empower you** (twice).

## Classification
- kind: praise | product-thinking
- status: open (philosophy to keep; not a bug)
- surface: EMI drawer (₹37,938 formula) then the table. Close × **05:03.612**, reopen EMI **05:14.269**, close **05:18.562**, reopen Loan amount **05:19.980**, close **05:33.992**. Empower lines are spoken **after** the click demo in `11`.
- viewport: 1366x768 @2x
- speakers: Speaker A states the line. Repeats “we are here to empower you” — second pass is near-whisper (empower p≈0.00) but the first pass is p≈0.99. “Very nice” may be B. ASR not diarized.

## Session metadata
- folder: `wb-rec-260815-2355`
- recording id: `2136e699-2334-4e39-a724-eb3e92e1d3bd`
- clip: 26 of 30
- started_at: 2026-08-15T18:25:24.871Z
- ended_at: 2026-08-15T18:34:41.661Z
- duration_ms: 556790 (~9 min 17 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 92
- event count: 200
- console: empty
- tabs: 1
- previous: `wb-rec-260815-2341` already called the loan-amount steps “great information”
- next: `wb-rec-260816-0004`

## Where on the page
- **04:30–05:03** still on EMI (`0039.jpg`–`0045.jpg`). Close **05:03.612** `#hlc-drawer-close` (`0045.jpg`).
- **05:14.269** reopen EMI (`0047.jpg`); **05:18.562** backdrop; **05:19.980** Loan amount (`0049.jpg`); **05:33.992** close — they are showing that **both** cells open the same kind of honesty (`11` is the click feel).
- **06:19–06:30** they are on the expanded Overview table (`0059.jpg`–`0064.jpg`) when they say don’t lie / empower.

## What they said (faithful, complete)

**04:30.170–04:36.810** Speaker A:
> Raw ASR: “Nobody knows how EMI is calculated. How it is calculated. I don't know anything.”
> Corrected: same. This is the customer’s state, not a boast.

**04:41.330–04:47.750** Speaker A:
> Raw ASR: “This is a revolutionary product. I will not tell you. You don't know anything.”
> Corrected: **This is a revolutionary product.** **I will not tell you** — **not** p≈0.18; could be “I will **now** tell you.” Next line **You don't know anything** is the customer (or a bad agent script). Later “we don’t lie / empower” forbids talking down. Do not ship “you don't know anything” as UI copy.

**05:00.310–05:16.210** Speaker A, closing the drawer:
> Raw ASR: “All I know is that we don't have money in our house. Very nice. Very nice. Who is telling me? I don't think the agent knows this much.”
> Corrected: household only knows they **don’t have money**. **Very nice** = the drawer. **Who is telling me?** The **agent** does not know this much (the formula they just saw).

**05:19.690–05:30.390** Speaker A, flipping Loan amount open:
> Raw ASR: “How is the loan amount? I will show you the details. They give us a system. Or they give us details from our head office. They give us details.”
> Corrected: same. **They** = bank staff. Tools they have: a **system**, or **head office** details — not this breakdown.

**05:43.050–05:43.590** Speaker A:
> Raw ASR / corrected: “There is nothing like this.”

Click-opens-immediately is `11` (05:44–05:51). Then:

**06:19.060–06:30.750** Speaker A:
> Raw ASR: “It is true that we don't lie to the customer. We are here to empower you. We are here to empower you.”
> Corrected: same on the first empower (all words p>0.95). Second repeat is almost inaudible — still the same slogan. **don't lie** p≈0.24 on “lie”; keep the sentence; they are stating a rule.

**06:42.340–06:44.000** Speaker A:
> Raw ASR: “I will take a screenshot of you.”
> Corrected: they may mean screenshot **this** (the page). Not a product requirement.

## First-principles problem
- What must be true: the site **tells the calculation** because **nobody already knows it** — not the family, not the bank agent.
- Root vs symptom: “revolutionary” is praise. The root is the **job**: don’t lie; **empower**; don’t talk as if the customer were stupid.
- Constraints: keep the drawers they just called amazing (`01`, `08`). The click must be immediate (`11`) or the philosophy is theater.

## Directions they considered
- Position: **revolutionary** because EMI is opaque everywhere else.
- Voice: **don’t lie**; **empower you** — not “you don’t know anything.”
- Contrast: bank **system** / **head office** vs **nothing like this**.
- Lean: keep this as the north star for every calc drawer, including Charges next clip.

## Company / user / future thinking
- User: arrives broke and confused; an agent will not walk ÷12 and amortization (`08`, `09`).
- Company: Shroffin is independent comparison. Lying would be a rounded EMI with no math. Empowering is the math **in their language** (`07`).
- Future: `wb-rec-260816-0004` asks for one honest sentence on processing fee — same don’t-lie job.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: not a new widget — tone + completeness of `#hlc-drawer` EMI and loan-amount stories. Do not add a “revolutionary” headline unless they ask for marketing copy later.
- Acceptance criteria in their words: “Nobody knows how EMI is calculated.” “This is a revolutionary product.” “There is nothing like this.” “we don't lie to the customer.” “We are here to empower you.”
- What NOT to do: do not put “you don't know anything” on the page. Do not hide the formula to “simplify.” Do not treat this as a bug in the EMI number ₹37,938.
- Open questions: whether “empower you” becomes on-page voice or stays an internal rule.
- Related recordings:
  - continues_from: `08`, `09`
  - continues_in: `11` (the click they praised while saying this); `wb-rec-260816-0004` `01`

## Evidence index
- `audio.vtt` 04:30.170–05:43.590 and 06:19.060–06:30.750
- `audio.json`: revolutionary p≈0.95; empower first pass p≈0.99; second pass p≈0.00
- `events.json`: close t=303612; EMI reopen t=314269; loan-amount t=319980
- `screenshots/0039.jpg`–`0051.jpg`, `0059.jpg`–`0064.jpg`
- `replay.spec.ts`: `#hlc-drawer-close`; EMI and loan-amount cell buttons
