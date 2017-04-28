import Ember from 'ember';

export default Ember.Component.extend({
    actions:{
        editGame(){
            const outcome = this.get('outcome');
            const rank = this.get('rank');
            this.saveUpdatedGameInParent(outcome, rank);
        }
    }
});
