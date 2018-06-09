function Gravity(){
  //start in CENTER
  this.pos = createVector(width/2, height/2);
  this.mass = 20;
  this.G = 6.687;

  this.attraction = function(m){
    // direction of force
    let force = p5.Vector.sub(this.pos, m.pos);
    // distance between objects
    let distance = force.mag();
    // limit for atypical
    distance = constrain(distance, 5, 40);
    // normalize
    force.normalize();
    // get that gravitional force
    let strength = (this.G * this.mass * m.mass)/(distance * distance);
    // force vector = magnitude * direction
    force.mult(strength);
    return force;
  }

  this.eat = function(object){
    for (var i = 0; i < object.length; i++){
      var d = this.pos.dist(object[i].pos);
      if (d < 20){
        object.splice(i ,1);
        return true;
      }
    }
  }
  this.display = function(){
    ellipseMode(CENTER);
    strokeWeight(255);
    stroke(1);
    // make planet 2x larger than orbit body
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.mass *2, this.mass * 2);
  }
}
