import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['auth-btn', 'auth-battle-net'],
  actions: {
    login() {
      console.log('foobar');
    }
  }
});
