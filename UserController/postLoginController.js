// @desc login the user 
// route POST /api/user/login
// public access 
const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const Models = require("../Models/userModels")
const dotenv = require("dotenv").config()




const loginUser = asyncHandler(async (req, res)=>{
    const {email , password} = req.body
    if(!email || !password){
        res.status(400)
        throw new Error('All fields are mandatory')
    }
    const user = await Models.findOne({email})
    if(user && (await bcrypt.compare(password, user.password))){

        const accessToken = jwt.sign(
            {
                user:{
                    username: user.username,
                    email: user.email,
                    id: user.id
                }
            },
            process.env.accessToken,
            {expiresIn : "1h"}
        )
        res.status(200).json({accessToken})

    }else{
        res.status(401)
        throw new Error ('Password and email is incorrect')
    }


})

module.exports = loginUser