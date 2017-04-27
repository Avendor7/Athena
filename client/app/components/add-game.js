import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        saveGame() {
            const outcome = this.get('model.outcome');
            const rank = this.get('model.rank');
            this.saveGameInParent(outcome, rank);
        }
  }
});
