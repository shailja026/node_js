const express = require("express");
const { UserModel } = require("../models/User.model");
const UserRoute = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


UserRoute.get("/data", (req, res) => {
  res.send("data will be send");
});

// register route
UserRoute.post("/register", async (req, res) => {
  const { name, email, pass, age } = req.body;
  console.log({ name, email, pass, age });

  try {
    bcrypt.hash(pass, 3, async (err, secured_pass) => {
      if (err) {
        console.log(err);
      } else {
        const User = new UserModel({ name, email, pass: secured_pass, age });
        await User.save();
        console.log(User);
        res.send({ msg: "User have registered successfully" });
      }
    });
  } catch (err) {
    res.send({ msg: "something went wrong", Error: err.message });
  }
});

// login route

UserRoute.post("/login", async (req, res) => {
  const { email, pass } = req.body;

  try {
    const user = await UserModel.find({ email});
    console.log(user);
    if (user.length > 0) {
      bcrypt.compare(pass, user[0].pass, (err, result) => {
        if (result) {
          const token = jwt.sign({ course: "authentication2" }, "harshal");
          res.send({
            msg: "User login successful",
            token: token,
          });
        } else {
          res.send("Wrong username or password")
        }
      });
    } else {
      res.send({
        mag: "Wrong credentials",
      });
    }
  } catch (err) {
    res.send({
      msg: "Something went wrong",
      Err: err.message,
    });
  }
});


UserRoute.get("/data", (req, res) => {
  const token = req.headers.authorization;
  jwt.verify(token, "harshal", (err, decoded) => {
    if (decoded) {
      res.send("Data is here..........");
    } else {
      res.send({ msg: "Wrong Creditinal", error: err.message });
    }
  });
});

UserRoute.get("/cartData", (req, res) => {
  const token = req.headers.authorization;
  jwt.verify(token, "harshal", (err, decoded) => {
    if (decoded) {
      res.send("Card data is here.........");
    } else {
      res.send({ msg: "Wrong Creditinal", error: err.message });
    }
  });
});

module.exports = {
    UserRoute,
};
