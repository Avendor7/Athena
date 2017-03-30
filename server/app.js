import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();

//middleware
app.use(bodyParser.json());


app.use('/api', routes);

export default app;
