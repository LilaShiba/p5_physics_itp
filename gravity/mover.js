class Mover {
  constructor() {
    this.position = createVector(400, 50);
    this.velocity = createVector(1, 0);
    this.acceleration = createVector(0, 0);
    this.mass = 1;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  display() {
    stroke(0);
    strokeWeight(1);
    fill(255, 127);
    ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16);
  }
}
