var chai = require('chai');
var expect = chai.expect;
var stats = require('../lib/stats');

describe('Covariance', function() {
    it('should return the population covariance from two arrays of ints', function() {
        expect(stats.population_covariance([1,2,3], [4,5,6])).to.equal(0.6666666666666666);
    });

    it('should return the population covariance from two arrays of "ints"', function() {
        expect(stats.population_covariance(['1','2','3'], ['4','5','6'])).to.equal(0.6666666666666666);
    });
});

