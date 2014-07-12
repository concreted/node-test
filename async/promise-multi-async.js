var p = require("promise-extended"),
Promise = p.Promise;

var asyncWait = function(timeout){
    var ret = new Promise();
    setTimeout(function(){
        ret.callback(timeout);
    }, timeout);
    return ret.promise();
}


//use the when method to wait for all of the passed in promises to resolve.
p.when(
    asyncWait(1000),
    asyncWait(900),
    asyncWait(800),
    asyncWait(700),
    asyncWait(600),
    asyncWait(500)
).then(function(res){
    console.log(res); //[1000,900,800,700,600,500];
});