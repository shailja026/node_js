
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    pass:{
        type:String,
        require:true,
        minlength:6
    },
    email:{
        type:String,
        require:true,
       
    },
    age:{
        type:Number,
        require:true,
        minlength:6
    },
})

const UserModel = mongoose.model("user" , userSchema);

module.exports = {
    UserModel
}