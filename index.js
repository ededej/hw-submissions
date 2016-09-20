
// This function it redirect to the page and save the information about login in local storage to use on ASP
// on singIn page
function SubmitPopUp()
{
    window.location.href = "signIn.html";
    var userID = document.getElementById('inputEmail').value;
    var userPass=document.getElementById('inputPassword').value;
    localStorage.setItem("userName", userID);
    // alert("Thank you for signing up, "+ userID);

}
