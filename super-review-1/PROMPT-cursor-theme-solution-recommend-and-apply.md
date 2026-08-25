# Cursor Theme → Solutions → Recommend → Apply — paste-ready prompt

How to use this (for you, not for the AI):

Run this **after**:

1. Themes + fundamentals exist (`theme-*.md`, `_theme-fundamentals.md`)
2. The full-site theme scan exists (`_theme-site-scan.md` + ledger)
3. The fundamentals recheck exists (`_theme-fundamentals-recheck.md` + ledger) — so you do not “fix” things already closed
4. Fundamental solutions exist (`FUNDAMENTAL-SOLUTIONS-SUGGESTIONS-AND-IDEAS.md`)

**Site repo:** `aoo-static-gh`.

This job has **two phases in one chat**:

| Phase | What happens | Website edits? |
|---|---|---|
| **A — Recommend** | Map still-open scanned issues to fundamental solutions; write sound, build-ready fix recipes; stop and wait | **No** |
| **B — Apply** | Only after you reply with an explicit confirm; implement the approved recipes | **Yes** |

1. Open a **new Cursor Agent chat** with the **`aoo-static-gh`** folder available.
2. Copy **everything from the line `COPY FROM HERE` down to `COPY TO HERE`**.
3. Paste it as your first message.
4. Wait for the recommendation pack under `super-review-1/themes/`.
5. Review it. Then reply with exactly one of:
   - `CONFIRM APPLY ALL`
   - `CONFIRM APPLY theme-10, theme-14` (comma-separated theme ids)
   - `CONFIRM APPLY R10-sets-row, R14-title` (comma-separated place ids)
   - `STOP` (do not edit the website)

Do not ask the agent to invent new solutions. Solutions must come from `FUNDAMENTAL-SOLUTIONS-SUGGESTIONS-AND-IDEAS.md`.

---

COPY FROM HERE

You are Cursor Agent in Agent mode. You are an expert at matching **known product problems** to **already-named fundamental solutions**, then shipping only what the founder confirms.

This chat has two phases. Phase A runs from this message. Phase B runs only after the human’s confirm reply.

## Why this work exists (do not skip)

A site scan already found where theme kinds show up across the website. A recheck already said which kinds are still open after later edits. A separate job already boiled co-founder solutions into plain fundamental solutions.

The founder needs one honest bridge:

1. still-open scanned issue → matching fundamental solution(s)
2. a **sound** fix recipe grounded in current source
3. **no website change** until the founder confirms
4. after confirm → make those changes cleanly

If you invent a fix that is not in the solutions file, the job has failed.  
If you edit the website before confirm, the job has failed.  
If you recommend a fix for a theme the recheck marked **closed**, the job has failed.

## Absolute laws

### Law 1 — Solutions lock

**Only** constructive directions that exist in:

`/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/FUNDAMENTAL-SOLUTIONS-SUGGESTIONS-AND-IDEAS.md`

You may cite solution entries by number + title (e.g. `## 23. Helper text should say why a field matters…`).

**Never:**

- invent a new solution idea
- pull a repair from memory, common practice, or another product
- reopen `wb-rec-*/solution-*.md` unless the fundamental solutions file itself points you there for wording context — prefer the boiled fundamental text

### Law 2 — No edit before confirm

Until the human replies with `CONFIRM APPLY…`:

- do **not** edit HTML, CSS, JS, JSON, images, or any website file
- do **not** commit
- do **not** “just fix one small thing”

Website must stay bitwise unchanged through Phase A.

### Law 3 — Prefer today’s open truth

Work queue = issues that are:

1. present in the **site scan** place map (across the website), **and**
2. still **open** on the **fundamentals recheck** (`still_open` or `looks_changed_still_open` at theme or place level)

If recheck says a theme is `closed` or `not_in_current_source`, do **not** recommend a fix for it, even if the old site scan had hits.

If recheck has an open place that the old scan missed, still include it (`location_kind: new_since_recheck` / open place from recheck).

### Law 4 — Theme-02 English special rule

For theme-02 (English / polished sentences):

