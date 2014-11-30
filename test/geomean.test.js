var chai = require('chai');
var expect = chai.expect;
var stats = require('../lib/stats');

describe('Geometric Mean', function() {
    it('should return the geometric mean of an array of ints', function() {
        expect(stats.geomean([1,2])).to.equal(1.4142135623730951);
    });

    it('should return the geometric mean of an array of "ints"', function() {
        expect(stats.geomean(['1','2'])).to.equal(1.4142135623730951);
    });

    it('should return the geometric mean of an array of "ints" and ints', function() {
        expect(stats.geomean(['1',2])).to.equal(1.4142135623730951);
    });
});

