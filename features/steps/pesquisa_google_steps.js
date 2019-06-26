"use strict";

const { AfterAll, BeforeAll, Given, When, Then } = require('cucumber');
const { By, Key, until } = require('selenium-webdriver');
const { expect } = require("chai");
const { Utils } = require('../support/utils');

let driver;

BeforeAll(async function(){
    const utils = new Utils();
    driver = utils.driver;
});

AfterAll(async function() {
    await driver.quit();
});

Given('que o usuario {string} esteja logado', async function(user) {
    await this.loggin(user);
});

Given('que o usuário acesse a pagina do google', async function() {
    await driver.get('http://www.google.com');
});

When('clica na caixa de pesquisa', async function() {
    await driver.findElement(By.name('q')).click();
});

When('digite {string}', async function(text) {
    await driver.findElement(By.name('q')).sendKeys(text);
});

When('clique na tecla enter', async function() {
    await driver.findElement(By.name('q')).sendKeys(Key.RETURN);
    await driver.wait(until.titleContains(' - Pesquisa Google'), 1000);
});

Then('deve aparecer em primeiro lugar o link {string}', async function(string) {
   const attribute = await driver.findElement(By.xpath('//*[@id="rso"]/div[1]/div/div[1]/div/div/div[1]/a')).getAttribute('href');
   expect(string).to.be.equals(attribute);
});