const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressLogging = require('express-logging');

const routes = require('./routes');

const app = express();

//middleware
app.use(bodyParser.json());
app.use(expressLogging(console));

//enable cors on ALL routes
app.use(cors());

app.use('/api', routes);

module.exports = app;
