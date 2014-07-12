var p = require("promise-extended");
var Promise = p.Promise;

var operations = [];

var printNumberLater = function (i) {
    var prom = new Promise();

    setTimeout(function () {
	console.log(i);
	prom.callback();
    }, 100);

    return prom.promise(); //Return the newly created promise right away.
};

for (var i = 0; i < 100; i++)
{
    operations.push(printNumberLater(i));
}

p.when(operations).then(function (/*bios*/ /*this argument not needed?*/) {
    console.log('executed after all operations complete.');
});