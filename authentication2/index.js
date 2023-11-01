
const express = require('express');
const {connectionServer } = require("./configs/db")
const {UserRoute} = require("./routes/User.routes")
const { notesRoute} = require("./routes/Notes.route")
const {authentication} = require("./middlewares/authentication.middleware")
require("dotenv").config()
const Port = process.env.PORT || 7070;
const app = express();

app.use(express.json());
app.get('/' , (req, res) => {
    res.send(`Welcome`)
   

})
app.use("/user" , UserRoute)

app.use(authentication)
app.use("/notes", notesRoute)


app.listen(7878 , async() => {
    try{
        await connectionServer ,
        console.log("Connected to Database");
        console.log(`listening on ${Port}`)
    }catch(err){
        console.log("Error connecting")
       console.log(err)

    }
})