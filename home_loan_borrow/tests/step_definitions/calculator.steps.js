const { Given, Then } = require('cucumber');
const { testData } = require('../../resources/resource');
const calculatorPage = require('../pages/calculator.page');

let applicationType, propertyToBuy, numberOfDependant, option;
Given('I navigate to home loan calculator page of the bank', async t => {
    await t.navigateTo(calculatorPage.pageUrl);
});

Then('Work out how much I could borrow button is clicked', async t => {
    await t.click(calculatorPage.elements.calculateButton)
        .expect(calculatorPage.elements.calculateButton.visible).notOk();
});
Then('Start over button is clicked', async t => {
    await t.click(calculatorPage.elements.startOverButton);
});
Then('borrowing estimate is displayed correctly', async t => {
    await t.expect(calculatorPage.elements.borrowingEstimate.innerText).contains(testData.borrowingEstimate.toString());
});
Then(/^Your details, Your earnings and Your Expenses section fields are filled as '(.*)'$/, async function(t, data) {
    numberOfDependant = calculatorPage.elements.numberOfDependants;
    option = numberOfDependant.find('option');
    for (const row in testData) {
        if (row === data.toString()) {

            if (testData[row].applicationType.toString() === "Joint") {
                applicationType = calculatorPage.elements.applicationTypeJoint;
            } else if (testData[row].applicationType.toString() === "Single") {
                applicationType = calculatorPage.elements.applicationTypeSingle;
            }
            if (testData[row].propertyToBuy.toString() === "Home") {
                propertyToBuy = calculatorPage.elements.propertyToBuyHome;
            } else if (testData[row].propertyToBuy.toString() === "Investment") {
                propertyToBuy = calculatorPage.elements.propertyToBuyInvestment;
            }
            await t.click(applicationType, )
                .click(numberOfDependant)
                .click(option.withText(testData[row].numberOfDependants))
                .click(applicationType)
                .click(propertyToBuy)
                .typeText(calculatorPage.elements.textBoxes.yourIncome, testData[row].yourIncome, { replace: true })
                .typeText(calculatorPage.elements.textBoxes.yourOtherIncome, testData[row].yourOtherIncome, { replace: true })
                .typeText(calculatorPage.elements.textBoxes.livingExpenses, testData[row].livingExpenses, { replace: true })
                .typeText(calculatorPage.elements.textBoxes.currentHomeLoanRepayments, testData[row].currentHomeLoanRepayments, { replace: true })
                .typeText(calculatorPage.elements.textBoxes.otherLoanRepayments, testData[row].otherLoanRepayments, { replace: true })
                .typeText(calculatorPage.elements.textBoxes.otherCommitments, testData[row].otherCommitments, { replace: true })
                .typeText(calculatorPage.elements.textBoxes.totalCreditCardLimits, testData[row].totalCreditCardLimits, { replace: true });
            break;
        }
    }
});
Then('form should be cleared', async t => {
    await t
        .expect(calculatorPage.elements.applicationTypeSingle.checked).ok()
        .expect(option.value).eql('0')
        .expect(calculatorPage.elements.propertyToBuyHome.checked).ok();
    const inputTextBoxes = calculatorPage.elements.textBoxes;
    for (const element in inputTextBoxes) {
        await t.expect(inputTextBoxes[element].value).eql('0');
    }

});
Then('error message should be displayed', async t => {
    await t.expect(calculatorPage.elements.borrowErrorText).ok(testData.borrowErrorMessage);
});
