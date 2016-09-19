// window.onbeforeunload = function (e) {
//     e = e || window.event;
//
//     if (e) {
//         e.returnValue = 'Sure?';
//     }
//
//     return 'Sure?';
// };
window.onbeforeunload = function(evt) {
    var message = 'Did you remember to download your form?';
    if (typeof evt == 'undefined') {
        evt = window.event;
    }
    if (evt) {
        evt.returnValue = message;
    }

    return message;
}
function SubmitPopUp()
{
    // alert("Thank you for signing up!");
    // window.location.href = "index.html";
    BootstrapDialog.show({
            type: BootstrapDialog.TYPE_PRIMARY,
            title:'Message',
            message: "Thank you for signing up!",
            buttons: [{
                label: 'OK',
                cssClass: 'btn-primary',
                action: function(dialogItself){
                    dialogItself.close();
                    window.location.href = "index.html";
                }
            }]
        });

}
function GoBack() {

    showMessageDialog("Do you want to go back to last page?","warning");
}

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
