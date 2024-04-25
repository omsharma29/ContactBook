const mongoose = require("mongoose")

const ContactSchema = mongoose.Schema({
    user_id :{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User"
    },
    name:{
        type: String,
        required: [true, "Please add the Name"]
    },
    email:{
        type: String,
        required: [true, "Please add the Email"]
    },
    phone:{
        type: String,
        required: [true, "Please add the Phone No."]
    }
},
{
    timestamps: true
})

module.exports = mongoose.model("Contact" , ContactSchema )