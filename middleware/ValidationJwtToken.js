const asyncHandler = require("express-async-handler")
const jwt = require('jsonwebtoken')

const validateToken = asyncHandler(async(req, res, next)=>{
    let  token;
    let authorizedToken = req.headers.authorization || req.headers.Authorization
    if(authorizedToken && authorizedToken.startsWith("Bearer")){
        token = authorizedToken.split(" ")[1]
        jwt.verify(token, process.env.accessToken, (err, decoded)=>{
            if(err){
                res.status(401)
                throw new Error ("User is not Authorized")
            }
            req.user = decoded.user;
            next()
        })
    }
    if(!token){
        res.status(401)
        throw new Error('User is not authorized')
    }
})

module.exports = validateToken