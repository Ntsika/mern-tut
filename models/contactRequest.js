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
    }
)

const contactRequest = mongoose.model("User", userSchema);
module.exports = contactRequestSchema;