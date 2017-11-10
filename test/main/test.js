"use strict";

/* global describe it */

var assert = require("assert");

// Test to see that tests work..
describe("Add 3 to 7", function() {
    var res = 3 + 7;

    it("should be equal to 10", function() {
        assert.equal(res, 10);
    });

    it("should be even", function() {
        var isEven = res % 2 == 0;

        assert.equal(isEven, true);
    });
});
