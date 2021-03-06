var chai = require('chai');
var expect = chai.expect;
var stats = require('../../lib/stats');

describe('median', function() {
    it('should return the median of an odd length array', function() {
        expect(stats.median([1,2,3])).to.equal(2);
    });

    it('should return the median of an evan length array', function() {
        expect(stats.median([1,2,3,4])).to.equal(2.5);
    });

    it('should return the median of an array of "ints"', function() {
        expect(stats.median(['1','2','3'])).to.equal(2);
    });

    it('should return the median of an array of ints and "ints"', function() {
        expect(stats.median([1,'2','3'])).to.equal(2);
    });
});