class Dynamicid {
  constructor(page) {
    this.page = page;

    // existing locators here...

    this.projectsTableRows = page.locator('table tbody tr');
    this.clients=page.locator("//button[normalize-space()='Clients']");
  }

  // Click the first dynamic project ID in the table
  async clickDynamicProjectId() {
    // Wait for at least one row in the projects table
    await this.page.waitForSelector('table tbody tr');

    // Locate the first row's first cell (Project ID)
    const firstProjectCell = this.projectsTableRows().first().locator('td').first();

    // Click the Project ID (usually a link or clickable text)
    await firstProjectCell.click();
  }
}

export default Dynamicid;
