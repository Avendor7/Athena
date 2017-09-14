import Ember from 'ember';

export default Ember.Service.extend({
  authenticate(type, token) {
    console.log(type, token)
  }
});
