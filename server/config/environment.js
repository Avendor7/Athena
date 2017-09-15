const deepmerge = require('deepmerge');
const locals = require('./local');

const environment = process.env.NODE_ENV || 'development';

const ENV = {
  hostname: 'localhost',
  port: 3000,
  https: false,
  env: environment,
  db: {
    username: null,
    password: null,
    database: null,
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  auth: {
    battlenet: {
      client: null,
      secret: null,
    },
  },
};

if (environment === 'development') {
  ENV.db.database = 'athena_development';
}

if (environment === 'test') {
  ENV.db.database = 'athena_test';

}

if (environment === 'production') {
  ENV.db.database = 'athena_production';
}

module.exports = deepmerge(ENV, locals);