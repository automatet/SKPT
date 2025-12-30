import {test, expect} from '@playwright/test'
import LoginPage from '../pages/loginPage.js'
import LoginData from '../loginData.json'




 
test('login internal user', async ({page})=>{
 
  const loginuser = new LoginPage(page)
 
    await loginuser.login(LoginData.internaluser)   
    await expect(page).toHaveURL(LoginData.internalurl)
 
 
})
test('login finance user', async ({page})=>{
 
  const loginuser = new LoginPage(page)

    await loginuser.login(LoginData.financeuser)   
    await expect(page).toHaveURL(LoginData.financeurl)

})
test('login sampleuser user', async ({page})=>{
 
  const loginuser = new LoginPage(page)

    await loginuser.login(LoginData.sampleuser)   
    await expect(page).toHaveURL(LoginData.sampleurl)
    
 
})
test('login project manager user', async ({page})=>{
 
  const loginuser = new LoginPage(page)

    await loginuser.login(LoginData.projectmanageruser)   
    await expect(page).toHaveURL(LoginData.projectmanagerurl)
 
 
})
test('login platformuser login', async ({page})=>{
 
  const loginuser = new LoginPage(page)
     await loginuser.login(LoginData.platformuser)  
     await expect(page).toHaveURL(LoginData.platformuserurl)
 
})