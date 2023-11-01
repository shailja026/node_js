const express = require("express");
require("dotenv").config();
const {connetionService} = require("./configs/db");
const {routes} = require("./routes/USer.router");
const app =  process.env.PORT || 7000;

app.use(express.json());

app.get("/" , (req , res) =>{
    res.send("Welcome to home page")
})

app.use("/" ,routes)
app.listen(Port, async () => {
  try {
    await connetionService, console.log("connected to database");
    console.log(`listening on ${Port}`);
  } catch (err) {
    console.log(err)
    console.log(err.message);
  }
});
