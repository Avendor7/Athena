export default (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    game_number: DataTypes.INTEGER,
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
      associate(models) {
        // associations can be defined here
      }
    }
  });
  return Game;
};
