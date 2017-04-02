'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.transaction(
    (transaction) => Promise.all([
      // Remove unneeded columns
      queryInterface.removeColumn('Games', 'game_number', {transaction}),
      queryInterface.removeColumn('Games', 'sr_change', {transaction}),
      queryInterface.removeColumn('Games', 'streak', {transaction}),
      queryInterface.removeColumn('Games', 'map', {transaction}),
      queryInterface.removeColumn('Games', 'score', {transaction}),
      queryInterface.removeColumn('Games', 'group_size', {transaction}),
      queryInterface.removeColumn('Games', 'heroes', {transaction}),
      queryInterface.removeColumn('Games', 'notes', {transaction}),

      //add missing columns
      queryInterface.addColumn('Games', 'outcome', Sequelize.TEXT, {transaction}),
    ])
  ),

  down: (queryInterface, Sequelize) => queryInterface.sequelize.transaction(
    (transaction) => Promise.all([
      queryInterface.addColumn('Games', 'game_number', Sequelize.INTEGER, {transaction}),
      queryInterface.addColumn('Games', 'sr_change', Sequelize.INTEGER, {transaction}),
      queryInterface.addColumn('Games', 'streak', Sequelize.INTEGER, {transaction}),
      queryInterface.addColumn('Games', 'map', Sequelize.TEXT, {transaction}),
      queryInterface.addColumn('Games', 'score', Sequelize.STRING, {transaction}),
      queryInterface.addColumn('Games', 'group_size', Sequelize.INTEGER, {transaction}),
      queryInterface.addColumn('Games', 'heroes', Sequelize.TEXT, {transaction}),
      queryInterface.addColumn('Games', 'notes', Sequelize.TEXT, {transaction}),

      //remove added columns
      queryInterface.removeColumn('Games', 'outcome', {transaction}),
    ])
  ),
};
