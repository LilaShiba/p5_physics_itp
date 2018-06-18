var ship;
var asteriods = [];
var lasers = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  ship = new Ship();
  for (var i = 0; i < 10; i++){
    asteriods.push(new Asteroid());
}

}

function draw(){
  background(0);
  ship.render();
  ship.turn();
  ship.update();
  ship.edges();

  for (x in asteriods){
    if (ship.hits(asteriods[x])){
      console.log('ouch')
    }
    asteriods[x].render();
    asteriods[x].update();
    asteriods[x].edges();
  }

  for (var i = lasers.length-1; i >= 0; i--){
    lasers[i].render();
    lasers[i].update();
    for (var x = asteriods.length -1; x >= 0; x-- ){
      if (lasers[i].hits(asteriods[x])){
        if (asteriods[x].r > 15){
        var newAsteroids = asteriods[x].breakup();
        asteriods = asteriods.concat(newAsteroids);
      } else {

      }
        asteriods.splice(x,1);
        lasers.splice(i,1);
        break;

      }
    }
  }
}

function keyReleased(){
ship.setRotation(0);
ship.boosting(false);
}

function keyPressed(){
  if (key == ' '){
    lasers.push(new Laser(ship.pos, ship.heading));
  } else if (keyCode == RIGHT_ARROW){
    ship.setRotation(0.08);
  } else if (keyCode == LEFT_ARROW){
    ship.setRotation(-0.08);
  } else if (keyCode == UP_ARROW){
    ship.boost();
    ship.boosting(true);
  }
}
