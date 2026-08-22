# Apply user-flow break report

Generated: 2026-08-22T04:36:41.147Z  
Base URL: http://127.0.0.1:8765  
Method: Live browser tests — input card → Explore → Apply → Contact → Verify → Submit → Application received

## Verdict (plain English)

The happy path from filled inputs through **Application received** works when Google Auth is satisfied (proven here with a mocked Auth/Firestore write that still runs the real Apply UI and `home-loan-apply.js`).


## Summary

| Status | Count |
|---|---:|
| FAIL (product) | 0 |
| PASS | 38 |
| BLOCKED | 0 |
| INFO | 1 |
| P0 fails | 0 |
| P1 fails | 0 |
| P2 fails | 0 |

## What worked

- **SETUP-01** — Explore loads matched banks
- **FILTER-01** — Public / Private filters change the list
- **SEL-01** — Selected bank stays visible after opposite bank-type filter
- **SEL-02** — Selected out-of-filter banks are pinned to the top
- **APPLY-01** — Apply once navigates with a non-empty packet
- **APPLY-02** — Apply packet includes earlier public selection after Private filter
- **APPLY-03** — Apply button count matches banks that actually apply
- **REVIEW-01** — Apply review lists same banks as packet
- **REVIEW-02** — Each chosen bank shows Public bank or Private bank
- **REVIEW-03** — Apply bank details include scheme / rate type / facility
- **REVIEW-04** — Apply review shows co-applicant income from Explore
- **FB-01** — Firestore bank payload keeps comparison fields from the packet
- **SEL-03** — Selection survives input rematch (same bank intent)
- **SEL-04** — Select-all after Show more selects the full expanded list
- **SEL-05** — Show-more expansion resets on filter rematch
- **APPLY-04** — Apply with empty/missing packet recovers safely
- **REVIEW-05** — Apply review reflects multi rate-type filter honestly
- **SEL-06** — Selected bank survives Floating → Fixed-only filter flip
- **INPUT-01** — Filled input card Compare yields Apply packet with banks
- **INPUT-02** — Typed income / age / CIBIL / tenure survive into Apply packet
- **INPUT-03** — Occupation and purpose survive into Apply packet
- **CONTACT-01** — Continue is enabled when packet has banks
- **CONTACT-02** — Continue opens contact page with packet intact
- **CONTACT-03** — Empty contact form blocks Verify and Submit
- **CONTACT-04** — Invalid phone keeps Submit gated
- **CONTACT-05** — Valid fields enable Verify but Submit stays locked until Google
- **CONTACT-06** — Contact draft persists name / phone / email while typing
- **E2E-00** — QA Firebase mock installed on contact page
- **E2E-01** — Google email mismatch blocks verification / submit
- **E2E-02** — Matching Google verify unlocks Submit
- **E2E-03** — Submit shows Application received window with Reference ID
- **E2E-04** — Firestore write receives contact + banks + status=received
- **E2E-05** — Apply packet cleared after successful submit
- **E2E-06** — Written bank records keep comparison fields (scheme/rate/facility)
- **E2E-07** — Written application keeps customer input numbers
- **FB-03** — Idle Apply packet clears after 60 minutes (live)
- **CONTACT-07** — Unchecked consent does not complete Application received
- **REVIEW-06** — Remove bank on Apply review updates packet count

---

## Full list of issues (simple English)

_No FAIL findings._
---

## Not fully live (called out honestly)

- **INFO** `FB-02` — Real Google OAuth popup not used — Auth/Firestore mocked for success-path proof: E2E-00…E2E-07 exercise real UI + home-loan-apply.js with mocked Auth/Firestore write capture. Live Google popup still needs a test account on a headed browser.

## All probes (PASS / FAIL / BLOCKED / INFO)

