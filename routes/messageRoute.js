const router = require("express").Router()
const Text = require("../models/Text.js")
const User = require("../models/User.js")

const jwt = require("jsonwebtoken")

//@description  Get all Messages

router.get("/", async (req, res) => {
    try {
        const Messages = await Text.find().populate({ path: "user" })

        res.status(200).json(Messages)
    } catch (err) {
        res.status(400);
        throw new Error(error.message);
    }
})

//@description     Create New Message

router.post("/", async (req, res) => {

    try {

        const decodedToken = await jwt.verify(req.body.user.token, process.env.JWT_SECRET)

        const newText = await new Text({
            text: req.body.text,
            user: decodedToken.id
        }).save()

        res.status(200).json(newText)
    } catch (err) {
        res.status(500).json(err)
    }

})


module.exports = router