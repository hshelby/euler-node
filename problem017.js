var numberNames = [
	'zero',
	'one',
	'two',
	'three',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine',
	'ten',
	'eleven',
	'twelve',
	'thirteen',
	'fourteen',
	'fifteen',
	'sixteen',
	'seventeen',
	'eighteen',
	'nineteen'
]

var decadeNames = [
	'twenty',
	'thirty',
	'forty',
	'fifty',
	'sixty',
	'seventy',
	'eighty',
	'ninety'
]

function numberToName(number){
	var name = "";
	var thousands = Math.floor(number / 1000);
	if (thousands > 0){
		name = numberNames[thousands] + " thousand" ;
	}
	var hundreds = Math.floor(number / 100) % 10;
	if (hundreds > 0){
		name = name + numberNames[hundreds] + " hundred";
	}
	if (number % 100 > 0 && name.length > 0) name += " and";
	var tens = Math.floor(number / 10) % 10;
	var units = number % 10;
	if (tens > 1){
		name = name + " " + decadeNames[tens - 2];
		if (units > 0){
			name += "-" + numberNames[units];
		}
	}
	else if (tens > 0){
		var remainder = number % 100;
		name += " " + numberNames[remainder];
	}
	else if (units > 0){
		name += numberNames[units];
	}
	return name;
}

function numberNameLength(number){
	return numberToName(number).replace(/[- ]/g, "").length;
}

function lettersInRange(max){
	var un = require('underscore');
	var range = un.range(1, max + 1);
	return un.reduce(range, function(memo, num){ return memo + numberNameLength(num); }, 0);
}

exports.numberToName = numberToName;
exports.numberNameLength = numberNameLength;
exports.lettersInRange = lettersInRange;

exports.getSolution = function(){
	return lettersInRange(1000);
}
