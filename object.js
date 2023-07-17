// dealing with sendin data in json format to server;

// const { response } = require("express")
const http = require("node:http")

const server = http.createServer((request , response )=>{
  
    const myData = {
        fistName : "shailja",
        lastName : "gupta",
        age:"22",

    }

    response.writeHead(200 , {
        "Content-Type" : "application/json"
    });

    response.end(JSON.stringify(myData))
});

server.listen(3000,()=>{
    console.log("this is json data server")
})