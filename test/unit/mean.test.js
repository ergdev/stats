var chai = require('chai');
var expect = chai.expect;
var stats = require('../../lib/stats');

describe('mean', function() {
    it('should return the mean of an array', function() {
        expect(stats.mean([1,2])).to.equal(1.5);
    });

    it('should return the mean of an array of "ints"', function() {
        expect(stats.mean(['1','2'])).to.equal(1.5);
    });

    it('should return the mean of an array of ints and "ints"', function() {
        expect(stats.mean(['1',2])).to.equal(1.5);
    });
});