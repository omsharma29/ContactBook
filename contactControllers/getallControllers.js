//@desc Get Contacts 
//@route GET /api/contacts 
// access public 
const asyncHandler = require("express-async-handler")
const contact = require("../Models/contactModels")

const getContacts = asyncHandler(async(req, res) => {
    const contacts = await contact.find({user_id: req.user.id})
    res.status(200).json(contacts);
  })
  module.exports = getContacts  