module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    gameNumber: DataTypes.INTEGER,
    rank: DataTypes.INTEGER,
    outcome: DataTypes.TEXT,
  }, {
    hooks: {
      beforeCreate: (game, options) => {
        return Game
          .findAll({
            attributes: [[sequelize.fn('MAX', sequelize.col('gameNumber')), 'maxGameNumber']]
          })
          .then((games) => game.gameNumber = games[0].get('maxGameNumber') + 1);
      }
    },
    classMethods: {
      associate(models) {
        // associations can be defined here
      }
    }
  });
  return Game;
};
