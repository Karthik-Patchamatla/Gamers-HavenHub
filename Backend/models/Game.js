const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    id: "String",
    id1: "String",
    name: "String",
    price: "String",
    oldprice: "String",
    discount: "String",
    image: "String",
    availability: "String",
    about1: "String",
    gametype: "String",
    genre: "String",
    internet: "String",
    playable: "String",
    platform: "String",
    release: "String",
    country: "String",
    publisher: "String",
    rating: "String",
    approxgameplay: "String",
    Developer: "String",
});

const Game = mongoose.model('Game', gameSchema, 'gamerhubs');

module.exports = Game;
