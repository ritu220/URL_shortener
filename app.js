var express = require('express');
var app = express();
var path = require('path');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');
var base58 = require('./base58');
var url = require('./models/url');


mongoose.connect('mongodb://' + config.db.host + '/' + config.db.name);

app.use(bodyparser.json);
app.use(bodyparser.urlencoded({extended : true}));

app.use(express.static(path.join(__dirname , 'public')));



app.get('/',function (req,res) {

    res.sendFile(path.join(__dirname , 'views/index.html'));
});



// app.post('/api/shorten',function (req,res) {
//
// });
//
// app.get('/:encoded_id',function (req,res) {
//
// });

var server = app.listen(3000 , function () {
    console.log("chalu hoja!!!");
});