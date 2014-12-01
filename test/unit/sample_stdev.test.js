var chai = require('chai');
var expect = chai.expect;
var stats = require('../../lib/stats');

describe('Standard Deviation', function() {
    it('should return the standard deviation of an array of ints', function() {
        expect(stats.sample_stdev([10,20,33,76])).to.equal(29.067450295247202);
    });

    it('should return the standard deviation of an array of "ints"', function() {
        expect(stats.sample_stdev(['10','20','33','76'])).to.equal(29.067450295247202);
    });

    it('should return the standard deviation of an array of ints and "ints"', function() {
        expect(stats.sample_stdev(['10',20,33,'76'])).to.equal(29.067450295247202);
    });

    it('should return the standard deviation of an array of "ints"', function() {
        expect(stats.sample_stdev([])).to.be.empty();
    });
});
