import { expect } from '@playwright/test';

class addproject{

constructor(page)
{
    this.page=page;
    this.internalproject= page.locator("//button[normalize-space()= 'Internal Projects']")
    this.addproject=page.locator("//button[normalize-space()='Add Project']")


}
async internalprojects(){
await this.internalproject.click()
}

async addprojects(){
await this.addproject.click()
await this.page.waitForTimeout(3000);
}


}
export default addproject;
