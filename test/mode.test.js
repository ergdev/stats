var chai = require('chai');
var expect = chai.expect;
var stats = require('../lib/stats');

describe('Mode', function() {
    it('should return the mode of an array of ints', function() {
        expect(stats.mode([1,2,2,2,2,3])).to.equal(2);
    });

    it('should return the mode of an array of "ints"', function() {
        expect(stats.mode(['1','2','2','2','2','3'])).to.equal(2);
    });

    it('should return the mode of an array of ints and "ints"', function() {
        expect(stats.mode(['1',2,'2','2',2,'3'])).to.equal(2);
    });
});

