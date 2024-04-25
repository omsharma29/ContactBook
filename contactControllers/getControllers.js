const asyncHandler = require("express-async-handler")
const contactModels = require("../Models/contactModels");


const getContact = asyncHandler( async(req, res) => {
  const contact = await contactModels.findById(req.params.id)
  if (!contact){
    res.status(404)
    throw new Error ('Contact not found')
  }
    res.status(200).json(contact);
  })

  module.exports = getContact