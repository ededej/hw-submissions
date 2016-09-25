"use strict";
// Initialize Firebase
var config = {
    apiKey: "AIzaSyASLA-lv8N5CtE1orATmWy7uINmH0ZSdMA",
    authDomain: "pranzousersdb.firebaseapp.com",
    databaseURL: "https://pranzousersdb.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "694440498360"
};

firebase.initializeApp(config);

var usersRef= firebase.database().ref('users');

var verifyEmail = document.getElementById("emailId2");
if(verifyEmail) {
    verifyEmail.addEventListener("keyup", function (event) {
        if (!getEmailId) {
            verifyEmail.setCustomValidity("I expect an e-mail, darling!");
        } else {
            verifyEmail.setCustomValidity("");
        }
    });
}

$('#singUp').click(function(){
    var uid=document.getElementById('emailId1').value;
    var gender=getGenderValue();
    var foodPrefer= getFoodPref();
    var elemState = document.getElementById("state");
    var state = elemState.options[elemState.selectedIndex].text;
//        var emailId= getEmailId();
    if (uid == null || uid == "") {
        alert("Email must be filled out");
        return false;
    }else {
        uid=uid.replace(/\./g, '%20');
        usersRef.child(uid).set(
            {
                FirstName: document.getElementById('firstName').value,
                LastName: document.getElementById('lastName').value,
                Gender: gender,
                Diet: foodPrefer,
                Email:uid,
                Password: '',
                Address: {
                    Street: document.getElementById('streetId').value,
                    City: document.getElementById('cityId').value,
                    State: state,
                    ZipCode: document.getElementById('zipCode').value
                }

            }
        )
    }
});



//    function verifyEmail(input) {
//        input = input.srcElement;
//        if (input.value != document.getElementById('emailId1').value) {
//            // the provided value doesn’t match the primary email address
//            input.setCustomValidity('The two email addresses must match.');
//        } else {
//            // input is valid -- reset the error message
//            input.setCustomValidity('');
//        }
//    }
function getGenderValue(){
    var gender=$('input[name=gender]:checked').val();
    if(gender){
        return gender;
    }else{
        return "None"
    }
}

function getFoodPref() {
    var prefer=$('input[name=foodOption]:checked').val();
    if(prefer){
        return prefer;
    }else{
        return "None"
    }
}
function getEmailId() {
    var email1= document.getElementById('emailId1').value;
    var email2= document.getElementById('emailId2').value;
    if(email1===email2){
        return true;
    }else{
        return false;

    }


}

//    function SubmitPopUp()
//    {
//        window.location.href = "signIn.html";
//        alert("Thank you for signing up!");
//
//    }
//    var todosRef = firebase.database().ref('todos');
//
//
//    var nextIndex = 0;
//
//    todosRef.on('child_added', function(data) {
//        createItem(data.val().text, data.key);
//    });
//    todosRef.on('child_changed', function(data) {
//        $('div[data-index="' + data.key + '"] input').val(data.val().text);
//    });
//    todosRef.on('child_removed', function(data) {
//        $('div[data-index="' + data.key + '"]').remove();
//    });


//    $('#new').click(function()
//    {
//        todosRef.push({ 'text': ""});
//    });
//
//    function createItem(value, key)
//    {
//        $('#todoItems').append(
//                '<div class="todoItem" data-index="' + key+ '"><input type="text" onchange="itemChanged(this)" value="'
//                + value + '"><button onclick="deleteItem(this.parentElement)">&#x2716;</button></div>'
//        );
//    }

//    function deleteItem(inputDiv)
//    {
//        todosRef.child(inputDiv.dataset.index).remove();
//    }
//
//    function itemChanged(inputElem)
//    {
//        var index = inputElem.parentElement.dataset.index;
//        todosRef.child(inputElem.parentElement.dataset.index).set({ 'text': inputElem.value });
//    }


