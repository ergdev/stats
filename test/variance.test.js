var chai = require('chai');
var expect = chai.expect;
var stats = require('../lib/stats');

describe('Variance', function() {
    it('should return the variance of an array of ints', function() {
        expect(stats.variance([1,2,3,4,5,6])).to.equal(2.9166666666666665);
    });

    it('should return the variance of an array of "ints"', function() {
        expect(stats.variance(['1','2','3','4','5','6'])).to.equal(2.9166666666666665);
    });

    it('should return the variance of an array of ints', function() {
        expect(stats.variance([1,'2',3,'4',5,6])).to.equal(2.9166666666666665);
    });
});

