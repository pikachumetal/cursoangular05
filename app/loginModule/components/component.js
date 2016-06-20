var userLoggedController = function userLoggedController() {
    "use strict";
    var model = this;
    if (model.userlogon.lastLogin) {
        model.lastLogin = model.userlogon.lastLogin;
    }
};

angular.module('appTesting').component("userLogged", {
    templateUrl: "app/loginModule/templates/login.home.pres.template.html",
    bindings: {
        userlogon: '<',
        username: '<',
        password: '<'
    },
    controller: userLoggedController
});