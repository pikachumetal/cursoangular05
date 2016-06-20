describe('Others...', function () {
    "use strict";
    //beforeEach(module('appTesting'));

    describe('Date matters...', function () {

        beforeEach(function () {
            jasmine.clock().install();
        });

        afterEach(function () {
            jasmine.clock().uninstall();
        });

        it("mocks the Date object and sets it to a given time", function () {
            var baseTime = new Date(2013, 9, 23);
            jasmine.clock().mockDate(baseTime);

            jasmine.clock().tick(50);
            expect(new Date().getTime()).toEqual(baseTime.getTime() + 50);
        });
    });
});