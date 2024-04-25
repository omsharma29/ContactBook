const express = require("express");
const errorhandller = require("./middleware/errorHandller");
const connectDb = require("./config/dbconnection");
const dotenv = require("dotenv").config()
connectDb()
const app = express()

const port = process.env.port || 5000
app.use(express.json())

app.use("/api/contacts", require("./routers/contactRoutes"))
app.use("/api/user", require("./routers/urerRoutes"))
app.use(errorhandller)
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})
// 42:57