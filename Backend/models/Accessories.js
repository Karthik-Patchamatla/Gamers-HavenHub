const mongoose = require('mongoose');

const accessoriesSchema = new mongoose.Schema({
    id : "String",
    id1 : "String",
    name: "String",
    price: "String",
    oldprice: "String",
    discount: "String",
    image: "String",
    warranty: "String",
    description1: "String",
    description2: "String",
    description3: "String",
    description4: "String"
});

const Accessories = mongoose.model('Accessories', accessoriesSchema, 'gamerhubs');

module.exports = Accessories;