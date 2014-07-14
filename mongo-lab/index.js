var mongodb = require('mongodb');
var Db = mongodb.Db;
var Server = mongodb.Server;

var config = require("./config.json").connection;

var server = new Server(config.host, config.port);
var db = new Db(config.dbName, server, {safe:true});

var insert = function (callback) {
    // get our users data
    var users = require("./data/users.json");

    // get the "nodelabs-users collection"
    db.collection("nodelabs-users", function (err, collection) {
	if (err) return callback(err);

    // insert the users
	collection.insert(users, callback);
    });
}

var remove = function (callback) {
    db.collection("nodelabs-users", function (err, collection) {
	if (err) return callback(err);
	collection.remove(callback);
    });
};

var reset = function (callback) {
    remove(function (err) {
	if (err) return callback(err);
	insert(callback);
    });
};

var count = function (callback) {
    db.collection("nodelabs-users", function (err, collection) {
	if (err) return callback(err);
	collection.count(callback);
    });
};

db.open(function (err) {

    var getCountByFirstName = (function getCountByFirstName() {
	var map = function () {
            emit(this.firstName.charAt(0), 1);
	};

	var reduce = function (key, values) {
            return values.length;
	};

	return function _getCountByFirstName (cb) {
            db.collection("nodelabs-users", function getUsersCollection (err, collection) {
		if(err) throw err;
		collection.mapReduce(map.toString(), reduce.toString(), {out:{inline:1}}, cb);
            });
	};
    }());

    getCountByFirstName(function (error, results) {
	console.log(JSON.stringify(results, null, 4));
	db.close();
    });
});