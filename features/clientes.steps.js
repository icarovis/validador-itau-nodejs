const { Given, When, Then } = require('@cucumber/cucumber');

const path = require('path');
const { ServiceBuilder } = require('selenium-webdriver/chrome');
const {Builder, By, Key, until} = require('selenium-webdriver');

const geckoDriverPath = "driver/chromedriver.exe"
const serviceBuilder = new ServiceBuilder(geckoDriverPath);

const driver = new Builder().forBrowser('chrome').setChromeService(serviceBuilder).build();

Given('I access the client screen', async function () {
  await driver.get('http://localhost:3000/')
});

Given('type a valid CPF {string} and a name {string}', async function (cpf, nome) {
  await driver.findElement(By.name('nome')).sendKeys(nome)
  await driver.findElement(By.name('cpf')).sendKeys(cpf)
});

Given('click on validate button', async function () {
  await driver.findElement(By.name('enviar')).click()
});

Then('I should have the invalid message', async function () {
  await driver.findElement(By.id('erro'))
  // await driver.sleep(1000)
});

Then('I should have the success message', async function () {
  await driver.findElement(By.id('sucesso'))
  // await driver.sleep(1000)
  // await driver.quit();
});

Then('quit the browser', async function () {
  // Write code here that turns the phrase above into concrete actions
  await driver.quit();
});