import Ember from 'ember';

export default Ember.Controller.extend({
    
   model() {
        return Ember.RSVP.hash({
            games: this.store.findAll('game')
        });
    },

    actions:{
        saveGameInParent(outcome, rank) {

            var store = this.store;
            console.log("outcome: " + outcome);
            console.log("rank: " + rank);

            var saveGame = store.createRecord('game', {
                'rank': rank,
                'outcome': outcome
            });
            saveGame.save();
            console.log("record created");
        }
    }
});
