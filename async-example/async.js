var async = require('async');
var workToBeDone = [];

var printNumberLater = function (i) {
    return function (callback) {
	setTimeout(function () {
	    console.log(i);
	    callback();
	}, 100);
    };
};

var someCallback = function() {
    console.log("doing callback stuff");
}

for (var i = 0; i < 100; i++) {
    workToBeDone.push(printNumberLater(i)(someCallback));
}

async.parallel(workToBeDone, function () {
    console.log('this still gets printed last');
});