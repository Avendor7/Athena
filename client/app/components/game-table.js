import Ember from 'ember';

export default Ember.Component.extend({
    editing: false,
    actions:{
        editGame(){
            this.set('editing', false);
            const outcome = this.get('outcome');
            const rank = this.get('rank');
            //this.saveUpdatedGameInParent(outcome, rank);
        },
        isEditing(){
            this.set('editing', true);
            console.log(this.editing);
        },
        deleteRecord(id){
            console.log(id);
            this.deleteGameInParent(id);
        },
        openModal(game){
            console.log(game);
            this.set('modal3', true);
            this.set('selectedGame', game);
        }
        
    }
    //TODO: fix edit toggle to be per-entry and pre-populate
});
