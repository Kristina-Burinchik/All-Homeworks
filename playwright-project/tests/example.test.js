const { test, expect } = require("@playwright/test");

test("Проверка заголовка главной страницы", async ({ page }) => {
  await page.goto("https://playwright.dev");
  await page.waitForLoadState("networkidle");
  const title = await page.title();
  console.log("Фактический заголовок:", title);
  expect(title).toBe(
    "Fast and reliable end-to-end testing for modern web apps | Playwright"
  );
});

test('Проверка наличия кнопки "Начать"', async ({ page }) => {
  await page.goto("https://playwright.dev");
  const isVisible = await page.isVisible("text=Get Started");
  expect(isVisible).toBe(true);
});

test("Проверка видимости ссылки на GitHub", async ({ page }) => {
  await page.goto("https://playwright.dev");
  const isVisible = await page.isVisible("text=GitHub");
  expect(isVisible).toBe(true);
});

test('Проверка перехода по кнопке "Начать"', async ({ page }) => {
  await page.goto("https://playwright.dev");
  await page.click("text=Get Started");
  const title = await page.title();
  expect(title).toBe(
    "Fast and reliable end-to-end testing for modern web apps | Playwright"
  );
});

test('Проверка наличия заголовка "Community"', async ({ page }) => {
  await page.goto("https://playwright.dev");
  await page.waitForLoadState("networkidle");
  const communityHeaderVisible = await page.isVisible("text=Community");
  expect(communityHeaderVisible).toBe(true);
});
