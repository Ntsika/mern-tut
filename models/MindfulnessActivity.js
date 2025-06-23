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
            type: Date,
            required: true,
        },
    },
	{
		timestamps: true, // Automatically manage createdAt and updatedAt fields
	}
)

const mindfulnessActivity = mongoose.model("mindfulnessActivity", mindfulnessActivitySchema);
module.exports = mindfulnessActivity;