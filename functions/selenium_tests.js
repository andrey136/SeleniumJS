const {Builder, By, until} = require("selenium-webdriver");
const assert = require("chai").assert

async function test_01(data, expected){
  // Login test script
  // Doesn't work
  let driver = await new Builder().forBrowser("chrome").build()
  await driver.get("https://app.sendpotion.com/");

  let loginLink = await driver.findElement(By.css("div.login-into-potion span.link-text"));
  loginLink.click()
  let loginForm = await driver.wait(until.elementLocated(By.css("div.potion-login-form")), 10000);

  let email = await loginForm.findElement(By.css("input[type='email'][placeholder='Enter your email']"));
  email.sendKeys(data.email);

  let password = await loginForm.findElement(By.css("input[type='password'][placeholder='Enter your password']"));
  password.sendKeys(data.password);

  let submitBtn = await loginForm.findElement(By.css("div.submit-form button"))
  submitBtn.click()

  if(expected.status === "logged in"){

  } else {
    try{
      let msg = await driver.findElement(By.css("div.potion-login-form > div.submit-form > span.has-text-danger")).findElement(By.className("has-text-danger")).getText();
      assert.equal(msg.getText(), expected.error_msg)
      console.log('Test passed');
    } catch {
      console.log('--------------------------------------------------------------------\nTest failed:\n  Message \"'+ expected.error_msg +'\" NOT shown\n    ' + JSON.stringify(data) + '\n--------------------------------------------------------------------');
    }
  }
  setTimeout(() => driver.quit(), 5000)
}

async function test_02(data, expected){
  // signup with email test script
  // Doesn't work
  let driver = await new Builder().forBrowser('chrome').build()
  await driver.get("https://app.sendpotion.com/");
  await driver.findElement(By.css("div.auth-buttons button:nth-of-type(2)")).click();

  let signupForm = await driver.findElement(By.css("div.potion-signup-form"));
  let email = await signupForm.findElement(By.css("input[type='email'][placeholder='Enter your email']"));
  email.sendKeys(data.email);
  let password = await signupForm.findElement(By.css("input[type='password'][placeholder='Enter your password']"));
  password.sendKeys(data.password);
  let confirmPassword = await signupForm.findElement(By.css("input[type='password'][placeholder='Confirm your password']"));
  confirmPassword.sendKeys(data.confPassw);
  let submitBtn = await signupForm.findElement(By.css("div.submit-form button"));

  submitBtn.click()
  setTimeout(() => driver.quit(), 5000)
}

async function test_03(data, expected){
  // signup with gmail test script
  // Doesn't work
  let driver = await new Builder().forBrowser('chrome').build()
  await driver.get("https://app.sendpotion.com/");
  await driver.findElement(By.css("div.auth-buttons button")).click();//Sign in - Google Accounts
  setTimeout(() => driver.quit(), 5000)
}

async function test_04(data, expected){
  // validate email field script
  // Works fine
  let driver = await new Builder().forBrowser('chrome').build()
  try{
    await driver.get("https://app.sendpotion.com/");
    await driver.findElement(By.css("div.auth-buttons button:nth-of-type(2)")).click();

    let signupForm = await driver.findElement(By.css("div.potion-signup-form"));
    let email = await signupForm.findElement(By.css("input[type='email'][placeholder='Enter your email']"));
    email.sendKeys(data.email);

    let submitBtn = await signupForm.findElement(By.css("div.submit-form button"));
    submitBtn.click()
    try{
      let msg = await driver.findElement(By.css("div.potion-signup-form")).findElement(By.className("has-text-danger")).getText();
      assert.equal(msg, expected.error_msg)
      console.log('Test passed');
    } catch {
      console.log('--------------------------------------------------------------------\nTest failed:\n  Message \"Email is invalid\" NOT shown\n    ' + JSON.stringify(data) + '\n--------------------------------------------------------------------');
    }
    setTimeout(() => driver.quit(), 2000)

  } catch(e) {
    console.log(e);
    setTimeout(() => driver.quit(), 2000)
  }
}

module.exports = {test_01, test_02, test_03, test_04}