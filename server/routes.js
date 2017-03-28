import express from 'express';

//controller imports
import basicController from './controllers/basicController';
import gameController from './controllers/gameController';



const routes = express();
//Basic Routes
routes.get('/', basicController.get);


export default routes; 