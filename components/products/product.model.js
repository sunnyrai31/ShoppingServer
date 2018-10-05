var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    category: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    image: {type: String, required: true},
    brand:{type: String, required: true}
})
module.exports = mongoose.model('Product', ProductSchema);

