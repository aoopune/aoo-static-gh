# Sectioning dies: one field does not affect only one outcome — unless the map is mutually exclusive

They test the sketch and **drop 1:1 sectioning**. Charges (processing fees) also move; **salary / self-employed** move more than one thing. Speaker B: “You mean one-on-one is not allowed?” If two fields affect loan amount **and** the rest of the outputs, let it be — **but** if a field **only** affected loan amount and **not** the others, then they would have “such an intelligent” system. They don’t. Clip ends on “How many?” `2313` keeps importance as **up-down vs left-right** and **colors** instead of exclusive sections.

## Classification
- kind: product-thinking | IA decision (reject exclusive sections)
- status: open (direction: do not fake 1:1 groups)
- surface: `#hlc-property-value`, `#hlc-monthly-income`, occupation; Overview + Charges tabs; processing fee as a **charges** outcome
- viewport: 1366×768 @2x
- speakers: **both**. Speaker A: not one-to-one; then no sectioning. Speaker B: “You mean one-on-one is not allowed?” ASR is not diarized.

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
- previous: this folder `09`, `10`
- next: `wb-rec-260815-2313` — importance as up-down vs left-right, colors (the replacement encoding)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- **08:05.830** click `#hlc-property-value` (`0065.jpg`) — “these two things affect the loan amount” while on property (and they also click income). Hero **Explore banks.**; Adjust collapsed; PNB top-up row visible (loan amount ₹5,400, tenure 20, EMI ₹52; Rate often masked).
- **08:24.972** click `#hlc-monthly-income` (`0068.jpg`); **08:25.612** and **08:31.487** click property again (`0069.jpg`, `0070.jpg`).
- Table still Overview: PNB / BoB top-up rows from leftover ₹6,000 property. Charges tab is visible but **not** clicked.
- Screenshots: `0065.jpg`–`0072.jpg` (t=486237–530204) through end of clip.

## What they said (RAW + corrected, both speakers)

**07:52.680–08:00.200** Speaker A (charges join the map):
> Raw ASR: “The rest of the charges were also affected. Processing fees, salary, self-employment. How many were affected?”
> Corrected: “The rest of the **charges** were also affected. **Processing fees**, **salaried**, **self-employed**. How many were affected?”
> **charges** p≈0.98. **Processing fees,** p≈0.54 / 0.79. **salary,** p≈0.78 → **salaried**. **self-employment.** p≈0.08 / 0.68. Occupation is not a tenure-only field (`09`). Processing fee lives on **Charges**, not Overview. “How many were affected?” is very weak (p≈0.002–0.08).

**08:04.330–08:14.170** Speaker A (the kill):
> Raw ASR: “It doesn't mean that one thing affects only one person. No. Then no. Then no. Then there is no sectioning.”
> Corrected: “It doesn’t mean that one thing affects only **one [outcome]**. No. Then no. Then no. Then **there is no sectioning**.”
> **person.** p≈0.64 ≈ outcome / output (“the rest of the people” below = the rest of the outputs). **no sectioning.** p≈0.95 / 0.65. They reject the exclusive map from `09`.

**08:15.850–08:22.610** both:
> Raw ASR: “You mean one-on-one is not allowed? Then only. All are one-on-one.”
> Corrected: **Speaker B:** “You mean **one-on-one** is not allowed?” (**You** p≈0.26, **mean** p≈0.95, **-one** p≈0.99, **allowed?** p≈0.17). **Speaker A:** “Then only. All are one-on-one.”
> Product sense is **one-to-one** (one field → one outcome), not a 1:1 meeting. The second line fights B’s question. Next sentences show A’s real rule: mappings are **not** exclusive. Treat “all are one-on-one” as a false start / mush before the example.

