import {test, expect} from '@playwright/test'
import SampleManagementUserData from '../SampleManagementUserData.json'
import LoginData from '../loginData.json'
import LoginPage from '../pages/loginPage.js'
import SubmissionFormsPage from '../pages/Sample-Management-User-SubmissionFormPage.js'
import AddLIMSProjectIDStatus from '../pages/Sample-Management-User-AddLIMSID.js'
import SampleUserError from '../pages/SampleManagementUserError.js'
import EditSampleManagementUserSubform from '../pages/EditSampleUsermanagement_SubmissionForms.js'
import SubmittedtoRevision from '../pages/SampleManagementUser_ChangedstatusSubmittedtoRevision.js'
import ReceivedStatusLIMSProjectIDgraph from '../pages/ReceivedStateLIMSProjectIDgraph.js'

test('Test Sample manager add LIMS Project ID successfully', async ({page})=>{
 
  const loginuser = new LoginPage(page)
    await page.goto(LoginData.url)
    await expect(page).toHaveURL(LoginData.url)
   
    await loginuser.sampleuser_login()   
    await page.waitForTimeout(3000);

    await expect(page).toHaveURL(LoginData.sampleurl)

    const ObjSubmissionFormPage = new SubmissionFormsPage(page);
    await ObjSubmissionFormPage.user_verifies_Submission_Forms_page_is_visible();
    await ObjSubmissionFormPage.user_search_by_formid(SampleManagementUserData.Form_ID);
    await ObjSubmissionFormPage.user_clicks_on_Addplusbtn();

    const ObjAddLIMSProjectIDSubmissionFormsPage = new AddLIMSProjectIDStatus(page);
    await ObjAddLIMSProjectIDSubmissionFormsPage.user_verifies_AddLIMSProjectID_page_is_visible();
    await ObjAddLIMSProjectIDSubmissionFormsPage.user_enter_limsprojectid(SampleManagementUserData.AddLIMSProjectID);
    await ObjAddLIMSProjectIDSubmissionFormsPage.user_clicks_submitbutton_AddLIMSProjectID_samplesubmissionforms();
    await ObjSubmissionFormPage.user_search_by_formid(SampleManagementUserData.Form_ID);
    await ObjAddLIMSProjectIDSubmissionFormsPage.user_verifies_status_received_samplesubmissionforms();
 
})


test('Test user gets This LIMS Project ID already exists under another project error message', async ({page})=>{
 
  const loginuser = new LoginPage(page)
    await page.goto(LoginData.url)
    await expect(page).toHaveURL(LoginData.url)
   
    await loginuser.sampleuser_login()   
    await page.waitForTimeout(3000);

    await expect(page).toHaveURL(LoginData.sampleurl)

    const ObjSubmissionFormPage = new SubmissionFormsPage(page);
    await ObjSubmissionFormPage.user_verifies_Submission_Forms_page_is_visible();
    await ObjSubmissionFormPage.user_search_by_formid(SampleManagementUserData.Form_ID);
    await ObjSubmissionFormPage.user_clicks_on_Addplusbtn();

    const ObjAddLIMSProjectIDSubmissionFormsPage = new AddLIMSProjectIDStatus(page);
    await ObjAddLIMSProjectIDSubmissionFormsPage.user_verifies_AddLIMSProjectID_page_is_visible();
    await ObjAddLIMSProjectIDSubmissionFormsPage.user_enter_limsprojectid(SampleManagementUserData.AddLIMSProjectID);
    await ObjAddLIMSProjectIDSubmissionFormsPage.user_clicks_submitbutton_AddLIMSProjectID_samplesubmissionforms();
    
    const ObjErrormesssageforSampleManagerAddLIMSIDpage = new SampleUserError(page);
    await ObjErrormesssageforSampleManagerAddLIMSIDpage.user_verifies_error_message_forsampleusermanager();
})

