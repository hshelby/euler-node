var un = require('underscore');

function nextCollatzNumber(n){
	return n % 2 === 0 ? n / 2 : 3 * n + 1;
}

function generateCollatzSequence(n){
	if (n < 1) throw "Invalid input";

	var result = [n];
	if (n != 1){
		while(n != 1){
			n = nextCollatzNumber(n);
			result.push(n);
		}
	}
	return result;
}

exports.getSolution = function(){
		return un.chain(un.range(1, 1000001))
		.map(function(num) { return { number: num, length: generateCollatzSequence(num).length };} )
		.max(function(item) { return item.length; })
		.value()
		.number;
}

exports.nextCollatzNumber = nextCollatzNumber;
exports.generateCollatzSequence = generateCollatzSequence;
