var moon = [];
var gravity;

function setup(){
  createCanvas(800,800);
  gravity = new Gravity();
  for (var i = 0; i < 100; i++){
    moon[i] = new Mover();
  }

}

function draw(){
  background(41);
  for (var i = 0; i < moon.length; i++){
    let force = gravity.attraction(moon[i]);
    moon[i].applyForce(force);
    moon[i].update();
    gravity.display();
    moon[i].display();
  }
}
