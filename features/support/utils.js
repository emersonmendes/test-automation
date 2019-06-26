"use strict";

const { Builder, Capabilities } = require("selenium-webdriver");

class Utils {

    constructor(){
        this._configureDriver();
    }

    _configureDriver(){
        const builder = new Builder();
        builder.withCapabilities({ "browserName": "chrome" });
        this.driver = builder.build();
        this.driver.manage().window().maximize();
    }

    get driver(){
        return this._driver;
    }

    set driver(driver){
        this._driver = driver;
    }

}

module.exports.Utils = Utils;