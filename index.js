//bootstrap file.
var express = require('express');
var routes = require('./routing');
var mongoose = require("mongoose");
var dbConfig  = require('./config');
var bodyParser = require('body-parser');
var app = express();

//configuration for body parser
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: false, parameterLimit:50000}));

// configuration for route
app.use('/sunny_shopping/v1',routes);

// connection with mongo db
(function(){
    mongoose.connect(dbConfig);
    var db = mongoose.connection;
    db.on('error',function(error){
        console.log(error);
    })
    db.once('open',function(){
        console.log("connected with mongo DB");
    })
})();

//init server
app.listen(5000,function(){
    console.log('express server running');
});







