# Write that processing fee is mandatory — first they ask how to avoid it

After the definition fight they still want to know **what this processing fee is**, because the **first** customer question is: **is there a way to avoid this fee?** They dictate the answer: **this is a mandatory fee.** They say it twice. Then “how to avoid this” again — the note must meet that question, not dodge it.

## Classification
- kind: issue | copy / honesty
- status: open
- surface: same Processing fees * note / Notes **Processing fees (\*)** as `01`. Still on Charges; still looking at the dear cluster (₹96,000 / ₹1,44,000) plus the login-fee paragraph. No new click until they scroll back and open property check in `04`.
- viewport: 1366x768 @2x
- speakers: Speaker A dictates “you have to write.” Repeats are A insisting, not a second draft. ASR not diarized.

## Session metadata
- folder: `wb-rec-260816-0004`
- recording id: `08aa721b-3f2e-484c-b39e-58b789d21095`
- clip: 27 of 30
- started_at: 2026-08-15T18:34:46.547Z
- ended_at: 2026-08-15T18:43:30.319Z
- duration_ms: 523772 (~8 min 44 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 72
- event count: 128
- console: empty
- tabs: 1
- previous: `wb-rec-260815-2355` (~5 s earlier)
- next: `wb-rec-260816-0013` (~3 s later)

## Where on the page
- Still the Charges * note opened at **00:10**. Screenshots `0007.png`–`0010.png` (t≈58–88 s) while they say mandatory / avoid — same dear-end table + Notes as `01`.
- On-page * copy still only login-fee bundling. It does **not** say mandatory, non-avoidable, or “no, you cannot skip this.”
- **01:38.162** / **01:43.129** / **01:44.229** more scroll (`0011.png` t=98 s): IndusInd / Yes ₹48,000; DCB / ICICI / Kotak / RBL ₹96,000; IDFC FIRST **₹1,44,000**; Notes **Processing fees (\*)** still at the foot.
- Next real click is **02:08** Indian Bank property check (`04`) — they leave this column after “I don't want to know,” having scrolled back to the cheap end at **02:00.329**.

## What they said (faithful, complete)

**01:02.300–01:15.860** Speaker A:
> Raw ASR: “Actually, I want to know what is this processing fee. Because first of all, I also want to know. Is there a way to avoid this fee? to avoid this fee?”
> Corrected: same. **First of all** = the customer’s first question after “what is it” (`01`) is **can I avoid it**. ASR repeats the last clause (second **to** p≈0.0002 — stutter, not a new sentence).

**01:16.300–01:23.800** Speaker A (dictating copy):
> Raw ASR: “So, you have to write, this is a mandatory fee. So, you have to write, this is a mandatory fee. Next, you have to write,”
> Corrected: same. Write **this is a mandatory fee** — twice, same line. **mandatory** p≈0.999 then p≈0.995. “Next, you have to write” hands off to `03` (private / public).

**01:42.260–01:51.960** Speaker A:
> Raw ASR: “You have to write, yes. Because first of all, I want to know, how to avoid this. I don't want to know.”
> Corrected: “You have to write, yes.” First question remains **how to avoid this**. “I don't want to know” — do **not** invent a third topic; it sits after avoid, while they are still on this note. Could be “I don't want to [pay / hear a long lecture]” or declining more definition. The instruction that is clear: **write** the mandatory answer to avoid.

The private/public list between “Next, you have to write” and this “yes” is `03`.

## First-principles problem
- What must be true: after one sentence of meaning, the page answers **can I skip this?** with **no — it is mandatory** (non-refundable already in `01`).
- Root vs symptom: hiding behind login-fee * text leaves the avoid question unanswered. People will hunt a workaround (they do exactly that on property check in `04`: “my brother is my lawyer”).
- Constraints: they want it **written**, not implied by the rupee. They did not say “sometimes waived” in this clip — do not invent waivers.

## Directions they considered
- Write: **this is a mandatory fee** (repeated).
- Meet “is there a way to avoid” / “how to avoid this” as the first follow-up.
- Lean: copy they are dictating onto the note / guide (`03`). Not a new column.

## Company / user / future thinking
- User: will try to save this money (`05`). If the fee is mandatory, say so **before** they waste hope on a workaround.
- Company: independent comparison includes the ugly fact — you pay this to proceed (`01` sanction letter), not only if the loan “succeeds.”
- Future: `03` adds private vs public min/variable; `04` is the same avoid instinct on property check (brother’s report). `05` is how to **save** among banks, which is not the same as avoiding the fee type.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: same Processing fees * note / `PROCESSING_FEE_LOGIN_NOTE` as `01`. Do not only bury “mandatory” in a drawer foot.
- Acceptance criteria in their words: “is there a way to avoid this fee?”; “you have to write, this is a mandatory fee”; “first of all… how to avoid this.”
- What NOT to do: do not answer avoid with silence. Do not invent a waiver path they did not state. Do not collapse this into the login-fee sentence. Do not treat government charges ₹30,518 (same on every row) as this fee.
- Open questions: whether any listed bank truly waives processing fee (not discussed). Where “mandatory” sits vs the one-sentence definition (`01`).
- Related recordings:
  - continues_from: `01` (one sentence; non-refundable; sanction letter)
  - continues_in: `03` (“next, you have to write” private/public); `04` (same avoid question on property check)

## Evidence index
- `audio.vtt` 01:02.300–01:51.960
- `audio.json`: **mandatory** p≈0.999 / 0.995
- `events.json`: idle on the * note; scrolls t=98162 / 103129 / 104229; next click 02:08 property check
- `screenshots/0007.png`–`0011.png`
- On-screen: login-fee * only — no “mandatory”
