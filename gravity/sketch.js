let mover;
let attractor;

function setup() {
  createCanvas(500, 500);
  mover = new Mover();
  attractor = new Attractor();
}

function draw() {
  background(51);
  let force = attractor.calculateAttraction(mover);
  mover.applyForce(force);
  mover.update();
  attractor.display();
  mover.display();
}
