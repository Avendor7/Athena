const express = require('express');

//controller imports
const basicController = require('./controllers/basicController');
const gamesController = require('./controllers/gamesController');
const authController = require('./controllers/authController');

//create express routes
const routes = express();

//Basic Routes
routes.get('/', basicController.get);

//games Routes
routes.get('/games/:gameId', gamesController.findOne);
routes.get('/games', gamesController.findAll);
routes.post('/games', gamesController.create);
routes.put('/games/:gameId', gamesController.update);
routes.delete('/games/:gameId', gamesController.destroy);

//Auth Routes
routes.post('/auth', authController.authenticate);

module.exports = routes;
