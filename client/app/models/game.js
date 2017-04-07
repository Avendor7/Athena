import DS from 'ember-data';

export default DS.Model.extend({
    rank: DS.attr('number'),
    outcome: DS.attr('string'),
    createdAt: DS.attr('date'),
    updatedAt: DS.attr('date')
});
