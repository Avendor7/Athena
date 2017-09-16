const environment = process.env.NODE_ENV || 'development';

const deepmerge = require('deepmerge');
const locals = require('./local');
const dbConfig = require('./config.json')[environment];

delete locals.db; // Ignore all database config in local.js

const ENV = {
  hostname: 'localhost',
  port: 3000,
  https: false,
  env: environment,
  db: dbConfig,
  auth: {
    battlenet: {
      client: null,
      secret: null,
    },
  },
};

module.exports = deepmerge(ENV, locals);