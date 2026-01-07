import { expect } from '@playwright/test';
import LoginData from '../loginData.json'
import sktp from '../sktp.json'
import { TIMEOUT } from 'node:dns';
class Details {
 
 
    constructor(page){

        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        const projectId = `test${Date.now()}`

        this.page = page;
        this.projectidverify = page.locator(`//p[@class='static-field'][normalize-space()='${projectId}']`)
        this.currentdate =page.locator("//input[@id='plannedDate']");
        this.ponumber = page.locator("//input[@id='poNumber']")
        this.samplingno = page.locator("//input[@id='samplingPlanNumber']")
        this.saveandproceed = page.locator("//button[normalize-space()='Save and Proceed']")

        this.sampledispostion =page.locator("//input[@value='DiscardPerRequest']")
        this.regulartory =page.locator("//input[@value='GMP']")
        this.sampletypes =page.locator("//input[@value='WorkingViralBank']")
        this.specifction = page.locator("//input[@value='NA']")
        this.turnaroundtime =page.locator("//input[@value='Standard']")
        this .saver = page.locator("//button[normalize-space()='Save and Proceed']")

        this.biosafety =page.locator('//input[@ng-reflect-value="BSL1"]')
        this.origin = page.locator('//input[@ng-reflect-value="Insect"]')
        this.infectiousagent =page.locator("//input[@ng-reflect-value='No']")
        //this.knowninfectiousagent =page.locator('//input[@ng-reflect-name="knownInfectiousAgents"]')
        this.safetyrsheet = page.locator("//input[@ng-reflect-value='NA']")
        this.specialhandle =page.locator("//input[@ng-reflect-form-control-name='specialHandlingOrStorageInstru']")
        this.specialdisposal = page.locator('//input[@ng-reflect-name="specialDisposalInstructionsOpt"]')
        this.savveandproceed = page.locator("//button[normalize-space()= 'Save and Proceed']")

        this.shippingcondition =page.locator('//input[@id="shippingConditionIcepack"]')
        this.courierno= page.locator('//input[@ng-reflect-name="CourierAndTrackingNumber"]')
        this.shipmentpacking = page.locator("//input[@id='shipmentPackagingDispositionTemplateToBeReadAndDisposed']")
        this.savveandproceed = page.locator("//button[normalize-space()= 'Save and Proceed']")


        this.quantity = page.locator("//div[contains(@class,'tabulator-cell') and @tabulator-field='quantity']")
        this.samplevolume =page.locator("//div[contains(@class,'tabulator-cell') and @tabulator-field='sampleVolume']")
        this.sammpleunits = page.locator("//div[contains(@class,'tabulator-cell') and @tabulator-field='sampleUnits']")  //drop
        this.conainervolume =page.locator("//div[contains(@class,'tabulator-cell') and @tabulator-field='containerVolume']")
        this.containerunit =page.locator("//div[contains(@class,'tabulator-cell') and @tabulator-field='containerUnit']") //drop
        this.containertype =page.locator("//div[contains(@class,'tabulator-cell') and @tabulator-field='containerType']")  //drop
        this.sap =page.locator("//div[contains(@class,'tabulator-cell') and @tabulator-field='sapMaterialID']")
        this.sampleid =page.locator("//div[contains(@class,'tabulator-cell') and @tabulator-field='clientSampleID']")
        this.sampledescrption = page.locator("//div[contains(@class,'tabulator-cell') and @tabulator-field='sampleDescription']")
        this.samplelootno =page.locator("//div[contains(@class,'tabulator-cell') and @tabulator-field='sampleLotNumber']")
        this.protocolno =page.locator("//div[contains(@class,'tabulator-cell') and @tabulator-field='protocolNameAndNumber']")
        this.storageconditon= page.locator("//div[contains(@class,'tabulator-cell') and @tabulator-field='storageCondition']") //drop
        this.comments= page.locator("//div[contains(@class,'tabulator-cell') and @tabulator-field='comments']")
        this.testing =page.locator("//div[contains(@class,'tabulator-cell') and @tabulator-field='testingLocation']") //drop
        this.savveandproceed = page.locator("//button[normalize-space()= 'Save and Proceed']")



    }

// async verifyid(projectId) {
//     // Correct assertion for <p> element
//     //await expect(this.projectidverify).toHaveText(projectId);
//     await expect(this.projectidverify).toHaveText(projectId, { timeout: 5000 });
// }

