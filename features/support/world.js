"use strict";

const { setWorldConstructor } = require("cucumber");

class CustomWorld {

    constructor() {        
    }

    loggin(user) {
        //efetuar login
    }

}

setWorldConstructor(CustomWorld);