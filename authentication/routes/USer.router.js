const express = require("express");
const jwt = require('jsonwebtoken');
const routes = express.Router();
const { UserModel } = require("../models/User.models");
// register routes

routes.post("/register", async (req, res) => {
  const UserDetails = req.body;

  console.log(UserDetails);
  try {
    const user = new UserModel(UserDetails);
    await user.save();
    res.send({ msg: "User has been registered"});
  } catch (err) {
    res.send({ msg: "something went wrong", Err: err.message });
  }
});

// login routes
routes.post("/login", async (req, res) => {
 
  const { email, pass } = req.body;
  const token = jwt.sign({ course : 'backend' }, 'shailja');
  try {
    const user = await UserModel.find({ email, pass });
    console.log(user);
    if (user.length <= 0) {
      res.send({ msg: "Wrong Creditinal"});
    } else {
      res.send({
        msg: "user login successful",
        token: token
      });
    }
  } catch (err) {
    res.send({ msg: "something went wrong", Err: err.message });
  }
});


routes.get("/data" , (req , res) =>{
    const token  = req.headers.authorization;
    jwt.verify(token, 'shailja', (err, decoded) => {
        if(decoded){
            res.send("Data is here..........");
        }else{
            res.send({ msg: "Wrong Creditinal" , error: err.message}); 
        }
    });
})

routes.get("/cartData" , (req , res) =>{
    const token  = req.headers.authorization;
    jwt.verify(token, 'shailja', (err, decoded) => {
        if(decoded){
            res.send("Card data is here.........");
        }else{
            res.send({ msg: "Wrong Creditinal" , error: err.message}); 
        }
    });
})

module.exports = {
  routes,
};