- **PASS** `SETUP-01` [INFO] Explore loads matched banks
- **PASS** `FILTER-01` [INFO] Public / Private filters change the list
- **PASS** `SEL-01` [P0] Selected bank stays visible after opposite bank-type filter
- **PASS** `SEL-02` [P0] Selected out-of-filter banks are pinned to the top
- **PASS** `APPLY-01` [P0] Apply once navigates with a non-empty packet
- **PASS** `APPLY-02` [P0] Apply packet includes earlier public selection after Private filter
- **PASS** `APPLY-03` [P0] Apply button count matches banks that actually apply
- **PASS** `REVIEW-01` [P1] Apply review lists same banks as packet
- **PASS** `REVIEW-02` [P1] Each chosen bank shows Public bank or Private bank
- **PASS** `REVIEW-03` [P1] Apply bank details include scheme / rate type / facility
- **PASS** `REVIEW-04` [P1] Apply review shows co-applicant income from Explore
- **PASS** `FB-01` [P1] Firestore bank payload keeps comparison fields from the packet
- **PASS** `SEL-03` [P0] Selection survives input rematch (same bank intent)
- **PASS** `SEL-04` [P2] Select-all after Show more selects the full expanded list
- **PASS** `SEL-05` [P2] Show-more expansion resets on filter rematch
- **PASS** `APPLY-04` [P2] Apply with empty/missing packet recovers safely
- **PASS** `REVIEW-05` [P1] Apply review reflects multi rate-type filter honestly
- **PASS** `SEL-06` [P0] Selected bank survives Floating → Fixed-only filter flip
- **PASS** `INPUT-01` [P0] Filled input card Compare yields Apply packet with banks
- **PASS** `INPUT-02` [P0] Typed income / age / CIBIL / tenure survive into Apply packet
- **PASS** `INPUT-03` [P1] Occupation and purpose survive into Apply packet
- **PASS** `CONTACT-01` [P0] Continue is enabled when packet has banks
- **PASS** `CONTACT-02` [P0] Continue opens contact page with packet intact
- **PASS** `CONTACT-03` [P0] Empty contact form blocks Verify and Submit
- **PASS** `CONTACT-04` [P1] Invalid phone keeps Submit gated
- **PASS** `CONTACT-05` [P0] Valid fields enable Verify but Submit stays locked until Google
- **PASS** `CONTACT-06` [P1] Contact draft persists name / phone / email while typing
- **PASS** `E2E-00` [P0] QA Firebase mock installed on contact page
- **PASS** `E2E-01` [P0] Google email mismatch blocks verification / submit
- **PASS** `E2E-02` [P0] Matching Google verify unlocks Submit
- **PASS** `E2E-03` [P0] Submit shows Application received window with Reference ID
- **PASS** `E2E-04` [P0] Firestore write receives contact + banks + status=received
- **PASS** `E2E-05` [P1] Apply packet cleared after successful submit
- **PASS** `E2E-06` [P1] Written bank records keep comparison fields (scheme/rate/facility)
- **PASS** `E2E-07` [P0] Written application keeps customer input numbers
- **PASS** `FB-03` [P2] Idle Apply packet clears after 60 minutes (live)
- **PASS** `CONTACT-07` [P1] Unchecked consent does not complete Application received
- **PASS** `REVIEW-06` [P1] Remove bank on Apply review updates packet count
- **INFO** `FB-02` [P2] Real Google OAuth popup not used — Auth/Firestore mocked for success-path proof

## How to re-run

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
# server already on :8765, or: npm start
export PLAYWRIGHT_BROWSERS_PATH="$HOME/.cache/ms-playwright"
LOCAL_LIBS="/tmp/pw-libs/root/usr/lib/x86_64-linux-gnu"
[[ -d "$LOCAL_LIBS" ]] && export LD_LIBRARY_PATH="${LOCAL_LIBS}${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}"
BASE_URL=http://127.0.0.1:8765 node scripts/audit-apply-user-flow.mjs
```

Machine-readable: `super-review-1/apply-flow-break-report.json`
