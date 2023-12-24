const express = require('express');
const morgan = require('morgan');
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());
app.use(morgan("dev"));



app.get('/', (req, res) => {
	console.log(req)
    console.log(req.headers)
    console.log(req.cookies)
	res.send('Hello get')}
);

app.post('/', (req, res) => {
	//console.log(req)
    console.log(req.headers)
    console.log(req.cookies)
	res.send('Hello post')}
);


module.exports = app;