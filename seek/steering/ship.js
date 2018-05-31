class Vehicle {
  constructor(x,y){
    this.accleration = createVector(0,0);
    this.velocity = createVector(0,0);
    this.position = createVector(x,y);
    this.r = 6;
    this.maxspeed = 8;
    this.maxforce = 0.1;
  }

  update(){
    this.velocity.add(this.accleration);
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    // reset each cycle
    this.accleration.mult(0);
  }
  applyForce(force){
    // Newton's second law
    this.accleration.add(force);
  }
  seek(target){
    // A vector pointing from the location to the target
    var desired = p5.Vector.sub(target, this.position);
    // Scale to maximum speed
    var d = desired.mag();

    // Scale with arbitrary damping within 100 pixels
    if (d < 100) {
      var m = map(d, 0, 100, 0, this.maxspeed);
      desired.setMag(m);
    } else {
      desired.setMag(this.maxspeed);
    }
    // steering = desired - velocity
    var steer = p5.Vector.sub(desired, this.velocity);
    // Limit to max force
    steer.limit(this.maxforce);
    // applying the force to the object
    this.applyForce(steer);
  }


  display() {
  // Draw a triangle rotated in the direction of velocity
  var theta = this.velocity.heading() + PI / 2;
  fill(127);
  stroke(200);
  strokeWeight(1);
  push();
  translate(this.position.x, this.position.y);
  rotate(theta);
  beginShape();
  vertex(0, -this.r * 2);
  vertex(-this.r, this.r * 2);
  vertex(this.r, this.r * 2);
  endShape(CLOSE);
  pop();
  }
}
