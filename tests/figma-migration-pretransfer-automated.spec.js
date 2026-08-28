// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * These tests exist to verify interactive “open/close” states that our Figma
 * migration needs as still frames/variants. We intentionally avoid strict CSS
 * matching; we only assert DOM/ARIA/inert changes that indicate the state is real.
 */

function applyPacket() {
  return {
    v: 1,
    ts: Date.now(),
    banks: [
      {
        id: 'TEST-BANK-1',
        scheme: 'Home loan',
        rateType: 'Fixed',
        facilityLabel: 'Term loan',
        effectiveRoiPct: 8.5,
        loanAmount: 5000000,
        tenureLabel: '20 years',
        emi: 42000
      }
    ]
  };
}

async function seedApplyPacket(page) {
  await page.addInitScript((packet) => {
    sessionStorage.setItem('shroffin_hl_apply_v1', JSON.stringify(packet));
  }, applyPacket());
}

/** Block the real Firebase SDK and seed a popup-auth stub the Apply contact page can call. */
async function stubFirebaseAuth(page, googleUser) {
  await page.route(/firebasejs/, (route) =>
    route.fulfill({
      status: 200,
      contentType: 'application/javascript',
      body: '/* playwright: do not load real Firebase */'
    })
  );
  await page.addInitScript((user) => {
    window.__hlGoogleUser = user;
    window.__hlAuthUser = null;
    function auth() {
      return {
        get currentUser() {
          return window.__hlAuthUser;
        },
        signInWithPopup() {
          const next = window.__hlGoogleUser;
          window.__hlAuthUser = next;
          return Promise.resolve({ user: next });
        },
        signOut() {
          window.__hlAuthUser = null;
          return Promise.resolve();
        },
        onAuthStateChanged(cb) {
          cb(null);
          return function () {};
        }
      };
    }
    auth.GoogleAuthProvider = function GoogleAuthProvider() {
      this.addScope = function () {};
      this.setCustomParameters = function () {};
    };
    window.firebase = {
      apps: [],
      initializeApp() {
        window.firebase.apps = [{}];
      },
      auth,
      firestore() {
        return {};
      }
    };
  }, googleUser);
}

async function waitForExploreBankRows(page) {
  // Results shell stays `hidden` until Compare; rows still exist in the DOM.
  await page.waitForSelector('#hlc-compare-body tr.hlc-selectable-row[data-id]', {
    state: 'attached',
    timeout: 25000
  });
}

