function Moon(x,y,v,z,u){
  this.pos = createVector(x,y);
  this.vel = createVector(v,0);
  this.acc = createVector(0,0);
  this.mass = z;
  this.health = 0;

  this.applyForce = function(force){
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  this.update = function(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.intersects = function(other){
    let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
    return (d < 16);
  }



  this.display = function(){
    stroke(255,10);
    strokeWeight(4);
    fill(255,155);
    ellipse(this.pos.x, this.pos.y, this.mass, this.mass);
  }
}
