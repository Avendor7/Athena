const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const app = express();

//middleware
app.use(bodyParser.json());

//enable cors on ALL routes
app.use(cors());

app.use('/api', routes);

module.exports = app;
