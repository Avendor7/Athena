import express from 'express';

//controller imports
import basicController from './controllers/basicController';
import userController from './controllers/userController';
import postController from './controllers/postController';
import commentController from './controllers/commentController';



const routes = express();
//Basic Routes
routes.get('/', basicController.get);

//User Routes
routes.post('/signup', userController.post);

//Post Routes
routes.post('/post', postController.post);
routes.get('/posts', postController.getAll);

//Comment Routes
routes.post('/comment', commentController.post);

export default routes; 