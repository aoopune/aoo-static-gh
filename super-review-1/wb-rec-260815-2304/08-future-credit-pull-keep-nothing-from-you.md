# Later we may need a credit pull — and we still won’t keep anything from the user

After FOIR, they look **to the future**: we will have to say we need your **credit pull**. That does not mean we get to hide facts. **We don’t have to worry**; **we won’t keep anything from you**; we won’t have to “prove” secrecy. Honesty of inputs (`01`–`04`) and honesty of a later bureau pull are the same rule.

## Classification
- kind: product-thinking | future (credit bureau) + transparency
- status: open (explicitly future)
- surface: spoken against the still-open FOIR / Loan inputs card; no credit-pull UI on explore-banks in this recording
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
- previous: this folder `07`
- next: this folder `09`

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Still on `#hlc-foir` after `07` (`0040.jpg`–`0044.jpg`, t=299544–336202). Adjust eligibility **open**, Co-applicant **Yes**. They do not click a bureau control (there isn’t one).
- **05:37.369** they collapse Adjust (`0045.jpg`) as this sentence ends and `09` begins.

## What they said (RAW + corrected, both speakers)

**05:21.740–05:37.260** Speaker A:
> Raw ASR: “If we go to the future, we have to say that we need your credit pool. We don't have to worry at all. We won't keep anything from us. We won't prove it to you that we won't keep anything from you.”
> Corrected: “If we go to the **future**, we have to say that we need your **credit pull**. We don’t have to worry at all. We won’t keep anything from **you**. We won’t [have to] prove it to you that we won’t keep anything from you.”
> **future,** p≈0.98. **credit** p≈0.94, **pool.** p≈0.76 → **credit pull** (CIBIL / bureau fetch — they already live on a CIBIL **typed** field; this is fetching the file, not the 780 box). First “keep anything from **us.**” p≈0.32 / 0.49; they immediately say “from **you.**” p≈0.63. Meaning they land: a future pull is allowed to be **asked for**; it is **not** a license to hide how the comparison works. Transparency is the default; we shouldn’t need a speech that we aren’t hiding.

They do not design a consent screen. They do not say when “future” is. They do not ask to remove the typed CIBIL field in this span. No Speaker B turn in this beat.

## First-principles problem
- What must be true: even when Shroffin someday **pulls** credit, the user still sees the same honest picture they see with typed FOIR/EMIs — nothing held back.
- Root vs symptom: “credit pull” is a future capability. Root they care about: **withholding**. Same as surprise-later on EMIs (`01`).
- Constraints: we may need to ask for a pull; we still don’t hide.

## Directions they considered
- Future: we will have to say we need your credit pull.
- Don’t worry about that becoming a dark pattern — **won’t keep anything from you**.
- Lean: philosophy for a later fetch, not a build in this clip.

## Company / user / future
- User: a bureau pull is a big ask; they will only accept it if the site has already been the sort of place that doesn’t surprise them on EMIs.
- Company: Shroffin is not a lender and not a bureau. Asking for a pull later still has to match “full picture, customer decides.”
- Future: this is the **future** sentence they named. Do not implement a pull from this file. Typed CIBIL remains the current control (`2204` / `2134`).

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: none in this clip’s UI. When a pull exists: consent copy next to `#hlc-cibil` / a new step — not specified here.
- Acceptance criteria in their words: in the future we have to say we need your credit pull; we won’t keep anything from you.
- What NOT to do: do not ship a credit-pull flow from this note. Do not hide FOIR/EMIs “until we have a pull.” Do not treat “credit pool” as a new product name.
- Open questions: pull vs continue typing 780. When “future” starts. What is shown after a pull (they don’t say).
- Related recordings:
  - continues_from: `07` (FOIR honesty); `01` (no surprise)
  - continues_in: `09` (sectioning — they were already “thinking” about many requirements)

## Evidence index
- `audio.vtt` 05:21.740–05:37.260
- `events.json`: still on FOIR; Adjust collapse t=337369 as the line ends
- `screenshots/0040.jpg`–`0045.jpg`
- No credit-pull control in `pages.json` / site form
