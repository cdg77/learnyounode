// Excercise 3

var fs = require('fs');

var testFileBuffer = fs.readFileSync(process.argv[2]);
// var testFileBuffer = fs.readFileSync('test.txt');
// console.log('testFileBuffer: ' + testFileBuffer);

var testString = testFileBuffer.toString();
// console.log('testString: ' + testString);

var testStringArray = testString.split('\n');

// console.log('testStringArray:' + testStringArray);
// console.log('testStringArray.length: ' + (testStringArray.length - 1));


var newLines = (testStringArray.length - 1);
console.log(newLines);