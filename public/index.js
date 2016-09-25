
// This function it redirect to the page and save the information about login in local storage to use on ASP
// on singIn page
// function SubmitPopUp()
// {
//     window.location.href = "signIn.html";
//     var userID = document.getElementById('inputEmail').value;
//     var userPass=document.getElementById('inputPassword').value;
//     localStorage.setItem("userName", userID);
//     // alert("Thank you for signing up, "+ userID);
//
// }
// var express = require('express');
// var bodyParser = require('body-parser');
// var app = express();
// var Factual = require('factual-api');
// var factual = new Factual('8t9ZdXYwXills2o1Ftf2XepEmrfFHHWaJmftl0DS', 'BpDpxPzl4M2IPfb7C0Fkqj9p44SQCvsbbBdf1akq');
//
// factual.get('http://api.v3.factual.com/t/restaurants-us/schema', function (error, res) {
//     console.log(res.view);
// });

// $(document).ready(function() {
//
//     $.getJSON("http://api.v3.factual.com/t/restaurants-us/schema", function (data) {
//         var items = [];
//         $.each(data, function (key, val) {
//             // items.push("<li id='" + key + "'>" + val + "</li>");
//             $("#results").appendTo("<li id='" + key + "'>" + val + "</li>");
//
//         });
//
//     });
//
// }); // done ready