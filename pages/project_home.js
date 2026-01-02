import { expect } from '@playwright/test';
//import LoginData from '../loginData.json'
 
class Projecthome{
 
 
    constructor(page){
 
        this.page = page;
        this.useremail = page.locator("//input[@id='email']")
        this.userpasword = page.locator("//input[@id='password']")
        this.loginbtn = page.locator("//button[@type='submit']")
        this.project_ID = page.locator("//button[normalize-space()='8055']")
        this.form_ID = page.locator("//button[normalize-space()='FID1236']")
        this.NewrequestID = page.locator("//button[contains(text(),' New Request ')]")
        this.Shippingdate = page.locator("//i[@class='bi bi-calendar']")
        this.date = page.locator("//div[@class='ngb-dp-day ngb-dp-today']")
        this.PONumber = page.locator("//input[@placeholder='Enter PO Number']")
        this.planNumber = page.locator("//input[@formcontrolname='samplingPlanNumber']")
        this.DetailComment = page.locator("//textarea[@placeholder='Make a comment']")
        this.Detailsubmitbutton = page.locator("//button[normalize-space()='Save and Proceed']")
        this.DispositionValue = page.locator("//input[@value='Discard']")
        this.regulatoryType = page.locator("//input[@value='GMP']")
        this.sampletypesone = page.locator("//input[@value='Production']")
        this.sampletypestwo = page.locator("//input[@value='WorkingViralBank']")
        this.Specification = page.locator("/input[@value='TestingSpecificationMemoAttached']")
        this.SpecificationTwo = page.locator("//input[@value='NA']")
        this.DocUpload = page.locator("//button[normalize-space()='Upload Document']")
        this.DocType = page.locator("//option[contains (text(),'Select Document Type')]")
        this.DocTypeOption = page.locator("//option[normalize-space()='SOW']")
        this.TAT =page.locator("//input[@value='Standard']")
        this.CommentOne = page.locator("//textarea[@placeholder='Make a comment']")
        this.SubmissionSave = page.locator("//button[normalize-space()='Save and Proceed']")
        this.BioSafetyReq = page.locator("//input[@ng-reflect-value='BSL1']")
        this.Origin = page.locator("//input[@ng-reflect-value='Human']")
        this.InfectiosAgent = page.locator("//input[@ng-reflect-value='No']")
        this.DataSheet = page.locator("//input[@ng-reflect-value='NA']")
        this.SpecialHandeling = page.locator("//input[@formcontrolname='specialHandling']") 
        this.SpecialDisposal = page.locator("//input[@formcontrolname='specialDisposal']")
        this.SaveSafety = page.locator("//button[normalize-space()='Save and Proceed']")
        this.ShippingCondition = page.locator("//input[@ng-reflect-value='Icepack']")
        this.TrackingNumber = page.locator("//input[@formcontrolname='CourierAndTrackingNumber']")
        this.ShippingPacking = page.locator("//input[@ng-reflect-value='NoTemplateIncluded']")
        this.SaveShipping = page.locator("//button[normalize-space()='Save and Proceed']")
        this.Quantity = page.locator("//div[contains(@class,'tabulator-cell') and @tabulator-field='quantity']")
        this.SampleVolumn = page.locator("//div[@role='gridcell' and @tabulator-field='sampleVolume']")
        this.SampleUnit = page.locator("//div[@role='gridcell' and @tabulator-field='sampleUnits']")
        this.ContainerVol = page.locator("//div[@role='gridcell' and @tabulator-field='containerVolume']")
        this.ContainerUnit = page.locator("//div[@role='gridcell' and @tabulator-field='containerUnit']")
        this.ContainerType = page.locator("//div[@role='gridcell' and @tabulator-field='containerType']")
        this.SampleID = page.locator("//div[@role='gridcell' and @tabulator-field='clientSampleID']")
        this.Location = page.locator("//div[@role='gridcell' and @tabulator-field='testingLocation']")
        this.SampInfoSave = page.locator("//button[normalize-space()='Save and Proceed']")
        this.sampledescrition= page.locator("//div[@role='gridcell' and @tabulator-field='sampleDescription']")
        this.sampleLotNo = page.locator("//div[@role='gridcell' and @tabulator-field='sampleLotNumber']")
        this.ProtocolName = page.locator("//div[@role='gridcell' and @tabulator-field='protocolNameAndNumber']")
        this.StorageCondition = page.locator("//div[@role='gridcell' and @tabulator-field='storageCondition']")
     
       }   
       async formid(){
    
      await this.project_ID.click();
      await this.NewrequestID.click();
      //await this.form_ID.click();
      await this.Shippingdate.click();
      await this.date.click();
      //const random = Math.floor(Math.random() * 1000);
      const randomNumber = Math.floor(Math.random() * 1000);
      await this.PONumber.fill(String(randomNumber))
      //await this.PONumber.fill("76578587");
      const randomPlanNumber = Math.floor(Math.random() * 1000);
      await this.planNumber.fill(String(randomPlanNumber))
     
      await this.Detailsubmitbutton.click();
      await this.DispositionValue.click();
      await this.regulatoryType.click();
      await this.sampletypesone.click();
      await this.sampletypestwo.click();
      await this.SpecificationTwo.click();
      await this.TAT.click();
      await this.CommentOne.fill("rdtrdyt");
      await this.SubmissionSave.click();
      await this.BioSafetyReq.click();
      await this.Origin.click();
      await this.InfectiosAgent.click();
      await this.DataSheet.click();
      await this.SpecialHandeling.fill("resgf");
      await this.SpecialDisposal.fill("tydhdht");
      await this.SaveSafety.click();
      await this.ShippingCondition.click();
      await this.TrackingNumber.fill("53675");
      await this.ShippingPacking.click();
      await this.SaveShipping.click();
      await this.Quantity.click();
const quantityEditor = this.page.locator('.tabulator-editing input');
await quantityEditor.fill('12');
await quantityEditor.press('Enter');

      await this.SampleVolumn.click();
      const SampleVol = this.page.locator('.tabulator-editing input');
await SampleVol.fill('11');
await SampleVol.press('Enter');

      await this.SampleUnit.click()
      const SampleUni = this.page.locator('.tabulator-editing input');
await SampleUni.fill('L');
await SampleUni.press('Enter');

await this.ContainerVol.click();
const ConVol = this.page.locator('.tabulator-editing input');
await ConVol.fill('22');
await ConVol.press('Enter');

await this.ContainerUnit.click();
const ConUnit = this.page.locator('.tabulator-editing input');
await ConUnit.fill('L');
await ConUnit.press('Enter');

await this.ContainerType.click();
const ConType = this.page.locator('.tabulator-editing input');
await ConType.fill('bags');
await ConType.press('Enter');

await this.SampleID.click();
const SamID = this.page.locator('.tabulator-editing input');
await SamID.fill('2232');
await SamID.press('Enter');

await this.Location.click();
const Loc = this.page.locator('.tabulator-editing input');
await Loc.fill('AD');
await Loc.press('Enter');

await this.sampledescrition.click();
const SamDes = this.page.locator('.tabulator-editing input')
await SamDes.fill("asdds");
await SamDes.press('Enter');

await this.sampleLotNo.click();
const SamLotNo = this.page.locator('.tabulator-editing input')
await SamLotNo.fill("287");
await SamLotNo.press('Enter');
//await this.sampleLotNo.fill("283")

await this.ProtocolName.click();
const ProName = this.page.locator('.tabulator-editing input')
await ProName.fill("uwx23");
await ProName.press('Enter');

await this.StorageCondition.click();
const StoreName = this.page.locator('.tabulator-editing input')
await StoreName.fill("-20C");
await StoreName.press('Enter');
 
await this.SampInfoSave.click();
      //await this.Specification.click();
      //await this.DocUpload.click();
      //await this.DocType.click();
      //await this.DocTypeOption.selectOption();
      
 }
     
}
 
export default Projecthome;