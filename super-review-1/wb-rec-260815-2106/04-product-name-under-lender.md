# Grey line under the lender is the product name — they say nice

With the table open they look at the small grey text under each bank (e.g. “Housing Loan For Public”). One asks if that is the product name. The other answers it is the name of the “team” (ASR; likely the bank’s product/scheme). They say nice and move on. Not a complaint.

## Classification
- kind: discussion | praise (they accept the line)
- status: not-a-bug
- surface: Explore banks / lender table / Lenders column — bank name + grey product line + “More”
- viewport: 1366×768 @2x
- speakers: Speaker A: “Is this the product name?” Speaker B: “It is the name of the team.” Then “Nice.”

## Session metadata
- folder: `wb-rec-260815-2106`
- recording id: `2c589daf-48f1-4304-8831-5a9870fea870`
- clip: 8 of 30
- started_at: 2026-08-15T15:36:22.615Z
- ended_at: 2026-08-15T15:45:24.586Z
- duration_ms: 541971 (~9 min 2 s)
- start_url: `http://localhost:8765/`
- hosts: `localhost:8765`
- screenshot count: 92
- event count: 202
- console: empty (`console.json` is `[]`)
- tabs: 1
- previous: `wb-rec-260815-2018` — homepage, not this table
- next: `wb-rec-260815-2116` — input sentences; they do not return to this label

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html` after See options.
- Scroll while they look: **01:20.710** y=576.5; **01:37.978** y=604.5; **01:41.111** y=721.5 (down the table).
- Click: none in this span (next clicks are Public/Private at 01:42).
- Screenshots:
  - `0011.jpg` (t=71994) — table just opened; PNB “Housing Loan For Public”, Canara “Housing loan”, CBI “Cent Home loan”
  - `0012.jpg` (t=80208) — same column: Axis “Home Loan”, BoM “Maha Super Housing Loan”, IOB “Subhagruha…”
  - `0013.jpg` (t=88208) / `0014.jpg` (t=96209)
- What is visible: bold **bank** name, grey **product** name under it, “More”. They are naming that grey line, not the Shroffin title “Explore banks.”

## What they said (faithful, complete)

**01:26.350–01:27.530** Speaker A:
> Raw ASR / corrected: “Is this the product name?” (`product` p≈0.52)

**01:27.830–01:28.710** Speaker B:
> Raw ASR: “It is the name of the team.”
> Corrected: ASR **team** (word p≈0.54). On-page the grey line is the **bank’s loan product / scheme** (Housing Loan For Public, Maha Super Housing Loan, …). Likely **scheme** (Indian word for a named loan) or “product,” not a Shroffin “team” feature. Do not invent an internal team-name field.
> They immediately accept it.

**01:29.150–01:29.910** overlapping:
> Raw ASR / corrected: “Nice. Nice.”

**01:37.240–01:40.860** Speaker A:
> Raw ASR: “This is how it is. Nice.”
> Corrected: same — keep showing it this way.

No request to hide the grey line, merge it into the bank name, or rename columns.

## First-principles problem
- What must be true: each row must show **which lender** and **which named loan** of that lender, because banks sell more than one home-loan scheme.
- Root vs symptom: they were checking a label, not reporting a bug. The line already does that job.
- Constraints: keep bank vs product as two lines. Do not replace product names with “team.”

## Directions they considered
- Identify the grey line → accept it (“nice”). No other design.

## Company / user / future thinking
- User: needs the scheme name (Cent Home, Subhagruha, …), not only “Canara Bank.”
- Company: Shroffin standardizes third-party products; the name under the logo is the **lender’s product**, not Shroffin’s.
- Future: filters next (`05`); they do not return to this label.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: Explore banks compare table lender cell in `pages/explore-banks.html` / table render JS (bank name + product subtitle + More).
- Acceptance criteria in their words: they can tell it is the product/scheme name; “this is how it is”; “Nice.”
- What NOT to do: do not delete the grey product line. Do not add a “team” column from the ASR. Do not confuse this with homepage “team point” talk in `1951`.
- Open questions: exact word after “name of the ___” (team vs scheme). Intent is: that line is the loan’s name, and they like it.
- Related recordings:
  - continues_from: `03` (table just opened)
  - continues_in: `05` All / Public / Private

## Evidence index
- `audio.vtt` 01:26.350–01:40.860
- `audio.json` word “team.” p≈0.54
- `events.json`: scrolls t=80710 y=576.5, t=97978 y=604.5, t=101111 y=721.5; no click
- `screenshots/0011.jpg`–`0014.jpg`
- Site: lender column on `pages/explore-banks.html`