    async filldate(formattedDate){
        await this.currentdate.fill(formattedDate)
        await expect(this.currentdate).toHaveValue(formattedDate);

    }


    async fillsampledetails(pon,sample)
    {
        
        await this.ponumber.fill(pon)
        await this.samplingno.fill(sample)
        await this.saveandproceed.click()
        
        
    }

   async submission(){
    await this.sampledispostion.check()  
    await this.regulartory.check()
    await this.sampletypes.check()
    await this.specifction.check()
    await this.turnaroundtime.check()
    await this.saver.click()

   
}

async safety(){
    
    await this.biosafety.check();
    await this.origin.check();
    await this.infectiousagent.check();
    await this.safetyrsheet.check();
    await this.specialhandle.check();
    await this.specialdisposal.check();
    await this.savveandproceed.click();


}
async shipper(){
   await this.shippingcondition.check()
   await this.shipmentpacking.check()
}

async couriernumbers (){
    await this.courierno.fill(sktp.protocolnoi)
    await this.savveandproceed.click()
   
}

async formfill(){

await this.quantity.click();
const quantityEditor = this.page.locator('.tabulator-editing input');
await quantityEditor.fill(sktp.quantityi);
await quantityEditor.press('Enter');

await this.samplevolume.click();
const sampleedit=this.page.locator('.tabulator-editing input');
await sampleedit.fill(sktp.samplevolumei);
await sampleedit.press('Enter');

await this.sammpleunits.click();
const samplefill =this.page.locator('.tabulator-editing input');
await samplefill.fill(sktp.sammpleunitsi);
await samplefill.press('Enter');

await this.conainervolume.click()
const container =this.page.locator('.tabulator-editing input');
await container.fill(sktp.conainervolumei);
await container.press('Enter');

   await this.containerunit.click()
   const contedunit =this.page.locator('.tabulator-editing input');
   await contedunit.fill(sktp.containeruniti);
   await contedunit.press('Enter');

await this.containertype.click()
const conttype = this.page.locator('.tabulator-editing input');
await conttype.fill(sktp.containertypei);
await conttype.press('Enter');

 await this.sap.click()
 const saper = this.page.locator('.tabulator-editing input');
 await saper.fill(sktp.sapi);
 await saper.press('Enter');

await this.sampleid.click()
const sapid = this.page.locator('.tabulator-editing input');
await sapid.fill(sktp.sampleidi);
await sapid.press('Enter');

await this.sampledescrption.click()
const sapdesc = this.page.locator('.tabulator-editing input');
await sapdesc.fill(sktp.sampledescrptioni);
await sapdesc.press('Enter');

await this.samplelootno.click()
const loot = this.page.locator('.tabulator-editing input');
await loot.fill(sktp.samplelootnoi);
await loot.press('Enter');

await this.protocolno.click()
const prtno = this.page.locator('.tabulator-editing input');
await prtno.fill(sktp.protocolnoi);
await prtno.press('Enter');

await this.storageconditon.click()
const strg = this.page.locator('.tabulator-editing input');
await strg.fill(sktp.storageconditoni);
await strg.press('Enter');

await this.comments.click()
const cmnt = this.page.locator('.tabulator-editing input');
await cmnt.fill(sktp.commentsi);
await cmnt.press('Enter');


await this.testing.click()
const test = this.page.locator('.tabulator-editing input');
await test.fill(sktp.testingi);
await test.press('Enter');


 
await this.savveandproceed.click();












}


}

export default Details