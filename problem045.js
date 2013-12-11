var un = require('underscore');

function triangle(n){
	return n * (n + 1) / 2;
}

function pentagon(n){
	return n * (3 * n - 1) / 2;
}

function hexagon(n){
	return n * (2 * n - 1);
}

exports.testTriangle = function(test){
	var expected = [1,3,6,10,15];
	var actual = un.map(un.range(1,6), triangle);
	test.expect(1);
	test.deepEqual(actual, expected);
	test.done();
}

exports.testPentagon = function(test){
	var expected = [1,5,12,22,35];
	var actual = un.map(un.range(1,6), pentagon);
	test.expect(1);
	test.deepEqual(actual, expected);
	test.done();
}

exports.testHexagon = function(test){
	var expected = [1,6,15,28,45];
	var actual = un.map(un.range(1,6), hexagon);
	test.expect(1);
	test.deepEqual(actual, expected);
	test.done();
}
var test = 90001;
var startT = new Date().getTime();
var triangles = un.map(un.range(1,test), triangle);
var endT = new Date().getTime();
process.stdout.write("Generated triangles: " + (endT - startT).toString() + " ms\n");
var startP = new Date().getTime();
var pentagons = un.map(un.range(1, test), pentagon);
var endP = new Date().getTime();
process.stdout.write("Generated pentagons: " + (endP - startP).toString() + " ms\n");
var startH = new Date().getTime();
var hexagons = un.map(un.range(1,test), hexagon);
var endH = new Date().getTime();
process.stdout.write("Generated hexagons: " + (endH - startH).toString() + " ms\n");

var startI = new Date().getTime();
var answer = un.chain(triangles)
	.intersection(pentagons, hexagons)
	//.find(function(num){ return num > 40755; })
	.value();
var endI = new Date().getTime();
process.stdout.write("Generated intersection: " + (endI - startI).toString() + " ms\n");
process.stdout.write(answer.toString());
