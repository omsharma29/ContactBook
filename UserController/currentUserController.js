// @desc current user 
// route GET /api/user/currentuser
// privat access 
const asyncHandler = require("express-async-handler")

const currentUser = asyncHandler(async (req, res)=>{
    res.json(req.user)
})

module.exports = currentUser