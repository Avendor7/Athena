import Ember from 'ember';

export default Ember.Component.extend({
    editing: false,
    actions:{
        saveEditedGame(){
            const id = this.get('selectedGame.id');
            const outcome = this.get('selectedGame.outcome');
            const rank = this.get('selectedGame.rank');
            this.onEditGame(id, outcome, rank);
            this.set('modal', false);
        },
        deleteGame(id){
            this.onDeleteGame(id);
            this.set('modal', false);
        },
        openModifyModal(game){
            this.set('selectedGame', game);
            this.set('modal', true);
        }   
    }
});
