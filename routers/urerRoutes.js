const express = require("express")
const registerUser = require("../UserController/postController")
const loginUser = require("../UserController/postLoginController")
const currentUser = require("../UserController/currentUserController")
const validateToken = require("../middleware/ValidationJwtToken")
const router = express.Router()

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/currentuser", validateToken ,currentUser )

module.exports = router