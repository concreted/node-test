var Promise = require("promise-extended").Promise;

function asyncAction(){
    var p  = new Promise();
    process.nextTick(function(){
        p.callback(1);
    });
    return p.promise();
}

asyncAction().then(function(res){
    console.log(res); //1;
});