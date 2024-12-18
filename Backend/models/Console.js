const mongoose = require('mongoose');

const consoleSchema = new mongoose.Schema({
    id : "String",
    id1 : "String",
    name: "String",
    price: "String",
    oldprice: "String",
    discount: "String",
    image: "String",
    description: "String",
    features1: "String",
    features2: "String",
    feature3: "String",
    included1: "String",
    included2: "String",
    included3: "String",
    included4: "String",
    included5: "String",
    included6: "String"
});

const Console = mongoose.model('Console', consoleSchema, 'gamerhubs');

module.exports = Console;