// @ts-check
const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;
const pageRegistry = require('../data/redesigned-pages.json');
const globalNav = require('../data/global-nav.json');

/** Full geometry matrix — keep cost bounded; calculators covered by contract lint. */
const matrixPaths = new Set([
  '/',
  '/pages/learn-more.html',
  '/pages/about.html',
  '/privacy-policy.html',
  '/terms-of-use.html',
  '/sitemap.html',
  '/pages/guide.html',
  '/pages/guide-documents.html',
  '/pages/project-approvals.html',
  '/pages/tax-benefits.html',
  '/pages/concessions.html',
  '/pages/home-loan-insurance.html',
  '/pages/property-home-insurance.html',
  '/pages/credit-life-insurance.html',
  '/pages/home-loan-complaints.html'
]);

const redesignedPages = pageRegistry
  .filter(function (entry) {
    return matrixPaths.has(entry.url);
  })
  .map(function (entry) {
    return { path: entry.url, heading: entry.heading };
  });

const sectionJumpPages = [
  '/pages/guide.html',
  '/pages/guide-documents.html',
  '/pages/tax-benefits.html',
  '/pages/concessions.html',
  '/pages/home-loan-insurance.html',
  '/pages/property-home-insurance.html',
  '/pages/credit-life-insurance.html',
  '/pages/home-loan-complaints.html'
];

const viewportMatrix = [
  { name: 'minimum-phone', width: 320, height: 568 },
  { name: 'phone', width: 375, height: 667 },
  { name: 'large-phone', width: 393, height: 852 },
  { name: 'tablet-portrait', width: 768, height: 1024 },
  { name: 'guide-boundary', width: 834, height: 1112 },
  { name: 'tablet-landscape', width: 1024, height: 768 },
  { name: 'short-desktop', width: 1280, height: 720 },
  { name: 'desktop', width: 1440, height: 900 }
];

const primaryControlSelector = [
  '.globalnav-compact-toggle',
  '.globalnav-link:not(.globalnav-link-brand)',
  '.globalnav-flyout-trigger',
  '.localnav-toggle',
  '.localnav-cta',
  '.home-hero-cta',
  '.lm-cta',
  '.guide-jump a',
  '.mag-index-link',
  '.guide-flip-link',
  '.guide-seg-btn',
  '.guide-calc-submit',
  '.apf-submit',
  '.apf-more',
  '.guide-disclosure summary',
  '.sitemap-group a'
].join(',');

/* Desktop may use the Standard visual tier (~36px) for jumps and segments. */
const standardTierSelector = ['.guide-jump a', '.mag-index-link', '.guide-seg-btn'].join(',');
const STANDARD_MIN = 35.5;
const TOUCH_MIN = 43.5;

/** Contents rail — editorial `.mag-index` (legacy `.guide-jump` kept for older markup). */
const sectionNavSelector = '.mag-index, .guide-jump';
function sectionNavHref(href) {
  return '.mag-index a[href="' + href + '"], .guide-jump a[href="' + href + '"]';
}

const legacyEducationRoutes = [
  'education-loan.html',
  'compare.html',
  'quick-overview.html',
  'schemes.html',
  'faq.html',
  'document-checklist.html'
];

async function gotoReady(page, path) {
  await page.goto(path, { waitUntil: 'domcontentloaded' });
  await page.locator('.globalnav.shroffin-nav-ready').waitFor({ state: 'attached' });
  await page.waitForFunction(function () {
    var needsGuide = Array.prototype.some.call(document.scripts, function (script) {
      return /shroffin-guide\.js/.test(script.src || '');
    });
    return !needsGuide || window.__shroffinGuideLoaded === true;
  });
  await page.locator('body').evaluate(function () {
    return document.fonts && document.fonts.ready;
  });
}

async function expectNoPageOverflow(page) {
  const overflow = await page.evaluate(function () {
    return Math.max(
      document.documentElement.scrollWidth - document.documentElement.clientWidth,
      document.body.scrollWidth - document.body.clientWidth
    );
  });
  expect(overflow).toBeLessThanOrEqual(1);
}

