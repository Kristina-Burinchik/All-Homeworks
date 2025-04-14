class DocumentationPage {
  constructor(page) {
    this.page = page;
  }

  async getTitle() {
    return await this.page.title();
  }
}

module.exports = DocumentationPage;
