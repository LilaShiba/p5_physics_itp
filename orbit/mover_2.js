function Mover(){
  this.position = createVector(random(200, 400),random(0,50));
  this.velocity = createVector(1,0);
  this.acceleration = createVector(0,0);
  this.mass = 1;
  this.history = [];

  this.applyForce = function(force){
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  this.update = function(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    this.history
  }

  this.display = function(){
    stroke(255,10);
    strokeWeight(4);
    fill(255,155);
    ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16);
  }
}
