# Friendly lawyer on your team — not symbols and legal language

They open Other charges **Notes** and reject the voice. Every **symbol** they have to read locks them into **legal language**. What they want instead is a **friendly lawyer who is in your team** — language people can actually understand. The first example they point at is **MCLR, BPLR** (`02`).

## Classification
- kind: issue | copy / notes voice
- status: open
- surface: explore-banks / **Other charges** tab / `div#hlc-charges-note` — column marks **°** (rate change / Benchmark switch), **‡** overdue, **^** EMI bounce, plus the long glyph strings on note headers (° ♦ ✦ § † and more). They click those notes, not a charge cell.
- viewport: 1366x768 @2x
- speakers: Speaker A (long turn). ASR not diarized (`audio.json` language tag `mr`; this cue is English). No clear Speaker B on this beat.

## Session metadata
- folder: `wb-rec-260816-0031`
- recording id: `abd34f08-4d04-49d6-a699-6c354e5780bd`
- clip: **30 of 30** (last clip of the 15 Aug 2026 review)
- started_at: 2026-08-15T19:01:37.835Z
- ended_at: 2026-08-15T19:08:12.983Z
- duration_ms: 395148 (~6 min 35 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 56 (PNG + JPEG)
- event count: 130
- console: empty (`console.json` is `[]`)
- tabs: 1 (never left Explore banks)
- pages.json: 1 page (`p1`)
- viewport: 1366×768, device_scale_factor 2
- previous: `wb-rec-260816-0029` (~9 s earlier) — overdue drawer / extra rupees if one EMI is missed
- next: none

## Where on the page
- Same **Other charges** table as `wb-rec-260816-0029`. **1 selected** · **Apply once**. Visible lenders at the foot: Union Bank of India **Union Home** vs Yes Bank **Home Loan** (Yes Bank checked). Columns: Rate change charge **Benchmark switch**, Overdue charge, EMI bounce charge.
- **00:01.013** focus `Open note for mark ^` on `th#hlc-th-emiBounceChargeDisplay` (no click).
- **00:04.941** click `getByRole("button", { name: "Open note for mark °" })` on `th#hlc-th-rateChangeChargeDisplay` (`0001.png`).
- **00:10.123** `details#hlc-charge-note-rate-change-charge` chevron; **00:12.007** overdue; **00:13.792** EMI bounce; **00:18.614** rate-change again (`0002.png`–`0005.png`).
- On-screen Notes while they talk (`0000.png`–`0006.png`): Prepayment cites **RBI Part E, paragraphs 352 and 353**; Rate change expanded with **MCLR / BPLR** (see `02`); EMI bounce expanded with **^ § †** and Bank of Baroda slabs. `0000.png` still shows the dense bounce note from the previous take.
- This is **not** the overdue rupee-total click from 0029 `04`. They are reading **wording and marks**.

## What they said (faithful, complete)

**00:02.700–00:11.980** Speaker A:
> Raw ASR: “I feel that all the symbols that I have to read, I have to use only legal language.”
> Corrected: same. **Symbols** (word p≈0.79) they must read → they are stuck in **legal language** (legal p≈0.62, language p≈0.97). On-screen: ° ‡ ^ § † and the long mark strings on the note headers.

**00:12.820–00:21.680** Speaker A:
> Raw ASR: “Versus it should be like a friendly lawyer who is in your team to help you out. Language and all this should be understood.”
> Corrected: same. **Friendly** p≈0.96, **lawyer** p≈0.99. Target voice: a **friendly lawyer on your team**, not a statute. Language should be **understood**.

They immediately give the example: **MCLR, BPLR** → “how the rate is decided” (`02`). That is the same voice job, not a second complaint about symbols.

## First-principles problem
- What must be true: Notes exist to **help the customer choose**, not to prove the site can cite RBI paragraph numbers and footnote glyphs.
- Root vs symptom: the glyph soup (° ‡ ^ § †) is the symptom. The root is **legal register** in the note body. A friendly-lawyer voice can still be accurate.
- Constraints: keep the facts (GST, slabs, RBI prepayment rule). Change the **voice**, not the truth.

## Directions they considered
- Drop “only legal language.”
- Write as a **friendly lawyer in your team**.
- Language must be **understood**.
- Lean: rewrite Notes, not hide the charges. Example in the next breath is MCLR/BPLR (`02`).

## Company / user / future thinking
- User: cannot use a note they have to decode like a contract.
- Company: Shroffin’s job on this table is to sit **on the customer’s side** of the fine print — same honesty as naming which limit wins, not a second legal department.
- Future: `02` is the concrete rewrite of this voice (how the rate is decided). `03` is the advice that voice should give. Continues 0013’s “advice coming from a lawyer.”

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `#hlc-charges-note` copy in `src/home-loan-compare.js` (`RATE_CHANGE_BENCHMARK_MEANING_NOTE` and sibling charge notes). Marks live on `th#hlc-th-rateChangeChargeDisplay` / overdue / bounce headers.
- Acceptance in their words: “friendly lawyer who is in your team”; “language … should be understood”; not “only legal language” from “all the symbols.”
- What NOT to do: do not delete Notes. Do not treat this as the 0029 overdue **rupee calc** (they clicked note chevrons, not the overdue cell). Do not invent a new symbol system.
- Open questions: keep a quiet mark for “this row has a condition,” or drop glyphs once the sentence is plain?
- Related recordings:
  - continues_from: `wb-rec-260816-0029` `04` (they said click overdue for a total; this clip opens **Notes** instead and talks **language**); `wb-rec-260816-0013` `06` (legal language vs advice from a lawyer)
  - continues_in: `02` (MCLR/BPLR → how the rate is decided)

## Evidence index
- `audio.vtt` 00:02.700–00:21.680
- `audio.json` words: symbols p≈0.79; friendly p≈0.96; lawyer p≈0.99
- `events.json`: click ° t=4941; rate-change / overdue / bounce note chevrons t=10123 / 12007 / 13792 / 18614
- `screenshots/0000.png`–`0006.png`
- `replay.spec.ts`: `Open note for mark °`; `details#hlc-charge-note-rate-change-charge` / `overdue-charge` / `emi-bounce-charge`
- On-screen: Other charges Notes; RBI Part E 352–353; symbols ° ‡ ^ § †
