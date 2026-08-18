# Build top three optimizations from the list of offers

2213 ended on “give me the best.” This take starts ~7 s later and locks what that feature is.
It needs to be built. It is not complex if they stay on a **list of offers** — they do not actually use an **LLM**.
The whole job is one call: here are all the offers; suggest the **top three optimizations** so the user can reach the **best offer** in the next few months to one year.
That’s it. This is all it is. Customer-facing “AI-driven” starts in `02`.

## Classification
- kind: product-thinking | feature spec
- status: open (not on the page yet)
- surface: explore-banks / they talk while sitting on `form#hlc-inputs` + Bank options table. No tips/optimizations chrome exists in this recording. 2213 still had not settled inline vs a different tool.
- viewport: 1366x768 @2x
- speakers: two people, not named on mic. ASR is **not** diarized. Language tag on `audio.json` is `mr`; this span is English. Speaker A states the spec (list of offers, not LLM, top three optimizations). Speaker B raises complexity “if they have added age,” then A answers “No.”

## Session metadata
- folder: `wb-rec-260815-2222`
- recording id: `8fda53c4-d7ea-49a9-806d-492199ec6b40`
- clip: 16 of 30
- started_at: 2026-08-15T16:52:14.273Z
- ended_at: 2026-08-15T17:01:08.512Z
- duration_ms: 534239 (~8 min 54 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 65 (JPEG; `screenshots/0000.jpg`–`0064.jpg`; every file 95454 bytes — same frame)
- event count: 65 (1 `landmark_snapshot` + 64 `idle`; **zero** click/focus/scroll/input)
- console: empty (`console.json` is `[]`)
- tabs: 1 (never left Explore banks)
- previous: `wb-rec-260815-2213` ended 2026-08-15T16:52:07.526Z (~6.7 s earlier) — different tool vs put it **here**; Google Flights “prices are low”; top three tips; “making a feature is a one-day job because it is completely **AI** driven”; look at all the offers; fill the form → “give me the best”
- next: `wb-rec-260815-2231` starts 2026-08-15T17:01:14.381Z (~5.9 s after this take) — surveys / gift cards / first users (this clip’s last breath); later that clip storyboards intelligence after the form, then the list

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Title: “Explore banks – Shroffin”
- Section: `h1` “Explore banks.” then form **Loan inputs** and region **Bank options**. Overview tab active. **Apply once** sits above the table. They do not name Apply once in this span.
- Frozen values the entire ~8.9 min (verified on `0000.jpg`, `0020.jpg`, `0043.jpg`, `0064.jpg` — identical):
  - Monthly income ₹1,00,000
  - Property agreement value **₹6,000** (leftover test figure; table loan ₹5,400 / EMI ₹48 follows it)
  - Age 35 · CIBIL 780
  - Occupation **Self-employed** (Salaried idle) · Purpose **Regular**
  - **Adjust eligibility** collapsed (“Existing EMIs, credit cards, income share for EMIs, tenure, co-applicant”)
  - **See options** on the card
  - Table: Lenders / Rate / Loan amount / Tenure / EMI — one visible row **Canara Bank** Housing loan. Rate cells have recorder black `mask_rects`
  - Filters: Borrower “Govt / PSU employee…” checkbox visible, not discussed
- Click/focus/scroll: **none**. `replay.spec.ts` is `goto` Explore banks, start screenshot, then idle comments.
- What is visible: the **offer list** they keep naming. There is **no** “top 3 tips,” “AI,” “LLM,” or prompt box. They are specifying a feature that is not built yet.

## What they said (faithful, complete)

Silent inspect **00:00–00:11**: no VTT. Same Explore banks frame.

**00:11.100–00:14.840** Speaker A (picks up 2213):
> Raw ASR: “Approximately, we have seen that this feature needs to be built.”
> Corrected: same. Word “feature” p≈0.84; “this” p≈0.13. “This feature” = 2213’s tips / best-offer helper (customer parameters + all offers → which best offer fits with minimum effort; also “top three tips”). Not a new page.

**00:17.060–00:18.680** Speaker A:
> Raw ASR / corrected: “It is not very complex.”

**00:20.340–00:25.100** Speaker B (complexity worry):
> Raw ASR: “But it can be very complex if they have added age.”
> Corrected: same words. ASR **age** p≈0.63; **added** p≈0.38. They never click `#hlc-age`. Ten seconds later A says they don’t actually use an **LLM**, so a likely intended word is **agent** (an LLM agent), not the Age input. Alternate kept: Age as an extra ranking dimension. Do not file an Age-field bug.

**00:25.780–00:33.640** Speaker A:
> Raw ASR: “No, we have a list of offers. There is no complex at all.”
> Corrected: “No, we have a list of offers. There is no **complexity** at all.” The table of bank options **is** that list (on screen: Canara Bank). Complexity is rejected because the input is a finite offer list, not an open-ended agent.

**00:35.040–00:38.940** Speaker A:
> Raw ASR / corrected: “Because AI means we don't actually use LLM.”
> Keep **AI** and **LLM**. 2213 had called the same feature “completely **AI** driven.” This clip **narrows** that: saying AI here does **not** mean they use an LLM.

**00:41.560–00:55.840** Speaker A (the job):
> Raw ASR: “Now, we are going to make a call that we have all the offers. You suggest top three optimizations that the user can reach the best offer in the next few months to one year.”
> Corrected: same. “Make a call” = the job they send (here are **all the offers** → return **top three optimizations**). Horizon: **next few months to one year** so the user can **reach the best offer** — not only a same-day form tweak. Matches 2213’s months-scale examples (six-month salary).

**00:59.000–01:01.080** Speaker A:
> Raw ASR / corrected: “That's it. This is all it is.”
> Scope lock. Not a chat agent, not a prompt box. Whether to *show* “AI” is `02`.

They do not pick inline vs a second tool (2213). They do not name the three optimizations. They do not mention LLM again after this beat.

## First-principles problem
- What must be true: given this person’s numbers and the **list of offers already on the table**, the product should name **three** concrete things they can do over **months to a year** to reach a **better / best offer**. That job is list-in → three suggestions out. It is not an open LLM.
- Root vs symptom: 2213’s “completely AI driven / one-day job” was a **build label**. The root here is the **job**. They strip the LLM so the feature stays simple.
- Constraints: stay on the offer list; do not add an agent/prompt path; time window is months–year; three items, not a lecture.

## Directions they considered
- Build the feature — required, not optional.
- Complexity if “age” / an **agent** is added — **rejected**. Stay on the offer list.
- “AI” in their mouths ≠ **LLM**. Do not design a chatbot.
- One call: all offers → top three optimizations so the user reaches the best offer in months–one year. “That’s it.”
- Lean: this is the spec. Placement (here vs another tool) was 2213. Customer-facing “AI-driven” is `02`. Accuracy of the three tips is `06`.

## Company / user / future thinking
- User: after filling Explore banks they should get **three** things they can actually do over the next months–year — a ranked to-do from **this** list, not a model demo. They still compare banks (the Canara row is the kind of object the tips must talk about). Shroffin’s job is independent comparison: full picture, customer decides — the tips sit **on** that picture, they do not replace it.
- Company: internally they may still say “AI.” They are explicit they **don’t actually use an LLM**. The asset is the **offer list they already compute**. Engineering is a means. The product is the recommendation they will stand behind (`03`: “our recommendation engine”). This is the same independence rule as no bank commission: they own the answer, they do not hide behind a tool or a lender.
- Future: `02`–`04` lock that this must **look like product intelligence**, not “AI.” `06` adds: the three tips **must be accurate**. 2231 later storyboards intelligence landing after the form, then the list. Do not publish a “best parameters” cheat sheet (2204) in the name of this spec.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: Explore banks workspace in `pages/explore-banks.html` (`#hlc-inputs`, Bank options table) plus whatever new tips/optimizations surface 2213 still had not placed (inline vs separate tool). Not nav, not footer, not Apply once.
- Acceptance criteria in their words: feature **needs to be built**; not complex because “we have a list of offers” and “AI means we don’t actually use LLM”; “suggest top three optimizations that the user can reach the best offer in the next few months to one year”; “That’s it. This is all it is.”
- What NOT to do: do not ship a customer-facing prompt / agent chat as this feature (`02` forbids showing it as AI-driven). Do not treat leftover ₹6,000 property / tiny Canara EMI as the issue (they never mention those numbers). Do not delete Age because ASR said “age.” Do not relitigate 2213’s one-vs-two interfaces here.
- Open questions: which three optimizations for a given profile; whether the note sits on this table (2213 “put it here”) or a different tool; how “months to one year” is shown without becoming the gaming sheet 2204 forbade.
- Related recordings:
  - continues_from: `wb-rec-260815-2213` — inline vs different tool; Google Flights; **top three tips**; “completely **AI** driven”; **all the offers**; “give me the best.” Earlier: `wb-rec-260815-2204` (don’t publish “best” parameters to game).
  - continues_in: this folder `02` (show as AI-driven? **Zero**) and `06` (tips must be **accurate**). `wb-rec-260815-2231` later: after the form, “the intelligence comes and then the list comes.”

## Evidence index
- `audio.vtt` 00:11.100–01:01.080
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.txt` / `audio.lrc` / `audio.json` (age p≈0.63; LLM; language `mr`)
- `events.json`: idle only after landmark at t=202; no click on Age or table
- `pages.json` / `RECAP.md`: Explore banks, Loan inputs, Bank options
- `screenshots/index.json` + `0000.jpg` (identical through `0064.jpg`)
- `manifest.json` viewport 1366×768, dsf 2; `console.json` `[]`; `tabs.json` 1 tab
- `replay.spec.ts`: `goto` explore-banks.html only
- Site `pages/explore-banks.html`: `#hlc-inputs`, `#hlc-age`, Bank options table
