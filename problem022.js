var fs = require('fs');
var un = require('underscore');

function readNames(filename) {
	return fs.readFileSync(filename, { encoding: 'utf8' }).replace(/"/g, '').split(",").sort();
}

function alphabeticalValue(word){
	return un.reduce(word, function(memo, string){ return memo + string.charCodeAt(0) - 64; }, 0);
}

exports.testFileRead = function(test){
	test.expect(1);
	var names = readNames('names.txt');
	test.equal(names[937], "COLIN");
	test.done();
}

exports.testAlphabeticalValue = function(test){
	test.expect(1);
	var actual = alphabeticalValue("COLIN");
	test.equal(actual, 53);
	test.done();
}

var answer = un.reduce(readNames("names.txt"), function(memo, string, index) { return memo + alphabeticalValue(string) * (index + 1); }, 0);

process.stdout.write(answer.toString());
