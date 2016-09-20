// singUp.js it will simple since the singUp.html is just a form to singup on our page

//This function it will pup an alert to the user to not close the tab/window without saving the informatio
window.onbeforeunload = function(event) {
    event.returnValue = alert("");
};

//The SubmitPopUp just rederect the to the signIn.html and thanks the user for sing in.
function SubmitPopUp()
{
    window.location.href = "signIn.html";
    alert("Thank you for signing up!");

}
