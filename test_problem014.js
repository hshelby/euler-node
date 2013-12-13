var problem14 = require('./problem014.js');

exports.testCollatzGenerator = function(test){
	test.expect(6);
	var forty = problem14.nextCollatzNumber(13);
	test.equal(forty, 40);
	var twenty = problem14.nextCollatzNumber(40);
	test.equal(twenty, 20);
	var ten = problem14.nextCollatzNumber(20);
	test.equal(ten, 10);
	var five = problem14.nextCollatzNumber(10);
	test.equal(five, 5);
	var sixteen = problem14.nextCollatzNumber(5);
	test.equal(sixteen, 16);
	var eight = problem14.nextCollatzNumber(16);
	test.equal(eight, 8);
	test.done();
}

exports.testCollatzSequence = function(test){
	test.expect(1);
	var expected = [13,40,20,10,5,16,8,4,2,1];
	var actual = problem14.generateCollatzSequence(13);
	test.deepEqual(actual, expected);
	test.done();
}
