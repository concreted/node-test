var BowlingGame = function () {
    this.rolls = [];
};

BowlingGame.prototype.roll = function (pins) {
    // record this roll
    this.rolls.push(pins);
};

BowlingGame.prototype.score = function () {
    return this.rolls.reduce(function(acc, n) {
	return acc + n;
    }, 0);
};

module.exports = BowlingGame;