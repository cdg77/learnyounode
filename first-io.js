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


// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     var fs = require('fs')
    
//     var contents = fs.readFileSync(process.argv[2])
//     var lines = contents.toString().split('\n').length - 1
//     console.log(lines)
    
//     // note you can avoid the .toString() by passing 'utf8' as the
//     // second argument to readFileSync, then you'll get a String!
//     //
//     // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

// ────────────────────────────────────────────────────────────────────────────────