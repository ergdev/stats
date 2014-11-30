var chai = require('chai');
var expect = chai.expect;
var stats = require('../lib/stats');

describe('Range', function() {
    it('should return the range of an array of ints', function() {
        expect(stats.range([1,2,3])).to.equal(2);
    });

    it('should return the range of an array of "ints"', function() {
        expect(stats.range(['1','2','3'])).to.equal(2);
    });

    it('should return the range of an array of ints and "ints"', function() {
        expect(stats.range(['1',2,'3'])).to.equal(2);
    });
});

