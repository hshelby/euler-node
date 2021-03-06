var pythagoreanTriples = [
[3, 4 ,5],
[5, 12 ,13],
[8, 15 ,17],
[7, 24 ,25],
[9, 40 ,41],
[11, 60 ,61],
[12, 35 ,37],
[13, 84 ,85],
[15, 112 ,113],
[16, 63 ,65],
[17, 144 ,145],
[19, 180 ,181],
[20, 21 ,29],
[20, 99 ,101],
[21, 220 ,221],
[24, 143 ,145],
[28, 45 ,53],
[28, 195 ,197],
[32, 255 ,257],
[33, 56 ,65],
[36, 77 ,85],
[39, 80 ,89],
[44, 117 ,125],
[48, 55 ,73],
[51, 140 ,149],
[52, 165 ,173],
[57, 176 ,185],
[60, 91 ,109],
[60, 221 ,229],
[65, 72 ,97],
[84, 187 ,205],
[85, 132 ,157],
[88, 105 ,137],
[95, 168 ,193],
[96, 247 ,265],
[104, 153 ,185],
[105, 208 ,233],
[115, 252 ,277],
[119, 120 ,169],
[120, 209 ,241],
[133, 156 ,205],
[140, 171 ,221],
[160, 231 ,281],
[161, 240 ,289],
[204, 253 ,325],
[207, 224 ,305]
];

var un = require("underscore");
var sums = un.map(pythagoreanTriples, function(array){ return un.reduce(array, function(memo, num){ return memo + num; }, 0) });

function solutionsForPerimeter(perimeterLength){
	return un.reduce(sums, function(memo, sum) { return perimeterLength % sum == 0 ? memo + 1 : memo; }, 0);
}

exports.testP120 = function(test){
	test.expect(1);
	var expected = 3;
	var actual = solutionsForPerimeter(120);
	test.equal(actual, expected);
	test.done();
}

var answer = un.chain(un.range(1,1001))
	.map(function(num) {
		return { number: num, solutions: solutionsForPerimeter(num) };
	})
	.sortBy(function(a) { return a.solutions; })
	.last()
	.value();

process.stdout.write(answer.number.toString());
