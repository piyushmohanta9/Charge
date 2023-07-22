// jshint esversion: 6

// importing necessary files 
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express(); // storing express() in app
app.use(bodyParser.urlencoded({extended: true})); // using bodyParser within express
app.use(express.static("public")); // to use local files store them in public folder(ex CSS, Images, etc.)


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});


// Server listens on Port 3000
app.listen(3000, function(){
    console.log("Your Server is running on localhost:3000/");
});