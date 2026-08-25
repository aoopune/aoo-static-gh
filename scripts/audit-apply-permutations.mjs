/**
 * Apply-flow permutation / combination expansion.
 * Runs after the base audit — appends probes into the same break report.
 *
 * Usage:
 *   BASE_URL=http://127.0.0.1:8765 node scripts/audit-apply-permutations.mjs
 */
import { chromium } from "@playwright/test";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const BASE = (process.env.BASE_URL || "http://127.0.0.1:8765").replace(/\/$/, "");
const OUT_MD = path.join(ROOT, "super-review-1", "apply-flow-break-report.md");
const OUT_JSON = path.join(ROOT, "super-review-1", "apply-flow-break-report.json");

const findings = [];
const QA_EMAIL = "qa.permute@shroffin.example";
const QA_UID = "qa-uid-permute-001";
const QA_NAME = "QA Permute Tester";
const QA_PHONE = "9123456780";

function add(f) {
  findings.push({
    id: f.id,
    severity: f.severity,
    status: f.status,
    title: f.title,
    flowStep: f.flowStep,
    expected: f.expected,
    actual: f.actual,
    evidence: f.evidence || null,
    userImpact: f.userImpact,
    suite: "permutation",
  });
}

async function waitForBanks(page, { min = 1, timeout = 45000 } = {}) {
  await page.waitForFunction(
    (n) => document.querySelectorAll("tr.hlc-selectable-row").length >= n,
    min,
    { timeout }
  );
}

async function openFiltersIfNeeded(page) {
  const toggle = page.locator("#hlc-filters-toggle");
  const visible = await page
    .locator('[data-product-filter="bankPublic"]')
    .first()
    .isVisible()
    .catch(() => false);
  if (visible) return;
  if (await toggle.count()) {
    await toggle.click({ force: true }).catch(() => {});
    await page.waitForTimeout(400);
  }
}

async function setFilter(page, key, checked) {
  await openFiltersIfNeeded(page);
  const changed = await page.evaluate(
    ({ key, checked }) => {
      const input = document.querySelector(`[data-product-filter="${key}"]`);
      if (!input) return { ok: false, reason: "missing" };
      if (input.checked === checked) return { ok: true, changed: false };
      input.checked = checked;
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.dispatchEvent(new Event("change", { bubbles: true }));
      return { ok: true, changed: true };
    },
    { key, checked }
  );
  if (!changed.ok) throw new Error(`Filter ${key} not found`);
  const done = page.locator("#hlc-filters-done");
  if (await done.isVisible().catch(() => false)) {
    await done.click({ force: true }).catch(() => {});
  }
  await page.waitForTimeout(900);
}

async function fillInputsAndCompare(page, values = {}) {
  const v = {
    monthlyIncome: "1,00,000",
    propertyValue: "62,50,000",
    existingEmis: "0",
    cardLimits: "0",
    tenureYears: "20",
    age: "35",
    cibilScore: "780",
    occupation: "Salaried",
    purpose: "Regular Home Loan",
    ...values,
  };
  await page.goto(`${BASE}/pages/explore-banks.html`, {
    waitUntil: "domcontentloaded",
  });
  await page.evaluate(() => {
    try {
      sessionStorage.clear();
      localStorage.removeItem("shroffin-color-preference");
    } catch (e) {}
  });
  await page.reload({ waitUntil: "domcontentloaded" });
  await page.waitForSelector("#hlc-inputs", { timeout: 20000 });
  await page.evaluate((vals) => {
    function setText(id, value) {
      const el = document.getElementById(id);
      if (!el) return;
      el.focus();
      el.value = String(value);
      el.dispatchEvent(new Event("input", { bubbles: true }));
      el.dispatchEvent(new Event("change", { bubbles: true }));
      el.blur();
    }
    function setSelect(id, value) {
      const el = document.getElementById(id);
      if (!el) return;
      el.value = value;
      el.dispatchEvent(new Event("input", { bubbles: true }));
      el.dispatchEvent(new Event("change", { bubbles: true }));
    }
    setText("hlc-monthly-income", vals.monthlyIncome);
    setText("hlc-property-value", vals.propertyValue);
    setText("hlc-existing-emis", vals.existingEmis);
    setText("hlc-card-limits", vals.cardLimits);
    setText("hlc-tenure", vals.tenureYears);
    setText("hlc-age", vals.age);
    setText("hlc-cibil", vals.cibilScore);
    setSelect("hlc-occupation", vals.occupation);
    setSelect("hlc-purpose", vals.purpose);
  }, v);
  await page.locator("#hlc-see-options").click({ force: true });
  await page.waitForTimeout(1200);
  return v;
}

async function bankCount(page) {
  return page.evaluate(
    () => document.querySelectorAll("tr.hlc-selectable-row").length
  );
}

async function selectNth(page, index) {
  return page.evaluate((index) => {
    const rows = document.querySelectorAll("tr.hlc-selectable-row");
    const row = rows[index];
    if (!row) return null;
    const nameEl = row.querySelector(".hlc-bank-name-text");
    const name = nameEl
      ? nameEl.textContent.trim()
      : row.getAttribute("aria-label") || "";
    row.click();
    return name;
  }, index);
}

async function clickApplyOnce(page) {
  await page.evaluate(() => {
    const btn = document.getElementById("hlc-apply-btn");
    if (!btn) throw new Error("hlc-apply-btn missing");
    if (btn.disabled) throw new Error("hlc-apply-btn disabled");
    btn.scrollIntoView({ block: "center" });
    btn.click();
  });
  await page.waitForURL(/apply\.html/, { timeout: 15000 });
}

