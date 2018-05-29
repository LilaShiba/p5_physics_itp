var planet = [];
var obj_num = 10;
var obj_array = [];

function setup(WEBGL) {
  createCanvas(500, 500);
// create objs
  for (var i = 0; i < obj_num; i++){
  	let x = random(0, 400);
    let y = random(0, 400);
    obj_array.push(new Obj(250,250));
  }
// create planets
  for (var i = 0; i < 10; i++){
    planet.push(createVector(random(width), random(height)));
  }
  background(51);
}


function draw() {
  stroke(255);
  strokeWeight(4);

  for (var i = 0; i < planet.length; i++){
    point(planet[i].x, planet[i].y);
  }
  for (var i = 0; i <obj_array.length; i++){
    var particle = obj_array[i];
    for (var j = 0; j < planet.length; j ++){
      particle.attracted(planet[j]);
    }
    particle.update();
    particle.show();
  }
}
