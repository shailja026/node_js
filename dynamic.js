
const http = require("node:http")
const fs = require("node:fs")

const server = http.createServer((request , response) =>{
    let name = "Shailja";
    response.writeHead(200 , {"Conten-Type" : "text/html"});
    let html = fs.readFileSync("./index.html" , "utf-8");
    html = html.replace("{{name}}" , name)
    response.end(html)
})
server.listen(3000 , ()=>{
    console.log("replacing name")
})