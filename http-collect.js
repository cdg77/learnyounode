var fs = require('fs');
var http = require('http');
var concat = require('concat-stream');

var url = process.argv[2];

console.log(url);

http.get(url, function(stream) {
	stream.setEncoding('utf8');

	stream.pipe("data", function (data) {

		var write = concat(function(data) {
		console.log(data.toString());

		});
		stream.pipe(write);
	});


});

