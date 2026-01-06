import {test, expect} from '@playwright/test'
import LoginPage from '../pages/loginPage.js'
import LoginData from '../loginData.json'
import externalProject from '../pages/Internalprojectclient.js'
import newrequestpagee from '../pages/Internalprojectclient.js'

test('login platformuser login', async ({page})=>{
 
  const loginuser = new LoginPage(page)
    await loginuser.login(LoginData.platformuser)  
   // await expect(page).toHaveURL(LoginData.platformuser)

   

 
})

test('login interproject client',async({page})=> { 
const loginuser = new LoginPage(page)
    await loginuser.login(LoginData.platformuser)  
  //  await expect(page).toHaveURL(LoginData.platformuser)




    const interproject = new externalProject (page)
    await interproject.externalproject()

})
test('newrequest',async({page})=> { 

    const loginuser = new LoginPage(page)
    await loginuser.login(LoginData.platformuser)
    
    
    const project= new newrequestpagee(page)
    await project.newrequestpagee()
  

})