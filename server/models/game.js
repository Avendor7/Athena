module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    gameNumber: DataTypes.INTEGER,
    rank: DataTypes.INTEGER,
    outcome: DataTypes.TEXT,
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      }
    }
  });
  return Game;
};
