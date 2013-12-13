function sumDivisibleBy(target, divisor){
	var adjustedTarget = Math.floor(target / divisor);
	return Math.floor(divisor * adjustedTarget * (adjustedTarget + 1) / 2);
}

exports.getSolution = function(){
	return sumDivisibleBy(999, 3) + sumDivisibleBy(999,5) - sumDivisibleBy(999,15);
}
