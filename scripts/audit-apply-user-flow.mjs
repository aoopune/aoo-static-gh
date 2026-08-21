/**
 * Robust Explore → Apply user-flow audit.
 * Proves breaks with live page probes (not theory alone).
 *
 * Usage:
 *   BASE_URL=http://127.0.0.1:8765 node scripts/audit-apply-user-flow.mjs
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

function add(finding) {
  findings.push({
    id: finding.id,
    severity: finding.severity, // P0 | P1 | P2
    status: finding.status, // FAIL | PASS | BLOCKED | INFO
    title: finding.title,
    flowStep: finding.flowStep,
    expected: finding.expected,
    actual: finding.actual,
    evidence: finding.evidence || null,
    userImpact: finding.userImpact,
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
  const panel = page.locator("#hlc-filters-panel");
  const toggle = page.locator("#hlc-filters-toggle");
  const visible = await page
    .locator('[data-product-filter="bankPublic"]')
    .first()
    .isVisible()
    .catch(() => false);
  if (visible) return;
  if (await toggle.count()) {
    await toggle.click({ force: true }).catch(() => {});
    await page.waitForTimeout(500);
  }
  // Desktop may keep panel in DOM but off-screen; still proceed via evaluate.
  await panel.waitFor({ state: "attached", timeout: 5000 }).catch(() => {});
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
  await page.waitForTimeout(900); // match debounce + fade
}

async function readExploreState(page) {
  return page.evaluate(() => {
    const rows = Array.from(document.querySelectorAll("tr.hlc-selectable-row")).map((tr) => ({
      id: tr.getAttribute("data-id") || tr.getAttribute("data-bank-id") || "",
      name: (
        tr.querySelector(".hlc-bank-name-text") ||
        tr.querySelector(".hlc-bank-name") ||
        tr
      ).textContent
        .trim()
        .replace(/\s+/g, " ")
        .slice(0, 80),
      selected:
        tr.classList.contains("is-selected") ||
        tr.getAttribute("aria-selected") === "true",
    }));
    const applyBtn = document.getElementById("hlc-apply-btn");
    const applyCount = document.getElementById("hlc-apply-count");
    const draftRaw = sessionStorage.getItem("shroffin_hl_explore_draft_v1");
    let draft = null;
    try {
      draft = draftRaw ? JSON.parse(draftRaw) : null;
    } catch (e) {
      draft = { parseError: String(e) };
    }
    const meta = document.getElementById("hlc-meta") || document.querySelector(".hlc-meta");
    return {
      visibleRowCount: rows.length,
      selectedVisible: rows.filter((r) => r.selected).map((r) => r.name),
      selectedVisibleIds: rows.filter((r) => r.selected).map((r) => r.id),
      firstRows: rows.slice(0, 8),
      applyDisabled: applyBtn ? applyBtn.disabled : null,
      applyLabel: applyBtn ? applyBtn.textContent.trim() : null,
      applyAria: applyBtn ? applyBtn.getAttribute("aria-label") : null,
      applyCountText: applyCount ? applyCount.textContent.trim() : null,
      applyCountHidden: applyCount ? applyCount.hidden : null,
      draftSelectedIds: draft && Array.isArray(draft.selectedIds) ? draft.selectedIds : [],
      draftFilters: draft && draft.filters ? draft.filters : null,
      metaText: meta ? meta.textContent.trim() : "",
      showMore: (() => {
        const btn = document.getElementById("hlc-show-more");
        if (!btn) return null;
        const wrap = btn.closest(".hlc-show-more-wrap");
        return {
          exists: true,
          hidden: wrap ? wrap.hidden || getComputedStyle(wrap).display === "none" : btn.hidden,
          label: btn.textContent.trim(),
        };
      })(),
    };
  });
}

async function clickFirstMatchingBank(page, nameIncludes) {
  const rows = page.locator("tr.hlc-selectable-row");
  const count = await rows.count();
  for (let i = 0; i < count; i++) {
    const text = (await rows.nth(i).innerText()).toLowerCase();
    if (nameIncludes.some((n) => text.includes(n.toLowerCase()))) {
      const check = rows.nth(i).locator(".hlc-row-check, button.hlc-row-check, [data-row-check]").first();
      if (await check.count()) await check.click({ force: true });
      else await rows.nth(i).click({ force: true });
      await page.waitForTimeout(200);
      return (await rows.nth(i).innerText()).split("\n")[0].trim();
    }
  }
  // fallback: first row
  if (count > 0) {
    const check = rows.nth(0).locator(".hlc-row-check, button.hlc-row-check, [data-row-check]").first();
    if (await check.count()) await check.click({ force: true });
    else await rows.nth(0).click({ force: true });
    await page.waitForTimeout(200);
    return (await rows.nth(0).innerText()).split("\n")[0].trim();
  }
  return null;
}

async function selectNthVisible(page, index) {
  const name = await page.evaluate((index) => {
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
  await page.waitForTimeout(300);
  return name;
}

async function ensureCompareReady(page) {
  await page.goto(`${BASE}/pages/explore-banks.html`, { waitUntil: "domcontentloaded" });
  await page.evaluate(() => {
    try {
      sessionStorage.clear();
      localStorage.removeItem("shroffin-color-preference");
    } catch (e) {}
  });
  await page.reload({ waitUntil: "domcontentloaded" });

  // Sample defaults usually auto-fill; click Compare if results shell hidden
  const see = page.locator("#hlc-see-options");
  if (await see.count()) {
    await see.click({ force: true }).catch(() => {});
  }
  await waitForBanks(page, { min: 1, timeout: 60000 });
  // settle match
  await page.waitForTimeout(900);
}

/** Fill Explore input card with known values, then Compare. */
async function fillInputsAndCompare(page, values = {}) {
  // Keep occupation/purpose on high-match defaults so banks always appear;
  // distinctive money/age/CIBIL/tenure prove the input→packet handoff.
  const v = {
    monthlyIncome: "2,50,000",
    propertyValue: "80,00,000",
    existingEmis: "5,000",
    cardLimits: "20,000",
    tenureYears: "15",
    age: "42",
    cibilScore: "810",
    occupation: "Salaried",
    purpose: "Regular Home Loan",
    ...values,
  };
  await page.goto(`${BASE}/pages/explore-banks.html`, { waitUntil: "domcontentloaded" });
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
  await waitForBanks(page, { min: 1, timeout: 60000 });
  await page.waitForTimeout(900);
  return v;
}

async function readApplyPacket(page) {
  return page.evaluate(() => {
    try {
      return JSON.parse(sessionStorage.getItem("shroffin_hl_apply_v1") || "null");
    } catch (e) {
      return { error: String(e) };
    }
  });
}

async function clickApplyOnce(page) {
  await page.evaluate(() => {
    const btn = document.getElementById("hlc-apply-btn");
    if (!btn) throw new Error("hlc-apply-btn missing");
    if (btn.disabled) throw new Error("hlc-apply-btn disabled");
    btn.scrollIntoView({ block: "center", inline: "nearest" });
    btn.click();
  });
  await page.waitForURL(/apply\.html/, { timeout: 15000 });
}

async function goApplyWithFirstBank(page) {
  await selectNthVisible(page, 0);
  await page.waitForTimeout(400);
  const enabled = await page.evaluate(() => {
    const btn = document.getElementById("hlc-apply-btn");
    return btn && !btn.disabled;
  });
  if (!enabled) {
    // Retry select if Apply stayed locked
    await selectNthVisible(page, 0);
    await page.waitForTimeout(400);
  }
  await clickApplyOnce(page);
  return readApplyPacket(page);
}

/**
 * Patch Firebase Auth + Firestore on the contact page so Verify → Submit can
 * complete without a real Google account. Captures the exact write payload.
 * Honest label in report: mocked auth/write, real UI + real home-loan-apply.js.
 */
