const fs = require('fs');

const ENV = require('./config/environment');
const app = require('./app');

let server = null;

if (ENV.https) {
  const https = require('https');
  let key = fs.readFileSync('./server.snakeoil.key', 'utf8');
  let cert = fs.readFileSync('./server.snakeoil.cert', 'utf8');
  server = https.createServer({key, cert}, app);
}
else {
  const http = require('http');
  server = http.createServer(app);
}


server.listen(ENV.port, () =>{
  let hostname = `${ENV.https ? 'https' : 'http'}://${ENV.hostname}:${ENV.port}`;
  console.info(`listening on ${hostname}`);
  console.info('ENV:', ENV.env);
});

