window.onbeforeunload = function(event) {
    event.returnValue = alert("");
};

function SubmitPopUp()
{
    window.location.href = "index.html";
    alert("Thank you for signing up!");

}
//Don't delete these comments

// window.onbeforeunload = function (event) {
//     var message = 'Sure you want to leave?';
//     if (typeof event == 'undefined') {
//         event = window.event;
//     }
//     if (event) {
//         event.returnValue = message;
//     }
//     return message;
// }

// function showMessageDialog(message,type)
// {
//     if(type == "error")
//     {
//
//         BootstrapDialog.show({
//             title: 'Error',
//             type: BootstrapDialog.TYPE_DANGER,
//             message: message,
//             buttons: [{
//                 label: 'Close',
//                 action: function(dialogItself){
//                     dialogItself.close();
//                 }
//             }]
//         });
//     }else if(type == "warning")
//     {
//         BootstrapDialog.show({
//             title: 'Warning',
//             message: message,
//             type: BootstrapDialog.TYPE_WARNING,
//             buttons: [
//                 {
//                     label: 'OK',
//                     cssClass: 'btn-warning',
//                     action: function (dialogItself) {
//                         history.back();
//                     }
//                 },
//                 {
//                     label: 'Close',
//                     cssClass: 'btn-danger',
//                     action: function(dialogItself){
//                         dialogItself.close();
//                     }
//                 }]
//         });
//     }else if(type == "normal")
//     {
//         BootstrapDialog.show({
//             title: 'Message',
//             type: BootstrapDialog.TYPE_PRIMARY,
//             message: message,
//             buttons: [
//                 {
//                     label: 'OK',
//                     cssClass: 'btn-primary',
//                     action: function (dialogItself) {
//                         window.location.href = "index.html";
//                     }
//                 },
//                 {
//                     label: 'Close',
//                     cssClass: 'btn-warning',
//                     action: function(dialogItself){
//                         dialogItself.close();
//                 }
//             }]
//
//         });
//     }
// }
