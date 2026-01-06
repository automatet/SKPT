import { expect } from '@playwright/test';
import newprojectdata from '../tests/platformuser.spec'

class newproject {

    constructor(page){

const projectId = `test${Date.now()}`

        this.page= page;
        this.projectids =page.locator("//input[@id='projectName']")
        this.sownumber = page.locator("//input[@placeholder='Enter SOW Number']")
        this.conumber = page.locator("//input[@placeholder='Enter CO Number']")
        this.submit = page.locator("//button[normalize-space()='Submit']")
        this.search= page.locator('//input[@aria-label="Search Something"]')
        //this.selectprojectid =page.locator("//button[contains(@class,'view-forms-btn') and normalize-space()='" + projectId + "']");
        //this.searchprjectid=page.locator(`//button[normalize-space()='${projectId}']`)
        this.pickid = page.locator('//button[@class="text-link view-forms-btn"]')
        this.newrequest = page.locator("//button[normalize-space()='New Request']")


    }
    
async  fillprojectdetails(projectId, sow, co)
{

    await this.projectids.fill(projectId);

    await this.sownumber.fill(sow);
    await this.sownumber.press('Enter');

    await this.conumber.fill(co);
    await this.conumber.press('Enter');

    //await this.page.waitForTimeout(3000);
}
async submitclicker(){

await this.submit.click();
//await this.page.waitForTimeout(3000);
} 

async searchproject(projectid)
{
    await this.search.fill(projectid)
    await this.page.waitForTimeout(3000);
    await this.pickid.click()
}
    
async createnewrequest(){
    
    await this.newrequest.click()
}
}

export default newproject