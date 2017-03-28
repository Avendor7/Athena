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
      id: {
        type: Sequelize.NUMBER
      },
      game: {
        type: Sequelize.NUMBER
      },
      sr_change: {
        type: Sequelize.NUMBER
      },
      rank: {
        type: Sequelize.NUMBER
      },
      streak: {
        type: Sequelize.NUMBER
      },
      map: {
        type: Sequelize.TEXT
      },
      score: {
        type: Sequelize.STRING
      },
      groupsize: {
        type: Sequelize.NUMBER
      },
      hero: {
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