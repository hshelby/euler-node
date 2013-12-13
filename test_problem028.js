var problem28 = require('./problem028.js');

exports.testSpiralSum = function(test){
	test.expect(6);
	var one = problem28.spiralSum(1);
	test.equal(one, 1);
	var three = problem28.spiralSum(3);
	test.equal(three, 25);
	var five = problem28.spiralSum(5);
	test.equal(five, 101);
	var seven = problem28.spiralSum(7);
	test.equal(seven, 261);
	var nine = problem28.spiralSum(9);
	test.equal(nine, 537);
	var eleven = problem28.spiralSum(11);
	test.equal(eleven, 961);
	test.done();
}

