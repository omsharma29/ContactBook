const asyncHandler = require("express-async-handler")
const contactModels = require("../Models/contactModels")


const UpdateContact = asyncHandler(async(req, res) => {
  const contact = await contactModels.findById(req.params.id)
  if (!contact){
    res.status(404)
    throw new Error ('Contact not found')
  }
  if(contact.user_id.toString() !== req.user.id){
    res.status(403)
    throw new Error('You are not allowed to pdate other users contact')
  }
  const UpdateContact = await contactModels.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true}
  )
    res.status(200).json(UpdateContact);
  })

  module.exports = UpdateContact