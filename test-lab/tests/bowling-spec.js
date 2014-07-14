var assert = require('assert');
var BowlingGame = require('../source/bowling');

describe('Bowling scorer', function () {

    beforeEach(function () {
	this.game = new BowlingGame();
    });

   // This test should be passing
    it('should return a score of 0 if no pins have been knocked down', function () {
	var score = this.game.score();
	assert.equal(score, 0);
    });

   // This test should be failing at this point
    it('should return a score of 1 if 1 pin has been knocked down', function () {
	this.game.roll(1);
	var score = this.game.score();
	assert.equal(score, 1);
    });

});