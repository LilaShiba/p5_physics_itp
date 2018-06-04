var ship;
var target = [];

function setup(){
  createCanvas(400,400);
  ship = new Ship(width / 2, height / 2);

  for (var i = 0; i < 10; i++){
    var x = random(width);
    var y = random(height);
    target.push(createVector(x,y));
  }
}


function draw(){
  background(51);
  for (var i = 0; i < target.length; i++){
    fill(0,0,255);
    noStroke();
    ellipse(target[i].x, target[i].y, 8, 8);
  }
  ship.eat(target);
  ship.update();
  ship.display();

}
