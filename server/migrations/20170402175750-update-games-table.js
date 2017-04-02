'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    // Remove unneeded columns
    queryInterface.removeColumn('Games', 'game_number'),
    queryInterface.removeColumn('Games', 'sr_change'),
    queryInterface.removeColumn('Games', 'streak'),
    queryInterface.removeColumn('Games', 'map'),
    queryInterface.removeColumn('Games', 'score'),
    queryInterface.removeColumn('Games', 'group_size'),
    queryInterface.removeColumn('Games', 'heroes'),
    queryInterface.removeColumn('Games', 'notes'),

    //add missing columns
    queryInterface.addColumn('Games', 'outcome', Sequelize.TEXT),
  ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('Games', 'game_number', Sequelize.INTEGER),
    queryInterface.addColumn('Games', 'sr_change', Sequelize.INTEGER),
    queryInterface.addColumn('Games', 'streak', Sequelize.INTEGER),
    queryInterface.addColumn('Games', 'map', Sequelize.TEXT),
    queryInterface.addColumn('Games', 'score', Sequelize.STRING),
    queryInterface.addColumn('Games', 'group_size', Sequelize.INTEGER),
    queryInterface.addColumn('Games', 'heroes', Sequelize.TEXT),
    queryInterface.addColumn('Games', 'notes', Sequelize.TEXT),

    queryInterface.removeColumn('Games', 'outcome'),
  ]),
};
