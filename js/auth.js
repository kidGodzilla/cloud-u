"use strict";

(function () {
    var firebaseRef = new Firebase("https://cloudu.firebaseio.com/");

    function auth (callback) {

        var authData = firebaseRef.getAuth();

        if (authData) {
            // console.log("Authenticated user with uid:", authData.uid);
            var userID = authData.uid;
            CloudU.set('userID', authData.uid);
            if (authData.password && authData.password.email)
                CloudU.set('userEmail', authData.password.email);

            if (callback && typeof(callback) === "function")
                callback();
        } else {
            // Modal
            vex.dialog.open({
                message: 'Enter your username and password:',
                input: "<input name=\"email\" type=\"text\" placeholder=\"Email\" required />\n<input name=\"password\" type=\"password\" placeholder=\"Password\" required /><br>Don't have an account? <a href='https://www.bittitan.com/account/register'>Create an account now</a>",
                buttons: [
                    $.extend({}, vex.dialog.buttons.YES, {
                        text: 'Login'
                    }), $.extend({}, vex.dialog.buttons.NO, {
                        text: 'Back'
                    })
                ],
                callback: function (data) {
                    if (data === false) {
                        return false; // Cancelled
                    }

                    $.post('http://wpages.co/cloudu/login.php', {email: data.email, password: data.password}, function (data) {
                        console.log(data.token);
                        var token = data.token;

                        firebaseRef.authWithCustomToken(token, function(error, authData) {
                            if (error) {
                                console.log("Login Failed!", error);
                                Messenger().post({
                                    message: "Login Failed! " + error,
                                    type: 'error',
                                    showCloseButton: true
                                });
                            } else {
                                console.log("Login Succeeded!", authData);
                                Messenger().post("Logged in successfully.");

                                if (callback && typeof(callback) === "function")
                                    callback();
                            }
                        });
                    });

                }
            });
        }
    }

    CloudU.registerGlobal('auth', auth);
})();