/**
 * Created by shelby on 9/25/16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Factual = require('factual-api');
var factual = new Factual('8t9ZdXYwXills2o1Ftf2XepEmrfFHHWaJmftl0DS', 'BpDpxPzl4M2IPfb7C0Fkqj9p44SQCvsbbBdf1akq');

//
// Query q = new Query()
//     .only("name", "address")
//     .search("cafe")
//     .within(new Circle(34.06018, -118.41835, 5000))
//     .field("postcode").equal("90067")
//     .field("category").equal("Food & Beverage")
//     .limit(25);
// factual.startDebug();




app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(express.static('public'));
var search;
var myRes = [];
app.post('/', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    // receving the zip code or adress
    search= req.body.sendSearch;
    //searching with for resturant from the data that we get from the user
    // var myRes = [];
    // factual.get('/t//restaurants?q='+search, function (error, res) {
    //     // console.log("res.data");
    //     var myR = res.data;
    //     for (results of myR) {
    //         myRes.push(results.name);
    //          // console.log(results.name);
    //         // res.json(results.name);
    //     }
    // });
    //responding a list of resturants
    getResult(res);
    // var obj1=JSON.parse(myRes);
    res.json(myRes);

    console.log(myRes);

});

function getResult(res) {
    console.log("In server "+search);

    factual.get('/t//restaurants?q='+search, function (error, res) {
        var myR = res.data;
        for (results of myR) {
            myRes.push({
                'name': results.name,
                'address': results.address,
                'location': results.locality,
                'zipcode': results.postcode,
                'website': results.website,
                'price': results.price,
                'lunch': results.meal_lunch
            });
            // console.log(results.name);
        }
    });
}
var port = process.env.PORT || 4000;

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});
