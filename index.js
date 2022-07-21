const { Test } = require("./classes/Test");
const { getTestData } = require("./test data/getTestData.js");

const tests = [];

let testData = getTestData();
/*
variable testData is an object with the following format
{
  nameOfTheTest: {
    func: selenium_test, // this is the script that gets executed; actual test
    getTestCases: some_function, // getTestCases returns a list of test data units like emails, passwords and expected results from the actual test
  }
}
*/

for (const testName in testData) {
  // testName is the same thing as nameOfTheTest as shown in a breakdown of testData variable above,
  let newTest = new Test(testName, testData[testName].func, "")
  newTest.addTestCases(testData[testName].getTestCases())
  tests.push(newTest)
}

function runAllTests(){
  for (let i = 0; i < tests.length; i++) {
    let test = tests[i];
    let timeout = i < 1 ? 0 : 20000; // ms
    // test.addTestCases(testData[test.name].getTestCases())
    console.log(test.parseClassObjToObj()) // test class obj() is converted to js object and shown in the console
    setTimeout(() => test.runTest(), timeout) // we need it so not all tests start getting executed simultaneously
  }
}

function runTest(name, timeout=10000) {
  // All test names: login, signUpWithEmail, signUpWithGoogle, emailValidation
  for (const test of tests) {
    if (test.name === name) {
      console.log(test.parseClassObjToObj()) // test class obj() is converted to js object and shown in the console
      setTimeout(() => test.runTest(), timeout) // we need it so not all tests start getting executed simultaneously
      break;
    }
  }
}

runTest("emailValidation", 0)
