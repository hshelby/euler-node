function spiralSum(sideLength) {
	if (sideLength % 2 == 0) return 0; //Invalid case
	if (sideLength == 1) return 1;
	else return 4 * (sideLength * sideLength) - 6 * sideLength + 6 + spiralSum(sideLength - 2);
}

exports.testSpiralSum = function(test){
	test.expect(6);
	var one = spiralSum(1);
	test.equal(one, 1);
	var three = spiralSum(3);
	test.equal(three, 25);
	var five = spiralSum(5);
	test.equal(five, 101);
	var seven = spiralSum(7);
	test.equal(seven, 261);
	var nine = spiralSum(9);
	test.equal(nine, 537);
	var eleven = spiralSum(11);
	test.equal(eleven, 961);
	test.done();
}

process.stdout.write(spiralSum(1001).toString());
