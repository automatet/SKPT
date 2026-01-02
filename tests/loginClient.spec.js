import {test, expect} from '@playwright/test'
import LoginData from '../loginData.json'
import client from '../pages/client.js'
import LoginPage from '../pages/loginPage.js'

test('verify sampleuser client form', async ({page})=>{
 
  const clientuser = new client(page)

    const loginuser = new LoginPage(page)

    await loginuser.login(LoginData.sampleuser)   
    await expect(page).toHaveURL(LoginData.sampleurl)
    
    await clientuser.click_Client();
    await page.waitForTimeout(2000);
    await clientuser.client_form()
    await page.waitForTimeout(2000);
    await clientuser.click_internal();
    await page.waitForTimeout(2000);
    await clientuser.rem()
    await page.waitForTimeout(5000);
    await clientuser.click_proceed()
     await page.waitForTimeout(5000);

     await clientuser.click_proceed1()
     await page.waitForTimeout(5000);
     await clientuser.click_proceed2()
     await page.waitForTimeout(5000);
     await clientuser.click_proceed3()
     await page.waitForTimeout(5000);
     await clientuser.click_proceed4()
     await page.waitForTimeout(5000);
     await clientuser.click_submit()
     

})