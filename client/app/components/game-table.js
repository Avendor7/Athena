import Ember from 'ember';

export default Ember.Component.extend({
    editing: false,
    actions:{
        saveEditedGame(){
            const id = this.get('selectedGame.id');
            const outcome = this.get('selectedGame.outcome');
            const rank = this.get('selectedGame.rank');
            this.saveUpdatedGameInParent(id, outcome, rank);
            this.set('modal', false);
        },
        deleteRecord(id){
            this.deleteGameInParent(id);
            this.set('modal', false);
        },
        openModifyModal(game){
            this.set('selectedGame', game);
            this.set('modal', true);
        }   
    }
});
