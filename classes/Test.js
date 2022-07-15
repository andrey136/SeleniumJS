const {Data} = require("./Data");
const {TestCase} = require("./TestCase");

class Test{
  constructor(name, func, description) {
    this.name = name;
    this.func = func;
    this.data = new Data();
    this.description = description;
  }

  // Methods
  addTestCase(testData, expected) {
    let testCase = new TestCase(testData, expected);
    this.data.addNewTestCase(testCase);
  }

  addTestCases(data) {
    for (let i = 0; i < data.length; i++){
      let testCase = data[i];
      this.addTestCase(testCase.testData, testCase.expectedResults);
    }
  }

  loadTestCases(func) {
    this.addTestCases(func())
  }

  runTest(timeout=20000) {
    if (this.data.store.length < 1) return null;
    if (this.data.store.length < 4) {
      this.data.store.map(testCase => this.func(testCase.testData, testCase.expected))
    } else {
      for(let i = 0; i < this.data.store.length-2; i += 3){
        setTimeout(() => {
          this.func(this.data.store[i].testData, this.data.store[i].expected);
          this.func(this.data.store[i + 1].testData, this.data.store[i + 1].expected)
          this.func(this.data.store[i + 2].testData, this.data.store[i + 2].expected)
        }, i < 1 ? 0 : timeout);
      }
    }
  }

  updateName(name) {
    this.name = name
  }

  updateFunc(func) {
    this.func = func
  }

  updateData(data) {
    this.data = data
  }

  parseClassObjToObj() {
    return {
      name: this.name,
      func: this.func,
      data: this.data.parseClassObjToObj(),
    }
  }
}

module.exports = {Test}