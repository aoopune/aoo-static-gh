# Auto-select the best vs show names — PMAY and a second yojana both selected

They ask what to do when **multiple schemes** apply (`07`/`08`). One idea: **select the best scheme and show it**, then **don’t tell the name**. The other: if a woman is eligible through **multiple** schemes, she **must be aware** — **two schemes should be selected**. Example: **PM Yojana** and ASR **SCM Yojana** — **both should be selected**. They go back and forth; the clip does not cleanly pick one forever.

## Classification
- kind: issue | scheme selection / government yojana (unresolved)
- status: open
- surface: still explore-banks Other charges with **Women applicant** on, Canara Housing loan + UCO Home (`0044.png`–`0051.png`). **No PMAY / yojana** control or label in this recording’s screenshots (Concessions: Women, Green home, Insurance only).
- viewport: 1366x768 @2x
- speakers: Speaker A poses “what should we do…?” then both auto-select and “both should be selected.” Short **Yes, we don't have to do that.** ASR not diarized. ASR **Himalaya** p≈0.78 — not a bank on screen; keep raw, do not invent a product.

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
- tabs: 1
- pages.json: 1 page (`p1`)
- viewport: 1366×768, device_scale_factor 2
- previous: `wb-rec-260816-0029` (~9 s earlier)
- next: none

## Where on the page
- **05:23–06:06** idle on the Women + Regular table (`0044.png`–`0051.png`). No extra clicks. Filters still **Women applicant**.
- **PM Yojana / SCM Yojana** are **spoken only**. Not on this page’s filters or table. Do **not** claim they pointed at concessions-guide PMAY tabs.
- ASR **SCM** p≈0.79. Assignment: may be a garbled second **PMAY-style** yojana. Not correctable from **this** recording’s screenshots. Keep **SCM Yojana** in raw; treat the ask as **two yojanas both selected**.

## What they said (faithful, complete)

**05:23.290–05:37.110** Speaker A:
> Raw ASR: “Then, what should we do in Himalaya? That these schemes, there are multiple schemes, but we select the best scheme and show it. Then we don't have to tell the name of the scheme.”
> Corrected: “Then, what should we do in **[ASR Himalaya]**? … there are **multiple schemes**, but we **select the best scheme and show it**. Then we **don't have to tell the name** of the scheme.”
> **Himalaya** p≈0.78 is not Canara, UCO, SBI, or a filter. Keep raw; do not invent a product. Proposal: **auto-select best** → names off (`05`’s default).

**05:39.890–05:51.570** Speaker A (counter):
> Raw ASR: “If a woman is eligible through multiple schemes, she must be aware that two schemes should be selected. PM Yojana and SCM Yojana. Both should be selected.”
> Corrected: “If a woman is eligible through **multiple schemes**, she **must be aware** that **two schemes should be selected**. **PM [Awas] Yojana** (PMAY-style) and **[ASR SCM] Yojana**. **Both should be selected.**”
> **PM** p≈0.20, **Yojana** p≈0.74 → PMAY-style government scheme. **SCM** p≈0.79, second **Yojana** p≈0.99. Not on-page. This **rejects silent best** for that pair: **both selected**, and she **must be aware**.

**05:52.230–06:06.750** both:
> Raw ASR: “So, I am asking you that we select the best scheme Then we don't have to tell the name of the scheme. Don't select the name of the scheme. We don't have to add any information. Yes, we don't have to do that.”
> Corrected: same words. They **re-ask** auto-select / **don't add** scheme-name UI. **Yes, we don't have to do that** (Yes p≈0.01) agrees with **something** — either “don’t add information” or “don’t auto-hide.” The sentence is ambiguous. Do **not** declare a winner. Earlier hard rules still stand: names when multiple apply (`05`); woman sees **both** (`07`); **both yojanas selected**.

## First-principles problem
- What must be true: when **two offers both fit**, hiding one as “best” is a choice the **site** made. They also said the woman **must be aware** and **both should be selected**.
- Root vs symptom: auto-select is a shortcut for `05`’s “don’t show names.” The root is **who chooses** when count > 1 — customer or engine.
- Constraints: Canara one-scheme+discount (`08`) can still auto-show one row. SBI/PMAY-style pairs cannot without violating `07` and “both selected.”

## Directions they considered
- **Select the best and show it** → no scheme name.
- **Don’t add** extra scheme-name information.
- Counter: woman **must be aware**; **two selected**; **PM Yojana + second yojana both selected**.
- Lean: unresolved. Implementers must not treat auto-select as closed.

## Company / user / future thinking
- User: PMAY vs another yojana is a **life** choice (subsidy, eligibility), not a rate-sort.
- Company: “intelligence” that picks the best (`03`, 0029) is allowed on **penalties**; it is **not** clearly allowed to drop a second **applicable** scheme.
- Future: last clip of this review (`10`) — compare is done, apply is not. This selection rule is **open** into that future product.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: offer picker when multiple rows match one bank; Women filter; any future PMAY/yojana flags (not on this page in the recording).
- Acceptance in their words (both sides, do not drop either): “select the best scheme and show it” / “don't have to tell the name”; **and** “she must be aware that two schemes should be selected”; “PM Yojana and SCM Yojana. Both should be selected.”
- What NOT to do: do not implement only auto-select and call `07` done. Do not invent an **SCM** product page. Do not invent **Himalaya**. Do not assume concessions.html PMAY tabs were on screen.
- Open questions: what **SCM Yojana** was (CLSS / second PMAY / something else). Does “both selected” mean two table rows, two apply targets, or two filters? Does “don't have to add any information” kill a scheme-name column even when both rows show?
- Related recordings:
  - continues_from: `07` / `08`
  - continues_in: `10` (product scope: compare done, apply not taken) — **does not close** this

## Evidence index
- `audio.vtt` 05:23.290–06:06.750
- `audio.json` words: Himalaya p≈0.78; PM p≈0.20; Yojana p≈0.74 / 0.99; SCM p≈0.79
- `events.json`: idle t=306315–362330 on Women + Regular table
- `screenshots/0044.png`–`0051.png`
- On-screen: Canara Housing loan, UCO Home, Women checked — **no** yojana label
- Spoken: **PM Yojana**, **SCM Yojana**, **Himalaya** (ASR)
