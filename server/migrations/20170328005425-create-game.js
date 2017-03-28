'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      game_integer: {
        type: Sequelize.INTEGER
      },
      sr_change: {
        type: Sequelize.INTEGER
      },
      rank: {
        type: Sequelize.INTEGER
      },
      streak: {
        type: Sequelize.INTEGER
      },
      map: {
        type: Sequelize.TEXT
      },
      score: {
        type: Sequelize.STRING
      },
      group_size: {
        type: Sequelize.INTEGER
      },
      heroes: {
        type: Sequelize.TEXT
      },
      notes: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Games');
  }
};