const asyncHandler = require("express-async-handler")
const contactModels = require("../Models/contactModels")

const DeleteContact = asyncHandler(async(req, res) => {
  const contact = await contactModels.findById(req.params.id)
  if (!contact){
    res.status(404)
    throw new Error ('Contact not found')
  }

  if(contact.user_id.toString() !== req.user.id){
    res.status(403)
    throw new Error('You are not allowed to delete other users contact')
  }

  await contact.deleteOne({_id: req.params.id})
    res.status(200).json("contact deleted");
  })
  module.exports = DeleteContact