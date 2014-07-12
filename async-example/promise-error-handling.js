var Promise = require("promise-extended").Promise;

var asyncCount = (function(){
    var currentCount = 0;
    return function(){
        var p  = new Promise();
        process.nextTick(function(){
            p.callback(++currentCount);
        });
        return p.promise();
    }
}());

asyncCount()
    .then(function(count){
        console.log(count); //1
        return asyncCount();
    })
    .then(function(){
        throw new Error("Oops an error occurred");
    })
    .then(function(){
	return asyncCount();
    })
    .then(function(res){/*wont be called*/}, function (err){
        console.log(err.message); //Oops an error occurred ...
    })