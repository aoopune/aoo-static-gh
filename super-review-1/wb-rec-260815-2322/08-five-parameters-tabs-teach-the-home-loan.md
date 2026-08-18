# Four columns belong to the tab — a home loan is judged on about five things

Once the stack is “exactly like this,” they lock the **mental picture**: the **four columns** on Overview (Rate, Loan amount, Tenure, EMI) **belong to that tab**. Switch tab → different columns. They say **five tabs** matter for everything (only **three** exist on screen). You should **learn the home loan from this table UX**, not by reading the guide. The five aspects they list: rate, loan, tenure, EMI, then processing / legal charges.

## Classification
- kind: discussion | information architecture / UX teaching
- status: open (model stated; five tabs vs three on page not reconciled)
- surface: explore-banks / Overview columns Rate, Loan amount, Tenure (yrs), EMI / Charges / Other charges / future column groups
- viewport: 1366x768 @2x
- speakers: Speaker A. Speaker B: quiet in this stretch after “yes yes yes” in `07`. No disagreement. ASR not diarized. Language tag `mr`.

## Session metadata
- folder: `wb-rec-260815-2322`
- recording id: `bcd9788e-d24d-4ab3-8482-49a528a01c2f`
- clip: 23 of 30
- started_at: 2026-08-15T17:52:41.328Z
- ended_at: 2026-08-15T18:01:46.586Z
- duration_ms: 545258 (~9 min 5 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 72
- event count: 149
- console: empty
- tabs: 1
- previous: `07` (view locked: form up, answer down)
- next: `09` (how they arrived at this UX); `wb-rec-260815-2332` “columns belong to this tab… these tabs are the best”

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Overview (`0053.jpg` onward, after Edit): **Lenders** sticky + **Rate, Loan amount, Tenure (yrs), EMI** — the “four columns.” All visible rows ₹48,00,000 / 20 years; PNB 8.75% ₹42,418.
- Charges / Other charges were demonstrated in `06` (`0035.png` / `0036.png`): bank column stays, metric columns replace.
- On-page tablist still has **three** buttons only. They never click a fourth or fifth tab because none exist.
- Idle / no extra tab clicks in 07:07–08:12. `0055.jpg`–`0064.jpg` stay on this Overview stack.
- `2313` already ordered importance **up-to-down** on the form (money, rate, tenure) and **left-to-right** on columns. This clip maps those columns **onto tabs**.

## What they said (faithful, complete)

**07:07.070–07:26.470** Speaker A:
> Raw ASR: “Basically, these four columns... Belong to this tab. If I switch tabs, there are different columns. If I switch tabs again, there are different columns. If you make a very clear mental picture... That... These five tabs... Are important for me. For everything. In every tab, these columns are important.”
> Corrected: **These four columns belong to this tab** (Overview). **Switch tabs → different columns** (they showed that in `06`). Hold a **clear mental picture**: **five tabs** matter **for everything**; **in every tab, [its] columns are important.**
> ASR “five tabs” vs UI **three** tabs: do not invent two missing labels. They may be counting **aspects** (`five parameters` below) or planned groups.

**07:27.310–07:38.810** Speaker A:
> Raw ASR: “This means... You get to learn all the home runs here. Games. Games. Just... Write, UX. You don't get to read the guide.”
> Corrected: **home loans** (not baseball). **Games** is leftover/unclear — do not turn it into a feature. **Just write UX**: the table **teaches** the product. The customer should **not have to read the guide** to understand what to compare.

**07:40.170–07:57.290** Speaker A:
> Raw ASR: “I mean... If you have a home run, you have to judge it from five parameters. If you have a home run, you have to judge it from five parameters. Defaults. Rate, loan, tenure, EMI. Processing charges. Legal charges. Legal formats. These are the five aspects.”
> Corrected: **If you have a home loan, you judge it from five parameters.** **Defaults** on Overview: **Rate, loan, tenure, EMI.** Then **processing charges** and **legal charges** (ASR also **legal formats**). They call that set **the five aspects** even though the spoken list is four defaults + charges families — Overview’s four + charges tabs.

**07:58.150–08:12.130** Speaker A:
> Raw ASR: “Then... There are four types of charges in processing charges. This comes from here. The models are... Interact, code, code. And... The UI fits. It fits perfectly.”
> Corrected: **Processing charges has four types** (they do not name the four in this clip). “This comes from here” = those types **feed the Charges tab**. ASR **Interact, code, code** is not a page string — likely stumble into the next line. **The UI fits. It fits perfectly.**

## First-principles problem
- What must be true: a stranger can **see** that a home loan is a small set of comparable facts, grouped, without a lecture.
- Root vs symptom: tabs are not decoration. They are the **syllabus**. Columns are the sentences. The guide is backup (“You don't get to read the guide”).
- Constraints: four Overview columns stay the default judgement set; charges split into processing vs later/legal; don’t add guide-reading as the way to understand the table.

## Directions they considered
- Four columns **owned by** the active tab — **lock.**
- Switching tabs **must** change columns — **already demoed.**
- Five tabs / five parameters — **the teaching model**; not a request to draw five chips in this recording.
- Table UX instead of guide — **lean: yes.**
- UI already fits — **praise.**

## Company / user / future thinking
- Power back to the customer: they can **judge** a loan the way a practitioner would (rate, amount, tenure, EMI, charges) without Shroffin picking a bank.
- `2313`: left-to-right = column importance. This clip: that row of importance **sits inside a tab**.
- More charge types will land under Charges (“four types… this comes from here”) — still not a reason to explode Overview.
- `2332` repeats “columns belong to this tab” as the best UX they have seen.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: column-group tabs `essentials` / `charges` / `laterCharges`; Overview column set Rate, loan, tenure, EMI; Charges column definitions in `src/home-loan-compare.js`.
- Acceptance in their words: four columns belong to this tab; switch tab → different columns; five aspects to judge a home loan; defaults Rate, loan, tenure, EMI; processing + legal charges; UI fits; learn it here, not from the guide.
- What NOT to do: do not put all charge types on Overview. Do not require the guide to explain the tabs. Do not invent tab four and five names they did not say. Do not fold the sandwich / six-to-nine-months story into this file (`09` / `10`).
- Open questions: what are the five tabs if only three exist? What are the four processing-charge types? Unnamed here.
- Related recordings:
  - continues_from: `06` (they already switched columns) + `07` (view locked)
  - continues_in: `09-sandwich-six-to-nine-months-process-mastery.md`; `wb-rec-260815-2332` “columns belong to this tab… these tabs are the best”

## Evidence index
- `audio.vtt` 07:07.070–08:12.130
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.lrc` / `audio.json` same span
- `screenshots/0053.jpg`–`0064.jpg` Overview four columns
- `events.json`: idle in this span (last click before it is `main > div` at 392.22s)
- Site: `.hlc-column-tab` ×3; Overview headers in `0006.jpg` / `0053.jpg`
