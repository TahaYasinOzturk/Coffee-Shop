const mongoose = require("mongoose");

const newUserSchema = new mongoose.Schema(
	{
		mail: {
			type: String,
			require: true,
		},
		name: {
			type: String,
			require: true,
		},
		password: {
			type: String,
			require: true,
		},
		isAdmin: {
			type: Boolean,
			require: true,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

const UserModel = mongoose.model("users", newUserSchema);

module.exports = UserModel;
