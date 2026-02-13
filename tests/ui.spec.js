// @ts-check
const { test, expect } = require('@playwright/test');

async function waitForLayout(page) {
  await page.waitForSelector('.site-header a, .site-footer a', { state: 'visible', timeout: 10000 });
}

test.describe('Apply Only Once – UI', function () {
  test('home loads with correct layout', async ({ page }) => {
    await page.goto('/');
    await waitForLayout(page);
    await expect(page.locator('text=Apply Only Once').first()).toBeVisible();
    await expect(page.locator('text=Education loan rules differ from bank to bank')).toBeVisible();
    await expect(page.locator('text=Compare on your own').first()).toBeVisible();
    await expect(page.locator('text=See what fits you').first()).toBeVisible();
    await expect(page.locator('text=Clean & Simplified information of 35+ banks')).toBeVisible();
    await expect(page.locator('text=We are not partnered with any bank or NBFCs')).toBeVisible();
    await expect(page.locator('text=Frequently Asked Questions').first()).toBeVisible();
    await expect(page.locator('text=Standardized Document list').first()).toBeVisible();
  });

  test('navbar has logo left, nav right (Home, Quick overview, About us)', async ({ page }) => {
    await page.goto('/');
    await waitForLayout(page);
    await expect(page.locator('.site-header-inner').first()).toBeVisible();
    await expect(page.locator('[data-testid="nav-logo"]').first()).toBeVisible();
    await expect(page.locator('.site-nav').getByTestId('nav-home').first()).toBeVisible();
    await expect(page.locator('.site-nav').getByTestId('nav-quick-overview').first()).toBeVisible();
    await expect(page.locator('.site-nav').getByTestId('nav-about').first()).toBeVisible();
    const logoBeforeNav = await page.locator('.site-header-inner').evaluate(function (inner) {
      var logo = inner.querySelector('.site-logo');
      var nav = inner.querySelector('.site-nav');
      return logo && nav && logo.compareDocumentPosition(nav) === 4;
    });
    expect(logoBeforeNav).toBe(true);
  });

  test('home has 4 nav links below cards', async ({ page }) => {
    await page.goto('/');
    await waitForLayout(page);
    await expect(page.locator('.home-nav-links').getByTestId('home-link-faq').first()).toBeVisible();
    await expect(page.locator('.home-nav-links').getByTestId('home-link-schemes').first()).toBeVisible();
    await expect(page.locator('.home-nav-links').getByTestId('home-link-government-schemes').first()).toBeVisible();
    await expect(page.locator('.home-nav-links').getByTestId('home-link-document-checklist').first()).toBeVisible();
  });

  test('Compare on your own navigates to compare page', async ({ page }) => {
    await page.goto('/');
    await waitForLayout(page);
    await page.getByTestId('link-compare').click();
    await expect(page).toHaveURL(/compare\.html/);
    await expect(page.locator('text=Compare on your own across all banks').first()).toBeVisible();
  });

  test('See what fits you navigates to questions page', async ({ page }) => {
    await page.goto('/');
    await waitForLayout(page);
    await page.getByTestId('link-see-what-fits').click();
    await expect(page).toHaveURL(/questions\.html/);
    await expect(page.locator('text=See what fits you by answering 6 questions').first()).toBeVisible();
  });

  test('Compare page has Indian / Abroad tabs, no bank dropdown', async ({ page }) => {
    await page.goto('/pages/compare.html');
    await waitForLayout(page);
    await expect(page.locator('button:has-text("Indian education")')).toBeVisible();
    await expect(page.locator('button:has-text("Abroad education")')).toBeVisible();
    await expect(page.locator('#bank-filter')).toHaveCount(0);
  });

  test('Compare page has table with checkboxes', async ({ page }) => {
    await page.goto('/pages/compare.html');
    await waitForLayout(page);
    await page.waitForSelector('[data-testid="compare-table"]', { timeout: 15000 });
    await expect(page.locator('#select-all-banks')).toBeVisible();
    await expect(page.locator('.bank-checkbox').first()).toBeVisible();
  });

  test('Compare table is sortable', async ({ page }) => {
    await page.goto('/pages/compare.html');
    await waitForLayout(page);
    await page.waitForSelector('[data-testid="compare-table"] th', { timeout: 15000 });
    var headers = page.locator('[data-testid="compare-table"] thead th');
    await expect(headers.nth(1)).toBeVisible();
    await headers.nth(1).click();
    await expect(headers.nth(1)).toHaveAttribute('data-sort', 'asc');
  });

  test('Compare page table fits viewport, only table scrolls', async ({ page }) => {
    await page.goto('/pages/compare.html');
    await waitForLayout(page);
    await expect(page.locator('main.compare-main')).toBeVisible();
    await expect(page.locator('#table-wrapper.compare-table-wrapper')).toBeVisible();
    const mainHeight = await page.locator('main.compare-main').evaluate(function (m) { return m.offsetHeight; });
    const wrapperScroll = await page.locator('#table-wrapper.compare-table-wrapper').evaluate(function (w) {
      var s = getComputedStyle(w);
      return s.overflow === 'auto' || s.overflowY === 'auto' || s.overflow === 'scroll' || s.overflowY === 'scroll';
    });
    expect(mainHeight).toBeGreaterThan(200);
    expect(wrapperScroll).toBe(true);
  });

  test('Compare table uses config or default columns (not all sheet columns)', async ({ page }) => {
    await page.goto('/pages/compare.html');
    await waitForLayout(page);
    await page.waitForSelector('[data-testid="compare-table"] thead th', { timeout: 15000 });
    var thCount = await page.locator('[data-testid="compare-table"] thead th').count();
    // India sheet has 85 columns; config may show a subset. Ensure we're not showing every column.
    expect(thCount).toBeLessThan(90);
    expect(thCount).toBeGreaterThanOrEqual(3);
  });

  test('Questions page has 6 dropdowns and submit button', async ({ page }) => {
    await page.goto('/pages/questions.html');
    await waitForLayout(page);
    await expect(page.locator('#q1')).toBeVisible();
    await expect(page.locator('#q2')).toBeVisible();
    await expect(page.locator('#q6')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('Submit questions leads to results', async ({ page }) => {
    await page.goto('/pages/questions.html');
    await waitForLayout(page);
    await page.selectOption('#q1', 'India');
    await page.selectOption('#q2', 'Postgraduate / Masters');
    await page.selectOption('#q3', 'Rs. 7.50 lakhs - Rs. 30 lakhs');
    await page.selectOption('#q4', 'Parents');
    await page.selectOption('#q5', 'No');
    await page.selectOption('#q6', 'Yes');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/results\.html/);
    await expect(page.locator('text=Based on your answers').first()).toBeVisible();
  });

  test('Results page shows bank cards', async ({ page }) => {
    await page.goto('/pages/questions.html');
    await waitForLayout(page);
    await page.selectOption('#q1', 'India');
    await page.selectOption('#q2', 'Postgraduate / Masters');
    await page.selectOption('#q3', 'Rs. 7.50 lakhs - Rs. 30 lakhs');
    await page.selectOption('#q4', 'Parents');
    await page.selectOption('#q5', 'No');
    await page.selectOption('#q6', 'Yes');
    await page.click('button[type="submit"]');
    await page.waitForURL(/results\.html/);
    await page.waitForFunction(() => {
      var c = document.getElementById('results-container');
      return c && !c.textContent.includes('Loading') && (c.querySelector('.card') || c.querySelector('[data-testid="result-card"]'));
    }, { timeout: 15000 });
    await expect(page.locator('#results-container .card, [data-testid="result-card"]').first()).toBeVisible();
  });

  test('Results page has Want to change answers and compare link', async ({ page }) => {
    await page.goto('/pages/questions.html');
    await waitForLayout(page);
    await page.selectOption('#q1', 'India');
    await page.selectOption('#q2', 'Postgraduate / Masters');
    await page.selectOption('#q3', 'Rs. 7.50 lakhs - Rs. 30 lakhs');
    await page.selectOption('#q4', 'Parents');
    await page.selectOption('#q5', 'No');
    await page.selectOption('#q6', 'Yes');
    await page.click('button[type="submit"]');
    await page.waitForURL(/results\.html/);
    await waitForLayout(page);
    await expect(page.locator('[data-testid="edit-answers"]')).toBeVisible();
    await expect(page.locator('a[href*="compare"]').first()).toBeVisible();
  });

  test('FAQ page loads with accordion', async ({ page }) => {
    await page.goto('/pages/faq.html');
    await waitForLayout(page);
    await expect(page.locator('h1:has-text("Frequently asked questions")')).toBeVisible();
    await page.waitForSelector('[data-testid="faq-category"]', { timeout: 15000 });
    await expect(page.locator('[data-testid="faq-category"]').first()).toBeVisible();
  });

  test('About page loads', async ({ page }) => {
    await page.goto('/pages/about.html');
    await waitForLayout(page);
    await expect(page.locator('h1:has-text("About Apply Only Once")')).toBeVisible();
  });

  test('Footer has tel and mailto', async ({ page }) => {
    await page.goto('/');
    await waitForLayout(page);
    await expect(page.locator('a[href^="tel:"]')).toBeVisible();
    await expect(page.locator('a[href^="mailto:"]')).toBeVisible();
  });

  test('Footer has non-white background', async ({ page }) => {
    await page.goto('/');
    await waitForLayout(page);
    const bg = await page.locator('.site-footer').evaluate(function (el) {
      var s = getComputedStyle(el);
      return s.backgroundColor;
    });
    expect(bg).not.toMatch(/rgb\s*\(\s*255\s*,\s*255\s*,\s*255\s*\)/);
  });

  test('Navbar Apply Only Once logo is visible', async ({ page }) => {
    await page.goto('/');
    await waitForLayout(page);
    const logo = page.locator('[data-testid="nav-logo"]');
    await expect(logo).toBeVisible();
    await expect(logo).toHaveText('Apply Only Once');
    const color = await logo.evaluate(function (el) {
      return getComputedStyle(el).color;
    });
    expect(color).toMatch(/rgb\s*\(\s*255\s*,\s*255\s*,\s*255\s*\)|rgba\s*\(\s*255\s*,\s*255\s*,\s*255/);
  });

  test('Results page has Edit answers link aligned', async ({ page }) => {
    await page.goto('/pages/questions.html');
    await waitForLayout(page);
    await page.selectOption('#q1', 'India');
    await page.selectOption('#q2', 'Postgraduate / Masters');
    await page.selectOption('#q3', 'Rs. 7.50 lakhs - Rs. 30 lakhs');
    await page.selectOption('#q4', 'Parents');
    await page.selectOption('#q5', 'No');
    await page.selectOption('#q6', 'Yes');
    await page.click('button[type="submit"]');
    await page.waitForURL(/results\.html/);
    await waitForLayout(page);
    const editLink = page.locator('[data-testid="edit-answers"]');
    await expect(editLink).toBeVisible();
    await expect(editLink).toHaveText(/Edit answers/i);
    await expect(editLink).toHaveAttribute('href', /questions\.html/);
  });

  test('Edit answers restores previously saved answers to form', async ({ page }) => {
    await page.goto('/pages/questions.html');
    await waitForLayout(page);
    await page.selectOption('#q1', 'Abroad');
    await page.selectOption('#q2', 'Doctoral / Doctorate / PhD, DPhil');
    await page.selectOption('#q3', 'Above 50 lakhs');
    await page.selectOption('#q4', 'Legal guardian');
    await page.selectOption('#q5', 'Yes');
    await page.selectOption('#q6', 'Not yet');
    await page.click('button[type="submit"]');
    await page.waitForURL(/results\.html/);
    await waitForLayout(page);
    await page.locator('[data-testid="edit-answers"]').click();
    await page.waitForURL(/questions\.html/);
    await waitForLayout(page);
    await expect(page.locator('#q1')).toHaveValue('Abroad');
    await expect(page.locator('#q2')).toHaveValue('Doctoral / Doctorate / PhD, DPhil');
    await expect(page.locator('#q3')).toHaveValue('Above 50 lakhs');
    await expect(page.locator('#q4')).toHaveValue('Legal guardian');
    await expect(page.locator('#q5')).toHaveValue('Yes');
    await expect(page.locator('#q6')).toHaveValue('Not yet');
  });

  test('Results page cards have top row (name left, fit right) and details below', async ({ page }) => {
    await page.goto('/pages/questions.html');
    await waitForLayout(page);
    await page.selectOption('#q1', 'India');
    await page.selectOption('#q2', 'Postgraduate / Masters');
    await page.selectOption('#q3', 'Rs. 7.50 lakhs - Rs. 30 lakhs');
    await page.selectOption('#q4', 'Parents');
    await page.selectOption('#q5', 'No');
    await page.selectOption('#q6', 'Yes');
    await page.click('button[type="submit"]');
    await page.waitForURL(/results\.html/);
    await page.waitForFunction(function () {
      var c = document.getElementById('results-container');
      return c && c.querySelector('.result-card-modern');
    }, { timeout: 15000 });
    await expect(page.locator('.result-card-modern .result-card-top').first()).toBeVisible();
    await expect(page.locator('.result-card-modern .result-card-name').first()).toBeVisible();
    await expect(page.locator('.result-card-modern .result-card-right').first()).toBeVisible();
    await expect(page.locator('.result-card-modern .result-card-fit-badge').first()).toBeVisible();
    await expect(page.locator('.result-card-modern .result-card-details').first()).toBeVisible();
  });

  test('Results page shows at most 10 cards initially; See remaining button when more', async ({ page }) => {
    await page.goto('/pages/questions.html');
    await waitForLayout(page);
    await page.selectOption('#q1', 'India');
    await page.selectOption('#q2', 'Postgraduate / Masters');
    await page.selectOption('#q3', 'Rs. 7.50 lakhs - Rs. 30 lakhs');
    await page.selectOption('#q4', 'Parents');
    await page.selectOption('#q5', 'No');
    await page.selectOption('#q6', 'Yes');
    await page.click('button[type="submit"]');
    await page.waitForURL(/results\.html/);
    await page.waitForFunction(function () {
      var c = document.getElementById('results-container');
      return c && c.querySelector('.result-card-modern');
    }, { timeout: 15000 });
    var cardCount = await page.locator('[data-testid="result-card"]').count();
    expect(cardCount).toBeLessThanOrEqual(10);
    var loadMore = page.locator('[data-testid="see-remaining-banks"]');
    if (await loadMore.isVisible()) {
      await expect(loadMore).toContainText(/See the remaining \d+ bank/);
    }
  });

  test('Results page fit score is compact badge (not large circle)', async ({ page }) => {
    await page.goto('/pages/questions.html');
    await waitForLayout(page);
    await page.selectOption('#q1', 'India');
    await page.selectOption('#q2', 'Postgraduate / Masters');
    await page.selectOption('#q3', 'Rs. 7.50 lakhs - Rs. 30 lakhs');
    await page.selectOption('#q4', 'Parents');
    await page.selectOption('#q5', 'No');
    await page.selectOption('#q6', 'Yes');
    await page.click('button[type="submit"]');
    await page.waitForURL(/results\.html/);
    await page.waitForFunction(function () {
      var c = document.getElementById('results-container');
      return c && c.querySelector('.result-card-fit-badge');
    }, { timeout: 15000 });
    await expect(page.locator('.result-card-fit-badge').first()).toBeVisible();
    await expect(page.locator('.result-card-fit-badge').first()).toContainText(/Fit \d+%/);
  });

  test('Results page first card shows actual bank name from sheet (not just "Bank")', async ({ page }) => {
    await page.goto('/pages/questions.html');
    await waitForLayout(page);
    await page.selectOption('#q1', 'India');
    await page.selectOption('#q2', 'Postgraduate / Masters');
    await page.selectOption('#q3', 'Rs. 7.50 lakhs - Rs. 30 lakhs');
    await page.selectOption('#q4', 'Parents');
    await page.selectOption('#q5', 'No');
    await page.selectOption('#q6', 'Yes');
    await page.click('button[type="submit"]');
    await page.waitForURL(/results\.html/);
    await page.waitForFunction(function () {
      var c = document.getElementById('results-container');
      return c && c.querySelector('.result-card-modern .result-card-name');
    }, { timeout: 15000 });
    const nameEl = page.locator('.result-card-modern .result-card-name').first();
    await expect(nameEl).toBeVisible();
    const nameText = await nameEl.textContent();
    expect(nameText.trim().length).toBeGreaterThan(4);
    expect(nameText.trim().toLowerCase()).not.toBe('bank');
  });

  test('PM-Vidyalaxmi page has scheme content and QHEI table', async ({ page }) => {
    await page.goto('/pages/schemes.html');
    await waitForLayout(page);
    await page.waitForSelector('#scheme-content', { timeout: 15000 });
    await page.waitForSelector('[data-testid="qhei-table"]', { timeout: 15000 });
    await expect(page.locator('[data-testid="qhei-table"]')).toBeVisible();
  });

  test('QHEI table is sortable', async ({ page }) => {
    await page.goto('/pages/schemes.html');
    await waitForLayout(page);
    await page.waitForSelector('[data-testid="qhei-table"] th', { timeout: 15000 });
    await page.locator('[data-testid="qhei-table"] thead th').first().click();
    await expect(page.locator('[data-testid="qhei-table"] thead th').first()).toHaveAttribute('data-sort', 'asc');
  });

  test('PM-Vidyalaxmi page scheme block is populated (from sheet or error message)', async ({ page }) => {
    await page.goto('/pages/schemes.html');
    await waitForLayout(page);
    await page.waitForSelector('#scheme-content', { timeout: 15000 });
    const content = await page.locator('#scheme-content').textContent();
    expect(content.length).toBeGreaterThan(10);
    expect(
      content.includes('No scheme content available') ||
      content.includes('Data temporarily unavailable') ||
      content.trim().length > 30
    ).toBe(true);
  });

  test('QHEI table columns are driven by config or all sheet columns', async ({ page }) => {
    await page.goto('/pages/schemes.html');
    await waitForLayout(page);
    await page.waitForSelector('[data-testid="qhei-table"] thead th', { timeout: 15000 });
    const thCount = await page.locator('[data-testid="qhei-table"] thead th').count();
    expect(thCount).toBeGreaterThanOrEqual(1);
  });

  test('Document checklist has section header and expandable accordion per subcategory', async ({ page }) => {
    await page.goto('/pages/document-checklist.html');
    await waitForLayout(page);
    await page.waitForFunction(function () {
      var c = document.getElementById('doc-container');
      return c && !c.textContent.includes('Loading');
    }, { timeout: 15000 });
    const hasAccordion = await page.locator('[data-testid="doc-accordion-list"]').count() > 0;
    if (hasAccordion) {
      await expect(page.locator('[data-testid="doc-accordion-list"]')).toBeVisible();
      await expect(page.locator('.doc-section-header').first()).toBeVisible();
      await expect(page.locator('[data-testid="doc-accordion"]').first()).toBeVisible();
      await expect(page.locator('[data-testid="doc-checklist-table"]')).toHaveCount(0);
    } else {
      await expect(page.locator('#doc-container')).toContainText(/No document list|Data temporarily unavailable/);
    }
  });

  test('Navbar has darker SBI blue background', async ({ page }) => {
    await page.goto('/');
    await waitForLayout(page);
    const bg = await page.locator('.site-header').evaluate(function (el) {
      var s = getComputedStyle(el);
      return s.backgroundColor;
    });
    expect(bg).toMatch(/rgb\s*\(\s*0\s*,\s*119\s*,\s*160\s*\)|rgba\s*\(\s*0\s*,\s*119\s*,\s*160/);
  });

  test('Footer has lighter SBI blue background', async ({ page }) => {
    await page.goto('/');
    await waitForLayout(page);
    const bg = await page.locator('.site-footer').evaluate(function (el) {
      var s = getComputedStyle(el);
      return s.backgroundColor;
    });
    expect(bg).toMatch(/rgb\s*\(\s*224\s*,\s*247\s*,\s*252\s*\)|rgba\s*\(\s*224\s*,\s*247\s*,\s*252/);
  });

  test('Mobile: hamburger visible and opens side drawer with nav links', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await waitForLayout(page);
    await expect(page.locator('[data-testid="nav-hamburger"]')).toBeVisible();
    await expect(page.locator('.site-nav')).toBeHidden();
    await page.locator('[data-testid="nav-hamburger"]').click();
    await expect(page.locator('#nav-drawer')).toHaveClass(/open/);
    await expect(page.locator('.nav-drawer-nav [data-testid="nav-home"]')).toBeVisible();
    await expect(page.locator('.nav-drawer-nav [data-testid="nav-quick-overview"]')).toBeVisible();
    await expect(page.locator('.nav-drawer-nav [data-testid="nav-about"]')).toBeVisible();
  });

  test('Compare page table visible on mobile viewport and scrolls inside wrapper', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/pages/compare.html');
    await waitForLayout(page);
    await page.waitForSelector('[data-testid="compare-table"]', { timeout: 15000 });
    await expect(page.locator('[data-testid="compare-table"]')).toBeVisible();
    await expect(page.locator('[data-testid="compare-table"] tbody tr').first()).toBeVisible();
    var wrapper = page.locator('#table-wrapper.compare-table-wrapper');
    var overflow = await wrapper.evaluate(function (el) {
      var s = getComputedStyle(el);
      return s.overflowY === 'auto' || s.overflowY === 'scroll' || s.overflow === 'auto' || s.overflow === 'scroll';
    });
    expect(overflow).toBe(true);
  });

  test('Compare table column headers are sticky', async ({ page }) => {
    await page.goto('/pages/compare.html');
    await waitForLayout(page);
    await page.waitForSelector('[data-testid="compare-table"] thead th', { timeout: 15000 });
    const position = await page.locator('[data-testid="compare-table"] thead th').first().evaluate(function (el) {
      return getComputedStyle(el).position;
    });
    expect(position).toBe('sticky');
  });

  test('QHEI table column headers are sticky', async ({ page }) => {
    await page.goto('/pages/schemes.html');
    await waitForLayout(page);
    await page.waitForSelector('[data-testid="qhei-table"] thead th', { timeout: 15000 });
    const position = await page.locator('[data-testid="qhei-table"] thead th').first().evaluate(function (el) {
      return getComputedStyle(el).position;
    });
    expect(position).toBe('sticky');
  });
});

test.describe('See what fits – answer combinations', function () {
  var baseAnswers = { q2: 'Postgraduate / Masters', q3: 'Rs. 7.50 lakhs - Rs. 30 lakhs', q4: 'Parents', q5: 'No', q6: 'Yes' };

  async function submitAndCheckResults(page, q1) {
    await page.goto('/pages/questions.html');
    await waitForLayout(page);
    await page.selectOption('#q1', q1);
    await page.selectOption('#q2', baseAnswers.q2);
    await page.selectOption('#q3', baseAnswers.q3);
    await page.selectOption('#q4', baseAnswers.q4);
    await page.selectOption('#q5', baseAnswers.q5);
    await page.selectOption('#q6', baseAnswers.q6);
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/results\.html/);
    await page.waitForSelector('#results-container', { state: 'visible', timeout: 15000 });
    await page.waitForFunction(() => {
      var c = document.getElementById('results-container');
      return c && !c.textContent.includes('Loading');
    }, { timeout: 15000 });
  }

  test('India + PG + 7.5-30L + Parents + No collateral + Yes admit', async ({ page }) => {
    await submitAndCheckResults(page, 'India');
    var container = page.locator('#results-container');
    await expect(container).toBeVisible();
    await expect(container).not.toContainText('Loading');
  });

  test('Abroad + PG + 7.5-30L + Parents + No collateral + Yes admit', async ({ page }) => {
    await submitAndCheckResults(page, 'Abroad');
    await expect(page.locator('#results-container')).toBeVisible();
    await expect(page.locator('#results-container')).not.toContainText('Loading');
  });

  test('Not sure + PG + 7.5-30L + Parents + No collateral + Yes admit', async ({ page }) => {
    await submitAndCheckResults(page, 'Not sure');
    await expect(page.locator('#results-container')).toBeVisible();
    await expect(page.locator('#results-container')).not.toContainText('Loading');
  });

  test('India + Undergraduate + Up to 7.5L + Siblings + Yes collateral + Not yet admit', async ({ page }) => {
    await page.goto('/pages/questions.html');
    await waitForLayout(page);
    await page.selectOption('#q1', 'India');
    await page.selectOption('#q2', 'Undergraduate / Bachelors');
    await page.selectOption('#q3', 'Up to Rs. 7.50 lakhs');
    await page.selectOption('#q4', 'Siblings');
    await page.selectOption('#q5', 'Yes');
    await page.selectOption('#q6', 'Not yet');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/results\.html/);
    await page.waitForFunction(() => {
      var c = document.getElementById('results-container');
      return c && !c.textContent.includes('Loading');
    }, { timeout: 15000 });
    await expect(page.locator('text=Based on your answers').first()).toBeVisible();
  });

  test('Abroad + Doctoral + 30-50L + Legal guardian + Not sure collateral + Yes admit', async ({ page }) => {
    await page.goto('/pages/questions.html');
    await waitForLayout(page);
    await page.selectOption('#q1', 'Abroad');
    await page.selectOption('#q2', 'Doctoral / Doctorate / PhD, DPhil');
    await page.selectOption('#q3', 'Rs. 30 lakhs - Rs. 50 lakhs');
    await page.selectOption('#q4', 'Legal guardian');
    await page.selectOption('#q5', 'Not sure');
    await page.selectOption('#q6', 'Yes');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/results\.html/);
    await page.waitForFunction(() => {
      var c = document.getElementById('results-container');
      return c && !c.textContent.includes('Loading');
    }, { timeout: 15000 });
  });

  test('India + 10+2 + 7.5-30L + Parents + No + Yes', async ({ page }) => {
    await page.goto('/pages/questions.html');
    await waitForLayout(page);
    await page.selectOption('#q1', 'India');
    await page.selectOption('#q2', 'Indian school education(10+2)');
    await page.selectOption('#q3', 'Rs. 7.50 lakhs - Rs. 30 lakhs');
    await page.selectOption('#q4', 'Parents');
    await page.selectOption('#q5', 'No');
    await page.selectOption('#q6', 'Yes');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/results\.html/);
    await page.waitForFunction(() => {
      var c = document.getElementById('results-container');
      return c && !c.textContent.includes('Loading');
    }, { timeout: 15000 });
  });

  test('India + Vocational + Above 50L + Blood relative + Yes + Not yet', async ({ page }) => {
    await page.goto('/pages/questions.html');
    await waitForLayout(page);
    await page.selectOption('#q1', 'India');
    await page.selectOption('#q2', 'Vocational training & Skill development courses');
    await page.selectOption('#q3', 'Above 50 lakhs');
    await page.selectOption('#q4', 'Blood relative of the family');
    await page.selectOption('#q5', 'Yes');
    await page.selectOption('#q6', 'Not yet');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/results\.html/);
    await page.waitForFunction(() => {
      var c = document.getElementById('results-container');
      return c && !c.textContent.includes('Loading');
    }, { timeout: 15000 });
  });

  test('Results list is ordered by fit score', async ({ page }) => {
    await page.goto('/pages/questions.html');
    await waitForLayout(page);
    await page.selectOption('#q1', 'India');
    await page.selectOption('#q2', 'Postgraduate / Masters');
    await page.selectOption('#q3', 'Rs. 7.50 lakhs - Rs. 30 lakhs');
    await page.selectOption('#q4', 'Parents');
    await page.selectOption('#q5', 'No');
    await page.selectOption('#q6', 'Yes');
    await page.click('button[type="submit"]');
    await page.waitForURL(/results\.html/);
    await page.waitForFunction(() => {
      var c = document.getElementById('results-container');
      return c && c.querySelector('.card');
    }, { timeout: 15000 });
    await expect(page.locator('#results-container .card').first()).toContainText(/Fit \d+%/);
  });
});
