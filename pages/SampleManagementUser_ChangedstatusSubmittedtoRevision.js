import { expect } from '@playwright/test';
import SampleManagementUserData from '../SampleManagementUserData.json'
import SubmissionFormsPage from '../pages/Sample-Management-User-SubmissionFormPage'
import AddLIMSProjectIDStatus from '../pages/Sample-Management-User-AddLIMSID'

class SubmittedtoRevision {

    constructor(page) {
       this.page=page;
       this.header_samplesubmission = page.locator("//button[contains(text(),'Submission Forms')]/ancestor::div//button[@class='nav-link active']").describe('Submission Forms Page');
       this.FormID_search = page.locator("//strong[contains(text(),'Sample Submission Forms')]/ancestor::div//input[@type='text']")
       //this.statussubmitteddrpdwntoinrevision = page.locator("//div[contains(text(),'Status')]/ancestor::div//option[contains(text(),'Submitted')]/ancestor::div//select[@class='form-select form-control']").describe('Status Submitted drop down clicked');
       //this.statussubmitteddrpdwntoinrevision = page.locator("//div[contains(text(),'Status')]/ancestor::div//select[@class='form-select form-control']/ancestor::div//option[contains(text(),'In Revision') and @value='5']");
       //this.statussubmitteddrpdwntoinrevision = page.locator("//div[contains(text(),'Status')]/ancestor::div//select[@class='form-select form-control']");
       this.statussubmitteddrpdwntoinrevision = page.locator("//span[contains(text(),'Submitted')]");
       //this.statussubmittedarrowbuttonclick = page.locator("//select[@class='form-select form-control']/option[contains(text(),'In Revision')]");
       this.statussubmittedarrowbuttonclick = page.locator("//select[@class='form-select form-control']");
       
       this.statusInrevision = page.locator("//select[@style='appearance: menulist; color: rgb(29, 104, 40);']");
      
       this.YesbuttonclickedConfirmationpopupInrevision = page.locator("//button[contains(text(),'Yes')]");
       
    }
    async user_verifies_Submission_Forms_page_is_visible() {
    //await expect(this.header_samplesubmission).toBeVisible();
    await this.header_samplesubmission.waitFor({
        state: 'visible',
        timeout: 99990
    });
}

async user_search_by_formid() {
    await this.FormID_search.click();
    await this.FormID_search.fill(SampleManagementUserData.FormID_SubmittedtoInRevision);
    await this.FormID_search.press('Enter');
  }

async user_clickson_Submitteddrpdwntoinrevision() {
    await this.statussubmitteddrpdwntoinrevision.click();
}

async user_clickson_submittedchevronbutton() {
    await this.statussubmittedarrowbuttonclick.click();
    await expect(this.statussubmittedarrowbuttonclick).toBeVisible({ timeout: 30000 });
    
    await this.statusInrevision.selectOption({
    label: 'In Revision'
  });
    
    
    
}
async User_clickson_Yesbtn_Confirmation_Inrevision() {
    await this.YesbuttonclickedConfirmationpopupInrevision.click();
}
  
}

export default SubmittedtoRevision;