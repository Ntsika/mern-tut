const mongoose = require("mongoose")

const mindfulnessActivitySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        time: {
            type: dateTime,
            required: true,
        },
    },
	{
		timestamps: true, // Automatically manage createdAt and updatedAt fields
	}
)

const contactRequest = mongoose.model("User", userSchema);
module.exports = contactRequestSchema;