async function expectPrimaryTargets(page) {
  const tooSmall = await page.locator(primaryControlSelector).evaluateAll(
    function (nodes, options) {
      const width = window.innerWidth;
      return nodes
        .filter(function (node) {
          const style = getComputedStyle(node);
          const rect = node.getBoundingClientRect();
          return (
            style.display !== 'none' &&
            style.visibility !== 'hidden' &&
            rect.width > 0 &&
            rect.height > 0
          );
        })
        .map(function (node) {
          const rect = node.getBoundingClientRect();
          const isStandardTier =
            node.matches(options.standardSelector) && width >= 834;
          const min = isStandardTier ? options.standardMin : options.touchMin;
          return {
            label:
              node.getAttribute('aria-label') ||
              node.textContent.trim().replace(/\s+/g, ' ').slice(0, 60),
            width: rect.width,
            height: rect.height,
            min: min,
            tier: isStandardTier ? 'standard' : 'touch'
          };
        })
        .filter(function (item) {
          return item.width < item.min || item.height < item.min;
        });
    },
    {
      standardSelector: standardTierSelector,
      standardMin: STANDARD_MIN,
      touchMin: TOUCH_MIN
    }
  );
  expect(tooSmall).toEqual([]);
}

async function expectSharedShell(page, entry) {
  const h1 = page.locator('h1:visible');
  await expect(h1).toHaveCount(1);
  expect((await h1.innerText()).toLowerCase()).toContain(entry.heading.toLowerCase());
  await expect(page.locator('main')).toHaveCount(1);
  await expect(page.locator('footer.site-footer')).toHaveCount(1);
  await expect(page.locator('.site-help-strip')).toHaveCount(1);
  await expect(page.locator('.site-help-strip')).toContainText('Need some help?');
  await expect(
    page.locator('.site-help-strip a.guide-section-link[href="https://wa.me/919112334367"]')
  ).toHaveCount(1);
  await expect(
    page.locator('.site-help-strip a.site-help-strip-phone[href="tel:+919112334367"]')
  ).toHaveText('91123 34367');
  await expect(page.locator('.site-footer-directory')).toHaveCount(1);
  await expect(page.locator('.site-footer-heading')).toHaveCount(5);
  await expect(page.locator('.site-footer')).not.toContainText(
    'Regulators and official resources'
  );
  await expect(page.locator('.site-footer-rule')).toHaveCount(0);
  await expect(page.locator('.site-help-strip')).toHaveCSS('border-top-width', '1px');
  await expect(page.locator('.site-help-strip')).toHaveCSS('border-bottom-width', '1px');
  await expect(page.locator('footer.site-footer')).toHaveCSS('border-top-width', '1px');
  await expect(page.locator('.site-footer-legal')).toHaveCSS('border-top-width', '0px');
  await expect(page.locator('.site-footer-legal')).toHaveCSS('border-bottom-width', '0px');
  await expect(page.locator('.site-footer-tagline')).toHaveCount(0);
  await expect(page.locator('.site-footer-logo')).toHaveCount(0);
  const connectLink = page.locator(
    '.site-footer-group--connect a[href="https://www.linkedin.com/company/shroffin"]'
  );
  await expect(connectLink).toHaveCount(1);
  await expect(connectLink).toHaveText(/LinkedIn/);
  await expect(connectLink).toHaveAttribute('target', '_blank');
  await expect(connectLink).toHaveAttribute('rel', 'noopener noreferrer');
  await expect(page.locator('.site-footer-legal-links > li')).toHaveCount(7);
  await expect(page.locator('.site-footer-legal-links a.guide-section-link')).toHaveCount(
    5
  );
  await expect(
    page.locator('.site-footer-legal-links a.guide-section-link[target="_blank"]')
  ).toHaveCount(5);
  await expect(
    page.locator(
      '.site-footer-legal-links a.guide-section-link[rel="noopener noreferrer"]'
    )
  ).toHaveCount(5);
  await expect(page.locator('.site-footer-legal-links .guide-section-link-arrow')).toHaveCount(
    5
  );
  await expect(page.locator('.site-footer-legal-links .visually-hidden')).toHaveCount(5);
  await expect(page.locator('.site-footer-list a').first()).toHaveCSS('font-weight', '400');
  await expect(page.locator('.site-footer-legal-links a').first()).toHaveCSS(
    'text-decoration-line',
    'none'
  );
  await expect(
    page.locator('.site-footer-legal-links .guide-section-link-arrow').first()
  ).toHaveCSS('opacity', '0');
  await expect(
    page.locator('.site-footer-group[aria-labelledby="footer-company-title"] .site-footer-list')
  ).not.toContainText('Site Map');
  await expect(page.locator('.site-footer-legal-links a[href="/sitemap.html"]')).toHaveCount(1);
  await expect(page.locator('.site-footer-disclaimer-title')).toHaveText('Disclaimer');
  await expect(page.locator('.site-footer-disclaimer p')).toHaveCount(5);
  await expect(page.locator('.site-footer-copy')).toContainText(
    'Copyright © 2026 Shroffin. All rights reserved.'
  );
  await expect(page.locator('meta[name="viewport"]')).toHaveAttribute(
    'content',
    /viewport-fit=cover/
  );

  const navOrder = await page.locator('.globalnav-list > .globalnav-item').evaluateAll(
    function (items) {
      return items
        .filter(function (item) {
          return !item.classList.contains('globalnav-item-brand');
        })
        .map(function (item) {
          return item.textContent.trim().replace(/\s+/g, ' ');
        });
    }
  );
  expect(navOrder).toEqual(globalNav.primaryLabels);

  const exposedLegacy = await page.locator('a[href]').evaluateAll(function (links, routes) {
    return links
      .map(function (link) {
        return new URL(link.href, location.href).pathname;
      })
      .filter(function (pathname) {
        return routes.some(function (route) {
          return pathname.endsWith('/' + route);
        });
      });
  }, legacyEducationRoutes);
  expect(exposedLegacy).toEqual([]);
}

