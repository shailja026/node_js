
const express = require('express');
const app = express();
const Port = 4500;
app.use(express.json());

const {connectionString , model} = require('./db')
app.get('/' , (req , res) =>{
    res.send("Welcome to the Express")
})

app.get('/users' , async (req , res) =>{
    const query = req.query
    console.log(query)
     try{
        const users = await model.find(query)
        res.send(users)
    }catch(err){
        res.send(err.message)
    }
     
});

// updating a user

app.patch("/update:id" , async (req , res) =>{
    const id = req.params.id;
    const user = req.body
    try{
    await model.findByIdAndUpdate(id, user)
    res.send("user has been updated successfully")
    }catch(err){
        res.send(err.message);
        console.log("unabale to update user")
    }
})

// deleting a user
app.delete("/delete:id" , async (req , res) =>{
    const id = req.params.id;
    const user = req.body
    try{
    await model.findByIdAndDelete(id)
    res.send("user has been updated successfully")
    }catch(err){
        res.send(err.message);
        console.log("unabale to update user")
    }
})

app.post('/register' , async(req, res) =>{
   try{
    console.log(req.body)
    // creating new user with the help of model
    const user = new model(req.body);
    // to save in database
    await user.save();
    res.send("user will be created")
   }catch(err){
    res.send(err.message)
   }
})

app.listen(Port , async() =>{
    try{
    await connectionString
    console.log("Connected to mongoDb")
    console.log(`listening on ${Port}`);
    }catch(err){
        console.log("can not connect to mongodb server");
        console.log(err.message);
    }
});