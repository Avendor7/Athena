'use strict';
module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define('Game', {
    game_integer: DataTypes.INTEGER,
    sr_change: DataTypes.INTEGER,
    rank: DataTypes.INTEGER,
    streak: DataTypes.INTEGER,
    map: DataTypes.TEXT,
    score: DataTypes.STRING,
    group_size: DataTypes.INTEGER,
    heroes: DataTypes.TEXT,
    notes: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Game;
};