function sumDivisibleBy(target, divisor){
	var adjustedTarget = Math.floor(target / divisor);
	return Math.floor(divisor * adjustedTarget * (adjustedTarget + 1) / 2);
}

var answer = sumDivisibleBy(999, 3) + sumDivisibleBy(999,5) - sumDivisibleBy(999,15);
process.stdout.write(answer.toString());
