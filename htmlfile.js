//  how to send a html file as response to server

const http = require("node:http")
const fs = require("node:fs");



const server = http.createServer((request , response) =>{
    let name = "shailja"

    response.writeHead(200 , {"Content-Type" : "text/html"});
    let html = fs.readFileSync("./index.html" , "utf-8")
    html = html.replace("{{name}}", name)
    response.end(html)

    // or we can do this by uing pipe which will be more efficient
    
    // fs.createReadStream("./index.html").pipe(response)

    // or

    // fs.createReadStream(__dirname + "/index.html")

})

server.listen(3000 , () =>{
    console.log("printing html file")
})