import { expect } from '@playwright/test';
import SampleManagementUserData from '../SampleManagementUserData.json'

class SubmissionFormsPage {

     
  constructor(page) {
    
    this.page=page;
    this.header_samplesubmission = page.locator("//button[contains(text(),'Submission Forms')]/ancestor::div//button[@class='nav-link active']").describe('Submission Forms Page');
    this.FormID_search = page.locator("//strong[contains(text(),'Sample Submission Forms')]/ancestor::div//input[@type='text']")
    this.add_plusbtn = page.locator("//span[contains(text(),'Submitted')]/ancestor::div//div[contains(text(),'LIMS Project ID')]/ancestor::div//a[contains(text(),'Add') and @data-bs-toggle='modal']").describe('Add button clicked');
    
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
    await this.FormID_search.fill(SampleManagementUserData.Form_ID);
    await this.FormID_search.press('Enter');
  }
  async user_clicks_on_Addplusbtn() {
    await this.add_plusbtn.click();
    
  }
}

export default SubmissionFormsPage;