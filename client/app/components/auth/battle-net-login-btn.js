import Ember from 'ember';
import ENV from 'client/config/environment'

export default Ember.Component.extend({
  classNames: ['auth-btn', 'auth-battle-net'],
  actions: {
    login: function () {
      let query = {
        client_id: ENV.APP.battleNetKey,
        redirect_uri: window.location.protocol + '//' + window.location.host + '/auth/battlenet',
        response_type: 'code'
      };

      let queryStr = Object.entries(query)
        .map((pair) => `${pair[0]}=${encodeURIComponent(pair[1])}`)
        .join('&');

      window.location = `https://${ENV.APP.battleNetRegion.toLowerCase()}.battle.net/oauth/authorize?${queryStr}`;
    }
  }
});
