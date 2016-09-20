
// This function it redirect to the page
function SubmitPopUp()
{
    window.location.href = "signIn.html";
    var userID = document.getElementById('inputEmail').value;
    var userPass=document.getElementById('inputPassword').value;
    localStorage.setItem("userName", userID);

    // saveUserLogin(userID,userPass);
    // alert("Thank you for signing up, "+ userID);

}

function saveUserLogin(user, pass) {
    var account = {
        User: user,
        Pass: pass
    };
    //converts to JSON string the Object
    account = JSON.stringify(account);
    //creates a base-64 encoded ASCII string
    // account = btoa(account);
    //save the encoded accout to web storage
    localStorage.setItem('_account', account);
}