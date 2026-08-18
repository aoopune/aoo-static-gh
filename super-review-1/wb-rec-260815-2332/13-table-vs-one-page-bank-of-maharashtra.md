# What you see on the table, you should see on one page — Bank of Maharashtra

They close the clip on layout: what they see **on the table**, they want **on one page**, about **that bank**, **column by column**. You liked one bank — **Bank of Maharashtra is right there**; you can see everything there. They point **vertical** vs **horizontal** vs **vertical** again, then **there are more details**. Next take stays on this scheme.

## Classification
- kind: issue | table vs bank page (IA)
- status: open — they want the table facts available as one page for the bank you picked; More details is already the seed
- surface: Overview row **Bank of Maharashtra** / Maha Super Housing Loan / `#hlc-drawer` More details (Scheme + Eligibility open in `0073.png`; all collapsed in `0075.jpg`)
- viewport: 1366x768 @2x
- speakers: Speaker A. ASR not diarized. Language tag `mr`.

## Session metadata
- folder: `wb-rec-260815-2332`
- recording id: `244b886f-17a3-4f87-b2bf-d28ddfbcf6ab`
- clip: 24 of 30
- started_at: 2026-08-15T18:02:07.502Z
- ended_at: 2026-08-15T18:11:22.771Z
- duration_ms: 555269 (~9 min 15 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 76
- event count: 158
- console: empty
- tabs: 1
- viewport: 1366×768, device_scale_factor 2
- previous: `12` (charges on request)
- next: `wb-rec-260815-2341` starts 2026-08-15T18:11:25.578Z (~3 s later) — same BoM More details; scheme name is what you tell the manager. Do not treat 2341 as a new bank.

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- `0073.png` (t=530172, ~08:50): More details still BoM. **Scheme** expanded (Maha Super Housing Loan, Floating, …). **Eligibility** expanded: CIBIL 750–799; **Age 18–75**; Occupation Salaried. Table behind: BoM / IOB / PNB at 7.25%.
- `0075.jpg` (t=550169, ~09:10): all drawer sections **collapsed** (Scheme through Fees that may apply later); GST footnote. Adjust eligibility (₹555) visible again behind the drawer.
- No clicks in `events.json`. They are talking while looking at table (horizontal row) vs drawer (vertical stack).
- Bank of Maharashtra is **row 1** after Floating + rate/EMI sort — “right there.”

## What they said (faithful, complete)

**08:50.510–08:59.950** Speaker A:
> Raw ASR / corrected: “So, basically, what I see on the table, I see it on one page. About that bank, column by column.”
> *table* p≈0.87, *one* / *page* p≈0.50 / 0.98, *column by column* last word p≈1.00.

**09:00.310–09:05.830** Speaker A:
> Raw ASR / corrected: “You liked one bank, right? The bank of Maharashtra is right there. You can see everything there.”
> *Maharashtra* p≈0.99. *liked* p≈0.44 — “you picked / you liked.”

**09:06.570–09:11.410** Speaker A:
> Raw ASR / corrected: “This is vertical. This is horizontal. This is vertical.”
> *vertical* p≈0.24 then 0.77; *horizontal* p≈0.68. **Horizontal** = the table row (Lenders | Rate | Loan | Tenure | EMI). **Vertical** = the More details stack (Scheme, Eligibility, …). They say vertical twice — the page they want is the vertical of that one bank.

**09:12.290–09:14.550** Speaker A:
> Raw ASR / corrected: “There are more details.”
> *more* p≈0.87, *details* p≈0.97. Drawer title / leftover sections. 2341 keeps going from here.

## First-principles problem
- What must be true: once you **like one bank**, every column you compared should still be true on **that bank’s page**, not only as a slice of a 33-row table.
- Root vs symptom: the table is for comparing. The gap is the **one-bank** view. More details is already vertical; they want that to be the page, column by column.
- Constraint: do not throw away the table (`02` tabs are the best). Add (or grow) the one-page, don’t replace compare.

## Directions they considered
- Table facts → **one page** for the bank you liked.
- BoM is the example (it’s right there).
- Vertical (drawer / page) vs horizontal (row).
- More details continues.
- Lean: IA direction, not a mock. 2341 will say put scheme **in the product, not a blog**.

## Company / user / future thinking
- User: compares, then takes **one** lender to the branch. They need a single picture (scheme name, rate, charges) — 2341: tell the manager the scheme.
- Company: independent comparison, then a clean handoff to one lender. Not 33 microsites as blogs.
- Future: 2341 `01`–`03` (scheme, in the product, click cue). This clip only names the table/page split.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `#hlc-drawer` More details; More (+) on the BoM row; Overview columns. Do not start a parallel “bank blog” page (2341 will forbid that).
- Acceptance criteria in their words: “What I see on the table, I see it on one page. About that bank, column by column.” “Bank of Maharashtra is right there. You can see everything there.” “This is vertical. This is horizontal.” “There are more details.”
- What NOT to do: do not delete the compare table. Do not send them to a CMS blog. Do not treat Age 18–75 in `0073.png` as the `05` “max is 30” ticket. Do not invent a second Bank of Maharashtra URL in this clip — they didn’t name a path.
- Open questions: grow the drawer into the “one page,” or a real `/bank/…` route. 2341 takes scheme-name next.
- Related recordings:
  - continues_from: `02` (tabs/columns); `11`–`12` (this drawer)
  - continues_in: `wb-rec-260815-2341` `01-scheme-name-tell-the-manager.md`

## Evidence index
- `audio.vtt` 08:50.510–09:14.550
- `screenshots/0073.png`–`0075.jpg` (BoM Scheme + Eligibility; then collapsed More details)
- `manifest.json` ended_at 18:11:22.771Z; next folder started_at 18:11:25.578Z
- `wb-rec-260815-2341` audio opens on Maha Super Housing Loan
