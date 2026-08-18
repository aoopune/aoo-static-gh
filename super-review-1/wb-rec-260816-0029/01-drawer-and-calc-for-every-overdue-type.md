# Drawer and calculation for every overdue-charge type — extra rupees if one EMI is missed

Clip 28 ended on **2% p.a. vs next month’s rupees**. Here they name the UI: **for every type of overdue charge**, a **drawer** with a **calculation** inside. The question is how much **extra money for a month** if **one EMI is missed**. Some banks sit at **24% p.a.** (ASR “24-step”). They do not click a cell; they scroll Other charges. Underlines and bounce land in later files in this folder.

## Classification
- kind: issue | calc drawer / missing rupee story
- status: open
- surface: explore-banks / **Other charges** tab · column **Overdue charge ‡**. Types in this take: **% p.a.** (CSB **24.00% p.a.**, Axis **8.00% p.a.**, Federal/HDFC **18.00% p.a.**, IDBI **2.00% p.a.**), **0% with a cap** (Canara / Central Bank), **fixed amount by overdue range** (DCB, blue `>`), later **% or ₹ floor + grace** (IndusInd / J&K / IDFC), **at home-loan interest rate** (Yes Bank in `05`). EMI bounce is a sibling column (`06`).
- viewport: 1366x768 @2x
- speakers: Speaker A throughout (“I need…”). ASR not diarized (`audio.json` language tag `mr`; this cue is English). No Speaker B turn (no “Yes / Okay / No bro”).

