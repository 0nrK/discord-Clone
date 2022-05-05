const express = require('express')
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const auth = require('./middleware/authenticate.js')
const userRoute = require("./routes/userRoute.js")
const messageRoute = require("./routes/messageRoute.js")
const cors = require("cors")
const app = express()

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
};

dotenv.config()
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


const port = process.env.PORT || 5000





app.get("/", (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    next()
})





mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Db connection is successful"))
    .catch((err) => console.log(err))


app.use("/api/users", userRoute)
app.use("/api/message", messageRoute)




const server = app.listen(port, () => {
    console.log(`app is listening to port ${port}`)
})
