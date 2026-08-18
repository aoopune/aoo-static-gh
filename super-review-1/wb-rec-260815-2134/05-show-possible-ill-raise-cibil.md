# Show what is possible — they will raise CIBIL (~20 points) if the table shows the prize

They want the table to show what is **possible** and what the **minimum** is, not only today’s filled **780**. One remembers 700, now maybe **680**, and wants to **see 680**. If you show them, they will **bring that score** — find someone to increase it, take a loan for **six months**, raise **20 points** — then the current table goes **empty**. Otherwise the rate will not be lower. `2204` restates this as: do not **tell** them the best CIBIL; they will farm it.

## Classification
- kind: discussion | product / Explore banks behaviour
- status: open
- surface: explore-banks / Loan inputs CIBIL + Bank options table
- viewport: 1366x768 @2x
- speakers: Speaker A walks the “if you show me I will bring that score” story. Short “Yes” from Speaker B at 05:00. ASR unlabeled.

## Session metadata
- folder: `wb-rec-260815-2134`
- recording id: `1965821a-27df-4039-8e62-b268e8696a5b`
- clip: 11 of 30
- started_at: 2026-08-15T16:04:29.489Z
- ended_at: 2026-08-15T16:10:04.857Z
- duration_ms: 335368 (~5 min 35 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 40 (JPEG)
- event count: 53
- console: empty
- tabs: 1
- previous: `02` + `03` in this folder; `2125` (exact vs window; “if I increase the score it will be better”)
- next: `06` (Other charges / two rates). Skip `2201`. Next real restatement: `2204` (“I will take a small loan… credit agency… increase my credit score” / six months / 750).

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Still the input card + Overview headers. CIBIL **780** on screen the whole time they talk about 680 / 700 / +20. They do not change the field.
- Click: none until `06` at **05:02**.
- Screenshots **03:54–05:00**: `0024.jpg`–`0034.jpg` (t=210206–300205). Same rest UI. Table body still below the fold.

## What they said (faithful, complete)

**03:54.070–04:12.510** Speaker A:
> Raw ASR: “Do you know something? If you show me I will bring that score. I have 3 months to go home. I will find someone to increase the score. Show me what is possible.”
> Corrected: **if the tool shows them**, they will **bring that score**. “I have 3 months to go home” is the raw line — likely three months toward the **home loan**, not a travel plan; they do not unpack it. They will **find someone to increase the score**. Ask: **show me what is possible.**
> `2204` later: “I will find a credit agency that will let me increase my credit score” and “I will give it to you in six months.” Use `2204` to clarify **who** (credit agency); do **not** overwrite this clip’s **three months** with six.

**04:16.240–04:20.060** Speaker A:
> Raw ASR / corrected: “Show me what is minimum. I can't increase it.”
> They also want the **floor** (what is minimum). “I can’t increase it” sits next to that — either they cannot raise CIBIL from here, or they cannot raise the **minimum** the tool is showing. They do not split those two readings.

**04:21.920–04:36.560** Speaker A:
> Raw ASR: “I remember it was 700. Now it might be 680. I want to see 680. But I don't know how much it would be”
> Corrected: same. Memory **700**, maybe **680** now; they want the table **at 680**; they still **don’t know** the true number. Ties to `03`.

**04:37.780–04:52.720** Speaker A:
> Raw ASR: “What I see is I will increase it by 20 points and my score will be correct. Then what will I do? I will give a loan for 6 months. And I will increase it by 20 points. Then the table will be empty.”
> Corrected: the path they would take: **+20 CIBIL points**, a **six-month** (small) loan, then the **current table is empty** (today’s rows would no longer be the relevant set). They do not say which banks drop. “empty.” is low-confidence; sense is the current offer set is no longer the picture.

**04:54.080–05:01.180** Speaker A, then a short yes:
> Raw ASR: “Otherwise, the rate will not be lower. The civil score will be 60. Yes.”
> Corrected: **otherwise the rate will not be lower** (without raising CIBIL). **Civil → CIBIL.** “Will be 60” is not a real CIBIL score (`60.` p≈0.06). Given 680 / 700 / 760 / 780 in this clip, treat **60** as truncated ASR of **680** or **760**, not as a spec. The following “Yes” is agreement that the rate move depends on the score.

They do not ask for a credit-repair product on Shroffin. They ask the **comparison table** to show the destination (possible / minimum / 680 / +20) so they will go and change the score themselves.

## First-principles problem
- What must be true: Explore banks should show **what happens if CIBIL is X** (including a worse memory and a better future), not only one filled 780.
- Root vs symptom: “I’ll raise my score” is the user’s plan. The root product gap is: the table does not show **possible vs now**, so they cannot see whether waiting months is worth it.
- Constraints: they still want a lower **rate**. If the score does not move, they said the rate will not be lower. Empty table = the old offers are no longer the picture.

## Directions they considered
- Show **what is possible**.
- Show **what is minimum**.
- Let them **see 680** (not only 780).
- User-side: +**20** points, **six-month** loan, find someone to raise the score; also spoken **three months**.
- Lean: the tool’s job is to **show the destination** so the visitor will change CIBIL. Not to hide the worse current score. `2204` then forbids **telling** them the winning number.

## Company / user / future thinking
- Company: Shroffin is not a credit bureau and not a lender. Showing “if you were 700” is still a comparison view, not a promise to raise the score. Publishing “hit 750” becomes a farming guide (`2204`).
- User: they will take a small loan, wait months, use an agency — if the table makes the prize visible.
- Future: `2204` is the restatement: “I don’t want you to tell me what the best parameters should be.” Skip `2201`.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `#hlc-cibil` plus the results table; any future “this CIBIL vs that CIBIL” would be new — they did not sketch a second column, only “show me.”
- Acceptance criteria in their words: “if you show me I will bring that score”; “show me what is possible”; “show me what is minimum”; “I want to see 680”; +20 points / six months; “otherwise the rate will not be lower.”
- What NOT to do: do not build a credit-repair marketplace from this clip. Do not keep a single 780 as the only view. Do not treat ASR **60** as CIBIL 60. Do not overwrite **three months** with `2204`’s six months as if they said only one number here.
- Open questions: one table they can retune, vs two side-by-side scores (they say “2 rates / 2 loans” seconds later in `06`, in Other charges — may or may not be this idea).
- Related recordings:
  - continues_from: `02` + `03` here; `wb-rec-260815-2125` `01`.
  - continues_in: `06` here; skip `2201`; `wb-rec-260815-2204` (`audio.vtt` 00:07–01:12).

## Evidence index
- `audio.vtt` 03:54.070–05:01.180
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` (civil, 60, 3 months, 20 points)
- `events.json`: idle until t=302637
- `screenshots/0024.jpg`–`0034.jpg`
- `wb-rec-260815-2204` `audio.vtt` 00:07–01:12 for the restatement