- Do **not** treat “this sentence is long” as enough.
- Recommend only where the sentence is **too heavy, overlapping, empty, or not plain English** in the same kind as the fundamental.
- Do **not** mass-rewrite Terms / Privacy / long guide legal paragraphs just because the old scan tagged them.
- Prefer home story lines, product UI strings, freshness lines, and other customer-facing chrome that still match the kind.

### Law 5 — Sound fix only

A recommendation is sound only if:

- it follows at least one cited fundamental solution entry
- it closes the **object_kind + failure_kind** of the open theme on that surface
- it is a lasting change (no temporary patch, no `!important` stack, no TODO-as-finish)
- it respects Shroffin repo rules already in force (responsive, motion, education-loan-hidden, external-link pattern, permanent engineering)
- for any **new customer-facing copy**, you first Read `docs/brand/startup-core.md` and write copy that fits it

### Law 6 — Build-ready recipes

Every recommended fix must include:

1. exact files to touch (real paths)
2. paste-ready snippets / diffs / full new bodies as needed
3. exact commands to verify (paths, flags)
4. expected result a person would see

No “details during implementation.” No “run the usual build.”

## Strict input lock (Phase A)

**Allowed — open these:**

1. `/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/FUNDAMENTAL-SOLUTIONS-SUGGESTIONS-AND-IDEAS.md` — **solution lens**. Read in full first.
2. `/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/_theme-fundamentals.md` — problem kinds.
3. `/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/_theme-fundamentals-recheck.md` and `_theme-fundamentals-recheck-ledger.json` — **what is still open today**.
4. `/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/_theme-site-scan.md` and `_theme-site-scan-ledger.json` — **where the kind was found across the site** (place inventory).
5. `/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/theme-*.md` — **title + `pinpoint:` only**.
6. Current site source under `/home/yash/Projects Etc & aoo/aoo-static-gh` needed to ground each recipe (pages, `content/**/*.body.html`, `partials/`, attached JS/CSS that become on-screen words).
7. For copy recommendations only: `docs/brand/startup-core.md`.

**Forbidden:**

- inventing themes or solutions
- recorder dumps, `issue-*.md`, raw audio/events/screenshots
- other prompt files (except you may ignore them)
- editing the website in Phase A
- applying fixes for closed themes

If `_theme-fundamentals-recheck.md` is missing → stop. Reply only: Fundamentals recheck is missing; run that job first.

If `FUNDAMENTAL-SOLUTIONS-SUGGESTIONS-AND-IDEAS.md` is missing → stop. Reply only: Fundamental solutions output is missing; run that job first.

If `_theme-site-scan-ledger.json` is missing → stop. Reply only: Theme site scan is missing; run that job first.

## Phase A — Recommend (from this message)

### Step 1 — Load solutions and open issues

1. Read `FUNDAMENTAL-SOLUTIONS-SUGGESTIONS-AND-IDEAS.md` in full. Store every `## N. Title` + body.
2. Read `_theme-fundamentals.md` in full.
3. Read `_theme-fundamentals-recheck.md` / ledger. Build the **open work queue**: every theme with verdict `open`, and every place with status `still_open` or `looks_changed_still_open`.
4. From `_theme-site-scan-ledger.json`, for each open theme, attach the **across-site place list** (page + source_file + evidence). Use it to see where else the same kind showed up — but only recommend where the kind is still true on **current** source (recheck + fresh Read).

### Step 2 — Map theme → solution entries

For each open theme, choose **1–3** solution entries that actually address that fundamental’s object_kind + failure_kind.

Rules:

- Map by **kind**, not by shared keywords alone.
- One solution may serve several themes; say so.
- If no solution entry honestly matches, mark `no_matching_solution` and **do not invent one**. Ask the founder in the chat summary.
- Prefer solutions that close the failure; do not stack five overlapping solutions.

### Step 3 — Ground each recommendation in current source

For each open place (or grouped places that share one fix):

1. **Read** current source at the cited file (or replacement control).
2. Write one recommendation block:

```markdown
### Rec-NN — <short name>

Theme: theme-NN — <title>
Open places covered: <ids>
Status now: still_open | looks_changed_still_open

Matched solutions:
- ## N. <title> — <one sentence why this solution fits>

What a person meets now: <no fluff>

Sound fix (from the matched solutions): <what changes, in plain language>

Build recipe:
- Files: …
- Code / copy to paste: …
- Commands to verify: …
- Expected after: …

Confidence: high | medium | low
Needs founder word choice: yes | no
Apply default: include | ask-first
```

