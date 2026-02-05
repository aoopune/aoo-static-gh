// Playwright E2E tests – run with: npx playwright test
// Base URL: set BASE_URL env (e.g. http://localhost:8080 or https://user.github.io/applyonlyonce)

const baseURL = process.env.BASE_URL || 'http://localhost:8080';

module.exports = {
  testDir: '.',
  timeout: 15000,
  use: {
    baseURL: baseURL.endsWith('/') ? baseURL : baseURL + '/',
    trace: 'on-first-retry'
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } }
  ]
};
