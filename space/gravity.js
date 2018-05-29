var planet;
var obj_num = 10;
var obj_array = [];

function setup(WEBGL) {
  createCanvas(400, 400);
  planet = createVector(200,200);
  background(0);

  for (var i = 0; i < obj_num; i++){
  	let x = random(0, 400);
    let y = random(0, 400);
    obj_array[i] = new Obj(x,y);
  }
}

function draw() {
  stroke(0);
  strokeWeight(4);

  for(o of obj_array){
    o.attracted(planet);
  	o.show();
    o.update();
  }
}
