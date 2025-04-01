const { Builder, By } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://www.bbc.com");

    const searchIconCss = await driver.findElement(
      By.css('button[aria-label="Search"]')
    );
    console.log("Лупа (CSS) найдена:", await searchIconCss.isDisplayed());

    const searchIconXpath = await driver.findElement(
      By.xpath('//button[@aria-label="Search"]')
    );
    console.log("Лупа (XPath) найдена:", await searchIconXpath.isDisplayed());

    const sectionsCss = await driver.findElements(By.css("nav a"));
    const sectionNamesCss = [];
    for (let section of sectionsCss) {
      const text = await section.getText();
      sectionNamesCss.push(text);
    }
    console.log("Разделы (CSS):", sectionNamesCss.join(", "));

    const sectionsXpath = await driver.findElements(By.xpath("//nav//a"));
    const sectionNamesXpath = [];
    for (let section of sectionsXpath) {
      const text = await section.getText();
      sectionNamesXpath.push(text);
    }
    console.log("Разделы (XPath):", sectionNamesXpath.join(", "));

    const putinTimeCss = await driver.findElement(
      By.css("a[href*='putin'] + time")
    );
    console.log(
      "Время публикации статьи про Путина (CSS):",
      await putinTimeCss.getText()
    );

    const putinTimeXpath = await driver.findElement(
      By.xpath("//a[contains(@href, 'putin')]/following-sibling::time")
    );
    console.log(
      "Время публикации статьи про Путина (XPath):",
      await putinTimeXpath.getText()
    );

    const trumpImageCss = await driver.findElement(By.css("img[alt*='Trump']"));
    console.log(
      "Картинка с Трампом (CSS) найдена:",
      await trumpImageCss.isDisplayed()
    );

    const trumpImageXpath = await driver.findElement(
      By.xpath("//img[contains(@alt, 'Trump')]")
    );
    console.log(
      "Картинка с Трампом (XPath) найдена:",
      await trumpImageXpath.isDisplayed()
    );

    const newsWatchCss = await driver.findElement(
      By.css("a[href*='news-watch']")
    );
    console.log(
      "Вкладка News Watch (CSS) найдена:",
      await newsWatchCss.isDisplayed()
    );

    const newsWatchXpath = await driver.findElement(
      By.xpath("//a[contains(text(), 'News Watch')]")
    );
    console.log(
      "Вкладка News Watch (XPath) найдена:",
      await newsWatchXpath.isDisplayed()
    );

    const republicansTimeCss = await driver.findElement(
      By.css("a[href*='republicans'] + time")
    );
    console.log(
      "Время публикации статьи о республиканцах (CSS):",
      await republicansTimeCss.getText()
    );

    const republicansTimeXpath = await driver.findElement(
      By.xpath(
        "//a[contains(text(), 'Republicans fear Florida election upset')]/following-sibling::time"
      )
    );
    console.log(
      "Время публикации статьи о республиканцах (XPath):",
      await republicansTimeXpath.getText()
    );

    const floodElementCss = await driver.findElement(
      By.css(
        "h3:contains('Cars carried away as flash flooding hits Greek island')"
      )
    );
    console.log(
      "Элемент о наводнении (CSS) найден:",
      await floodElementCss.getText()
    );

    const floodElementXpath = await driver.findElement(
      By.xpath(
        "//h3[contains(text(), 'Cars carried away as flash flooding hits Greek island')]"
      )
    );
    console.log(
      "Элемент о наводнении (XPath) найден:",
      await floodElementXpath.getText()
    );
  } catch (error) {
    console.error("Произошла ошибка:", error);
  } finally {
    await driver.quit();
  }
})();
