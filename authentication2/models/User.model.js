
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
 name : {
    type : 'string',
    require :"true"
 },
 email : {
    type : 'string',
    require :"true"
 },
 pass : {
    type : 'string',
    require :"true",
    minLength :6
 }, 
 age : {
    type : 'Number',
    require :"true"
 }
})

const UserModel = mongoose.model("user" , UserSchema);

module.exports = {
    UserModel
}