var port = "2000";
var host = "0.0.0.0";
var express = require('express');

var app = express();

app.use(require("./app"));

app.listen(port, host);
console.log("GO NODE");