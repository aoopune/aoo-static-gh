# Don’t start because someone else wants it — start because you are frustrated enough

After locking “opinionated,” they hunt for a line from a program they heard about a month ago and cannot name. The rule: don’t do a startup because someone else wants it; don’t do it because you want “a startup.” Do it because you are frustrated enough that no product exists to solve your problem. They apply it to themselves: they *were* that frustrated — that is why they want this.

## Classification
- kind: product-thinking | company philosophy
- status: open (company rule; not a ticket on a control)
- surface: explore-banks / Loan inputs card — still idle on the same form. Not a layout bug.
- viewport: 1366x768 @2x
- speakers: Speaker A recalls the program and states the three-part test. Speaker B: “I mean, yes, bro.” ASR is not diarized.

## Session metadata
- folder: `wb-rec-260815-2240`
- recording id: `a82e9a9f-c11f-4376-881d-25a436d5e6f5`
- clip: 18 of 30
- started_at: 2026-08-15T17:10:04.687Z
- ended_at: 2026-08-15T17:19:10.273Z
- duration_ms: 545586 (~9 min 6 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 67
- event count: 127
- console: empty
- tabs: 1
- previous: `wb-rec-260815-2231` (~2 s earlier)
- next: `wb-rec-260815-2249` (~7 s later)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Section: same Loan inputs card as `01`. No click, no scroll.
- Visible leftover values (unchanged): income **₹1,00,000**, property **₹6,000**, Age 35, CIBIL 780, Self-employed, Regular, collapsed Adjust eligibility, See options, Canara row.
- Screenshots: `0004.jpg`–`0008.jpg` (t=36222–70222) — card unchanged while they quote the program.

## What they said (faithful, complete)

**00:27.810–00:34.230** Speaker A (searching for the source):
> Raw ASR: “Literally... I forgot the program. I forgot it just now. Just a month ago.”
> Corrected: same. They heard this on a **program** (~a month ago) and cannot name it in the moment. Not a product name; not “I forgot the [Shroffin] program.” `Literally...` is low-confidence (~0.12).

**00:35.130–00:52.650** Speaker A (the rule):
> Raw ASR: “So I said, the best time I have seen startups, don't do it because someone else wants it. Don't do it because you want to do a startup. Do it because you are frustrated enough that no product exists to solve your problem.”
> Corrected: keep **best time** as spoken (that word is not a low-confidence miss). Sense of the quote: the best **[advice / thing]** they have seen **[for]** startups. Three tests, in order: not a friend’s ask; not “I want to be a founder”; **frustration that the product is missing**.

**00:54.850–01:03.210** Speaker B then Speaker A:
> Raw ASR: “I mean, yes, bro. I was frustrated enough to do it for whom. So, according to me, we want this.”
> Corrected: “I mean, yes, bro.” / “I was frustrated enough to do it. For whom? So, according to me, we want this.”
> They apply the quote to themselves: they **were** frustrated enough. “For whom?” is the next question (which customer) — answered in `03` as *not* “for any customer.” “We want this” = the founders want this product (Shroffin / this page), not a client brief.

No UI proposal. No disagreement. Example is themselves, not a user story on the form.

## First-principles problem
- What must be true: Shroffin exists because the founders were **stuck without a product**, not because a customer ordered a comparison site or because they wanted “to do a startup.”
- Root vs symptom: the symptom would be building to please a requester or to look like a startup. The root is **why they are in the room**: frustration that no fair home-loan comparison existed.
- Constraints they implied: someone else’s want is not a reason; “wanting a startup” is not a reason; missing product + enough frustration is.

## Directions they considered
- One direction: use that three-part test. They already pass it (“I was frustrated enough”).
- Lean: this is identity, not a backlog item. It licenses `03` (build from their opinions).
- Rejected: starting because a person asked; starting to have a company.

## Company / user / future thinking
- User: not the commissioner of the company. The user arrives later. The reason the tool exists is the founders’ own stuckness on home loans.
- Company: this is how they will refuse work that is “because someone else wants it” (2231’s single paying customer) and work that is “because we want a startup” (features for show). What they keep: the comparison page they themselves needed.
- Future: `04` restates this as “you are so interested in a project that it becomes a startup.” Do not collapse those two files — `02` is the **frustration / missing product** test; `04` is the **don’t decide-to-startup-then-hunt-an-idea** test.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: none. Do not encode this as on-page copy.
- Acceptance criteria in their words: don’t do it because someone else wants it; don’t do it because you want a startup; do it because you are frustrated enough that no product exists; they were frustrated enough; “we want this.”
- What NOT to do: do not add a manifesto to Explore banks. Do not treat this as permission to ignore users entirely — `01` still requires sampling; `03` says people cannot *tell* their problems, not that users do not exist.
- Open questions: they never name the program. Do not invent a source.
- Related recordings:
  - continues_from: this clip `01` (opinionated product after sampling); `wb-rec-260815-2231` (do not build for one customer / one cohort).
  - continues_in: this clip `03` (not for any customer; people cannot tell problems) and `04` (interest in a project becomes a startup).

## Evidence index
- `audio.vtt` 00:27.810–01:03.210
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` / `audio.lrc` same span
- `events.json`: idle
- `screenshots/0004.jpg`–`0008.jpg`
- `manifest.json` viewport 1366×768, dsf 2
