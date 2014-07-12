var fs = require('fs');
var http = require('http');

var templateEngine = function(template, data) {
    var vars = template.match(/\{\w+\}/g);
    
    if (!vars) {
	console.log("no matches");
	return template;
    }

    var nonVars = template.split(/\{\w+\}/g);
    var output = '';

    for (var i = 0; i < nonVars.length; i++) {
	output += nonVars[i];

	if (i < vars.length) {
	    var key = vars[i].replace(/[\{\}]/g, '');
	    output += data[key];
	}
    }

    return output;
};

var server = http.createServer(function(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    var path = req.url === '/' ? '' : req.url.substring(1, req.url.length) + '/';
    //console.log(path);
    fs.readFile(path + 'index.html', function(err, data) {
	if (!err) {
	    res.write(templateEngine(data.toString(), {
		name: 'William Riker',
		node: process.versions.node,
		v8: process.versions.v8,
		time: new Date(),
		url: req.url,
	    }));
	    //res.end();
	}
	else {
	    res.write("404 - Page not found");
	}
	res.end();
    });
});

server.listen(3000);