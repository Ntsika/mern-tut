const mongoose = require("mongoose")

const speakerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        bio: {
            type: String,
            required: true,
        },
        photUrl: {
            type: String,
            required: true,
        },
    }
)

const User = mongoose.model("User", userSchema);
module.exports = User;