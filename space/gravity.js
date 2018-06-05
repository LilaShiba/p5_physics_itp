var planet;
var obj_num = 100;
var obj_array = [];

function setup(WEBGL) {
  createCanvas(500, 500);
  planet = createVector(250,250);
  background(0);

  for (var i = 0; i < obj_num; i++){
  	let x = random(200, 400);
    let y = random(300, 400);
    obj_array[i] = new Obj(x,y);
  }
}



function draw() {
  stroke(0);
  strokeWeight(4);
  ellipse(planet.x, planet.y, 40,40);
  for(o of obj_array){
    o.attracted(planet);
  	o.show();
    o.update();
    o.hit(obj_array, planet);
    if( o.collide(planet) ){
      obj_array.push(new Obj(x,y));
    };
  }
}
