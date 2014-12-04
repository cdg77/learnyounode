// Exercise 4

var fs = require('fs');

var testFile = process.argv[2];

var testString = fs.readFile(testFile, 'utf8', function (err, data) {
  if (err) throw err;

var testStringArray = data.split('\n');
var totalNewLines =  testStringArray.length - 1;
console.log(totalNewLines);


  // console.log(data);
});

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     var fs = require('fs')
//     var file = process.argv[2]
    
//     fs.readFile(file, function (err, contents) {
//       // fs.readFile(file, 'utf8', callback) can also be used
//       var lines = contents.toString().split('\n').length - 1
//       console.log(lines)
//     })

// ────────────────────────────────────────────────────────────────────────────────




