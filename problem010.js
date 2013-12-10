var _und = require('underscore');

function buildSieve(max){
	var sieve = _und.range(max + 1);

	var squareLimit = Math.floor(Math.sqrt(max));

	_und.each(sieve, function(element, index, list){
		if (index > 2 && !(index % 2)){
			list[index] = 0;
		}
	});

	for (var i = 3; i <= squareLimit; i += 2){
		if (sieve[i] != 0){
			for (var j = i*i; j <= max; j += 2*i){
				sieve[j] = 0
			}
		}
	}
	return sieve;
}
var target = 2000000;
var sieve = buildSieve(target);
var sum = _und.reduce(sieve, function(memo, value, index){
	return index > 1 ? memo + value : memo;
}, 0);

console.log(sum.toString());
