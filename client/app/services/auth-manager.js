import Ember from 'ember';
import ENV from 'client/config/environment';

export default Ember.Service.extend({
  authenticate(type, token) {
    Ember.$.post(`${ENV.APP.serverUrl}/api/auth`, {type, token})
      .then((response) => console.log(response));
  }
});
