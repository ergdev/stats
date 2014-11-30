var chai = require('chai');
var expect = chai.expect;
var stats = require('../lib/stats');

describe('Covariance', function() {
    it('should return the sample covariance from two arrays of ints', function() {
        expect(stats.sample_covariance([1,2,3], [4,5,6])).to.equal(1);
    });

    it('should return the sample covariance from two arrays of "ints"', function() {
        expect(stats.sample_covariance(['1','2','3'], ['4','5','6'])).to.equal(1);
    });
});
