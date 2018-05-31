var vechicles = [];
var food = [];
var poison = [];

function setup(){
  createCanvas(640,360);
  // create vechicles
  for (i = 0; i < 10; i++){
    x = random(width);
    y = random(height);
    vechicles[i] = new Vehicle(x,y);
  }
  // create food
  for (i = 0; i < 50; i++){
    x = random(width);
    y = random(height);
    food.push(createVector(x,y));
  }
  // create poison
  for (i = 0; i < 50; i++){
    x = random(width);
    y = random(height);
    poison.push(createVector(x,y));
  }
}

function draw(){
  background(51);
  // draw food
  for (var i = 0; i < food.length; i++){
    fill(0 ,255 ,0);
    noStroke();
    ellipse(food[i].x, food[i].y, 8,8);
  }
  // draw poison
  for (var i = 0; i < poison.length; i++){
    fill(255,0,0);
    noStroke();
    ellipse(poison[i].x, poison[i].y, 8, 8);
  }

  // do work little ships
  for (var i = 0; i < vechicles.length; i++){
    vechicles[i].behaviors(food, poison);
    vechicles[i].update();
    vechicles[i].display();
  }
}
