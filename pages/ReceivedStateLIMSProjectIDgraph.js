import { expect } from '@playwright/test';
import SampleManagementUserData from '../SampleManagementUserData.json'
import SubmissionFormsPage from './Sample-Management-User-SubmissionFormPage'

class ReceivedStatusLIMSProjectIDgraph {

    constructor(page){
    this.page=page;
    this.header_samplesubmission = page.locator("//button[contains(text(),'Submission Forms')]/ancestor::div//button[@class='nav-link active']").describe('Submission Forms Page');
    this.FormID_search = page.locator("//strong[contains(text(),'Sample Submission Forms')]/ancestor::div//input[@type='text']")
    this.ReceivedStateLIMSProjectID = page.locator("//button[@class='text-link navigate-by-lims-project-id']");
    this.plusminusbtngraph = page.locator("//i[@class='expand-collapse-icon fas fa-plus']").first();
    this.minusminusbtngraphview = page.locator("//i[@class='expand-collapse-icon fas fa-minus']").nth(1);
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
    await this.FormID_search.fill(SampleManagementUserData.Form_ID_ReceivedState);
    await this.FormID_search.press('Enter');
  }

  async User_CLickson_LIMSIDProjectIDbtn_ReceivedState() {
    await this.ReceivedStateLIMSProjectID.click();
 
  }

  async User_clickson_PlusMinusbtngraph_ReceivedState() {
    await this.plusminusbtngraph.click();
    await this.minusminusbtngraphview.click();
  }
}

export default ReceivedStatusLIMSProjectIDgraph;
