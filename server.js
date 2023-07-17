// const { response } = require("express")
const http = require("node:http")

const server = http.createServer((request , response) =>{
    const body = 'hello world';
    response.writeHead(200);
    response.end("hii shailja gupta g")
})

// specify in which port it is going to run

server.listen(3000 , () =>{
    console.log("server is runnign on port 3000")
})