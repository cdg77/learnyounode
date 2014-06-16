var dir = process.argv[2];
var fileType = process.argv[3];

var filterFiles = require('./filter-module');

filterFiles(dir, fileType, function(err, files) {
	files.forEach(function(file) {
		console.log(file);
	});
});