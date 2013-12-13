var fs = require('fs');
var un = require('underscore');

function readNames(filename) {
	return fs.readFileSync(filename, { encoding: 'utf8' }).replace(/"/g, '').split(",").sort();
}

function alphabeticalValue(word){
	return un.reduce(word, function(memo, string){ return memo + string.charCodeAt(0) - 64; }, 0);
}

exports.readNames = readNames;
exports.alphabeticalValue = alphabeticalValue;

exports.getSolution = function(){
	return un.reduce(readNames("names.txt"), function(memo, string, index) { return memo + alphabeticalValue(string) * (index + 1); }, 0);
}
