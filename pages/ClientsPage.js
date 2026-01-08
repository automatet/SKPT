class ClientsPage {
  constructor(page) {
    this.page = page;

    // this.clientsButton = () =>
    //   this.page.getByRole('button', { name: 'Clients' });
    this.clients=page.locator("//button[normalize-space()='Clients']");
    this.searchBox = page.locator("//input[@aria-label='Search Something']");


    // this.searchBox = () =>
    //   this.page.getByRole('textbox', { name: 'Search Something' });
  }

  async openClients() {
    await this.clients.click();
  }

  async selectClient(clientName) {
    await this.searchBox.fill(clientName);
    await this.page.waitForTimeout(2000);
    await this.page.locator(`//button[contains(normalize-space(),'${clientName}')]`).click();
    //await this.page.locator("//button[normalize-space()='First client1']").click();

    //await this.page.getByRole('button', { name: clientName }).click();
  }
}

export default ClientsPage;
