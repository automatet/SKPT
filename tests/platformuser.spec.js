import {test, expect} from '@playwright/test'
import LoginPage from '../pages/loginPage.js'
import LoginData from '../loginData.json'
import ClientsPage from '../pages/ClientsPage.js'
import addproject from '../pages/addproject.js'
import newproject from '../pages/newproject.js'
//import Dynamicid from '../pages/Dynamicid.js'
import sampleform1 from '../pages/sampleform1.js'


test('login platformuser login', async ({page})=>{
 
  const loginuser = new LoginPage(page)
  const clientpage = new ClientsPage(page)
  const projectadd = new addproject(page)
  const projectnew = new newproject(page)
  const samplepage =new sampleform1(page)

//const projectId = `test-${new Date().toISOString().replace(/[-:.TZ]/g, '')}`;
const projectId = `test${Date.now()}`;
//const projectId = Math.floor(100000 + Math.random() * 900000).toString(); // e.g., '740982'
const sow = `${Math.floor(Math.random() * 9000 + 1000)}`;
const co = `${Math.floor(Math.random() * 9000 + 1000)}`;

    await page.goto(LoginData.url)
    await expect(page).toHaveURL(LoginData.url)
   
    await loginuser.platformuser_login()   
    await page.waitForTimeout(7000);

    await expect(page).toHaveURL(LoginData.platformuserurl)

// click on client page and select client
   await clientpage.openClients();
   await page.waitForTimeout(4000)
   await clientpage.selectClient('First client1');

   // add the project
   await projectadd.internalprojects();
   await page.waitForTimeout(2000);
   await projectadd.addprojects();

   // create new project
await projectnew.fillprojectdetails(projectId, sow, co)
await page.waitForTimeout(5000);

await projectnew.submitclicker();
await page.waitForTimeout(2000);

//await projectnew.searchforid(projectId)
await page.locator('//input[@aria-label="Search Something"]').fill(projectId)
//await page.waitForTimeout(4000);
await page.locator(`//button[normalize-space()='${projectId}']`).click();
//await projectnew.selectbufferedid();
//await page.waitForTimeout(3000);
await projectnew.createnewrequest();
//await page.waitForTimeout(2000);

const today = new Date();
const formattedDate = today.toISOString().split('T')[0];
 await page.locator("//input[@id='plannedDate']").fill(formattedDate);
 await expect(await page.locator("//input[@id='plannedDate']")).toHaveValue(formattedDate);
// fill sample page
 await samplepage.fillsampledetails('7867','8745')

 //submission
 await samplepage.submission();

 //safety
 await samplepage.safety();
 
})
