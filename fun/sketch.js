var stuff = [];
var borker;

function setup(){
  createCanvas(500, 500);
  for(var i = 0; i < 20; i++){
    stuff[i] = new Particle(5, createVector(0,2));
  }
    borker = new Particle(30,createVector(0,0),20, createVector(width/2, height/2));
}

function draw(){
  background(0);
  for(x of stuff){
    let force = borker.attraction(x);
    x.show();
    x.update();
    x.applyForce(force);
  }
  borker.show();
  borker.update();
}
