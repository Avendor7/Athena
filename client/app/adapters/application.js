import DS from 'ember-data';
import ENV from 'client/config/environment';

export default DS.RESTAdapter.extend({
    namespace: 'api',
    host: ENV.APP.serverUrl
});
