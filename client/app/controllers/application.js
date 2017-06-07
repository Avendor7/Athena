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
        },
        saveUpdatedGameInParent(game){
            this.game = game;
            var store = this.store;
            alert(this.game.id);
            store.findRecord('game', this.game.id).then(function(game) {
            // ...after the record has loaded
            game.set(game);

            game.save();
});
        }
    }
});
