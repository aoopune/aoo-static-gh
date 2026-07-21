// Authoritative Playwright config for redesigned and legacy suites.
const { devices } = require('@playwright/test');
const path = require('path');

const PORT = process.env.PORT || 8765;
const baseURL = process.env.BASE_URL || 'http://localhost:' + PORT;
const useBaseURL = baseURL.replace(/\/$/, '');
const legacyTests = process.env.LEGACY_TESTS === '1';

module.exports = {
  testDir: 'tests',
  testMatch: legacyTests
    ? 'ui.spec.js'
    : ['shroffin-responsive.spec.js', 'apf.spec.js'],
  timeout: 30000,
  expect: { timeout: 7000 },
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : undefined,
  reporter: process.env.CI
    ? [['line'], ['html', { outputFolder: 'playwright-report', open: 'never' }]]
    : 'line',
  use: {
    baseURL: useBaseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  webServer: {
    command: 'node scripts/serve.js',
    cwd: path.resolve(__dirname),
    url: 'http://localhost:' + PORT,
    reuseExistingServer: !process.env.CI,
    timeout: 30000,
    env: { PORT: String(PORT) }
  },
  projects: [
    {
      name: 'chromium-responsive',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'chromium-touch',
      grep: /cross-browser responsive smoke/,
      use: { ...devices['Pixel 7'] }
    },
    {
      name: 'webkit-iphone',
      grep: /cross-browser responsive smoke/,
      use: { ...devices['iPhone 15'] }
    },
    {
      name: 'webkit-ipad',
      grep: /cross-browser responsive smoke/,
      use: { ...devices['iPad (gen 7)'] }
    },
    {
      name: 'firefox-responsive',
      grep: /cross-browser responsive smoke/,
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'chromium-reduced-motion',
      grep: /cross-browser responsive smoke/,
      use: {
        ...devices['Desktop Chrome'],
        reducedMotion: 'reduce'
      }
    },
    {
      name: 'chromium-coarse-pointer',
      grep: /cross-browser responsive smoke/,
      use: {
        browserName: 'chromium',
        viewport: { width: 393, height: 852 },
        hasTouch: true,
        isMobile: true,
        deviceScaleFactor: 2
      }
    }
  ]
};
