function Obj(x,y){
// postion
	this.pos = createVector(x,y);
// velocity
  this.vel = p5.Vector.random2D();
// acceleration
  this.acc = createVector();

// update every frame
  this.update = function(){
  	this.pos.add(this.vel);
    this.vel.add(this.acc);
		this.acc.mult(0);
  }


// show obj
  this.show = function(){
  	stroke(255,10);
    strokeWeight(4);
    point(this.pos.x, this.pos.y);
  }
// gravity
  this.attracted = function(target){
    // Attraction is inversely proportional to the square of the distance
    // between planet and obj
  	var force = p5.Vector.sub(target, this.pos);
    // Calculates the length of the vector, squared
    var dsquared = force.magSq();
    // normalize affect for p5
    // Constrains a value between a minimum and maximum value
    dsquared = constrain(dsquared,25,500);
    // Gravitational constant
    var G = 6.67408;

    var strength = G / dsquared;
    // keep direction but set length to what I want
    force.setMag(strength);
    // force = mass * acceleration
    // simple world with mass of 1
    this.acc.add(force);
  }
}