async function installFirebaseMock(page, { email, uid }) {
  return page.evaluate(
    ({ email, uid }) => {
      if (typeof firebase === "undefined") {
        return { ok: false, reason: "firebase undefined" };
      }
      window.__HL_QA_FIRESTORE_WRITES__ = [];
      window.__HL_QA_AUTH_CALLS__ = [];

      const mockUser = {
        uid: String(uid),
        email: String(email),
        getIdToken: function () {
          return Promise.resolve("qa-fake-id-token");
        },
      };
      let currentUser = null;
      const authListeners = [];

      // Singleton — home-loan-apply calls firebase.auth() many times.
      const authSingleton = {
        get currentUser() {
          return currentUser;
        },
        signInWithPopup: function () {
          window.__HL_QA_AUTH_CALLS__.push({ type: "signInWithPopup" });
          currentUser = mockUser;
          authListeners.forEach(function (cb) {
            try {
              cb(currentUser);
            } catch (e) {}
          });
          return Promise.resolve({ user: mockUser });
        },
        signOut: function () {
          window.__HL_QA_AUTH_CALLS__.push({ type: "signOut" });
          currentUser = null;
          authListeners.forEach(function (cb) {
            try {
              cb(null);
            } catch (e) {}
          });
          return Promise.resolve();
        },
        onAuthStateChanged: function (cb) {
          authListeners.push(cb);
          try {
            cb(currentUser);
          } catch (e) {}
          return function () {};
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
          set: function (payload) {
            window.__HL_QA_FIRESTORE_WRITES__.push({
              collection: collectionName,
              id: String(docId),
              payload: JSON.parse(JSON.stringify(payload)),
            });
            return Promise.resolve();
          },
        };
      }

      function makeCollection(collectionName) {
        return {
          doc: function (docId) {
            return makeDoc(collectionName, docId);
          },
        };
      }

      const firestoreFn = function () {
        return {
          collection: makeCollection,
          runTransaction: function (fn) {
            const transaction = {
              get: function () {
                return Promise.resolve({
                  exists: true,
                  data: function () {
                    return { lastId: 100042 };
                  },
                });
              },
              set: function () {},
            };
            return Promise.resolve(fn(transaction));
          },
        };
      };
      firestoreFn.FieldValue = {
        serverTimestamp: function () {
          return { __qa_serverTimestamp: true };
        },
      };
      firebase.firestore = firestoreFn;

      return { ok: true, email, uid };
    },
    { email, uid }
  );
}

