var moons = [];
var gravity;

function setup(){
  createCanvas(1000,1000);
  gravity = new Gravity();
  for (var i = 0; i < 7; i++){
    var x = random(200, 400);
    var y = random(0,50);
    moons[i] = new Moon(x,y,1,10,0);
  }

}

function draw(){
  background(41);
  // for (var i = 0; i < moons.length; i++){
  //   let force = gravity.attraction(moons[i]);
  //   moons[i].applyForce(force);
  //   moons[i].update();
  //   gravity.display();
  //   moons[i].display();
  // }
  var moon_break = moons;
    gravity.display();
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
      if(hit && random(100) < 1 && moons.length < 25){
            m.mass = 5;
            moons.push(new Moon(m.pos.x +10,m.pos.y +10, m.vel.x, m.vel.y, 5))

      }
      if (hit && random(100) < 0.1 && moons.length < 300){
        m.health = m.health + 0.1;
            if(m.health > 2){
                m.health = 0;
                m.mass = 5;
                moons.push(new Moon(m.pos.x +10,m.pos.y +10, m.vel.x, m.vel.y, 5))
              }
        }
    }
  }
}
