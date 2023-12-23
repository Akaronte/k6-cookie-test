const express = require('express');
const morgan = require('morgan');
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());
app.use(morgan("dev"));

function getcookie(req) {
    var cookie = req.headers.cookie;
    return cookie.split('; ');
}


app.get('/', (req, res) => {
	console.log(getcookie(req))
	res.send('Hellooooo')}
);



module.exports = app;