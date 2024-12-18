const mongoose = require('mongoose');

const componentsSchema = new mongoose.Schema({
    id : "String",
    id1 : "String",
    name: "String",
    price: "String",
    oldprice: "String",
    discount: "String",
    image: "String",
    description: "String",
    warranty: "String",
});

const PCComponents = mongoose.model('PCComponents', componentsSchema, 'gamerhubs');

module.exports = PCComponents;