const Game = require('../models').Game;

module.exports = {
  /**
   * Creates a new Game object on the server
   *
   * @route POST /games
   *
   * @param {*} req req.body.ATTRIBUTE
   * @param {*} res res.status
   */
  create(req, res) {
    return Game
      .create({
        rank: req.body.rank,
        map: req.body.map,
        outcome: req.body.outcome,
      })
      .then((game) => res.status(201).send({
        status: 201,
        message: 'Game created',
        games: game,
      }))
      .catch((error) => res.status(500).send({
        status: 500,
        message: 'Internal server error',
        errors: [error],
      }));
  },

  /**
   * Returns all entries from the server
   * Note: Should be changed to a findById in future multi-user versions
   *
   * @route GET /games
   *
   * @param {*} req
   * @param {*} res res.status
   */
  findAll(req, res) {
    return Game
      .findAll()
      .then(games => res.status(200).send({
        status: 200,
        message: 'Games found',
        games: games,
      }))
      .catch(error => res.status(500).send({
        status: 500,
        message: 'Internal server error',
        errors: [error],
      }));
  },

  /**
   * Updates the database with new data from a put request by gameId
   *
   * @route PUT /games/:gameId
   *
   * @param {*} req req.params.gameId from the URL
   * @param {*} res
   */
  update(req, res) {
    return Game
      .findById(req.params.gameId)
      .then(game => {
        if (!game) {
          throw {
            status: 404,
            message: 'Game not found',
            errors: ['Game not found'],
          };
        }

        return game
          .update({
            rank: req.body.rank || game.rank,
            map: req.body.map || game.map,
            outcome: req.body.outcome || game.outcome,
          });
      })
      .then((game) => res.status(200).send({
        status: 200,
        message: 'Game updated',
        games: game,
      }))
      .catch((error) => {
        if (error.status) {
          res.status(error.status).send(error);
        }
        else {
          res.status(500).send({
            status: 500,
            message: 'Internal server error',
            errors: [error],
          });
        }
      });
  },

  /**
   * Destroy Game by gameId
   *
   * @route DELETE /games/:gameId
   *
   * @param {*} req
   * @param {*} res
   */
  destroy(req, res) {
    return Game
      .findById(req.params.gameId)
      .then(game => {
        if (!game) {
          throw {
            status: 404,
            message: 'Game not found',
            errors: ['Game not found'],
          };
        }

        return game.destroy()
          .then(() => new Promise((resolve) => resolve(game)));
      })
      .then((game) => {
        res.status(200).send({
          status: 200,
          message: 'Game destroyed',
          games: game,
        });
      })
      .catch((error) => {
        if (error.status) {
          res.status(error.status).send(error);
        }
        else {
          res.status(500).send({
            status: 500,
            message: 'Internal server error',
            errors: [error],
          });
        }
      });
  }
};
