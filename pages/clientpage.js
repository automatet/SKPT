import { expect } from '@playwright/test';

class clientpage{
 
 
    constructor(page){

        this.page = page;
        this.client = page.locator("//button[normalize-space()='Clients']")
        this.internaluser = page.locator("//button[normalize-space()='Internal Projects']")
        this.externaluser= page.locator("//button[normalize-space()='External Projects']")
        this.addclient = page.locator("//button[@data-bs-target='#clientDetailsPopup']")
        this.search = page.locator("//input[@aria-label='Search Something']")
        this.searchicon= page.locator("//img[@alt='Search Icon']")

        this.clientid=page.locator("//input[@id='skptClientID']")
        this.clientname =page.locator('//input[@placeholder="Enter Client Name"]')
        this.submit=page.locator('//button[@type="submit"]')

        
    }

    async clientpagedetails(){
        await this.client.click()
        await this.internaluser.click()
        await this.externaluser.click()
        await this.addclient.click() 
        await this.clientid.fill()
        await this.clientname.fill()
        await this.submit.click()

    }
}

export default clientpage;