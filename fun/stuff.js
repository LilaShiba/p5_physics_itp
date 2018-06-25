class Particle{
  constructor(r = 5,
              vel = createVector(0,0),
              g,
              pos = createVector(random(100,400),random(100,400))){
    this.pos = pos;
    this.r = r;
    this.vel = vel
    this.G = 6.687;
    this.acc = createVector();
    this.maxspeed = 5;
    this.maxforce = 17;
    this.health = 1;
  }
  show() {
    stroke(255,10);
    strokeWeight(4);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  hits(obj) {
    var d = dist(this.pos.x, this.pos.y, obj.pos.x, obj.pos.y);
    if(d < this.r + obj.r){
      return true;
    }
  }

  applyForce(force) {
    var f = p5.Vector.div(force, this.r);
    this.acc.add(f)
  }

  seek(thing) {
    var path = p5.Vector.sub(this.pos, thing.pos);
    path.setMag(this.maxspeed);
    var steer = p5.Vector.sub(path, this.vel);
    steer.limit(this.maxforce);
    return steer;

  }

  attraction(m) {
    // direction of force
    let force = p5.Vector.sub(this.pos, m.pos);
    // distance between objects
    let distance = force.mag();
    // limit for atypical
    distance = constrain(distance, 20, 50);
    // normalize
    force.normalize();
    // get that gravitional force
    let strength = (this.G * this.r * m.r)/(distance * distance);
    // force vector = magnitude * direction
    force.mult(strength);
    return force;
  }
}

class Planet extends Particle{

}
