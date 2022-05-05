const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 5
    },
    profilePic: {
        type: String,
        default: "https://i.stack.imgur.com/l60Hf.png"
    }
})

module.exports = mongoose.model("User", userSchema)