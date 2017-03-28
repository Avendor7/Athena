'use strict';
module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define('Game', {
    id: DataTypes.NUMBER,
    game: DataTypes.NUMBER,
    sr_change: DataTypes.NUMBER,
    rank: DataTypes.NUMBER,
    streak: DataTypes.NUMBER,
    map: DataTypes.TEXT,
    score: DataTypes.STRING,
    groupsize: DataTypes.NUMBER,
    hero: DataTypes.TEXT,
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