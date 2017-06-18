import DS from 'ember-data';
import ENV from 'client/config/environment';

var server;

if (ENV.environment === 'development') {
  server = 'http://localhost:3000';
} else if (ENV.environment === 'production'){
  server = 'https://rankwatch.win';
}
export default DS.RESTAdapter.extend({
    namespace: 'api',
    host: server
});
