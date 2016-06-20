"use strict";
angular.module('appTesting.fakes', []).value("UsersFakes", [
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
]);