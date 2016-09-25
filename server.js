/**
 * Created by shelby on 9/25/16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Factual = require('factual-api');
var factual = new Factual('8t9ZdXYwXills2o1Ftf2XepEmrfFHHWaJmftl0DS', 'BpDpxPzl4M2IPfb7C0Fkqj9p44SQCvsbbBdf1akq');

factual.get('http://api.v3.factual.com/t/restaurants-us/schema',{q:"starbucks", filters:{"locality":"los angeles"}}, function (data) {
    console.log(res.view);
});

app.use(express.static('public'));

app.post('/', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    console.log(req.body.todoItems);
    var sentiments = [];
    for (var item of req.body.todoItems)
        sentiments.push(sentiment(item).score);
});
var port = process.env.PORT || 4000;

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});
