import { expect } from '@playwright/test';

class SearchFunctionality {
  constructor(page) {
    this.page = page;
    this.search_InputField = page.locator("//input[@aria-label='Search Something']");
  }

  async user_searchCriteria(searchValue) {
    // Type in search input (triggers search results)
    await this.search_InputField.click();
    await this.search_InputField.fill(searchValue);

    // Dynamic locator for search result button
    const searchResultButton = this.page.locator(`//div[contains(@class,"tabulator-cell") and contains(normalize-space(.),"${searchValue}")] | //button[contains(normalize-space(text()),"${searchValue}")]`).first();

    // Wait until the button is visible
    await expect(searchResultButton).toBeVisible({ timeout: 10000 });

    // Optional small pause before clicking
    // await this.page.waitForTimeout(1000);

    //Click the search result
    // await searchResultButton.click();
  }
}

export default SearchFunctionality;
