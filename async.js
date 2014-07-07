for (var i = 0; i < 100; i++) {
    (function (i) {
	setTimeout(function () {
	    console.log(i);
	}, 1000);
    })(i);
}
console.log('You might think this gets printed last.')