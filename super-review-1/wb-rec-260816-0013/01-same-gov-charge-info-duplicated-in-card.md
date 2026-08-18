# Same government-charge story is copied into every bank card

They open **Charges**, glance at SBI’s property-check drawer (the last clip’s 1-2-3-4), then spend the rest of this span on **government charges**. HDFC and Yes Bank both open to the same four cards and the same **₹30,518**. They say it is **stamp duty** and **registration**, ask what **NOI** is, and keep repeating: this information is the **same**, in the **same card**.

## Classification
- kind: issue | product + layout / duplicated state pack
- status: open
- surface: explore-banks / **Charges** tab / column **Government charges ^** (`#hlc-th-governmentCharges`) / drawers “Show how government charges for **HDFC Bank** / **Yes Bank** was calculated” / Notes `details#hlc-charge-note-government-charges`
- viewport: 1366x768 @2x
- speakers: Speaker A drives. ASR is not diarized. No named second speaker in this span. Language tag on `audio.json` is `en`. First ~90 s of ASR is noisy (temperature 1.0, several word p≈0).

## Session metadata
- folder: `wb-rec-260816-0013`
- recording id: `924b010f-fab9-4953-ba2d-7edc0de4e239`
- clip: 28 of 30
- started_at: 2026-08-15T18:43:33.349Z
- ended_at: 2026-08-15T18:52:58.320Z
- duration_ms: 564971 (~9 min 25 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 82 (`0000.png`–`0018.png`, `0019.jpg`–`0027.jpg`, `0028.png`–`0081.png`)
- event count: 180
- console: empty (`console.json` is `[]`)
- tabs: 1 (never left Explore banks)
- previous: `wb-rec-260816-0004` ended 2026-08-15T18:43:30.319Z (~3 s earlier) — property-check / processing-fee **bars should flow 1-2-3-4**, not stack independently. This take opens Charges on that same SBI property-check total, then moves to government charges.
- next: `wb-rec-260816-0029` starts 2026-08-15T18:59:02.434Z (~6 min after this take ended) — overdue **drawer + calculation** for every type; not a continuation of government charges.

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html` — title “Explore banks – Shroffin”
- Inputs in view across the take: Co-applicant **No**; Bank type **All**; Rate **Floating**; Facility **Term loan**. Table loan amount **₹48,00,000**, tenure **20**.
- **00:02.374** tab **Charges** (`0001.png`): Lenders / Processing fees / Property check / Government charges.
- **00:07.573** SBI property check **₹15,100** (`0002.png`): 1 Legal and technical ₹5,200 · 2 Title search ₹5,300 · 3 Valuation ₹4,600 · 4 Total **₹15,100**. Backdrop **00:09.356** — a look, not the talk.
- **00:13.818** HDFC government charges **₹30,518** (`0004.png`/`0005.png`), loan amount ₹48,00,000:
  1. **CERSAI creation** ₹100 + ₹18 GST = **₹118**
  2. **MODT stamp duty** ₹48,00,000 × 0.30% = **₹14,400**
  3. **NOI filing** **₹1,000**
  4. **NOI registration** ₹48,00,000 × 0.50% = ₹24,000 → cap **₹15,000** (“Maximum ₹15,000 applied.”)
  5. Total **₹118 + ₹14,400 + ₹1,000 + ₹15,000 = ₹30,518** — footer repeats “Government charges shown: **₹30,518**”
- Backdrop **00:30.853**. Header **Government charges ^** **00:31.950**; note mark **^** **00:32.918**; they toggle the government-charges summary/svg **00:35–00:37** (`0008.png`–`0011.png`). Every visible row shows **₹30,518**. Notes copy: “Government charges shown include charges that apply across India and charges specific to **Maharashtra**.” / “NOI document handling **₹300** applies if filing is done in person.” / “NOI stamp duty **₹100** applies if MODT stamp duty is already paid.” Data last checked **14 July 2026**.
- **00:48.419** Yes Bank **₹30,518** (`0012.png`–`0017.png`) — same four cards, same total. Clicks inside the drawer: MODT % span **00:53.088**; NOI filing block **00:53.865**; NOI registration line **00:54.583**; footer **strong** **₹30,518** **01:12.119**. Backdrop **01:15.218**.
- The **^** notes in the table footer are the **same sentences** as the drawer foot. Table cells are underlined totals, not bank-specific government menus.

## What they said (faithful, complete)

**00:19.070–00:23.930** Speaker A (HDFC drawer open):
> Raw ASR: “It is not a problem. It is time duty.”
> Corrected: “It is not a problem. It is **stamp duty**.”
> **time** p≈0.22, **duty** p≈0.81. They are on MODT **stamp duty**, not a clock. “Not a problem” = the identical ₹30,518 is not a processing-fee bug; it is government stamp.

**00:28.820–00:32.780** Speaker A:
> Raw ASR: “What is the yellow or space? Notice of information. What is this?”
> Corrected: “What is [this first line]? **Notice of Intimation.** What is this?”
> **yellow** p≈0.12, **or** p≈0.001, **space?** p≈0.03 — do **not** file a yellow-highlight bug. On screen: card 1 **CERSAI**, then **NOI** (Notice of Intimation). **Notice** p≈0.78, **information** p≈0.32 → **Intimation** (the charge name in code: “Notice of Intimation …”).

**00:34.340–00:46.100** Speaker A (closing HDFC drawer, opening the ^ note):
> Raw ASR: “This is the same. You have the same screen information in the same card. How do we assume? This information is the same. How would you know if the information is in the card?”
> Corrected: “This is the **same**. You have the same information in the same **card**. How do we assume? This information is the same. How would you know if the information is in the card?”
> **screen** p≈0.008 — drop it. **assume?** p≈0.000 — they are attacking the assumption that each lender **card** carries its own government-charge story. The question is: if every row is ₹30,518, what is the card adding?

**00:51.510–01:01.090** Speaker A (notes open; Yes Bank still in view):
> Raw ASR: “It is time duty. And beregistration. They must have taken just one breath in front of their born is 1,2,3,4, 1.”
> Corrected: “It is **stamp duty**. And **registration**. … **1, 2, 3, 4**, 1.”
> Second **time duty**: **time** p≈0.96, **duty** p≈1.00 — still stamp duty (they are naming the pack). **beregistration** p≈0.56 → **registration** (NOI registration / MODT). **breath** / **born** p≈0 — ignore. **1,2,3,4** is high confidence (**,3** p≈0.94, **,4** p≈0.89): the four government cards, continuing 0004’s flow ask, plus the total as a last “1”.

**01:11.960–01:53.190** Speaker A (Yes Bank drawer still open until 01:15, then idle):
> Raw ASR: “Government spews law enforcementů … laying down the world in front of government spews law enforcement team. Nobody actually lives even if they are known under the ire of the ire. Unfortunately, ire is spread. Those ire people in general arla have завdar met.”
> Corrected: treat as **garbled**. Keep **Government** (p≈0.62). Do **not** ship a “law enforcement” or “ire” feature. Plausible on-screen words in this window: **government charges**, **CERSAI**, Maharashtra scope note. Word p on **spews** / **law** / **Unfortunately** / **spread** / **завdar** is ~0. Several seconds of this span have no usable product direction.

**01:53.190–01:55.190** Speaker A:
> Raw ASR / corrected: “Let's go to the main topic.”
> They already clicked **Other charges** at **01:40.579**. This line closes government charges. Floating → fixed starts after a long quiet at 03:11 (`02`).

## First-principles problem
- What must be true: a government pack that is **the same for every bank in this Maharashtra view** (CERSAI + MODT stamp + NOI filing + capped NOI registration = ₹30,518) must be readable as **one state/India story**, not as thirty identical bank fees.
- Root vs symptom: the symptom is ₹30,518 copied down the column and the **^** sentences copied into **both** the Notes accordion **and** every drawer foot. The root is treating a **jurisdiction pack** as a per-lender charge cell.
- Constraints from this take + 0004: keep the **1-2-3-4 calc** (they clicked each card). Do not hide stamp duty / registration / NOI / CERSAI. Do not pretend HDFC’s ₹30,518 is a different number from Yes Bank’s.

## Directions they considered
- Name it: **stamp duty** and **registration**, plus **NOI** (Notice of Intimation), not a mystery total.
- Stop assuming the customer can tell banks apart from this column (“how would you know if the information is in the card?”).
- Keep **1-2-3-4** (and the total) as the way the amount is made — same flow they asked for on property check in 0004.
- Lean: this is a product/layout call on **sameness**, not a request to invent different government totals per bank.

## Company / user / future thinking
- User: arrives to compare **banks**. A column that is identical on every row looks like a broken processing fee, until someone says “it’s stamp duty.” The card should say that once, clearly.
- Company: Shroffin is independent comparison — full picture, customer decides. Honest government math is the picture; repeating it as if it were a lender choice is noise.
- Future: 0004’s **flow** still applies to these four cards. Other charges (`02` onward) is the “main topic” they name at 01:53. Do not fold MCLR / overdue into this issue.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `src/home-loan-compare.js` `listApplicableGovernmentCharges` / `computeGovernmentChargesTotal` / government `mathSheet` cards (CERSAI, MODT stamp duty, NOI filing, NOI registration cap) / `scopeNote` + optional NOI lines around the “^ Government charges shown include…” builder; DOM `details#hlc-charge-note-government-charges`; table key government-charges column `#hlc-th-governmentCharges`. CSS: `.hlc-math-sheet-wrap` / `.hlc-math-block` (0004 already owns the flow).
- Acceptance criteria in their words: “It is stamp duty.” “And registration.” “This is the same.” “You have the same information in the same card.” “How would you know if the information is in the card?” “1, 2, 3, 4.”
- What NOT to do: do not invent different ₹ totals per bank to look “varied.” do not delete the 1-2-3-4 calc. do not treat SBI’s **₹15,100 property check** as this issue. do not productize ASR “yellow,” “law enforcement,” or “ire.” do not leave the same ^ paragraph in **both** the drawer foot and the Notes list as if that were two facts.
- Open questions: whether the identical total should live **once** above/beside the table (Maharashtra pack) with bank rows linking into that same calc; whether CERSAI (India-wide) and MODT/NOI (state) should be visually split so “across India and … Maharashtra” is not a footnote after the fact.
- Related recordings:
  - continues_from: `wb-rec-260816-0004` `08` — charge bars **1-2-3-4 flow**; this clip’s government drawer is the next 1-2-3-4
  - continues_in: `02` in this folder (Other charges; “let’s go to the main topic”)

## Evidence index
- `audio.vtt` 00:19.070–01:55.190
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` / `audio.srt` / `audio.lrc` same span (stamp/time duty; NOI; 1,2,3,4; garbled 01:11–01:53)
- `events.json`: Charges t=2374; SBI property check t=7573; HDFC gov t=13818; backdrop t=30853; th + ^ note t=31950 / 32918; Yes Bank gov t=48419; drawer inner clicks t=53088–72119; Other charges t=100579
- `pages.json` / `RECAP.md`: Explore banks; Charges then Other charges
- `screenshots/index.json` + `0001.png`–`0018.png` (gov drawers and identical ₹30,518 column)
- `manifest.json` viewport 1366×768, dsf 2; `console.json` `[]`; `tabs.json` 1 tab
- `replay.spec.ts`: Charges tab; SBI property-check `tr:nth-of-type(14)`; HDFC gov `tr:nth-of-type(20)`; Yes Bank gov `tr:nth-of-type(33)`
- Site: `src/home-loan-compare.js` government notes + math cards; `pages/explore-banks.html` hosts `#hlc-results-shell`
