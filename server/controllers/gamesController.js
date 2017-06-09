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
        rank: req.body.game.rank,
        outcome: req.body.game.outcome,
      })
      .then((game) => res.status(201).send({
        status: 201,
        message: 'Game created',
        game: game,
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
   * Returns one entry from the server
   *
   * @route GET /games/:gameId
   *
   * @param {*} req
   * @param {*} res res.status
   */
  findOne(req, res) {
    return Game
      .findById(req.params.gameId)
      .then(games => {
        if (games) {
          res.status(200).send({
            status: 200,
            message: 'Games found',
            games: games,
          })
        } else {
          throw {
            status: 404,
            message: 'Game not found',
            errors: ['Game not found'],
          };
        }
      })
      .catch((error) => {
        if (error.status) {
          res.status(error.status).send(error);
        } else {
          res.status(500).send({
            status: 500,
            message: 'Internal server error',
            errors: [error],
          });
        }
      });
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
            rank: req.body.game.rank || game.rank,
            outcome: req.body.game.outcome || game.outcome,
          });
      })
      .then((game) => res.status(200).send({
        status: 200,
        message: 'Game updated',
        game: game,
      }))
      .catch((error) => {
        if (error.status) {
          res.status(error.status).send(error);
        } else {
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

        return game
      })
      .then((game) => {
        res.status(200).send({
          status: 200,
          message: 'Game destroyed',
          game: game,
        });
      })
      .catch((error) => {
        if (error.status) {
          res.status(error.status).send(error);
        } else {
          res.status(500).send({
            status: 500,
            message: 'Internal server error',
            errors: [error],
          });
        }
      });
  }
};
