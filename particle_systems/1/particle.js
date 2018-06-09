function Particle(x,y,m){
  this.pos = createVector(x,y);
  this.acc = createVector();
  this.vel = createVector(0,1);
  this.mass = m;
  this.health = 1;
  this.maxspeed = 15;
  this.maxforce = 5;
  this.health = 10;

  this.update = function(){
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.applyForce = function(force){
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  this.intersects = function(other){
    let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
    if (d < 10){
      return true;
    }
  }

  this.seek = function(target){
    // vector pointing from target to you
    var desired = p5.Vector.sub(target.pos, this.pos);
    // scale speeds
    desired.setMag(this.maxspeed);
    // steering = desired vector minus velocity
    var steer = p5.Vector.sub(desired, this.vel);
    // limit how well you can steer
    steer.limit(this.maxforce);
    return steer;
  }
  this.color = function(x,y,z){
    fill(x,y,z);
  }

  this.dead = function(){
    if (this.health < 0.01){
      return true;
    }
  }



//  this.stay = function(){
//    if (this.pos.x > width)  this.pos.x = 0;
//    if (this.pos.x < 0)      this.pos.x = width;
//    if (this.pos.y > height) this.pos.y = 0;
//    if (this.pos.y < 0)      this.pos.y = height;
//
//  }

  this.show = function(){
    stroke(255,10);
    strokeWeight(4);
    ellipse(this.pos.x, this.pos.y, this.mass, this.mass);
  }

}
