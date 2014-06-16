// Exercise 3

var fs = require('fs');

var testFileBuffer = fs.readFileSync(process.argv[2]);
var testFileString = testFileBuffer.toString();
// console.log(testFileString);

var lines = testFileString.split('\n').length - 1;

console.log(lines);