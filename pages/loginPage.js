import { expect } from '@playwright/test';
import LoginData from '../loginData.json'

class LoginPage{
 
 
    constructor(page){

        this.page = page;
        this.useremail = page.locator("//input[@id='email']")
        this.userpasword = page.locator("//input[@id='password']")
        this.loginbtn = page.locator("//button[@type='submit']")
        
    }

    async internaluser_login(){
        await this.useremail.fill(LoginData.internaluser)
        await this.userpasword.fill(LoginData.password)     
        await this.loginbtn.click()

    }
     async financeuser_login(){
        await this.useremail.fill(LoginData.financeuser)
        await this.userpasword.fill(LoginData.password)     
        await this.loginbtn.click()

    }
   async sampleuser_login(){
        await this.useremail.fill(LoginData.sampleuser)
        await this.userpasword.fill(LoginData.password)     
        await this.loginbtn.click()

    }
     async projectmanageruser_login(){
        await this.useremail.fill(LoginData.projectmanageruser)
        await this.userpasword.fill(LoginData.password)     
        await this.loginbtn.click()

    }
    async platformuser_login(){
        await this.useremail.fill(LoginData.platformuser)
        await this.userpasword.fill(LoginData.password)     
        await this.loginbtn.click()

    }
}

export default LoginPage;