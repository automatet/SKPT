import { expect } from '@playwright/test';

class SampleManagementUserSort {

    constructor(page){
        
    this.page=page;
    //this.FormID_Sort = page.locator("//div[contains(text(),'Form ID')]").first();;
    this.FormID_Sort = page.locator("//div[contains(text(),'Form ID')]/ancestor::div//div[@class='tabulator-col-sorter']").first();
    
    this.SubmissionDate_sort = page.locator("//div[contains(text(),'Submission Date')]/ancestor::div//div[@class='tabulator-col-sorter']").nth(1);
    
    this.LIMSProjectID_sort = page.locator("//div[contains(text(),'LIMS Project ID')]/ancestor::div//div[@class='tabulator-col-sorter']").nth(2);
    
    this.ClientName_sort = page.locator("//div[contains(text(),'Client Name')]/ancestor::div//div[@class='tabulator-col-sorter']").nth(3);
    
    this.Status_sort = page.locator("//div[contains(text(),'Status')]/ancestor::div//div[@class='tabulator-col-sorter']").nth(4);
    
    this.ProjectName_sort = page.locator("//div[contains(text(),'Project Name')]/ancestor::div//div[@class='tabulator-col-sorter']").nth(5);
    
    this.InternalProject_sort = page.locator("//div[contains(text(),'Internal Project')]/ancestor::div//div[@class='tabulator-col-sorter']").nth(6);

    }

    async user_clickson_FormsIDSort() {
        await this.FormID_Sort.click();
        
    }

     async user_clickson_SubmissionDateSort() {
       await this.SubmissionDate_sort.click();
       
    }

    async user_clickson_LIMSProjectIDSort() {
        await this.LIMSProjectID_sort.click();
        
    }
    async user_clickson_ClientNameSort() {
        await this.ClientName_sort.click();
        

    }
    async user_clickson_StatusSort() {
        await this.Status_sort.click();
        

    }
    async user_clickson_ProjectNamesort() {
        await this.ProjectName_sort.click();
        

    }

    async user_clickson_InternalProjectsort() {
        await this.InternalProject_sort.click();
        

    }
}

export default SampleManagementUserSort;