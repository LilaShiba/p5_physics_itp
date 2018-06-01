function Gravity(){
  //start in CENTER
  this.position = createVector(width/2, height/2);
  this.mass = 10;
  this.G = 1;

  this.attraction = function(m){
    // direction of force
    let force = p5.Vector.sub(this.position, m.position);
    // distance between objects
    let distance = force.mag();
    // limit for atypical
    distance = constrain(distance, 5, 50);
    // normalize
    force.normalize();
    // get that gravitional force
    let strength = (this.G * this.mass * m.mass)/(distance * distance);
    // force vector = magnitude * direction
    force.mult(strength);
    return force;
  }
  this.display = function(){
    ellipseMode(CENTER);
    strokeWeight(0);
    stroke(0);
    // make planet 2x larger than orbit body
    fill(41);
    ellipse(this.position.x, this.position.y, this.mass *2, this.mass * 2);
  }
}
