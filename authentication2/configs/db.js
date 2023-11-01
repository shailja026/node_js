
const mongoose = require('mongoose');
require("dotenv").config()
const connectionServer = mongoose.connect(process.env.Connection);

console.log(connectionServer);

module.exports = {
    connectionServer 
}