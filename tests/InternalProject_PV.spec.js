import {test, expect} from '@playwright/test'
import LoginPage from '../pages/loginPage.js'
import LoginData from '../loginData.json'
import Internalproject_PV from '../pages/InternalProject_PV.js'
 
test('login internal user', async ({page})=>{
 
  const loginuser = new LoginPage(page)
 
    await loginuser.login(LoginData.internaluser)   
    await expect(page).toHaveURL(LoginData.internalurl)
   
 
 
})
 
test('Create New Project', async ({page})=>{
 const loginuser = new LoginPage(page)
 
    await loginuser.login(LoginData.internaluser)   
    await expect(page).toHaveURL(LoginData.internalurl)
    //await page.waitForTimeout(5000)
   
    const Internal = new Internalproject_PV(page)
    await Internal.NewProject()
})
    //const randomPONumber = Math.floor(1000000000000000 + Math.random() * 9000000000000000).toString();
//await this.PONumber.fill(randomPONumber);
  