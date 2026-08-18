# SBI general and women schemes — a woman eligible for both must see both

They reject “it won't happen twice” (`05`). **SBI** has a scheme for the **general public** and a **special scheme for women**. A woman with the right profile is **eligible for both**. She must be able to **go through this scheme and also this scheme**. This is the case where scheme **names** (`05`) are required. Canara (`08`) is the opposite pattern (discount, not a second scheme).

## Classification
- kind: issue | multiple applicable schemes / women
- status: open
- surface: Filters **Concessions → Women applicant** (they check it at **04:53.756**). Table at that moment is still **Top-up** rows (`0042.png`); they then click **Regular** (`06`). No SBI row is in the visible shots. Example is **spoken**, not demonstrated on a named SBI cell.
- viewport: 1366x768 @2x
- speakers: Speaker A: SBI two schemes, woman eligible for both. “Have you ever seen such a scheme? **No.**” = B. “Correct? **Yes.**” ASR not diarized.

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
- Speech **04:20–04:51** while still on the **Top-up** Other charges table (`0031.png`–`0041.png`): one *Top Up* name per bank; **Women applicant** still unchecked.
- **04:53.756** click `getByRole("checkbox", { name: "Women applicant" })` = **on** (`0042.png`). Visible rows still top-up names (Baroda / Star / Maha Bank Top Up…). **SBI is not in this viewport.**
- **04:58.155** Regular (`0043.jpg` empty state, then `0044.png` Canara Housing loan + UCO Home) — they pivot to Canara (`08`).
- Do **not** invent an on-screen SBI women scheme from this recording.

## What they said (faithful, complete)

**04:17.290–04:26.850** both:
> Raw ASR: “And it won't happen twice. No, no. There are two schemes of SBI. There is a scheme for general public and a special scheme for women.”
> Corrected: same. **It won't happen twice** (two schemes at once never occurs) is **rejected**. Counterexample: **SBI** (p≈0.91) — **general public** scheme **and** **special scheme for women**.

**04:27.190–04:37.370** both:
> Raw ASR: “Have you ever seen such a scheme? No. Then a woman will have the right profile because she will be eligible for both schemes. Correct? Yes.”
> Corrected: same. B has **not** seen that scheme pair. A: a woman with the **right profile** is **eligible for both**. B: **Yes**.

**04:38.130–04:57.850** Speaker A (then they click Women + Regular):
> Raw ASR: “It is like this. If you are a woman, then you can go through this scheme. You can also go through this scheme. If you go through this scheme, you will feel better. You will feel better. If you are a woman applicant, then you can go through this scheme. If you are a top-up applicant, then you can go through this scheme.”
> Corrected: same. **This scheme and also this scheme** = both remain open. “You will feel better” — keep raw (feel p≈0.46); do not invent which SBI offer wins or rewrite as “fare.” **Woman applicant** vs **top-up applicant** are different **selectors** (filter vs Purpose) — top-up stays XOR (`06`); women does **not**.

## First-principles problem
- What must be true: if a woman **qualifies for two SBI offers at once**, the table must **show both**, with **names** (`05`), so she can **decide**.
- Root vs symptom: Purpose XOR (`06`) is not this. Root is **two applicable offers, same bank, same purpose**.
- Constraints: auto-picking the “better” one without showing the other fails `09`. Canara discount-on-one-scheme is `08`, not this.

## Directions they considered
- SBI general **and** SBI women as a real pair.
- Woman with the right profile → **eligible for both** → can **go through this and also this**.
- One path may **feel/fare better** — still not a reason to hide the other.
- Click **Women applicant** to start seeing that world (they did; SBI not on screen).
- Lean: two rows (or two named schemes) when both apply. Not a single silently-best SBI row.

## Company / user / future thinking
- User: a woman who only sees “the best” never knows she had a **choice** — same honesty job as PMAY + second yojana (`09`).
- Company: “only one scheme applicable” (`05`) is **false** here; the name rule turns **on**.
- Future: `08` distinguishes **discount on Housing loan** vs **women-only scheme**. `09` asks whether to auto-select best anyway.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: offer matching for women vs general; **Women applicant** filter; lender-column scheme names. This clip does **not** show SBI rows — accept against the **spoken** rule + the women checkbox, not a screenshot of SBI.
- Acceptance in their words: “two schemes of SBI”; “general public and a special scheme for women”; “eligible for both schemes”; “you can go through this scheme. You can also go through this scheme.”
- What NOT to do: do not hide the general scheme when Women is checked. Do not treat this as Canara’s discount (`08`). Do not invent SBI product titles not spoken (they said **general** vs **women**, no brand string).
- Open questions: exact SBI scheme titles in data; whether “feel better” means a recommended highlight **on top of** showing both.
- Related recordings:
  - continues_from: `05` (“it won't happen twice” / No) and `06` (XOR does not apply here)
  - continues_in: `08` (Canara discount vs separate women-only schemes)

## Evidence index
- `audio.vtt` 04:17.290–04:57.850
- `audio.json` words: SBI p≈0.91; women p≈0.66 on “special scheme for women”
- `events.json`: Women applicant checkbox t=293756; Regular t=298155
- `screenshots/0042.png` (Women on, still top-up list); no SBI row visible
- `replay.spec.ts`: `getByRole("checkbox", { name: "Women applicant" })`
- Spoken banks: **SBI** only — not on-screen in this take
