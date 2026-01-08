import {test, expect} from '@playwright/test'
import LoginData from '../loginData.json'
import client from '../pages/sampleUser_client.js'
import LoginPage from '../pages/loginPage.js'

test('verify sampleuser client form', async ({page})=>{
 
  const clientuser = new client(page)

    const loginuser = new LoginPage(page)

    await loginuser.login(LoginData.sampleuser)   
    await expect(page).toHaveURL(LoginData.sampleurl)
    
    await clientuser.click_Client();
    await clientuser.client_form()
    await clientuser.click_internal();
    await clientuser.click_search()
    await clientuser.click_proceed()
     await clientuser.click_proceed1()
     await clientuser.click_proceed2()
     await clientuser.click_proceed3()
     await clientuser.click_proceed4()
     await clientuser.click_submit()
     

})