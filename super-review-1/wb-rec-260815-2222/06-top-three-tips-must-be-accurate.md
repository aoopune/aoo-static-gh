# Top three tips must be accurate — salary, no fake gap, closest offer

They come back to the feature after the Birbal pause: **Top 3 tips. But they must be accurate.**
Example while Self-employed is on screen: “You don’t have a salary.” They are **not** seeing a **gap between two offers** — so they must not invent one.
Then **no one can say that they are AI**, and “we are not going to get beaten up.” They tell the person: **your offer is this. The closest offer.**
If the product is **too** helpful (“you are giving so much money”), people ask **how can you be so helpful?** — they answer “it’s okay bro,” then honesty about who they are (`07`).

## Classification
- kind: product-thinking | feature quality
- status: open
- surface: explore-banks / Loan inputs occupation pills (Self-employed selected) + Bank options table (the offer list / “closest offer”). Tips UI still not built.
- viewport: 1366x768 @2x
- speakers: two people, not diarized. Same thread as `01`. No named disagreement on accuracy.

## Session metadata
- folder: `wb-rec-260815-2222`
- recording id: `8fda53c4-d7ea-49a9-806d-492199ec6b40`
- clip: 16 of 30
- started_at: 2026-08-15T16:52:14.273Z
- ended_at: 2026-08-15T17:01:08.512Z
- duration_ms: 534239 (~8 min 54 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 65
- event count: 65
- console: empty
- tabs: 1
- previous: `01` (build top three optimizations from the offer list); `05` just ended on funding
- next: `07` (two kids in the basement / people don’t believe we take no bank income)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Occupation: **Self-employed** selected, Salaried idle — matches the spoken “You don’t have a salary.” Verified on `0043.jpg` (t≈356s).
- Table: at least **Canara Bank** visible (₹5,400 / 20 yrs / ₹48 EMI). Rate/amount partly masked. This is the “list of offers” / “closest offer” they can point at without clicking. Only **one** row is in view — consistent with “we are not seeing a gap between two offers.”
- They still do not click Salaried, do not expand Adjust eligibility, do not sort another column.
- Screenshots `0043.jpg`–`0051.jpg` (t≈356s–426s). Same frame as `0000.jpg`.

## What they said (faithful, complete)

**05:54.790–05:56.830** Speaker A:
> Raw ASR / corrected: “Top 3 tips.”
> Same feature as `01` and 2213’s “top three tips.”

**06:04.270–06:06.510** Speaker A:
> Raw ASR / corrected: “But they must be accurate.”
> Hard quality bar. Not “sound smart.” **Accurate.**

**06:10.390–06:17.150** (example — occupation / salary):
> Raw ASR: “Why are we seeing this? You don't have a salary. Salary...”
> Corrected: same. On-screen occupation is **Self-employed**. The tip they are willing to show is the **true** constraint (“you don’t have a salary”), not a made-up lever. Trailing “Salary...” is unfinished (2213 had a six-month salary example; they do not complete a new salary-hack here).

**06:15.450–06:19.550**:
> Raw ASR: “We are not seeing a gap between two offers. They are accurate.”
> Corrected: same. They must **not invent** a gap between two bank rows. If the table doesn’t show a spread worth a story, don’t write one. Accuracy includes **what the offer list actually shows**.

**06:20.070–06:23.730**:
> Raw ASR: “No one can say that they are AI. No one can say that they are AI. We are not going to get beaten up.”
> Corrected: same (ASR repeats). Keep **AI**. If the three tips are **true** (real occupation, real offers), nobody can dismiss them as AI hallucination. “Get beaten up” = get attacked / lose the argument / lose trust — not a literal fight. This is `02`–`04` from the other side: you don’t **claim** AI; you also don’t **give people a reason** to accuse you of AI-slop.

**06:26.230–06:34.370**:
> Raw ASR: “We are telling them your offer is this. The closest offer.”
> Corrected: same. Customer-facing content is **your offer is [this]** and **the closest offer** — the actual / nearest row on the list — not a generated fantasy deal.

**06:34.810–06:48.070**:
> Raw ASR: “This feature is like if someone says you are giving so much money they are like how can you be so helpful?”
> Corrected: same. If the feature looks like it is **handing them so much money** (a huge save / too much help), the customer’s reaction may be suspicion: **how can you be so helpful?** (why would you, what’s the catch — same family as `07`’s “where do you get income from?”).

**06:50.410–06:51.970**:
> Raw ASR / corrected: “It's okay bro.”
> They are willing to live with that suspicion. The answer they develop next (`07`) is **honest smallness** (two kids in a basement, testimonials), not dialing down accuracy.

## First-principles problem
- What must be true: the three optimizations are **facts about this person’s inputs and this offer list** (no salary if self-employed; no fake gap; the closest real offer). Accuracy is what keeps the feature from being called **AI**.
- Root vs symptom: “don’t say AI” (`02`–`04`) is branding. The root quality problem is **wrong tips**. Hallucinated gaps or invented salary stories would both fail the user and **look like** the agents they don’t trust (`02`).
- Constraints: three tips; must be accurate; grounded in occupation/salary truth and in the table; say “your offer / closest offer”; accept that real help can feel suspiciously generous.

## Directions they considered
- Top 3 tips — **keep** (`01`).
- Must be **accurate** — **required**.
- Example tip: you don’t have a **salary** (Self-employed) — **in play**.
- Do not claim a **gap between two offers** they are not seeing — **required**.
- So no one can say the tips are **AI** — **desired outcome** of accuracy.
- Tell them **your offer** / **closest offer**.
- If people ask “how can you be so helpful?” — **it’s okay**; don’t solve it by lying or by an AI label. `07` is the character answer.
- Lean: ship only tips you can defend against the table and the form.

## Company / user / future thinking
- User: they can see the same Canara row and the Self-employed pill. If the site invents a gap or a salaried story, they will feel gamed (2213 already distrusted fake “prices are low” hype vs Amazon sales). Independent comparison only works if the numbers on the card match the sentence next to them.
- Company: the defense against “this is AI” is **not** a disclaimer; it is **being right**. That matches “never mention AI” and “I don’t trust the agent.” Helpfulness is allowed to feel almost too much if the numbers are real — because Shroffin takes **no bank commission**, so “so helpful” has no hidden DSA catch. The suspicion that follows (“where’s your income?”) is answered by **who we are** (`07`), not by making the tips worse.
- Future: 2204 forbade publishing “best parameters” to game; this file still allows **true** tips (you are not salaried; here is the closest offer) over months (`01`). Tension to keep: accurate help ≠ a cheat sheet of fake targets. 2231: “if you do this, it will be this much” — still must be accurate.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: the future top-3 tips module; it must read occupation (and the computed offer list), not a free-form LLM (`01`). Occupation pills in `pages/explore-banks.html`.
- Acceptance criteria in their words: “Top 3 tips. But they must be accurate.” “You don’t have a salary.” “We are not seeing a gap between two offers.” “No one can say that they are AI.” “Your offer is this. The closest offer.”
- What NOT to do: do not generate a spread the table doesn’t show. Do not tell a self-employed user a salaried story as if it were current fact (2213’s six-month salary idea is a **future** optimization, not a fake present). Do not add “AI” to make tips feel smarter. Do not treat ₹6,000 property / ₹48 EMI as a “gap” they discussed — they didn’t name those figures.
- Open questions: exact three tips per profile; how “closest offer” is chosen (rate? EMI? amount?). How to show a **future** salaried path without claiming they have a salary today.
- Related recordings:
  - continues_from: `wb-rec-260815-2213` (top three tips; self-employed / six-month salary; Google Flights on the list). `01` this folder.
  - continues_in: `07` (why people distrust “so helpful” / no bank income). `wb-rec-260815-2231` (“intelligence comes and then the list comes… if you do this, it will be this much” — still must be accurate).

## Evidence index
- `audio.vtt` 05:54.790–06:51.970
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json`
- `events.json`: idle; Self-employed already selected at session start
- `screenshots/0043.jpg`–`0051.jpg` (Self-employed + Canara row; one lender visible)
- `pages.json`: Occupation Salaried / Self-employed actions
- Site `pages/explore-banks.html`: occupation pills, Bank options table
