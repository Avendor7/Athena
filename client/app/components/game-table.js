import Ember from 'ember';

export default Ember.Component.extend({
    editing: false,
    actions:{
        saveEditedGame(){
            const outcome = this.get('outcome');
            const rank = this.get('rank');

            //this.saveUpdatedGameInParent(outcome, rank);
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
