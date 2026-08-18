# Lenders is a good word — put it everywhere instead of banks

Last clip they parked banks vs lenders. This take picks it: **Lenders** is a good word. You can put lenders **everywhere** instead of banks. A second voice says it’s okay. The table header already says Lenders.

## Classification
- kind: issue | naming (they now lean, after 2322 parked it)
- status: open — lean is “lenders everywhere instead of banks,” with B’s “it’s okay,” not a full inventory in this span
- surface: table `th#hlc-th-bank` label **Lenders**; h1 still **Explore banks.**; Apply accessible name still “Apply once to N **banks**”; filter legend **Bank type**; Show more “Show 23 more **banks**”
- viewport: 1366x768 @2x
- speakers: Speaker A states the lean. Speaker B: “It’s okay.” (twice). ASR not diarized. Language tag `mr`.

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
- previous: `wb-rec-260815-2322` `03` parked the decision (banks in everyone’s mind; table already says Lenders; wait for video). `06` in this folder (exact rates).
- next: `08` (Apply on top of checkboxes)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Visible header: **Lenders** (`0027.png`–`0029.png`). No click on the word. Idle after EMI drawer close.
- They are looking at the same Overview table, not the homepage hero they quoted last clip.
- Screenshots: `0026.png`–`0029.png` (t=163899–188169).

## What they said (faithful, complete)

**02:55.300–02:56.060** Speaker A:
> Raw ASR / corrected: “Lenders.”
> *Lenders* p≈0.61. Reading the column title.

**02:56.460–02:57.900** Speaker A:
> Raw ASR / corrected: “Lenders is a good word.”
> *good* p≈0.98, *word* p≈0.95.

**02:58.720–03:02.240** Speaker A:
> Raw ASR / corrected: “You can put lenders everywhere instead of banks.”
> *lenders* p≈0.87, *everywhere* p≈0.96, *instead* p≈0.90, *banks* p≈0.31.

**03:02.240–03:02.680** and **03:12.470–03:13.270** Speaker B:
> Raw ASR / corrected: “It's okay.”
> Low p on *okay*; still the same park-or-accept sound as 2322 B (“it’s okay / yes it’s okay”) — here it follows **put lenders everywhere**, so it reads as agreement, not “wait.”

They do not list h1 / Apply / Bank type / Show more in this span. Do not invent those replacements as spoken. The direction is the word **lenders** as the default, **instead of banks**.

## First-principles problem
- What must be true: the set on the table is not only banks (2322: NBFCs / housing companies). The word on the column is already **Lenders**.
- Root vs symptom: mixed copy (**Explore banks**, Apply to N **banks**, header **Lenders**) is the leftover from parking last clip. This take **un-parks** toward lenders.
- Constraint: 2322’s uncle test still exists — “banks” is what people say. This clip does not repeat that fight; it picks the table word.

## Directions they considered
- Put **lenders** everywhere instead of **banks**. B: it’s okay.
- Lean: yes, after last clip’s wait. Not a pixel tweak.

## Company / user / future thinking
- User: the list includes housing companies. Calling only “banks” is false; calling only “lenders” may sound foreign (2322). This take prefers truth-in-the-set.
- Company: independent comparison of **lenders**, not a bank directory.
- Future: Apply still says “33 banks” at 05:57 — that string will fight this lean until copy is one word.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `.hlc-bank-head-label` **Lenders**; h1 “Explore banks.”; `#hlc-apply-btn` accessible name “Apply once to N banks”; `#hlc-show-more-label`; filter **Bank type**; homepage hero “chosen banks” (named last clip, not this URL).
- Acceptance criteria in their words: “Lenders is a good word. You can put lenders everywhere instead of banks.”
- What NOT to do: do not rename only the header (it already says Lenders). Do not delete 2322’s uncle/NBFC notes. Do not change Bank of Maharashtra’s proper name.
- Open questions: Bank type filter label; “Show N more banks”; Apply count string.
- Related recordings:
  - continues_from: `wb-rec-260815-2322` `03`
  - continues_in: `08` (Apply); `10` still says “search the bank” / SBI

## Evidence index
- `audio.vtt` 02:55.300–03:13.270
- `screenshots/0026.png`–`0029.png` header **Lenders**
- `pages.json` h1 Explore banks
- Site: `th#hlc-th-bank`
