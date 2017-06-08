import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        saveNewGame() {
            const outcome = this.get('outcome');
            const rank = this.get('rank');
            this.onNewGame(outcome, rank);
        }
    }
});
