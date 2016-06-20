angular.module('appTesting').controller('LoginController', function LoginController($routeParams, UsersService,LoginLocalStorage, $location) {
    "use strict";
    var model = this;

    var login = function login() {
        if (UsersService.getLogin(model.username, model.password)) {
            model.userlogon = UsersService.getUser(model.username);
            LoginLocalStorage.setUser(model.userlogon);
            $location.path("/logged");
        }
    }

    var resetLogin = function resetLogin() {
        LoginLocalStorage.setUser({});
        model.userlogon = {};
        model.username = "";
        model.password =  "";
    }

    var initController = function initController() {
        model.userlogon = LoginLocalStorage.getUser() || {};
        model.username = model.userlogon.username || "";
        model.password =  "";
    };

    initController();

    model.login = login;
    model.resetLogin = resetLogin;
});

angular.module('appTesting').controller('UserController', function UserController($routeParams, UsersService) {
    "use strict";
    var model = this;

    var initController = function initController() {
        model.user = UsersService.getUserById(parseInt($routeParams.id)) || {};
    };

    initController();
});