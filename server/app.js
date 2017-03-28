import express from 'express';
import bodyParser from 'body-parser';
import Sequelize from 'sequelize';
import routes from './routes';

const app = express();

var sequelize = new Sequelize('athena_development', 'root', 'led107a100', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

//middleware
app.use(bodyParser.json());


app.use('/api', routes);

export default app;