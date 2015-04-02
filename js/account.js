(function () {
    CloudU.registerGlobal('login', function () {
        CloudU.auth(function () {
            window.location.href = "cloudu.html";
        });
    });
})();