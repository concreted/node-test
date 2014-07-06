var fs = require('fs');
var http = require('http');

/********** Commands Declaration **********/
var commands = {};

commands['pwd'] = function() {
	console.log(process.cwd());
};

commands['ls'] = function(args) {
    fs.readdir(args[0] || process.cwd(), function(err, entries) {
	entries.forEach(function(e) {
	    console.log(e);
	});
    });
};

commands['wget'] = function(args) {
    var url = args[0];
    var file = args[1] || 'download';

    http.get(url, function(res) {
	var writeStream = fs.createWriteStream(file);
	res.pipe(writeStream);

	res.on('end', function() {
	    console.log(url + " downloaded to file \"" + file + "\"");
	});
    });
}
//********** End Commands Declaration **********/
 
var cmdExec = function (input) {
    var matches = input.toString().match(/(\w+)(.*)/);
    // matches[0] is the origina string
    var command = matches[1].toLowerCase();
    var args = matches[2].trim().split(/\s+/);

    if (command in commands) {
	commands[command](args);
    }
    else {
	console.log("Unknown command: " + command);
    }
    process.stdout.write("> ");
}

if (process.argv.length > 2) {       
    input = process.argv.slice(2, process.argv.length).join(' ');
    cmdExec(input);
    process.stdout.write('\r');
}
else {
    process.stdout.write('> ');
    process.stdin.on('data', cmdExec);
}