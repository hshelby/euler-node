var problem17 = require('./problem017.js');

exports.testNumberToName = function(test){
	test.expect(2);
	var threeFortyTwo = problem17.numberToName(342);
	test.equal(threeFortyTwo, "three hundred and forty-two");
	var oneFifteen = problem17.numberToName(115);
	test.equal(oneFifteen, "one hundred and fifteen");
	test.done();
}

exports.testNumberNameLength = function(test){
	test.expect(3);
	test.equal(problem17.numberNameLength(342), 23);
	test.equal(problem17.numberNameLength(115), 20);
	test.equal(problem17.numberNameLength(1000), 11, problem17.numberToName(1000));
	test.done();
}

exports.testSampleOutput = function(test){
	test.expect(1);
	var letterCount = problem17.lettersInRange(5);
	test.equal(letterCount, 19);
	test.done();
}
