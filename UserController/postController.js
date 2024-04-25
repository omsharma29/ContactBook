// @desc register the user 
// route POST /api/user/register
// public access 
const asyncHandler = require("express-async-handler")
const Models = require("../Models/userModels")
const bcrypt = require("bcrypt")

const registerUser = asyncHandler(async (req, res)=>{
    
    const {username , email , password} = req.body
    if(!username || !email || !password){
        res.status(400).json({
            title: 'Bad Request',
            message: 'All fields (name, email, phone) are mandatory.',
          });
          return;
    }
    const useremailAvailable = await Models.findOne({email});
    if(useremailAvailable){
        res.status(400)
        throw new Error("Email Exist")
    }
    const usernameAvailable = await Models.findOne({username});
    if(usernameAvailable){
        res.status(400)
        throw new Error("User name Exist")
    }
    const hashPassword = await bcrypt.hash(password, 12);
    console.log('hashed password:', hashPassword);
    const createUser = await Models.create({
        username,
        email,
        password: hashPassword
      });
      console.log(`user created ${createUser}`);
      if(Models){
        res.status(201).json({_id: createUser.id, email: createUser.email})
      }else{
        throw new Error('Unvalid details')
      }
    res.json({message: "register the user "})
})

module.exports = registerUser