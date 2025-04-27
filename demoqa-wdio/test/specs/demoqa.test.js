const { expect } = require("chai");

describe("DemoQA Website Tests", () => {
  beforeEach(async () => {
    await browser.url("https://demoqa.com/");
  });

  it("should navigate to Elements section", async () => {
    const headerDiv = await $(
      '//div[contains(@class, "header-text") and contains(., "Elements")]'
    );
    await headerDiv.waitForExist({ timeout: 10000 });
    await headerDiv.waitForDisplayed({ timeout: 10000 });
    const headerText = await headerDiv.getText();
    expect(headerText).to.include("Elements");
  });

  it("should add a new text box", async () => {
    const elementsSection = await $("h5=Elements");
    await elementsSection.waitForDisplayed({ timeout: 5000 });
    await elementsSection.click();

    const practiceForm = await $('//li[contains(text(), "Practice Form")]');
    await practiceForm.waitForDisplayed({ timeout: 5000 });
    await practiceForm.click();

    const firstName = await $("#firstName");
    await firstName.waitForDisplayed({ timeout: 5000 });
    await firstName.setValue("Jane");

    const lastName = await $("#lastName");
    await lastName.waitForDisplayed({ timeout: 5000 });
    await lastName.setValue("Doe");

    const email = await $("#userEmail");
    await email.waitForDisplayed({ timeout: 5000 });
    await email.setValue("jane@example.com");

    const genderRadio = await $("#gender-radio-2");
    await genderRadio.waitForDisplayed({ timeout: 5000 });
    await genderRadio.click();

    const userNumber = await $("#userNumber");
    await userNumber.waitForDisplayed({ timeout: 5000 });
    await userNumber.setValue("1234567890");

    const dateOfBirthInput = await $("#dateOfBirthInput");
    await dateOfBirthInput.waitForDisplayed({ timeout: 5000 });
    await dateOfBirthInput.click();

    const monthSelect = await $(".react-datepicker__month-select");
    await monthSelect.waitForDisplayed({ timeout: 5000 });
    await monthSelect.selectByVisibleText("May");

    const yearSelect = await $(".react-datepicker__year-select");
    await yearSelect.waitForDisplayed({ timeout: 5000 });
    await yearSelect.selectByVisibleText("1990");

    const day = await $(".react-datepicker__day--015");
    await day.waitForDisplayed({ timeout: 5000 });
    await day.click();

    const submitBtn = await $("#submit");
    await submitBtn.waitForDisplayed({ timeout: 5000 });
    await submitBtn.click();

    const confirmation = await $("div.modal-content");
    await confirmation.waitForDisplayed({ timeout: 5000 });
    expect(await confirmation.isDisplayed()).to.be.true;
  });

  it("should interact with date picker in Date Picker widget", async () => {
    const widgetsSection = await $("h5=Widgets");
    await widgetsSection.waitForDisplayed({ timeout: 5000 });
    await widgetsSection.click();

    const datePickerItem = await $('//li[contains(text(), "Date Picker")]');
    await datePickerItem.waitForDisplayed({ timeout: 5000 });
    await datePickerItem.click();

    const dateInput = await $("#datePickerMonthYearInput");
    await dateInput.waitForDisplayed({ timeout: 5000 });
    await dateInput.setValue("05/20/2023");
    const dateValue = await dateInput.getValue();
    expect(dateValue).to.contain("05/20/2023");
  });

  it("should test slider functionality", async () => {
    const widgetsSection = await $("h5=Widgets");
    await widgetsSection.waitForDisplayed({ timeout: 5000 });
    await widgetsSection.click();

    const sliderItem = await $('//li[contains(text(), "Slider")]');
    await sliderItem.waitForDisplayed({ timeout: 5000 });
    await sliderItem.click();

    const slider = await $("#sliderContainer input[type=range]");
    await slider.waitForDisplayed({ timeout: 5000 });
    await browser.execute(
      (el, value) => {
        el.value = value;
        el.dispatchEvent(new Event("input"));
      },
      slider,
      50
    );
    const valueText = await $("#sliderValue");
    await valueText.waitForDisplayed({ timeout: 5000 });
    const value = await valueText.getText();
    expect(parseInt(value)).to.equal(50);
  });

  it("should fill and submit a book store API form", async () => {
    const widgetsSection = await $("h5=Widgets");
    await widgetsSection.waitForDisplayed({ timeout: 5000 });
    await widgetsSection.click();

    const selectMenu = await $('//li[contains(text(), "Select Menu")]');
    await selectMenu.waitForDisplayed({ timeout: 5000 });
    await selectMenu.click();

    const selectDropdown = await $("#withOptGroup");
    await selectDropdown.waitForDisplayed({ timeout: 5000 });
    await selectDropdown.selectByVisibleText("Group 2, option 2");
    const selectedText = await $("#withOptGroup").getValue();
    expect(selectedText).to.contain("Group 2, option 2");
  });

  it("should switch to the Tabs section and verify", async () => {
    const widgetsSection = await $("h5=Widgets");
    await widgetsSection.waitForDisplayed({ timeout: 5000 });
    await widgetsSection.click();

    const tabsItem = await $('//li[contains(text(), "Tabs")]');
    await tabsItem.waitForDisplayed({ timeout: 5000 });
    await tabsItem.click();

    const tab2 = await $("#demo-tab-2");
    await tab2.waitForDisplayed({ timeout: 5000 });
    await tab2.click();

    const tabContent = await $("#demo-tabpane-2");
    await tabContent.waitForDisplayed({ timeout: 5000 });
    expect(await tabContent.isDisplayed()).to.be.true;
  });

  it("should check and uncheck the checkbox item", async () => {
    const elementsSection = await $("h5=Elements");
    await elementsSection.waitForDisplayed({ timeout: 10000 });
    await elementsSection.scrollIntoView();
    await elementsSection.waitForClickable({ timeout: 10000 });
    await elementsSection.click();

    const checkBoxItem = await $(
      '//li[.//span[contains(text(), "Check Box")]]'
    );
    await checkBoxItem.waitForExist({ timeout: 10000 });
    await checkBoxItem.scrollIntoView();
    await checkBoxItem.waitForClickable({ timeout: 10000 });
    await checkBoxItem.click();

    const checkbox = await $(
      '//li[.//span[contains(text(), "Check Box")]]//span[contains(@class, "rct-checkbox")]'
    );
    await checkbox.waitForDisplayed({ timeout: 10000 });
    await checkbox.scrollIntoView();

    let classAttr = await checkbox.getAttribute("class");
    expect(classAttr).to.include("rct-checkbox-checked");

    await checkbox.click();

    classAttr = await checkbox.getAttribute("class");
    expect(classAttr).to.not.include("rct-checkbox-checked");
  });

  it("should navigate to Web Tables", async () => {
    const elementsSection = await $("h5=Elements");
    await elementsSection.waitForDisplayed({ timeout: 10000 });
    await elementsSection.scrollIntoView();
    await elementsSection.waitForClickable({ timeout: 10000 });
    await elementsSection.click();

    const webTablesItem = await $(
      '//li[.//span[contains(text(), "Web Tables")]]'
    );
    await webTablesItem.waitForExist({ timeout: 10000 });
    await webTablesItem.scrollIntoView();
    await webTablesItem.waitForClickable({ timeout: 10000 });
    await webTablesItem.click();
  });
});
