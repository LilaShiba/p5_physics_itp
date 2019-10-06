function Particle(x,y) {
  
  // give place in space
  this.pos = createVector(x,y);
  this.vel = p5.Vector.random2D()
  this.acc = createVector(0,0);
  this.mass = random(2,10);
  
  
  // basic physics engine
  // Euler
  this.update = function(){
    // add vel to postion
    this.pos.add(this.vel);
    // add acc to vel
    this.vel.add(this.acc);
    //this.acc.mult(0)
    
  
  }
  
  // show on screen
  this.show = function(){
    // draw me
    fill(255,255,255,20)
    stroke(0);
    strokeWeight(1);
    // update with current pos vector
    //point(this.pos.x, this.pos.y)
    ellipse(this.pos.x, this.pos.y, this.mass,this.mass)
  }
  
  
  // attraction force
  this.attracted = function(target){
    // target - this.pos
    var force = p5.Vector.sub(target, this.pos);
    // distance squared in gravity formula
    var dsquare = force.magSq();
    // constrain the force
    dsquare = constrain(dsquare,0,200);
    var G = 6.67408;
    // strength of gravity changes based on distance
    var strength = G / dsquare;
    // keeps direction of vector but sets length to given argument
    force.setMag(strength);
    this.acc = force
    
  }
}