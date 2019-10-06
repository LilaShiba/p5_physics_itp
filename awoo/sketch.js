var attractor;
var attractor2;
var particle;
var particles = [];


function setup() {
  createCanvas(displayWidth, displayHeight);
  attractor = createVector(displayWidth/2,displayHeight/2);
  attractor2 = createVector(50+(displayWidth/2),50+(displayHeight/2));
  // change background to draw for no trail
  background(255,244,255);
  
  for(let i = 0; i < 150; i++){
    var x = random(0,displayWidth);
    var y = random(0,displayHeight);
    particles[i] = new Particle(x,y);
    
  }
}

function draw() {
  //background(155)
  //stroke(1);
  //strokeWeight(4);
  point(attractor.x, attractor.y);
  point(attractor2.x, attractor2.y);

  for(p of particles){
    p.attracted(attractor)
    p.attracted(attractor2)
    p.update()
    p.show()

  }
}