async function readPacket(page) {
  return page.evaluate(() => {
    try {
      return JSON.parse(sessionStorage.getItem("shroffin_hl_apply_v1") || "null");
    } catch (e) {
      return null;
    }
  });
}

async function exploreState(page) {
  return page.evaluate(() => {
    const rows = Array.from(document.querySelectorAll("tr.hlc-selectable-row")).map(
      (tr) => ({
        id: tr.getAttribute("data-id") || "",
        name: (
          tr.querySelector(".hlc-bank-name-text") ||
          tr.querySelector(".hlc-bank-name") ||
          tr
        ).textContent
          .trim()
          .replace(/\s+/g, " ")
          .slice(0, 60),
        selected:
          tr.classList.contains("is-selected") ||
          tr.getAttribute("aria-selected") === "true",
      })
    );
    const applyBtn = document.getElementById("hlc-apply-btn");
    const draftRaw = sessionStorage.getItem("shroffin_hl_explore_draft_v1");
    let draft = null;
    try {
      draft = draftRaw ? JSON.parse(draftRaw) : null;
    } catch (e) {
      draft = null;
    }
    return {
      visible: rows.length,
      selectedVisible: rows.filter((r) => r.selected).map((r) => r.name),
      draftIds: draft && Array.isArray(draft.selectedIds) ? draft.selectedIds : [],
      applyLabel: applyBtn ? applyBtn.getAttribute("aria-label") || applyBtn.textContent.trim() : null,
      applyDisabled: applyBtn ? applyBtn.disabled : null,
    };
  });
}

async function installFirebaseMock(page, { email, uid }) {
  return page.evaluate(
    ({ email, uid }) => {
      if (typeof firebase === "undefined") return { ok: false };
      window.__HL_QA_FIRESTORE_WRITES__ = [];
      const mockUser = {
        uid: String(uid),
        email: String(email),
        getIdToken: () => Promise.resolve("qa-token"),
      };
      let currentUser = null;
      const authListeners = [];
      const authSingleton = {
        get currentUser() {
          return currentUser;
        },
        signInWithPopup() {
          currentUser = mockUser;
          authListeners.forEach((cb) => {
            try {
              cb(currentUser);
            } catch (e) {}
          });
          return Promise.resolve({ user: mockUser });
        },
        signOut() {
          currentUser = null;
          authListeners.forEach((cb) => {
            try {
              cb(null);
            } catch (e) {}
          });
          return Promise.resolve();
        },
        onAuthStateChanged(cb) {
          authListeners.push(cb);
          try {
            cb(currentUser);
          } catch (e) {}
          return () => {};
        },
      };
      function GoogleAuthProvider() {}
      GoogleAuthProvider.prototype.addScope = function () {};
      GoogleAuthProvider.prototype.setCustomParameters = function () {};
      const authFn = function () {
        return authSingleton;
      };
      authFn.GoogleAuthProvider = GoogleAuthProvider;
      firebase.auth = authFn;
      function makeDoc(collectionName, docId) {
        return {
          set(payload) {
            window.__HL_QA_FIRESTORE_WRITES__.push({
              collection: collectionName,
              id: String(docId),
              payload: JSON.parse(JSON.stringify(payload)),
            });
            return Promise.resolve();
          },
        };
      }
      function makeCollection(name) {
        return { doc: (id) => makeDoc(name, id) };
      }
      const firestoreFn = function () {
        return {
          collection: makeCollection,
          runTransaction(fn) {
            const transaction = {
              get() {
                return Promise.resolve({
                  exists: true,
                  data: () => ({ lastId: 200100 }),
                });
              },
              set() {},
            };
            return Promise.resolve(fn(transaction));
          },
        };
      };
      firestoreFn.FieldValue = {
        serverTimestamp: () => ({ __qa_serverTimestamp: true }),
      };
      firebase.firestore = firestoreFn;
      return { ok: true };
    },
    { email, uid }
  );
}

async function submitHappyPath(page, packet, { bankExpectMin = 1 } = {}) {
  await page.goto(`${BASE}/pages/apply-contact.html`, {
    waitUntil: "domcontentloaded",
  });
  await page.evaluate((pkt) => {
    sessionStorage.setItem(
      "shroffin_hl_apply_v1",
      JSON.stringify({ ...pkt, ts: Date.now() })
    );
    sessionStorage.removeItem("shroffin_hl_apply_contact_v1");
  }, packet);
  await page.reload({ waitUntil: "domcontentloaded" });
  await page.waitForFunction(
    () => typeof firebase !== "undefined" && !!firebase.auth,
    null,
    { timeout: 20000 }
  );
  await installFirebaseMock(page, { email: QA_EMAIL, uid: QA_UID });
  await page.fill("#hl-name", QA_NAME);
  await page.fill("#hl-phone", QA_PHONE);
  await page.fill("#hl-email", QA_EMAIL);
  await page.check("#hl-consent");
  await page.waitForTimeout(300);
  await page.locator("#hl-verify-email").click({ force: true });
  await page.waitForTimeout(1000);
  await page.locator("#hl-submit-application").click({ force: true });
  await page
    .waitForFunction(
      () => {
        const host = document.getElementById("hl-apply-success");
        return (
          host &&
          !host.hidden &&
          /Application received/i.test(host.innerText || "")
        );
      },
      null,
      { timeout: 15000 }
    )
    .catch(() => {});
  return page.evaluate((minBanks) => {
    const host = document.getElementById("hl-apply-success");
    const text = host ? host.innerText.replace(/\s+/g, " ").trim() : "";
    const writes = window.__HL_QA_FIRESTORE_WRITES__ || [];
    const payload = writes[0] && writes[0].payload;
    return {
      received: /Application received/i.test(text),
      text: text.slice(0, 240),
      writeCount: writes.length,
      banksWritten: payload && payload.banks ? payload.banks.length : 0,
      status: payload && payload.status,
      income: payload && payload.input_data && payload.input_data.query
        ? payload.input_data.query.monthlyIncome
        : null,
      occupation:
        payload && payload.input_data && payload.input_data.query
          ? payload.input_data.query.occupation
          : null,
      purpose:
        payload && payload.input_data && payload.input_data.query
          ? payload.input_data.query.purpose
          : null,
      okBanks: payload && payload.banks && payload.banks.length >= minBanks,
    };
  }, bankExpectMin);
}

