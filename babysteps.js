// console.log(process.argv);

// console.log(+process.argv[2]);

var inputArray = process.argv;
var newArray = [];

console.log('inputArray: ' + inputArray);

for (i=2; i<inputArray.length; i++) {
	newArray = Number(inputArray[i]) + Number(inputArray[i]);
	console.log('newArray inside: ' + newArray);
}
console.log('newArray outside: ' + newArray);

