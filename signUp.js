function SubmitPopUp()
{
    showMessageDialog("Thank you for sign up!\n\nClick 'OK' to sign in from main page!","normal");
    // if (confirm("Thank you for sign up!\n\nClick 'OK' to sign in from main page!") == true) {
    //     //var win = window.open("index.html", '_blank');
    //     window.location.href = "index.html";
    //     win.focus();
    //     } else {
    //
    //     }
}
function GoBack() {

    showMessageDialog("Do you want to go back to last page?","warning");
}

function showMessageDialog(message,type)
{
    if(type == "error")
    {

        BootstrapDialog.show({
            title: 'Error',
            type: BootstrapDialog.TYPE_DANGER,
            message: message,
            buttons: [{
                label: 'Close',
                action: function(dialogItself){
                    dialogItself.close();
                }
            }]
        });
    }else if(type == "warning")
    {
        BootstrapDialog.show({
            title: 'Warning',
            message: message,
            type: BootstrapDialog.TYPE_WARNING,
            buttons: [
                {
                    label: 'OK',
                    cssClass: 'btn-warning',
                    action: function (dialogItself) {
                        history.back();
                    }
                },
                {
                    label: 'Close',
                    cssClass: 'btn-danger',
                    action: function(dialogItself){
                        dialogItself.close();
                    }
                }]
        });
    }else if(type == "normal")
    {
        BootstrapDialog.show({
            title: 'Message',
            type: BootstrapDialog.TYPE_PRIMARY,
            message: message,
            buttons: [
                {
                    label: 'OK',
                    cssClass: 'btn-primary',
                    action: function (dialogItself) {
                        window.location.href = "index.html";
                    }
                },
                {
                    label: 'Close',
                    cssClass: 'btn-warning',
                    action: function(dialogItself){
                        dialogItself.close();
                }
            }]

        });
    }
}