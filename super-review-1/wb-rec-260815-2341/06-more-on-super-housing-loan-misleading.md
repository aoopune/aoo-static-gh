# “More” on Super Housing Loan is a little misleading

If you take the Super Housing Loan, you should know more **about the loan**. The current **More** does not say that. It is a little misleading. The facts are important; the cue is not a standard. Earlier they used to write **More details**. Writing “more” without saying what just makes another “more.”

## Classification
- kind: issue | copy / labelling of More
- status: open
- surface: scheme line **Maha Super Housing Loan. More ⊕** (`More about Bank of Maharashtra`). They click the More **info-icon SVG** at **05:33.722**. Drawer: More details dump.
- viewport: 1366x768 @2x
- speakers: Speaker A. ASR not diarized.

## Session metadata
- folder: `wb-rec-260815-2341`
- recording id: `a22402c8-4a16-4e52-8736-ec1980e3cab1`
- clip: 25 of 30
- started_at: 2026-08-15T18:11:25.578Z
- ended_at: 2026-08-15T18:20:59.868Z
- duration_ms: 574290 (~9 min 34 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 84 (JPEG)
- event count: 128
- console: empty
- tabs: 1
- viewport: 1366×768, device_scale_factor 2
- previous: `05` (tell what’s inside)
- next: `07` (they leave the cue talk and stay in the Loan amount steps)

## Where on the page
- **05:33.722** More (info-icon SVG path on the More button) (`0053.jpg`); close **05:38.027** (`0054.jpg`)
- Idle **05:38–06:08** on the table (`0055.jpg`–`0057.jpg`) while they talk misleading / not standard / used to write More details. Scroll **06:00.565** y=634.
- Then they reopen loan amount (`07`) — cue talk is done.
- Screenshots: `0053.jpg`–`0057.jpg`. Scheme grey line is not itself the calc button.

## What they said (faithful, complete)

**05:26.330–05:49.630** Speaker A (More on the Super Housing Loan line):
> Raw ASR: “But if you take the super housing loan, I think you should know more about the loan. If you take the super housing loan, you will get to know more about it. It is a little misleading. I think it is important information. It is not important information. It is not standard.”
> Corrected: “If you take the **Super Housing Loan**, you should know more about **the loan**. … It is a little **misleading**.” “More” does not tell you that you will get the **scheme** (or that loan amount is a **calculation**). They flip important / not important — the **facts** matter (`01`–`02`); the **current cue** is not a standard, obvious control. Second Super Housing Loan sentence is low-confidence ASR (many words p≈0.00 at 05:31) — keep the first sentence; do not invent extra product claims from the garbled repeat.

**05:54.130–06:05.390** Speaker A:
> Raw ASR: “Earlier, we used to write a solenoid. We used to write more details. It is more and more. If you write something, it is more.”
> Corrected: “Earlier, we used to write **[so, in a line / inline]**. We used to write **More details**. It is more and more. If you write something, it is more.”
> ASR **solenoid** p≈0.45 — not a UI widget. Next line is the gloss: they used to **spell out More details**. Writing “more” without saying **what** just makes another “more.” **write** in the last line p≈0.001 — still the same “more and more” complaint.

They then leave this and open the Loan amount calc for real (`07`).

## First-principles problem
- What must be true: the control next to **Maha Super Housing Loan** must mean “you will learn this **loan / scheme**,” not a vague extra.
- Root vs symptom: `05` asked to name what is inside. This file is the concrete failure of the word **More** on that scheme line.
- Constraints: do not drop the scheme book. Do not make More open the loan-amount calc (`04`).

## Directions they considered
- Spell out **More details** like they used to, rather than a dump behind a vague More.
- Reject the current mark as “not standard.”
- Lean: keep both click targets; fix the Super Housing Loan label so it is about **the loan**.

## Company / user / future thinking
- User: taking Maha Super Housing Loan should teach them the scheme they tell the manager (`01`). “More” does not say that.
- Company: the grey product line was already accepted (`2106` `04`). The door next to it still lies about its job.
- Future: `07` is the other door (calculations) once they stop fighting More.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: More button label in the lender cell (`More about Bank of Maharashtra` is the accessible name; visible text is **More**); `src/home-loan-compare.js`.
- Acceptance in their words: Super Housing Loan should let you “know more about the loan”; current control is “a little misleading”; “not standard”; they “used to write More details”; “if you write something, it is more.”
- What NOT to do: do not rename the scheme. Do not send More to the calc. Do not treat “solenoid” as a component to build.
- Open questions: “More details” vs “about this loan” vs plus-only (`03`).
- Related recordings:
  - continues_from: `05`
  - continues_in: `07`. `wb-rec-260815-2106` `04` (grey product line accepted)

## Evidence index
- `audio.vtt` 05:26.330–06:05.390
- `audio.json`: solenoid p≈0.45; Super Housing Loan repeat low-confidence
- `events.json`: More SVG t=333722; close t=338027; scroll y=634 t=360565
- `screenshots/0053.jpg`–`0057.jpg`
- `replay.spec.ts` More info-icon path click
