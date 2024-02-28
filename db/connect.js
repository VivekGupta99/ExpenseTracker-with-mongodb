const mongoose = require("mongoose");
process.env.MONGO_USERNAME
const connectDB = async () => {
	try {
		const conn = await mongoose.connect(
			`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.xpfdemn.mongodb.net/expenseApp`,
			{
				useNewUrlParser: true, // It is used to parse and interpret the MongoDB connection string in a way that is compatible with the MongoDB Node.js driver's updated URL parser.
				// useCreateIndex: true, //avoid use ensureIndex which is depreciated in nodejs
				// useFindAndModify: false,
				// useUnifiedTopology: true, //avoid depreciation warnings
			}
		);
		console.log(`MongoDB Connected`);
	} catch (error) {
		console.error("error is", error);
	}
};

module.exports = connectDB;
