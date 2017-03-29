import express from 'express';

//controller imports
import basicController from './controllers/basicController';
import gameController from './controllers/games';



const routes = express();
//Basic Routes
routes.get('/', basicController.get);

routes.get('/games', gameController.findAll);
routes.post('/games', gameController.create);
routes.put('/games/:gameId', gameController.update);
routes.delete('/games/:gameId', gameController.destroy);



export default routes; 