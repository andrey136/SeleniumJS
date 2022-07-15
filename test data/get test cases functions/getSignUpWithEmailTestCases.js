function getSignUpWithEmailTestCases() {
  return [
    {
      testData: {
        email: "george.harris@gmail.com",
        password: "coldbeer",
        confPassw: "coldbeer"
      },
      expectedResults: {}
    },
    {
      testData: {
        email: "george.harris@gmail.com",
        password: "coldbeer",
        confPassw: "coldbyeer"
      },
      expectedResults: {}
    }
  ];
}

module.exports = {getSignUpWithEmailTestCases}