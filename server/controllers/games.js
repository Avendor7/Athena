const Game = require('../models').Game;


module.exports= {
    create(req, res) {
        return Game
            .create({
                game_integer: req.body.game_integer,
                sr_change: req.body.sr_change,
                rank: req.body.rank,
                streak: req.body.streak,
                map: req.body.map,
                score: req.body.score,
                group_size: req.body.group_size,
                heroes: req.body.heroes,
                notes: req.body.notes,

            })
            .then((games) => res.status(201).send(games))
            .catch((error) => res.status(400).send(error));
    },
    findAll(req, res) {
        return Game
            .findAll()
            .then(games => res.status(200).send(games))
            .catch(error => res.status(400).send(error));
    }
};