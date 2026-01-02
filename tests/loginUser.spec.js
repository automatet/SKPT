/*import {test, expect} from '@playwright/test'
import LoginPage from '../pages/loginPage.js'
import LoginData from '../loginData.json'
 
test('login internal user', async ({page})=>{
 
  const loginuser = new LoginPage(page)
    await page.goto(LoginData.url)
    await expect(page).toHaveURL(LoginData.url)
   
    await loginuser.internaluser_login()   
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL(LoginData.internalurl)
 
 
})
test('login finance user', async ({page})=>{
 
  const loginuser = new LoginPage(page)
    await page.goto(LoginData.url)
    await expect(page).toHaveURL(LoginData.url)
   
    await loginuser.financeuser_login()   
    await page.waitForTimeout(3000);
   
    await expect(page).toHaveURL(LoginData.financeurl)

})
test('login sampleuser user', async ({page})=>{
 
  const loginuser = new LoginPage(page)
    await page.goto(LoginData.url)
    await expect(page).toHaveURL(LoginData.url)
   
    await loginuser.sampleuser_login()   
    await page.waitForTimeout(3000);

    await expect(page).toHaveURL(LoginData.sampleurl)
    
 
})
test('login project manager user', async ({page})=>{
 
  const loginuser = new LoginPage(page)
    await page.goto(LoginData.url)
    await expect(page).toHaveURL(LoginData.url)
   
    await loginuser.projectmanageruser_login()   
    await page.waitForTimeout(3000);

    await expect(page).toHaveURL(LoginData.projectmanagerurl)
 
 
})
test('login platformuser login', async ({page})=>{
 
  const loginuser = new LoginPage(page)
    await page.goto(LoginData.url)
    await expect(page).toHaveURL(LoginData.url)
   
    await loginuser.platformuser_login()   
    await page.waitForTimeout(3000);

    await expect(page).toHaveURL(LoginData.platformuserurl)
 
})*/