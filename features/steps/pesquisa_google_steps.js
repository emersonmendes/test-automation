"use strict";

const { AfterAll, BeforeAll, Given, When, Then } = require('cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require("chai");

let driver;

BeforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
});

AfterAll(() => {
    driver.quit();
});

Given('que o usuario {string} esteja logado', function(user) {
    this.loggin(user);
});

Given('que o usuário acesse a pagina do google', () => {
    driver.get('http://www.google.com');
});

When('clica na caixa de pesquisa', () => {
    driver.findElement(By.name('q')).click();
});

When('digite {string}', (text) => {
    driver.findElement(By.name('q')).sendKeys(text);
});

When('clique na tecla enter', async () => {
    await driver.findElement(By.name('q')).sendKeys(Key.RETURN);
    await driver.wait(until.titleContains(' - Pesquisa Google'), 1000);
});

Then('deve aparecer em primeiro lugar o link {string}', async (string) => {
   const attribute = await driver.findElement(By.xpath('//*[@id="rso"]/div[1]/div/div[1]/div/div/div[1]/a')).getAttribute('href');
   expect(string).to.be.equals(attribute);
});