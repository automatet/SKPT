import {test, expect} from '@playwright/test';
import LoginPage from '../pages/loginPage.js'
import LoginData from '../loginData.json'
import Search_Data from '../SearchFunctionality.json';
import SearchFunctionality from '../pages/SearchFunctionality.js';


  test('Search using default JSON value', async ({ page }) => {
    const loginuser = new LoginPage(page)
    const search = new SearchFunctionality(page)
    await loginuser.login(LoginData.sampleuser)
    await page.waitForTimeout(6000);
    await expect(page).toHaveURL(LoginData.sampleurl)
    const customSearchValue = Search_Data.Search_Criteria;
    await search.user_searchCriteria(customSearchValue);
    await page.waitForTimeout(6000);
  });