var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, index: {unique: true}},
    userName: {type: String, required: false, index: {unique: true}},
    password: {type: String, required: true},
    address:{type: String, required: false},
    contactInfo:{type: String, required: false}
})
module.exports = mongoose.model('User', UserSchema);