import {page, expect } from '@playwright/test';
import newprojectdata from '../tests/platformuser.spec'

class newproject {

    constructor(page){

const projectId = `test${Date.now()}`


        this.page= page;
        this.internalproject= page.locator("//button[normalize-space()= 'Internal Projects']")
        this.addproject=page.locator("//button[normalize-space()='Add Project']")
        this.projectids =page.locator("//input[@id='projectName']")
        this.sownumber = page.locator("//input[@placeholder='Enter SOW Number']")
        this.conumber = page.locator("//input[@placeholder='Enter CO Number']")
        this.submit = page.locator("//button[normalize-space()='Submit']")
        this.search= page.locator('//input[@aria-label="Search Something"]')
        this.searchclient=page.locator('(//*[@class="text-link view-forms-btn"])[1]');
        this.newrequest = page.locator("//button[normalize-space()='New Request']")
        
        this.successMessage = page.locator('[role="alert"]').filter({ hasText: 'internal project details added successfully.' });

}
    
async internalprojects(){
await this.internalproject.click()
}

async addprojects(){
await this.addproject.click()
await this.page.waitForTimeout(3000);
}
async  fillprojectdetails(projectId, sow, co)
{

    await this.projectids.fill(projectId);

    await this.sownumber.fill(sow);
    await this.sownumber.press('Enter');

    await this.conumber.fill(co);
    await this.conumber.press('Enter');

}
async submitclicker(){

await this.submit.click();
await expect(this.successMessage.first()).toBeVisible();



//await this.page.waitForTimeout(3000);
} 

async searchproject(projectid)
{
     await this.search.fill(projectid);
     
     await this.searchclient.hover();
     await this.searchclient.click();

    }
    
async createnewrequest(){
    
    await this.newrequest.click()


}
}

export default newproject