
const express = require('express');
const app = express(); // using express server


const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true})); // to use bodyParser

app.use(express.static("public")); // to have static data from the folder pubic

// to enable the server on this current port
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
})



let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);
