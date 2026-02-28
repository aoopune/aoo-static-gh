# Payment gateway integration: Razorpay, Paytm, PayU

This doc lists code changes to integrate **Paytm** and **PayU** (and optionally keep **Razorpay**). All three can coexist: user picks a gateway, or you use one as primary with fallback.

- **Razorpay (current):** Frontend key + Orders API; checkout.js opens modal.
- **Paytm:** Backend order + checksum → frontend gets orderId + txnToken → Paytm checkout.
- **PayU:** Backend generates hash (key, txnid, amount, etc.) → frontend uses **Bolt** (`bolt.launch()`) with that payload; no redirect.

---

## Multiple gateways: design options

1. **Single gateway:** Replace Razorpay with Paytm or PayU (one provider only).
2. **User choice:** After “Continue & Pay”, show “Pay with: Razorpay | Paytm | PayU”; then run the chosen flow.
3. **Fallback:** Try primary (e.g. Razorpay); on failure or “other payment”, open Paytm or PayU.

For (2) or (3), in `apply-flow.js` you’d:
- Read `window.PAYMENT_GATEWAY = 'razorpay' | 'paytm' | 'payu'` (or from user selection).
- In `startPaymentFlow()`, branch: `if (gateway === 'razorpay') { ... } else if (gateway === 'paytm') { ... } else if (gateway === 'payu') { ... }`.
- DB: add columns for each provider (`razorpay_payment_id`, `paytm_txn_id`, `payu_txn_id`) and set the one used.

---

# Paytm integration

Paytm uses order creation + checksum on backend, then frontend opens their checkout (JS or redirect).

---

## 1. Backend: Order creation

**Current:** `aoo-static-gh/scripts/create-razorpay-order.js` calls Razorpay Orders API.

**Change:** Add a Paytm order-creation endpoint or script that:

- Accepts: amount (paise), order_id (your reference, e.g. `applicationId` or a new order id), customer id/email.
- Calls Paytm’s API to create a transaction (see [Paytm Developer Docs](https://developer.paytm.com/docs)).
- Returns to frontend: **order id** and **txn token** (or whatever Paytm’s JS SDK needs to open checkout).

You’ll need a small backend (e.g. Node/Express, or Supabase Edge Function) because:

- Paytm requires a **checksum** signed with your **merchant key** (secret must not be in frontend).
- Order creation is done on Paytm’s server API, not from the browser.

**New files (examples):**

- `aoo-static-gh/scripts/create-paytm-order.js` (Node) or an API route that calls Paytm and returns `orderId` + `txnToken`.
- Env vars: `PAYTM_MID`, `PAYTM_KEY`, `PAYTM_WEBSITE` (e.g. `WEBSTAGING` for test).

---

## 2. Main site – `aoo-static-gh`

### 2.1 `index.html`

| What | Current | Change |
|------|---------|--------|
| Preconnect | `https://checkout.razorpay.com` | Remove or replace with Paytm’s domain if they use a checkout URL (e.g. `https://securegw-stage.paytm.in` for staging). |
| Config | `window.RAZORPAY_KEY_ID = '...'` | Replace with Paytm config, e.g. `window.PAYTM_MID = '...'` and optionally `window.PAYTM_ORDER_API = '/api/create-paytm-order'` (your backend that returns order + txn token). |
| Script | Razorpay checkout.js is loaded inside `apply-flow.js` | No Razorpay script in HTML; Paytm may need a script tag or will be loaded in apply-flow (see below). |

### 2.2 `js/apply-flow.js`

| Area | Current | Change |
|------|---------|--------|
| Config | `var RAZORPAY_KEY_ID = window.RAZORPAY_KEY_ID` | Use Paytm config: e.g. `PAYTM_MID`, `PAYTM_ORDER_API` (URL that creates order and returns txn token). |
| `loadRazorpay()` | Loads `checkout.razorpay.com/v1/checkout.js`, waits for `window.Razorpay` | Replace with `loadPaytmCheckout()` if Paytm provides a JS SDK, or remove and use redirect flow. |
| `startPaymentFlow()` | 1) Insert application in Supabase → 2) Open Razorpay with `key`, `amount`, `currency`, `name`, `description`, `prefill`, `handler`, `modal.ondismiss` | 1) Insert application in Supabase (unchanged). 2) Call your backend to create Paytm order (amount, applicationId, email). 3) On success, open Paytm checkout with returned `orderId` + `txnToken` (or redirect to Paytm URL). 4) On Paytm success callback: update Supabase with `paytm_order_id` / `paytm_txn_id` (or similar), then show success modal. 5) On cancel/dismiss: same as now (reset state, re-enable button). |
| Supabase update | `razorpay_payment_id: response.razorpay_payment_id` | Use Paytm’s transaction id, e.g. `paytm_txn_id: response.txnId` (or whatever Paytm returns). |
| Toast / guards | “Razorpay is not configured” | “Paytm is not configured”. |
| Comments | “Razorpay” in comments | Update to “Paytm”. |

