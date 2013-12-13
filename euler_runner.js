if (process.argv.length < 3){
	console.log("usage: node euler_runner.js <problem number>");
	process.exit();
}

var problemNumber = process.argv[2];
var moduleName = "./problem" + stringRepeat('0', 3 - problemNumber.length) + problemNumber;

var problem = require(moduleName);
var start = new Date().getTime();
var result = problem.getSolution();
var end = new Date().getTime();

console.log("Answer to problem " + problemNumber);
console.log(result);
console.log("Solution took " + (end - start) + " ms");

function stringRepeat(string, times) {
    var s = '';
    for (;;) {
        if (times & 1) s += string;
        times >>= 1;
        if (times) string += string;
        else break;
    }
    return s;
}
