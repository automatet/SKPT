import { expect } from '@playwright/test';

class newproject {

    constructor(page){
        this.page= page;
        this.projectids =page.locator("//input[@id='projectName']")
        this.sownumber = page.locator("//input[@placeholder='Enter SOW Number']")
        this.conumber = page.locator("//input[@placeholder='Enter CO Number']")
        this.submit = page.locator("//button[normalize-space()='Submit']")
        //this.searchid = page.locator('//input[@aria-label="Search Something"]')
        //this.clickonbufferedid =page.locator(`//button[normalize-space()='${projectId}']`)
        this.newrequest = page.locator("//button[normalize-space()='New Request']")


    }
    
async  fillprojectdetails(projectId, sow, co)
{
//  await this.projectid.fill();
//  await this.sownumber.fill();
//  await this.sownumber.press('Enter');
//  await this.conumber.fill();
//  await this.conumber.press('Enter');
//  await this.submit.click();

//await this.addProjectButton().click();
    await this.projectids.fill(projectId);

    await this.sownumber.fill(sow);
    await this.sownumber.press('Enter');

    await this.conumber.fill(co);
    await this.conumber.press('Enter');

    //await this.page.waitForTimeout(3000);
}
async submitclicker(){

await this.submit.click();
}
    // async searchforid(iderno){
    //     await this.searchid.fill()
    // }

    // async selectbufferedid (){
    //     await this.clickonbufferedid()
    // }

async createnewrequest(){
    await this.newrequest.click()
}
}

export default newproject