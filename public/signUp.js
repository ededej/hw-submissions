$(document).ready(function () {
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

// creating a reference to use firebase
    var usersRef = firebase.database().ref('users');

    // checking if the email and password match
    $("#emailId2").keyup(checkEmailId());
    $("#pass2").keyup(checkPassword);

//when use click submit button
    $('#singUp').click(function () {
//   varible to set the new user with uid as key
        var uid = document.getElementById('emailId1').value;
        var uidCopy = uid;
        var pass = document.getElementById('pass1').value;
        var gender = getGenderValue();
        var foodPrefer = getFoodPref();
        var elemState = document.getElementById("state");
        var state = elemState.options[elemState.selectedIndex].text;
        // make the email as key which doesn't allow the . so I will change that %20 to make the email a key
        uid = uid.replace(/\./g, '%20');

//    I will check first if the key UiD exits and later create a new with all the values
        usersRef.once('value', function (snapshot) {
            var data = snapshot.val();
            var checkUser = snapshot.hasChild(uid);
            // if the email already exits as key than don't create a new entry
            if (checkUser) {
                alert('User with' + uidCopy + ' has an account!\n' + "I can't create this account");
                return false;
            } else {
                // setting up the firebase with all the necessary fields
                usersRef.child(uid).set(
                    {
                        FirstName: document.getElementById('firstName').value,
                        LastName: document.getElementById('lastName').value,
                        Gender: gender,
                        Diet: foodPrefer,
                        Email: uidCopy,
                        Password: pass,
                        Address: {
                            Street: document.getElementById('streetId').value,
                            City: document.getElementById('cityId').value,
                            State: state,
                            ZipCode: document.getElementById('zipCode').value
                        }

                    });
            }
        });
    });

});

// functio to read the radio button
function getGenderValue() {
    var gender = $('input[name=gender]:checked').val();
    if (gender) {
        return gender;
    } else {
        return "None";
    }
}

// functio to read the radio button for the food preference
function getFoodPref() {
    var prefer = $('input[name=foodOption]:checked').val();
    if (prefer) {
        return prefer;
    } else {
        return "None";
    }
}
function checkEmailId() {
    var email1 = document.getElementById('emailId1').value;
    var email2 = document.getElementById('emailId2').value;
    if (email1 != email2) {
        $("#stringCheckEmailMatch").html("Email do not match!");
        return false;
    }
    else {
        $("#stringCheckEmailMatch").html("Email match.");
        return true;
    }
}

function checkPassword() {
    var pwd1 = document.getElementById('pass1').value;
    var pwd2 = document.getElementById('pass2').value;
    if (pwd1 != pwd2) {
        $("#stringCheckPasswordMatch").html("Passwords do not match!");
        return false;
    }
    else {
        $("#stringCheckPasswordMatch").html("Passwords match.");
        return true;
    }
}

function SubmitPopUp() {
    window.location.href = "index.html";
    // alert("Thank you for signing up!");

}

