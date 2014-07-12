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
    .then(function(currCount){
        console.log(currCount); //1

        //we return a promise from in here which will cause then to wait for this one to resolve.
        return asyncCount();
    })
    .then(function(currCount){
        console.log(currCount); //2

        //returning another promise!
        return asyncCount();
    })
    .then(function(count){
        //now we have the result from the last asyncCount call which is 3
        console.log(count); //3
    });