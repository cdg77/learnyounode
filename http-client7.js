// Exercise 7

var http = require('http');
var fs = require('fs');

var testURL = process.argv[2];
console.log(testURL);


http.get(testURL, function(res) {
  res.setEncoding('utf8');
  res.on('data', function (data) {
    console.log('BODY: ' + data.toString());
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});

// Other solution from tutorial
 // var http = require('http')

 //    http.get(process.argv[2], function (response) {
 //      response.setEncoding('utf8');
 //      response.on('data', console.log);
 //      response.on('error', console.error);
 //    });