test('Test Sample manager Edit LIMS Project ID Successfully', async ({page})=>{
 
  const loginuser = new LoginPage(page)
    await page.goto(LoginData.url)
    await expect(page).toHaveURL(LoginData.url)
   
    await loginuser.sampleuser_login()   
    await page.waitForTimeout(3000);

    await expect(page).toHaveURL(LoginData.sampleurl)

    const ObjSubmissionFormPage = new SubmissionFormsPage(page);
    await ObjSubmissionFormPage.user_verifies_Submission_Forms_page_is_visible();
    //await ObjSubmissionFormPage.user_search_by_Editformid(SampleManagementUserData.EditForm_ID);

    const ObjEditbuttonthreedot = new EditSampleManagementUserSubform(page);
    await ObjEditbuttonthreedot.user_search_by_Editformid(SampleManagementUserData.EditForm_ID);
    await ObjEditbuttonthreedot.user_clickson_threedoteditbuttonfor_SampleManagerUserSubForm();
    await ObjEditbuttonthreedot.user_clickson_Editpopuppencilicon_samplemanagerusersubform();
    await ObjEditbuttonthreedot.user_verifies_EditLIMSProjectIDpopuppage_visible();
    
    await ObjEditbuttonthreedot.user_enter_Editlimsprojectid(SampleManagementUserData.AddLIMSProjectID1);
    await ObjEditbuttonthreedot.user_clicks_submitbutton_EditLIMSProjectID_samplesubmissionforms();
    await ObjEditbuttonthreedot.user_search_by_Editformid(SampleManagementUserData.EditForm_ID);
    //await ObjEditbuttonthreedot.user_verifies_editdonesuccessfully_EditLIMSProjectID_samplesubmissionforms_visible();
   
    await ObjEditbuttonthreedot.user_verifies_status_received_samplesubmissionforms();
})

test('Test Sample manager changes state from Submitted to InRevision State', async ({page})=>{
 
  const loginuser = new LoginPage(page)
    await page.goto(LoginData.url)
    await expect(page).toHaveURL(LoginData.url)
   
    await loginuser.sampleuser_login()   
    await page.waitForTimeout(3000);

    await expect(page).toHaveURL(LoginData.sampleurl)
    

    const ObjSampleManagementUserSubmittedStatusdropdownpage = new SubmittedtoRevision(page);
    await ObjSampleManagementUserSubmittedStatusdropdownpage.user_verifies_Submission_Forms_page_is_visible();
    await ObjSampleManagementUserSubmittedStatusdropdownpage.user_search_by_formid(SampleManagementUserData.FormID_SubmittedtoInRevision);
    await ObjSampleManagementUserSubmittedStatusdropdownpage.user_clickson_Submitteddrpdwntoinrevision();
    await ObjSampleManagementUserSubmittedStatusdropdownpage.user_clickson_submittedchevronbutton();
    await ObjSampleManagementUserSubmittedStatusdropdownpage.User_clickson_Yesbtn_Confirmation_Inrevision();
})

test('Test Sample manager clicks on LIMS Project ID for Received state to view graph', async ({page})=>{
    const loginuser = new LoginPage(page)
    await page.goto(LoginData.url)
    await expect(page).toHaveURL(LoginData.url)
   
    await loginuser.sampleuser_login()   
    await page.waitForTimeout(3000);

    await expect(page).toHaveURL(LoginData.sampleurl)

    const ObjLIMSProjectIDReceivedbtngraph = new ReceivedStatusLIMSProjectIDgraph(page);
    await ObjLIMSProjectIDReceivedbtngraph.user_verifies_Submission_Forms_page_is_visible();
    await ObjLIMSProjectIDReceivedbtngraph.user_search_by_formid(SampleManagementUserData.Form_ID_ReceivedState);
    await ObjLIMSProjectIDReceivedbtngraph.User_CLickson_LIMSIDProjectIDbtn_ReceivedState();
    await ObjLIMSProjectIDReceivedbtngraph.User_clickson_PlusMinusbtngraph_ReceivedState();

}) 