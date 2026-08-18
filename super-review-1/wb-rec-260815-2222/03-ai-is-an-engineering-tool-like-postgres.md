# AI is an engineering tool like Postgres; people trust us (and a CA), not “AI said so”

The pushback after “Zero” is: but the recommendations **are** AI-based; AI is telling them.
The answer is: who cares — it is **our recommendation engine**. They do not tell people they use **Postgres** for the backend either.
**AI** is just another **engineering tool**. People have no concern which tool you use; they trust the **answer**, and they trust **us**.
The other side: the **basis** matters — if AI says one thing and the actual **CA** says another, people will trust the **CA**. So they still “have to tell them something” — which `04` answers without naming AI.

## Classification
- kind: product-thinking | positioning (trust / basis)
- status: open (philosophy; no UI change named)
- surface: explore-banks / still the frozen Loan inputs + bank table; no backend or CA badge on this page
- viewport: 1366x768 @2x
- speakers: two people, not diarized. Speaker A: Postgres analogy, “who cares,” recommendation engine, AI = engineering tool, they trust **us**. Speaker B: recommendations are AI-based; “how do you do it? The basis matters”; CA vs AI; “How? We will have to tell them something.”

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
- previous: `02` (Zero — don’t show AI-driven; don’t put a prompt)
- next: `04` (Netflix / Google Flights — good companies never mention AI)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Same idle frame. They point at **no** control. The “recommendations” they mean are the future tips (`01`) plus the bank-options table already showing offers.
- Screenshots `0011.jpg`–`0018.jpg` (t≈90s–148s) cover this span. Unchanged. Rate still masked; Canara still the only visible lender.

## What they said (faithful, complete)

**01:36.550–01:40.950** Speaker A:
> Raw ASR / corrected: “Do we say that we use Postgres for backend?”
> Keep **Postgres**. Customer-facing copy does not name the database. AI should get the same treatment.

**01:41.830–01:47.330** Speaker B:
> Raw ASR: “No, but the recommendations are AI based. AI is telling the recommendations.”
> Corrected: same. Keep **AI**. They concede they wouldn’t say Postgres, but argue recommendations are **different** because AI is the **source** of the advice.

**01:47.490–01:49.930** Speaker A:
> Raw ASR / corrected: “Who cares? It is our recommendation engine.”
> The public name is **our recommendation engine**, not “the AI.” Ownership sits with Shroffin.

**01:52.150–02:02.150** Speaker B, last fragment may be A restating:
> Raw ASR: “But how do you do it? The basis matters. Because if AI is saying something and the actual CA is saying something, then people will trust the actual CA's information. The actual CA is saying.”
> Corrected: same. Keep **AI** and **CA** (Chartered Accountant — the human professional basis, not a UI label on this page). **Basis** = who/what the answer rests on. If the same person hears “AI says X” and “the CA says Y,” they trust the **CA**.

**02:08.410–02:22.230** Speaker A:
> Raw ASR: “In engineering tools, AI is just another engineering tool. People have no concern about what engineering tool you are using. But they trust the answer that they are giving. They trust us.”
> Corrected: same. **AI** = one more engineering tool. Customer concern = the **answer**. Trust target = **us** (Shroffin), not the tool.

**02:23.990–02:26.770** Speaker B:
> Raw ASR / corrected: “How? We will have to tell them something.”
> If they won’t say AI, they still owe the customer **some** account of why the advice is good. Unresolved here. `04` answers with product language (Netflix “we think you’ll like this,” Google Flights “prices are low”). `07` answers with **who we are** (two kids in a basement, testimonials).

No one asks to put “CA-driven” or “Postgres” on Explore banks. The CA line is about **trust basis**. `04` will warn that “You said you are a CA driven company. But would I have trusted you?”

## First-principles problem
- What must be true: the customer trusts **Shroffin’s answer** (and, if it comes to a conflict, a **CA’s** information) more than a sentence that “AI told us.” The stack is not the basis.
- Root vs symptom: B’s symptom is “then we should say it’s AI, because that’s how the recs are made.” The root is **basis of trust**. Naming the tool can **weaken** trust if AI and a CA would diverge. Naming Postgres would be equally irrelevant.
- Constraints: do not advertise AI as the author. Do not leave a vacuum — “we will have to tell them something.” What they tell them is **not** settled in this beat.

## Directions they considered
- Say we use Postgres? **No** (rhetorical; obviously not).
- Say recommendations are AI-based because AI is telling them — **pushed**; answered with “who cares / our recommendation engine.”
- If AI and the actual CA disagree, trust the **CA** — granted as how people behave.
- AI = engineering tool; people trust the **answer** and **us**.
- Counter: **How?** We still have to tell them something.
- Lean: Speaker A’s rule stands (don’t name the tool). Speaker B’s open item is **what story replaces it** — taken up in `04` and `07`.

## Company / user / future thinking
- User: they do not inspect backends. They do inspect **who is responsible** when a house and a 20-year EMI are on the line. “AI said so” loses to “the CA said so.” They also lose to “the bank’s DSA said so” if Shroffin ever looked bought — which is why zero commission and **owning the recommendation** are the same honesty.
- Company: Shroffin should stand behind a **recommendation engine** as **theirs**. Using AI internally does not make them an “AI company” in the customer’s mouth. Honesty = own the answer; do not hide behind a model, and do not brag about one. Same as independent comparison: we show the list, we suggest, **the customer decides**. We do not outsource the suggestion’s authorship to “AI” any more than we outsource it to a bank that would pay us.
- Future: if copy needs a basis, it is **us** / professional judgment / the offer list — not “our LLM.” Do not add a CA badge from this clip; `04` is wary that “CA-driven” as a slogan may not create trust either. Accuracy of whatever they do say is `06`.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: copy around the future optimizations feature and any “how we recommend” / about text — not `Postgres`, not an AI byline on `#hlc-inputs`.
- Acceptance criteria in their words: we do not say we use Postgres; “Who cares? It is our recommendation engine.” “AI is just another engineering tool.” “They trust the answer… They trust us.” Basis: people trust the **actual CA’s** information over AI if the two differ. Still: “We will have to tell them something.”
- What NOT to do: do not add “Powered by AI” to satisfy B’s “recommendations are AI based.” Do not add “Powered by Postgres.” Do not put a prompt so the agent can “be” the basis (`02`). Do not fake CA quotes the CA did not stand behind (`06`: tips must be accurate).
- Open questions: the replacement sentence for “how do you do it?” (`04` product language vs `07` who we are). Whether “recommendation engine” is ever a customer-facing phrase or only this conversation’s name.
- Related recordings:
  - continues_from: `02` in this folder; `wb-rec-260815-2213` (feature described as AI-driven internally).
  - continues_in: `04` (good companies don’t say AI; never mention AI; Google Flights confidence). `wb-rec-260815-2231` is user-research / gift cards, not this trust-basis argument.

## Evidence index
- `audio.vtt` 01:36.550–02:26.770
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` (Postgres, AI, CA)
- `events.json`: idle
- `screenshots/0011.jpg`–`0018.jpg` (unchanged Explore banks)
- `manifest.json`; `console.json` `[]`
- Site `pages/explore-banks.html`: table of offers = the engine’s output on screen; no stack disclosure
