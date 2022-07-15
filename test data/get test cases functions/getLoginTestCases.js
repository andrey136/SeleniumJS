function getLogInTestCases() {
  return [
    {
      testData: {
        email: "misha.kolinz1242@gmail.com",
        password: "coldbeer"
      },
      expectedResults: {
        status: "logged in"
      }
    }, {
      testData: {
        email: "misha.kolinz1242@gmail.com",
        password: "coldbieer"
      },
      expectedResults: {
        status: "not authorized",
        error_msg: "Password is incorrect",
      }
    },
    {
      testData: {
        email: "misha.kolinz1242gmail.com",
        password: "coldbeeer"
      },
      expectedResults: {
        status: "not authorized",
        error_msg: "Password is incorrect"
      }
    },
    {
      testData: {
        email: "samuel.jackson@gmail.com",
        password: "Fdkk43OOd&&"
      },
      expectedResults: {
        status: "not authorized",
        error_msg: "User does not exist"
      }
    }
  ];
}

module.exports = {getLogInTestCases}