async function contactFormState(page) {
  return page.evaluate(() => {
    const name = document.getElementById("hl-name");
    const phone = document.getElementById("hl-phone");
    const email = document.getElementById("hl-email");
    const consent = document.getElementById("hl-consent");
    const verify = document.getElementById("hl-verify-email");
    const submit = document.getElementById("hl-submit-application");
    const status = document.getElementById("hl-verify-status");
    const success = document.getElementById("hl-apply-success");
    const toast = document.getElementById("hl-apply-toast");
    return {
      name: name ? name.value : null,
      phone: phone ? phone.value : null,
      email: email ? email.value : null,
      consent: consent ? consent.checked : null,
      verifyDisabled: verify ? verify.disabled : null,
      verifyText: verify ? verify.textContent.trim() : null,
      submitDisabled: submit ? submit.disabled : null,
      submitText: submit ? submit.textContent.trim() : null,
      verifyStatusHidden: status ? status.hidden : null,
      verifyStatusText: status ? status.textContent.trim() : null,
      successHidden: success ? success.hidden : null,
      successText: success ? success.innerText.replace(/\s+/g, " ").trim() : "",
      toastHidden: toast ? toast.hidden : null,
      toastText: toast ? toast.textContent.trim() : "",
      writes: window.__HL_QA_FIRESTORE_WRITES__ || [],
      authCalls: window.__HL_QA_AUTH_CALLS__ || [],
      packet: (() => {
        try {
          return JSON.parse(sessionStorage.getItem("shroffin_hl_apply_v1") || "null");
        } catch (e) {
          return null;
        }
      })(),
      contactDraft: (() => {
        try {
          return JSON.parse(
            sessionStorage.getItem("shroffin_hl_apply_contact_v1") || "null"
          );
        } catch (e) {
          return null;
        }
      })(),
    };
  });
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
  });
  const page = await context.newPage();
  page.setDefaultTimeout(20000);

  const runStarted = new Date().toISOString();

  async function section(name, fn) {
    try {
      await fn();
    } catch (err) {
      add({
        id: `CRASH-${name}`,
        severity: "P0",
        status: "FAIL",
        title: `Section crashed: ${name}`,
        flowStep: name,
        expected: "Section completes",
        actual: String(err && err.stack ? err.stack : err).slice(0, 1200),
        userImpact: "Partial audit for this area.",
      });
    }
  }

  try {
    await section("setup-filters", async () => {
      await ensureCompareReady(page);
      const state0 = await readExploreState(page);
      add({
        id: "SETUP-01",
        severity: "INFO",
        status: state0.visibleRowCount > 0 ? "PASS" : "FAIL",
        title: "Explore loads matched banks",
        flowStep: "Explore / match",
        expected: "At least one bank row after Compare",
        actual: `${state0.visibleRowCount} visible rows; meta="${state0.metaText}"`,
        userImpact: "Without matches the rest of Apply cannot be tested.",
        evidence: state0,
      });

      await setFilter(page, "bankPrivate", false);
      await setFilter(page, "bankPublic", true);
      const publicOnly = await readExploreState(page);
      const publicNames = publicOnly.firstRows.map((r) => r.name);

      await setFilter(page, "bankPublic", false);
      await setFilter(page, "bankPrivate", true);
      const privateOnly = await readExploreState(page);
      const privateNames = privateOnly.firstRows.map((r) => r.name);

      add({
        id: "FILTER-01",
        severity: "INFO",
        status:
          publicOnly.visibleRowCount > 0 && privateOnly.visibleRowCount > 0
            ? "PASS"
            : "FAIL",
        title: "Public / Private filters change the list",
        flowStep: "Explore / filters",
        expected: "Both Public-only and Private-only lists have banks",
        actual: `Public-only=${publicOnly.visibleRowCount}; Private-only=${privateOnly.visibleRowCount}`,
        evidence: {
          publicNames: publicNames.slice(0, 5),
          privateNames: privateNames.slice(0, 5),
        },
        userImpact: "Baseline for selection durability tests.",
      });
    });

    let publicPick = null;
    let privatePick = null;
    let afterBothSelect = null;
    let packetBankNames = [];
    let onApply = false;
    let packet = null;
    let applyAriaCount = null;

    await section("selection-filter-apply", async () => {
      await ensureCompareReady(page);
      await setFilter(page, "bankPublic", true);
      await setFilter(page, "bankPrivate", true);

      publicPick =
        (await clickFirstMatchingBank(page, [
          "state bank",
          "bank of baroda",
          "bank of india",
          "punjab national",
          "canara",
          "union bank",
          "indian bank",
          "bank of maharashtra",
        ])) || (await selectNthVisible(page, 0));

      const afterPublicSelect = await readExploreState(page);
      const selectedIdsAfterPublic = afterPublicSelect.draftSelectedIds.slice();

      await setFilter(page, "bankPublic", false);
      await setFilter(page, "bankPrivate", true);
      const afterPrivateFilter = await readExploreState(page);

      const publicStillVisible = afterPrivateFilter.selectedVisible.some(
        (n) =>
          (publicPick || "").toLowerCase().includes(n.toLowerCase().slice(0, 12)) ||
          n.toLowerCase().includes((publicPick || "").toLowerCase().slice(0, 12))
      );
      const selectedPinnedTop =
        afterPrivateFilter.firstRows[0] &&
        afterPrivateFilter.firstRows[0].selected === true &&
        publicStillVisible;

      add({
        id: "SEL-01",
        severity: "P0",
        status: publicStillVisible ? "PASS" : "FAIL",
        title: "Selected bank stays visible after opposite bank-type filter",
        flowStep: "Explore / selection + filter",
        expected: `Selected "${publicPick}" remains visible (pinned) when filter is Private-only`,
        actual: publicStillVisible
          ? `Still visible among selected: ${afterPrivateFilter.selectedVisible.join(", ")}`
          : `Not visible. Visible selected=[${afterPrivateFilter.selectedVisible.join("; ")}]; draftIds=${JSON.stringify(afterPrivateFilter.draftSelectedIds)}; apply="${afterPrivateFilter.applyAria || afterPrivateFilter.applyLabel}"`,
        evidence: { publicPick, selectedIdsAfterPublic, afterPrivateFilter },
        userImpact:
          "User thinks they still have that bank selected for compare/apply, but it disappears from the list.",
      });

      add({
        id: "SEL-02",
        severity: "P0",
        status: selectedPinnedTop ? "PASS" : "FAIL",
        title: "Selected out-of-filter banks are pinned to the top",
        flowStep: "Explore / selection + filter",
        expected:
          "Selected banks that fail the current filter still appear at top for compare",
        actual: selectedPinnedTop
          ? "Selected bank is at top"
          : `Top row selected=${afterPrivateFilter.firstRows[0] && afterPrivateFilter.firstRows[0].selected}; publicStillVisible=${publicStillVisible}`,
        evidence: afterPrivateFilter.firstRows,
        userImpact: "Cannot compare earlier pick vs new private banks side by side.",
      });

      privatePick = await selectNthVisible(page, 0);
      afterBothSelect = await readExploreState(page);
      applyAriaCount = (() => {
        const s = afterBothSelect.applyAria || "";
        const m = s.match(/(\d+)/);
        return m ? Number(m[1]) : null;
      })();

      await clickApplyOnce(page).catch(() => {});
      onApply = /apply\.html/.test(page.url());
      packet = await readApplyPacket(page);
      packetBankNames = (packet && packet.banks ? packet.banks : []).map(
        (b) => b.bankName || b.name || "?"
      );
      const packetHasPublic =
        publicPick &&
        packetBankNames.some(
          (n) =>
            n.toLowerCase().includes(publicPick.toLowerCase().slice(0, 10)) ||
            publicPick.toLowerCase().includes(n.toLowerCase().slice(0, 10))
        );

      add({
        id: "APPLY-01",
        severity: "P0",
        status:
          onApply && packet && packet.banks && packet.banks.length ? "PASS" : "FAIL",
        title: "Apply once navigates with a non-empty packet",
        flowStep: "Explore → Apply",
        expected: "Land on apply.html with banks in session packet",
        actual: onApply
          ? `URL ok; banks=${packetBankNames.length}; names=[${packetBankNames.join("; ")}]`
          : `URL=${page.url()}; packet=${packet ? "present" : "missing"}`,
        evidence: {
          applyAriaBeforeClick: afterBothSelect.applyAria,
          draftSelectedIds: afterBothSelect.draftSelectedIds,
          packetBankNames,
          selectedCountField:
            packet && packet.input_data && packet.input_data.selectedCount,
        },
        userImpact: "Broken handoff means Apply cannot start.",
      });

      add({
        id: "APPLY-02",
        severity: "P0",
        status: packetHasPublic ? "PASS" : "FAIL",
        title:
          "Apply packet includes earlier public selection after Private filter",
        flowStep: "Explore → Apply packet",
        expected: `Packet includes "${publicPick}" plus later private pick`,
        actual: packetHasPublic
          ? `Includes public. Banks: ${packetBankNames.join("; ")}`
          : `Missing public. Banks: ${packetBankNames.join("; ") || "(none)"}; selectedCount=${packet && packet.input_data && packet.input_data.selectedCount}`,
        evidence: {
          publicPick,
          privatePick,
          applyAriaCount,
          draftIds: afterBothSelect.draftSelectedIds,
          packetBankNames,
          selectedCount:
            packet && packet.input_data && packet.input_data.selectedCount,
          banksLength: packetBankNames.length,
        },
        userImpact:
          "Customer applies only to the last filtered set; earlier choice is silently dropped before Firebase.",
      });

      const countLie =
        typeof applyAriaCount === "number" &&
        packetBankNames.length > 0 &&
        applyAriaCount !== packetBankNames.length;
      const draftVsPacket =
        afterBothSelect.draftSelectedIds.length !== packetBankNames.length;

      add({
        id: "APPLY-03",
        severity: "P0",
        status: countLie || draftVsPacket ? "FAIL" : "PASS",
        title: "Apply button count matches banks that actually apply",
        flowStep: "Explore Apply bar → packet",
        expected: "Button N === packet.banks.length === meaningful selected set",
        actual: `ariaCount=${applyAriaCount}; draftIds=${afterBothSelect.draftSelectedIds.length}; packetBanks=${packetBankNames.length}`,
        evidence: {
          applyAria: afterBothSelect.applyAria,
          draftSelectedIds: afterBothSelect.draftSelectedIds,
          packetBankNames,
        },
        userImpact:
          "User trusts “Apply to N banks” but fewer banks go to Apply/Firebase.",
      });
    });

    await section("apply-review", async () => {
      if (!onApply) {
        await ensureCompareReady(page);
        packet = await goApplyWithFirstBank(page);
        onApply = true;
        packetBankNames = (packet && packet.banks ? packet.banks : []).map(
          (b) => b.bankName || "?"
        );
      }
      await page.waitForSelector("#hl-apply-banks", { timeout: 10000 });
      const applyUi = await page.evaluate(() => {
        const banks = Array.from(
          document.querySelectorAll("#hl-apply-banks .hl-apply-bank-name")
        ).map((el) => el.textContent.trim());
        const n = document.getElementById("hl-apply-n");
        const primary = document.getElementById("hl-apply-primary-details");
        const details = document.getElementById("hl-apply-your-details");
        const filters = document.getElementById("hl-apply-filters");
        const textOf = (el) => (el ? el.innerText : "");
        return {
          bankNames: banks,
          nText: n ? n.textContent.trim() : null,
          primaryText: textOf(primary),
          detailsText: textOf(details),
          filtersText: textOf(filters),
          filtersHidden: filters ? filters.hidden : null,
        };
      });

      add({
        id: "REVIEW-01",
        severity: "P1",
        status:
          applyUi.bankNames.length === packetBankNames.length ? "PASS" : "FAIL",
        title: "Apply review lists same banks as packet",
        flowStep: "Apply review",
        expected: "UI bank list matches packet",
        actual: `UI=[${applyUi.bankNames.join("; ")}] packet=[${packetBankNames.join("; ")}]`,
        evidence: applyUi,
        userImpact: "Mismatch confuses confirmation before contact/submit.",
      });

      const showsBankType =
        /public|private/i.test(applyUi.filtersText) ||
        /public|private/i.test(applyUi.primaryText);
      add({
        id: "REVIEW-02",
        severity: "P1",
        status: showsBankType ? "PASS" : "FAIL",
        title: "Apply review shows Public/Private filter context",
        flowStep: "Apply review",
        expected: "User can see bank-type filter state used for the shortlist",
        actual: showsBankType
          ? "Bank type mentioned"
          : `filters="${applyUi.filtersText.slice(0, 200)}"; primary has no Public/Private`,
        evidence: {
          filtersText: applyUi.filtersText,
          primaryText: applyUi.primaryText.slice(0, 400),
        },
        userImpact:
          "User cannot confirm which bank-type scope they applied under.",
      });

      const detailProbe = await page.evaluate(() => {
        const firstToggle = document.querySelector(".hl-apply-disclose");
        if (firstToggle) firstToggle.click();
        const panel = document.querySelector(
          ".hl-apply-bank-details.is-open, .hl-apply-disclose-panel.is-open"
        );
        return panel ? panel.innerText : "";
      });
      const hasScheme = /scheme/i.test(detailProbe);
      const hasRateType = /floating|fixed/i.test(detailProbe);
      const hasFacility = /term loan|overdraft/i.test(detailProbe);
      add({
        id: "REVIEW-03",
        severity: "P1",
        status: hasScheme || hasRateType || hasFacility ? "PASS" : "FAIL",
        title: "Apply bank details include scheme / rate type / facility",
        flowStep: "Apply review / bank details",
        expected:
          "Details show what was compared (scheme, floating/fixed, facility)",
        actual: detailProbe
          ? `Opened details: ${detailProbe.replace(/\s+/g, " ").slice(0, 220)}`
          : "No details panel text",
        evidence: { detailProbe: detailProbe.slice(0, 500) },
        userImpact:
          "Weak confirmation of which offer was selected for each bank.",
      });
    });

    await section("co-applicant-firebase-shape", async () => {
      await ensureCompareReady(page);
      const coToggle = page.locator("#hlc-co-toggle");
      if (!(await coToggle.count())) {
        add({
          id: "REVIEW-04",
          severity: "P1",
          status: "BLOCKED",
          title: "Apply review shows co-applicant income from Explore",
          flowStep: "Explore co-applicant → Apply review",
          expected: "Co-applicant income shown",
          actual: "Co-applicant toggle #hlc-co-toggle not found",
          userImpact: "Could not run this probe.",
        });
        return;
      }
      await coToggle.click({ force: true });
      await page.waitForTimeout(500);
      await page.evaluate(() => {
        const card = document.querySelector(".hlc-coapplicant-card");
        if (!card) return;
        card.querySelectorAll("input").forEach((inp) => {
          const id = (inp.id || inp.name || inp.getAttribute("data-co-field") || "").toLowerCase();
          let val = null;
          if (id.includes("income") || id === "monthlyincome") val = "50000";
          else if (id.includes("emi")) val = "2000";
          else if (id.includes("card")) val = "10000";
          else if (id.includes("age")) val = "34";
          else if (id.includes("cibil")) val = "760";
          if (val != null) {
            inp.value = val;
            inp.dispatchEvent(new Event("input", { bubbles: true }));
            inp.dispatchEvent(new Event("change", { bubbles: true }));
          }
        });
      });
      await page.waitForTimeout(1100);
      await waitForBanks(page, { min: 1 }).catch(() => {});
      await goApplyWithFirstBank(page);

      const coUi = await page.evaluate(() => {
        const details = document.getElementById("hl-apply-your-details");
        const text = details ? details.innerText : "";
        const pkt = JSON.parse(sessionStorage.getItem("shroffin_hl_apply_v1") || "null");
        const form = pkt && pkt.input_data && pkt.input_data.form;
        return {
          detailsText: text,
          formCoApplicants: form && form.coApplicants,
          formLegacyIncome: form && form.coMonthlyIncome,
          includeCo: form && form.includeCoApplicant,
        };
      });
      const incomeLine =
        (coUi.detailsText.match(/Co-applicant income\s*\n?\s*([^\n]+)/i) ||
          [])[1] || "";
      const incomeBlank =
        !incomeLine ||
        incomeLine.trim() === "—" ||
        incomeLine.trim() === "-";
      const hasArrayData =
        Array.isArray(coUi.formCoApplicants) && coUi.formCoApplicants.length > 0;

      add({
        id: "REVIEW-04",
        severity: "P1",
        status:
          hasArrayData && !incomeBlank
            ? "PASS"
            : hasArrayData && incomeBlank
              ? "FAIL"
              : "BLOCKED",
        title: "Apply review shows co-applicant income from Explore",
        flowStep: "Explore co-applicant → Apply review",
        expected: "Co-applicant income/EMIs shown from coApplicants[]",
        actual: hasArrayData
          ? `Packet has coApplicants[${coUi.formCoApplicants.length}]; UI income line="${incomeLine.trim()}"`
          : `No coApplicants in packet; includeCo=${coUi.includeCo}`,
        evidence: coUi,
        userImpact:
          "User cannot verify co-applicant numbers before submit; ops may still have array in form.",
      });

      const fbShape = await page.evaluate(() => {
        const pkt = JSON.parse(sessionStorage.getItem("shroffin_hl_apply_v1") || "null");
        if (!pkt) return null;
        const banks = (pkt.banks || []).map((row, index) => {
          const offer = row.offer && typeof row.offer === "object" ? row.offer : {};
          return {
            id: row.id != null ? String(row.id) : "idx-" + index,
            bankName: String(row.bankName || offer.bank_name || "Bank"),
            strippedPresent: {
              bankKey: row.bankKey != null,
              rateType: row.rateType != null,
              facilityLabel: row.facilityLabel != null,
              scheme: row.scheme != null,
              processingFee: row.processingFee != null,
              offer: !!row.offer,
            },
          };
        });
        return { banks };
      });
      if (fbShape) {
        const anyStripped =
          fbShape.banks.length > 0 &&
          Object.values(fbShape.banks[0].strippedPresent).some(Boolean);
        add({
          id: "FB-01",
          severity: "P1",
          status: anyStripped ? "FAIL" : "INFO",
          title:
            "Firestore bank payload strips comparison fields present in packet",
          flowStep: "Apply packet → Firebase shape",
          expected:
            "Ops receive scheme/rate type/facility/bank key needed to work the file",
          actual: fbShape.banks[0]
            ? `Saved fields: id,bankName,rate,loan,tenure,emi. Stripped-but-available: ${JSON.stringify(fbShape.banks[0].strippedPresent)}`
            : "No banks",
          evidence: fbShape,
          userImpact:
            "Ops get a thin shortlist; cannot see which scheme/rate/facility the customer compared.",
        });
      }
    });

    await section("rematch-selection", async () => {
      await ensureCompareReady(page);
      await selectNthVisible(page, 0);
      const beforeIncome = await readExploreState(page);
      const beforeIds = beforeIncome.draftSelectedIds.slice();
      const incomeInput = page
        .locator("#hlc-monthly-income, input[name='monthlyIncome']")
        .first();
      if (!(await incomeInput.count())) {
        add({
          id: "SEL-03",
          severity: "P0",
          status: "BLOCKED",
          title: "Selection survives input rematch (same bank intent)",
          flowStep: "Explore / change income after select",
          expected: "Income field found",
          actual: "monthly income input missing",
          userImpact: "Could not run rematch probe.",
        });
        return;
      }
      await incomeInput.fill("150000");
      await incomeInput.dispatchEvent("input");
      await incomeInput.dispatchEvent("change");
      await page.waitForTimeout(1400);
      await waitForBanks(page, { min: 1 }).catch(() => {});
      const afterIncome = await readExploreState(page);
      const stillSelectedVisible = afterIncome.selectedVisible.length > 0;
      const ghost =
        afterIncome.draftSelectedIds.length > 0 &&
        afterIncome.selectedVisible.length === 0;
      add({
        id: "SEL-03",
        severity: "P0",
        status:
          stillSelectedVisible && !ghost
            ? "PASS"
            : ghost || !stillSelectedVisible
              ? "FAIL"
              : "INFO",
        title: "Selection survives input rematch (same bank intent)",
        flowStep: "Explore / change income after select",
        expected:
          "Changing income keeps the bank selected (or remaps to new offer for same bank)",
        actual: `beforeIds=${JSON.stringify(beforeIds)}; afterIds=${JSON.stringify(afterIncome.draftSelectedIds)}; visibleSelected=${JSON.stringify(afterIncome.selectedVisible)}; apply="${afterIncome.applyAria || afterIncome.applyLabel}"`,
        evidence: { beforeIncome, afterIncome, ghost },
        userImpact:
          "Tweaking income/CIBIL can silently uncheck banks or leave ghost counts that don’t apply.",
      });
    });

    await section("show-more-select-all", async () => {
      await ensureCompareReady(page);
      const beforeExpand = await readExploreState(page);
      const showMoreVisible = await page.evaluate(() => {
        const btn = document.getElementById("hlc-show-more");
        const wrap = btn && btn.closest(".hlc-show-more-wrap");
        if (!btn || !wrap) return false;
        return !(wrap.hidden || getComputedStyle(wrap).display === "none");
      });
      if (!showMoreVisible) {
        add({
          id: "SEL-04",
          severity: "P2",
          status: "BLOCKED",
          title: "Select-all after Show more selects the full expanded list",
          flowStep: "Explore / show more + select all",
          expected: "Show more available when >10 banks",
          actual: `Show more not visible; visible=${beforeExpand.visibleRowCount}`,
          userImpact: "Could not prove select-all pagination behavior.",
        });
        return;
      }
      await page.evaluate(() => {
        const btn = document.getElementById("hlc-show-more");
        if (btn) btn.click();
      });
      await page.waitForTimeout(1200);
      const afterExpand = await readExploreState(page);
      await page.evaluate(() => {
        const head = document.querySelector(".hlc-bank-head .hlc-row-check, .hlc-bank-head button, #hlc-th-bank .hlc-row-check");
        if (head) head.click();
        else {
          const th = document.querySelector("#hlc-th-bank .hlc-bank-head");
          if (th) th.click();
        }
      });
      await page.waitForTimeout(500);
      const afterSelectAll = await readExploreState(page);
      add({
        id: "SEL-04",
        severity: "P2",
        status:
          afterSelectAll.draftSelectedIds.length >= afterExpand.visibleRowCount &&
          afterExpand.visibleRowCount > beforeExpand.visibleRowCount
            ? "PASS"
            : "FAIL",
        title: "Select-all after Show more selects the full expanded list",
        flowStep: "Explore / show more + select all",
        expected: "Select-all selects all currently listed banks after expand",
        actual: `beforeVisible=${beforeExpand.visibleRowCount}; afterExpand=${afterExpand.visibleRowCount}; selectedIds=${afterSelectAll.draftSelectedIds.length}; visibleSelected=${afterSelectAll.selectedVisible.length}`,
        evidence: { beforeExpand, afterExpand, afterSelectAll },
        userImpact:
          "User believes they selected all options; only a subset may be selected.",
      });

      await setFilter(page, "womenApplicant", true);
      const afterRematch = await readExploreState(page);
      add({
        id: "SEL-05",
        severity: "P2",
        status:
          afterRematch.visibleRowCount < afterExpand.visibleRowCount
            ? "FAIL"
            : "PASS",
        title: "Show-more expansion resets on filter rematch",
        flowStep: "Explore / show more + filter",
        expected: "Expand state preserved or user warned when list collapses",
        actual: `expandedWas=${afterExpand.visibleRowCount}; afterFilterVisible=${afterRematch.visibleRowCount}; showMore=${JSON.stringify(afterRematch.showMore)}`,
        evidence: afterRematch,
        userImpact:
          "List jumps back to first page; easy to lose place and mis-select.",
      });
      await setFilter(page, "womenApplicant", false);
    });

    await section("empty-apply", async () => {
      await page.goto(`${BASE}/pages/explore-banks.html`, {
        waitUntil: "domcontentloaded",
      });
      await page.evaluate(() => {
        sessionStorage.removeItem("shroffin_hl_apply_v1");
      });
      await page.goto(`${BASE}/pages/apply.html`, {
        waitUntil: "networkidle",
        timeout: 20000,
      }).catch(() => {});
      await page.waitForTimeout(1500);
      const bounced = {
        url: page.url(),
        bodyText: await page.locator("body").innerText().catch(() => ""),
      };
      bounced.bodyText = String(bounced.bodyText).slice(0, 400);
      add({
        id: "APPLY-04",
        severity: "P2",
        status: /explore-banks|no banks|select/i.test(
          bounced.url + bounced.bodyText
        )
          ? "PASS"
          : "INFO",
        title: "Apply with empty/missing packet recovers safely",
        flowStep: "Apply direct URL",
        expected: "Redirect or clear message back to Explore",
        actual: `url=${bounced.url}; snippet=${JSON.stringify(bounced.bodyText.slice(0, 180))}`,
        evidence: bounced,
        userImpact:
          "Stale/empty Apply tab should not look like a successful application.",
      });
    });

    await section("rate-review", async () => {
      await ensureCompareReady(page);
      await setFilter(page, "fixedRate", true);
      await setFilter(page, "rateFloating", true);
      await goApplyWithFirstBank(page);
      const rateUi = await page.evaluate(() => {
        const primary = document.getElementById("hl-apply-primary-details");
        const text = primary ? primary.innerText : "";
        const pkt = JSON.parse(sessionStorage.getItem("shroffin_hl_apply_v1") || "null");
        return {
          text,
          filters: pkt && pkt.input_data && pkt.input_data.filters,
          queryRate: pkt && pkt.input_data && pkt.input_data.query && pkt.input_data.query.rateType,
        };
      });
      const bothOn =
        rateUi.filters &&
        rateUi.filters.rateFloating &&
        rateUi.filters.fixedRate;
      const showsBoth = /floating\s*(&|and|,|\/)\s*fixed|both/i.test(rateUi.text);
      const showsSingle = /rate type\s*\n?\s*(floating|fixed)/i.test(rateUi.text);
      add({
        id: "REVIEW-05",
        severity: "P1",
        status: bothOn && showsBoth ? "PASS" : bothOn && showsSingle ? "FAIL" : "INFO",
        title: "Apply review reflects multi rate-type filter honestly",
        flowStep: "Explore filters → Apply review",
        expected:
          "When Floating and Fixed both checked, review does not imply only one",
        actual: `bothOn=${bothOn}; query.rateType=${rateUi.queryRate}; primary snippet=${JSON.stringify((rateUi.text.match(/Rate type[\s\S]{0,40}/i) || [rateUi.text.slice(0, 120)])[0])}`,
        evidence: rateUi,
        userImpact:
          "Review can misstate the rate-type scope the customer compared under.",
      });
    });

    // Additional product filters same class as bank type
    await section("other-filter-orphans", async () => {
      await ensureCompareReady(page);
      await setFilter(page, "bankPublic", true);
      await setFilter(page, "bankPrivate", true);
      await setFilter(page, "fixedRate", false);
      await setFilter(page, "rateFloating", true);
      const pick = await selectNthVisible(page, 0);
      const before = await readExploreState(page);
      await setFilter(page, "rateFloating", false);
      await setFilter(page, "fixedRate", true);
      const after = await readExploreState(page);
      const stillVisible = after.selectedVisible.length > 0;
      add({
        id: "SEL-06",
        severity: "P0",
        status: stillVisible ? "PASS" : "FAIL",
        title: "Selected bank survives Floating → Fixed-only filter flip",
        flowStep: "Explore / rate filter + selection",
        expected: `Selected "${pick}" remains visible when switching to Fixed-only`,
        actual: `beforeSelected=${JSON.stringify(before.selectedVisible)}; afterSelected=${JSON.stringify(after.selectedVisible)}; draftIds=${JSON.stringify(after.draftSelectedIds)}; apply="${after.applyAria || after.applyLabel}"`,
        evidence: { pick, before, after },
        userImpact:
          "Same class of break as Public/Private: rate filter silently drops selection from view/apply set.",
      });
    });

    // ── Full funnel: inputs → Apply → contact → verify → write → success ──
    const QA_EMAIL = "qa.apply.test@shroffin.example";
    const QA_UID = "qa-uid-apply-flow-001";
    const QA_NAME = "QA Apply Tester";
    const QA_PHONE = "9876543210";
    let e2ePacket = null;
    let e2eInputValues = null;

    await section("input-card-to-packet", async () => {
      e2eInputValues = await fillInputsAndCompare(page);
      e2ePacket = await goApplyWithFirstBank(page);
      const q = e2ePacket && e2ePacket.input_data && e2ePacket.input_data.query;
      const form = e2ePacket && e2ePacket.input_data && e2ePacket.input_data.form;
      const incomeOk =
        q &&
        (Number(q.monthlyIncome) === 250000 ||
          String(q.monthlyIncome).replace(/\D/g, "") === "250000" ||
          (form &&
            String(form.monthlyIncome || "")
              .replace(/\D/g, "")
              .includes("250000")));
      const ageOk =
        q &&
        (Number(q.age) === 42 ||
          Number(form && form.age) === 42);
      const cibilOk =
        q &&
        (Number(q.cibilScore) === 810 ||
          Number(form && form.cibilScore) === 810);
      const tenureOk =
        q &&
        (Number(q.tenureYears) === 15 ||
          Number(form && form.tenureYears) === 15);
      const occOk =
        (q && /salaried/i.test(String(q.occupation || ""))) ||
        (form && /salaried/i.test(String(form.occupation || "")));
      const purposeOk =
        (q && /regular|home loan|new/i.test(String(q.purpose || ""))) ||
        (form && /regular|home loan|new/i.test(String(form.purpose || "")));

      add({
        id: "INPUT-01",
        severity: "P0",
        status:
          e2ePacket && e2ePacket.banks && e2ePacket.banks.length ? "PASS" : "FAIL",
        title: "Filled input card Compare yields Apply packet with banks",
        flowStep: "Inputs → Compare → select → Apply",
        expected: "Custom inputs produce matches and a non-empty apply packet",
        actual: e2ePacket
          ? `banks=${(e2ePacket.banks || []).length}; data_version=${e2ePacket.data_version || "(none)"}`
          : "No packet",
        evidence: {
          inputValues: e2eInputValues,
          bankNames: (e2ePacket && e2ePacket.banks || []).map((b) => b.bankName),
          query: q,
          formKeys: form ? Object.keys(form) : [],
        },
        userImpact: "Without this handoff the rest of Apply cannot run.",
      });

      add({
        id: "INPUT-02",
        severity: "P0",
        status: incomeOk && ageOk && cibilOk && tenureOk ? "PASS" : "FAIL",
        title: "Typed income / age / CIBIL / tenure survive into Apply packet",
        flowStep: "Inputs → Apply packet",
        expected: "Packet query/form carries 250000 / 42 / 810 / 15",
        actual: `incomeOk=${incomeOk}; ageOk=${ageOk}; cibilOk=${cibilOk}; tenureOk=${tenureOk}; query=${JSON.stringify(q)}`,
        evidence: { query: q, form },
        userImpact:
          "Ops and banks would act on wrong numbers if inputs are dropped or remapped.",
      });

      add({
        id: "INPUT-03",
        severity: "P1",
        status: occOk && purposeOk ? "PASS" : "FAIL",
        title: "Occupation and purpose survive into Apply packet",
        flowStep: "Inputs → Apply packet",
        expected: "Salaried + Regular Home Loan present in packet",
        actual: `occOk=${occOk}; purposeOk=${purposeOk}; occupation=${q && q.occupation}; purpose=${q && q.purpose}`,
        evidence: { query: q, form },
        userImpact: "Wrong occupation/purpose changes eligibility and follow-up.",
      });
    });

    await section("apply-continue-to-contact", async () => {
      if (!e2ePacket) {
        e2eInputValues = await fillInputsAndCompare(page);
        e2ePacket = await goApplyWithFirstBank(page);
      } else if (!/apply\.html/.test(page.url())) {
        await page.goto(`${BASE}/pages/apply.html`, { waitUntil: "domcontentloaded" });
        await page.evaluate((pkt) => {
          sessionStorage.setItem("shroffin_hl_apply_v1", JSON.stringify(pkt));
        }, e2ePacket);
        await page.reload({ waitUntil: "domcontentloaded" });
      }
      await page.waitForSelector("#hl-continue-application", { timeout: 10000 });
      const continueDisabled = await page.evaluate(() => {
        const btn = document.getElementById("hl-continue-application");
        return btn ? btn.disabled : true;
      });
      add({
        id: "CONTACT-01",
        severity: "P0",
        status: continueDisabled ? "FAIL" : "PASS",
        title: "Continue is enabled when packet has banks",
        flowStep: "Apply review → Continue",
        expected: "Continue button enabled with non-empty shortlist",
        actual: `disabled=${continueDisabled}`,
        userImpact: "User cannot reach contact/submit if Continue stays locked.",
      });

      await page.locator("#hl-continue-application").click({ force: true });
      await page.waitForURL(/apply-contact\.html/, { timeout: 15000 });
      const onContact = /apply-contact\.html/.test(page.url());
      const recap = await page.evaluate(() => {
        const el =
          document.getElementById("hl-apply-contact-recap") ||
          document.querySelector(".hl-apply-contact-recap, .hl-apply-recap");
        return el ? el.innerText.replace(/\s+/g, " ").trim().slice(0, 400) : "";
      });
      add({
        id: "CONTACT-02",
        severity: "P0",
        status: onContact ? "PASS" : "FAIL",
        title: "Continue opens contact page with packet intact",
        flowStep: "Apply review → Contact",
        expected: "Land on apply-contact.html; packet still present",
        actual: onContact
          ? `URL ok; packetBanks=${((await readApplyPacket(page)) || {}).banks?.length}; recap=${JSON.stringify(recap.slice(0, 120))}`
          : `URL=${page.url()}`,
        evidence: { recap, packet: await readApplyPacket(page) },
        userImpact: "Broken Continue means no way to submit the application.",
      });
    });

    await section("contact-validation-gates", async () => {
      // Ensure we are on contact with a packet
      if (!/apply-contact\.html/.test(page.url())) {
        if (!e2ePacket) {
          e2eInputValues = await fillInputsAndCompare(page);
          e2ePacket = await goApplyWithFirstBank(page);
        }
        await page.goto(`${BASE}/pages/apply-contact.html`, {
          waitUntil: "domcontentloaded",
        });
        await page.evaluate((pkt) => {
          sessionStorage.setItem("shroffin_hl_apply_v1", JSON.stringify(pkt));
        }, e2ePacket);
        await page.reload({ waitUntil: "domcontentloaded" });
      }
      await page.waitForSelector("#hl-submit-application", { timeout: 10000 });

      // Empty form: submit disabled; verify disabled
      const empty = await contactFormState(page);
      add({
        id: "CONTACT-03",
        severity: "P0",
        status:
          empty.submitDisabled === true && empty.verifyDisabled === true
            ? "PASS"
            : "FAIL",
        title: "Empty contact form blocks Verify and Submit",
        flowStep: "Contact validation",
        expected: "Verify and Submit disabled until fields are valid",
        actual: `verifyDisabled=${empty.verifyDisabled}; submitDisabled=${empty.submitDisabled}`,
        evidence: empty,
        userImpact: "Ungated submit would send incomplete applications.",
      });

      // Bad phone
      await page.fill("#hl-name", QA_NAME);
      await page.fill("#hl-phone", "12345");
      await page.fill("#hl-email", QA_EMAIL);
      await page.check("#hl-consent");
      await page.waitForTimeout(300);
      const badPhone = await contactFormState(page);
      add({
        id: "CONTACT-04",
        severity: "P1",
        status: badPhone.submitDisabled === true ? "PASS" : "FAIL",
        title: "Invalid phone keeps Submit gated",
        flowStep: "Contact validation / phone",
        expected: "Submit stays locked until a valid 10-digit Indian mobile (6–9 start)",
        actual: `phone="${badPhone.phone}"; verifyDisabled=${badPhone.verifyDisabled}; submitDisabled=${badPhone.submitDisabled}`,
        evidence: badPhone,
        userImpact: "Bad numbers break follow-up calls. (Verify is email-gated only.)",
      });

      // Valid fields but not verified → submit still disabled; verify enabled
      await page.fill("#hl-phone", QA_PHONE);
      await page.waitForTimeout(400);
      const readyUnverified = await contactFormState(page);
      add({
        id: "CONTACT-05",
        severity: "P0",
        status:
          readyUnverified.verifyDisabled === false &&
          readyUnverified.submitDisabled === true
            ? "PASS"
            : "FAIL",
        title: "Valid fields enable Verify but Submit stays locked until Google",
        flowStep: "Contact validation / verify gate",
        expected: "Verify enabled; Submit disabled until email verified",
        actual: `verifyDisabled=${readyUnverified.verifyDisabled}; submitDisabled=${readyUnverified.submitDisabled}; verifyText=${readyUnverified.verifyText}`,
        evidence: readyUnverified,
        userImpact:
          "Submit without Google would skip the real-person check the product requires.",
      });

      // Consent required on click-path: uncheck and try submit after mock later —
      // here prove draft persistence
      await page.fill("#hl-name", QA_NAME);
      await page.fill("#hl-phone", QA_PHONE);
      await page.fill("#hl-email", QA_EMAIL);
      await page.check("#hl-consent");
      await page.waitForTimeout(400);
      const draft = await page.evaluate(() => {
        try {
          return JSON.parse(
            sessionStorage.getItem("shroffin_hl_apply_contact_v1") || "null"
          );
        } catch (e) {
          return null;
        }
      });
      add({
        id: "CONTACT-06",
        severity: "P1",
        status:
          draft &&
          draft.name === QA_NAME &&
          String(draft.contact_email).toLowerCase() === QA_EMAIL &&
          String(draft.phone).includes("98765")
            ? "PASS"
            : "FAIL",
        title: "Contact draft persists name / phone / email while typing",
        flowStep: "Contact draft",
        expected: "session draft mirrors filled fields",
        actual: draft
          ? `name=${draft.name}; phone=${draft.phone}; email=${draft.contact_email}; consent=${draft.consent}`
          : "No contact draft",
        evidence: draft,
        userImpact: "Refresh/back can wipe contact work if draft fails.",
      });
    });

    await section("e2e-verify-submit-success", async () => {
      // Fresh contact page with packet + mock Firebase
      if (!e2ePacket) {
        e2eInputValues = await fillInputsAndCompare(page);
        e2ePacket = await goApplyWithFirstBank(page);
      }
      await page.goto(`${BASE}/pages/apply-contact.html`, {
        waitUntil: "domcontentloaded",
      });
      await page.evaluate((pkt) => {
        sessionStorage.setItem(
          "shroffin_hl_apply_v1",
          JSON.stringify({ ...pkt, ts: Date.now() })
        );
        sessionStorage.removeItem("shroffin_hl_apply_contact_v1");
      }, e2ePacket);
      await page.reload({ waitUntil: "domcontentloaded" });
      await page.waitForSelector("#hl-submit-application", { timeout: 15000 });
      // Wait for Firebase SDK scripts
      await page.waitForFunction(
        () => typeof firebase !== "undefined" && !!firebase.auth,
        null,
        { timeout: 20000 }
      );
      const mock = await installFirebaseMock(page, { email: QA_EMAIL, uid: QA_UID });
      add({
        id: "E2E-00",
        severity: "P0",
        status: mock && mock.ok ? "PASS" : "FAIL",
        title: "QA Firebase mock installed on contact page",
        flowStep: "Contact / test harness",
        expected: "Auth + Firestore mock ready (real Google blocked in headless)",
        actual: JSON.stringify(mock),
        userImpact:
          "Without mock, Verify/Submit success path cannot be proven in automation.",
      });

      await page.fill("#hl-name", QA_NAME);
      await page.fill("#hl-phone", QA_PHONE);
      await page.fill("#hl-email", QA_EMAIL);
      await page.check("#hl-consent");
      await page.waitForTimeout(400);

      // Email mismatch path: type different email after filling, verify should reject
      await page.fill("#hl-email", "other.person@example.com");
      await page.waitForTimeout(200);
      // Re-install mock with original QA_EMAIL so sign-in returns QA_EMAIL ≠ typed
      await installFirebaseMock(page, { email: QA_EMAIL, uid: QA_UID });
      await page.locator("#hl-verify-email").click({ force: true });
      await page.waitForTimeout(1200);
      const mismatch = await contactFormState(page);
      const mismatchCaught =
        mismatch.submitDisabled === true &&
        !/Application received/i.test(mismatch.successText) &&
        (mismatch.verifyDisabled === false ||
          /mismatch|same email|Verify/i.test(
            mismatch.toastText + mismatch.verifyText + mismatch.verifyStatusText
          ) ||
          mismatch.verifyText !== "Verified");

      add({
        id: "E2E-01",
        severity: "P0",
        status: mismatchCaught ? "PASS" : "FAIL",
        title: "Google email mismatch blocks verification / submit",
        flowStep: "Contact / Verify mismatch",
        expected: "Typed email must match Google account; Submit stays locked",
        actual: `verifyText=${mismatch.verifyText}; submitDisabled=${mismatch.submitDisabled}; toast=${JSON.stringify(mismatch.toastText)}; success=${JSON.stringify(mismatch.successText.slice(0, 80))}`,
        evidence: mismatch,
        userImpact:
          "Mismatch must fail closed so someone else’s Google cannot verify another email.",
      });

      // Happy path: matching email → verify → submit → Application received
      await page.fill("#hl-email", QA_EMAIL);
      await page.fill("#hl-name", QA_NAME);
      await page.fill("#hl-phone", QA_PHONE);
      await page.check("#hl-consent");
      await installFirebaseMock(page, { email: QA_EMAIL, uid: QA_UID });
      await page.waitForTimeout(300);
      await page.locator("#hl-verify-email").click({ force: true });
      await page.waitForTimeout(1200);
      const verified = await contactFormState(page);
      add({
        id: "E2E-02",
        severity: "P0",
        status:
          /verified/i.test(verified.verifyText) && verified.submitDisabled === false
            ? "PASS"
            : "FAIL",
        title: "Matching Google verify unlocks Submit",
        flowStep: "Contact / Verify success",
        expected: "Verify shows Verified; Submit enabled",
        actual: `verifyText=${verified.verifyText}; submitDisabled=${verified.submitDisabled}; statusHidden=${verified.verifyStatusHidden}`,
        evidence: verified,
        userImpact: "If Verify never unlocks Submit, applications cannot be sent.",
      });

      await page.locator("#hl-submit-application").click({ force: true });
      await page.waitForFunction(
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
      ).catch(() => {});
      await page.waitForTimeout(500);
      const afterSubmit = await contactFormState(page);
      const received = /Application received/i.test(afterSubmit.successText);
      const hasRef = /Reference ID/i.test(afterSubmit.successText);
      const write = (afterSubmit.writes || [])[0] || null;
      const payload = write && write.payload;

      add({
        id: "E2E-03",
        severity: "P0",
        status: received && hasRef ? "PASS" : "FAIL",
        title: "Submit shows Application received window with Reference ID",
        flowStep: "Contact / Submit → success UI",
        expected: "Success dialog: Application received + Reference ID",
        actual: received
          ? `UI="${afterSubmit.successText.slice(0, 220)}"`
          : `No success UI. successHidden=${afterSubmit.successHidden}; toast=${JSON.stringify(afterSubmit.toastText)}; writes=${(afterSubmit.writes || []).length}`,
        evidence: {
          successText: afterSubmit.successText,
          writeIds: (afterSubmit.writes || []).map((w) => w.id),
        },
        userImpact:
          "This is the customer’s confirmation that we received the application.",
      });

      add({
        id: "E2E-04",
        severity: "P0",
        status:
          write &&
          payload &&
          payload.status === "received" &&
          payload.product === "home_loan" &&
          Array.isArray(payload.banks) &&
          payload.banks.length > 0 &&
          payload.name === QA_NAME &&
          String(payload.phone).includes("98765") &&
          String(payload.contact_email).toLowerCase() === QA_EMAIL &&
          payload.google_uid === QA_UID
            ? "PASS"
            : "FAIL",
        title: "Firestore write receives contact + banks + status=received",
        flowStep: "Contact / Submit → data received",
        expected:
          "One applications write with name, phone, emails, uid, banks[], status received",
        actual: write
          ? `collection=${write.collection}; id=${write.id}; status=${payload && payload.status}; banks=${payload && payload.banks && payload.banks.length}; name=${payload && payload.name}; email=${payload && payload.email}`
          : "No Firestore write captured",
        evidence: {
          writeMeta: write
            ? { collection: write.collection, id: write.id }
            : null,
          payloadSummary: payload
            ? {
                status: payload.status,
                product: payload.product,
                name: payload.name,
                phone: payload.phone,
                contact_email: payload.contact_email,
                email: payload.email,
                google_uid: payload.google_uid,
                bankNames: (payload.banks || []).map((b) => b.bankName),
                bankFields: payload.banks && payload.banks[0]
                  ? Object.keys(payload.banks[0])
                  : [],
                inputQuery: payload.input_data && payload.input_data.query,
                data_version: payload.data_version,
              }
            : null,
        },
        userImpact:
          "If this write is wrong/empty, the team never truly receives the application.",
      });

      // Packet cleared after success
      add({
        id: "E2E-05",
        severity: "P1",
        status: afterSubmit.packet == null ? "PASS" : "FAIL",
        title: "Apply packet cleared after successful submit",
        flowStep: "Contact / post-success cleanup",
        expected: "session apply packet removed so refresh cannot double-submit same draft",
        actual: afterSubmit.packet
          ? `Packet still present with ${(afterSubmit.packet.banks || []).length} banks`
          : "Packet cleared",
        evidence: { packet: afterSubmit.packet },
        userImpact: "Stale packet after success risks confusing re-submit UX.",
      });

      // Bank payload thinness on the actual write (not just theory)
      if (payload && payload.banks && payload.banks[0]) {
        const bankKeys = Object.keys(payload.banks[0]);
        const hasRich =
          bankKeys.includes("scheme") ||
          bankKeys.includes("rateType") ||
          bankKeys.includes("facilityLabel") ||
          bankKeys.includes("offer");
        add({
          id: "E2E-06",
          severity: "P1",
          status: hasRich ? "PASS" : "FAIL",
          title: "Written bank records keep comparison fields (scheme/rate/facility)",
          flowStep: "Firestore bank payload richness",
          expected: "scheme / rateType / facility (or offer) present on written banks",
          actual: `bank keys=[${bankKeys.join(", ")}]`,
          evidence: { bank: payload.banks[0] },
          userImpact:
            "Ops calling the customer cannot see which offer was compared.",
        });
      }

      // Input numbers present on written payload
      if (payload && payload.input_data) {
        const iq = payload.input_data.query || {};
        const iform = payload.input_data.form || {};
        const incomeOk =
          Number(iq.monthlyIncome) === 250000 ||
          String(iform.monthlyIncome || "").replace(/\D/g, "").includes("250000");
        add({
          id: "E2E-07",
          severity: "P0",
          status: incomeOk ? "PASS" : "FAIL",
          title: "Written application keeps customer input numbers",
          flowStep: "Inputs → Firestore input_data",
          expected: "monthlyIncome 250000 (or form equivalent) in written payload",
          actual: `query.monthlyIncome=${iq.monthlyIncome}; form.monthlyIncome=${iform.monthlyIncome}; age=${iq.age}; cibil=${iq.cibilScore}`,
          evidence: { query: iq, form: iform },
          userImpact: "Wrong saved inputs → wrong bank conversation.",
        });
      }
    });

    await section("expired-packet-live", async () => {
      await fillInputsAndCompare(page);
      const pkt = await goApplyWithFirstBank(page);
      // Age the packet beyond 60 minutes
      await page.evaluate((p) => {
        const aged = { ...p, ts: Date.now() - 61 * 60 * 1000 };
        sessionStorage.setItem("shroffin_hl_apply_v1", JSON.stringify(aged));
      }, pkt);
      await page.goto(`${BASE}/pages/apply-contact.html`, {
        waitUntil: "domcontentloaded",
      });
      await page.waitForTimeout(1500);
      const bounced = {
        url: page.url(),
        packet: await readApplyPacket(page),
        body: (await page.locator("body").innerText().catch(() => "")).slice(0, 300),
      };
      const recovered =
        /explore-banks/i.test(bounced.url) ||
        bounced.packet == null ||
        /select|explore|expired|start again/i.test(bounced.body);
      add({
        id: "FB-03",
        severity: "P2",
        status: recovered ? "FAIL" : "INFO",
        title: "Apply packet expires after 60 minutes (live)",
        flowStep: "Apply session lifetime",
        expected:
          "Either longer TTL for verify friction, or clear restore — today: hard clear at 60m",
        actual: `url=${bounced.url}; packet=${bounced.packet ? "still present" : "cleared"}; snippet=${JSON.stringify(bounced.body.slice(0, 140))}`,
        evidence: bounced,
        userImpact:
          "Slow Google verify / tab left open can wipe the shortlist before submit.",
      });
      // Product choice is intentional expiry → mark FAIL as product risk (same as before)
      // If recovery works (bounce to explore), still FAIL on product grounds (TTL too short)
    });

    await section("consent-blocks-submit", async () => {
      await fillInputsAndCompare(page);
      const pkt = await goApplyWithFirstBank(page);
      await page.goto(`${BASE}/pages/apply-contact.html`, {
        waitUntil: "domcontentloaded",
      });
      await page.evaluate((p) => {
        sessionStorage.setItem(
          "shroffin_hl_apply_v1",
          JSON.stringify({ ...p, ts: Date.now() })
        );
      }, pkt);
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
      // leave consent unchecked
      await page.evaluate(() => {
        const c = document.getElementById("hl-consent");
        if (c) c.checked = false;
        c && c.dispatchEvent(new Event("change", { bubbles: true }));
      });
      await page.waitForTimeout(200);
      await page.locator("#hl-verify-email").click({ force: true });
      await page.waitForTimeout(1000);
      // Force-enable path: if verify somehow worked, click submit and expect toast
      const pre = await contactFormState(page);
      if (!pre.submitDisabled) {
        await page.locator("#hl-submit-application").click({ force: true });
        await page.waitForTimeout(800);
      } else {
        // Try clicking submit anyway (disabled) — also call validate via click if enabled after check then uncheck
        await page.check("#hl-consent");
        await page.waitForTimeout(200);
        await page.locator("#hl-verify-email").click({ force: true });
        await page.waitForTimeout(800);
        await page.uncheck("#hl-consent");
        await page.waitForTimeout(200);
        // Submit may still be enabled in UI if consent only checked at click-time
        const canClick = await page.evaluate(() => {
          const btn = document.getElementById("hl-submit-application");
          return btn && !btn.disabled;
        });
        if (canClick) {
          await page.locator("#hl-submit-application").click({ force: true });
          await page.waitForTimeout(800);
        }
      }
      const after = await contactFormState(page);
      const blocked =
        !/Application received/i.test(after.successText) &&
        (after.writes || []).length === 0;
      add({
        id: "CONTACT-07",
        severity: "P1",
        status: blocked ? "PASS" : "FAIL",
        title: "Unchecked consent does not complete Application received",
        flowStep: "Contact / consent",
        expected: "No success modal / no Firestore write without consent",
        actual: `success=${JSON.stringify(after.successText.slice(0, 100))}; writes=${(after.writes || []).length}; toast=${JSON.stringify(after.toastText)}; submitDisabled=${after.submitDisabled}`,
        evidence: after,
        userImpact: "Consent is required before sharing details with lenders.",
      });
    });

    await section("remove-bank-on-review", async () => {
      await fillInputsAndCompare(page);
      await selectNthVisible(page, 0);
      await selectNthVisible(page, 1);
      await page.waitForTimeout(400);
      await clickApplyOnce(page);
      const before = await readApplyPacket(page);
      const beforeN = (before && before.banks && before.banks.length) || 0;
      const removed = await page.evaluate(() => {
        const btn = document.querySelector(
          ".hl-apply-bank-remove, [data-remove-bank], button.hl-apply-remove"
        );
        if (btn) {
          btn.click();
          return { clicked: true };
        }
        // fallback: any remove control in bank list
        const alt = document.querySelector(
          "#hl-apply-banks button[aria-label*='Remove'], #hl-apply-banks .hl-apply-bank-actions button"
        );
        if (alt) {
          alt.click();
          return { clicked: true, alt: true };
        }
        return { clicked: false };
      });
      await page.waitForTimeout(500);
      const after = await readApplyPacket(page);
      const afterN = (after && after.banks && after.banks.length) || 0;
      add({
        id: "REVIEW-06",
        severity: "P1",
        status:
          removed.clicked && beforeN >= 2 && afterN === beforeN - 1
            ? "PASS"
            : removed.clicked
              ? "FAIL"
              : "BLOCKED",
        title: "Remove bank on Apply review updates packet count",
        flowStep: "Apply review / remove bank",
        expected: "Removing a bank drops it from packet before contact",
        actual: `clicked=${removed.clicked}; before=${beforeN}; after=${afterN}`,
        evidence: {
          removed,
          beforeNames: (before && before.banks || []).map((b) => b.bankName),
          afterNames: (after && after.banks || []).map((b) => b.bankName),
        },
        userImpact:
          "User must be able to drop a bank before contact without restarting Explore.",
      });
    });

    add({
      id: "FB-02",
      severity: "P2",
      status: "INFO",
      title:
        "Real Google OAuth popup not used — Auth/Firestore mocked for success-path proof",
      flowStep: "Apply contact → Firebase",
      expected: "Production Google account + live Firestore rules",
      actual:
        "E2E-00…E2E-07 exercise real UI + home-loan-apply.js with mocked Auth/Firestore write capture. Live Google popup still needs a test account on a headed browser.",
      userImpact:
        "Production-only failures (OAuth domain, Firestore rules) still need a manual Google smoke once.",
    });
  } catch (err) {
    add({
      id: "AUDIT-CRASH",
      severity: "P0",
      status: "FAIL",
      title: "Audit script crashed before finishing",
      flowStep: "Audit harness",
      expected: "Complete probe set",
      actual: String(err && err.stack ? err.stack : err),
      userImpact: "Report may be incomplete.",
    });
  } finally {
    await browser.close();
  }

  const summary = {
    generatedAt: runStarted,
    finishedAt: new Date().toISOString(),
    baseURL: BASE,
    totals: {
      FAIL: findings.filter((f) => f.status === "FAIL").length,
      PASS: findings.filter((f) => f.status === "PASS").length,
      BLOCKED: findings.filter((f) => f.status === "BLOCKED").length,
      INFO: findings.filter((f) => f.status === "INFO").length,
      P0_FAIL: findings.filter((f) => f.status === "FAIL" && f.severity === "P0").length,
      P1_FAIL: findings.filter((f) => f.status === "FAIL" && f.severity === "P1").length,
      P2_FAIL: findings.filter((f) => f.status === "FAIL" && f.severity === "P2").length,
    },
    findings,
  };

  fs.mkdirSync(path.dirname(OUT_MD), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(summary, null, 2));

  const fails = findings.filter((f) => f.status === "FAIL");
  const passes = findings.filter((f) => f.status === "PASS");
  const infos = findings.filter((f) => f.status === "INFO" || f.status === "BLOCKED");
  const sevLabel = (s) =>
    s === "P0" ? "Serious" : s === "P1" ? "Important" : "Lesser";

  const md = [];
  md.push("# Apply user-flow break report");
  md.push("");
  md.push(`Generated: ${summary.finishedAt}  `);
  md.push(`Base URL: ${BASE}  `);
  md.push(
    "Method: Live browser tests — input card → Explore → Apply → Contact → Verify → Submit → Application received"
  );
  md.push("");
  md.push("## Verdict (plain English)");
  md.push("");
  const e2eSuccess = findings.find((f) => f.id === "E2E-03");
  const e2eWrite = findings.find((f) => f.id === "E2E-04");
  const selDrop = findings.find((f) => f.id === "APPLY-02");
  if (e2eSuccess && e2eSuccess.status === "PASS" && e2eWrite && e2eWrite.status === "PASS") {
    md.push(
      "The happy path from filled inputs through **Application received** works when Google Auth is satisfied (proven here with a mocked Auth/Firestore write that still runs the real Apply UI and `home-loan-apply.js`)."
    );
  } else {
    md.push(
      "The end path to **Application received** did **not** fully pass in this run — see E2E probes."
    );
  }
  md.push("");
  if (selDrop && selDrop.status === "FAIL") {
    md.push(
      "Comparing banks works. Applying does **not** always keep what the person picked: filter changes can drop earlier selections while the Apply button still shows a higher count."
    );
  }
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
  md.push("");
  md.push("## What worked");
  md.push("");
  passes.forEach((f) => {
    md.push(`- **${f.id}** — ${f.title}`);
  });
  md.push("");
  md.push("---");
  md.push("");
  md.push("## Full list of issues (simple English)");
  md.push("");
  if (!fails.length) {
    md.push("_No FAIL findings._");
  }
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
  md.push("## Not fully live (called out honestly)");
  md.push("");
  infos.forEach((f) => {
    md.push(`- **${f.status}** \`${f.id}\` — ${f.title}: ${f.actual}`);
  });
  md.push("");
  md.push("## All probes (PASS / FAIL / BLOCKED / INFO)");
  md.push("");
  findings.forEach((f) => {
    md.push(`- **${f.status}** \`${f.id}\` [${f.severity}] ${f.title}`);
  });
  md.push("");
  md.push("## How to re-run");
  md.push("");
  md.push("```bash");
  md.push(`cd "${ROOT}"`);
  md.push("# server already on :8765, or: npm start");
  md.push('export PLAYWRIGHT_BROWSERS_PATH="$HOME/.cache/ms-playwright"');
  md.push('LOCAL_LIBS="/tmp/pw-libs/root/usr/lib/x86_64-linux-gnu"');
  md.push('[[ -d "$LOCAL_LIBS" ]] && export LD_LIBRARY_PATH="${LOCAL_LIBS}${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}"');
  md.push("BASE_URL=http://127.0.0.1:8765 node scripts/audit-apply-user-flow.mjs");
  md.push("```");
  md.push("");
  md.push("Machine-readable: `super-review-1/apply-flow-break-report.json`");
  md.push("");

  fs.writeFileSync(OUT_MD, md.join("\n"));
  console.log(JSON.stringify(summary.totals, null, 2));
  console.log("Wrote", OUT_MD);
  console.log("Wrote", OUT_JSON);
  process.exit(summary.totals.P0_FAIL > 0 ? 1 : 0);
}

main();
