var _ = require('underscore');

var listOfNumbers = [1,5,4,3,7,6];

var sortedList = _.sortBy(listOfNumbers, function (n) { return n; });

console.log(sortedList);