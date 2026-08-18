# They mean credit utilization and FOIR — fixed obligation to income

Still on Existing EMIs (₹555 focused) they add **another** fact: ASR “debt to debt utilization ratio,” then they hunt the real name — **fixed obligation to something**.
That is **FOIR** (fixed obligation to income **ratio**), the on-screen **Share of income for EMIs / FOIR** at **55% (default)**.
Card **10% monthly load** sits in the same extra block.
Speaker B agrees three times: “Yes, correct.” / “Correct.” / “Correct.”

## Classification
- kind: issue | product (naming + include obligation / utilization)
- status: open
- surface: explore-banks / extra block: `#hlc-card-limits` + “About **10%** counts as monthly load”; `#hlc-foir` “Share of income for EMIs / FOIR” select **55% (default)**; help “Cap on EMIs versus income. Leave at 55% unless you know another figure.” They **talk** these; they do **not** click FOIR or the 10% select (focus stays on Existing EMIs from `04`).
- viewport: 1366x768 @2x
- speakers: Speaker A names utilization then “fixed obligation to something.” Speaker B: “Yes, correct.” / “Correct.” / “Correct.” ASR not diarized.

## Session metadata
- folder: `wb-rec-260815-2302`
- recording id: `1c3a6e22-3a9a-475d-8d5b-350dfe605171`
- clip: 20 of 30
- started_at: 2026-08-15T17:32:34.848Z
- ended_at: 2026-08-15T17:34:36.510Z
- duration_ms: 121662 (~2 min 2 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 19
- event count: 34
- console: empty
- tabs: 1
- previous: `04` (existing EMI is a big thing)
- next: `06` (if the offer is a surprise later → lose trust)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- `0007.jpg`–`0010.jpg`: extra block open. Directly under Existing EMIs: **Credit card limits** ₹0 + “About **10%** counts as monthly load”; then **Share of income for EMIs / FOIR** **55% (default)**.
- Idle through this talk. No change events on `#hlc-foir` or the 10% load control.
- 2249 `05` already said FOIR “does not belong to anyone” / **differs by bank**. They do not repeat that sorting here; they **name** the ratio.

## What they said (faithful, complete)

**00:45.620–00:47.200** Speaker A:
> Raw ASR / corrected: “And this is also one thing.”
> **This** = the next obligation picture in the extra block (cards / FOIR), after existing EMI (`04`).

**00:47.540–00:51.180** Speaker A:
> Raw ASR: “Debt to debt utilization ratio. That's what it's called.”
> Corrected: **debt utilization** / **credit utilization** (how much of credit or income is already spoken for). ASR **to** ~0.24 — “debt to debt” is a doubled word, not a second ratio they defined. Map this to **credit utilization / FOIR as they mean it**, not a new “debt-to-debt” metric.

**00:51.180–00:53.500** Speaker A:
> Raw ASR: “Fixed obligation to something.”
> Corrected: **fixed obligation to income** — they trail off on the last word. Full name they are reaching for: **FOIR = fixed obligation to income ratio**. Matches the on-screen label **FOIR**. **Fixed** ~0.95, **obligation** ~0.80, **something** ~0.96 (they did not say “income” clearly).

**00:54.020–00:57.280** Speaker B (three short agrees):
> Raw ASR / corrected: “Yes, correct.” “Correct.” “Correct.”

They do not set a new percent. They do not open the FOIR dropdown. They do not say “leave at 55%” (that is already helper copy).

The next line (“That’s why your EMI is not fixed”) is `06` — “fixed” there is almost certainly a different, failed ASR token (p≈0.001), not a second FOIR definition.

## First-principles problem
- What must be true: banks cap **obligations versus income** (FOIR) and count **credit load** (utilization / a share of card limits). Existing EMI (`04`) is one obligation; this is the **ratio / utilization** layer.
- Root vs symptom: two names in a row (utilization, then FOIR) are the customer hunting the right word. The root for the product is: those facts sit in a dropdown (`01`) but still have to **affect offers** (`02`).
- Constraints they implied: it has a real name (FOIR); B agrees. Do not invent a separate “debt-to-debt” field.

## Directions they considered
- Call out utilization, then correct toward **fixed obligation to income** (FOIR).
- B confirms the name.
- They do not pick 50/60/65/70% (the select options). They do not change 10% card load.

## Company / user / future thinking
- User: does not walk in knowing “FOIR.” They may say utilization or “fixed obligation to something.” The form already prints FOIR — the job is to make that **matter** in the table, not to quiz them.
- Company: FOIR **differs by bank** (2249 `05`). A single 55% default is a convenience, not “the customer’s number.” Credit-card **limit** load (10%) is how this page turns cards into monthly obligation — related to the Scapia story (`03`) only as “cards count,” not as applying for Scapia here.
- Future: 2304 will say they don’t know FOIR well but still want importance marked. Do not publish a “best” FOIR to game.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `#hlc-foir` / `#hlc-foir-face`; `#hlc-card-limits` + card-load percent. Label already includes **FOIR**.
- Acceptance criteria in their words: “this is also one thing”; utilization ratio “that’s what it’s called”; “fixed obligation to something” (FOIR); B “correct.”
- What NOT to do: do not add a field literally named “debt to debt utilization.” Do not hide FOIR because the word is hard. Do not treat 55% as a target to advertise. Do not skip this math when the accordion is closed (`02`).
- Open questions: one control vs two (card utilization vs FOIR cap). Where per-bank FOIR should live (form vs table) — 2249 `05` left that open.
- Related recordings:
  - continues_from: `04`; `wb-rec-260815-2249` `05` (share of income / bank differs)
  - continues_in: `06` (wrong EMI → surprise → lose trust); `wb-rec-260815-2304` (FOIR again; importance)

## Evidence index
- `audio.vtt` 00:45.620–00:57.280
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` (“Debt to debt”; “Fixed obligation to something”)
- `events.json`: still on `#hlc-existing-emis`; idle
- `screenshots/0007.jpg`–`0010.jpg` (FOIR 55% and 10% load visible)
- `pages.json`: FOIR select required false; helper “Cap on EMIs versus income…”
- Site `pages/explore-banks.html`: `#hlc-foir`, `#hlc-card-limits`
