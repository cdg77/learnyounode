var fs = require('fs');
var http = require('http');

var url = process.argv[2];

// console.log(url);

http.get(url, function(stream) {
		stream.setEncoding('utf8');
		stream.on("data", function (data) {
			console.log(data.toString());
		});

});

// Other solution from tutorial
 // var http = require('http')
    
 //    http.get(process.argv[2], function (response) {
 //      response.setEncoding('utf8');
 //      response.on('data', console.log);
 //      response.on('error', console.error);
 //    });
