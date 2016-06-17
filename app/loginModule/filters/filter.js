angular.module('appTesting').filter('reverse', [function() {
    return function (string) {
        return string.split("").reverse().join("");
    }
}]);
