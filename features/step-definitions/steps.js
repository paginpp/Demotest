const { Given, When, Then } = require('@cucumber/cucumber');

const BorrowPage = require('../../borrow.page');
const testDataFile = require('../../testcasedata')

const pages = {
     borrow: BorrowPage
 }

 /**
  * Open  required page
  * */
 Given(/^I am on the (\w+) page$/, async (page) => {
     await pages[page].open();
 });

/**
 * Fill form on required page
 * */
When(/^I fill the form with test data for (\w+) test$/, async(testName) => {
    await BorrowPage.setBorrowPageValues(testName);
});

/**
 * Check Borrow power values
 * */
Then (/^I expect to see borrowing power for (\w+) test$/, async(testName)=> {
    var power = testDataFile.testCaseData[testName].power;
    await expect(BorrowPage.borrowPowerText).toHaveText(power)
})

/**
 * Check error message
 * */
Then (/^I expect to see message for (\w+) test$/, async(testName)=> {
    var message = testDataFile.testCaseData[testName].message;
    await expect(BorrowPage.borrowErrorText).toHaveText(message)
})

/**
 * Click on start over button
 * */
Then (/^I click on start over button$/, async () => {
    await (await BorrowPage.btnStartOver).click()
});

/**
 * Check empty values on the form
 * */
Then (/^I expect to see clear form for (\w+) test$/, async(testName)=> {
    var value = testDataFile.testCaseData[testName].defaultValue
    await expect(BorrowPage.mainIncome).toHaveValue(value)
    await expect(BorrowPage.otherIncome).toHaveValue(value)
    await expect(BorrowPage.livingExpenses).toHaveValue(value)
    await expect(BorrowPage.currentHomeLoanRep).toHaveValue(value)
    await expect(BorrowPage.otherLoanRep).toHaveValue(value)
    await expect(BorrowPage.otherCommitments).toHaveValue(value)
    await expect(BorrowPage.totalcreditCardLimits).toHaveValue(value)
})
