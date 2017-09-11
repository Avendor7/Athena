'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.transaction((transaction) => {
    return queryInterface.addColumn('Games', 'gameNumber', {type: Sequelize.INTEGER, transaction})
      .then(() => {
        return queryInterface.sequelize.query(
          'SELECT * FROM games ORDER BY id',
          {type: Sequelize.QueryTypes.SELECT, transaction}
        );
      })
      .then((games) => {
        let updateQueries = games.map((game, gameNum) => {
          return queryInterface.sequelize.query(
            `UPDATE games SET gameNumber = ${gameNum + 1} WHERE id = ${game.id}`,
            {transaction}
          );
        });
        return Promise.all(updateQueries);
      })
      .then(() => {
        return queryInterface.sequelize.query(
          'ALTER TABLE games MODIFY gameNumber INT(11) NOT NULL',
          {transaction}
        );
      });
  }),

  down: (queryInterface, Sequelize) => queryInterface.sequelize.transaction((transaction) => {
    return queryInterface.removeColumn('Games', 'gameNumber', {transaction});
  }),
};