**Flow summary for Paytm in `apply-flow.js`:**

1. After Supabase insert, call `fetch(PAYTM_ORDER_API, { method: 'POST', body: JSON.stringify({ applicationId, amount_paise, email }) })`.
2. Backend returns `{ orderId, txnToken }` (or similar).
3. Open Paytm’s JS checkout with that data, or redirect to Paytm URL with orderId + txnToken in form/query.
4. On success callback (or return URL): PATCH `applications` with `status: 'paid'`, `paytm_txn_id: ...`, then show success modal.

---

## 3. Test page – Razorpay test

### 3.1 `pages/razorpay-test.html`

- Either **rename** to `paytm-test.html` and replace all Razorpay UI text and script with Paytm (order ID + txn token from your backend, then open Paytm checkout).
- Or **keep** as Razorpay test and add a **new** `paytm-test.html` for Paytm.

### 3.2 `js/razorpay-test.js`

- Replace with **Paytm test logic**: take order id + txn token (from your create-paytm-order API), open Paytm checkout, on success show Paytm txn id.
- Or add new `js/paytm-test.js` and use it in `paytm-test.html`.

---

## 4. Table standalone package – `table/standalone-package`

### 4.1 `index.html`

- Remove Razorpay script:  
  `<script src="https://checkout.razorpay.com/v1/checkout.js"></script>`
- Replace `window.RAZORPAY_KEY_ID` with Paytm config (e.g. `PAYTM_MID`, `PAYTM_ORDER_API`).

### 4.2 `js/apply-flow.js`

- Same conceptual changes as `aoo-static-gh/js/apply-flow.js`: use Paytm config, call backend for order/txn token, open Paytm checkout, on success update Supabase with `paytm_txn_id`, show success block.

---

## 5. Supabase auth test – `supabase-auth-test`

### 5.1 `config.js`

- Replace `RAZORPAY_KEY_ID` with Paytm config (e.g. `PAYTM_MID`, `PAYTM_ORDER_API`).

### 5.2 `test-both.html`

- Replace Razorpay script with Paytm (or add Paytm script).
- Replace “Razorpay test payment” section with Paytm: create order via your API, then open Paytm checkout; on success save to Supabase (see below).

### 5.3 `supabase-table-setup.sql` (and any payments table)

- In `payments` table: add columns `paytm_order_id text`, `paytm_txn_id text` (or rename `razorpay_order_id` / `razorpay_payment_id` if going Paytm-only).
- In code that writes to `payments`, set Paytm ids instead of Razorpay ids.

### 5.4 `scripts/create-razorpay-order.js` (in supabase-auth-test if present)

- Add `create-paytm-order.js` (or API) that creates a Paytm order and prints/returns order id + txn token for the test page.

---

## 6. Database – applications table

### 6.1 `aoo-static-gh/scripts/applications-setup.sql` (and `applications-table.sql` if used)

- Add column: `paytm_order_id text`, `paytm_txn_id text` (or keep `razorpay_payment_id` for old rows and add Paytm columns for new flow).
- Update comment: e.g. “linked to Paytm payment” (or “Razorpay or Paytm payment” if supporting both).
- RLS: no change needed (still update by `auth.email() = email`).

**Example migration:**

```sql
alter table public.applications
  add column if not exists paytm_order_id text,
  add column if not exists paytm_txn_id text;
comment on table public.applications is 'Loan application submissions; linked to Paytm payment.';
```

