import {test, expect} from '@playwright/test'
import LoginPage from '../pages/loginPage.js'
import LoginData from '../loginData.json'
import Internalproject from '../pages/project_home.js'
 
test('login internal user', async ({page})=>{
 
  const loginuser = new LoginPage(page)
    await page.goto(LoginData.url)
    await expect(page).toHaveURL(LoginData.url)
   
    await loginuser.internaluser_login()  
    
 
 
})

test('Create internal form', async ({page})=>{
 
  const loginuser = new LoginPage(page)
    await page.goto(LoginData.url)
    await expect(page).toHaveURL(LoginData.url)
   
    await page.waitForTimeout(5000)
    
    await loginuser.internaluser_login()  
   
 
    //await page.waitForTimeout(5000)
    
    const Internal = new Internalproject(page)
    await Internal.formid()

    //const randomPONumber = Math.floor(1000000000000000 + Math.random() * 9000000000000000).toString();
//await this.PONumber.fill(randomPONumber);
    
 
})
 