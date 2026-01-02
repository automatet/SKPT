import { expect } from '@playwright/test';
//import LoginData from '../loginData.json'
 
class Projecthome{
 
 
    constructor(page){
 
        this.page = page;
        this.Addproject = page.locator("//i[@class='bi bi-plus-lg']")
        this.ProjectID = page.locator("//input[@placeholder='Enter Project ID']")
        this.Clientname = page.locator("//input[@placeholder='Enter Client Name']")
        this.ClientSelect = page.locator('ngb-typeahead-window button', { hasText: 'kavita' })
        this.SOWNumber = page.locator("//input[@placeholder='Enter SOW Number']")
        this.CONumber = page.locator("//input[@placeholder='Enter CO Number']")
        this.ProjectSubmit = page.locator("//button[normalize-space()='Submit']")
        
        
       
    }
 async NewProject(){
   
      await this.Addproject.click();
      const randomNumber = Math.floor(Math.random() * 1000);
       await this.ProjectID.fill(String(randomNumber))
      //await this.ProjectID.fill("String(randomNumber)");
      await this.Clientname.click();
      await this.page.fill('#clientId', 'kavita');
await this.ClientSelect.click();
   const randomSONumber = Math.floor(Math.random() * 1000);
     await this.SOWNumber.fill(String(randomSONumber))
      await this.page.keyboard.press('Enter');
      const randomCONumber = Math.floor(Math.random() * 1000);
      await this.CONumber.fill(String(randomCONumber))
      await this.page.keyboard.press('Enter');
      await this.ProjectSubmit.click();


      
 }
     
}
 
export default Projecthome;