const express = require('express');

//controller imports
const basicController = require('./controllers/basicController');
const gameController = require('./controllers/games');

//create express routes
const routes = express();

//Basic Routes
routes.get('/', basicController.get);

//games Routes
routes.get('/games', gameController.findAll);
routes.post('/games', gameController.create);
routes.put('/games/:gameId', gameController.update);
routes.delete('/games/:gameId', gameController.destroy);

module.exports = routes;
