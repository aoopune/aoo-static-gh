# Don’t build for the first two paying customers — sample the whole income bell curve

“Second chapter”: they stop making the product from their own heads and talk about **customers** — and the **fallacies**. Startups take the first two people who paid, build those people’s features, feel **entitled** to that revenue, then the **mass market** does not want it; they get stuck on **institutional** customers. Second trap: pick a **single bubble** / one **cohort**. They have seen it at **YC**. Fix they start: a **bell curve** of income — ₹40,000 people and ₹5 lakh people — **equal samples** from every standard deviation, **people in between**. The next clip continues: even then the product should stay **opinionated**.

## Classification
- kind: discussion | sampling / who you build for
- status: open (cuts off mid-sampling; 2240 continues)
- surface: explore-banks still showing one demo profile (₹1,00,000 / Self-employed) — they use **income** as the sampling axis while that field is on screen
- viewport: 1366x768 @2x
- speakers: Speaker A carries the YC / first-customer / bell-curve argument. ASR not diarized.

## Session metadata
- folder: `wb-rec-260815-2231`
- recording id: `7b334a7d-43b4-4fd5-a754-99f766cf3f24`
- clip: 17 of 30
- started_at: 2026-08-15T17:01:14.381Z
- ended_at: 2026-08-15T17:10:02.771Z
- duration_ms: 528390 (~8 min 48 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 63 (JPEG)
- event count: 85
- console: empty
- tabs: 1
- previous: `wb-rec-260815-2222` (next customer, not mass; surveys)
- next: `wb-rec-260815-2240` (starts “All standard deviations are called sampling… product should be opinionated”)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Monthly income is still **₹1,00,000** (clicked in `07`). They now name **₹40,000** and **₹5 lakh** as other points on the **same** field’s distribution — they do **not** type those numbers.
- Scroll (small nudges while talking; payload empty):
  - **05:58.268** / **05:59.901** / **06:01.469**
- Then idle to end of take. Screenshots `0044.jpg`–`0062.jpg`: card + Canara row; income 1 lakh; property 6,000; CIBIL 780. They are **not** demoing 40,000 or 5 lakh on screen. End frame `0062.jpg` (t=524206) is the same rest state.
- No further clicks. The “bell curve” is talk, not a chart on the page.

## What they said (faithful, complete)

**05:59.690–06:21.910** (frame):
> Raw ASR: “In the second chapter... Now we are thinking... From making the product. Customer. Now you don't have a problem with yourself. You don't have to think about the customer. Whatever may be the case... But the real customer doesn't need it. That is if the input is missing. See how the scene is.”
> Corrected: “In the **second chapter**… Now we are thinking… from **making the product**. **Customer**.” The next lines are messy ASR: they are moving from building-in-a-vacuum (“don’t have a problem with yourself / don’t have to think about the customer”) to **the real customer** — and they flag **input is missing** (they know they do not have a proper customer sample yet). Do not over-smooth; they are entering a warning, not shipping a persona.

**06:24.030–06:29.590** Speaker A:
> Raw ASR / corrected (same): “I know the input is missing. But there are a lot of fallacies in it.”
> They know the sample is incomplete; jumping on the first feedback anyway is full of **fallacies**.

**06:31.950–07:04.830** Speaker A (problem 1 — first payers):
> Raw ASR: “Like... First of all... Any product... If the customer's profile is developed... This is a big problem for startups. Their first two customers... They make the features of the customer. And they think that the customer gave me money. I should serve it. And they end up making that the mass market does not want. They end up relying on those institutional customers. This is the first problem.”
> Corrected: same. Trap: **first two customers** pay → you **build their features** → you feel you **should serve** them because they **gave you money** → you build what the **mass market does not want** → you **rely on institutional** customers. “Customer's profile is developed” = you over-fit a profile from those first people, not “KYC is complete.”

**07:05.010–07:22.190** Speaker A (problem 2 — one bubble):
> Raw ASR: “The second problem is... The first customer we choose... We should not choose a single bubble. This is the second problem. Otherwise we will make our product catered to them. And do something different in the mass market.”
> Corrected: same. Do **not** choose a **single bubble** (one pocket of users). Else the product is **catered to them** and you do “something different” (wrong) for the **mass market**.

**07:26.050–08:05.170** Speaker A (money entitlement + YC):
> Raw ASR: “The first problem is... Basically... The first customer has given you a lot of money. So you feel entitled to that customer. And you end up screwing yourself for that customer. You are screwed. And once that customer's contract is over... Or he has given you revenue... Then you are screwed. And this is a very big problem. I have seen a startup... I have seen a startup for a single customer. I have seen this problem in YC as well.”
> Corrected: same. Restate of problem 1 with sharper economics: **a lot of money** → **entitled** to that customer → you **screw yourself** serving them → when the **contract** / **revenue** ends, you are still screwed. They have **seen a startup for a single customer**. They have **seen this in YC** as well. Not a Shroffin customer named.

**08:05.170–08:13.650** Speaker A (sampling question):
> Raw ASR: “And the second problem is... We have made it for a single cohort. A segment of me. But how did we do the right sampling?”
> Corrected: “We have made it for a **single cohort**. A segment of [users / ‘me’]. But how did we do the **right sampling**?”
> “Segment of me” = one slice (maybe “segment of people”); they are asking whether Shroffin has sampled **right**, not claiming they already did.

**08:17.810–08:43.930** Speaker A (bell curve — clip ends here):
> Raw ASR: “It looks like this. If there is a bell curve with standard deviations... These are the 40,000 income people. And these are the 5 lakh income people. So what we need is... We need equal samples from this... From this... From this... From this... All standard deviations. We need people in between.”
> Corrected: same. Picture: **bell curve** of **income**, **standard deviations**. Ends: people at **₹40,000** / month and people at **₹5 lakh** / month. Need **equal samples** from **each** band they point at (“from this” four times), **all standard deviations**, and **people in between** (not only the tails, not only the 1-lakh demo on screen). Recording **ends** on that sentence. 2240 starts: “All standard deviations are called sampling…”

No UI change. They do not add income brackets to the form in this clip.

## First-principles problem
- What must be true: do not let **the first two people who paid** (or one **institutional** / one **cohort**) define the product. Sample **across** the income distribution — 40k, the middle, 5 lakh — **equal** draws from the SDs, **people in between**.
- Root vs symptom: “input is missing” is not “the monthly income box is empty” (it has 1,00,000). The root is **missing customer sample**, plus the fallacy of serving whoever showed up with money first.
- Constraints: this sits next to `01` (hire users who make sense) and `02` (don’t satisfy every customer). Sampling widely ≠ building for everyone; 2240 will say the product must still be **opinionated**.

## Directions they considered
- Reject: features for first two payers; institutional lock-in; single bubble / single cohort / single customer (seen at YC).
- Need: **right sampling** on a **bell curve** of income; **equal samples** all SDs; **people in between**.
- Named numbers: **40,000** and **5 lakh** income — as ends of the curve, not as new form defaults this clip.
- Clip **does not** finish the method; 2240 says even that sampling cannot make you un-opinionated.

## Company / user / future thinking
- User: many incomes, not one “Shroffin person.” A ₹40k borrower and a ₹5 lakh borrower are both real; so are people **between**. The 1-lakh box on screen is one point, not the market.
- Company: Shroffin must not become a custom shop for the first paid / institutional client. YC-shaped failure mode is **named** so they can avoid it.
- Future: 2240 — if you consider all that feedback you still need an **opinionated** product, because perfect sampling is impossible **now** and people cannot tell their problems. This file must not steal that conclusion.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: **none as a widget.** Research / who they survey (`01` gift-card users) must not be only one income bubble. Do not add a “pick your cohort” control from this talk. Do not change `#hlc-monthly-income` default to 40,000 or 5 lakh because they named those as **sample bands**.
- Acceptance criteria in their words: don’t build the **first two customers’** features because they **paid**; don’t choose a **single bubble**; don’t get **entitled** to one fat contract; **equal samples** from **all standard deviations** of income (**40,000** and **5 lakh** and **in between**).
- What NOT to do: do not treat the on-screen ₹1,00,000 as “we only serve 1 lakh.” Do not overfit Explore banks to Canara-row leftovers. Do not skip 2240’s **opinionated** brake.
- Open questions: how many people per SD; salaried vs self-employed sampling (Self-employed is selected, never discussed here). Unanswered.
- Related recordings:
  - continues_from: `wb-rec-260815-2222` (next customer, not mass) and this clip `01`–`02` (who you talk to / who you ignore)
  - continues_in: **`wb-rec-260815-2240`** — sampling → **opinionated** product; “don’t do it because someone else wants it”; then back to gaming the pre-filled form

## Evidence index
- `audio.vtt` 05:59.690–08:43.930 (end of take)
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` / `audio.lrc` (first two customers, YC, 40,000, 5 lakh, standard deviations)
- `wb-rec-260815-2240/audio.vtt` 00:02.650+ completes “All standard deviations are called sampling”
- `events.json`: small scrolls t=358268 / 359901 / 361469; then idle through 08:48
- `screenshots/0044.jpg`–`0062.jpg`
- `manifest.json` ended_at 2026-08-15T17:10:02.771Z; next take `wb-rec-260815-2240` started 2026-08-15T17:10:04.687Z (~2 s later — same conversation)
- `pages.json` `[]`; `console.json` `[]`; `tabs.json` 1 tab
- Site backdrop: `#hlc-monthly-income` at ₹1,00,000
