import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            games: this.store.findAll('game')
        });
    }
});