**08:22.910–08:45.370** Speaker A (the intelligent case they **don’t** have):
> Raw ASR: “Like you said earlier, these two things affect the loan amount. But these two things will also affect the rest of the people. Let it be. But if it is mutually exclusive, that this only affects the loan amount and the rest does not affect the rest of the people, then we would have such an intelligent person.”
> Corrected: “Like you said earlier, **these two things affect the loan amount**. But these two things will **also affect the rest of the [outputs]**. Let it be. **But if it is mutually exclusive** — that this **only** affects the loan amount and the rest does **not** affect the rest — then we would have such an **intelligent** [system].”
> Timed with property + income clicks (“these two things”). **mutually exclusive,** p≈0.99 / 0.99. **intelligent** p≈0.94, **person.** p≈0.12 → system / form, not a staff role. **Let it be** = accept the overlap. **Mutually exclusive** would have made sectioning smart. They don’t have that.

**08:48.610–08:52.590** (clip end):
> Raw ASR: “Who would be? I mean... How many?”
> Corrected: same. Unfinished (**How many?** p≈0.05 / 0.12). `2313` starts on the next breath (~2.5 s later) with “if this is the case… up to down… left to right… importance of the column.”

Pros of exclusive sections: an “intelligent” form. Cons, which they take as **decisive**: one input hits amount **and** rate **and** tenure **and** charges; occupation hits more than tenure. Therefore **there is no sectioning** (as 1:1 groups). Visual importance must live somewhere else (`02`, `07`, `2313`).

## First-principles problem
- What must be true: grouping the form by outcome is only honest if each field’s effect is **mutually exclusive**. It isn’t, so exclusive sections would **lie**.
- Root vs symptom: “how many sections?” is the symptom. Root: **many-to-many** from inputs to amount/rate/tenure/charges.
- Constraints: accept overlap (“let it be”); don’t section unless exclusive; still show importance (`02`/`07`/`2313`).

## Directions they considered
- Count who is affected (charges, processing fee, salaried/self-employed).
- Reject “one thing → one outcome.”
- Speaker B checks: so 1:1 is not allowed?
- Keep the overlap; only a mutually exclusive map would justify smart sections — they don’t have one.
- Lean: **do not ship `09`’s exclusive map or `10`’s tab/card sections as architecture.** Keep teaching importance with marks, weight, and (next clip) axes/colors.

## Company / user / future
- User: should still become “intelligent while filling” (`2313`) — by **seeing** what moves, not by walking fake rooms named Amount / Rate / Tenure.
- Company: a comparison tool that pretends property only hits amount (when it also hits EMI, charges, etc.) would be the same class of lie as a surprise FOIR (`01`).
- Future: `2313` — **up-down** = most important outcomes (money, rate, tenure); **left-right** = column importance; **colors**. That is the continuation of this visual-system thread.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: do **not** split `#hlc-inputs` into exclusive Amount/Rate/Tenure sections from `09`. Prefer live “what moved” (`2240` `07`) + importance chrome (`02`, `07`, `2313`).
- Acceptance criteria in their words: one thing does not affect only one outcome; then there is no sectioning; these two things affect loan amount **and** the rest; mutually exclusive would have been the intelligent case — they don’t have it.
- What NOT to do: do not implement vertical tabs (`10`) as if sectioning survived. Do not hide Charges from the map. Do not force property to “only” amount in the UI copy if the table also moves EMI/charges.
- Open questions: `2313`’s axes as the replacement — capture there. Whether a **soft** grouping (amount-heavy vs rate-heavy) is still allowed; they did not offer a soft version, only exclusive vs none.
- Related recordings:
  - continues_from: `09`, `10`; `wb-rec-260815-2240/07`
  - continues_in: `wb-rec-260815-2313` — up-down vs left-right, colors

## Evidence index
- `audio.vtt` 07:52.680–08:52.590 (end of clip)
- `events.json`: property t=485830, 505612, 511487; income t=504972
- `replay.spec.ts`: `#hlc-property-value` / `#hlc-monthly-income` at end
- `screenshots/0065.jpg`–`0072.jpg`
- Next: `wb-rec-260815-2313/audio.vtt` starts 00:03.460 “if this is the case… up to down… left to right… importance of the column”
