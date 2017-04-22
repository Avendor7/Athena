import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        saveGame() {
            const outcome = this.get('outcome');
            const rank = this.get('rank');
            console.log(outcome);
            console.log(rank);
        }
  }

});
