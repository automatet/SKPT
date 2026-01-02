import {test, expect} from '@playwright/test'
import LoginData from '../loginData.json'
import client from '../pages/client.js'

test('login sampleuser user', async ({page})=>{
 
  const loginuser = new client(page)
    await page.goto(LoginData.url)
    await expect(page).toHaveURL(LoginData.url)
   
    await loginuser.sampleuser_login()   
    await page.waitForTimeout(6000);
    
    await expect(page).toHaveURL(LoginData.sampleurl)
    await page.waitForTimeout(6000);
    await loginuser.click_Client();
    await page.waitForTimeout(2000);
    await loginuser.client_form()
    await page.waitForTimeout(2000);
    await loginuser.click_internal();
    await page.waitForTimeout(2000);
    await loginuser.rem()
    await page.waitForTimeout(5000);
    await loginuser.click_proceed()
     await page.waitForTimeout(5000);

     await loginuser.click_proceed1()
     await page.waitForTimeout(5000);
     await loginuser.click_proceed2()
     await page.waitForTimeout(5000);
     await loginuser.click_proceed3()
     await page.waitForTimeout(5000);
     await loginuser.click_proceed4()
     await page.waitForTimeout(5000);
     await loginuser.click_submit()
     

})