var un = require('underscore');

function divisors(number){
	var results = un.filter(un.range(1, Math.floor(number / 2) + 2), function(div){
		return number % div === 0;
	});
	return un.union(results, new Array(1, number));
}

exports.divisors = divisors;

exports.getSolution = function(){
	var index = 400000;
	var divisorCount = 0;
	do{
		divisorCount = divisors(index).length + divisors(index + 1).length + 1;
		if(index % 1000 == 0) console.log("Tested " + index.toString() + ": " + divisorCount);
		index++;
	}while(divisorCount < 501);

	console.log(divisorCount);
	console.log(index * (index + 1) / 2);
}