test.describe('redesigned page responsive contract', function () {
  for (const entry of redesignedPages) {
    test(entry.path, async function ({ page }, testInfo) {
      test.skip(
        testInfo.project.name !== 'chromium-responsive',
        'The full geometry matrix runs once in desktop Chromium.'
      );

      for (const viewport of viewportMatrix) {
        await test.step(viewport.name, async function () {
          await page.setViewportSize({ width: viewport.width, height: viewport.height });
          await gotoReady(page, entry.path);
          await expectSharedShell(page, entry);
          await expectNoPageOverflow(page);
          await expectPrimaryTargets(page);
        });
      }
    });
  }

  test('navigation remains usable without JavaScript', async function ({ browser }, testInfo) {
    test.skip(testInfo.project.name !== 'chromium-responsive');
    const context = await browser.newContext({
      baseURL: String(testInfo.project.use.baseURL),
      javaScriptEnabled: false,
      viewport: { width: 320, height: 568 }
    });
    const page = await context.newPage();
    await page.goto('/pages/guide.html', { waitUntil: 'domcontentloaded' });

    await expect(page.locator('.globalnav-flyout')).toHaveCount(globalNav.flyoutIds.length);
    await expect(page.locator('.globalnav-flyout').first()).toBeVisible();
    await expect(page.locator('.localnav-menu')).toBeVisible();
    await expect(page.locator('.localnav-link')).toHaveCount(6);
    await expectNoPageOverflow(page);

    await context.close();
  });
});

