
const express = require("express");
const {notesModel} = require("../models/Notes.model")
const notesRoute = express.Router();

notesRoute.get("/" , (req , res) =>{
    res.send("all the notes will be provided here")
})

notesRoute.post("/create" , async (req , res) =>{
    const payload = req.body;
   try{
    const newNotes = new notesModel(payload);
    await newNotes.save();
    res.send({
        mag : "notes created"
    })
   }catch(err){
     res.send(err.message)
   }
});
// update route

notesRoute.patch("/update" , async (req , res) =>{
    res.send({mag : "notes updated"})

})

// /delete route
notesRoute.delete("/delete:id" , async (req , res) =>{
res.send({mag : "notes deleted"})
})



module.exports = {
    notesRoute
}