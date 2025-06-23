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
    },
	{
		timestamps: true, // Automatically manage createdAt and updatedAt fields
	}
)

const speaker = mongoose.model("Speaker", speakerSchema);
module.exports = speaker;