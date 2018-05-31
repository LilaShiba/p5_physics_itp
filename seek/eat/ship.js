function Vehicle(x,y) {
    this.accleration = createVector(0,0);
    this.velocity = createVector(0,0);
    this.position = createVector(x,y);
    this.r = 6;
    this.maxspeed = 5;
    this.maxforce = 0.4;
    // dna to learn from
    this.health = 1;
    this.dna = [];
    this.dna[0] = random(-5,5);
    this.dna[1] = random(-5,5);


  this.update = function(){
    this.health -= 0
    this.velocity.add(this.accleration);
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    // reset each cycle
    this.accleration.mult(0);
  }

  this.applyForce = function(force){
    // Newton's second law
    this.accleration.add(force);
  }

  this.behaviors = function(good, bad){
    var steerG = this.eat(good, 0.1);
    var steerR = this.eat(bad, -0.5);
    steerG.mult(this.dna[0]);
    steerR.mult(this.dna[1]);
    this.applyForce(steerG);
    this.applyForce(steerR);
  }

  this.eat = function(list, nutrition){
    var record = Infinity;
    var closest = -1;
    for (var i = 0; i < list.length; i++){
      var d = this.position.dist(list[i]);
      if (d < record){
        record = d;
        closest = i;
      }
    }
    // time to eat
    if(record < 5){
      list.splice(closest, 1);
      this.health += nutrition;
    } else if (closest > -1){
      return this.seek(list[closest]);
    }
    return createVector(0,0);
  }

  this.seek = function(target){
    // A vector pointing from the location to the target
    var desired = p5.Vector.sub(target, this.position);
    // Scale to maximum speed
    var d = desired.mag(this.maxspeed);


    // steering = desired - velocity
    var steer = p5.Vector.sub(desired, this.velocity);
    // Limit to max force
    steer.limit(this.maxforce);
    // applying the force to the object
    this.applyForce(steer);
    return steer;
  }


  this.display = function() {
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
