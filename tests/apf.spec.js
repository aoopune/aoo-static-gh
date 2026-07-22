// @ts-check
const { test, expect } = require("@playwright/test");

async function waitForApfData(page) {
  await page.waitForFunction(() => {
    const form = document.getElementById("apf-search-form");
    return form && form.dataset.ready === "true";
  }, null, { timeout: 30000 });
}

async function searchKnownProject(page) {
  await page.goto("/pages/project-approvals.html");
  await waitForApfData(page);
  await page.getByLabel("Developer / Builder").fill("GOLDLEAF REALETORS");
  await page.getByLabel("Project", { exact: true }).fill("1 GOLD LEAF");
  await page.getByLabel("Area", { exact: true }).fill("Warje");
  await page.getByLabel("Area", { exact: true }).press("Enter");
  await page.waitForSelector('[data-testid="apf-result-row"]', { timeout: 15000 });
}

test.describe("Project Bank Finder", () => {
  test("finds matching banks through all three inputs", async ({ page }) => {
    await searchKnownProject(page);
    const firstRow = page.locator('[data-testid="apf-result-row"]').first();
    await expect(firstRow).toContainText("Axis Bank");
    await expect(firstRow).toContainText("GOLDLEAF REALETORS");
    await expect(firstRow).toContainText("1 GOLD LEAF");
    await expect(firstRow).toContainText("Warje");
  });

  test("uses a borderless bank-first table", async ({ page }) => {
    await searchKnownProject(page);
    await expect(page.locator(".apf-table th")).toHaveText([
      "Bank name",
      "Project",
      "Developer / Builder",
      "Area"
    ]);
    await expect(page.locator('[data-testid="apf-result-row"]').first().locator("td")).toHaveText([
      "Axis Bank",
      "1 GOLD LEAF",
      "GOLDLEAF REALETORS",
      "Warje"
    ]);
    const borderWidths = await page.locator(".apf-table td").first().evaluate((cell) => {
      const style = getComputedStyle(cell);
      return [
        style.borderTopWidth,
        style.borderRightWidth,
        style.borderBottomWidth,
        style.borderLeftWidth
      ];
    });
    expect(borderWidths).toEqual(["0px", "0px", "0px", "0px"]);
  });

  test("finds matches with any one detail", async ({ page }) => {
    await page.goto("/pages/project-approvals.html");
    await waitForApfData(page);
    await page.getByLabel("Project", { exact: true }).fill("1 GOLD LEAF");
    await page.getByRole("button", { name: "Find banks" }).click();
    await page.waitForSelector('[data-testid="apf-result-row"]', { timeout: 15000 });
    await expect(page.locator('[data-testid="apf-result-row"]').first()).toContainText(
      "1 GOLD LEAF"
    );
  });

  test("asks for at least one detail", async ({ page }) => {
    await page.goto("/pages/project-approvals.html");
    await waitForApfData(page);
    await page.getByRole("button", { name: "Find banks" }).click();
    await expect(page.locator("#apf-status")).toContainText(
      "Enter a project, developer, or area"
    );
  });

  test("shows matching suggestions only after typing", async ({ page }) => {
    await page.goto("/pages/project-approvals.html");
    await waitForApfData(page);
    const projectInput = page.getByLabel("Project", { exact: true });
    const projectOptions = page.locator("#apf-project-options");

    await projectInput.click();
    await expect(projectOptions).toBeHidden();

    await projectInput.fill("gold");
    await expect(projectOptions).toBeVisible();
    await expect(projectOptions.getByRole("option").first()).toContainText(/gold/i);
    const listHeight = await projectOptions.evaluate((list) => list.clientHeight);
    expect(listHeight).toBeLessThanOrEqual(228);
  });

  test("shows one circular indicator for 500ms before softly revealing results", async ({ page }) => {
    await page.goto("/pages/project-approvals.html");
    await waitForApfData(page);
    await page.getByLabel("Project", { exact: true }).fill("1 GOLD LEAF");

    await page.getByRole("button", { name: "Find banks" }).click();
    await expect(page.getByRole("button", { name: "Finding banks" })).toBeDisabled();
    await expect(page.locator(".apf-result-section")).toHaveAttribute("aria-busy", "true");
    await expect(page.locator("#apf-activity")).toBeVisible();
    await expect(page.locator(".apf-activity-ring")).toHaveCount(1);
    await expect(page.getByLabel("Project", { exact: true })).toBeVisible();

    await expect(page.locator('[data-testid="apf-result-row"]').first()).toBeVisible({
      timeout: 3000
    });
    await expect(page.locator("#apf-activity")).toBeHidden();
    await expect(page.locator(".apf-table-scroll")).toHaveClass(/is-revealing/);
    await expect(page.locator(".apf-result-section")).toHaveAttribute("aria-busy", "false");
  });

  test("fits a phone viewport without page overflow", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/pages/project-approvals.html");
    await waitForApfData(page);
    const overflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(overflow).toBe(false);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByRole("button", { name: "Find banks" })).toBeVisible();
  });

  test("keeps education-loan pages out of the visible navigation", async ({ page }) => {
    await page.goto("/pages/project-approvals.html");
    await waitForApfData(page);
    await expect(page.locator('nav a[href*="education-loan"]')).toHaveCount(0);
    await expect(page.locator('nav a[href$="compare.html"]')).toHaveCount(0);
  });
});
