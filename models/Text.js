const mongoose = require('mongoose');


const textSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: true,
        },
        user: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "User"
        }
    }
    ,
    {
        timestamps: true
    }
)


module.exports = mongoose.model("Text", textSchema)