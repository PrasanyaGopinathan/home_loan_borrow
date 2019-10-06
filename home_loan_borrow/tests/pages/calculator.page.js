const { config } = require('../../resources/resource');
const Selector = require('testcafe').Selector;

const calculatorPage = {
    pageUrl: config.calculatorUrl,
    elements: {
        applicationTypeSingle: Selector('#application_type_single'),
        applicationTypeJoint: Selector('#application_type_joint'),
        numberOfDependants: Selector ('select[title="Number of dependants"]'),
        propertyToBuyHome: Selector('#borrow_type_home'),
        propertyToBuyInvestment: Selector('#borrow_type_investment'),
        textBoxes:{
            yourIncome: Selector('input[aria-labelledby=\'q2q1\']'),
            yourOtherIncome: Selector('input[aria-labelledby=\'q2q2\']'),
            secApplicantIncome: Selector('input[aria-labelledby=\'q2q3\']'),
            secApplicantOtherIncome: Selector('input[aria-labelledby=\'q2q4\']'),
            livingExpenses: Selector('input[aria-labelledby=\'q3q1\']'),
            currentHomeLoanRepayments: Selector('input[aria-labelledby=\'q3q2\']'),
            otherLoanRepayments: Selector('input[aria-labelledby=\'q3q3\']'),
            otherCommitments: Selector('input[aria-labelledby=\'q3q4\']'),
            totalCreditCardLimits: Selector('input[aria-labelledby=\'q3q5\']')
        },
        borrowingEstimate: Selector('.borrow__result__text__amount'),
        borrowErrorText: Selector('.borrow__error__text'),
        calculateButton: Selector('.btn--borrow__calculate'),
        startOverButton: Selector('.start-over')
    },

};
module.exports = calculatorPage;
