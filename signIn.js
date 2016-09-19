 $(document).ready(function() {

    var counterFav=0;
     var counterSugg=0;

     // showfavorites();
     // showSuggestions();
     $("#favBtn").click(function (){
         if(counterFav==0) {
             showfavorites();
             $("#suggRes").hide();
             $("#favRes").show();
             counterFav++;
         }else{
             $("#suggRes").hide();
             $("#favRes").show();

         }
         // $("#suggTable").hide();
     });
     $("#suggBtn").click(function (){
         if(counterSugg==0) {
             $("#favRes").hide();
             showSuggestions();
             $("#suggRes").show();
             counterSugg++;
         }else{
             $("#favRes").hide();
             $("#suggRes").show();

         }
     });
     $("#contBtn").click(function (){

     });

 });

function showfavorites() {
    $('#favRes').append("<h4> Your favorite places to eat</h4>");

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
         // $('#favTable').append(' Name: ' + restaurant.name + ' Address: ');
         $('#favTable').append(
             "<tr> <td>"+restaurant.name +"</td>"
             + "<td>"+restaurant.typeOfFood +"</td> "
             + "<td>"+restaurant.location +"</td> </tr>");


    }
}


 function showSuggestions() {

     $('#suggRes').append("<h4> Our suggestion for you today</h4>");

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
         // $('#favTable').append(' Name: ' + restaurant.name + ' Address: ');
         $('#suggTable').append(
             "<tr> <td>"+restaurant.name +"</td>"
             + "<td>"+restaurant.typeOfFood +"</td> "
             + "<td>"+restaurant.location +"</td> </tr>");


     }
 }