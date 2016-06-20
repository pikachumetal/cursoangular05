describe('Services ...', function () {
    "use strict";

    beforeEach(module('appTesting.fakes'));
    beforeEach(module('appTesting'));

    describe('UsersService', function () {
        var usersService, users;

        beforeEach(function () {
            jasmine.clock().install();
        });

        afterEach(function () {
            jasmine.clock().uninstall();
        });

        beforeEach(inject(function (_UsersService_, UsersFakes) {
            usersService = _UsersService_;
            users = UsersFakes;
        }));

        it('service and methods exist', function () {
            expect(usersService).toBeDefined();
            expect(usersService.getAll).toBeDefined();
            expect(usersService.getUser).toBeDefined();
            expect(usersService.getLogin).toBeDefined();
            expect(usersService.canLogin).toBeDefined();
        });

        it('getAll defined', function () {
            var usersAll = usersService.getAll();
            expect(usersAll).toBeDefined();
        });

        it('getAll return all users', function () {
            var usersAll = usersService.getAll();
            expect(usersAll).toEqual(users);
        });

        it('getLogin correct', function () {
            var ret = usersService.getLogin(users[0].username, users[0].password);
            expect(ret).toBe(true);
        });

        it('getLogin incorrect', function () {
            var ret = usersService.getLogin(users[0].username, users[1].password);
            expect(ret).toBe(false);
        });

        it('canLogin incorrect', function () {
            var baseTime = new Date(2013, 9, 23);
            jasmine.clock().mockDate(baseTime);

            var ret = usersService.canLogin(users[0].username);
            expect(ret).toBe(false);
        });

        it('canLogin correct', function () {
            var baseTime = new Date(2013, 9, 23);
            jasmine.clock().mockDate(baseTime);

            var ret = usersService.canLogin(users[1].username);
            expect(ret).toBe(true);
        });
    });
});