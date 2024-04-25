const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    username:{
        type: String,
        required: [true, "Please add the username"],
        unique: [true]

    },
    email:{
        type: String,
        required: [true, "Please add the Email"],
        unique: [true]
    },
    password:{
        type: String,
        required: [true, "Please add the Password"]
    }
},
{
    timestamps: true
})

module.exports = mongoose.model("User" , UserSchema )