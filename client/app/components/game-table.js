import Ember from 'ember';

export default Ember.Component.extend({
    editing: false,
    actions:{
        saveEditedGame(game){
            this.set('modal', false);
            this.saveUpdatedGameInParent(game);
        },
        deleteRecord(id){
            this.deleteGameInParent(id);
            this.set('modal', false);
        },
        openModifyModal(game){
            this.set('modal', true);
            this.set('selectedGame', game);
        }   
    }
});
