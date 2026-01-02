import { expect } from '@playwright/test';
import SampleManagementUserData from '../SampleManagementUserData.json'

class AddLIMSProjectIDStatus {

    constructor(page) {
        
    this.page=page;
    this.addlimsprojectid_samplesubmissionforms = page.locator("//h4[contains(text(),'LIMS Project ID') and @class='modal-title']").describe('Add LIMS Project ID');
    this.enterlimsprojectid_samplesubmissionforms = page.locator("//label[contains(text(),'LIMS Project ID') and @class='form-label']/ancestor::div//input[@placeholder='Enter LIMS Project ID']").describe('Enter LIMS Project ID');
    this.limsidsubmitbtn_samplesubmissionforms = page.locator("//button[contains(text(),'Submit') and @type='submit']/ancestor::div//button[@tabindex='5']")
    this.FormID_search = page.locator("//strong[contains(text(),'Sample Submission Forms')]/ancestor::div//input[@type='text']")
    this.limsidstatusreceived_samplesubmissionforms = page.locator("//div[contains(text(),'Status')]/ancestor::div//span[contains(text(),'Received')]").describe('Status is Received after LIMS ID added');
  }

  async user_verifies_AddLIMSProjectID_page_is_visible() {
    await expect(this.addlimsprojectid_samplesubmissionforms).toBeVisible({
    timeout: 99990
     });
  }
  async user_enter_limsprojectid() {
    await this.enterlimsprojectid_samplesubmissionforms.click();
    await this.enterlimsprojectid_samplesubmissionforms.fill(SampleManagementUserData.AddLIMSProjectID);

  }
  async user_clicks_submitbutton_AddLIMSProjectID_samplesubmissionforms() {
    await this.limsidsubmitbtn_samplesubmissionforms.click();
  }

  async user_verifies_status_received_samplesubmissionforms() {
    await this.limsidstatusreceived_samplesubmissionforms.waitFor({
        state: 'visible',
        timeout: 99990
    });
  }
}

export default AddLIMSProjectIDStatus;
