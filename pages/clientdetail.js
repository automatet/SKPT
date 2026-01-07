import { expect } from '@playwright/test';

class clientpage{
    

    constructor(page){

        this.page = page;
        //this.clients=page.locator("//button[normalize-space()='Add Client']");
        this.addclient = page.locator("//button[normalize-space()='Add Client']")
        this.clientIdInput = page.locator("//input[@id='skptClientID']")
        this.clientNameCombo = page.locator("//input[@id='name']") 
        this.submit =page.locator("//button[normalize-space()='Submit']")
        this.successMessage = page.locator('app-home');

        
        
    }
    

    async clientpagedetails(clientId, clientName){

        //await this.clients.click();
        await this.addclient.click() 
        await this.clientIdInput.fill(clientId)
        await this.clientNameCombo.fill(clientName)
        await this.submit.click()

    }
  async verifySuccessMessage() {
    await expect(this.successMessage).toContainText('Client details added successfully.');
  }
    
}

export default clientpage;