test.describe('breakpoints and navigation behavior', function () {
  test('global navigation reacts to enlarged or changed labels', async function ({
    page
  }, testInfo) {
    test.skip(testInfo.project.name !== 'chromium-responsive');
    await page.setViewportSize({ width: 1024, height: 720 });
    await gotoReady(page, '/');
    await expect(page.locator('.globalnav')).not.toHaveClass(/is-compact/);

    await page.locator('.globalnav-list > .globalnav-item').last().evaluate(function (item) {
      var control = item.querySelector('a, button') || item;
      control.textContent =
        'About Shroffin and all independent home loan information '.repeat(5);
      control.style.whiteSpace = 'nowrap';
    });
    await expect(page.locator('.globalnav')).toHaveClass(/is-compact/);
    await expect(page.locator('.globalnav-compact-toggle')).toBeVisible();
  });

  test('Guide local menu switches at 833/834 and owns its scroll', async function ({
    page
  }, testInfo) {
    test.skip(testInfo.project.name !== 'chromium-responsive');

    await page.setViewportSize({ width: 833, height: 480 });
    await gotoReady(page, '/pages/guide.html');
    const toggle = page.locator('.localnav-toggle');
    await expect(toggle).toBeVisible();
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator('.localnav-link')).toHaveCount(6);
    await expect(page.locator('.localnav-link[aria-current="page"]')).toHaveCount(1);
    await expect(page.locator('body')).toHaveClass(/shroffin-scroll-locked/);
    await expect(page.locator('.localnav-menu')).toHaveCSS('overflow-y', 'auto');
    await page.keyboard.press('Escape');
    await expect(toggle).toBeFocused();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await page.setViewportSize({ width: 834, height: 700 });
    await expect(toggle).toBeHidden();
    await expect(page.locator('.localnav-list')).toHaveCSS('display', 'flex');
  });

  test('global compact menu is exclusive, closable, and ordered', async function ({
    page
  }, testInfo) {
    test.skip(testInfo.project.name !== 'chromium-responsive');

    await page.setViewportSize({ width: 375, height: 667 });
    await gotoReady(page, '/pages/guide.html');
    const localToggle = page.locator('.localnav-toggle');
    const globalToggle = page.locator('.globalnav-compact-toggle');

    await expect(page.locator('.globalnav')).toHaveClass(/is-compact/);
    await expect(globalToggle).toBeVisible();

    // At the top: Guide menu keeps the main Shroffin bar.
    await localToggle.click();
    await expect(localToggle).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator('.localnav')).toHaveClass(/is-open-with-global/);
    await expect(page.locator('.globalnav')).toBeVisible();
    await expect(page.locator('.globalnav')).not.toHaveCSS('visibility', 'hidden');

    await page.keyboard.press('Escape');
    await expect(localToggle).toHaveAttribute('aria-expanded', 'false');
    await expect(localToggle).toBeFocused();
    await expect(globalToggle).toBeVisible();

    // After the main bar has scrolled away: opening Guide must not bring it back.
    await page.evaluate(function () {
      window.scrollTo(0, Math.max(window.innerHeight, 900));
    });
    await page.waitForFunction(function () {
      var gn = document.querySelector('.globalnav');
      return gn && gn.getBoundingClientRect().bottom <= 1;
    });
    await localToggle.click();
    await expect(localToggle).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator('.localnav')).not.toHaveClass(/is-open-with-global/);
    await expect(page.locator('.globalnav')).toHaveCSS('visibility', 'hidden');

    await page.keyboard.press('Escape');
    await expect(localToggle).toHaveAttribute('aria-expanded', 'false');
    await expect(page.locator('.globalnav')).not.toHaveCSS('visibility', 'hidden');

    await globalToggle.click();
    await expect(globalToggle).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator('.globalnav-compact-tray')).toHaveCSS(
      'block-size',
      /^(?!0px$).+/
    );

    const menuLabels = await page
      .locator('.globalnav-compact-panel--root .globalnav-compact-list > li')
      .evaluateAll(function (items) {
        return items.map(function (item) {
          return (item.querySelector('button, a') || item).textContent.trim();
        });
      });
    expect(menuLabels.slice(0, globalNav.compactRootLabels.length)).toEqual(
      globalNav.compactRootLabels
    );

    await page.locator('.globalnav-compact-item--drill[data-panel-target="guide"]').click();
    await expect(page.locator('.globalnav')).toHaveClass(/compact-drilled/);
    await expect(page.locator('#globalnav-compact-panel-guide')).toBeVisible();
    await expect(page.locator('.globalnav-compact-back')).toBeVisible();
    await page.locator('.globalnav-compact-back').click();
    await expect(page.locator('.globalnav')).not.toHaveClass(/compact-drilled/);

    await page.keyboard.press('Escape');
    await expect(globalToggle).toBeFocused();
    await expect(globalToggle).toHaveAttribute('aria-expanded', 'false');
  });

  test('desktop flyout scrolls inside short viewports', async function ({ page }, testInfo) {
    test.skip(testInfo.project.name !== 'chromium-responsive');

    await page.setViewportSize({ width: 1024, height: 480 });
    await gotoReady(page, '/pages/guide.html');
    await page.locator('#nav-guide-trigger').click();
    await expect(page.locator('#nav-guide-flyout')).toHaveCSS('overflow-y', 'auto');
    const geometry = await page.locator('#nav-guide-flyout').evaluate(function (flyout) {
      const rect = flyout.getBoundingClientRect();
      return {
        bottom: rect.bottom,
        viewport: innerHeight,
        overflowY: getComputedStyle(flyout).overflowY
      };
    });
    expect(geometry.bottom).toBeLessThanOrEqual(geometry.viewport + 1);
    expect(geometry.overflowY).toBe('auto');
    await page.keyboard.press('Escape');
    await expect(page.locator('#nav-guide-trigger')).toBeFocused();
  });

  test('phone section nav exposes every destination in one tap', async function ({
    page
  }, testInfo) {
    test.skip(testInfo.project.name !== 'chromium-responsive');

    await page.setViewportSize({ width: 320, height: 568 });
    await gotoReady(page, '/pages/guide.html');

    const menu = page.locator(sectionNavSelector).first();
    await expect(menu).toBeVisible();
    const links = menu.locator('a[href^="#"]');
    expect(await links.count()).toBeGreaterThanOrEqual(4);
    for (const link of await links.all()) {
      await expect(link).toBeVisible();
      expect((await link.boundingBox()).height).toBeGreaterThanOrEqual(43.5);
    }

    const columns = await menu.evaluate(function (node) {
      const list = node.querySelector('.mag-index-list') || node;
      return getComputedStyle(list).gridTemplateColumns.split(/\s+/).filter(Boolean).length;
    });
    expect(columns).toBe(1);

    await expect(menu.locator('[aria-current="true"]')).toHaveCount(0);
    const chosen = links.nth(1);
    await chosen.click();
    await expect(chosen).toHaveAttribute('aria-current', 'true', { timeout: 4000 });
    await expect(menu.locator('[aria-current="true"]')).toHaveCount(1);
    await expectNoPageOverflow(page);
  });

  test('every section jump lands below the sticky bars on every layout', async function ({
    page
  }, testInfo) {
    test.skip(testInfo.project.name !== 'chromium-responsive');
    test.setTimeout(180000);

    for (const viewport of [
      { name: 'phone', width: 375, height: 667 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'desktop', width: 1280, height: 720 }
    ]) {
      await test.step(viewport.name, async function () {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });

        for (const path of sectionJumpPages) {
          await gotoReady(page, path);
          const hrefs = await page
            .locator('.mag-index a[href^="#"], .guide-jump a[href^="#"]')
            .evaluateAll(function (links) {
              return links.map(function (link) {
                return link.getAttribute('href');
              });
            });

          for (const href of hrefs) {
            const link = page.locator(sectionNavHref(href));
            const target = page.locator(href);
            await link.click();

            await expect(link).toHaveAttribute('aria-current', 'true');
            await expect
              .poll(async function () {
                return page.evaluate(function (sel) {
                  const target = document.querySelector(sel);
                  if (!target) return { ok: false };
                  const top = target.getBoundingClientRect().top;
                  const margin =
                    parseFloat(getComputedStyle(target).scrollMarginTop) || 120;
                  return {
                    ok: Math.abs(top - margin) <= 4,
                    top: top,
                    margin: margin
                  };
                }, href);
              }, { timeout: 2500 })
              .toMatchObject({ ok: true });
            await expect(target).toBeFocused({ timeout: 2500 });
          }
        }
      });
    }
  });

  test('direct hashes and browser history keep the correct section active', async function ({
    page
  }, testInfo) {
    test.skip(testInfo.project.name !== 'chromium-responsive');

    await page.setViewportSize({ width: 375, height: 667 });
    await gotoReady(page, '/pages/guide.html#emi');
    await expect(page.locator('.mag-index a[href="#emi"]')).toHaveAttribute(
      'aria-current',
      'true'
    );

    await page.locator('.mag-index a[href="#rates"]').click();
    await expect(page).toHaveURL(/#rates$/, { timeout: 4000 });
    await page.locator('.mag-index a[href="#charges"]').click();
    await expect(page).toHaveURL(/#charges$/, { timeout: 4000 });
    await page.goBack();
    await expect(page).toHaveURL(/#rates$/, { timeout: 4000 });
    await expect(page.locator('.mag-index a[href="#rates"]')).toHaveAttribute(
      'aria-current',
      'true'
    );
    await expect(page.locator('#rates')).toBeFocused();
  });
});

test.describe('adaptive component behavior', function () {
  test('expand panels keep the explanation visible when open', async function ({
    page
  }, testInfo) {
    test.skip(testInfo.project.name !== 'chromium-responsive');

    await page.setViewportSize({ width: 375, height: 667 });
    await gotoReady(page, '/pages/guide.html');
    const flip = page.locator('#borrow-flip');
    const front = flip.locator('.guide-flip-face--front');
    const back = flip.locator('.guide-flip-face--back');
    await expect(back).toHaveAttribute('aria-hidden', 'true');
    await front.locator('[data-flip]').click();
    await expect(flip).toHaveClass(/is-flipped/);
    await expect(front).toHaveAttribute('aria-hidden', 'false');
    await expect(back).toHaveAttribute('aria-hidden', 'false');
    await expect(front).toBeVisible();
    await expect(back).toBeVisible();
  });

  test('Privacy tables are named keyboard scroll regions', async function ({
    page
  }, testInfo) {
    test.skip(testInfo.project.name !== 'chromium-responsive');

    await page.setViewportSize({ width: 320, height: 568 });
    await gotoReady(page, '/privacy-policy.html');
    await expect(page.locator('.table-wrap')).toHaveCount(5);
    for (const region of await page.locator('.table-wrap').all()) {
      await expect(region).toHaveAttribute('tabindex', '0');
      await expect(region).toHaveAttribute('role', 'region');
      await expect(region).toHaveAttribute('aria-label', /table/i);
    }
    expect(await page.locator('.shroffin-key-value-table').count()).toBeGreaterThanOrEqual(1);
  });

  test('footer links reveal colour and external arrows on interaction', async function ({
    page
  }, testInfo) {
    test.skip(testInfo.project.name !== 'chromium-responsive');

    await page.setViewportSize({ width: 1280, height: 720 });
    await gotoReady(page, '/');
    const directoryAlignment = await page.locator('.site-footer-directory').evaluate(function (
      directory
    ) {
      const groups = directory.children;
      const first = groups[0].getBoundingClientRect();
      const last = groups[groups.length - 1].getBoundingClientRect();
      const rail = directory.getBoundingClientRect();
      return {
        columnCount: groups.length,
        firstAtLeft: Math.abs(first.left - rail.left),
        lastAtRight: Math.abs(last.right - rail.right)
      };
    });
    expect(directoryAlignment.columnCount).toBe(5);
    expect(directoryAlignment.firstAtLeft).toBeLessThanOrEqual(1);
    expect(directoryAlignment.lastAtRight).toBeLessThanOrEqual(1);

    const bottomAlignment = await page.locator('.site-footer-bottom-row').evaluate(function (
      row
    ) {
      const copy = row.querySelector('.site-footer-copy');
      const items = Array.prototype.slice.call(
        row.querySelectorAll('.site-footer-legal-links > li')
      );
      const firstItem = items[0].getBoundingClientRect();
      const lastItem = items[items.length - 1].getBoundingClientRect();
      const itemTops = items.map(function (li) {
        return Math.round(li.getBoundingClientRect().top);
      });
      return {
        copyAboveOrLevel: copy.getBoundingClientRect().top <= firstItem.top + 1,
        linkRowCount: Array.from(new Set(itemTops)).length,
        lastWithinRow: lastItem.right <= row.getBoundingClientRect().right + 1
      };
    });
    expect(bottomAlignment.copyAboveOrLevel).toBe(true);
    expect(bottomAlignment.linkRowCount).toBe(1);
    expect(bottomAlignment.lastWithinRow).toBe(true);

    const linkedin = page.locator(
      '.site-footer-group--connect a.guide-section-link'
    );
    const linkedinArrow = linkedin.locator('.guide-section-link-arrow');
    await expect(linkedinArrow).toHaveCSS('opacity', '0');
    await linkedin.hover();
    await expect(linkedinArrow).toHaveCSS('opacity', '1');

    const officialLink = page
      .locator('.site-footer-legal-links a.guide-section-link')
      .first();
    const officialArrow = officialLink.locator('.guide-section-link-arrow');
    await expect(officialArrow).toHaveCSS('opacity', '0');
    await officialLink.hover();
    await expect(officialLink).toHaveCSS('color', 'rgb(0, 91, 181)');
    await expect(officialArrow).toHaveCSS('opacity', '1');

    const directoryLink = page.locator('.site-footer-list a').first();
    await directoryLink.hover();
    await expect(directoryLink).toHaveCSS('color', 'rgb(0, 91, 181)');

    const bottomLink = page.locator('.site-footer-legal-links a').first();
    await bottomLink.hover();
    await expect(bottomLink).toHaveCSS('color', 'rgb(0, 91, 181)');

    const navLink = page.locator('.globalnav-link').first();
    await navLink.hover();
    await expect(navLink).toHaveCSS('color', 'rgb(0, 91, 181)');
  });

  test('footer collapses into an Apple-style accordion on small screens', async function ({
    page
  }, testInfo) {
    test.skip(testInfo.project.name !== 'chromium-responsive');

    await page.setViewportSize({ width: 375, height: 720 });
    await gotoReady(page, '/');

    const footer = page.locator('.site-footer');
    await expect(footer).toHaveClass(/site-footer-accordion/);

    const guideToggle = page.locator('#footer-guide-title .site-footer-accordion-toggle');
    await expect(guideToggle).toBeVisible();
    await expect(guideToggle).toHaveAttribute('aria-expanded', 'false');

    const guideList = page.locator('#footer-guide-title')
      .locator('xpath=following-sibling::*[contains(@class,"site-footer-panel")]')
      .locator('.site-footer-list');
    const collapsedHeight = await guideList.evaluate(function (el) {
      return el.getBoundingClientRect().height;
    });
    expect(collapsedHeight).toBeLessThanOrEqual(1);

    await guideToggle.click();
    await expect(guideToggle).toHaveAttribute('aria-expanded', 'true');
    await expect
      .poll(async function () {
        return guideList.evaluate(function (el) {
          return el.getBoundingClientRect().height;
        });
      })
      .toBeGreaterThan(40);
    await expect(page.locator('.site-footer-list a', { hasText: 'Overview' })).toBeVisible();

    await page.setViewportSize({ width: 1280, height: 900 });
    await expect(footer).not.toHaveClass(/site-footer-accordion/);
    await expect(page.locator('#footer-guide-title .site-footer-accordion-icon')).toBeHidden();
    await expect(page.locator('.site-footer-list a', { hasText: 'Overview' })).toBeVisible();
  });

  test('primary elevated CTAs keep a 44px touch floor on phones', async function ({
    page
  }, testInfo) {
    test.skip(testInfo.project.name !== 'chromium-responsive');

    await page.setViewportSize({ width: 375, height: 667 });
    await gotoReady(page, '/');
    await expect(page.locator('.home-hero-cta').first()).toBeVisible();
    await expectPrimaryTargets(page);
  });
});

test.describe('accessibility and motion', function () {
  test('representative pages have no serious Axe violations', async function ({
    page
  }, testInfo) {
    test.skip(testInfo.project.name !== 'chromium-responsive');

    for (const path of ['/', '/pages/guide.html', '/privacy-policy.html']) {
      await page.setViewportSize({ width: 393, height: 852 });
      await gotoReady(page, path);
      await page.waitForTimeout(1600);
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
        .analyze();
      const serious = results.violations.filter(function (violation) {
        return violation.impact === 'serious' || violation.impact === 'critical';
      });
      expect(serious, path).toEqual([]);
    }
  });

  test('reduced motion settles shared reveals', async function ({ page }, testInfo) {
    test.skip(testInfo.project.name !== 'chromium-responsive');

    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.setViewportSize({ width: 375, height: 667 });
    await gotoReady(page, '/pages/guide.html');
    const transition = await page.locator('.guide-moment').first().evaluate(function (node) {
      return {
        opacity: getComputedStyle(node).opacity,
        duration: getComputedStyle(node).transitionDuration
      };
    });
    expect(transition.opacity).toBe('1');
    expect(parseFloat(transition.duration)).toBeLessThanOrEqual(0.001);
  });
});

test('cross-browser responsive smoke', async function ({ page }, testInfo) {
  test.skip(
    testInfo.project.name === 'chromium-responsive',
    'Covered by the full Chromium matrix.'
  );

  const smokePaths = new Set(['/', '/sitemap.html', '/privacy-policy.html', '/terms-of-use.html']);
  const smokePages = redesignedPages.filter(function (entry) {
    return smokePaths.has(entry.path);
  });

  for (const entry of smokePages) {
    await gotoReady(page, entry.path);
    await expectSharedShell(page, entry);
    await expectNoPageOverflow(page);
  }
});
