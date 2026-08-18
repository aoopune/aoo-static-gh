# Up-to-down is money, rate, tenure; left-to-right is how important the column is

The last clip ended by dropping 1:1 field-to-outcome sections. This take starts on the same card and locks a two-axis map instead. **Up to down** = the results that matter most: how much money, what interest rate, what tenure. **Left to right** = how important that column is. Filling the form should make the person intelligent with only colors, sequencing, and order — no lecture. Do it even if it is not the hottest job this week.

## Classification
- kind: issue | product + layout (information hierarchy)
- status: open
- surface: explore-banks / `form#hlc-inputs` (Loan inputs card) **and** Overview table columns Lenders / Rate / Loan amount / Tenure (yrs) / EMI. They talk about input columns and result columns as one picture.
- viewport: 1366x768 @2x
- speakers: Speaker A states the map and the “become intelligent” rule. Speaker B: “Yes, yes, yes” at the start and “Yes, yes” on colors/order. ASR is not diarized. `audio.json` language tag: `mr`.

## Session metadata
- folder: `wb-rec-260815-2313`
- recording id: `152443cc-6acb-4cd3-848e-1e260b989c24`
- clip: 22 of 30
- started_at: 2026-08-15T17:43:51.324Z
- ended_at: 2026-08-15T17:52:30.230Z
- duration_ms: 518906 (~8 min 39 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`, `www.google.com` (Google is `05`; not this topic)
- screenshot count: 69 (`0000.jpg`–`0068.jpg`; `0044.png` is Google)
- event count: 112
- console: empty (`console.json` is `[]`)
- tabs: 2 unique ids (`tabs.json` has 5 entries from later switching); this block never leaves Explore banks
- previous: `wb-rec-260815-2304` ended 17:43:48.848Z (~2.5 s earlier) — column importance as stars / red–orange–green meter / 10-on-10; then they reject exclusive 1:1 sectioning (“How many?”)
- next: `wb-rec-260815-2322` starts 17:52:41.328Z (~11 s after this clip) — 60 lakh property / how many options; then change **See options** to **Compare banks**

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Title: “Explore banks – Shroffin”
- Section: `h1` “Explore banks.” then Loan inputs card, then Bank options / Overview table.
- On-page while they talk (idle until first click **01:10.746**):
  - Inputs: Monthly income **₹1,00,000**; Property agreement value **₹6,000** (leftover test value); Age **35 years**; CIBIL **780**; Occupation **Salaried**; Purpose **Top-up**. **Adjust eligibility** still **collapsed** (down-chevron + grey list: “Existing EMIs, credit cards, income share for EMIs, tenure, co-applicant”). Button **See options** (`#hlc-see-options`; later repo HTML already says Compare banks — that rename is `2322`, not this clip).
  - Table (Overview selected): Punjab National Bank, “Top-up Loan. More”; **Rate** covered by a recorder black mask in `0000.jpg`–`0008.jpg`; Loan amount **₹5,400**; Tenure **20**; EMI **₹52**. Sort arrow on Rate (ascending). Tabs Overview / Charges / Other charges. **Apply once** on the right. Filters / Borrower peek on the left.
- Click/focus: none in this span. First real click of the take is **01:10.746** opening Adjust eligibility — that belongs to `02`. A brief focus on `#hlc-property-value` at **01:10.648** is the miss on the way to that summary.
- Scroll: none until that open.
- Screenshots: `0000.jpg`–`0008.jpg` (t=197–68199). Same frame: heading, filled card, collapsed extra row, table peeking under. Black mask bars on some money fields are recorder redaction, not page UI.

## What they said (faithful, complete)

Silent inspect **00:00–00:03.460**: no VTT. Idle on the card.

**00:03.460–00:06.580** Speaker A (picking up 2304 mid-thought):
> Raw ASR: “So, for example, if this is the case, then we should do this, right?”
> Corrected: same. Low-confidence “this” (p≈0.11). “This” = the importance picture they were designing after 1:1 sectioning failed (stars / meter / score on columns). They are locking a rule, not asking a new page question.

**00:06.680–00:10.420** Speaker B, then A:
> Raw ASR: “Yes, yes, yes. And then, what should we do there? Up to down, right?”
> Corrected: same. B agrees (“Yes, yes, yes” p≈0.63/0.82/0.95). A names the first axis: **up to down**.

**00:11.560–00:17.600** Speaker A (what “up to down” ranks):
> Raw ASR: “Meaning, what is most important? How much money will we get? How much interest rate will we get? How much tenure will we get?”
> Corrected: same. **Money** p≈0.58; **interest rate** p≈0.93/0.69; **tenure** p≈0.36. The vertical order of **outcomes**: (1) how much **money** (loan amount), (2) **interest rate**, (3) **tenure**. Matches the Overview headers they can see: Rate, Loan amount, Tenure — they are ranking those results, not inventing new ones.

**00:17.940–00:21.160** Speaker A (the other axis):
> Raw ASR / corrected: “And what is left to right? The importance of the column.”
> **Left to right** p≈0.78/0.93/0.99; **importance of the column** p≈0.98/0.93. Left-to-right = how important that **column** is (the 2304 ask: stars / meter / 10-on-10 on each input). Not a new sort of the bank table.

**00:23.100–00:31.540** Speaker A (what the form is for):
> Raw ASR: “So, what does it mean? While filling this form, I become intelligent.”
> Corrected: same. Spoken as the user. The job of the layout is that **filling** teaches; you do not sit through a class.

**00:32.800–00:39.020** both:
> Raw ASR: “You are thinking that you are going to hit me. Yes, yes. I don't have to explain anything to you.”
> Corrected: “You are thinking that you are going to **teach** me. Yes, yes. I don't have to explain anything to you.”
> ASR: **hit** p≈0.36, **me** p≈0.58. Next line is “I don’t have to **explain** anything” (explain p≈0.92). A is telling B the form replaces the speech.

**00:39.700–00:47.860** Speaker A (cause they can already see):
> Raw ASR: “I directly understand that this happens due to property value. And this is the most important property, the tenure.”
> Corrected: “I directly understand that this happens due to **property value**. And this is the most important [attribute], **tenure**.”
> **property value** p≈0.56/0.81; **tenure.** p≈0.02 (very low — they may have said parameter / property as “attribute”). On screen: property **₹6,000** → table loan amount **₹5,400**; Tenure column **20**. They name property value as a **cause** and tenure as a **most-important attribute**. They do not give pixel rules. They do not click either field.

**00:50.480–00:56.420** A, then B:
> Raw ASR: “And you can use just colors and sequencing and order, right? Yes, yes.”
> Corrected: same. Tools allowed: **colors** (p≈0.56), **sequencing** (p≈0.59), **order** (p≈0.75) — not a paragraph of help. B: “Yes, yes” (low p, but the agreement is the only second-speaker line here).

**00:57.780–01:07.380** both (priority):
> Raw ASR: “Okay, if you apply it, then it will change. Maybe not most important at this moment. But it should be done. Okay.”
> Corrected: same. Applying this map **will change** the UI. It may not be the #1 job **this week**, but it **should be done**. Closing “Okay.” is B.

Layout they imply (not a mock they drew): vertical stack of outcomes by money → rate → tenure; horizontal rank of input columns by importance; color + sequence + order as the only teaching devices. Pros: user “becomes intelligent” with no lecture. Cons they name: doing it will change the page; they still want it. They do not re-pick stars vs meter vs 10-on-10 — that list is in 2304. They do not restore 1:1 sectioning (2304 `11` already killed it).

## First-principles problem
- What must be true: a person filling Explore banks should **see** what matters (how much money, rate, tenure) and **how much** each column matters, in the order people already read (top→bottom, left→right), so they get smarter from the act of filling — not from a talk.
- Root vs symptom: the fields and table already exist. The root is missing **grammar**: two axes (outcome rank vs column rank) plus visual rank (color / sequence / order). Helper sentences and “Learn more” are not this system. Exclusive sections (2304) are not this system either.
- Constraints they implied: no lecture; only colors + sequencing + order; still ship it even if it is not the hottest task today. Clip `07` later says people are already trained left-to-right and up-to-down — that is the same law, not a new layout.

## Directions they considered
- Two-axis map: up-to-down = outcome importance (money, rate, tenure); left-to-right = column importance. Lean: this is the rule; B agrees.
- Teaching device: colors + sequencing + order. They reject (as the user’s mouth) having to be **explained to**.
- Timing: apply it; it will change the UI; “not most important at this moment” but **should be done**.
- They do **not** re-pick stars vs meter vs score (2304 already listed those). They do not ask to rewrite helper copy in this block.

## Company / user / future thinking
- User: not here to take a class. They want to know how much money, what rate, what tenure, and which boxes actually move those numbers — while they type.
- Company: Shroffin is a comparison picture, not a lecture. If the card needs a founder to explain it, the product is doing the teaching in the wrong place.
- Future: 2304 wanted a visible importance mark on every column and then dropped fake 1:1 sections. This clip is the **reading order** for that mark. `07` in this same take justifies it as how people already read. Do not collapse this into the Compare banks rename (`2322`).

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `pages/explore-banks.html` Loan inputs (`#hlc-inputs`, field grid, `#hlc-property-value`, `#hlc-tenure`) and Overview table column order (Rate / Loan amount / Tenure / EMI). Visual rank: CSS/JS for color, sequence, and column order — not a new essay in the helpers.
- Acceptance criteria in their words: up to down = most important outcomes (how much money, rate, tenure); left to right = importance of the column; “while filling this form, I become intelligent”; “I don’t have to explain anything to you”; “just colors and sequencing and order”; “maybe not most important at this moment. But it should be done.”
- What NOT to do: do not “fix” this by adding a spoken tutorial or more helper paragraphs (they just forbade the lecture). Do not revive exclusive 1:1 sections from 2304. Do not treat leftover ₹6,000 property / Top-up as this issue. Do not rename See options here (`2322`). Do not hide extra fields in this name (`02` / 2249).
- Open questions: exact mapping of money vs rate vs tenure onto today’s table order (Rate is first today, with a sort arrow). Whether “column” means only inputs, only table, or both — they name both property value (input) and tenure (outcome). Stars vs meter vs 10-on-10 still open from 2304.
- Related recordings:
  - continues_from: `wb-rec-260815-2304` `02` (stars / meter / score) and `09`–`11` (section by what moves; then 1:1 dies). Earlier live-update loop: `wb-rec-260815-2240` `07` (changing a field should show what moves).
  - continues_in: not `2322` (Compare banks / banks vs lenders). Same-take `07` restates left-to-right and up-to-down as how people are trained.

## Evidence index
- `audio.vtt` / `audio.txt` / `audio.tsv` 00:03.460–01:07.380
- `audio.json` same span (language `mr`; **hit** p≈0.36; **tenure.** p≈0.02)
- `events.json`: idle only until focus `#hlc-property-value` t=70648
- `pages.json` [p1] / `RECAP.md`: Explore banks, Loan inputs, Bank options
- `screenshots/index.json` + `screenshots/0000.jpg`–`0008.jpg`
- `manifest.json` viewport 1366×768, dsf 2; `console.json` `[]`; `tabs.json` still on localhost
- Site `pages/explore-banks.html`: `#hlc-inputs`, `#hlc-property-value`, `#hlc-tenure`, Overview table
