class Data {
  constructor() {
    this.store = [];
  }

  // Getter
  get data() {
    return this.store
  }

  // Update Methods
  updateData(store) {
    this.store = [...store];
  }

  // Methods
  addNewTestCase(testCase) {
    this.store = [...this.store, testCase];
  }

  removeTestCase(_id) {
    let store = [...this.store];
    store.filter(el => el._id !== _id);
    this.updateData(store);
  }

  getTestCase(_id) {
    for (let i = 0; i < this.store.length; i++){
      let testCase = this.store[i];
      if (testCase._id === _id) return testCase;
    }
    return null;
  }

  parseClassObjToObj() {
    let dataArray = [];
    for (let i = 0; i < this.store.length; i++){
      let testCase = this.store[i];
      dataArray.push(testCase.parseClassObjToObj());
    }
    return dataArray;
  }
}

module.exports = {Data}