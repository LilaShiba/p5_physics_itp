var particles = [];
var moon_pieces = [];
var earth;
// make particles avoid a target
// while avoiding each other
// look at repel and attract

function setup(){
  createCanvas(800,800);
  for (var i = 0; i < 12; i++){
    x = random(0,400);
    y = random(0,400);
    m = 2;
    particles[i] = new Particle(x,y,m);
  }
  for (var i = 0; i < 15; i++){
    x = random(0,400);
    y = random(0,400);
    m = 6;
    moon_pieces[i] = new Particle(x,y,m);
  }
  earth = new Gravity()
  leader = new Particle(200,400,10);
}



function draw(){
  background(0);
  earth.display();
  earth.eat(moon_pieces);
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

  for (m of moon_pieces){
    let force = earth.attraction(m);
    m.applyForce(force);
    m.show();
    m.update();
    for(mm of moon_pieces){
      if(mm != m && m.intersects(mm)){
        if(random(1) < 0.05 && m.mass > 0.01 && moon_pieces.length < 150){
          m.mass = m.mass - 0.5;
          moon_pieces.push(new Particle(m.pos.x, m.pos.y ,m.mass));
        }
      }
    }
  }
}
