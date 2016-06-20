describe('Controllers ...', function () {
    beforeEach(module('appTesting'));

    describe('LoginController', function () {
        var scope, $location, createController, userlogon, today;

        beforeEach(inject(function ($rootScope, $controller, _$location_, _$componentController_) {

            $location = _$location_;
            $componentController = _$componentController_;
            scope = $rootScope.$new();

            today = new Date();

            userlogon = {
                id: 1,
                username: "pikachu",
                password: "1234",
                lastLogin: today
            };

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

        xit('route correct', function () {
            var controller = createController();
            $location.path('/api/login/user/1');
            expect($location.path()).toBe('/login');
            expect($location.path()).not.toBe('/logged');
        });

        it('component', function () {
            // Here we are passing actual bindings to the component
            component = $componentController('userLogged', null, { userlogon: userlogon });
            expect(component.lastLogin).toBe(today);
        });
    });
});
