import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('games', { path: '/games'});
  this.route('auth', { path: '/auth/:type'});
});

export default Router;
