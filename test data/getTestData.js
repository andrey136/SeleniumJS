const { getLogInTestCases } = require("./get test cases functions/getLoginTestCases");
const { getSignUpWithEmailTestCases } = require("./get test cases functions/getSignUpWithEmailTestCases");
const { getSignUpWithGoogleTestCases } = require("./get test cases functions/getSignUpWithGoogleTestCases");
const { getEmailValidationTestCases } = require("./get test cases functions/getEmailValidationTestCases");
const { test_01, test_02, test_03, test_04 } = require("../functions/selenium_tests");


function getTestData() {
  return {
    login: {
      func: test_01,
      getTestCases: getLogInTestCases
    },
    signUpWithEmail: {
      func: test_02,
      getTestCases: getSignUpWithEmailTestCases
    },
    signUpWithGoogle: {
      func: test_03,
      getTestCases: getSignUpWithGoogleTestCases
    },
    emailValidation: {
      func: test_04,
      getTestCases: getEmailValidationTestCases
    }
  }
}

module.exports = {getTestData}