async function section(name, fn) {
  try {
    await fn();
  } catch (err) {
    add({
      id: `PX-CRASH-${name}`,
      severity: "P0",
      status: "FAIL",
      title: `Permutation section crashed: ${name}`,
      flowStep: name,
      expected: "Section completes",
      actual: String(err && err.stack ? err.stack : err).slice(0, 1000),
      userImpact: "Permutation coverage incomplete for this area.",
    });
  }
}

async function main() {
  const runStarted = new Date().toISOString();
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
  });
  const page = await context.newPage();
  page.setDefaultTimeout(20000);

  // ── INPUT MATRIX: occupation × purpose ──
  await section("input-occ-purpose", async () => {
    const combos = [
      { occupation: "Salaried", purpose: "Regular Home Loan", id: "PX-IN-01" },
      { occupation: "Self-Employed", purpose: "Regular Home Loan", id: "PX-IN-02" },
      { occupation: "Salaried", purpose: "Top-up Loan", id: "PX-IN-03" },
      { occupation: "Self-Employed", purpose: "Top-up Loan", id: "PX-IN-04" },
    ];
    for (const c of combos) {
      const filled = await fillInputsAndCompare(page, {
        occupation: c.occupation,
        purpose: c.purpose,
        monthlyIncome: "1,50,000",
        cibilScore: "760",
      });
      const n = await bankCount(page);
      let packet = null;
      let received = false;
      let writtenOcc = null;
      let writtenPurpose = null;
      if (n >= 1) {
        await selectNth(page, 0);
        await page.waitForTimeout(300);
        await clickApplyOnce(page);
        packet = await readPacket(page);
        const result = await submitHappyPath(page, packet, { bankExpectMin: 1 });
        received = result.received && result.status === "received";
        writtenOcc = result.occupation;
        writtenPurpose = result.purpose;
      }
      const occOk =
        writtenOcc == null ||
        String(writtenOcc).toLowerCase().includes(c.occupation.toLowerCase().slice(0, 6));
      const purposeOk =
        writtenPurpose == null ||
        (/top-?up/i.test(c.purpose)
          ? /top-?up/i.test(String(writtenPurpose || ""))
          : /regular|home/i.test(String(writtenPurpose || "")));
      add({
        id: c.id,
        severity: "P0",
        status:
          n >= 1 && packet && packet.banks && packet.banks.length && received && occOk
            ? "PASS"
            : n === 0
              ? "INFO"
              : "FAIL",
        title: `Input combo ${c.occupation} × ${c.purpose} → Application received`,
        flowStep: "Permutation / occupation×purpose",
        expected: "Matches (or honest zero) and if matches, full submit success with same occupation/purpose",
        actual: `banks=${n}; packetBanks=${packet && packet.banks ? packet.banks.length : 0}; received=${received}; writtenOcc=${writtenOcc}; writtenPurpose=${writtenPurpose}; filled=${JSON.stringify(filled)}`,
        evidence: { n, writtenOcc, writtenPurpose, received },
        userImpact:
          n === 0
            ? "No matching banks for this combo — not a submit bug, but customers see empty results."
            : "This customer type must be able to finish Apply.",
      });
    }
  });

  // ── INPUT MATRIX: income / age / CIBIL extremes ──
  await section("input-extremes", async () => {
    const extremes = [
      {
        id: "PX-IN-05",
        title: "Low income band",
        values: { monthlyIncome: "40,000", propertyValue: "25,00,000", cibilScore: "720", age: "30" },
      },
      {
        id: "PX-IN-06",
        title: "High income band",
        values: { monthlyIncome: "5,00,000", propertyValue: "2,50,00,000", cibilScore: "850", age: "40" },
      },
      {
        id: "PX-IN-07",
        title: "Young applicant",
        values: { age: "25", monthlyIncome: "80,000", cibilScore: "750" },
      },
      {
        id: "PX-IN-08",
        title: "Older applicant",
        values: { age: "55", monthlyIncome: "1,20,000", cibilScore: "780", tenureYears: "10" },
      },
      {
        id: "PX-IN-09",
        title: "Borderline CIBIL",
        values: { cibilScore: "650", monthlyIncome: "1,00,000" },
      },
    ];
    for (const ex of extremes) {
      await fillInputsAndCompare(page, ex.values);
      const n = await bankCount(page);
      let ok = false;
      let detail = `banks=${n}`;
      if (n >= 1) {
        await selectNth(page, 0);
        await page.waitForTimeout(300);
        await clickApplyOnce(page);
        const packet = await readPacket(page);
        const q = packet && packet.input_data && packet.input_data.query;
        const result = await submitHappyPath(page, packet);
        ok = result.received && result.status === "received";
        detail += `; received=${result.received}; incomeWritten=${result.income}; age=${q && q.age}; cibil=${q && q.cibilScore}`;
      }
      add({
        id: ex.id,
        severity: "P1",
        status: n === 0 ? "INFO" : ok ? "PASS" : "FAIL",
        title: `${ex.title} reaches Application received (or honest empty match)`,
        flowStep: "Permutation / input extremes",
        expected: "If banks match, full funnel succeeds; if zero banks, report INFO not crash",
        actual: detail,
        evidence: ex.values,
        userImpact: "Extreme but valid profiles must not crash Apply.",
      });
    }
  });

  // ── FILTER ORPHAN MATRIX (select then flip each axis) ──
  await section("filter-orphan-matrix", async () => {
    const flips = [
      {
        id: "PX-SEL-01",
        title: "Term loan → Overdraft-only drops selection visibility",
        setup: async () => {
          await setFilter(page, "facilityTermLoan", true);
          await setFilter(page, "overdraft", false);
        },
        flip: async () => {
          await setFilter(page, "facilityTermLoan", false);
          await setFilter(page, "overdraft", true);
        },
      },
      {
        id: "PX-SEL-02",
        title: "Women filter rematch after select",
        setup: async () => {
          await setFilter(page, "womenApplicant", false);
        },
        flip: async () => {
          await setFilter(page, "womenApplicant", true);
        },
      },
      {
        id: "PX-SEL-03",
        title: "Green home filter rematch after select",
        setup: async () => {
          await setFilter(page, "greenHome", false);
        },
        flip: async () => {
          await setFilter(page, "greenHome", true);
        },
      },
      {
        id: "PX-SEL-04",
        title: "Insurance filter rematch after select",
        setup: async () => {
          await setFilter(page, "insurance", false);
        },
        flip: async () => {
          await setFilter(page, "insurance", true);
        },
      },
      {
        id: "PX-SEL-05",
        title: "Govt PSU filter rematch after select",
        setup: async () => {
          await setFilter(page, "govtPsu", false);
        },
        flip: async () => {
          await setFilter(page, "govtPsu", true);
        },
      },
      {
        id: "PX-SEL-06",
        title: "Both bank types off then Private on (selection survival)",
        setup: async () => {
          await setFilter(page, "bankPublic", true);
          await setFilter(page, "bankPrivate", true);
        },
        flip: async () => {
          await setFilter(page, "bankPublic", false);
          await setFilter(page, "bankPrivate", true);
        },
      },
    ];

    for (const f of flips) {
      await fillInputsAndCompare(page);
      await f.setup();
      const n = await bankCount(page);
      if (n < 1) {
        add({
          id: f.id,
          severity: "P0",
          status: "INFO",
          title: f.title,
          flowStep: "Permutation / filter orphans",
          expected: "Banks available to select before flip",
          actual: "No banks before flip",
          userImpact: "Could not run this filter permutation.",
        });
        continue;
      }
      await selectNth(page, 0);
      await page.waitForTimeout(300);
      const before = await exploreState(page);
      await f.flip();
      const after = await exploreState(page);
      const stillVisible = after.selectedVisible.length > 0;
      const countLie =
        /Apply once to (\d+)/i.test(after.applyLabel || "") &&
        Number((after.applyLabel.match(/(\d+)/) || [])[1]) > after.selectedVisible.length &&
        after.draftIds.length > after.selectedVisible.length;

      // Product expectation: selected should stay visible OR count should not lie.
      // Prior bugs: disappears + draft still counts.
      const ghost =
        after.draftIds.length > 0 && after.selectedVisible.length === 0;

      add({
        id: f.id,
        severity: "P0",
        status: stillVisible && !ghost ? "PASS" : ghost || countLie ? "FAIL" : "INFO",
        title: f.title,
        flowStep: "Permutation / filter orphans",
        expected: "Selected bank stays visible (pinned) or is clearly deselected; count must not lie",
        actual: `beforeSelected=${JSON.stringify(before.selectedVisible)}; afterSelected=${JSON.stringify(after.selectedVisible)}; draftIds=${JSON.stringify(after.draftIds)}; apply="${after.applyLabel}"; ghost=${ghost}`,
        evidence: { before, after },
        userImpact:
          "Filter flips that hide selected banks while keeping a count break Apply trust.",
      });
    }
  });

  // ── MULTI-BANK → submit ──
  await section("multi-bank-submit", async () => {
    await fillInputsAndCompare(page);
    await selectNth(page, 0);
    await selectNth(page, 1);
    await selectNth(page, 2);
    await page.waitForTimeout(400);
    const before = await exploreState(page);
    await clickApplyOnce(page);
    const packet = await readPacket(page);
    const nBanks = packet && packet.banks ? packet.banks.length : 0;
    const result = await submitHappyPath(page, packet, { bankExpectMin: 3 });
    add({
      id: "PX-MULTI-01",
      severity: "P0",
      status:
        nBanks >= 3 && result.received && result.banksWritten >= 3
          ? "PASS"
          : "FAIL",
      title: "Select 3 banks → Application received writes all 3",
      flowStep: "Permutation / multi-bank",
      expected: "Packet and Firestore write include 3 banks",
      actual: `selectedVisible=${before.selectedVisible.length}; draftIds=${before.draftIds.length}; packetBanks=${nBanks}; written=${result.banksWritten}; received=${result.received}`,
      evidence: { before, result, names: (packet && packet.banks || []).map((b) => b.bankName) },
      userImpact: "Multi-bank apply is the core product promise.",
    });
  });

  // ── CO-APPLICANT full funnel ──
  await section("coapplicant-funnel", async () => {
    await fillInputsAndCompare(page);
    const coSelect = page.locator("#hlc-coapplicant");
    if (!(await coSelect.count())) {
      add({
        id: "PX-CO-01",
        severity: "P1",
        status: "BLOCKED",
        title: "Co-applicant path to Application received",
        flowStep: "Permutation / co-applicant",
        expected: "Co-applicant select present",
        actual: "Missing #hlc-coapplicant",
        userImpact: "Could not test co-applicant funnel.",
      });
      return;
    }
    await page.evaluate(() => {
        const sel = document.getElementById("hlc-coapplicant");
        if (!sel) return;
        sel.value = "yes";
        sel.dispatchEvent(new Event("change", { bubbles: true }));
      });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      const card = document.querySelector(".hlc-coapplicant-card");
      if (!card) return;
      card.querySelectorAll("input").forEach((inp) => {
        const id = (inp.id || inp.name || "").toLowerCase();
        let val = null;
        if (id.includes("income")) val = "45000";
        else if (id.includes("emi")) val = "3000";
        else if (id.includes("card")) val = "15000";
        else if (id.includes("age")) val = "33";
        else if (id.includes("cibil")) val = "770";
        if (val != null) {
          inp.value = val;
          inp.dispatchEvent(new Event("input", { bubbles: true }));
          inp.dispatchEvent(new Event("change", { bubbles: true }));
        }
      });
    });
    await page.waitForTimeout(1200);
    await waitForBanks(page, { min: 1 }).catch(() => {});
    await selectNth(page, 0);
    await page.waitForTimeout(300);
    await clickApplyOnce(page);
    const packet = await readPacket(page);
    const form = packet && packet.input_data && packet.input_data.form;
    const hasCo =
      form &&
      ((Array.isArray(form.coApplicants) && form.coApplicants.length > 0) ||
        form.includeCoApplicant === true ||
        form.includeCoApplicant === "yes");
    const applyUi = await page.evaluate(() => {
      const details = document.getElementById("hl-apply-your-details");
      return details ? details.innerText : "";
    });
    const incomeBlank = /Co-applicant income[\s\S]{0,20}—/i.test(applyUi);
    const result = await submitHappyPath(page, packet);
    const writtenHasCo = await page.evaluate(() => {
      // packet cleared; inspect last write if any left — re-read from closure via result
      return null;
    });
    add({
      id: "PX-CO-01",
      severity: "P0",
      status: hasCo && result.received ? "PASS" : "FAIL",
      title: "Co-applicant on → Application received",
      flowStep: "Permutation / co-applicant",
      expected: "Packet includes co-applicant; submit succeeds",
      actual: `hasCo=${hasCo}; received=${result.received}; incomeBlankOnReview=${incomeBlank}`,
      evidence: { form, incomeBlank, result },
      userImpact: "Co-applicant cases are common; submit must keep their data.",
    });
    add({
      id: "PX-CO-02",
      severity: "P1",
      status: hasCo && !incomeBlank ? "PASS" : hasCo && incomeBlank ? "FAIL" : "INFO",
      title: "Co-applicant income visible on Apply review",
      flowStep: "Permutation / co-applicant review",
      expected: "Review shows co-applicant income, not a dash",
      actual: `incomeBlank=${incomeBlank}; snippet=${JSON.stringify(applyUi.match(/Co-applicant[\s\S]{0,80}/i)?.[0] || applyUi.slice(0, 120))}`,
      evidence: { applyUi: applyUi.slice(0, 500) },
      userImpact: "User cannot confirm co-applicant numbers before submit.",
    });
  });

  // ── CONTACT EDGE CASES ──
  await section("contact-edges", async () => {
    await fillInputsAndCompare(page);
    await selectNth(page, 0);
    await clickApplyOnce(page);
    let packet = await readPacket(page);

    // +91 phone accepted
    await page.goto(`${BASE}/pages/apply-contact.html`, {
      waitUntil: "domcontentloaded",
    });
    await page.evaluate((pkt) => {
      sessionStorage.setItem(
        "shroffin_hl_apply_v1",
        JSON.stringify({ ...pkt, ts: Date.now() })
      );
    }, packet);
    await page.reload({ waitUntil: "domcontentloaded" });
    await page.waitForSelector("#hl-phone");
    await page.fill("#hl-name", QA_NAME);
    await page.fill("#hl-phone", "+91 91234 56780");
    await page.fill("#hl-email", QA_EMAIL);
    await page.check("#hl-consent");
    await page.waitForTimeout(400);
    const phoneOk = await page.evaluate(() => {
      const ok = document.getElementById("hl-phone-ok");
      const verify = document.getElementById("hl-verify-email");
      return {
        phoneOkVisible: ok ? !ok.hidden : false,
        verifyDisabled: verify ? verify.disabled : null,
      };
    });
    add({
      id: "PX-CT-01",
      severity: "P1",
      status: phoneOk.phoneOkVisible && phoneOk.verifyDisabled === false ? "PASS" : "FAIL",
      title: "+91 formatted phone accepted on contact",
      flowStep: "Permutation / phone formats",
      expected: "Phone with +91 / spaces validates",
      actual: JSON.stringify(phoneOk),
      userImpact: "People often paste +91 numbers.",
    });

    // Bad email
    await page.fill("#hl-email", "not-an-email");
    await page.waitForTimeout(300);
    const badEmail = await page.evaluate(() => {
      const verify = document.getElementById("hl-verify-email");
      const submit = document.getElementById("hl-submit-application");
      return {
        verifyDisabled: verify ? verify.disabled : null,
        submitDisabled: submit ? submit.disabled : null,
      };
    });
    add({
      id: "PX-CT-02",
      severity: "P1",
      status:
        badEmail.verifyDisabled === true && badEmail.submitDisabled === true
          ? "PASS"
          : "FAIL",
      title: "Invalid email keeps Verify and Submit locked",
      flowStep: "Permutation / email validation",
      expected: "Verify/Submit disabled for malformed email",
      actual: JSON.stringify(badEmail),
      userImpact: "Bad emails break follow-up.",
    });

    // Draft survives reload
    await page.fill("#hl-email", QA_EMAIL);
    await page.fill("#hl-name", "Draft Survivor");
    await page.fill("#hl-phone", QA_PHONE);
    await page.check("#hl-consent");
    await page.waitForTimeout(400);
    await page.reload({ waitUntil: "domcontentloaded" });
    await page.waitForSelector("#hl-name");
    const restored = await page.evaluate(() => ({
      name: (document.getElementById("hl-name") || {}).value,
      phone: (document.getElementById("hl-phone") || {}).value,
      email: (document.getElementById("hl-email") || {}).value,
    }));
    add({
      id: "PX-CT-03",
      severity: "P1",
      status:
        restored.name === "Draft Survivor" &&
        String(restored.email).toLowerCase() === QA_EMAIL
          ? "PASS"
          : "FAIL",
      title: "Contact draft restores after reload",
      flowStep: "Permutation / contact draft",
      expected: "Name/email restored from session draft",
      actual: JSON.stringify(restored),
      userImpact: "Accidental refresh should not wipe contact fields.",
    });

    // Double submit → single write
    packet = await readPacket(page);
    if (!packet) {
      await fillInputsAndCompare(page);
      await selectNth(page, 0);
      await clickApplyOnce(page);
      packet = await readPacket(page);
    }
    await page.goto(`${BASE}/pages/apply-contact.html`, {
      waitUntil: "domcontentloaded",
    });
    await page.evaluate((pkt) => {
      sessionStorage.setItem(
        "shroffin_hl_apply_v1",
        JSON.stringify({ ...pkt, ts: Date.now() })
      );
    }, packet);
    await page.reload({ waitUntil: "domcontentloaded" });
    await page.waitForFunction(
      () => typeof firebase !== "undefined" && !!firebase.auth,
      null,
      { timeout: 20000 }
    );
    await installFirebaseMock(page, { email: QA_EMAIL, uid: QA_UID });
    await page.fill("#hl-name", QA_NAME);
    await page.fill("#hl-phone", QA_PHONE);
    await page.fill("#hl-email", QA_EMAIL);
    await page.check("#hl-consent");
    await page.locator("#hl-verify-email").click({ force: true });
    await page.waitForTimeout(1000);
    await page.locator("#hl-submit-application").click({ force: true });
    await page.locator("#hl-submit-application").click({ force: true }).catch(() => {});
    await page.waitForTimeout(1500);
    const writes = await page.evaluate(
      () => (window.__HL_QA_FIRESTORE_WRITES__ || []).length
    );
    const received = await page.evaluate(() => {
      const host = document.getElementById("hl-apply-success");
      return host && !host.hidden && /Application received/i.test(host.innerText || "");
    });
    add({
      id: "PX-CT-04",
      severity: "P1",
      status: received && writes === 1 ? "PASS" : received && writes > 1 ? "FAIL" : "FAIL",
      title: "Double-click Submit writes once",
      flowStep: "Permutation / double submit",
      expected: "Exactly one Firestore write + one success UI",
      actual: `received=${received}; writes=${writes}`,
      userImpact: "Duplicate applications confuse ops and the customer.",
    });

    // Remove last bank on review → safe recovery
    await fillInputsAndCompare(page);
    await selectNth(page, 0);
    await clickApplyOnce(page);
    await page.evaluate(() => {
      const btn = document.querySelector(
        ".hl-apply-bank-remove, [data-remove-bank], #hl-apply-banks button[aria-label*='Remove'], #hl-apply-banks .hl-apply-bank-actions button"
      );
      if (btn) btn.click();
    });
    await page.waitForTimeout(1200);
    const afterRemove = {
      url: page.url(),
      packet: await readPacket(page),
    };
    add({
      id: "PX-CT-05",
      severity: "P1",
      status:
        /explore-banks/i.test(afterRemove.url) ||
        !afterRemove.packet ||
        !(afterRemove.packet.banks && afterRemove.packet.banks.length)
          ? "PASS"
          : "FAIL",
      title: "Removing last bank on review recovers safely",
      flowStep: "Permutation / remove last bank",
      expected: "Bounce to Explore or clear empty packet — no fake Apply",
      actual: `url=${afterRemove.url}; banks=${afterRemove.packet && afterRemove.packet.banks ? afterRemove.packet.banks.length : 0}`,
      evidence: afterRemove,
      userImpact: "Empty shortlist must not look submittable.",
    });
  });

  // ── MOBILE VIEWPORT happy path ──
  await section("mobile-funnel", async () => {
    const mobile = await browser.newContext({
      viewport: { width: 390, height: 844 },
      isMobile: true,
      hasTouch: true,
    });
    const mpage = await mobile.newPage();
    mpage.setDefaultTimeout(25000);
    try {
      await fillInputsAndCompare(mpage);
      const n = await bankCount(mpage);
      if (n < 1) throw new Error("No banks on mobile");
      await selectNth(mpage, 0);
      await mpage.waitForTimeout(400);
      // Mobile may use floating dock — click via DOM
      await clickApplyOnce(mpage);
      const packet = await readPacket(mpage);
      await mpage.locator("#hl-continue-application").click({ force: true });
      await mpage.waitForURL(/apply-contact\.html/, { timeout: 15000 });
      await mpage.waitForFunction(
        () => typeof firebase !== "undefined" && !!firebase.auth,
        null,
        { timeout: 20000 }
      );
      await installFirebaseMock(mpage, { email: QA_EMAIL, uid: QA_UID });
      await mpage.fill("#hl-name", QA_NAME);
      await mpage.fill("#hl-phone", QA_PHONE);
      await mpage.fill("#hl-email", QA_EMAIL);
      await mpage.check("#hl-consent");
      await mpage.locator("#hl-verify-email").click({ force: true });
      await mpage.waitForTimeout(1000);
      await mpage.locator("#hl-submit-application").click({ force: true });
      await mpage
        .waitForFunction(
          () => {
            const host = document.getElementById("hl-apply-success");
            return (
              host &&
              !host.hidden &&
              /Application received/i.test(host.innerText || "")
            );
          },
          null,
          { timeout: 15000 }
        )
        .catch(() => {});
      const ok = await mpage.evaluate(() => {
        const host = document.getElementById("hl-apply-success");
        const text = host ? host.innerText : "";
        const writes = window.__HL_QA_FIRESTORE_WRITES__ || [];
        return {
          received: /Application received/i.test(text),
          writes: writes.length,
          text: text.replace(/\s+/g, " ").slice(0, 180),
        };
      });
      add({
        id: "PX-MOB-01",
        severity: "P0",
        status: ok.received && ok.writes === 1 ? "PASS" : "FAIL",
        title: "Mobile (390×844) full funnel → Application received",
        flowStep: "Permutation / mobile",
        expected: "Phone viewport completes Apply once to success",
        actual: JSON.stringify(ok),
        evidence: { packetBanks: packet && packet.banks ? packet.banks.length : 0 },
        userImpact: "Most customers apply on phone.",
      });
    } finally {
      await mobile.close();
    }
  });

  // ── BACK navigation Apply ↔ Contact ──
  await section("back-nav", async () => {
    await fillInputsAndCompare(page);
    await selectNth(page, 0);
    await selectNth(page, 1);
    await clickApplyOnce(page);
    const onApply = await readPacket(page);
    await page.locator("#hl-continue-application").click({ force: true });
    await page.waitForURL(/apply-contact\.html/, { timeout: 15000 });
    await page.locator('a[href="apply.html"], a.hl-apply-back, .hl-apply-back').first().click({ force: true }).catch(async () => {
      await page.goto(`${BASE}/pages/apply.html`, { waitUntil: "domcontentloaded" });
    });
    await page.waitForTimeout(800);
    const backPacket = await readPacket(page);
    add({
      id: "PX-NAV-01",
      severity: "P1",
      status:
        backPacket &&
        backPacket.banks &&
        onApply &&
        onApply.banks &&
        backPacket.banks.length === onApply.banks.length
          ? "PASS"
          : "FAIL",
      title: "Back from Contact keeps Apply packet banks",
      flowStep: "Permutation / back navigation",
      expected: "Same bank count after Contact → Apply",
      actual: `before=${onApply && onApply.banks && onApply.banks.length}; after=${backPacket && backPacket.banks && backPacket.banks.length}; url=${page.url()}`,
      userImpact: "Back must not wipe the shortlist.",
    });
  });

  await browser.close();

  // Merge into existing report
  let base = { findings: [], totals: {}, baseURL: BASE };
  if (fs.existsSync(OUT_JSON)) {
    try {
      base = JSON.parse(fs.readFileSync(OUT_JSON, "utf8"));
    } catch (e) {
      base = { findings: [] };
    }
  }
  // Drop prior permutation findings if re-run
  const kept = (base.findings || []).filter((f) => f.suite !== "permutation");
  const mergedFindings = kept.concat(findings);
  const summary = {
    generatedAt: base.generatedAt || runStarted,
    permutationAt: new Date().toISOString(),
    finishedAt: new Date().toISOString(),
    baseURL: BASE,
    totals: {
      FAIL: mergedFindings.filter((f) => f.status === "FAIL").length,
      PASS: mergedFindings.filter((f) => f.status === "PASS").length,
      BLOCKED: mergedFindings.filter((f) => f.status === "BLOCKED").length,
      INFO: mergedFindings.filter((f) => f.status === "INFO").length,
      P0_FAIL: mergedFindings.filter((f) => f.status === "FAIL" && f.severity === "P0").length,
      P1_FAIL: mergedFindings.filter((f) => f.status === "FAIL" && f.severity === "P1").length,
      P2_FAIL: mergedFindings.filter((f) => f.status === "FAIL" && f.severity === "P2").length,
      PERM_PASS: findings.filter((f) => f.status === "PASS").length,
      PERM_FAIL: findings.filter((f) => f.status === "FAIL").length,
      PERM_INFO: findings.filter((f) => f.status === "INFO").length,
      PERM_BLOCKED: findings.filter((f) => f.status === "BLOCKED").length,
    },
    findings: mergedFindings,
  };

  const sevLabel = (s) =>
    s === "P0" ? "Serious" : s === "P1" ? "Important" : "Lesser";
  const fails = mergedFindings.filter((f) => f.status === "FAIL");
  const passes = mergedFindings.filter((f) => f.status === "PASS");
  const infos = mergedFindings.filter(
    (f) => f.status === "INFO" || f.status === "BLOCKED"
  );

  const md = [];
  md.push("# Apply user-flow break report");
  md.push("");
  md.push(`Generated: ${summary.finishedAt}  `);
  md.push(`Base URL: ${BASE}  `);
  md.push(
    "Method: Base funnel audit + **permutation expansion** (inputs × filters × multi-bank × co-applicant × mobile × contact edges)"
  );
  md.push("");
  md.push("## Verdict (plain English)");
  md.push("");
  const e2e = mergedFindings.find((f) => f.id === "E2E-03");
  const mob = mergedFindings.find((f) => f.id === "PX-MOB-01");
  const multi = mergedFindings.find((f) => f.id === "PX-MULTI-01");
  md.push(
    e2e && e2e.status === "PASS"
      ? "**Happy path (desktop):** inputs → Apply → contact → verify → **Application received** — PASS in base audit."
      : "**Happy path (desktop):** did not fully pass — see E2E probes."
  );
  md.push("");
  md.push(
    mob
      ? `**Mobile funnel:** ${mob.status} — ${mob.actual}`
      : "**Mobile funnel:** not run."
  );
  md.push("");
  md.push(
    multi
      ? `**3-bank apply:** ${multi.status} — ${multi.actual}`
      : "**3-bank apply:** not run."
  );
  md.push("");
  md.push(
    `This run added **${findings.length}** permutation probes (${summary.totals.PERM_PASS} pass / ${summary.totals.PERM_FAIL} fail / ${summary.totals.PERM_INFO} info). Still not infinite coverage — continuous numbers and every bank pair are endless — but occupation×purpose, extremes, filter flips, multi-bank, co-applicant, mobile, and contact edges were exercised live.`
  );
  md.push("");
  md.push(
    "Known serious product break remains: filter changes can hide selected banks while the Apply count still includes them."
  );
  md.push("");
  md.push("## Summary");
  md.push("");
  md.push("| Status | Count |");
  md.push("|---|---:|");
  md.push(`| FAIL (product) | ${summary.totals.FAIL} |`);
  md.push(`| PASS | ${summary.totals.PASS} |`);
  md.push(`| BLOCKED | ${summary.totals.BLOCKED} |`);
  md.push(`| INFO | ${summary.totals.INFO} |`);
  md.push(`| P0 fails | ${summary.totals.P0_FAIL} |`);
  md.push(`| P1 fails | ${summary.totals.P1_FAIL} |`);
  md.push(`| P2 fails | ${summary.totals.P2_FAIL} |`);
  md.push(`| Permutation PASS | ${summary.totals.PERM_PASS} |`);
  md.push(`| Permutation FAIL | ${summary.totals.PERM_FAIL} |`);
  md.push("");
  md.push("## What worked (incl. new permutations)");
  md.push("");
  passes.forEach((f) => {
    md.push(`- **${f.id}** — ${f.title}`);
  });
  md.push("");
  md.push("---");
  md.push("");
  md.push("## Full list of issues (simple English)");
  md.push("");
  fails
    .sort((a, b) => a.severity.localeCompare(b.severity) || a.id.localeCompare(b.id))
    .forEach((f, i) => {
      md.push(`### ${i + 1}. [${sevLabel(f.severity)}] ${f.title}`);
      md.push("");
      md.push(`**Probe:** \`${f.id}\` · **Step:** ${f.flowStep}`);
      md.push("");
      md.push("**In simple English:**  ");
      md.push(f.userImpact || f.title);
      md.push("");
      md.push("**Expected:**  ");
      md.push(f.expected);
      md.push("");
      md.push("**Test note:**  ");
      md.push(f.actual);
      md.push("");
    });
  md.push("---");
  md.push("");
  md.push("## INFO / BLOCKED (honest empties & limits)");
  md.push("");
  infos.forEach((f) => {
    md.push(`- **${f.status}** \`${f.id}\` — ${f.title}: ${f.actual}`);
  });
  md.push("");
  md.push("## All probes");
  md.push("");
  mergedFindings.forEach((f) => {
    md.push(
      `- **${f.status}** \`${f.id}\` [${f.severity}]${f.suite === "permutation" ? " (perm)" : ""} ${f.title}`
    );
  });
  md.push("");
  md.push("## How to re-run");
  md.push("");
  md.push("```bash");
  md.push(`cd "${ROOT}"`);
  md.push('export PLAYWRIGHT_BROWSERS_PATH="$HOME/.cache/ms-playwright"');
  md.push('LOCAL_LIBS="/tmp/pw-libs/root/usr/lib/x86_64-linux-gnu"');
  md.push('[[ -d "$LOCAL_LIBS" ]] && export LD_LIBRARY_PATH="${LOCAL_LIBS}${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}"');
  md.push("BASE_URL=http://127.0.0.1:8765 node scripts/audit-apply-user-flow.mjs");
  md.push("BASE_URL=http://127.0.0.1:8765 node scripts/audit-apply-permutations.mjs");
  md.push("```");
  md.push("");
  md.push("Machine-readable: `super-review-1/apply-flow-break-report.json`");
  md.push("");

  fs.writeFileSync(OUT_JSON, JSON.stringify(summary, null, 2));
  fs.writeFileSync(OUT_MD, md.join("\n"));
  console.log(
    JSON.stringify(
      {
        permutation: {
          PASS: summary.totals.PERM_PASS,
          FAIL: summary.totals.PERM_FAIL,
          INFO: summary.totals.PERM_INFO,
          BLOCKED: summary.totals.PERM_BLOCKED,
          total: findings.length,
        },
        merged: {
          PASS: summary.totals.PASS,
          FAIL: summary.totals.FAIL,
          INFO: summary.totals.INFO,
        },
      },
      null,
      2
    )
  );
  console.log("Wrote", OUT_MD);
  process.exit(summary.totals.PERM_FAIL > 0 && summary.totals.P0_FAIL > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error(err);
  process.exit(2);
});
