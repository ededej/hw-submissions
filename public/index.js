// the index.js will have the code to connect with servere
// sendin informatio to the server and get back the search result
// also append them to the result

"use strict";
var sendSearch=[];
$("#btnSearch").click(function() {
    sendSearch=$('#textSearch').val();
    console.log("value in index "+sendSearch);

    $.post("http://127.0.0.1:4000" , {sendSearch:sendSearch} )
        .done(function(data) {
            var restaurants=[];
            $('#resTable').append("<tr> <th>Name</th> <th>Address</th> <th>Location</th>" +
                "<th>Zipcode</th> <th>Website</th> <th>Price</th> <th>Lunch</th></tr>");

            for (var restaurant of data) {
                console.log(restaurant.name);

                $('#resTable').append(
                    "<tr> <td>"+restaurant.name +"</td>"
                    + "<td>"+restaurant.address +"</td> "
                    + "<td>"+restaurant.location +"</td> " +
                    "<td>"+restaurant.zipcode +"</td>" +
                    "<td>"+restaurant.website +"</td>" +
                    "<td>"+restaurant.price +"</td>"+
                    "<td>"+restaurant.lunch +"</td>"+
                    "</tr>");


            }

        });
});
