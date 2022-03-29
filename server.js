const express = require("express");
const mongoose = require("mongoose");
const Router = require("./lib/router")

const app = express();

app.use(express.json());

const server_url = 'mongodb+srv://vivek_g86:Fiju123@cluster0.w5v09.azure.mongodb.net/StudentDb?retryWrites=true&w=majority';

mongoose.connect(server_url,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
	console.log("Connected successfully");
});

app.use(Router);

app.listen(3000, () => {
	console.log("Server is running at port 3000");
});