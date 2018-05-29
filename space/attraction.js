var attractor;
var particle;

function setup(){
  createCanvas(400,400);
  particle = new Particle(200,100);
  attractor = createVector(200,200);
  background(50);

}

function draw(){
  stroke(255);
  strokeWeight(4);
  point(attractor.x, attractor.y);

  particle.attracted(attractor);
  particle.show();
  particle.update();
}
