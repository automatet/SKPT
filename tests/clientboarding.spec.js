import {test, expect} from '@playwright/test'
import LoginPage from '../pages/loginPage.js'
import LoginData from '../loginData.json'
import ClientsPage from '../pages/ClientsPage.js'
import clientdetail from '../pages/clientdetail.js'

test('login platformuser login', async ({page})=>{

    const loginuser = new LoginPage(page)
    const clickclient= new ClientsPage(page)
    const clientpopup = new clientdetail(page)

    const clientId = `CID-${Date.now()}`;
    const clientName = `First client ${Math.floor(Math.random() * 1000)}`;


//login page 
    await loginuser.login(LoginData.platformuser)  
    await expect(page).toHaveURL(LoginData.platformuserurl)

    //click client
    await clickclient.openClients()

    await page.waitForTimeout(3000);

 //  add client details 

await clientpopup.clientpagedetails(clientId,clientName)
//verify 
await clientpopup.verifySuccessMessage();


});

