
const http = require('http');
const fs = require('fs');

// console.log(http);
const port = 8070
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("successfully created server")
    }else if (req.url === '/data'){
        fs.readFile("./data.json",(err , data) =>{
            if(err) res.end(err)
            else{
                res.end(data)
            }
        })
       
    }else{
        res.end(http.STATUS_CODES["404"])
    }
})

server.listen(port , ()=>{
    console.log(`server has been started in the ${port}`)
})
