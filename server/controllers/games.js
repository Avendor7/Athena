const Game = require('../models').Game;


module.exports= {
    create(req, res) {
        return Game
            .create({
                game_number: req.body.game_number,
                sr_change: req.body.sr_change,
                rank: req.body.rank,
                streak: req.body.streak,
                map: req.body.map,
                score: req.body.score,
                group_size: req.body.group_size,
                heroes: req.body.heroes,
                notes: req.body.notes
            })
            .then((game) => res.status(201).send(game))
            .catch((error) => res.status(400).send(error));
    },

    findAll(req, res) {
        return Game
            .findAll()
            .then(games => res.status(200).send(games))
            .catch(error => res.status(400).send(error));
    },

    update(req, res) {
    return Game
      .findById(req.params.gameId)
      .then(game => {
        if (!game) {
          return res.status(404).send({
            message: 'Game Not Found',
          });
        }
        return game
          .update({
            game_number: req.body.game_number || game.game_number,
            sr_change: req.body.sr_change|| game.sr_change,
            rank: req.body.rank || game.rank,
            streak: req.body.streak || game.streak,
            map: req.body.map || game.map,
            score: req.body.score || game.score,
            group_size: req.body.group_size || game.group_size,
            heroes: req.body.heroes || game.heroes,
            notes: req.body.notes || game.notes
          })
          .then(() => res.status(200).send(game))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return Game
      .findById(req.params.gameId)
      .then(game => {
        if (!game) {
          return res.status(400).send({
            message: 'Game Not Found',
          });
        }
        return game
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }
  
};