test.describe('Figma pre-transfer: automated verification (DOM/ARIA)', () => {
  test('Global nav flyout opens and closes (desktop)', async ({ page }) => {
    await page.goto('/');

    const guideTrigger = page.locator('#nav-guide-trigger');
    await expect(guideTrigger).toBeVisible();

    await guideTrigger.click();
    const flyout = page.locator('#nav-guide-flyout');
    await expect(flyout).toHaveAttribute('aria-hidden', 'false');

    // Close via Escape; this is how overlays normally respond.
    await page.keyboard.press('Escape');
    await expect(flyout).toHaveAttribute('aria-hidden', 'true');
  });

  test('Guide localnav toggle opens and closes (mobile)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/pages/guide.html');

    const localnav = page.locator('.localnav');
    await page.waitForSelector('.localnav-toggle', { timeout: 15000 });
    const toggle = page.locator('.localnav-toggle').first();

    // Ensure closed -> open -> closed
    await expect(localnav).not.toHaveClass(/is-open/);
    await toggle.click();
    await expect(localnav).toHaveClass(/is-open/);

    await toggle.click();
    await expect(localnav).not.toHaveClass(/is-open/);
  });

  test('Guide flip card: open state toggles (front -> back)', async ({ page }) => {
    await page.goto('/pages/guide.html');

    const flip = page.locator('#borrow-flip');
    const flipLink = page.locator('#borrow-flip .guide-flip-link[data-flip="borrow-flip"]').first();
    await expect(flipLink).toBeVisible();

    await flipLink.click();
    await expect(flip).toHaveClass(/is-flipped/);
  });

  test('Guide intelligence dialog opens and closes', async ({ page }) => {
    await page.goto('/pages/property-home-insurance.html');

    await page.waitForSelector('.guide-intel-trigger', { timeout: 15000 });
    await page.locator('.guide-intel-trigger').first().click();

    const dialog = page.locator('#guide-intel-dialog');
    await expect(dialog).toBeVisible();
    await expect(dialog).toHaveClass(/guide-intel-dialog--open/);

    await dialog.locator('button.guide-intel-close').click();
    await expect(dialog).toBeHidden();
  });

  test('Explore help tooltip opens and closes', async ({ page }) => {
    await page.goto('/pages/explore-banks.html');

    const helpBtn = page.locator('button.hlc-field-help').first();
    await expect(helpBtn).toBeVisible();

    const popoverId = await helpBtn.getAttribute('aria-controls');
    const popover = page.locator(`#${popoverId}`);
    await expect(popover).toBeHidden();

    // Tooltips in this UI behave like hover popovers.
    await helpBtn.hover();
    await expect(popover).toBeVisible();

    // Close by clicking outside.
    await page.locator('body').click({ position: { x: 5, y: 5 } });
    await expect(popover).toBeHidden();
  });

  test('Explore bank drawer opens and closes from table row', async ({ page }) => {
    await page.goto('/pages/explore-banks.html');

    // Drawer opens from an in-cell “details” control, not from the row selection toggle.
    // The compare engine looks for the closest element with [data-detail].
    const doneBtn = page.locator('#hlc-filters-done');
    if (await doneBtn.count()) {
      // Best-effort: show results without needing exact user inputs.
      if (await doneBtn.isVisible().catch(() => false)) {
        await doneBtn.click();
      }
    }

    const detail = page.locator('#hlc-compare-body [data-detail]').first();
    await page
      .waitForSelector('#hlc-compare-body [data-detail]', { timeout: 20000 })
      .catch(() => {});
    // Click via DOM to avoid “not visible” issues inside scrollers.
    await page.evaluate(() => {
      const btn = document.querySelector('#hlc-compare-body [data-detail]');
      if (btn) btn.click();
    });

    const drawer = page.locator('#hlc-drawer');
    await expect(drawer).toHaveAttribute('aria-hidden', 'false');

    await drawer.locator('#hlc-drawer-close').click();
    await expect(drawer).toHaveAttribute('aria-hidden', 'true');
  });

  test('Apply review: “Show more details” panel toggles', async ({ page }) => {
    // Apply review requires a valid apply packet in sessionStorage; otherwise it redirects.
    await seedApplyPacket(page);
    await page.goto('/pages/apply.html');

    const toggle = page.locator('#hl-apply-details-toggle');
    const panel = page.locator('#hl-apply-your-details-panel');

    await toggle.waitFor({ state: 'attached', timeout: 15000 });
    await toggle.scrollIntoViewIfNeeded().catch(() => {});
    await expect(panel).toHaveAttribute('aria-hidden', 'true');

    await toggle.click({ force: true });
    await expect(panel).toHaveAttribute('aria-hidden', 'false');

    await toggle.click({ force: true });
    await expect(panel).toHaveAttribute('aria-hidden', 'true');
  });

  test('Guide segmented tabs: click selects panel and hides previous', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/pages/guide.html');

    const tabs = page.locator('#borrow-flip .guide-seg-btn[role="tab"]');
    const tabCount = await tabs.count();
    expect(tabCount).toBeGreaterThanOrEqual(2);

    const secondTab = tabs.nth(1);
    const secondPanelId = await secondTab.getAttribute('aria-controls');

    // Panel for selected tab should become visible.
    await secondTab.evaluate((el) => el.click());
    await expect(page.locator(`#${secondPanelId}`)).toBeVisible();

    const firstTab = tabs.nth(0);
    await expect(secondTab).toHaveAttribute('aria-selected', 'true');
    await expect(firstTab).toHaveAttribute('aria-selected', 'false');

    const firstPanelId = await firstTab.getAttribute('aria-controls');
    await expect(page.locator(`#${firstPanelId}`)).toBeHidden();
  });

  test('Calculator EMI: amortisation panel toggles inert/open', async ({ page }) => {
    await page.goto('/pages/calculators/emi.html');

    const panel = page.locator('#calc-amort-panel');
    const toggle = page.locator('.calc-amort-toggle');

    await expect(panel).toHaveAttribute('inert', '');
    await toggle.click();
    await expect(panel).not.toHaveAttribute('inert');

    await toggle.click();
    await expect(panel).toHaveAttribute('inert', '');
  });

  test('Home: at least one moment becomes .is-in after scrolling', async ({ page }) => {
    await page.goto('/');

    // Scroll enough to move through the “moment” stack.
    await page.evaluate(() => window.scrollTo(0, 1400));

    await expect
      .poll(() => page.locator('.home-moment.is-in').count())
      .toBeGreaterThan(0);
  });

  test('Home product demo: play/pause toggles icon state', async ({ page }) => {
    await page.goto('/');

    const playbackRoot = page.locator('button.spd-playback').first();
    await expect(playbackRoot).toBeVisible({ timeout: 20000 });

    const pauseIcon = playbackRoot.locator('.spd-playback-icon--pause').first();
    const playIcon = playbackRoot.locator('.spd-playback-icon--play').first();

    // Click once; icon state should change to “pause” or “play”.
    await playbackRoot.click();
    const pauseVisible1 = await pauseIcon.isVisible();
    const playVisible1 = await playIcon.isVisible();
    expect(pauseVisible1 || playVisible1).toBe(true);

    // Click again and ensure icon state flips at least once.
    const before = pauseVisible1;
    await playbackRoot.click();
    const after = await pauseIcon.isVisible();
    expect(after).toBe(!before);
  });

  test('Explore table: filled rows, sort, and selected row', async ({ page }) => {
    test.setTimeout(45000);
    await page.goto('/pages/explore-banks.html');
    await waitForExploreBankRows(page);

    const rows = page.locator('#hlc-compare-body tr.hlc-selectable-row[data-id]');
    await expect(rows.first()).toHaveAttribute('aria-selected', 'false');

    await page.evaluate(() => {
      const row = document.querySelector('#hlc-compare-body tr.hlc-selectable-row[data-id]');
      if (row) row.click();
    });
    await expect(rows.first()).toHaveAttribute('aria-selected', 'true');
    await expect(rows.first()).toHaveClass(/is-selected/);

    // Rate already defaults to ascending. Sort a none-column so we see the real cycle:
    // none → asc → desc (handler is on #hlc-compare-head).
    const sortKey = await page.evaluate(() => {
      const th = document.querySelector(
        '#hlc-compare-head th.hlc-sortable[data-sort][aria-sort="none"]'
      );
      if (!th) return null;
      const key = th.getAttribute('data-sort');
      th.click();
      return key;
    });
    expect(sortKey).toBeTruthy();
    const sortedTh = page.locator(
      '#hlc-compare-head th.hlc-sortable[data-sort="' + sortKey + '"]'
    );
    await expect(sortedTh).toHaveAttribute('aria-sort', 'ascending');
    await page.evaluate((key) => {
      const th = document.querySelector(
        '#hlc-compare-head th.hlc-sortable[data-sort="' + key + '"]'
      );
      if (th) th.click();
    }, sortKey);
    await expect(sortedTh).toHaveAttribute('aria-sort', 'descending');
  });

  test('Explore table: empty when no bank matches the inputs', async ({ page }) => {
    test.setTimeout(45000);
    await page.goto('/pages/explore-banks.html');
    await waitForExploreBankRows(page);

    await page.locator('#hlc-age').fill('99');
    const empty = page.locator('#hlc-compare-body td.hlc-empty');
    await expect(empty).toBeAttached({ timeout: 15000 });
    await expect(empty).toContainText('No banks matched these inputs');
  });

  test('Explore table: selected bank stays outside filters', async ({ page }) => {
    test.setTimeout(45000);
    await page.goto('/pages/explore-banks.html');
    await waitForExploreBankRows(page);

    await page.evaluate(() => {
      const row = document.querySelector('#hlc-compare-body tr.hlc-selectable-row[data-id]');
      if (row) row.click();
    });
    await expect(page.locator('#hlc-compare-body tr.hlc-selectable-row.is-selected').first()).toBeAttached();

    await page.evaluate(() => {
      ['bankPublic', 'bankPrivate'].forEach((key) => {
        const input = document.querySelector('input[data-product-filter="' + key + '"]');
        if (!input) return;
        input.checked = false;
        input.dispatchEvent(new Event('change', { bubbles: true }));
      });
    });

    await expect(page.locator('.hlc-outside-filters-note').first()).toBeAttached({
      timeout: 15000
    });
    await expect(page.locator('#hlc-compare-body tr.hlc-selectable-row.is-selected').first()).toBeAttached();
  });

  test('Apply review: Continue is enabled with a seeded packet and opens contact', async ({
    page
  }) => {
    await seedApplyPacket(page);
    await page.goto('/pages/apply.html');

    const continueBtn = page.locator('#hl-continue-application');
    await expect(continueBtn).toBeEnabled({ timeout: 15000 });
    await continueBtn.click();
    await expect(page).toHaveURL(/apply-contact\.html/);
  });

  test('Apply contact: phone ok, verify enable, mismatch, submit stays disabled', async ({
    page
  }) => {
    await stubFirebaseAuth(page, { email: 'other@example.com', uid: 'uid-mismatch' });
    await seedApplyPacket(page);
    await page.goto('/pages/apply-contact.html');

    const phoneOk = page.locator('#hl-phone-ok');
    const verifyBtn = page.locator('#hl-verify-email');
    const submitBtn = page.locator('#hl-submit-application');
    const mismatch = page.locator('#hl-email-mismatch');

    await expect(phoneOk).toBeHidden();
    await expect(verifyBtn).toBeDisabled();
    await expect(submitBtn).toBeDisabled();

    await page.locator('#hl-phone').fill('9876543210');
    await expect(phoneOk).toBeVisible();

    await page.locator('#hl-email').fill('apply@example.com');
    await expect(verifyBtn).toBeEnabled();
    await expect(submitBtn).toBeDisabled();

    await verifyBtn.click();
    await expect(mismatch).toBeVisible({ timeout: 10000 });
    await expect(mismatch).toContainText('apply@example.com');
    await expect(submitBtn).toBeDisabled();
    await expect(page.locator('#hl-verify-status')).toBeHidden();
  });

  test('Apply contact: matching Google verify enables submit', async ({ page }) => {
    await stubFirebaseAuth(page, { email: 'apply@example.com', uid: 'uid-match' });
    await seedApplyPacket(page);
    await page.goto('/pages/apply-contact.html');

    await page.locator('#hl-name').fill('Test Applicant');
    await page.locator('#hl-phone').fill('9876543210');
    await page.locator('#hl-email').fill('apply@example.com');

    const verifyBtn = page.locator('#hl-verify-email');
    await expect(verifyBtn).toBeEnabled();
    await verifyBtn.click();

    await expect(page.locator('#hl-verify-status')).toBeVisible({ timeout: 10000 });
    await expect(verifyBtn).toHaveText('Verified');
    await expect(page.locator('#hl-submit-application')).toBeEnabled();
    await expect(page.locator('#hl-email-mismatch')).toBeHidden();
  });

  test('Calculator EMI: numeric output recomputes when the loan amount changes', async ({
    page
  }) => {
    await page.goto('/pages/calculators/emi.html');

    const emi = page.locator('#out-emi');
    await expect(emi).not.toHaveText('—', { timeout: 10000 });
    await expect(emi).toContainText('₹');
    const first = (await emi.innerText()).trim();

    await page.locator('#principal').fill('2500000');
    await expect(emi).not.toHaveText(first);
    await expect(emi).toContainText('₹');
    await expect(page.locator('#out-interest')).not.toHaveText('—');
    await expect(page.locator('#out-payable')).not.toHaveText('—');
  });

  test('Home product demo: choreography advances and chrome can show Replay', async ({
    page
  }) => {
    test.setTimeout(45000);
    await page.goto('/');

    const stage = page.locator('[data-spd-stage]:not(.spd-stage--phone)').first();
    await stage.scrollIntoViewIfNeeded();

    const frameEl = stage.locator('[data-spd-frame]');
    await expect(frameEl).toHaveAttribute('src', /_product-demo-frame/, { timeout: 20000 });

    const playback = stage.locator('[data-spd-playback]');
    await expect
      .poll(async () => playback.getAttribute('data-spd-state'), { timeout: 15000 })
      .toMatch(/playing|paused|ended/);
    if ((await playback.getAttribute('data-spd-state')) !== 'playing') {
      await playback.click();
    }
    await expect(playback).toHaveAttribute('data-spd-state', 'playing', { timeout: 10000 });

    const demoFrame = page.frames().find((frame) => {
      return /_product-demo-frame\.html/.test(frame.url()) && !/_product-demo-frame-mobile/.test(frame.url());
    });
    expect(demoFrame).toBeTruthy();

    await expect
      .poll(
        async () =>
          demoFrame.evaluate(() => {
            const root = document.querySelector('[data-spd-root]');
            const income = document.querySelector('[data-spd-input="income"]');
            const searching = document.querySelector('[data-spd-searching].is-visible');
            const results = document.querySelector('[data-spd-results].is-visible');
            if (results) return 'results';
            if (searching) return 'searching';
            if (income && String(income.value || '').replace(/\D/g, '').length >= 3) return 'typing';
            if (root && root.getAttribute('data-spd-running') === 'true') return 'running';
            return '';
          }),
        { timeout: 20000 }
      )
      .not.toBe('');

    await demoFrame.evaluate(() => {
      window.parent.postMessage({ source: 'spd-demo', type: 'spd-ended' }, '*');
    });
    await expect(playback).toHaveAttribute('data-spd-state', 'ended');
    await expect(playback).toHaveAttribute('aria-label', 'Replay');
  });
});

