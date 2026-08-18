# Build from our opinions, not “for a customer” — people cannot tell their problems

They close the loop on sampling: either they work from one founder’s opinion or the other brings theirs — they are **not** doing this for any customer. Perfect sampling is impossible right now; they did not even look for a sample. They asked people “will you use it like this?” and heard no. That no does not mean the product will not exist. People cannot name their own problems.

## Classification
- kind: product-thinking | company philosophy
- status: open
- surface: explore-banks / Loan inputs — still idle. Not a widget request.
- viewport: 1366x768 @2x
- speakers: Speaker A carries the argument. Speaker B: short asks (“What is the best bet, bro?”). ASR is not diarized.

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
- previous: `wb-rec-260815-2231`
- next: `wb-rec-260815-2249`

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Same card at rest. Screenshots `0008.jpg`–`0016.jpg` (t=70222–140223). No click. First focus on `#hlc-monthly-income` is **03:59**, after this block.

## What they said (faithful, complete)

**01:05.070–01:17.970** (messy ASR; two voices):
> Raw ASR: “What is the best bet, bro? I have already told you. You can take the whole new tactic. What are you doing? Don't take the displacement. You go through that process of formula.”
> Corrected (confident parts only): “What is the best bet, bro?” / “I have already told you.” The rest is **not** safely correctable: **whole new tactic** (`new` ~0.13), **displacement** (~0.17), **process of formula** (`formula.` ~0.15) may be Hindi/English mix. Do not invent. What is clear: one person asks for the best bet; the other says they already answered and not to jump off the method they just named (sampling → opinion).

**01:23.000–01:31.160** Speaker A (the stand):
> Raw ASR / corrected (same): “Either we work on my opinion, or you come with your opinions, but we are not doing it for any customer.”
> Two allowed sources: **my** opinion or **your** opinions (the two founders). Forbidden source: building it **for a customer** (2231’s paying/institutional customer; also “someone else wants it” from `02`).

**01:33.280–01:47.740** Speaker A (why):
> Raw ASR: “Because this perfect sampling is impossible at this moment. And we didn't even look for a sample. We asked them, will you use it like this? They said no. That does not mean that this product will not exist in the future.”
> Corrected: same. Perfect sampling = the 2231 bell-curve of every band — they say they **cannot** do that now, and they **did not even try** a proper sample. The only “research” they name: they showed the idea (“will you use it like this?”) and people said **no**. They refuse to treat that no as a kill. The product can still exist later.

**01:48.380–01:56.440** Speaker A:
> Raw ASR: “People cannot tell their problems. I told you, what is your major problem? You will be like...”
> Corrected: same. Sentence trails off (silence until **02:12**). Asking “what is your major problem?” does not yield a usable spec — the person cannot tell.

Pros they imply: founder opinions as the spec; a “no” from a casual ask is not evidence the product is wrong. Cons: perfect sampling (impossible now); asking people whether they will use “this” (they said no, and that does not settle it); asking people to name their major problem.

## First-principles problem
- What must be true: the Explore banks tool is specified by **the two founders’ opinions**, because (1) they cannot sample every band yet, (2) they did not sample, (3) people they asked said no, and (4) people cannot name the problem anyway.
- Root vs symptom: the “no” from “will you use it like this?” is a **symptom of asking the wrong question**, not proof the comparison page should not exist. Root: users cannot articulate the job; founders who were frustrated (`02`) can.
- Constraints they implied: do not wait for perfect sampling; do not take a casual no as a veto; do not build “for any customer” as the design authority.

## Directions they considered
- Work on Speaker A’s opinion **or** Speaker B brings opinions. Both are in. Customers as spec authors are out.
- Lean: this is how they will decide the form and table in the second half of the clip (pre-fill, tooltips, See options).
- Rejected: perfect sampling as a gate; “they said no” as a stop; customer-as-PM.

## Company / user / future thinking
- User: a person who cannot tell you their major problem, and who may say they will not use the tool when you ask abstractly. Later in this clip the same user also will not put the **truth** in the form (`05`). Research that only asks “will you use it?” or “what’s your problem?” will mislead.
- Company: Shroffin still *has* users (2231: first users, heavy feedback, Discord-style). This clip says those people are not the **authors**. The authors are the two co-founders. That matches `01` (opinionated after sampling) when sampling is not available.
- Future: they still believe the product “will exist in the future” despite the nos. Do not read this as “never talk to users” — 2231 hired feedback. Read it as: **do not let a customer write the product**, especially not from a yes/no on a mock.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: none as a feature. Use as a review test: a change requested “because a customer asked” must still survive founder opinion (`01`–`03`), not land automatically.
- Acceptance criteria in their words: “either we work on my opinion, or you come with your opinions, but we are not doing it for any customer”; perfect sampling is impossible now; they said no ≠ product will not exist; “people cannot tell their problems.”
- What NOT to do: do not delete user research. Do not treat this as a reason to hide the form until a survey is done. Do not invent what “displacement” / “formula” meant.
- Open questions: who they asked “will you use it like this?” — not named. What “this” was (this page? an earlier mock?) — not named.
- Related recordings:
  - continues_from: `wb-rec-260815-2231` (single-customer trap; sampling across bands); this clip `01`–`02`.
  - continues_in: this clip `04` (startup from interest); `05` (the user will not put the truth — same “people cannot tell” applied to the form).

## Evidence index
- `audio.vtt` 01:05.070–01:56.440
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` same span (displacement, formula, tactic — leave raw)
- `events.json`: idle
- `screenshots/0008.jpg`–`0016.jpg`
- `manifest.json` viewport 1366×768, dsf 2
