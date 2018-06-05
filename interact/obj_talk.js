let bubbles = [];

function setup() {
  createCanvas(500, 500);
  // make 10 bubbles
  for (let i = 0; i < 5; i++){
    let x = random(width);
    let y = random(height);
    let r = random(10,10);
  	bubbles[i] = new Bubble(x, y, r);
  }
}


function draw() {
  background(0);
	// show & move all bubbles
  for (b of bubbles) {
		b.show();
  	b.move();
    let overlapping = false;
    for (other of bubbles) {
    	if (b !== other && b.intersects(other)) {
        overlapping = true;
      }
      if (b.hit(other)){
        b.changeColor(255);
        if (overlapping && bubbles.length < 200){
          let strength = random(0,100);
          if (strength > 95){
            bubbles.push(new Bubble(other.x+10,other.y+10 , 8));
          }
        }
      }else{
      b.changeColor(0);
      }
    }
  }
}



// bubble class
class Bubble {
										// es6 default if you forget to pass in arg
	constructor(x,y,r = 50){
  	this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;

  }


  intersects(other){
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.r + other.r);
  }

    changeColor(bright) {
  	this.brightness = bright;
  }

// basic movement
  move() {
  	this.x = this.x + random(-15,15);
    this.y = this.y + random(-15,15);
  }

  contains(px,py){
  	let d = dist(px, py, this.x, this.y);
  	if (d < this.r){
    	return true;
    } else {
      return false;
    }
  }

  hit(other){
    let d = dist(this.x, this.y, other.x ,other.y);
    if (d < this.r){
      return true;
    }else{
      return false;
    }
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
}
