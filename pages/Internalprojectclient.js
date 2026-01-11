import { expect } from '@playwright/test';
import LoginData from '../loginData.json'

class internalproject{

    constructor(page){


        this.page = page;
        this.useremail = page.locator("//input[@id='email']")
        this.userpasword = page.locator("//input[@id='password']")
        this.loginbtn = page.locator("//button[@type='submit']")
        this.externalproject_client=page.locator ("//button[contains(text(), 'Clients')]")
        this.externalproject_search=page.locator("//input[@aria-label='Search Something']")
       this.externalproject_select=page.locator("//button[normalize-space()='First client2']");
       this.externalproject_clientname=page.locator('//button[contains(@class,"view-projects-btn") and contains(normalize-space(.), "First client2")]')
       this.externalproject_addproject=page.locator('//button[@data-bs-toggle="modal"]')
       this.externalproject_projectid=page.locator('//input[@placeholder="Enter Project ID"]')
       this.externalproject_sawnumber=page.locator("//input[@placeholder='Enter SOW Number']") 
       this.externalproject_conumber=page.locator("//input[@placeholder='Enter CO Number']")
       this.externalproject_submit=page.locator("//button[@type='button' and contains(text(), 'Submit')]")
//create new request
this.searchclient=page.locator('(//*[@class="text-link view-forms-btn"])[1]');
this.newrequest=page.locator('//button[contains(text(), "New Request")]')
this.datepicker=page.locator('//input[@id="plannedDate"]/following-sibling::button[@type="button"]')
this.todaysdate=page.locator("//div[@class='ngb-dp-day ngb-dp-today']")
this.pono=page.locator('//input[@placeholder="Enter PO Number"]')
this.details_submit=page.locator("//button[normalize-space(text()) = 'Save and Proceed']")
//section submission A
this.submission=page.locator('//input[@value="DiscardPerRequest"]')
this.regulatory_Type=page.locator('//input[@value="GMP"]')
this.sampleType=page.locator('//input[@value="Production"]')
this.specification=page.locator('//input[@value="NA"]')
this.turnaroundtime=page.locator('//input[@value="Standard"]')
this.saveproced=page.locator("//button[contains(text(), 'Save and Proceed')]")
//Section B safety
this.biosafety_require=page.locator('//input[@ng-reflect-value="BSL1"]')
this.origin=page.locator('//input[@ng-reflect-value="Insect"]')
this.infectgious=page.locator('//input[@ng-reflect-value="No"]')
this.safetydatasheet=page.locator('//input[@ng-reflect-value="NA"]')
this.storage_instruction=page.locator('//input[@formcontrolname="specialHandling"]')
this.special_disposal=page.locator('//input[@formcontrolname="specialDisposal"]')
this.saveandproceed=page.locator("//button[@class='btn rounded-button rounded-button-small btn-primary btn-save' and contains(normalize-space(), 'Save and Proceed')]")
//Section C Shipping
this.shippingcondition=page.locator('//input[@id="shippingConditionIcepack"]')
//this.name_trackingno=page.locator('//input[@class="form-control ng-pristine ng-valid ng-touched"]')
this.shipping=page.locator('//input[@id="shipmentPackagingDispositionNoTemplateIncluded"]')
this.saveandprocess=page.locator("//button[@class='btn rounded-button rounded-button-small btn-primary btn-save' and contains(normalize-space(), 'Save and Proceed')]")
//Section D Sample information
  this.quantity = page.locator("//div[contains(@class,'tabulator-cell') and @tabulator-field='quantity']")
        this.samplevolume =page.locator("//div[contains(@class,'tabulator-cell') and @tabulator-field='sampleVolume']")
        this.sammpleunits = page.locator("//div[contains(@class,'tabulator-cell') and @tabulator-field='sampleUnits']")  //drop
        this.conainervolume =page.locator("//div[contains(@class,'tabulator-cell') and @tabulator-field='containerVolume']")
        this.containerunit =page.locator("//div[contains(@class,'tabulator-cell') and @tabulator-field='containerUnit']") //drop
        this.containertype =page.locator("//div[contains(@class,'tabulator-cell') and @tabulator-field='containerType']")  //drop
        this.sampleid =page.locator("//div[contains(@class,'tabulator-cell') and @tabulator-field='clientSampleID']")
        this.sampledescrption = page.locator("//div[contains(@class,'tabulator-cell') and @tabulator-field='sampleDescription']")
        this.samplelootno =page.locator("//div[contains(@class,'tabulator-cell') and @tabulator-field='sampleLotNumber']")
        this.protocolno =page.locator("//div[contains(@class,'tabulator-cell') and @tabulator-field='protocolNameAndNumber']")
        this.storageconditon= page.locator("//div[contains(@class,'tabulator-cell') and @tabulator-field='storageCondition']") //drop
        this.comments= page.locator("//div[contains(@class,'tabulator-cell') and @tabulator-field='comments']")
       this.savveandproceed = page.locator("//button[normalize-space()= 'Save and Proceed']")

    }

async platformuser_login(){

        await this.useremail.fill(LoginData.platformuser)
        await this.userpasword.fill(LoginData.password)     
        await this.loginbtn.click()
        await this.platformuser_login.goto(LoginData.platformuserurl)

    }



async externalproject() {
    await this.externalproject_client.click()
  
   
   await this.externalproject_search.click()
   await this.externalproject_search.fill('First client2');


await this.externalproject_clientname.click()
await this.externalproject_addproject.click()
await this.externalproject_projectid.click()
const randomNumber = Math.floor(1000 + Math.random() * 9000).toString();
await this.externalproject_projectid.fill(randomNumber);
await this.externalproject_projectid.press('Enter')



// SOW number
const sawNumber = Math.floor(Math.random() * 9000 + 1000).toString();
await this.externalproject_sawnumber.fill(sawNumber);
await this.externalproject_sawnumber.press('Enter')

// CO number
const coNumber = Math.floor(Math.random() * 9000 + 1000).toString();
await this.externalproject_conumber.fill(coNumber);
await this.externalproject_conumber.press('Enter')

//submit
await this.externalproject_submit.click()
}

async newrequestpagee() {

    await this.searchclient.hover();
await this.searchclient.click();


await this.page.waitForTimeout(3000)

await this.newrequest.click()
await this.datepicker.click()
await this. page.waitForTimeout(3000)
await this.todaysdate.click()

await this.pono.fill('112')
await this.details_submit.click()
//submission section A
await this.submission.click()
await this.regulatory_Type.click()
await this.sampleType.click()
await this.specification.click()
await this.turnaroundtime.click()
await this.saveproced.click()
//section B
await this.biosafety_require.click()
await this.origin.click()
await this.infectgious.click()
await this.safetydatasheet.click()
await this.storage_instruction.click()
await this.storage_instruction.fill('good to go')
await this.special_disposal.click()
await this.special_disposal.fill('handle carefully')
await this.saveandproceed.click()
//section C
await this.shippingcondition.click()
await this.shipping.click()
await this.saveandprocess.click()

//Section D
await this.quantity.click();
const quantityEditor = this.page.locator('.tabulator-editing input');
await quantityEditor.fill('12');
await quantityEditor.press('Enter');
 
await this.samplevolume.click();
const sampleedit=this.page.locator('.tabulator-editing input');
await sampleedit.fill('22');
await sampleedit.press('Enter');
 
await this.sammpleunits.click();
const samplefill =this.page.locator('.tabulator-editing input');
await samplefill.fill('ea');
await samplefill.press('Enter');
 
await this.conainervolume.click()
const container =this.page.locator('.tabulator-editing input');
await container.fill('11');
await container.press('Enter');
 
   await this.containerunit.click()
   const contedunit =this.page.locator('.tabulator-editing input');
   await contedunit.fill('ea');
   await contedunit.press('Enter');
 
await this.containertype.click()
const conttype = this.page.locator('.tabulator-editing input');
await conttype.fill('bags');
await conttype.press('Enter');
 

 
await this.sampleid.click()
const sapid = this.page.locator('.tabulator-editing input');
await sapid.fill('77');
await sapid.press('Enter');
 
await this.sampledescrption.click()
const sapdesc = this.page.locator('.tabulator-editing input');
await sapdesc.fill('88');
await sapdesc.press('Enter');
 
await this.samplelootno.click()
const loot = this.page.locator('.tabulator-editing input');
await loot.fill('75');
await loot.press('Enter');
 
await this.protocolno.click()
const prtno = this.page.locator('.tabulator-editing input');
await prtno.fill('55');
await prtno.press('Enter');
 
await this.storageconditon.click()
const strg = this.page.locator('.tabulator-editing input');
await strg.fill('-20C');
await strg.press('Enter');
 
await this.comments.click()
const cmnt = this.page.locator('.tabulator-editing input');
await cmnt.fill('all set');
await cmnt.press('Enter');
 
await this.savveandproceed.click()


}


  
}

        export default internalproject







