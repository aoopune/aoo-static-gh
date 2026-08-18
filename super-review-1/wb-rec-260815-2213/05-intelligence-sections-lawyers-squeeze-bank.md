# Codify the intelligence here: sections, biggest saving, lawyers who squeeze the bank

After the Amazon talk they point at **this page** again: this is where the intelligence gets **codified**, where **sections** will be made. First: the **biggest saving** — combine your and your wife’s income, property in her name, get her **PAN** made. You should be able to **read it in one go**. Comparison is only **one side**; they are **lawyers for you** — how to **squeeze the bank**. Long way to go. It is possible.

## Classification
- kind: issue | product-thinking + information architecture + positioning
- status: open (sections named; not on the page)
- surface: explore-banks / Loan inputs (co-applicant is behind recorded **Adjust eligibility**, still collapsed) — they describe **sections of intelligence** on this view, not a new URL.
- viewport: 1366x768 @2x
- speakers: Speaker A. No clear second-voice lines in this span. ASR not diarized.

## Session metadata
- folder: `wb-rec-260815-2213`
- recording id: `820288e7-0391-48c1-ae98-6c895d38b144`
- clip: 15 of 30
- started_at: 2026-08-15T16:43:16.850Z
- ended_at: 2026-08-15T16:52:07.526Z
- duration_ms: 530676 (~8 min 51 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 62 (JPEG; `screenshots/0000.jpg`–`0061.jpg`)
- event count: 67
- console: empty (`console.json` is `[]`)
- tabs: 1 (never left Explore banks)
- previous: `04` (~14 s silence after “I don’t believe in their sales”). Folder previous: `wb-rec-260815-2206` (wife’s name, combine income, hacks, 8th unique point).
- next: `06` (how to build; product is the problem). Folder next: `wb-rec-260815-2222` (feature needs to be built).

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Title: “Explore banks – Shroffin”
- Still the same card: income ₹1,00,000, property ₹6,000, Self-employed, Adjust eligibility **collapsed** (helper: “Existing EMIs, credit cards, income share for EMIs, tenure, co-applicant”). They **name** wife / co-applicant / property / PAN and **do not** expand Adjust eligibility or type co-applicant income.
- Screenshots `0036.jpg`–`0044.jpg` (t≈308s–374s): unchanged. “Sections will be made” is spoken over a page that has **no** those sections yet.
- What is **not** on screen: no “biggest saving” section, no PAN, no lawyer copy.

## What they said (faithful, complete)

**05:09.610–05:32.130** Speaker A (where it lives + first section):
> Raw ASR: “This is the intelligence that is being codified here. This is where the sections will be made. First and foremost, the biggest saving. Combine your and your wife's income and give your wife the name of the property. Give her the certificate of going home. And get her fan card printed here. You can read it in one go.”
> Corrected: **This is the intelligence that is being codified here. This is where the sections will be made.** **First and foremost, the biggest saving:** **combine your and your wife’s income** and put the **property in your wife’s name**. **Give her the home / home papers in her name** (ASR **“certificate”** p≈0.18, **“going home”** — “home” p≈0.98; same as `2206` “take the home loan in the name of your wife”; do not invent a government form name). **Get her PAN card made** (ASR **fan card** ≈ **PAN card**, “fan” p≈0.21; **printed** p≈0.07 — “made / issued,” not a print button). **You can read it in one go.**
> “Here” = this Explore banks view (`01` inline), not Amazon.

**05:39.610–06:06.970** Speaker A (how far the product is; lawyer):
> Raw ASR: “This is how it is. We have one side of the road. We have a good product to it. We still have a long way to go. Now, we have an application. I will tell you how to do it. It is not just comparing our lives. We are lawyers for you. How to squeeze the bank.”
> Corrected: **We have one side of the [work] done** (ASR **“one side of the road”**). **We have a good product** [on that side]. **We still have a long way to go.** Now we have an **application** — **I’ll tell you how to do it.** **It is not just comparing [loans / banks]** (ASR **“our lives”** — “our” p≈0.14, “lives” p≈0.54; next line is lawyers + squeeze the bank). **We are lawyers for you. How to squeeze the bank.**
> “Lawyers for you” matches the internal model (guide on the customer’s side). **Squeeze the bank** = get more from lenders for the customer (competition / negotiation), not hatred of banks. `2206` already: the person thinking of your benefit would tell you wait three months, set up the wife, etc.

**06:13.950–06:15.050**:
> Raw ASR / corrected: “It is possible.”

Then they pivot to **how to build** (`06`).

## First-principles problem
- What must be true: after comparison exists, the customer still needs **readable sections** that say how to **save the most** (income + applicant name + papers) — in **one go**, on **this** page.
- Root vs symptom: Adjust eligibility already lists co-applicant, but it is collapsed and silent. The root is **missing intelligence sections**, not a missing co-applicant field.
- Constraints they implied: **sections**; **biggest saving first**; readable **in one go**; comparison is **necessary but not sufficient**; stance is **lawyer for the customer** / how to get more from the bank. Same hacks as `2206` (wife’s name, combine income) now as **IA** on Explore banks.

## Directions they considered
- Codify intelligence **here**; make **sections**.
- First section: **biggest saving** (combine incomes, wife’s name on property, PAN).
- Product story: one side (compare) is good; the other side (lawyer / squeeze the bank) is the long way to go.
- They do not open Adjust eligibility. They do not write the section titles as UI strings beyond “biggest saving.”

## Company / user / future thinking
- User: will not discover “put it in your wife’s name” by toggling pills. They need it **written**, short, first.
- Company: live promise is compare every bank, customer decides, **we negotiate between banks**. “Lawyers for you” / “squeeze the bank” is that second job — information + competition — not becoming a lender. Do not ship villain copy about banks (startup-core: respect people, critique systems).
- Future: application flow (“now we have an application, I’ll tell you how”) sits after compare. Sections on Explore banks are the **bridge**. How the ranking is computed is `06`; don’t brand it AI (`2222`).

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: Explore banks around `#hlc-inputs` / bank-options — new **sections** of guidance, not a second tool (`01`). Co-applicant copy already exists under Adjust eligibility; this is **proactive** “biggest saving,” not only hidden fields.
- Acceptance criteria in their words: intelligence **codified here**; **sections**; **biggest saving** first; combine wife’s income + property in her name + **PAN**; **read in one go**; **not just comparing**; **lawyers for you**; **how to squeeze the bank**; **it is possible**.
- What NOT to do: do not expand this into a second website. Do not write “squeeze the bank” as customer-facing punch if it sounds like hatred (internal meaning = get a better deal for the customer). Do not invent a “certificate of going home” label. Do not delete comparison — they said that side is **good**.
- Open questions: are these the same **top three tips** as `03`, or a longer sectioned article? How to show wife/PAN hacks without becoming the `2204` cheat-sheet?
- Related recordings:
  - continues_from: `2206` (wife’s name, combine income, hacks, 8th unique point); `01`–`03` this folder.
  - continues_in: `06` (how to build); `2222` (feature needs to be built).

## Evidence index
- `audio.vtt` 05:09.610–06:15.050
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` (`fan card`, `comparing our lives`, `one side of the road`, `certificate of going home`)
- `events.json`: idle
- `screenshots/0036.jpg`–`0044.jpg`
- Site: `#hlc-inputs`, Adjust eligibility / co-applicant fields (collapsed)
