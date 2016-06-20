angular.module('appTesting', ["ngRoute", "ngMessages"]).config(function ($routeProvider) {
    "use strict";

    $routeProvider
        .when("/login", {
            templateUrl: "app/loginModule/templates/login.home.template.html",
            controllerAs: 'loginCtrl',
            controller: "LoginController"
        })
        .when("/logged", {
            templateUrl: "app/loginModule/templates/login.logged.template.html",
            controllerAs: 'loginCtrl',
            controller: "LoginController"
        })
        .when("/user/:id", {
            templateUrl: "app/loginModule/templates/user.template.html",
            controllerAs: 'userCtrl',
            controller: "UserController"
        })
        .when("/api/login/user/:id", {
            templateUrl: "app/loginModule/templates/api/user.template.html",
            controllerAs: 'userCtrl',
            controller: "UserController"
        })
        .otherwise({
            redirectTo: '/login'
        })
        ;
});
