function getEmailValidationTestCases() {
  return [
    {
      testData: {
        email: "abc-@mail.com"
      },
      expectedResults: {
        error_msg: "Email is invalid"
      }
    },
    {
      testData: {
        email: "abc- @mail.com"
      },
      expectedResults: {
        error_msg: "Email is invalid"
      }
    },
    {
      testData: {
        email: "abc..def@mail.com"
      },
      expectedResults: {
        error_msg: "Email is invalid"
      }
    },
    {
      testData: {
        email: ".abc@mail.com"
      },
      expectedResults: {
        error_msg: "Email is invalid"
      }
    },
    {
      testData: {
        email: "abc#def@mail.com"
      },
      expectedResults: {
        error_msg: "Email is invalid"
      }
    },
    {
      testData: {
        email: "abc.def@mail.c"
      },
      expectedResults: {
        error_msg: "Email is invalid"
      }
    },
    {
      testData: {
        email: "abc.def@mail#archive.com"
      },
      expectedResults: {
        error_msg: "Email is invalid"
      }
    },
    {
      testData: {
        email: "abc.def@mail"
      },
      expectedResults: {
        error_msg: "Email is invalid"
      }
    },
    {
      testData: {
        email: "abc.def@mail..com"
      },
      expectedResults: {
        error_msg: "Email is invalid"
      }
    }
  ];
}

module.exports = {getEmailValidationTestCases}