`ask-first` when the fix needs a naming / legal / brand promise decision (e.g. banks vs lenders everywhere, Zero commissions wording). Still write the recipe, but do not auto-include it in `CONFIRM APPLY ALL` unless the founder later names it.

Group duplicate surfaces (served HTML + body source) into **one** recommendation when the same edit applies.

### Step 4 — Write deliverables (Phase A)

Overwrite / create:

1. `/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/_theme-solution-recommendations.md`
2. `/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/_theme-solution-recommendations-ledger.json`

#### A. `_theme-solution-recommendations.md`

First lines (≤5 short human lines): this is recommend-only; solutions come from the fundamental solutions file; only still-open rechecked issues; website untouched until confirm.

Then:

- **How matching was decided**
- **Counts:** open themes covered · recommendations written · high/medium/low · ask-first · no_matching_solution
- **By theme** `theme-01` … `theme-20` (closed themes: one line “no recommendations — recheck closed / not in source”)
- Full **Rec-NN** blocks for every recommendation
- **Confirm instructions** (exact phrases the human must use)

#### B. `_theme-solution-recommendations-ledger.json`

Must include:

- `mode`: `"recommend_then_confirm_apply"`
- `phase`: `"A_recommend"`
- `website_untouched`: true
- `solutions_file`: path
- `open_theme_ids`: […]
- `recommendations`: array of objects with `id`, `theme_id`, `place_ids`, `solution_numbers`, `confidence`, `needs_founder_word_choice`, `apply_default`, `files`, `verify_commands`, `status`: `"proposed"`
- `no_matching_solution_themes`: […]
- `every_open_theme_addressed_or_logged`: true

### Step 5 — Phase A chat reply (only this)

Reply with only:

- `phase: A_recommend`
- how many open themes covered
- how many recommendations
- how many high / medium / low
- how many ask-first
- confirmation both files written
- one line per open theme: `theme-NN · Rec-… · confidence · apply_default`
- exact confirm phrases again

Do **not** start editing. Do **not** paste full recipes into chat if the files already hold them — point to the files.

## Phase B — Apply (only after human confirm)

Trigger phrases (exact start):

- `CONFIRM APPLY ALL` → apply every recommendation where `apply_default` is `include` **and** confidence is `high` or `medium`. Skip `ask-first` and `low` unless the human named them.
- `CONFIRM APPLY theme-…` / `CONFIRM APPLY Rec-…` → apply only those ids.
- `STOP` → do nothing; reply `phase: stopped`.

### Apply rules

1. Re-read the recommendation block and current source before editing.
2. Implement the build recipe exactly; lasting engineering only.
3. For customer-facing copy edits: Read `docs/brand/startup-core.md` again before writing final strings.
4. Keep education loan hidden from UI if you touch nav/home.
5. Match existing motion / responsive / external-link rules when relevant.
6. After edits, run the verify commands from the recipes.
7. Update the ledger: each applied rec `status: "applied"`, `phase: "B_applied"`, `website_untouched: false`, list of files changed.
8. Append a short “Applied” section to `_theme-solution-recommendations.md` with what changed and verify results.

### Phase B chat reply (only this)

- `phase: B_applied` or `phase: stopped`
- which Rec / theme ids applied
- files changed (paths only)
- verify results (pass/fail + command)
- note that a later fundamentals recheck is the way to confirm kinds are closed

Do not commit unless the human separately asks to commit.

## Cheat checks

Before finishing Phase A:

- [ ] Every open recheck theme is either recommended, ask-first, or `no_matching_solution`
- [ ] Every recommendation cites real solution `## N` numbers from the solutions file
- [ ] Website untouched
- [ ] Theme-02 did not become a mass legal rewrite
- [ ] Recipes are build-ready (files + code + verify)
- [ ] Closed recheck themes have zero recommendations

Before finishing Phase B:

- [ ] Confirm phrase matched
- [ ] Only approved ids edited
- [ ] Verify commands run
- [ ] Ledger updated

COPY TO HERE
