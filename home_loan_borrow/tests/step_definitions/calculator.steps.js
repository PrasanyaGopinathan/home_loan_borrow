const { Given, Then } = require('cucumber');
const { testData } = require('../../resources/resource');
const calculatorPage = require('../pages/calculator.page');
const Selector = require('testcafe');

Given('I navigate to home loan calculator page of the bank', async t => {
    await t.navigateTo(calculatorPage.pageUrl);
});

Then('Work out how much I could borrow button is clicked', async t => {
    await t.click(calculatorPage.elements.calculateButton);
});
Then('Start over button is clicked', async t => {
    await t.click(calculatorPage.elements.startOverButton);
});
Then('borrowing estimate is displayed correctly', async t => {
    await t.expect(calculatorPage.elements.borrowingEstimate.innerText).contains(testData.borrowingEstimate.toString());
});
Then(/^Your details, Your earnings and Your Expenses section fields are filled as '(.*)'$/, async function(t, data) {
    for (const row in testData) {
        if (row === data.toString()) {
            await t.click(calculatorPage.elements.form.applicationTypeSingle)
            // .click(selectNumberOfDepOption.withText('0'))
                .click(calculatorPage.elements.form.propertyToBuyHome)
                .typeText(calculatorPage.elements.form.yourIncome, testData[row].yourIncome)
                .typeText(calculatorPage.elements.form.yourOtherIncome, testData[row].yourOtherIncome)
                .typeText(calculatorPage.elements.form.livingExpenses, testData[row].livingExpenses)
                .typeText(calculatorPage.elements.form.currentHomeLoanRepayments, testData[row].currentHomeLoanRepayments)
                .typeText(calculatorPage.elements.form.otherLoanRepayments, testData[row].otherLoanRepayments)
                .typeText(calculatorPage.elements.form.otherCommitments, testData[row].otherCommitments)
                .typeText(calculatorPage.elements.form.totalCreditCardLimits, testData[row].totalCreditCardLimits);
            break;
        }
    }
 });
Then('form should be cleared', async t => {
    // const formElements= calculatorPage.elements.form;
    // for (const element in formElements){
    //     await t.expect(element[])
    // }
});
Then ('error message should be displayed', async  t => {
    await t.expect(calculatorPage.elements.borrowErrorText).ok(testData.borrowErrorMessage);
});
