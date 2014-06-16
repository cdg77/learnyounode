// console.log(process.argv);

var inputArray = process.argv.splice(2);
var newArray = [];

inputArray.forEach(function(element) {
	
	newArray.push(Number(element));

});


var totalArray = [];
var total = 0;

newArray.forEach(function(number) {
	total += number;

});

console.log(total);




