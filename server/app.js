var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = 8675;
var index = require("./routes/index.js");

//uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', index);

//listening
app.listen(port, function(){
  console.log("Listening to: ", port);
});
