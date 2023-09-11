const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.set('strictQuery', false);
		mongoose.connect('mongodb+srv://mubot:1531998aA%40@react-dashboard.ofgcwmn.mongodb.net/authInMern', connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
