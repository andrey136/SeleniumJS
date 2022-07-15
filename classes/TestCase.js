const uniqid  = require("uniqid")

class TestCase {
  constructor(testDataObj, expectedResultsObj) {
    this.testData = testDataObj;
    this.expected = expectedResultsObj;
    this._id = uniqid();
  }

  // Update Methods

  updateExpected(expectedResultsObj) {
    this.expected = expectedResultsObj
  }

  updateTestData(testDataObj) {
    this.testData = testDataObj
  }

  parseClassObjToObj() {
    return {
      testData: this.testData,
      expected: this.expected,
      _id: this._id
    };
  }
}

module.exports = {TestCase}