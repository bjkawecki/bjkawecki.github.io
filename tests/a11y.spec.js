// @ts-check
const { test, expect } = require("@playwright/test");
const AxeBuilder = require("@axe-core/playwright").default;

const pages = [
  "/",
  "/blog/lernsoftware-vermarkten-I-ein-ungewoehnliches-produkt.html",
  "/ueber-mich/",
];

/**
 * @param {import('@playwright/test').Page} page
 * @param {'light' | 'dark'} theme
 */
async function applyTheme(page, theme) {
  await page.addInitScript((mode) => {
    localStorage.theme = mode;
  }, theme);
}

/**
 * @param {import('@playwright/test').Page} page
 * @param {string} path
 * @param {'light' | 'dark'} theme
 */
async function scanPage(page, path, theme) {
  await applyTheme(page, theme);
  await page.goto(path, { waitUntil: "networkidle" });
  await page.evaluate((mode) => {
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, theme);

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();

  const contrast = results.violations.filter((v) => v.id === "color-contrast");
  const summary = contrast.map((v) => ({
    id: v.id,
    help: v.help,
    nodes: v.nodes.map((n) => ({
      target: n.target,
      html: n.html.slice(0, 120),
      failureSummary: n.failureSummary,
    })),
  }));

  expect(contrast, `color-contrast (${theme}) on ${path}: ${JSON.stringify(summary, null, 2)}`).toEqual([]);
}

for (const path of pages) {
  test(`WCAG color-contrast light: ${path}`, async ({ page }) => {
    await scanPage(page, path, "light");
  });

  test(`WCAG color-contrast dark: ${path}`, async ({ page }) => {
    await scanPage(page, path, "dark");
  });
}
