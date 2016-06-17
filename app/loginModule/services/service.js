angular.module('appTesting').service("UsersService", function () {
    "use strict";

    var users = [
        {
            id: 1,
            username: "pikachu",
            password: "1234"
        },
        {
            id: 2,
            username: "bulbasur",
            password: "5678"
        },
        {
            id: 1,
            username: "charmander",
            password: "9012"
        }
    ];

    var getUser = function getUser(username) {
        return users.find(function (el) { return el.username === username; }) || {};
    };

    var getLogin = function getUser(username, password) {
        var user = users.find(function (el) { return el.username === username; }) || {};
        if (user.password && user.password === password) return true;
        return false;
    };

    return{
        getUser:getUser,
        getLogin:getLogin
    };
});
