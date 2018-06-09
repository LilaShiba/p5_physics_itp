var moons = [];
var gravity;

function setup(){
  createCanvas(1000,1000);
  gravity = new Gravity();
  for (var i = 0; i < 7; i++){
    var x = random(0, 400);
    var y = random(0,400);
    moons[i] = new Moon(x,y,1,10,0);
  }

}

function draw(){
  background(41);
  var moon_break = moons;
  gravity.display();
  gravity.eat(moons);



  for (m of moons){
    let force = gravity.attraction(m);
    m.applyForce(force);
    m.update();
    m.display();
    let hit = false;
    for (n of moons){
      if(m !== n && m.intersects(n)){
        hit = true;
      }
      if(hit && random(100) < 1 && moons.length < 30 || m.health > 1 && m.mass > 8){
            m.mass = 5;
            moons.push(new Moon(m.pos.x +10,m.pos.y +10, m.vel.x, m.vel.y, 5))

      }
      if (hit && random(100) < 0.5){
        m.health = m.health + 0.1;
            if(m.health > 5 && m.mass > 3 && moons.length < 255 || m.health > 2 && m.mass > 8){
                m.health = 0;
                m.mass = 5;
                moons.push(new Moon(m.pos.x +10,m.pos.y +10, m.vel.x, m.vel.y, 5));
        } else if (hit && m.mass < 0.5){
            if (m.mass > 0.01){
            m.mass =  m.mass - 1;
            }
        }
      }
    }
  }
}
