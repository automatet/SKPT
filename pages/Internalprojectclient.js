import { expect } from '@playwright/test';
import LoginData from '../loginData.json'

class externalproject{

    const (externalproject) {
        this.externalproject= externalproject;
        this.useremail = page.locator("//input[@id='email']")
        this.userpasword = page.locator("//input[@id='password']")
        this.loginbtn = page.locator("//button[@type='submit']")
        this.externalproject_client=page.locator ("//button[@class='nav-link active']")
        this.externalproject_clientthree=page.locator("//button[@data-client-id='a94197d8-5c51-4c4f-b98c-08de477f3fcd']")
       this.externalproject_addproject=page.locator("//input[@placeholder='Enter Project ID']")
this.externalproject_sawnumber=page.locator("//input[@placeholder='Enter SOW Number']") 
this.externalproject_conumber=page.locator("//input[@placeholder='Enter CO Number']")

    }
async platformuser_login(){
        await this.useremail.fill(LoginData.platformuser)
        await this.userpasword.fill(LoginData.password)     
        await this.loginbtn.click()

    }


async externalproject() {
    await this.externalproject_client.click()
    await this.externalproject_clientthree.click()
   const externalproject_addproject = `test${Date.now()}`;
   await page.keyboard.press ('Enter')
   const externalproject_sawnumber = `${Math.floor(Math.random() * 9000 + 1000)}`;
   await page.keyboard.press ('Enter')
   const externalproject_conumber= `${Math.floor(Math.random() * 9000 + 1000)}`;
   await page.keyboard.press ('Enter')

    
    
}

}


    
    export default externalproject







