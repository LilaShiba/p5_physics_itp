var cities = [];
var totalCities = 15;
var recordDistance;
var bestboy;

function setup(WEBGL) {
  createCanvas(400, 400);
  // populate cities with vertexs
  for ( i = 0; i < totalCities; i++){
    var v = createVector(random(width), random(height));
    cities[i] = v;
  }
  var d = get_distance(cities);
  recordDistance = d;
  bestboy = cities.slice()
}

function draw() {
  background(0);
  // create dots by cycling through vertexs of cities
  for (i = 0; i < cities.length; i++){
   ellipse(cities[i].x, cities[i].y, 8, 8);
  }

  // connect dots
  stroke(255);
  strokeWeight(2);
	noFill();
  beginShape();
  for(var i = 0; i <cities.length; i++){
  	vertex(cities[i].x, cities[i].y);
  }
  endShape();

  stroke(255, 0 , 255);
  strokeWeight(4);
  noFill()
  beginShape();
  for(var i = 0; i < cities.length; i++){
    vertex(bestboy[i].x, bestboy[i].y);
  }
  endShape();

  // test different paths
  var i = floor(random(cities.length));
  var j = floor(random(cities.length));
  swap(cities,i,j);

  var d = get_distance(cities);
	if (d < recordDistance){
	recordDistance = d;
  bestboy = cities.slice();
  console.log(bestboy);
  console.log(recordDistance);
	}
}

function swap(a,i,j){
  	var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }

function get_distance(points){
	var sum = 0;
  for(var i = 0; i < points.length-1; i++){
  	var d = dist(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
    sum += d
  }
	return sum
}
