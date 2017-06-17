var express = require('express');

var app = express();
var port = 3000;
var host = 'localhost'
app.listen(port,function(err){
    console.log('running server on port: '+port);
})