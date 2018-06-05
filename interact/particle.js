function Obj(x,y){
	var new_moon = [];

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
  }


// show obj
  this.show = function(){
  	//stroke(255,5);
    //strokeWeight(4);
    ellipse(this.pos.x, this.pos.y,8,8);
		for (var i = 0; i < new_moon.length; i++){
			fill(255,0,0);
			ellipse(new_moon[i].x, new_moon[i].y, 10, 10);
		}
  }
// gravity
  this.attracted = function(target){
    // Attraction is inversely proportional to the square of the distance
    //distance between planet and obj
  	var force = p5.Vector.sub(target, this.pos);
    // Calculates the length of the vector, squared
    var dsquared = force.magSq();
    // normalize affect for p5
    // Constrains a value between a minimum and maximum value
    dsquared = constrain(dsquared,25,1000);
    // Gravitational constant
    var G = 6.67408;

    var strength = G / dsquared;
    // keep direction but set length to what I want
    force.setMag(strength);
    // force = mass * acceleration
    // simple world with mass of 1
    this.acc = force;
  }
	this.hit = function(moon, target){
 		var hits = 0;
		for (var i = 0; i < moon.length; i++){
			var d = moon[i].pos.dist(target);
			if (d < 20){
				moon.splice(i ,1);
				//var hit = 100 - moon.length;
				 hits = hits + 1;
				console.log(hits);
			}
		}
	}
	 this.collide = function(moon){
	  for (var i = 0; i < moon.length; i++){
	    for (var j = 0; j < moon.length; j++){
	      var k = moon[i].pos.dist(moon[j].pos);
	      if (k < 15){
	        new_moon.push(new Obj(moon[i].x+1, moon[i].y+1));
	      }
	    }
	  }
	}
}
