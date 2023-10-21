const mongoose = require('mongoose')

const connectionString  = mongoose.connect("mongodb+srv://shailjagupta4466:YLrsPDEkfI9uTG9f@cluster0.0fuq2gi.mongodb.net/PracticeDatabase");

const schema = mongoose.Schema({
    name:{
        type : "string",
        required: true,
    },
    email:{
        type : "string",
        required: true,
    },
    password:{
        type : "string",
        minLength:6,
        required: true,
    }
});

const model = new mongoose.model("user" , schema);

module.exports = {
    connectionString,
    model
}