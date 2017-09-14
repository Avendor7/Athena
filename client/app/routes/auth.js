import Ember from 'ember';

export default Ember.Route.extend({
  authManager: Ember.inject.service(),

  queryParams: {
    code: { refreshModel: true }
  },

  model(params) {
    this.get('authManager').authenticate(params.type, params.code);
  }
});
