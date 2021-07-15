/***
Test data for tests with names BorrowPower, StartOver and ErrorMessage
*/
module.exports.testCaseData = {
    BorrowPower: {
        appType: "single",
        home: "live in",
        numberDependents: 0,
        income: 80000,
        otherIncome: 10000,
        livingExpenses: 500,
        currentHomeLoan: 0,
        otherLoan: 100,
        otherCommitments:0,
        creditCards: 10000,
        power: "$507,000"
    },
    StartOver:{
        appType: "single",
        home: "live in",
        numberDependents: 0,
        income: 80000,
        otherIncome: 10000,
        livingExpenses: 500,
        currentHomeLoan: 0,
        otherLoan: 100,
        otherCommitments:0,
        creditCards: 10000,
        defaultValue: "0"
    },

    errorMessage:{
        appType: "single",
        home: "live in",
        numberDependents: 0,
        income: 0,
        otherIncome: 0,
        livingExpenses: 1,
        currentHomeLoan: 0,
        otherLoan: 0,
        otherCommitments:0,
        creditCards: 0,
        message:  "Based on the details you've entered, we're unable to give you an estimate of your borrowing power with this calculator. For questions, call us on 1800 035 500."
    }
};

