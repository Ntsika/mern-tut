const mongoose = require("mongoose")

const summitSchema = new mongoose.Schema(
    {
        title: {
			type: String,
			required: true,
		},
		message: {
			type: String,
			required: true,
			unique: true,
		},
		details: {
			type: String,
			required: true,
		},
    },
	{
		timestamps: true, // Automatically manage createdAt and updatedAt fields
	}
)

const summit = mongoose.model("User", summitSchema);
module.exports = summit;