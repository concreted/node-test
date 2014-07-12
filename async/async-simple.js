var printNumberLater = function(i) {
    setTimeout(function() {
	console.log(i);
    }, 1000);
};

for (var i = 0; i < 100; i++) {
    printNumberLater(i);
}

console.log('You might think this gets printed last.')