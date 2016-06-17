describe('Controllers ...', function () {
    beforeEach(module('appTesting'));
    
    describe('LoginController', function () {
        var scope, $location, createController;

        beforeEach(inject(function ($rootScope, $controller, _$location_) {
            $location = _$location_;
            scope = $rootScope.$new();

            createController = function () {
                return $controller('LoginController', { '$scope': scope });
            };
        }));

        it('route correct', function () {
            var controller = createController();
            $location.path('/login');
            expect($location.path()).toBe('/login');
            expect($location.path()).not.toBe('/logged');
        });
    });
});