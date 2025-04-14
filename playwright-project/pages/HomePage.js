const { expect } = require("@playwright/test");
class HomePage {
  constructor(page) {
    this.page = page;
    this.getStartedButton = "text=Get Started";
    this.documentationLink = "text=Documentation";
    this.githubLink = "text=GitHub";
    this.searchInput = 'input[placeholder="Search"]';
  }
  async goto() {
    await this.page.goto("https://playwright.dev");
  }
  async clickGetStarted() {
    await this.page.click(this.getStartedButton);
  }
  async clickDocumentation() {
    await this.page.waitForSelector(this.documentationLink, { timeout: 60000 });
    await this.page.click(this.documentationLink);
  }
  async search(query) {
    await this.page.waitForSelector(this.searchInput, { timeout: 60000 });
    await this.page.fill(this.searchInput, query);
    await this.page.press(this.searchInput, "Enter");
  }
  async isGithubLinkVisible() {
    return await this.page.isVisible(this.githubLink);
  }
  async getTitle() {
    return await this.page.title();
  }
}
module.exports = HomePage;
