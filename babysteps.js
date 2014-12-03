// console.log(process.argv);

// console.log('sliced argv: ' + process.argv.slice(2));

var inputArray = process.argv.slice(2);
var total = [];


// console.log('inputArray: ' + inputArray);

// console.log(+inputArray[0] + (+inputArray[1]) + (+inputArray[2]));

// console.log('total: ' + total);

for (i=0; i<inputArray.length; i++) {
	total = Number(inputArray[i]) + (+total);
	// console.log('total inside: ' + total);
}
console.log(total);

// *******************************************************
// Official Results :

// var result = 0
    
//     for (var i = 2; i < process.argv.length; i++)
//       result += Number(process.argv[i])
    
//     console.log(result)