---

## 7. Other references

- **`applications-rls-policy.sql`**  
  Comment mentions `razorpay_payment_id`; update to “e.g. status = 'paid', paytm_txn_id”.

- **`HYBRID_IMPLEMENTATION_PLAN.md`**  
  Replace Razorpay sections with Paytm (order API, checkout, success/dismiss handling).

- **`js/apply-button-iframe.js`**  
  Comment says “No Supabase, Razorpay, or payment logic” → “No Supabase, Paytm, or payment logic”.

---

## 8. Summary checklist

| # | Item | Action |
|---|------|--------|
| 1 | Backend order creation | Add Paytm order API (Node or Edge Function) with checksum, return orderId + txnToken. |
| 2 | `aoo-static-gh/index.html` | Preconnect + config: Razorpay → Paytm. |
| 3 | `aoo-static-gh/js/apply-flow.js` | Load Paytm flow; create order via API; open Paytm checkout; update DB with paytm_txn_id. |
| 4 | `aoo-static-gh/pages/razorpay-test.html` + `js/razorpay-test.js` | Replace with Paytm test page + script (or add parallel Paytm test). |
| 5 | `table/standalone-package/index.html` + `js/apply-flow.js` | Same as (2) and (3) for standalone. |
| 6 | `supabase-auth-test`: config, test-both.html, payments table, scripts | Paytm config, Paytm UI, paytm_order_id / paytm_txn_id in DB and code. |
| 7 | `applications-setup.sql` (and applications-table.sql) | Add paytm_order_id, paytm_txn_id; update comment. |
| 8 | Docs / comments | Replace Razorpay with Paytm where relevant. |

---

## 9. Paytm-specific details to look up

- **Order creation API:** Request/response format, mandatory parameters, checksum algorithm (usually one of Paytm’s standard checksum utils).
- **Frontend:** Whether Paytm provides a JS SDK (e.g. “Paytm JS”) or only a form/redirect to their URL; in either case you pass orderId + txnToken (and possibly amount, callback URL).
- **Callback / return URL:** How Paytm posts back (webhook vs redirect); verify transaction server-side before marking `status = 'paid'` (recommended).

Once you have Paytm merchant credentials and the exact API/docs, the changes above can be implemented file-by-file using this checklist.

---

# PayU integration

PayU uses **Checkout Plus (Bolt)**: a JS SDK that opens a modal (no redirect). The backend must generate a **hash** (SHA-512) using your **Salt**; the Salt must never be in the frontend.

