import { expect } from '@playwright/test';
import LoginData from '../loginData.json'

  class client{


    constructor(page){

        this.page = page;
        this.useremail = page.locator("//input[@id='email']")
        this.userpasword = page.locator("//input[@id='password']")
        this.loginbtn = page.locator("//button[@type='submit']")
        this.clickClient = page.locator("//button[contains(text(),' Clients ')]")
        this.ClickClientname= page.locator("//button[contains(text(),' kavita')]")
        this.clickInternal=page.locator("//button[contains(text(),' Internal Projects ')]")
        this.searchButton =page.getByRole('textbox', { name: 'Search Something' })
        this.clickProjectID=page.locator("//button[contains(text(),'prer_11113')]")
        this.clickFormId=page.locator("//button[contains(text(),'FID1191')]")
        this.proceedbtn = page.locator("//button[contains(text(),' Save and Proceed ')]")
        this.proceedbtn1 = page.locator("//button[contains(text(),' Save and Proceed')]")
        this.submitbtn = page.locator("//button[@id='submit-button']")
        this.verifyConfirmation=page.getByRole('heading', { name: 'Confirmation' })
        this.clickNo=page.locator("//button[contains(text(),' No')]")
        this.homebtn=page.locator('a').filter({ hasText: 'Home' })
        
    }


    async click_Client(){
        await this.clickClient.click()
    }
    async client_form(){
        await this.ClickClientname.click()
    }
    async click_internal(){
        await this.clickInternal.click()
    }
    async  rem(){  
        await this.searchButton.click()
        await this.searchButton.fill('prer_')
        await this.clickProjectID.click()
        await this.clickFormId.click()
         

    }
    async click_proceed(){
            await this.proceedbtn.click()
         }
    async click_proceed1(){
            await this.proceedbtn1.click()
         }
    async click_proceed2(){
            await this.proceedbtn1.click()
         }
    async click_proceed3(){
            await this.proceedbtn1.click()
         }
    async click_proceed4(){
            await this.proceedbtn1.click()
         }

    async click_submit(){
            await this.submitbtn.click()
            await expect(this.verifyConfirmation).toBeVisible();
            await this.clickNo.click()
            await this.homebtn.click()
         }

    }


  
  export default client;