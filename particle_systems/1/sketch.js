var particles = [];
var earth;
// make particles avoid a target
// while avoiding each other
// look at repel and attract

function setup(){
  createCanvas(800,800);
  for (var i = 0; i < 20; i++){
    x = random(0,400);
    y = random(0,400);
    m = 6;
    particles[i] = new Particle(x,y,m);
  }
  earth = new Gravity()
  leader = new Particle(200,400,10);
}



function draw(){
  background(0);
  earth.display();
  earth.eat(particles);
  let f = earth.attraction(leader);
  leader.show();
  leader.update();
  leader.applyForce(f);
  for (p of particles){
    let force = earth.attraction(p);
    let get_me = p.seek(leader);
    p.applyForce(force);
    p.applyForce(get_me);
    p.show();
    p.update();
    p.seek(leader);
    if(p.intersects(leader)){
      p.pos.x += 4;
      p.pos.y += 3;
    }
  }
}
