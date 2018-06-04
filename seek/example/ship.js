
function Ship(x,y){
  this.acceleration = createVector(0, 0);
  this.velocity = createVector(0,-2);
  this.position = createVector(x, y);
  this.r = 6;
  this.maxspeed = 5;
  this.maxforce = 0.5;
  this.health = 1;


  this.update = function(){
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  this.applyForce = function(force){
    this.acceleration.add(force);
  }

  this.eat = function(list){
    var record = Infinity;
    var closest = -1;
    for (var i = 0; i < list.length; i++){
      var d = this.position.dist(list[i]);
      if (d < record ){
        var record = d;
        var closest = i;
      }
    }
    if(record < 5){
      list.splice(closest, 1);
    } else if (closest > -1) {
        this.seek(list[closest]);
      }
      return createVector(0,0);
    }

  this.seek = function(target){
    var dist = p5.Vector.sub(target, this.position);
    dist.setMag(this.maxspeed);
    var steer = p5.Vector.sub(dist, this.velocity);
    steer.limit(this.maxforce);
    this.applyForce(steer);

  }

  this.display = function() {
      // Draw a triangle rotated in the direction of velocity
      var angle = this.velocity.heading() + PI / 2;

      push();
      translate(this.position.x, this.position.y);
      rotate(angle);
      fill(255,255,255,75);
      stroke(2);
      strokeWeight(1);
      beginShape();
      vertex(0, -this.r * 2);
      vertex(-this.r, this.r * 2);
      vertex(this.r, this.r * 2);
      endShape(CLOSE);
      pop();
    }
  }
