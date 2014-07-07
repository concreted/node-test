for (var i = 0; i < 100; i++) {
    setTimeout(function () {
	console.log(i);
    }, 100);
}
console.log('You might think this gets printed last.')