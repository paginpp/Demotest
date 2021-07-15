const { Given, When, Then, And } = require('@cucumber/cucumber');

const LoginPage = require('../../login.page');
const SecurePage = require('../../secure.page');
const BorrowPage = require('../../borrow.page');
const testDataFile = require('../../testcasedata')

const pages = {
     login: LoginPage,
     borrow: BorrowPage
 }

 Given(/^I am on the (\w+) page$/, async (page) => {
     await pages[page].open();
 });



When(/^I fill the form with test data for (\w+) test$/, async(testName) => {
    await BorrowPage.setBorrowPageValues(testName);
    await browser.debug();
});

Then (/^I expect to see borrowing power for (\w+) test$/, async(testName)=> {
    var power = testDataFile.testCaseData[testName].power;
    await expect(BorrowPage.borrowPowerText).toHaveText(power)
})


Then (/^I expect to see message for (\w+) test$/, async(testName)=> {
    var message = testDataFile.testCaseData[testName].message;
    await expect(BorrowPage.borrowErrorText).toHaveText(message)
})

Then (/^I click on start over button$/, async () => {
    await (await BorrowPage.btnStartOver).click()
});

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


When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});



Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

