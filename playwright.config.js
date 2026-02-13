// Playwright config – BASE_URL for local or deployed site
const PORT = process.env.PORT || 8765;
const baseURL = process.env.BASE_URL || 'http://localhost:' + PORT;
// Use origin without trailing slash so goto('/') resolves to baseURL + '/'
const useBaseURL = baseURL.replace(/\/$/, '');

module.exports = {
  testDir: 'tests',
  testMatch: '**/*.spec.js',
  timeout: 20000,
  use: {
    baseURL: useBaseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },
  webServer: process.env.CI ? undefined : {
    command: 'node scripts/serve.js',
    cwd: require('path').resolve(__dirname),
    url: 'http://localhost:' + PORT,
    reuseExistingServer: true,
    env: { PORT: String(PORT) }
  },
  projects: [{ name: 'chromium', use: { browserName: 'chromium' } }]
};
