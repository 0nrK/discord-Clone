const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/User.js')
const router = require("express").Router()

// @desc    Register new user
// @route   POST /api/users
// @access  Public
router.post("/register", asyncHandler(async (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // Check if user exists
    const userExists = await User.findOne({ email: req.body.email })


    if (userExists && userExists !== null) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    })




    if (user) {
        res.status(201).json({
            username: user.username,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
}))

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
router.post("/login", asyncHandler(async (req, res) => {
    const { email, password } = req.body
    // Check for user email
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            username: user.username,
            email: user.email,
            profilePic: user.profilePic,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
}))


// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = router

/* 
 const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require('bcryptjs')
const auth = require('../middleware/authenticate.js')


router.post("/register", async (req, res) => {
    try {

        const { email, username, password } = req.body
        console.log("email: ", email);
        if (!email || !username || !password) res.status(400)

        const userExists = await User.findOne({ email })
            .then((res) => console.log("res", res))
            .catch((err) => console.log(err))

        if (userExists) res.send("user already exists")

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hashPassword(password, salt)


        const user = await User.create({
            email,
            password: hashedPassword,
            username,
        })

        if (user) {
            console.log("user is success");
        } else {
            res.status(400)
        }

    } catch (err) {
        res.send(err)
    }
})

router.post("/login", async (req, res) => {
    try {


        const user = await User.findOne({
            email: req.body.email
        })

        !user && res.status(404).json("user not found")

        const validPw = await bcrypt.compare(req.body.password, user.password)
        !validPw && res.status(400).json("Wrong password")

        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router 
  */