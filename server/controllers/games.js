const Game = require('../models').Game;


//BOILERPLATE CODE FROM ANOTHER PROJECT - TO BE CHANGED

module.exports= {
    create(req, res) {
        return Todo
        .create({
            title: req.body.title,
        })
        .then((todo) => res.status(201).send(todo))
        .catch((error) => res.status(400).send(error));
    },
    findAll(req, res) {
    return Game
        .all()
        .then(todos => res.status(200).send(games))
        .catch(error => res.status(400).send(error));
    }

};