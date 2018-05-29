var cities = [];
var totalCities = 5;
var order = [];

var recordDistance;
var bestboy;

function setup() {
  createCanvas(500, 500);
  for(var i = 0; i < totalCities; i++){
    var v = createVector(random(width), random(height));
    cities[i] = v;
    orders[i] = i;

  }
  var d = calcDistance(cities);
  recordDistance = d;
  bestboy = cities.slice();
}

function draw(){
  background(0);
  fill(255);
  for(var i = 0; i < cities.length; i++){
    ellipse(cities[i].x, cities[i].y, 8, 8);

  }

  stroke(255);
  strokeWeight(2);
  noFill()
  beginShape();
  for(var i = 0; i < cities.length; i++){
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






  var i = floor(random(cities.length));
  var j = floor(random(cities.length));
  swap(cities,i,j);

  var d = calcDistance(cities);
  if (d < recordDistance){
    recordDistance = d;
    bestboy = cities.slice();
    console.log(recordDistance);
    console.log(bestboy);
  }
}

function swap(a,i,j) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function calcDistance(points){
  var sum = 0;
  for(var i = 0; i < points.length-1; i++){
    var d = dist(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
    sum += d;
  }
  return sum;
}
