# Hybrid Apply Flow – Implementation Plan

## Overview

**Goal:** Move apply flow (disclaimer, OAuth, Supabase insert, Razorpay, success modal, toasts) to the **parent** (index.html). Keep the **table** and **Apply button** in the iframe. Use **postMessage** for parent↔iframe communication. Add **state machine**, **guards**, and **cleanup** for deterministic behavior.

**OAuth return behavior:** Page loads fresh (parent + iframe). Parent reads pending + session from localStorage, continues payment flow. No table state restoration.

---

## Files to Create

### 1. `js/apply-button-iframe.js` (NEW)

**Purpose:** Runs inside iframe. Adds Apply button, reads selection, responds to parent via postMessage.

**Contents:**
- `getRoot()`, `getWrap()`, `getTableContainer()`, `getTableColumnKeys()` – same as current apply-flow.js (DOM helpers)
- `getSelectedOffers()` – same logic (reads #results-body, .offer-checkbox, .bank-name-cell, etc.)
- `getInputSectionData()` – same logic (reads #query-form)
- `addApplyButton()` – same visual structure as current button (apply-floating-btn, same HTML, same styles)
- Button click handler: `window.parent.postMessage({ type: 'AOO_APPLY_CLICKED' }, '*')` – no other logic
- postMessage listener for:
  - `AOO_GET_SELECTION`: compute offers + inputData, reply `{ type: 'AOO_SELECTION_RESPONSE', offers, inputData }`
  - `AOO_SET_BUTTON_STATE`: set button disabled/enabled based on `payload.disabled`
- `ensureApplyFlowStyles()` – only the button + wrap styles (scoped for iframe). Copy from apply-flow.js lines 221–252 (button styles, wrap position: relative).
- Init: single path – DOMContentLoaded or load, retry until wrap exists, then add button and add message listener. Use `applyButtonIframeInitialized` guard to avoid double init.

**No Supabase, no Razorpay, no disclaimer, no payment logic.**

---

## Files to Modify

### 2. `index.html`

**Add before `</body>`:**
- Razorpay script: `<script src="https://checkout.razorpay.com/v1/checkout.js"></script>`
- Config block:
  ```html
  <script>
    window.SUPABASE_URL = 'https://hyvpuivgexbxxiluxryx.supabase.co';
    window.SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
    window.RAZORPAY_KEY_ID = 'rzp_test_SLBd2DHmrSNADi';
    window.APPLICATION_PRICE_PAISE = 9900;
  </script>
  ```
- `<script src="js/apply-flow.js"></script>` – after app.js, after Razorpay

**Order:** Supabase → OAuth inline script → app.js → Razorpay → config → apply-flow.js

---

### 3. `table-embed.html`

**Remove:**
- `<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js"></script>`
- `<script src="https://checkout.razorpay.com/v1/checkout.js"></script>`
- Config block (SUPABASE_URL, RAZORPAY_KEY_ID, etc.)
- `<script src="js/apply-flow.js"></script>`

**Add:**
- `<script src="js/apply-button-iframe.js"></script>` – after the table mount inline script

**Keep:** Table script, table mount logic, fonts, styles. Table does not need Supabase or Razorpay.

---

### 4. `js/apply-flow.js` (MAJOR REFACTOR)

**Runs in parent only.** No DOM queries for #loan-table-root (that's in iframe).

#### 4.1 Remove / Replace
- Remove: `getRoot()`, `getWrap()`, `getTableContainer()`, `getSelectedOffers()`, `getInputSectionData()`, `getTableColumnKeys()`
- Remove: `addApplyButton()` – button is in iframe
- Replace: `showToast()` – use `document.body` (parent body) instead of `getRoot()`
- Replace: `showDisclaimerModal()` – use `document.body` instead of `getRoot()`
- Remove: `PENDING_KEY` (unused)

#### 4.2 Add – postMessage API

**Parent sends to iframe:**
- `{ type: 'AOO_GET_SELECTION' }` – request selection
- `{ type: 'AOO_SET_BUTTON_STATE', disabled: true|false }` – enable/disable Apply button

**Parent receives from iframe:**
- `{ type: 'AOO_APPLY_CLICKED' }` – user clicked Apply
- `{ type: 'AOO_SELECTION_RESPONSE', offers, inputData }` – reply to AOO_GET_SELECTION

**Helper:**
```js
function getIframe() { return document.querySelector('iframe.loan-table-embed'); }
function postToIframe(msg) {
  var f = getIframe();
  if (f && f.contentWindow) f.contentWindow.postMessage(msg, '*');
}
```

#### 4.3 Add – State Machine

```js
var FLOW_STATE = 'IDLE'; // IDLE | AUTH_REQUIRED | AUTH_COMPLETED | PAYMENT_PENDING | PAYMENT_COMPLETED
```

Transitions:
- `IDLE` → (user clicks Apply, selection valid) → show disclaimer
- disclaimer Continue → `AUTH_REQUIRED` → getOrSignInUser
- session exists or OAuth done → `AUTH_COMPLETED` → savePending, startPaymentFlow
- Supabase insert success → `PAYMENT_PENDING` → rzp.open()
- Razorpay success → `PAYMENT_COMPLETED` → show success modal
- Razorpay dismiss / error → `IDLE`, re-enable button

Razorpay opens **only** when flow explicitly reaches `PAYMENT_PENDING` (after Supabase insert).

#### 4.4 Add – Guards (module-level)

```js
var applyFlowInitialized = false;
var resumeInProgress = false;
var paymentFlowStarted = false;
```

- `applyFlowInitialized`: set true after first successful init; skip duplicate init
- `resumeInProgress`: set true when resuming from OAuth; prevents parallel resume
- `paymentFlowStarted`: set true before rzp.open(); prevents double Razorpay

#### 4.5 Init – Single Path

- One entry point only: e.g. `window.addEventListener('DOMContentLoaded', initApplyFlow)` – no load + DOMContentLoaded both
- If wrap doesn't exist: **parent has no wrap** (it's in iframe). Init doesn't need wrap. Just:
  1. ensureApplyFlowStyles
  2. Add postMessage listener for AOO_APPLY_CLICKED and AOO_SELECTION_RESPONSE
  3. Run resume-from-OAuth if pending + supabaseClient
  4. No addApplyButton (button is in iframe)

#### 4.6 runApplyFlow (replaced)

Triggered by AOO_APPLY_CLICKED:
1. postToIframe({ type: 'AOO_GET_SELECTION' })
2. Wait for AOO_SELECTION_RESPONSE
3. If offers.length === 0: showToast, return
4. showDisclaimerModal(onContinue)
5. On Continue: postToIframe({ type: 'AOO_SET_BUTTON_STATE', disabled: true })
6. savePendingApplication(offers, inputData)
7. getOrSignInUser() → startPaymentFlow
8. On error: clearPendingApplication, postToIframe({ type: 'AOO_SET_BUTTON_STATE', disabled: false })

#### 4.7 startPaymentFlow

- Guard: if (paymentFlowStarted) return;
- paymentFlowStarted = true before rzp.open()
- On success/dismiss: paymentFlowStarted = false; postToIframe({ type: 'AOO_SET_BUTTON_STATE', disabled: false })
- Replace applyBtn references with postToIframe for button state
- Use window.location (parent) for OAuth redirect – already top window

#### 4.8 Resume from OAuth

- Guard: if (resumeInProgress) return; resumeInProgress = true;
- Single listener path: use onAuthStateChange only (remove tryGetSession polling to avoid race)
- When session + pending: doResume → startPaymentFlow
- When done or timeout: resumeInProgress = false; postToIframe({ type: 'AOO_SET_BUTTON_STATE', disabled: false })
- Module-level ran guard: ensure only one doResume runs

#### 4.9 Cleanup

- After payment success (closeModal): clear sessionStorage 'aoo_payment_success_shown', clean payment/payment_success from URL
- clearPendingApplication at start of startPaymentFlow (before insert)
- After any error: clearPendingApplication, re-enable button via postMessage

#### 4.10 ensureApplyFlowStyles

Keep all styles – disclaimer, success modal, toast, button styles (parent needs them for modal/toast). Button styles in parent are for any future use; primary button is in iframe with its own styles from apply-button-iframe.js.

---

## postMessage Protocol

| Message | Direction | Payload | Purpose |
|---------|-----------|---------|---------|
| AOO_APPLY_CLICKED | iframe → parent | — | User clicked Apply |
| AOO_GET_SELECTION | parent → iframe | — | Request offers + inputData |
| AOO_SELECTION_RESPONSE | iframe → parent | { offers, inputData } | Reply with selection |
| AOO_SET_BUTTON_STATE | parent → iframe | { disabled: true\|false } | Enable/disable Apply button |

**Origin check:** Use `event.origin` in listener – optionally restrict to same origin (window.location.origin) for security.

---

## Flow Summary

1. **Page load (parent):** OAuth handler runs (exchange code/setSession). apply-flow.js loads, init runs once (guard). Adds postMessage listener. If pending + session: resume flow (single guard).
2. **Page load (iframe):** Table mounts. apply-button-iframe.js loads, adds Apply button, adds postMessage listener.
3. **User selects offers** in iframe table.
4. **User clicks Apply** (iframe): postMessage AOO_APPLY_CLICKED to parent.
5. **Parent** receives AOO_APPLY_CLICKED → posts AOO_GET_SELECTION to iframe.
6. **Iframe** receives AOO_GET_SELECTION → computes offers, inputData → posts AOO_SELECTION_RESPONSE.
7. **Parent** receives AOO_SELECTION_RESPONSE → if no offers, toast; else show disclaimer.
8. **User clicks Continue & Pay:** Parent posts AOO_SET_BUTTON_STATE disabled, savePending, getOrSignInUser.
9. **If OAuth needed:** redirect to Google. Return → parent loads fresh, OAuth block exchanges code, apply-flow init runs, sees pending + session, resume flow.
10. **Resume:** startPaymentFlow (Supabase insert, Razorpay open). On success: show success modal. On dismiss: post AOO_SET_BUTTON_STATE disabled false.
11. **Success modal close:** clean URL params, sessionStorage.

---

## Edge Cases & Guards

- **Multiple initApplyFlow:** applyFlowInitialized guard
- **Multiple resume:** resumeInProgress guard, single auth listener
- **Multiple Razorpay open:** paymentFlowStarted guard
- **Iframe not ready:** Parent posts AOO_GET_SELECTION; iframe may not have mounted yet. Add retry or wait for AOO_IFRAME_READY from iframe when table is mounted.
- **Same-origin:** Parent and iframe are same origin (same site). postMessage works. Optional: verify event.origin === window.location.origin.

---

## AOO_IFRAME_READY (Optional)

When iframe's apply-button-iframe.js has added the button and is ready, it can post:
`{ type: 'AOO_IFRAME_READY' }` to parent.
Parent can use this to know when to send AOO_GET_SELECTION (e.g. after Apply click, if we want to ensure iframe is ready). For simplicity, we can skip – parent posts AOO_GET_SELECTION immediately on AOO_APPLY_CLICKED; iframe will receive it once loaded.

---

## Testing Checklist

- [ ] Apply button appears in iframe (same position, style)
- [ ] Click Apply with no selection → toast "Please select at least one offer"
- [ ] Click Apply with selection → disclaimer appears (parent)
- [ ] Cancel disclaimer → flow resets
- [ ] Continue & Pay (no session) → OAuth redirect
- [ ] Return from OAuth → Razorpay opens (page fresh, pending + session used)
- [ ] Razorpay success → success modal, Supabase updated
- [ ] Razorpay dismiss → button re-enabled
- [ ] Refresh after success → no Razorpay, clean state
- [ ] No duplicate Razorpay on refresh
- [ ] No duplicate init
- [ ] Error messages show correctly
- [ ] URL cleaned after success

---

## Config Values (for reference)

- SUPABASE_URL: https://hyvpuivgexbxxiluxryx.supabase.co
- SUPABASE_ANON_KEY: (from index.html OAuth block)
- RAZORPAY_KEY_ID: rzp_test_SLBd2DHmrSNADi
- APPLICATION_PRICE_PAISE: 9900
- APPLY_STATE_KEY: aoo_apply_state_v1
- redirectTo: https://applyonlyonce.com/
