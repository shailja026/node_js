
const express = require('express');

const app= express();

const Port = 5050;

const fs = require("fs")

// middleware 
// app.use((req , res , next) => {
//     console.log("Learning middle ware here.....");
//     // next will proceess the middleware and execute the next route
//     if(req.url === "/about" || req.url === "/data"){
//         next();
//     }else{
//         res.send("not permitted")
//         console.log("bye from middlware")
//     }
// })

// middleware to calculate time taken in delevering response

const timeLogger = (req , res , next) => {
    const startTime = new Date().getTime()
    next()
    const endTime = new Date().getTime();
    console.log(`It took ${endTime - startTime}ms to send the response`)
}

//  middleware to storee route visited

const routLogger = (req , res , next) => {
    const startTime = new Date().getTime()
    fs.appendFileSync("./routersVisites.txt" , `Routers_Visites: ${req.url} |Method: ${req.method}\n`);
    next();
}
app.use(timeLogger);
app.use(routLogger);


app.get("/" , (req , res) => {
    console.log("Home page....")
    res.send("Home Page")
})

app.get("/about" , (req , res) => {
    console.log("About page....")
    res.send("About Page")
});
app.get("/contact" , (req , res) => {
    console.log("Contact page....")
    res.send("Contact Page")
});

app.get("/data" , (req , res) => {
    const data = fs.readFileSync("./data.json" , "utf-8")
    console.log("data page....")
    res.send(data)
});

app.listen(Port , () => {
    console.log(`listening on ${Port}`)
});