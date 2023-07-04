
const { Router } = require('express');
const WordsController = require('./controllers/WordsController.js');

const routes = new Router();

routes.get('/words', WordsController.index)

module.exports = routes;