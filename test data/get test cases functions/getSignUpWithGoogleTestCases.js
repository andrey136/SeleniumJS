function getSignUpWithGoogleTestCases() {
  return [
    {
      testData: {
        email: "samuel.jackson@gmail.com",
        password: "Fdkk43OOd&&"
      },
      expectedResults: {
        error_msg: 'Couldn’t sign you in'
      }
    }
  ];
}

module.exports = { getSignUpWithGoogleTestCases }