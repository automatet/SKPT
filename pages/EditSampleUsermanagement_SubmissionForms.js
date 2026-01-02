import { expect } from '@playwright/test';
import SampleManagementUserData from '../SampleManagementUserData.json'
import SubmissionFormsPage from '../pages/Sample-Management-User-SubmissionFormPage'
import AddLIMSProjectIDStatus from '../pages/Sample-Management-User-AddLIMSID'

class EditSampleManagementUserSubform {

    constructor(page){
        this.page=page;
        this.FormID_search = page.locator("//strong[contains(text(),'Sample Submission Forms')]/ancestor::div//input[@type='text']")
        this.EditSampleManagerUserSubFormbutton = page.locator("//span[contains(text(),'Received')]/ancestor::div//button[@type='button' and @data-bs-toggle='dropdown']").describe('Edit three dots button clicked');
        this.EditpopupSampleManagerUserSubformbtn = page.locator("//a[@data-bs-toggle='modal']/ancestor::div//a[@data-bs-target='#limsProjectIdPopup']").describe('Edit Pop up button clicked');
        this.EditLIMSProjectIDpopuppagesubform = page.locator("//h4[contains(text(),'Edit LIMS Project ID')]/ancestor::div//h4[@class='modal-title']").describe('Edit LIMS Project ID pop up opened');
        this.enterlimsprojectid_samplesubmissionforms = page.locator("//label[contains(text(),'LIMS Project ID') and @class='form-label']/ancestor::div//input[@placeholder='Enter LIMS Project ID']").describe('Enter LIMS Project ID');
        this.limsidsubmitbtn_samplesubmissionforms = page.locator("//button[contains(text(),'Submit') and @type='submit']/ancestor::div//button[@tabindex='5']")
        this.FormID_search = page.locator("//strong[contains(text(),'Sample Submission Forms')]/ancestor::div//input[@type='text']")
        this.EditLIMSadded_samplesubmissionforms = page.locator("//div[contains(text(),'LIMS Project ID')]").describe('Edit Successfully done verified');
        this.limsidstatusreceived_samplesubmissionforms = page.locator("//div[contains(text(),'Status')]/ancestor::div//span[contains(text(),'Received')]").describe('Status is Received after LIMS ID added');

    }
  async user_search_by_Editformid() {
    await this.FormID_search.click();
    await this.FormID_search.fill(SampleManagementUserData.EditForm_ID);
    await this.FormID_search.press('Enter');
  }
    async user_clickson_threedoteditbuttonfor_SampleManagerUserSubForm(){
        await this.EditSampleManagerUserSubFormbutton.click();
        await this.EditSampleManagerUserSubFormbutton.waitFor({
            state: 'visible',
            timeout: 30000
        });
    }

    async user_clickson_Editpopuppencilicon_samplemanagerusersubform() {
        await this.EditpopupSampleManagerUserSubformbtn.click();
        //await this.EditpopupSampleManagerUserSubformbtn.waitFor({
            //state: 'visible',
            //timeout: 99990
        //});
    }

    async user_verifies_EditLIMSProjectIDpopuppage_visible() {
        await expect(this.EditLIMSProjectIDpopuppagesubform).toBeVisible({
            timeout: 50000
        });
        
    }

     async user_enter_Editlimsprojectid() {
          await this.enterlimsprojectid_samplesubmissionforms.click();
          await this.enterlimsprojectid_samplesubmissionforms.fill(SampleManagementUserData.AddLIMSProjectID1);

  }

  async user_clicks_submitbutton_EditLIMSProjectID_samplesubmissionforms() {
    await this.limsidsubmitbtn_samplesubmissionforms.click();
  }

  //async user_verifies_editdonesuccessfully_EditLIMSProjectID_samplesubmissionforms_visible() {
    //await expect(this.EditLIMSadded_samplesubmissionforms).toBeVisible({
        //timeout: 50000
    //});

    async user_verifies_status_received_samplesubmissionforms() {
    await this.limsidstatusreceived_samplesubmissionforms.waitFor({
        state: 'visible',
        timeout: 99990
    });
  }

  }


export default EditSampleManagementUserSubform;