import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        saveGameInParent(outcome, rank) {
            var store = this.store;
            var saveGame = store.createRecord('game', {
                'rank': rank,
                'outcome': outcome
            });
            saveGame.save();
        },
        deleteGameInParent(id) {
            var store = this.store;
            store.findRecord('game', id, { backgroundReload: false }).then(function(game) {
                game.destroyRecord();
            });
        }
    }
});
