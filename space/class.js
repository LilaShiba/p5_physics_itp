let bubbles = [];
let bubble;
var count = 0;

function mousePressed() {
	  for ( let i = 0; i < bubbles.length; i++){
  	bubbles[i].clicked(mouseX, mouseY);
  }
}


function setup() {
  createCanvas(600, 400);
  for (i = 0; i < 5; i++){
		let x = random(width);
  	let y = random(height);
  	let r = random(10,50);
  	let b = new Bubble(x, y, r);
  	bubbles.push(b);
  }
}


function draw() {
  background(0);
  for ( let i = 0; i < bubbles.length; i++){
  	bubbles[i].move();
    bubbles[i].show();
  }
}



// bubble class
class Bubble {

	constructor(x,y,r){
  	this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  clicked(px, py){
  	let d = dist(px, py, this.x, this.y);
    if (d < this.r){
      count = count + 1;
  		console.log(count);
      this.brightness = this.brightness + 50;
    }
  }

  move() {
  	this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
}
