const express = require('express');
const router = express.Router();
const DeleteContact  = require("../contactControllers/deleteController")
const  PostContact = require("../contactControllers/postControllers")
const  UpdateContact = require("../contactControllers/putControllers")
const  getContact = require("../contactControllers/getControllers")
const  getContacts = require("../contactControllers/getallControllers");
const validateToken = require('../middleware/ValidationJwtToken');

router.use(validateToken)
router.route('/')
    .get(getContacts).post(PostContact);
router.route('/:id')
    .put(UpdateContact).get(getContact).delete(DeleteContact);


module.exports = router;
