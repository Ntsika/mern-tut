const mongoose = require("mongoose")

const contactRequestSchema = new mongoose.Schema(
    {
        userId: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
    },
	{
		timestamps: true, // Automatically manage createdAt and updatedAt fields
	}
)

const contactRequest = mongoose.model("contactRequest", contactRequestSchema);
module.exports = contactRequest;