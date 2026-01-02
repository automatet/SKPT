import { expect } from '@playwright/test';
class Details {
 
 
    constructor(page){

        this.page = page;
        //this.currentdate =page.locator("//input[@id='plannedDate']");
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
        this.safetyrsheet = page.locator('//input[ng-reflect-value="NA"]')
        this.specialhandle =page.locator("//input[@ng-reflect-form-control-name='specialHandlingOrStorageInstru']")
        this.specialdisposal = page.locator('//input[@ng-reflect-name="specialDisposalInstructionsOpt"]')
        this.savveandproceed = page.locator("//button[normalize-space()= 'Save and Proceed']")

        this.shippingcondition =page.locator('//input[@id="shippingConditionIcepack"]')
        this.courierno= page.locator('//input[@ng-reflect-name="CourierAndTrackingNumber"]')
        this.shipmentpacking = page.locator('//input[TemplateToBeReadAndDisposed]')
        this.savveandproceed = page.locator("//button[normalize-space()= 'Save and Proceed']")


        this.quantity = page.locator('//div[@class="tabulator-cell tabulator-editable tabulator-range-selected tabulator-range-only-cell-selected tabulator-validation-fail"]')
        this.samplevolume =page.locator("//div[@class='tabulator-tableholder']//div[3]")
        this.sammpleunits = page.locator("//div[@class='tabulator-tableholder']//div[4]")
        this.conainervolume =page.locator("//div[@class='tabulator-tableholder']//div[5]")
        this.containerunit =page.locator("//div[@class='tabulator-tableholder']//div[6]")
        this.containertype =page.locator("//div[@class='tabulator-tableholder']//div[7]")
        this.sampleid =page.locator("//div[@class='tabulator-tableholder']//div[8]")
        this.sampledescrption = page.locator("//div[@class='tabulator-tableholder']//div[9]")
        this.samplelootno =page.locator("//div[@class='tabulator-tableholder']//div[10]")
        this.protocolno =page.locator("//div[@class='tabulator-tableholder']//div[11]")
        this.storageconditon= page.locator("//div[@class='tabulator-tableholder']//div[12]")
        this.comments= page.locator("//div[@class='tabulator-tableholder']//div[13]")
        this.savveandproceed = page.locator("//button[normalize-space()= 'Save and Proceed']")



    }

    async fillsampledetails(pon,sample)
    {
        //await this.currentdate.fill(date)
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
}

export default Details