**Docs:** [PayU Checkout Plus](https://docs.payu.in/docs/checkout-plus-integration), [Generate Hash](https://docs.payu.in/docs/generate-hash-payu-hosted).

---

## PayU 1. Backend: hash and transaction payload

**Current:** Razorpay uses Orders API with key + secret.

**Change for PayU:** Add an endpoint (or script) that:

- Accepts: `applicationId`, `amount_paise`, `email`, `firstname` (or name), `productinfo` (e.g. "Loan application").
- Builds a unique **txnid** (e.g. `applicationId` or `order_` + timestamp).
- Computes **hash** as:  
  `sha512(key|txnid|amount|productinfo|firstname|email|||||||||||SALT)`  
  (exact format in [PayU hash docs](https://docs.payu.in/docs/generate-hash-payu-hosted); amount in INR, e.g. paise/100).
- Returns to frontend: `{ key, txnid, amount, productinfo, firstname, email, hash, surl, furl }` (and any other required Bolt params). **Do not** return `SALT`.

**New files / env:**

- `aoo-static-gh/scripts/create-payu-payload.js` (Node) or API route that returns the Bolt payload with hash.
- Env: `PAYU_KEY` (merchant key), `PAYU_SALT` (merchant salt). Use test key/salt for UAT: [PayU test credentials](https://docs.payu.in/docs/generate-test-merchant-key-and-salt).

---

## PayU 2. Main site – `aoo-static-gh`

### PayU 2.1 `index.html`

- **Preconnect:** Add `https://jssdk.payu.in` (or `https://jssdk-uat.payu.in` for test).
- **Script:** Load Bolt in apply-flow or in HTML:  
  `<script src="https://jssdk.payu.in/bolt/bolt.min.js"></script>`  
  (UAT: `https://jssdk-uat.payu.in/bolt/bolt.min.js`)
- **Config:** e.g. `window.PAYU_PAYLOAD_API = '/api/create-payu-payload'` (your backend that returns key, txnid, amount, hash, etc.).

### PayU 2.2 `js/apply-flow.js`

- **Config:** Read `window.PAYU_PAYLOAD_API` (and optionally `window.PAYMENT_GATEWAY` if supporting multiple).
- **loadPayU():** Ensure Bolt is loaded: script `https://jssdk.payu.in/bolt/bolt.min.js`, wait for `window.PayUBolt` or global Bolt (check PayU docs for exact global name).
- **startPaymentFlow() when gateway is PayU:**
  1. After Supabase insert, `fetch(PAYU_PAYLOAD_API, { method: 'POST', body: JSON.stringify({ applicationId, amount_paise, email, firstname, productinfo }) })`.
  2. Backend returns Bolt payload (key, txnid, amount, productinfo, firstname, email, hash, surl, furl).
  3. Call `bolt.launch(payload, responseHandler)` (or equivalent from PayU docs). **surl** / **furl**: your return URLs; on success you can either handle in responseHandler or on surl (verify payment server-side).
  4. In success path: update `applications` with `status: 'paid'`, `payu_txn_id: <from response>` (PayU returns txnid and other refs in response).
  5. On cancel/failure: same as now (reset state, re-enable button).

**Supabase update for PayU:** e.g. `payu_txn_id: response.txnid` (or the id PayU returns in success response).

---

## PayU 3. Test page

- Add `pages/payu-test.html` + `js/payu-test.js`: call your PayU payload API, then `bolt.launch(...)` and show success/failure.

---

## PayU 4. Table standalone – `table/standalone-package`

- **index.html:** Add Bolt script and PayU config (`PAYU_PAYLOAD_API`).
- **js/apply-flow.js:** Same as main site: when PayU, get payload from API → `bolt.launch()` → on success update Supabase with `payu_txn_id`.

---

## PayU 5. Database – applications table

- Add column: `payu_txn_id text` (and optionally `payu_txnid` if you store the same id PayU uses).
- Comment: e.g. “Loan application submissions; payment via Razorpay / Paytm / PayU.”

```sql
alter table public.applications
  add column if not exists payu_txn_id text;
```

---

## PayU 6. PayU-specific details

- **Hash:** SHA-512; format `key|txnid|amount|productinfo|firstname|email|||||||||||SALT` (see [docs](https://docs.payu.in/docs/generate-hash-payu-hosted)). Amount in INR (e.g. ₹99 = 99.00).
- **Bolt:** [Checkout Plus](https://docs.payu.in/docs/checkout-plus-integration) – `bolt.launch(transactionData, responseHandler)`. Use UAT script for test.
- **Success/failure:** Handle in `responseHandler` and/or on **surl**/**furl**; verify payment status server-side before marking `status = 'paid'`.

---

## 10. Combined summary checklist (Razorpay + Paytm + PayU)

| # | Item | Action |
|---|------|--------|
| 1 | Backend | Razorpay: existing. Paytm: order API (checksum) → orderId + txnToken. PayU: payload API (hash) → Bolt payload. |
| 2 | `aoo-static-gh/index.html` | Preconnect + scripts: add Paytm and/or PayU; config for all enabled gateways. |
| 3 | `aoo-static-gh/js/apply-flow.js` | Support multiple gateways: branch on gateway; for PayU call payload API then `bolt.launch()`; update DB with provider-specific id. |
| 4 | DB `applications` | Add `paytm_order_id`, `paytm_txn_id`, `payu_txn_id` as needed; keep `razorpay_payment_id`. |
| 5 | Test pages | razorpay-test (existing), paytm-test, payu-test. |
| 6 | `table/standalone-package` | Same config + apply-flow branches for Paytm/PayU. |
| 7 | `supabase-auth-test` | Add Paytm/PayU config and test UI if you use this repo for payment tests. |
| 8 | Docs / comments | Mention all supported gateways where relevant. |
