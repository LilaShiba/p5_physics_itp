var moons = [];
var gravity;

function setup(){
  createCanvas(1000,1000);
  gravity = new Gravity();
  for (var i = 0; i < 7; i++){
    var x = random(200, 400);
    var y = random(0,50);
    moons[i] = new Moon(x,y,1);
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

      if(hit && moons.length < 100 && random(1) < 0.05){
        m.health = m.health + 0.1;
        if(m.health > 0.8){
          var timer = 4;
          if(timer % 60 == 0 && timer > 0){
            timer --;
          }
          if (timer == 0); {
            m.health = 0;
            var timer = 5;
            moons.push(new Moon(m.pos.x +10,m.pos.y +10, 1))
          }
        }
      }
    }
  }
}
