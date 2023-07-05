
const express = require('express');
const routes =  require('./routes.js');
const serverless = require('serverless-http');

class App{
    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json());
    }

    routes(){
        this.server.use('/.netlify/functions/api',routes);
    }
}

module.exports.handler = serverless(new App().server);