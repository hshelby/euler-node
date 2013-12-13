function spiralSum(sideLength) {
	if (sideLength % 2 == 0) return 0; //Invalid case
	if (sideLength == 1) return 1;
	else return 4 * (sideLength * sideLength) - 6 * sideLength + 6 + spiralSum(sideLength - 2);
}

exports.spiralSum = spiralSum;

exports.getSolution = function(){
	return spiralSum(1001);
}

