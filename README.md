# home_loan_borrow
#Description:
A simple front end testing repository for a home loan borrowing application.
Test scripts are using Cucumber with testcafe written in Javascript.
All the dependencies are managed by NPM.

#Set up: 

1) Clone/Download the project into your local
2) Download and install Node  https://nodejs.org/en/download/
3) Install testcafe by running the following command in terminal
npm install -g testcafe
4) Install all dependencies with following command
npm install

#Run Tests: 

1) To run all tests in CLI give the following command in terminal
MAC: npm run test 
Windows: npm run test-windows
Remote mobile devices: npm run test-remote
2) To run a specific test using cucumber tags
MAC: Insert the tag (Example: @smoke) in package.json, Config -> tags like mentioned below
"tags": "@smoke"
Windows: Add the tag in package.json, Scripts -> test-windows like mentioned below
"test-windows": "rd /s /q \"home_loan_borrow/results\" || cd home_loan_borrow && node ../../node_modules/gherkin-testcafe/main.js --tags @calculator",

3) Find the HTML and XML reports in home_loan_borrow/results folder.

4) To add/update test data go to /home_loan_borrow/resources/prod-resources.js file

5) To change the browser go to /home_loan_borrow/.testcaferc.json and update the "browsers" like mentioned below
"browsers": [
    "chrome:headless"
  ],
  or
  "browsers": [
      "firefox"
    ],
6) To run tests in parallel update /home_loan_borrow/.testcaferc.json with concurrency value as '3' or any number


Note: 
Node version that I used : 12.4.0
NPM version that I used : 6.9.0

