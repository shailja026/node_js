const http = require("node:http");
const fs = require("node:fs");


const server = http.createServer((req , res) => {
    // req.url return the path of the file 
    // res.end(req.url)
     if(req.url === "/"){
        res.writeHead(200 , {"Content-Type" : "text/plain"});
        res.end("Home page");

    }else if(req.url == "/about"){
        res.writeHead(200 , {"Content-Type" : "text/plain"});
        res.end("About page");
    }else if(req.url === "/api"){
        res.writeHead(200 ,{"Content-Type" : "text/json"});
        res.end(JSON.stringify({
            firstName : "Shailja",
            lastName : "Gupta",
        }))
    }else{
        res.writeHead(404);
        res.end("Page not found")
    }
})

server.listen(3000 , () => {
    console.log("learning routing")
})