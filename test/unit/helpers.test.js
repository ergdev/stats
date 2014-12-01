var chai = require('chai');
var expect = chai.expect;
var stats = require('../../lib/stats');

describe('Helper functions', function() {
	describe('sum', function() {
		it('should add two numbers', function() {
			expect(stats._private.sum(1,2)).to.equal(3);
		});
	});

	describe('product', function() {
		it('should multiply two numbers', function() {
			expect(stats._private.product(2,3)).to.equal(6);
		});
	});

	describe('difference', function() {
		it('should subtract two numbers', function() {
			expect(stats._private.difference(5,2)).to.equal(3);
		});
	});

	describe('inv', function() {
		it('should return the inverse of a number', function() {
			expect(stats._private.inv(10)).to.equal(0.1);
		});
	});

	describe('square', function() {
		it('should square a number ', function() {
			expect(stats._private.sq(2)).to.equal(4);
		});
	});
});