import { expect } from '@playwright/test';
import LoginData from '../loginData.json'

class LoginPage{
 
 
    constructor(page){

        this.page = page;
        this.useremail = page.locator("//input[@id='email']")
        this.userpasword = page.locator("//input[@id='password']")
        this.loginbtn = page.locator("//button[@type='submit']")
        
    }
    async login(username) {
    await this.page.goto(LoginData.url)
    await this.useremail.fill(username);
    await this.userpasword.fill(LoginData.password);
    await this.loginbtn.click();
    await this.page.waitForTimeout(8000);
    }

    
}

export default LoginPage;