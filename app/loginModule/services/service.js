angular.module('appTesting').service("UsersService", function () {
    "use strict";

    var users = [
        {
            id: 1,
            username: "pikachu",
            password: "1234",
            lastLogin: new Date(2010, 9, 23, 11, 55, 0)
        },
        {
            id: 2,
            username: "bulbasur",
            password: "5678",
            lastLogin: new Date(2016, 9, 23, 11, 55, 0)
        },
        {
            id: 3,
            username: "charmander",
            password: "9012",
            lastLogin: new Date(2015, 9, 23, 11, 55, 0)
        }
    ];

    // var users = {};
    // loadUsers().then(function (data) {
    //     users = data;
    // });

    // var loadUsers = function loadUsers() {
    //     var deferred = $q.defer();
    //     $http.get('app/loginModule/data/users.json')
    //         .then(function (response) {
    //             deferred.resolve(response.data);
    //         }, function (error) {
    //             deferred.resolve({});
    //         });
    //     return deferred.promise;
    // };

    var getAll = function getAll() {
        return users;
    };

    var getUser = function getUser(username) {
        return users.find(function (el) { return el.username === username; }) || {};
    };

    var getLogin = function getLogin(username, password) {
        var user = users.find(function (el) { return el.username === username; }) || {};
        if (user.password && user.password === password) return true;
        return false;
    };

    var canLogin = function getLogin(username) {
        var user = users.find(function (el) { return el.username === username; }) || {};
        var dateCanLogin = user.lastLogin;
        var today = new Date();
        dateCanLogin.setFullYear(dateCanLogin.getFullYear() + 2);
        if (dateCanLogin >= today) return true;
        return false;
    };
    
    var getUserById = function getUserById(id) {
        return users.find(function (el) { return el.id === id; }) || {};
    }

    return {
        getUser: getUser,
        getLogin: getLogin,
        getAll: getAll,
        canLogin: canLogin,
        getUserById:getUserById
    };
});
