
const jwt = require("jsonwebtoken");


const authentication = (req , res , next) =>{
    const token = req.headers.authorization
    if(token){
        const decode = jwt.verify(token , "harshal")
        if(decode){
            next()
        }else{
            res.send("Please login first")
        }
    }else{
        res.send("Please login")
    }
}

module.exports = {
    authentication
}