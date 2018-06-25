var stuff = [];
var borker;

function setup(){
  createCanvas(windowWidth, windowHeight);
  for(var i = 0; i < 120; i++){
    stuff[i] = new Particle(5, createVector(0,2));
  }
    borker = new Particle(30,createVector(0,0),20, createVector(width/2, height/2));
    meower = new Particle(30,createVector(0,0),20, createVector(width/2, height/2.5))
}

function draw(){
  background(0);
  for(x of stuff){
    let force = borker.attraction(x);
    let mforce = meower.attraction(x);
    x.show();
    x.update();
    x.applyForce(force);
    x.applyForce(mforce);
  }
  borker.show();
  borker.update();
  meower.show();
  meower.update();
}
