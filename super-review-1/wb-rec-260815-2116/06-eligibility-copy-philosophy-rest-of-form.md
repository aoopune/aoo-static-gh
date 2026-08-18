# Eligibility-copy philosophy for the rest of the form — why, which figure, no jargon, lecture in the i

This clip is not only two fields. They set a **method** for every Loan input: the **i** must answer why you want this and what it does in processing; don’t start with **sets**; don’t use words nobody in India knows; put extra explanation in the **i**, keep the label short. They finish the property label and click **About Age**. Next recording continues on **CIBIL**.

## Classification
- kind: discussion | copy + form-field philosophy
- status: open (method stated; remaining fields not rewritten in this clip)
- surface: Explore banks / `form#hlc-inputs` entire card (hero fields + recorded accordion “Adjust eligibility”)
- viewport: 1366×768 @2x
- speakers: Speaker A states the method on income and property. Speaker B joins on label length and “click on i.” Both are applying it as they move to Age.

## Session metadata
- folder: `wb-rec-260815-2116`
- recording id: `cff0d45a-1eff-4415-a374-98232f3208a8`
- clip: 9 of 30
- started_at: 2026-08-15T15:46:08.706Z
- ended_at: 2026-08-15T15:55:10.521Z
- duration_ms: 541815 (~9 min 2 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 95
- event count: 183
- console: empty
- tabs: 1
- ASR language: `en`

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Card in every mid/late screenshot: Monthly income, Property agreement value, Age, CIBIL score, Occupation, Purpose, **Adjust eligibility** (closed) with note “Existing EMIs, credit cards, income share for EMIs, tenure, co-applicant”, **See options**.
- They do **not** open Adjust eligibility in this session. They do **not** discuss Age’s tooltip text (on-page: “Sets the longest tenure banks will allow.” Learn more → `guide.html#tenure`). They only **click** Age’s **i** at **08:48.374** (`0092.jpg`) and again **08:58.005 / 08:58.617** (`0094.jpg`) as the clip ends.
- Session opened on the **results** filters rail (`0000.png`–`0001.png`, click **All**), then they returned to this form (`h1` click 00:44) to audit **Loan inputs** help — continuation of 2106’s “explain the trade-off on the **i**.”
- Next session `wb-rec-260815-2125` audio starts on **CIBIL score** (ASR Sibyl/Civil) — same card, next field in the pair under Age. Gap ~11 s after this clip’s `ended_at`.

## What they said (faithful, complete) — the method, not new field copy

From income (`01`–`02`):
- This is **main eligibility**.
- Sentence can be better; **sets** don’t work.
- Customer voice: **why do you want my [field]? What does it do in loan processing?**
- Keep the **which figure** rule when they have one (take-home, not CTC).

From property (`03`–`05`):
- **No one in India knows about ceilings.**
- Sentence **starts with sets** — same fail.
- Requirements are already in the **i**; change the wording, don’t add chrome.
- **Which value should I set?** / how does the loan get affected — education belongs here.
- **Should I click on i?** — yes: official/agreement/registry lecture in the popover.
- Label: don’t **overload adjectives**; **take a small one**.

They never read Age, CIBIL, Occupation, Purpose, or FOIR help aloud in this VTT. Do not invent quotes for those fields. The **on-page** strings that will meet this method next (for builders, from this recording’s `pages.json` / `pages/explore-banks.html`):

| Field | Current **i** (not discussed this clip) | Why it will get the same audit |
|---|---|---|
| Age | “Sets the longest tenure banks will allow.” | Starts with **Sets**; they physically open this **i** as the clip dies |
| CIBIL | “Changes the rates banks show you.” | Next clip: exact score vs windows |
| Occupation | “Changes which offers and rates you see.” | Why salaried vs self-employed (2106 already did public/private this way) |
| Purpose | “Top-up adds money on a home loan you already have.” | Why Regular vs Top-up |
| Existing EMIs | “Lowers how much new loan you can get.” | Why this number |
| Credit card limits | “Part of this counts as monthly load — the limit, not what you owe.” | Which figure (limit vs owed) — same family as take-home vs CTC |
| FOIR | “Cap on EMIs versus income…” | **Cap** is cousin to **ceiling**; “FOIR” is jargon |
| Tenure | “Years to repay. Changes your EMI.” | Closer to their why-pattern already |
| Co-applicant | income added; EMIs lower eligibility | Why a second person |

How to **build the other parts** from this clip (their method, not a new design system):
1. For each control, write the **i** as answers: why are you asking, what it does in processing, which number to type if there is a trap (CTC, market vs agreement, card **limit** not balance).
2. Ban **sets** as the first verb; ban words they say India doesn’t know (**ceiling**; treat **FOIR** / **cap** with the same test).
3. Keep labels short; extra definition in the **i**; Learn more stays for depth (`guide.html` anchors already exist).
4. One field per idea — they refused a second property box for registry vs agreement.
5. Honest limit: banks still value the house and still decide (`04`). Comparison copy must not sound like Shroffin sanctions.
6. Walk the card in order: they did income → property → Age **i** → (next file) CIBIL. Finish the rest the same way rather than a one-off tooltip voice per field.

## First-principles problem
- What must be true: every required (and every hidden Adjust) control is an **eligibility fact**. If the visitor cannot say why it is there, the form is extracting data, not making them knowledgeable.
- Root vs symptom: weak sentences on two fields are the symptom. Root: help was written as **engine captions** (sets, ceiling) instead of **replies to a borrower**.
- Constraints: same **i** component they already have (2106: explain public vs private, floating vs fixed, overdraft on the filter **i**s). Don’t add plus buttons or extra friction. Don’t turn **i** into aggregator score-bait.

## Directions they considered
- Apply the income/property test down the card. They physically start Age as the clip dies.
- Lean: one philosophy, many strings to rewrite later. No new layout.

## Company / user / future
- User: should leave the **i** knowing what changed in the bank table and which document/number to use.
- Company: independent comparison — we show how eligibility is built so the customer stays in control when they pick banks. We are not a lender.
- Future: `wb-rec-260815-2125` is the first application of this method to **CIBIL** (exact score vs 10-point windows vs dropdown — they argue UX there). Age’s “Sets the longest tenure” is still sitting un-audited in speech. Adjust eligibility is still closed.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: all `.hlc-field-help-text` nodes in `pages/explore-banks.html` (`#hlc-help-*`), plus matching guide anchors. Shared pattern: one popover component, many strings — change copy at the source, don’t fork a second help UI.
- Acceptance criteria in their words: each field can survive “why do you want this?” and “what does it do in loan processing?”; **sets** don’t work; **ceiling** doesn’t work in India; labels not overloaded; extra goes in the **i**.
- What NOT to do: do not rewrite Age/CIBIL/FOIR from this file as if they had approved new sentences — they didn’t speak those sentences. Do not hide Adjust eligibility’s fields from the same test. Do not add fields they didn’t ask for.
- Open questions: whether FOIR stays named FOIR; whether Age is next in their heads or they skipped it for CIBIL (events: Age **i** then session end; 2125 audio is CIBIL).
- Related recordings:
  - continues_from: `wb-rec-260815-2106` (explain filter trade-offs on the **i**; “we should learn this”) + this folder `01`–`05` (worked examples)
  - continues_in: `wb-rec-260815-2125` — CIBIL score input (exact vs windows vs dropdown); Age help still pending in speech

## Evidence index
- Method quotes: `audio.vtt` 01:06–03:06 (sets, why, ceiling) and 06:18–06:25 (“Should I click on i?”) and 08:18–08:59 (“small one”)
- `events.json`: About Age t=528374, 538005, 538617 (end of clip)
- `screenshots/0000.png`–`0001.png` (arrived from results); `0009.jpg`+ (form); `0092.jpg`–`0094.jpg` (Age **i** as they finish)
- `pages.json` / `RECAP.md` full Loan inputs help list
- Site `form#hlc-inputs` and `#hlc-form-more`
- Next: `wb-rec-260815-2125/audio.txt` starts “Sibyl score…”
