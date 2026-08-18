# Importance as cards: small + red + big type first; FOIR is not that important (8.5 → 8.4 / 8.6)

A second visual system, after stars/meter/score (`02`): **cards at levels**. A **small card** is **most important** — **red** (color or whatever), **font is big**. Then a **second-level card**, then a **third-level card**, and they **keep going**. FOIR is the worked example of a weak column: they don’t know FOIR well, **this is not that important**; adding more FOIR only nudges the loan from **8.5** to **8.4 or 8.6**.

## Classification
- kind: product-thinking | visual-system brainstorm
- status: open
- surface: Loan inputs as a stack of “cards” (not a new component on screen). FOIR `#hlc-foir` while they talk. They toggle **Adjust eligibility** open/closed while ranking.
- viewport: 1366×768 @2x
- speakers: Speaker A. ASR is not diarized.

## Session metadata
- folder: `wb-rec-260815-2304`
- recording id: `6033ef99-94cd-427e-b722-e831e6342b86`
- clip: 21 of 30
- started_at: 2026-08-15T17:34:55.529Z
- ended_at: 2026-08-15T17:43:48.848Z
- duration_ms: 533319 (~8 min 53 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 73
- event count: 129
- console: empty
- tabs: 1
- previous: this folder `06`
- next: this folder `08`; `wb-rec-260815-2313` — colors + up-down vs left-right (same importance job)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- **04:07.550** click Adjust eligibility summary (`0033.jpg`) → **collapsed** (`0034.jpg`–`0036.jpg`, t=256201–272201): only the six primary fields + See options + closed “Adjust eligibility” row. This is when they say “small card / most important / red / font is big / second / third.”
- **04:57.133** click summary again (`0039.jpg`) → **re-open**; scroll y=175.5; **04:59.141** click `#hlc-foir` (`0040.jpg`) as they say FOIR is not that important / 8.5 → 8.4 or 8.6. Co-applicant still **Yes**; extra co-applicant rows at ₹0.
- **05:37.369** click summary again (`0045.jpg`) → collapsed once more.
- No red cards, no type-size change on screen — brainstorm only. Overview table Rate is often masked; they still speak **8.5**.

## What they said (RAW + corrected, both speakers)

**04:30.980–04:51.160** Speaker A (card ladder):
> Raw ASR: “If you don't do this, this is a small card. Most important. This is red, color or whatever. Font is big. And this is the second level card. And this is the third level card. And they get more and more important. They keep going.”
> Corrected: “If you don’t do this, **this is a small card. Most important.** This is **red**, color or whatever. **Font is big.** And this is the **second-level card**. And this is the **third-level card**. And they… they keep going.”
> **Most important.** p≈0.75 / 0.97. **red,** p≈0.63. **color** p≈0.06 — “color or whatever” is open. **Font** p≈0.20. ASR “get more and more important” fights “small card = most important” then second then third. Treat the **ladder** as first = most important (red, big type), then level 2, then level 3, **keep going** (more levels). Do not invert the ladder because of that one clause. “If you don’t do this” points at the usefulness/details work in `06` — without it, you still need a **visible** importance hierarchy.

**04:52.840–05:20.180** Speaker A (FOIR as a weak column):
> Raw ASR: “What I feel is, I don't know the foyer. But this is not that important. I will understand that my loan can be fluctuated. I told you 8.5. If I add more foyer, it can be 8.4 or 8.6. I will understand this. And if I don't have this, I will be a foyer.”
> Corrected: “What I feel is, I don’t know the **FOIR**. But **this is not that important**. I will understand that my loan can be **fluctuated**. I told you **8.5**. If I add more FOIR, it can be **8.4 or 8.6**. I will understand this.”
> **foyer.** p≈0.84 / 0.58 → **FOIR**. **not that important.** p≈0.92 / 0.27 / 0.97. **8.5** / **8.4** / **8.6** are a **rate** (or a loan figure they already used as “8.5”) moving **one tenth** — FOIR is real but small. Last clause “I will be a foyer” (**a** p≈0.05, **foyer.** p≈0.35) is mush (I’ll be without FOIR / I’ll be a fool); do not build a requirement on it.

Pros of the card ladder: you can see most-important vs third-level without reading. Cons they name for FOIR: low leverage (8.5→8.4/8.6), so it should not look like a hero column. This sits beside `02` (stars / meter / score) as **another** encoding, not a replacement they chose.

## First-principles problem
- What must be true: importance is **visible in the layout** (size, color, type), and a low-leverage input (FOIR) must not look equal to income/property.
- Root vs symptom: FOIR’s jargon name is a symptom (`2116`). Root here: **equal chrome** on unequal columns. 8.5 vs 8.4/8.6 is the proof of unequal.
- Constraints: small/red/big = most important; then level 2; then level 3; FOIR is “not that important.” `2313` will add axes.

## Directions they considered
- Card ladder: small + red + big font = most important; second-level; third-level; keep going.
- Color: red “or whatever” (open, same family as `02`’s meter).
- FOIR as the third-level / not-that-important example; show that the loan only **fluctuates** a tenth.
- Lean: capture as a visual system. Do not ship three literal card components from this clip. Do not hide FOIR — they still click it and want the user to **understand** the small move.

## Company / user / future
- User: should feel 8.5 vs 8.4/8.6 in their bones, not treat FOIR like monthly income.
- Company: we still show FOIR (prefill, `01`–`03`) because surprise is worse than a weak column. We just must not **dress** it as a hero field.
- Future: `08` is credit-pull honesty. `09`–`11` try grouping by **what the field changes**, then drop clean sectioning. `2313` uses **colors** and **order**.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: visual weight of `.hlc-form-zone--hero` (income, property) vs `#hlc-foir` / extra fields; any future level classes. Not a new FOIR product.
- Acceptance criteria in their words: small card most important; red / color; font is big; second-level card; third-level card; they keep going; FOIR is not that important; 8.5 can become 8.4 or 8.6.
- What NOT to do: do not delete FOIR. Do not paint the whole extra row red. Do not pick this ladder **over** stars/meter/score (`02`) — they stacked systems. Do not treat 8.5 as a live rate from the masked column.
- Open questions: which fields are level 1 vs 2 vs 3 besides FOIR-as-weak. Is “small card” physically smaller or “the tight important one”? They said small **and** font is big.
- Related recordings:
  - continues_from: `02` (stars/meter/score); `04` (usefulness)
  - continues_in: `08`; `wb-rec-260815-2313`

## Evidence index
- `audio.vtt` 04:30.980–05:20.180
- `events.json`: Adjust toggle t=247550, 297133, 337369; `#hlc-foir` t=299141
- `screenshots/0033.jpg`–`0045.jpg` (`0034` collapsed during card talk; `0040` FOIR focused)
- Site: `.hlc-form-zone--hero`, `#hlc-foir`, `details#hlc-form-more`
