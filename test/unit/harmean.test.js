var chai = require('chai');
var expect = chai.expect;
var stats = require('../../lib/stats');

describe('Harmonic Mean', function() {
    it('should return the harmonic mean of an array of ints', function() {
        expect(stats.harmean([1,2])).to.equal(1.33333333333333333);
    });

    it('should return the harmonic mean of an array of "ints"', function() {
        expect(stats.harmean(['1','2'])).to.equal(1.33333333333333333);
    });

    it('should return the harmonic mean of an array of "ints" and ints', function() {
        expect(stats.harmean(['1',2])).to.equal(1.33333333333333333);
    });
});
