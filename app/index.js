var express = require("express");
var exphbs = require('express-handlebars');
var app = express();

app.use(express.static("./app/public"));

app.engine('handlebars', exphbs({
	defaultLayout: 'main',
	layoutsDir:'./app/views/layouts'
}));

app.set('views', './app/views');
app.set('view engine', 'handlebars');

var motivations = require("motivations");
var pickOne = require("pick-one");

var images = [1,2,3,4,5,6];

app.get('/', function (request, response){
	var image = pickOne(images);
	var motivation = pickOne(motivations);
	response.render("motivations", {motivation, image});
});

module.exports = app;