## Session metadata
- folder: `wb-rec-260816-0029`
- recording id: `1ce6b2c1-5803-4478-9e29-c1f823caae0f`
- clip: 29 of 30
- started_at: 2026-08-15T18:59:02.434Z
- ended_at: 2026-08-15T19:01:28.697Z
- duration_ms: 146263 (~2 min 26 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 17 (14 PNG + 3 JPEG: `0003.jpg`, `0015.jpg`, `0016.jpg`)
- event count: 58 (one **focus** on Collapse all; rest idle + scroll; **no charge-cell click**)
- console: empty (`console.json` is `[]`)
- tabs: 1 (never left Explore banks)
- pages.json: empty (`[]`)
- viewport: 1366×768, device_scale_factor 2
- previous: `wb-rec-260816-0013` ended 2026-08-15T18:52:58.320Z (~6 min earlier) — show how an overdue is made; **2% p.a.** vs **total amount in the next month**; “I have not used the money for an annum.”
- next: `wb-rec-260816-0031` starts 2026-08-15T19:01:37.835Z (~9 s after this take) — friendly-lawyer Notes language / MCLR / scheme names. Does **not** close this drawer.

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html` · title “Explore banks – Shroffin”
- Tab **Other charges** (Overview · Charges · Other charges). **1 selected** · **Apply once**. Filters in later stills: Bank type **All**, Rate **Floating**, Facility **Term loan**. Co-applicant **No** when the form peeks in (`0003.jpg`).
- Selected row in the early stills: **Bank of Maharashtra · Maha Super Housing Loan** (light blue; overdue **2.00% p.a.**, bounce **₹500**). Events never click another checkbox.
- **00:07.519** focus `getByRole("button", { name: "Collapse all" })` inside `div#hlc-charges-note` — Notes toolbar, not a cell. They never open `#hlc-drawer` in this clip.
- Scroll while they talk drawers / extra money / 24%: y ≈ 1149 → 908 → **697** (`0002.png` / `0003.jpg`, Axis **8.00% p.a.** at the top) → **1272** (`0004.png` t=32200) with **CSB Bank 24.00% p.a.** and DCB **Fixed amount by overdue range >** on screen as they say “24-step.”
- Current code: `openChargeSlabs` only for `overdue-slabs` / `rate-change-slabs` (DCB-style range). Percentage cells stay `.hlc-charge-rule` text. Bank **More** drawer foot: “Published rules are shown without estimating an event-specific amount.” `openCalculation` exists for loan amount / EMI / processing fee — **not** for overdue.
- Screenshots for this span: `0000.png`–`0006.png` (`0004`/`0005`/`0006` are the same 274459-byte frame while they idle on CSB 24%).

## What they said (faithful, complete)

**00:07.830–00:16.290** Speaker A:
> Raw ASR: “For every type of audio charge, I need a drawer and I need a calculation in the drawer.”
> Corrected: “For every type of **overdue** charge, I need a **drawer** and I need a **calculation** in the drawer.”
> ASR **audio** p≈0.82, **charge** p≈0.33 → **overdue charge** (column on screen; they say “overdue charge” clearly at 01:49 in `06`). “Every type” = not only DCB’s range link. Speech starts as they focus Collapse all.

**00:17.370–00:26.030** Speaker A:
> Raw ASR: “Because I need to know how much extra money I need for a month if my one EMI is missed. So I need to know how much extra money I need.”
> Corrected: same. The drawer’s job is a **rupee total for one missed EMI for one month**, not a % p.a. line. Continues 0013: “I put a total amount in the next month. I have not used the money for an annum.”

**00:27.030–00:32.850** Speaker A:
> Raw ASR: “Because some banks have a 24-step bank. I need to know how much extra money I need.”
> Corrected: “Because some banks have a **24%** [ASR **24-step**, p≈0.35 / 0.40] bank. I need to know how much extra money I need.”
> On screen at ~00:32 (`0004.png`): **CSB Bank overdue 24.00% p.a.** DCB is the range/`>` cell, not 24 rows. Do **not** invent a 24-row calculator. Later **IndusInd** is also **24.00% p.a.** (`04`).

They repeat “how much extra money” three times in this span. That is the output, not a second ask. The **underline click** is `03` (~30 s later). Reject-on-double is `02`.

## First-principles problem
- What must be true: a visitor who might miss **one EMI** can open **any** overdue cell and see **extra rupees for that month**, not only a published % or a range table.
- Root vs symptom: DCB’s blue “Fixed amount by overdue range >” is a symptom of **one** type already having a slab drawer. The root from 0013 is **% p.a. is not a month’s bill**. Every type (24% p.a., 0.20% or ₹200, range, “at home loan interest rate”) needs the same rupee story.
- Constraints: keep the published rule visible. Do not replace the table with a single blended fee. Bounce joins the **total** in `06`, not instead of this overdue calc.

## Directions they considered
- Drawer **per overdue type**, with a **calculation inside**.
- Output they name: **extra money for a month** if **one EMI is missed**.
- Lean: this is the 0013 calc, now specified as a drawer on every overdue cell. They do not ask to hide 24% or to change CSB’s published number.

## Company / user / future thinking
- User: % p.a. and “or ₹100, whichever is higher” do not answer “what do I pay extra **this month** if I miss once?”
- Company: showing the rule without the month’s rupees is how a 24% bank looks comparable to a 2% bank until the miss. That honesty is the same job as `02` (reject on penalty, not 0.1% rate).
- Future: `02` is why the calc exists (reject before taking the loan). `03` is the click target (underlines). `04` wants labels on the extremes. `05` flags Yes Bank’s “at home loan interest rate” as extraordinary. `06` adds EMI bounce into the **same** extra-money total. `07` says the spread is already on the table. `wb-rec-260816-0031` leaves this ask and goes to friendly-lawyer language / MCLR — do not treat the drawer as closed there.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `src/home-loan-compare.js` `openChargeSlabs` (today only `overdue-slabs` / `rate-change-slabs`), `overdueChargeDisplay` `action: "overdue-slabs"` (only when slabs.length > 1), `formatChargeDisplay` / `as_per_roi` → “At home loan interest rate”, `openCalculation` (loan / EMI / processing only). CSS: underlined charge figures vs `.hlc-charge-rule` links. Notes: `#hlc-charges-note` / Collapse all (they focus it; 0031 opens the groups).
- Acceptance criteria in their words: “for every type of overdue charge, I need a drawer and I need a calculation in the drawer”; “how much extra money I need for a month if my one EMI is missed.”
- What NOT to do: do not ship the calc only on DCB range. Do not treat ASR “24-step” as a 24-row UI. Do not drop the published % / grace / floor text. Do not fold `03`’s underlines, `05`’s “extraordinary,” or `06`’s bounce into this file as if they were said here.
- Open questions: which overdue **types** are in “every” (simple % p.a., % or ₹, grace days, range slabs, “at home loan interest rate”). Whether bounce is inside this same drawer (`06` says yes in the total). Whether clicking the column header ‡ / Notes is enough or every cell must open (`03` says the underlines).
- Related recordings:
  - continues_from: `wb-rec-260816-0013` `07`/`08` — overdue is made; 2% p.a. vs next-month total; “show me the calculation”
  - continues_in: same take `02` (reject if one miss costs double), `03` (click the underlines)

## Evidence index
- `audio.vtt` / `audio.txt` / `audio.srt` / `audio.tsv` / `audio.lrc` 00:07.830–00:32.850
- `audio.json` segments 1–5 (audio/charge; 24-step; extra money); language `mr`
- `audio.text` / `audio_sentences.txt` same opening paragraph
- `events.json`: focus Collapse all t=7519; scrolls y=1149.5 / 908.5 / 697 / **1272** (t=8630–29065)
- `screenshots/index.json` + `0000.png`–`0006.png` (`0004.png` t=32200 = CSB 24% / DCB `>`)
- `RECAP.md`: start_url explore-banks; duration 146263; timeline is idle-only (no markers)
- `manifest.json` viewport 1366×768 dsf 2; mic true; `console.json` `[]`; `tabs.json` 1 tab; `pages.json` `[]`
- `replay.spec.ts`: goto explore-banks; no cell click (idles only)
- Site: `pages/explore-banks.html` `#hlc-charges-note`; `src/home-loan-compare.js` as above; tests in `tests/run-unit.js` already assert CSB-class 24% / Yes Bank `as_per_roi`
