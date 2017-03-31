const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

//middleware
app.use(bodyParser.json());

app.use('/api', routes);

module.exports = app;
