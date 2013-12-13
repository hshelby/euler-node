var problem22 = require('./problem022.js');

exports.testFileRead = function(test){
	test.expect(1);
	var names = problem22.readNames('names.txt');
	test.equal(names[937], "COLIN");
	test.done();
}

exports.testAlphabeticalValue = function(test){
	test.expect(1);
	var actual = problem22.alphabeticalValue("COLIN");
	test.equal(actual, 53);
	test.done();
}
