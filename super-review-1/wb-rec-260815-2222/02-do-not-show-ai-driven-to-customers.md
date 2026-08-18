# Do not show this as AI-driven — zero; engineering is not the customer’s concern

Right after they lock the top-three job, one of them asks from the **customer’s** point of view: should we show that this is all **AI** driven?
The answer is immediate: **No. Zero.** What they use in **engineering** is not the customer’s concern.
If they put a **prompt**, the **agent** will answer — and they do not **trust** that.
This is the company rule for customer-facing honesty: do not advertise the tool. Disclose who you are (`07`); do not disclose the stack.

## Classification
- kind: product-thinking | copy / positioning (company philosophy)
- status: open (rule stated; nothing on the page currently says AI)
- surface: explore-banks / no AI label exists on the recorded UI — the fight is whether the **future** tips feature (`01`) should be branded AI-driven
- viewport: 1366x768 @2x
- speakers: two people, ASR not diarized. Speaker B asks the customer-facing question. Speaker A answers **Zero** and the engineering / prompt / agent argument. Short “Why?” is B. Pushback “in engineering I don’t think so” is B (or the same debate continuing).

## Session metadata
- folder: `wb-rec-260815-2222`
- recording id: `8fda53c4-d7ea-49a9-806d-492199ec6b40`
- clip: 16 of 30
- started_at: 2026-08-15T16:52:14.273Z
- ended_at: 2026-08-15T17:01:08.512Z
- duration_ms: 534239 (~8 min 54 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 65 (identical frames)
- event count: 65
- console: empty
- tabs: 1
- previous: `wb-rec-260815-2213` called the same feature “completely **AI** driven” as a **build** comment. This clip first said they don’t actually use an **LLM** (`01`), then forbids **showing** AI to the customer.
- next: `03` (Postgres / recommendation engine / CA vs AI trust); `04` (Netflix, Google Flights, never mention AI)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Same frozen Explore banks view as `01`: Loan inputs (₹1,00,000 / ₹6,000 / 35 / 780 / Self-employed / Regular) and Canara Bank row. **No** “AI,” “LLM,” “agent,” or prompt box on screen. Nav is Guide / Tools / Support / About — ordinary product chrome.
- Click/focus/scroll: none. They argue in the air while looking at the ordinary comparison UI.
- Screenshots: `0008.jpg`–`0011.jpg` (t≈66s–90s) cover 01:05–01:29. Same pixels as `0000.jpg`.

## What they said (faithful, complete)

**01:05.250–01:10.710** Speaker B:
> Raw ASR: “But from the customer point of view, should we show them that this is all AI driven?”
> Corrected: same. Keep **AI**. Question is **show them** — a customer-facing claim — not “may we use it in the stack.” Follows immediately after “That’s it. This is all it is.”

**01:10.710–01:13.290** Speaker A:
> Raw ASR / corrected: “No, no. Zero.”
> Not a soft preference. **Zero** = do not show it as AI-driven. At all.

**01:13.690–01:18.630** Speaker A:
> Raw ASR / corrected: “What we use in engineering is not a concern of the customer.”
> Stack (AI, LLM, agent, later Postgres) stays backstage. The customer is owed the **result**, not the tool name.

**01:20.310–01:20.690** Speaker B:
> Raw ASR / corrected: “Why?”

**01:20.890–01:29.070** Speaker A:
> Raw ASR: “Because if we put a prompt, the agent will answer. I don't trust them.”
> Corrected: same. Keep **prompt** and **agent**. “Them” = **agents** (the thing that answers a prompt), not customers. If they expose a prompt, an agent answers, and they **do not trust** that answer enough to put it in front of a home-loan customer.

**01:31.650–01:36.550** Speaker B (pushback):
> Raw ASR: “It's not like that. I don't think so. In engineering, I don't think so.”
> Corrected: same. They do not accept “not the customer’s concern” as the end of the engineering story. The Postgres / “recommendations are AI based” debate in `03` starts on the next breath.

No layout complaint. No request to add an “AI” badge. The lean is **hide the machinery**.

## First-principles problem
- What must be true: a person using Explore banks should meet **Shroffin’s recommendation** (top three optimizations, the table of offers) — not a story that “an AI / an agent / a prompt” did it.
- Root vs symptom: the symptom would be an “AI-driven” label or a prompt box. The root is **whose concern the stack is**. Engineering choices are not a customer fact. Trust is about the **answer** and **who stands behind it** (`03`), not the brand of the tool.
- Constraints: **Zero** customer-facing AI-driven claim. Do not put a **prompt** in front of the user so an **agent** can talk. `01` already said they don’t actually use an LLM; this file says even if engineering uses AI-shaped tools, **do not show it**.

## Directions they considered
1. Show the feature as **AI driven** to the customer — **rejected** (“No, no. Zero”).
2. Keep engineering (AI / agent / prompt) off the customer’s plate — **accepted** as the rule.
3. Put a **prompt** and let an **agent** answer — **rejected** (they don’t trust that).
4. Pushback: “in engineering I don’t think so” — not resolved here; continues as “but the recommendations are AI based” in `03`.
- Lean: customer-facing honesty = **do not claim AI**. Not “claim it carefully.”

## Company / user / future thinking
- User: they came to compare banks and learn what to do next. Naming AI does not help them choose a lender. A prompt they cannot trust would hurt. Home-loan money is not a chat demo.
- Company philosophy (this clip’s core split): **what we use in engineering is not the customer’s concern.** Honesty here means **not pretending the stack is the product**, and **not** putting an untrusted agent on stage. It does **not** mean “disclose the model.” Shroffin is independent, transparent **banking comparison** — compare every bank, customer decides — not an “AI company.” `04` will say good companies never mention AI. `07` will say they **will** disclose being two kids in a basement who take no bank income. So they are not anti-honesty; they are anti-**tool theater**. The things a customer is owed: unbiased offers, accurate tips, who we are, that we are not paid by banks. The things a customer is not owed: Postgres, LLM, “AI-driven.”
- Future: do not add “Powered by AI,” a chatbot, or a visible prompt to Explore banks to market this feature. 2213’s “completely AI driven” was an **internal** build comment, not copy. `08` / 2231: the human who talks to customers is **chief product**, not the agent they don’t trust.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: any new tips/optimizations UI on or beside Explore banks; sitewide marketing copy that might say “AI-driven.” Today’s recorded `explore-banks.html` has no such label — **keep it that way**.
- Acceptance criteria in their words: “should we show them that this is all AI driven? No, no. Zero.” “What we use in engineering is not a concern of the customer.” “If we put a prompt, the agent will answer. I don’t trust them.”
- What NOT to do: do not “fix” by adding an AI badge, chatbot, or prompt field. Do not delete the optimizations feature (`01`). Do not treat this as a ban on **using** tools in engineering — the ban is **showing** them. Do not collapse this into Birbal/funding (`05`) or “tips must be accurate” (`06`).
- Open questions: how to name the feature in the UI if not “AI” (`04`: product language / Google Flights “prices are low”). Who stands behind the answer if not “the AI” (`03`: us / a CA / the recommendation engine).
- Related recordings:
  - continues_from: `wb-rec-260815-2213` (“completely **AI** driven” as how they’d **build** it). `01` in this folder (not an LLM; list of offers).
  - continues_in: this folder `03`–`05` (tool vs trust, never mention AI, Birbal). `wb-rec-260815-2231` storyboards intelligence after the form without an AI label in that speech either.

## Evidence index
- `audio.vtt` 01:05.250–01:36.550
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` (AI, prompt, agent)
- `events.json`: idle
- `screenshots/0008.jpg`–`0011.jpg` (same as `0000.jpg`; no AI chrome)
- `manifest.json`; `console.json` `[]`; `tabs.json` 1 tab
- Site `pages/explore-banks.html`: no AI/LLM/agent strings in the visible UI of this recording
