const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

//middleware
app.use(bodyParser.json());

app.use('/api', routes);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

module.exports = app;
