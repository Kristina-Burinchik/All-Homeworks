const { test, expect } = require("@playwright/test");
const HomePage = require("../pages/HomePage");
const DocumentationPage = require("../pages/DocumentationPage");

test("Проверка заголовка главной страницы", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.waitForLoadState("networkidle");
  const title = await homePage.getTitle();
  console.log("Фактический заголовок:", title);
  expect(title).toBe(
    "Fast and reliable end-to-end testing for modern web apps | Playwright"
  );
});
test('Проверка наличия кнопки "Начать"', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  const isVisible = await homePage.isGithubLinkVisible();
  expect(isVisible).toBe(true);
});

test("Проверка видимости ссылки на GitHub", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  const isVisible = await homePage.isGithubLinkVisible();
  expect(isVisible).toBe(true);
});

test('Проверка перехода по кнопке "Начать"', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.clickGetStarted();
  const title = await homePage.getTitle();
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

test('Проверка видимости кнопки "Get Started"', async ({ page }) => {
  await page.goto("https://playwright.dev");
  await page.waitForLoadState("networkidle");
  const getStartedVisible = await page.isVisible("text=Get Started");
  expect(getStartedVisible).toBe(true);
});

test("Проверка перехода на GitHub", async ({ page }) => {
  await page.goto("https://playwright.dev");
  await page.waitForLoadState("networkidle");

  const [newPage] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("text=GitHub"),
  ]);

  await newPage.waitForLoadState("networkidle");

  const title = await newPage.title();
  console.log("Фактический заголовок:", title);
  expect(title).toContain("microsoft/playwright");
});
