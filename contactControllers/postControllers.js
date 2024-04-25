const asyncHandler = require("express-async-handler")
const contact = require("../Models/contactModels")

const PostContact = asyncHandler(async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      res.status(400).json({
        title: 'Bad Request',
        message: 'All fields (name, email, phone) are mandatory.',
      });
      return;
    }

    const createContact = await contact.create({
      name,
      email,
      phone,
      user_id: req.user.id,
    });

    res.status(200).json(createContact);
  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = PostContact  