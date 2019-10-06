module.exports = {
  config: {
    calculatorUrl: 'https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/'
  },
  testData: {
    validUserData1: {
      applicationType: 'Single',
      numberOfDependants: '0',
      propertyToBuy : 'Home',
      yourIncome: '80000',
      yourOtherIncome: '10000',
      livingExpenses: '500',
      currentHomeLoanRepayments: '0',
      otherLoanRepayments: '100',
      otherCommitments: '0',
      totalCreditCardLimits: '10000',
    },
    validUserData2: {
      applicationType: 'Joint',
      numberOfDependants: '2',
      propertyToBuy : 'Investment',
      yourIncome: '80000',
      yourOtherIncome: '10000',
      livingExpenses: '500',
      currentHomeLoanRepayments: '0',
      otherLoanRepayments: '100',
      otherCommitments: '0',
      totalCreditCardLimits: '10000',
    },
    invalidUserData1: {
      applicationType: 'Single',
      numberOfDependants: '0',
      propertyToBuy : 'Home',
      yourIncome: '0',
      yourOtherIncome: '0',
      livingExpenses: '1',
      currentHomeLoanRepayments: '0',
      otherLoanRepayments: '0',
      otherCommitments: '0',
      totalCreditCardLimits: '0',
    },
    borrowingEstimate: '$467,000',
    borrowErrorMessage: "Based on the details you've entered, we're unable to give you an estimate of your borrowing power with this calculator. For questions, call us on 1800 100 641."
  },
};
