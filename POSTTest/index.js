
// const http = require('http');
// const fs = require("fs");

// const Port = 7030;

// const server = http.createServer((req , res) => {
//   if(req.ulr === "/"){
//     res.end("Able to learn how to create a server")
//   }else if(req.url === '/data'){
//     const streamData = fs.createReadStream("./data.json" , "utf-8");
//     streamData.pipe(res);
//   }else if(req.url === "/PostData" && req.method === "POST"){

//   }
//   else{
//     res.end(http.STATUS_CODES["404"])
//   }
// });

// server.listen(Port , () =>{
// console.log(`listing on ${Port}`);
// });

const express = require('express');
const Port = 8080
const app = express();
const fs = require('fs');

app.use(express.json())

app.get("/",(req , res) => {
  res.send("Welcome toexpress server")
});

app.get("/data" , (req , res) =>{

    const streamData = fs.createReadStream("./data.json" , "utf-8");
    streamData.pipe(res)
})

app.get("/students" , (req , res) => {
    const students = fs.readFileSync("./data.json" , "utf-8");
    // console.log(students.students);
    const parse_data = JSON.parse(students);
    // console.log(parse_data.students)
    res.send(parse_data.students)
})

app.get("/teachers" , (req , res) => {
    const students = fs.readFileSync("./data.json" , "utf-8");
    // console.log(students.students);
    const parse_data = JSON.parse(students);
    // console.log(parse_data.students)
    res.send(parse_data.teachers)
})

app.post("/dataAdded" , (req , res) => {
    console.log(req.body)
    res.send("New data has been added ")
})

// adding new student in the data file

app.post("/newStudent" , (req , res) => {

    const data = fs.readFileSync("./data.json" , "utf-8");
//  parshing json data
    const Parsed_data = JSON.parse(data);
//    adding data now
   Parsed_data.students.push(req.body);

   fs.writeFileSync("./data.json" , JSON.stringify(Parsed_data));

   res.send("success")
})

// deleting data from file

app.delete("/deleteStu" , (req , res) =>{
    // get the data 

    const data = fs.readFileSync("./data.json" , "utf-8");
    // parse it 

    const parse_data = JSON.parse(data);

   const new_data =  parse_data.students.filter((el) => el.name !== "Nikita");
    console.log(new_data);
    fs.writeFileSync("./data.json" , JSON.stringify(new_data));

    res.send("data deleted successfully")
})


app.listen(Port , () => {
    console.log(`Listening on ${Port}`)
})