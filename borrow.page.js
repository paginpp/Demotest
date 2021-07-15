const Page = require('./page');
const testDataFile = require('./testcasedata');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class BorrowPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }

    get appTypeSingle() {return $('[for="application_type_single"]')}
    get borrowTypeHome() {return $('[for="borrow_type_home"]')}
    get mainIncome() {return $('input[aria-labelledby="q2q1"]')}
    get otherIncome() {return $('input[aria-labelledby="q2q2"]')}
    get numOfDep() { return $('select[title="Number of dependants"]')}
    get livingExpenses() {return $('input[aria-labelledby="q3q1"]')}
    get currentHomeLoanRep() {return $('input[aria-labelledby="q3q2"]')}
    get otherLoanRep() {return $('input[aria-labelledby="q3q3"]')}
    get otherCommitments() {return $('input[aria-labelledby="q3q4"]')}
    get totalcreditCardLimits() {return $('input[aria-labelledby="q3q5"]')}

    get btnBorrow(){ return $("button[id='btnBorrowCalculater']")}

    get borrowPowerText(){ return $("span[id='borrowResultTextAmount']")}

    get btnStartOver(){ return $("button[class='start-over']")}

    get borrowErrorText() {return $("span[class='borrow__error__text']")}


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }

    async setBorrowPageValues(testName){

        if(testDataFile.testCaseData[testName].appType  === "single"){
            await (await this.appTypeSingle).click();
        }
        if(testDataFile.testCaseData[testName].home === "live in"){
             await (await this.borrowTypeHome).click();
        }
        var  num = testDataFile.testCaseData[testName].numberDependents;
        await (await this.numOfDep).selectByIndex(num);

        var income = testDataFile.testCaseData[testName].income;
        await (await this.mainIncome).setValue(income);

        var otherincome = testDataFile.testCaseData[testName].otherIncome;
        await (await this.otherIncome).setValue(otherincome);

        var livingexpenses = testDataFile.testCaseData[testName].livingExpenses;
        await (await this.livingExpenses).setValue(livingexpenses);

        var currenthomeloan = testDataFile.testCaseData[testName].currentHomeLoan;
        await (await this.currentHomeLoanRep).setValue(currenthomeloan);

        var otherloan = testDataFile.testCaseData[testName].otherLoan;
        await (await this.otherLoanRep).setValue(otherloan);

        var othercom = testDataFile.testCaseData[testName].otherCommitments;
        await (await this.otherCommitments).setValue(othercom);

        var totalcreds = testDataFile.testCaseData[testName].creditCards;
        await (await this.totalcreditCardLimits).setValue(totalcreds);

        await (await  this.btnBorrow).click();

    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () { return super.openborrow();
    }
}

module.exports = new BorrowPage();
