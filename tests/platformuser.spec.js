import {page, test, expect} from '@playwright/test'
import LoginPage from '../pages/loginPage.js'
import LoginData from '../loginData.json'
import ClientsPage from '../pages/ClientsPage.js'
import newproject from '../pages/newproject.js'
import sampleform1 from '../pages/sampleform1.js'



test('login platformuser login', async ({page})=>{
  //test.setTimeout(60_000);
 
  const loginuser = new LoginPage(page)
  const clientpage = new ClientsPage(page)
  const projectnew = new newproject(page)
  const samplepage =new sampleform1(page)


 const projectId = `test${Date.now()}`;
 const sow = `${Math.floor(Math.random() * 9000 + 1000)}`;
 const co = `${Math.floor(Math.random() * 9000 + 1000)}`;

 const today = new Date();
 const formattedDate = today.toISOString().split('T')[0];

//login 
    
     await loginuser.login(LoginData.platformuser)  
     await expect(page).toHaveURL(LoginData.platformuserurl)

// click on client page and select client
   await clientpage.openClients();
   await page.waitForTimeout(4000)
   await clientpage.selectClient('First client1');

   // add the project
   await projectnew.internalprojects();
   await page.waitForTimeout(2000);
   await projectnew.addprojects();

   // create new project
await projectnew.fillprojectdetails(projectId, sow, co)


await projectnew.submitclicker();

await projectnew.searchproject(projectId);

await projectnew.createnewrequest();

// fill sample page
 //await samplepage.verifyid()
 await samplepage.filldate(formattedDate)
 await samplepage.fillsampledetails(sow,co)

 //submission
 await samplepage.submission();

 //safety
 await samplepage.safety();

 //shipping
 await samplepage.shipper();

 await samplepage.couriernumbers();

 
  await samplepage.formfill()
  
 
})
;