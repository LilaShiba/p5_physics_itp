// steering force = desired - vel

var vehicle;
var food = [];
var poison = [];

function setup() {
  createCanvas(640, 360);
  vehicle = new Vehicle(width / 2, height / 2);
  // make random food
  for (var i = 0; i < 10; i++){
    var x = random(width);
    var y = random(height);
    food.push(createVector(x,y));
  }
  // make random poison
  for (var i = 0; i < 10; i++){
    var x = random(width);
    var y = random(height);
    poison.push(createVector(x,y));
  }
}

function draw() {
  background(51);
  // Draw food
  for (var i = 0; i < food.length; i++){
    fill(0,255,0,5);
    noStroke();
    ellipse(food[i].x,food[i].y,8,8);
  }
  // Draw poison
  for (var i = 0; i < poison.length; i++){
    fill(255,0,0);
    noStroke();
    ellipse(poison[i].x,poison[i].y,8,8);
  }
  // Call the appropriate steering behaviors for our agents
  vehicle.eat(food);
  vehicle.eat(poison);
  vehicle.update();
  vehicle.display();
}
