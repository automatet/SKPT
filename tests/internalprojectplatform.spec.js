import {test, expect} from '@playwright/test'
import LoginData from '../loginData.json'

test('login platformuser login', async ({page})=>{
 
  const loginuser = new LoginPage(page)
    await page.goto(LoginData.url)
    await expect(page).toHaveURL(LoginData.url)
   
    await loginuser.platformuser_login()   
    await page.waitForTimeout(3000);

    await expect(page).toHaveURL(LoginData.platformuserurl)
 
})

test('login interproject client',async({page})=> { 





})