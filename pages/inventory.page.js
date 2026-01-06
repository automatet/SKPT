class InventoryPage {
  constructor(page) {
    this.page = page;
    this.gridCells = page.getByRole('gridcell');
    this.saveAndProceedBtn = page.getByRole('button', { name: 'Save and Proceed' });
  }

  async fillGridCellByIndex(index, value) {
    const cell = this.gridCells.nth(index);
    await cell.click();
    await cell.locator('input').fill(value);
  }

  async selectFromCell(index, optionText) {
    await this.gridCells.nth(index).click();
    await this.page.getByText(optionText, { exact: true }).click();
  }

  async fillTextInput(value) {
    await this.page.locator('input[type="text"]').fill(value);
  }

  async selectStorageTemperature(temp) {
    await this.page.getByRole('gridcell').filter({ hasText: /^$/ }).nth(1).click();
    await this.page.getByText(temp).click();
  }

  async selectSite(siteName) {
    await this.page.getByRole('gridcell').filter({ hasText: /^$/ }).nth(1).click();
    await this.page.getByRole('searchbox').click();
    await this.page.getByText(siteName, { exact: true }).click();
  }

  async saveAndProceed() {
    await this.saveAndProceedBtn.click();
  }
}

export default InventoryPage;