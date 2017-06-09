import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        onNewGame(outcome, rank) {
            var store = this.store;
            var saveGame = store.createRecord('game', {
                'rank': rank,
                'outcome': outcome
            });
            saveGame.save();
        },
        onDeleteGame(id) {
            var store = this.store;
            store.findRecord('game', id, { backgroundReload: false }).then(function(game) {
                game.destroyRecord();
            });
        },
        onEditGame(id, outcome, rank){
            var store = this.store;
            //retrieve row
            store.findRecord('game', id).then(function(game) {
                //set the data    
                game.set('rank', rank);
                game.set('outcome', outcome);
                //persist the data
                game.save();
            });
        }
    }
});
