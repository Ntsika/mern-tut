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
    }
)

const summit = mongoose.model("User", summitSchema);
module.exports = summit;