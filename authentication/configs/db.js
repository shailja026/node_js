const mongoose = require('mongoose')

require("dotenv").config()

const connetionService = mongoose.connect(process.env.MongoDBConnection);
console.log(connetionService)
module.exports = {
    connetionService
}