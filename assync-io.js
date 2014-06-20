var fs = require('fs');

var testFile = process.argv[2];

fs.readFile(testFile, function(err, data) {
	if (err) throw err;

	var testFileString = data.toString();
	var lines = testFileString.split('\n').length - 1 ;
	console.log(lines);
});

//* Official Solution
// var fs = require('fs');
//     var file = process.argv[2];
    
//     fs.readFile(file, function (err, contents) {
//       // fs.readFile(file, 'utf8', callback) can also be used
//       var lines = contents.toString().split('\n').length - 1;
//       console.log(lines);
//     });


