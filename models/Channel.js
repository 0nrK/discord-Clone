const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
    user: [
        {
            type: ObjectId,
            required: true,
            ref: "User",
        },
    ],
    name: String,
})


channelSchema.statics.userJoinChannel = async function (channelId, userId) {
    try {
        const channel = this.findByIdAndUpdate(
            { _id: channelId },
            { $push: { user: userId } }
        )
            .populate("user")
            .exec();
        await channel.save();
        return channel;
    } catch (error) {
        return error;
    }
};

module.exports = mongoose.model("Channel", channelSchema);