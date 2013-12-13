var problem12 = require('./problem012.js');

exports.testDivisors = function(test){
	test.expect(3);
	var one = problem12.divisors(1);
	test.deepEqual(one, [1]);
	var three = problem12.divisors(3);
	test.deepEqual(three, [1,3]);
	var six = problem12.divisors(6);
	test.deepEqual(six, [1,2,3,6]);
	test.done();
}
