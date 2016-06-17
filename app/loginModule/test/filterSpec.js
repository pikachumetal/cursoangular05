describe('Filters ...', function () {
    beforeEach(module('appTesting'));

    describe('reverse', function () {
        var reverse;
        beforeEach(inject(function ($filter) {
            reverse = $filter('reverse', {});
        }));

        it("reverse string", function () {
            expect(reverse("1234")).toBe("4321");
        });
    });
});
