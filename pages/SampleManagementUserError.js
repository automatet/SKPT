import { expect } from '@playwright/test';
import SampleManagementUserData from '../SampleManagementUserData.json'

class SampleUserError{

    constructor(page) {
    this.page=page;
    this.sampleusermessageerror = page.locator("//div[@class='text-danger']/ancestor::div//small[contains(text(),'This LIMS Project ID already exists under another project.')]").describe('This LIMS Project ID already exists under another project');
    
}
async user_verifies_error_message_forsampleusermanager() {
    await expect(this.sampleusermessageerror).toBeVisible({
         timeout: 99990
    });
}
}

export default SampleUserError;