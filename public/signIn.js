// This is our single page website which will responsive to the user interaction with it.
// I have use javascript and jquery to create the view and append the text into view.
// I will use the history manipulation function to go back and forward to different views.
// Also I have create an array of object to be display on the view each time the user likes
// to view them.

$(document).ready(function() {

     var counterFav=0;
     var counterSugg=0;
     var stateObj = { };

    // I will get the userName that I stored on login information from index.js
     var name = localStorage.getItem("userName");
    // if a name is provide by login if not display the defult message just User
     if (name){
         $("#userMsg").append("Welcome, "+name); // here display the name of the user
     }else{
         $("#userMsg").append("Welcome, "+ "User");

     }

     // here I have the event lister for a click on the so I display only what
     // the user choose to display
     $("#favBtn").click(function (){
         if(counterFav==0) { // creating the view if no view have been created
             // history.pushState(null, null, "#favRes");
             stateObj = { view: "favRes" };
             showfavorites();// calling the showfavorites to crete the view
             // just displaying with hide and show the favorite
             $("#suggRes").hide();
             $("#favRes").show();
             counterFav++;
         }else{// just displaying with hide and show the favorite
             $("#suggRes").hide();
             $("#favRes").show();

         }
     });
     $("#suggBtn").click(function (){
         if(counterSugg==0) {
             // history.pushState(null, null, "#suggRes");
             $("#favRes").hide();
             showSuggestions();// calling the showSuggestions to crete the view
             // just displaying with hide and show the suggestion
             $("#suggRes").show();
             counterSugg++;
         }else{// just displaying with hide and show the suggestions
             $("#favRes").hide();
             $("#suggRes").show();

         }
     });
     // $("#contBtn").click(function (){
     //
     // });

    // Creating the history bottom
    $(window).on("popstate", function() {
         // alert("on popstate");
    });

    $("#favBtn").click(function(e) {
        e.preventDefault();
        // alert("on cliclfunctiot 1");
        window.history.pushState("", document.title, "#favRes");
    });
    $("#suggBtn").click(function(e) {
        e.preventDefault();
        // alert("on clikc function 2");
        window.history.pushState("", document.title, "#suggRes");
    });



});

 // showfavorites it creates a table of view of the favorite resutrant stored on array restarunts
function showfavorites() {
    $('#favRes').prepend("<h4> Your favorite places to eat</h4>");

    //The head of the table
    $('#favTable').append("<tr> <th>Restaurant</th> <th>Type of Food</th> <th>Location</th> </tr>");
    // The array of information that will populate the tables
    var restaurants = [
        {
            name: "Faccia Luna",
            typeOfFood: "Italian",
            location: "Arlington, Va",
        },
        {
            name: "Cactus Cantina",
            typeOfFood: "Mexican",
            location: "Washington, DC",
        },
        {
            name: "Barcelona",
            typeOfFood: "Italian",
            location: "Washington, DC",
        }
    ];
// The loop to display the information into the table to append
    for (var restaurant of restaurants) {
         $('#favTable').append(
             "<tr> <td>"+restaurant.name +"</td>"
             + "<td>"+restaurant.typeOfFood +"</td> "
             + "<td>"+restaurant.location +"</td> </tr>");


    }
}

 // showSuggestions it creates a table of view of the suggestion made by resutrant stored on array restarunts
 function showSuggestions() {
    // The message for the table title
     $('#suggRes').prepend("<div id='title' ></div><h4> Our suggestion for you today</h4></div>");

     //The head of the table
     $('#suggTable').append("<tr> <th>Restaurant</th> <th>Type of Food</th> <th>Location</th> </tr>");
     // The array of information that will populate the tables
     var restaurants = [
         {
             name: "Red Hen",
             typeOfFood: "Italian",
             location: "Washington, DC",
         },
         {
             name: "Diplomat",
             typeOfFood: "French",
             location: "Washington, DC",
         },
         {
             name: "Texas Jack",
             typeOfFood: "American BBQ",
             location: "Arlington, VA",
         }
     ];
// The loop to display the information into the table to append
     for (var restaurant of restaurants) {
         $('#suggTable').append(
             "<tr> <td>"+restaurant.name +"</td>"
             + "<td>"+restaurant.typeOfFood +"</td> "
             + "<td>"+restaurant.location +"</td> </tr>");


     }
 }
