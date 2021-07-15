const Page = require('./page');
const testDataFile = require('./testcasedata');
/**
 * Borrow page containing specific selectors and methods for a specific page
 */
class BorrowPage extends Page {
    /**
     * define selectors using getter methods
     */
    /** application type selector for single application*/
    get appTypeSingle() {return $('[for="application_type_single"]')}

    /**  selector for borrow type home*/
    get borrowTypeHome() {return $('[for="borrow_type_home"]')}

    /**  selector for income*/
    get mainIncome() {return $('input[aria-labelledby="q2q1"]')}

    /**  selector for other income*/
    get otherIncome() {return $('input[aria-labelledby="q2q2"]')}

    /**  selector for number of dependants*/
    get numOfDep() { return $('select[title="Number of dependants"]')}

    /**  selector for living expenses*/
    get livingExpenses() {return $('input[aria-labelledby="q3q1"]')}

    /**  selector for current home loan repayments*/
    get currentHomeLoanRep() {return $('input[aria-labelledby="q3q2"]')}

    /**  selector for other loan repayments*/
    get otherLoanRep() {return $('input[aria-labelledby="q3q3"]')}

    /**  selector for other commitments*/
    get otherCommitments() {return $('input[aria-labelledby="q3q4"]')}

    /**  selector for total credit cards limits*/
    get totalcreditCardLimits() {return $('input[aria-labelledby="q3q5"]')}

    /**  selector for borrow power  calculation button*/
    get btnBorrow(){ return $("button[id='btnBorrowCalculater']")}

    /**  selector for borrow power text after calculation*/
    get borrowPowerText(){ return $("span[id='borrowResultTextAmount']")}

    /**  selector for start over calculation button */
    get btnStartOver(){ return $("button[class='start-over']")}

    /**  selector for error text in case of incorrect values in calculation */
    get borrowErrorText() {return $("span[class='borrow__error__text']")}


    /**
     * method to fill the required values in borrow page form
     */

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
     * open required page
     */
    open () { return super.openborrow();
    }
}

module.exports = new BorrowPage();
