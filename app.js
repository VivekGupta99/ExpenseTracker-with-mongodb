const express = require("express");
const cors = require("cors");

require("dotenv").config();

const bodyParser = require("body-parser");
const userRoute = require("./routes/user");
const expenseRoute = require('./routes/expense')
const paymentRoute = require('./routes/payment')
const permiumRoute = require('./routes/permium')
// const passwordroute = require('./routes/password');
const connectDb = require("./db/connect");
const User = require('./models/user')
const expenseUser = require('./models/expense')
const Order = require('./models/order');
const fileurl = require('./models/fileurl')
const forgotpassword = require('./models/passwordReq')
const path = require("path");
const fs = require("fs");
const connectDB = require("./db/connect");
const app = express();
const publicPath = path.join(__dirname, 'public');
//production

app.use(cors());

//middlewares
app.use(bodyParser.json());

//routes
app.get('/', (req, res) => {
	res.sendFile(path.join(publicPath, 'signup', 'signup.html'));
})
app.use('/user', userRoute);
app.use('/expense', expenseRoute)
app.use('/purchase', paymentRoute)
app.use('/premium', permiumRoute)
// app.use('/password',passwordroute)

// app.use((req,res)=>{

// 	res.sendFile(path.join(__dirname,`public/${req.url}`))
// })  

async function serverStart() {
	try {
		await connectDB();
		app.listen(3001, () => {
			console.log(`server listening on port 3001...`);
		});
	} catch (error) {
		console.log(error);
	}
}
serverStart();
