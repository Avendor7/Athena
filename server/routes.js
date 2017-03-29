import express from 'express';

//controller imports
import basicController from './controllers/basicController';
import gameController from './controllers/games';



const routes = express();
//Basic Routes
routes.get('/', basicController.get);

routes.get('/games', gameController.findAll);
routes.post('/games', gameController.create);



export default routes; 